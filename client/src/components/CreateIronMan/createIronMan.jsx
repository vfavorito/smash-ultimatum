import { React, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-modal";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import CharData from "../../utils/SmashCharacters.json";
import "./createIronMan.css";

function CreateIronMan(props) {
    // variables holding currently logged in user data
    const { name, portrait, LobbyCode } = useContext(UserContext);
    // variable for whether the modal should be displayed
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
    // state to hold team size which is changed on input change in modal
    const [arenaState, setArenaState] = useState({
        brawlers: "",
    });
    // function that is run when create arena button is clicked
    const launchArena = () => {
        const lobbyCode = Date.now().toString().substring(Date.now().toString().length - 6);
        // function that generates an array of random numbers 1-72 with no repeats the length of arena team size
        const roster = (brawlers) => {
            const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
                "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",
                "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47",
                "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63",
                "64", "65", "66", "67", "68", "69", "70", "71", "72"];
            const array = [];
            for (let i = 0; i < brawlers; i++) {
                const ranNum = Math.floor(Math.random() * (71 - i));
                array.push(numbers[ranNum]);
                numbers.splice(ranNum, 1);
            }
            return array;
        }
        // assigning array of random numbers to the variable squadIds
        const squadIds = roster(arenaState.brawlers);
        // inserting the actual character data for each individual Id 
        const squad = squadIds.map(squadId => CharData.characters.find(character => character.id === squadId));
        // arena object that will be used to create the arena
        const arenaData = {
            brawlers: arenaState.brawlers,
            lobbyCode: lobbyCode.substring(lobbyCode.length - 6),
            participants: { name: name, portrait: portrait, squad: squad, wins: 0, currCharacter:squad[0].name },
            admin:name,
            vote:{voteOpen:false, yays:0, nays:0}
        }
        // saving the arena to the database
        API.saveArena(arenaData, lobbyCode)
            .then(async (res) => {
                try {
                    await props.updateContext(res.data.lobbyCode, res.data.participants, res.data.brawlers)
                    history.push("/arena/" + lobbyCode)
                }
                catch (err) {
                    throw err
                }
            });
    }

    // function run everytime there is an input change on the input bar in modal
    const handleInputChange = (event) => {
            setArenaState({ ...arenaState, brawlers: event.target.value })
    }

    return (
        <Container>
            <Row>
                <Col sm={12} md={12}>
                    <div id="createIronMan">
                        <h1>Create Iron Man</h1>
                        <h4 id="createText">Create An Iron Man Arena For Others To Join And Set The Team Size</h4>
                        <Modal
                            isOpen={modalIsOpen}
                            style={customStyles}
                            contentLabel="Modal">
                            <button
                                onClick={modalToggle}>Close
                            </button>
                            <br />
                            <br />
                            <h2>Create Your Arena</h2>
                            <br />
                            <h3>How Many Brawlers on a Squad?</h3>
                            <input
                                id="brawlwers"
                                type="number"
                                min="2"
                                onChange={handleInputChange}
                                required />
                            <br />
                            <br />
                            <button
                                onClick={launchArena}
                            >Go Smashing</button>
                        </Modal>
                        <button className="createButton" onClick={modalToggle}>Smash Time</button>
                    </div >
                </Col>
            </Row>
        </Container>
    )
}

export default CreateIronMan;