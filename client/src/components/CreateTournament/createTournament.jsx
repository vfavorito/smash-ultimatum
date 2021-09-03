import { React, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-modal";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import CharData from "../../utils/SmashCharacters.json";
import Byes from "./byes.json";
import "./createTournament.css";

function CreateTournament(props) {

    const { name, portrait, LobbyCode } = useContext(UserContext);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    // for routing to arena page after creating arena
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
    // state to hold number of participants in tournament
    const [tourneyState, setTourneyState] = useState({
        participants: "4",
        userCharacter: ""
    });
    const [currCharacter, setCurrCharacter] = useState({
        character: {
            portrait: "",
            quote: ""
        },
        isSelected: false
    });

    const handleInputChange = (event) => {
        console.log(event)
        setTourneyState({ ...tourneyState, participants: event.target.innerText})
    };
    const launchTourney = () => {
        if(parseInt(tourneyState.participants) > 1 && currCharacter.isSelected === true){
        let tournamentParticipants;
            if(tourneyState.participants === "4"){
                tournamentParticipants = Byes.four;
            }
            else{
                tournamentParticipants = Byes.eight;
            }
        const lobbyCode = Date.now().toString().substring(Date.now().toString().length - 6);
        const character = CharData.characters.find(character => character.id === tourneyState.userCharacter);
        const tourneyData = {
            lobbyCode: lobbyCode,
            tournamentSize: tourneyState.participants,
            participants: [{ name: name, portrait: portrait, character: character }, ...tournamentParticipants],
            admin: name
        };
        API.createTournament(lobbyCode, tourneyData)
            .then(async (res) => {
                try {
                    await props.updateContext(res.data.lobbyCode, res.data.participants, res.data.brawlers)
                    history.push("/tournament/" + lobbyCode)
                }
                catch (err) {
                    throw err
                }
            });
        }
        else{
            alert("Please Select A Character Before Creating A Tournament")
        }
    };

    useEffect(() => {
        if (tourneyState.userCharacter.length >= 1) {
            const character = CharData.characters.find(character => character.id === tourneyState.userCharacter);
            setCurrCharacter({ ...currCharacter, character: character, isSelected: true });
        }
    }, [tourneyState])

    return (
        <Container>
            <Row>
                <Col sm={12} md={12}>
                    <div id="createTournament">
                        <h1>Create Tournament</h1>
                        <h4 id="createText">Create A Tournament And Select Your Fighter</h4>
                        <Modal
                            id="createTourneyModal"
                            isOpen={modalIsOpen}
                            style={customStyles}
                            contentLabel="Modal">
                            <button
                                onClick={modalToggle}>Close
                            </button>
                            <br />
                            <br />
                            <h3>How Many Participating In Your Tournament</h3>
                            <button
                            id="sizeButton"
                            onClick={handleInputChange}>4</button>
                            <button
                            id="sizeButton"
                            onClick={handleInputChange}>8</button>
                            <h3>Current Tournament Size: {tourneyState.participants}</h3>
                            <h3>Chose Your Character:</h3>
                            {(currCharacter.isSelected === true)
                                    ?
                                    <div id="characterDisplay">
                                        <img alt="selected character" src={currCharacter.character.portrait} id="currCharacter"/>
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
                            >Create Tournament</button>
                        </Modal>
                        <button className="createButton" onClick={modalToggle}>Smash Time</button>
                    </div >
                </Col>
            </Row>
        </Container>
    )
}

export default CreateTournament;