import { React, useEffect, useState, useContext } from "react";
import UserContext from "../../utils/UserContext";
import Modal from "react-modal";
import API from "../../utils/API";
import { Container, Row, Col } from "react-bootstrap";
import "./squadMaker.css";

// the big daddy function that does all the arena page magic

function SquadMaker() {
    // getting this arenas lobbyCode
    const lobbyCode = window.location.pathname.substr(-6);
    // getting currently logged in users name
    const { name } = useContext(UserContext);
    // array of all participants currently in this arena
    const [participants, setParticipants] = useState([]);
    // entire arena object from database
    const [arenaData, setArenaData] = useState({});
    // winner object updated when conditions have been met
    const [winner, setWinner] = useState({
        name: "",
        portrait: ""
    });
    // state of whether modal should be displayed or not
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // changing the modal display status
    const modalToggle = () => {
        setModalIsOpen(true);
    };
    // custom css tweaks of modal
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "rgb(189, 189, 189)",
        }
    };
    // reroute to dashboard after clicking exit arena button
    const exitArena = () => {
        window.open("http://localhost:3000/dashboard", "_self");
    }
    // starts grabbing the arena database object every 4 seconds and updates the arena data on the front end
    useEffect(() => {
        let myInterval = setInterval(() => {
            API.getArenaByLobbyCode(lobbyCode)
                .then((res) => {
                    setParticipants(res.data.participants)
                    setArenaData({
                        brawlers: res.data.brawlers,
                        lobbyCode: res.data.lobbyCode,
                        participants: res.data.participants,
                        admin: res.data.admin
                    });
                })
        }, 4000)
        return () => {
            clearInterval(myInterval)
        };
    }, []);
    // every time the arena data is updated on the front end check to see if there is a winner yet if there is display modal
    useEffect(() => {
        participants.forEach(participant => {
            if (parseInt(participant.wins) === parseInt(arenaData.brawlers)) {
                setWinner({ ...winner, name: participant.name, portrait: participant.portrait })
                modalToggle();
            }
        })
    }, [arenaData])
    // magic function that is triggerd everytime the victorious button is clicked
    const updater = (event) => {
        // whoever was victorious assign that participants data to variables
        const participantName = event.target.attributes.name.value;
        const participantData = participants.find(participant => participant.name === participantName);
        const participantSquad = participantData.squad;
        // for every participant in the arena get their user object from the database
        participants.forEach((participant) => {
            const winningCharacter = participant.currCharacter;
            //grabbing the users object from database
            API.getUserByName(participant.name)
                .then(async (res) => {
                    try {
                        // if this participant was the victorious one find the charcter they were victorious with
                        // in their user document from database and add one to their wins value
                        if (res.data.name === participantName) {
                            await res.data.characterStats.forEach(character => {
                                if (character.name === winningCharacter) {
                                    character.wins = character.wins + 1;
                                };
                            });
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            // update the winners user document in database with the +1 win on that character
                            API.updateUserByName(res.data.name, newUserData);
                        }
                        // for the non victorious participants
                        else {
                            // find the character they lost with in the users database document and add one loss to their loss value
                            await res.data.characterStats.forEach(character => {
                                if (character.name === participant.currCharacter) {
                                    character.losses = character.losses + 1;
                                };
                            });
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            //updating the losers user document in database with +1 loss on their character
                            API.updateUserByName(res.data.name, newUserData);
                        }
                    }
                    catch (err) {
                        throw err;
                    }
                })
        })
        // setting participants wins and what characters should be hidden if their is not a winner yet
        if (participantData.wins + 1 !== participantData.squad.length) {
            for (let i = 0; i < participantData.wins + 1; i++) {
                participantSquad[i].didWin = true;
            }
            if (participantSquad[participantData.squad.length - 1].hidden === true) {
                for (let i = 0; i < participantData.wins + 2; i++) {
                    participantSquad[i].hidden = false;
                    const index = participants.findIndex(participant => participant.name === participantName);
                    arenaData.participants[index].currCharacter = participantSquad.find(character => character.didWin === false).name;
                }
            }
        }
        // if their is a winner update the users documents in the database
        else {
            participantSquad[participantSquad.length - 1].didWin = true;
            participants.forEach(participant => {
                // getting the user document from database
                API.getUserByName(participant.name)
                    .then((res) => {
                        // if this user was the winner add a win to their user document and update in database
                        if (res.data.name === participantName) {
                            const newData = {
                                ironManStats: { wins: res.data.ironManStats.wins + 1, losses: res.data.ironManStats.losses }
                            };
                            API.updateUserByName(res.data.name, newData);
                        }
                        // if the user was not the winner add a loss to their user document and update in database
                        else {
                            const newData = {
                                ironManStats: { wins: res.data.ironManStats.wins, losses: res.data.ironManStats.losses + 1 },
                            };
                            API.updateUserByName(res.data.name, newData);
                        }
                        // setting the winner state and telling the winner modal to display
                        setWinner({ ...winner, name: participantData.name, portrait: participantData.portrait })
                        modalToggle();
                    })
            })
        }
        // finding the victorios participant in participants array
        const index = participants.findIndex(participant => participant.name === participantName);
        participants[index] = participantData;
        // adding a win to the winning participant
        arenaData.participants[index].wins++;
        // updating the arena with the winning participants data 
        setArenaData({ ...arenaData, participants: participants });
        API.updateArena(lobbyCode, arenaData);
    }
    // if participants have been set
    if (participants !== undefined) {
        // if the user has admin status meaning they created the arena display the rosters with the victorious buttons
        if (name === arenaData.admin) {
            return (
                <Container fluid>
                    {participants.map((participant) => {
                        return (
                            <Row id="roster">
                                <Row>
                                    <Col sm={1} md={1}>
                                        <button name={participant.name} onClick={updater} id="victoryButton" >Victorious</button>
                                    </Col>
                                    <Col id="userHeader" sm={10} md={10}>
                                        <img id="userPortrait" src={participant.portrait} alt="participants portrait" />
                                        <h3 id="userName">{participant.name}'s Roster</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col id="characterList" sm={12} md={12} >
                                        {participant.squad.map(character => {
                                            if (character.hidden === true && character !== participant.squad[0]) {
                                                return (
                                                    <div className="hiddenContainer">
                                                        <div className="hidden" />
                                                        <p>???</p>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div className="character">
                                                        <img id="characterPortrait" src={character.portrait} alt="characters portrait" />
                                                        <p id="characterName">{character.name}</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                        <Modal
                                            isOpen={modalIsOpen}
                                            style={customStyles}
                                            contentLabel="Modal"
                                            id="winnerModal">
                                            <h1>Congratulations!</h1>
                                            <br />
                                            <h2> {winner.name} </h2>
                                            <br />
                                            <img alt="winner portrait" src={winner.portrait} id="winnerPortrait" />
                                            <br />
                                            <br />
                                            <h3> You Are The Smash King</h3>
                                            <br />
                                            <button
                                                onClick={exitArena}
                                            >Exit Arena</button>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Row>
                        )
                    })}
                </Container>

            )
        }
        // if the user has joined the arena but does not have admin status display the rosters without the victorious buttons
        else {
            return (
                <Container fluid>
                    {participants.map((participant) => {
                        return (
                            <Row id="roster">
                                <Row>
                                    <Col id="userHeader" sm={12} md={12}>
                                        <img id="userPortrait" src={participant.portrait} alt="participants portrait" />
                                        <h3 id="userName">{participant.name}'s Roster</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col id="characterList" sm={12} md={12} >
                                        {participant.squad.map(character => {
                                            if (character.hidden === true && character !== participant.squad[0]) {
                                                return (
                                                    <div className="hiddenContainer">
                                                        <div className="hidden" />
                                                        <p>???</p>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div className="character">
                                                        <img id="characterPortrait" src={character.portrait} alt="characters portrait" />
                                                        <p id="characterName">{character.name}</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                        <Modal
                                            isOpen={modalIsOpen}
                                            style={customStyles}
                                            contentLabel="Modal"
                                            id="winnerModal">
                                            <h1>Congratulations!</h1>
                                            <br />
                                            <h2> {winner.name} </h2>
                                            <br />
                                            <img alt="winner portrait" src={winner.portrait} id="winnerPortrait" />
                                            <br />
                                            <br />
                                            <h3> You Are The Smash King</h3>
                                            <br />
                                            <button
                                                onClick={exitArena}
                                            >Exit Arena</button>
                                        </Modal>
                                    </Col>
                                </Row>
                            </Row>
                        )
                    })}
                </Container>

            )
        };
    }
    else {
        return <></>
    }
}
export default SquadMaker;