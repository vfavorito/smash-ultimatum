import { React, useEffect, useState, useContext, useRef } from "react";
import UserContext from "../../utils/UserContext";
import Modal from "react-modal";
import API from "../../utils/API";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./squadMaker.css";


// function that does all the arena page magic

function SquadMaker() {
    // getting this arenas lobbyCode
    const lobbyCode = window.location.pathname.substr(-6);
    // getting currently logged in users name
    const { name } = useContext(UserContext);
    const permanentName = useRef();
    permanentName.current = name
    // array of all participants currently in this arena
    const [participants, setParticipants] = useState([]);
    // entire arena object from database
    const [arenaData, setArenaData] = useState({});
    // winner object updated when conditions have been met
    const [winner, setWinner] = useState({
        name: "",
        portrait: ""
    });
    const [winnerModalIsOpen, setWinnerModalIsOpen] = useState(false);
    const [voteModalIsOpen, setVoteModalIsOpen] = useState(false);
    const [roundWinner, setRoundWinner] = useState("");
    const vote = useRef();
    const didVote = useRef();
    // changing the modal display status
    const winnerModalToggle = () => {
        setWinnerModalIsOpen(true);
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
        window.open("https://smash-ultimatum.herokuapp.com/dashboard", "_self");
    };
    // starts grabbing the arena database object every 4 seconds and updates the arena data on the front end

    useEffect(() => {
        let myInterval = setInterval(async () => {
            try {
                await API.getArenaByLobbyCode(lobbyCode)
                    .then(async (res) => {
                        try {
                            setParticipants(res.data.participants)
                            setArenaData({
                                brawlers: res.data.brawlers,
                                lobbyCode: res.data.lobbyCode,
                                participants: res.data.participants,
                                admin: res.data.admin,
                                vote: res.data.vote
                            });
                            if (permanentName.current !== res.data.admin) {
                                voteTally();
                            };
                            if (res.data.vote.yays + res.data.vote.nays === 0 && res.data.vote.voteOpen === false) {
                                setVoteModalIsOpen(false);
                            };
                            await statusCheck();
                        }
                        catch (err) {
                            throw err;
                        };
                    });
            }
            catch (err) {
                throw err;
            };
        }, 2000);
        return () => {
            clearInterval(myInterval);
        };
    }, []);

    const statusCheck = async () => {
        try {
            await API.getArenaByLobbyCode(lobbyCode)
                .then(async (res) => {
                    try {
                        if (res.data.vote.voteOpen === true) {
                            setRoundWinner(res.data.roundWinner);
                            setVoteModalIsOpen(true);
                        }
                        else {
                            setVoteModalIsOpen(false);
                            didVote.current = false;
                        };
                        res.data.participants.forEach(participant => {
                            if (parseInt(participant.wins) === parseInt(res.data.brawlers)) {
                                setWinner({ ...winner, name: participant.name, portrait: participant.portrait });
                                winnerModalToggle();
                            };
                        });
                        if (res.data.participants.length > 1) {
                            if (res.data.vote.yays + res.data.vote.nays === res.data.participants.length - 1) {
                                if (res.data.vote.nays === 0 && permanentName.current === res.data.admin) {
                                    updater(res.data.roundWinner);
                                    await API.updateArena(lobbyCode, { vote: { voteOpen: false, yays: 0, nays: 0 } })
                                    setVoteModalIsOpen(false)
                                }
                                else {
                                    API.updateArena(lobbyCode, { vote: { voteOpen: false, yays: 0, nays: 0 } });
                                };
                            };
                        };
                    }
                    catch (err) {
                        throw err;
                    };
                });
        }
        catch (err) {
            throw err;
        };
    };

    const voteTally = async () => {
        try {
            if (vote.current === "Yes") {
                await API.getArenaByLobbyCode(lobbyCode)
                    .then(async (res) => {
                        try {
                            await API.updateArena(lobbyCode,
                                { vote: { voteOpen: true, yays: res.data.vote.yays + 1, nays: res.data.vote.nays } })
                                .then((res) => {

                                    vote.current = "";
                                });
                        }
                        catch (err) {
                            throw err;
                        };

                    });
            }
            else if (vote.current === "No") {
                await API.getArenaByLobbyCode(lobbyCode)
                    .then(async (res) => {
                        try {
                            await API.updateArena(lobbyCode,
                                { vote: { voteOpen: true, yays: res.data.vote.yays, nays: res.data.vote.nays + 1 } });

                            vote.current = ""
                        }
                        catch (err) {
                            throw err;
                        };

                    });
            };
        }
        catch (err) {
            throw err;
        };

    };

    const openVote = (event) => {
        API.updateArena(lobbyCode, { roundWinner: event.target.attributes.name.value, vote: { voteOpen: true, yays: 0, nays: 0 } });
    }

    // function that is triggerd everytime a unanimous yes vote is given
    const updater = (roundWinner) => {
        API.getArenaByLobbyCode(lobbyCode)
            .then((res) => {
                const arenaParticipants = res.data.participants
                const winningParticipantName = roundWinner;
                const winningParticipantData = arenaParticipants.find(participant => participant.name === winningParticipantName);
                const winningParticipantSquad = winningParticipantData.squad;

                const index = arenaParticipants.findIndex(participant => participant.name === winningParticipantName);
                arenaParticipants[index].wins++;

                // for every participant in the arena get their user object from the database
                arenaParticipants.forEach((participant) => {
                    const winningCharacter = participant.currCharacter;
                    //grabbing the users object from database
                    API.getUserByName(participant.name)
                        .then(async (res) => {
                            try {
                                // if this participant was the victorious one find the charcter they were victorious with
                                // in their user document from database and add one to their wins value
                                if (res.data.name === winningParticipantName) {
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
                if (winningParticipantData.wins !== winningParticipantData.squad.length) {
                    for (let i = 0; i < winningParticipantData.wins; i++) {
                        winningParticipantSquad[i].didWin = true;
                    }
                    if (winningParticipantSquad[winningParticipantData.squad.length - 1].hidden === true) {
                        for (let i = 0; i < winningParticipantData.wins + 1; i++) {
                            winningParticipantSquad[i].hidden = false;
                            winningParticipantData.currCharacter = winningParticipantSquad.find(character => character.didWin === false).name;
                            arenaParticipants[index] = winningParticipantData;
                            API.updateArena(lobbyCode, { participants: arenaParticipants });
                        }
                    }
                }
                // if their is a winner update the users documents in the database
                else {
                    winningParticipantSquad[winningParticipantSquad.length - 1].didWin = true;
                    API.updateArena(lobbyCode, { participants: arenaParticipants });
                    arenaParticipants.forEach(participant => {
                        // getting the user document from database
                        API.getUserByName(participant.name)
                            .then((res) => {
                                // if this user was the winner add a win to their user document and update in database
                                if (res.data.name === winningParticipantName) {
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
                                setWinner({ ...winner, name: winningParticipantData.name, portrait: winningParticipantData.portrait })
                                winnerModalToggle();
                            })
                    })
                }
            })

    }
    // if participants have been set
    if (participants !== undefined) {
        // if the user has admin status meaning they created the arena display the rosters with the victorious buttons
        if (name === arenaData.admin && participants.length > 1) {
            return (
                <Container fluid>
                    {participants.map((participant) => {
                        return (
                            <Row id="roster">
                                <Row>
                                    <Col sm={1} md={1}>
                                        <button name={participant.name} onClick={openVote} id="victoryButton" >Victorious</button>
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
                                            isOpen={winnerModalIsOpen}
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
        else if (participants.length > 1) {
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
                                            isOpen={winnerModalIsOpen}
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
                                        <Modal
                                            isOpen={voteModalIsOpen}
                                            style={customStyles}
                                            contentLabel="Modal"
                                            id="voteModal">
                                            {didVote.current
                                                ?
                                                <div>
                                                    <h1>Thank You For Your Vote!</h1>
                                                    <h3>One Moment Please</h3>
                                                    <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                    <h3>All Votes Are Being Tallied</h3>
                                                </div>
                                                :
                                                <div>
                                                    <h1>Did {roundWinner}</h1>
                                                    <h1>Win That Round?</h1>
                                                    <br />
                                                    <button
                                                        id="yesButton"
                                                        onClick={() => {
                                                            vote.current = "Yes"
                                                            didVote.current = true
                                                        }}
                                                    > Yes
                                                        <i class="fas fa-thumbs-up"></i>
                                                    </button>
                                                    <button
                                                        id="noButton"
                                                        onClick={() => {
                                                            vote.current = "No"
                                                            didVote.current = true
                                                        }}
                                                    >No
                                                        <i class="fas fa-thumbs-down"></i>
                                                    </button>
                                                </div>
                                            }
                                        </Modal>
                                    </Col>
                                </Row>
                            </Row>
                        )
                    })}
                </Container>
            );
        }
        else {
            return (
                <Container>
                    <Row>
                        <Col sm={12} md={12} id="waitingScreen">
                            <h1>Waiting For Someone To Join Your Arena</h1>
                            <br />
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Col>
                    </Row>
                </Container>
            );
        };
    };
}
export default SquadMaker;