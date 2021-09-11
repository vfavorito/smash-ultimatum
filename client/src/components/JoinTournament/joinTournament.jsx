import { React, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Modal from "react-modal";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import CharData from "../../utils/SmashCharacters.json";
import "./joinTournament.css";

function JoinTournament() {
    const { name, portrait } = useContext(UserContext);
    const [lobbyCode, setLobbyCode] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currCharacter, setCurrCharacter] = useState({
        character: {
            portrait: "",
            quote: ""
        },
        isSelected: false
    });
    const [tourneyState, setTourneyState] = useState({
        userCharacter: ""
    });
    const history = useHistory();
    // function for changing modal display status
    const modalToggle = () => {
        if (modalIsOpen === true) {
            setModalIsOpen(false);
        }
        else {
            setModalIsOpen(true);
        }
    }
    // css tweaks of modal
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "rgb(189, 189, 189)"
        }
    };
    const handleInputChange = (event) => {
        setLobbyCode(event.target.value);
    };

    const launchTourney = () => {

        API.getTournamentByLobbyCode(lobbyCode)
            .then((res) => {
                if (res.data !== null) {
                    // if this user is already a participant in that tournament reroute to the tournament page
                    if (res.data.participants.findIndex(participant => participant.name === name) !== -1) {
                        history.push("/tournament/" + lobbyCode);
                        return;
                    }
                    else if(currCharacter.isSelected === true){
                        const character = CharData.characters.find(character => character.id === tourneyState.userCharacter);
                        const userData = {
                            name: name,
                            portrait: portrait,
                            character: character
                        };
                        const index = res.data.participants.findIndex(el => el.name === "Bye");
                        if (index !== -1) {
                            res.data.participants[index] = userData;
                        };
                        const newTournamentData = {
                            participants: [...res.data.participants],
                            lobbyCode: res.data.lobbyCode,
                            tournamentSize: res.data.tournamentSize,
                            admin: res.data.admin
                        }
                        // updating the arena in database then rerouting to arena page
                        API.addTournamentParticipant(lobbyCode, newTournamentData)
                            .then((res) => {
                                history.push("/tournament/" + lobbyCode)
                            })
                    }
                    else{
                        alert("Please Select A Character Before Joining Tournament")
                    }
                }
                // if tournament was not found alert tournament not found
                else {
                    alert("Tournament Not Found!")
                }

            })

    };
    useEffect(() => {
        if (tourneyState.userCharacter.length >= 1) {
            const character = CharData.characters.find(character => character.id === tourneyState.userCharacter);
            setCurrCharacter({ ...currCharacter, character: character, isSelected: true });
        }
    }, [tourneyState])

    return (
        <Container id="joinTournament">
            <Row>
                <Col sm={12} md={12}>
                    <div>
                        <h1>Join A Tournament</h1>
                        <h4 id="joinText">Join A Tournament By Entering Lobby Code And Selecting Your Fighter</h4>
                        <br />
                        <Modal
                            id="joinTournamentModal"
                            isOpen={modalIsOpen}
                            style={customStyles}
                            contentLabel="Modal">
                            <button
                                onClick={modalToggle}>Close
                            </button>
                            <br />
                            <br />
                            <h2>Join A Tournament</h2>
                            <br />
                            <h3>Enter Tournament Lobby Code</h3>
                            <input
                                type="number"
                                min="6"
                                onChange={handleInputChange}
                                required />
                            <br />
                            <br />
                            <h3>Chose Your Character:</h3>
                            {(currCharacter.isSelected === true)
                                ?
                                <div id="characterDisplay">
                                    <img alt="selected character" src={currCharacter.character.portrait} id="currCharacter" />
                                    <h5>{currCharacter.character.quote}</h5>
                                </div>
                                :
                                <div />
                            }
                            <div id="tourneyCharSelect">
                                {CharData.characters.map(character => {
                                    return (
                                        <div className="charCard"
                                            key={character.id}
                                            onClick={() => {
                                                setTourneyState({ ...tourneyState, userCharacter: character.id })
                                            }}>
                                            <img alt={character.name}
                                                src={character.portrait}
                                                className="charPic" />
                                            <p className="charText">{character.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <button
                                onClick={launchTourney}
                            >Join Tournament</button>
                        </Modal>
                        <button id="joinButton" onClick={modalToggle}>Join a Tournament</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default JoinTournament;