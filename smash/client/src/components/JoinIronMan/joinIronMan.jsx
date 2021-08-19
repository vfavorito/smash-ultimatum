import { React, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import CharData from "../../utils/SmashCharacters.json";
import "./joinIronMan.css";

function IronMan() {

    const [LobbyCode, setLobbyCode] = useState("");
    const { name, portrait } = useContext(UserContext);
    const history = useHistory();

    const handleInputChange = (event) => {
        setLobbyCode(event.target.value);
    }

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

    const joinArena = () => {
        API.getArenaByLobbyCode(LobbyCode)
            .then((res) => {
                console.log(res, "first api call res")
                const squadIds = roster(res.data.brawlers);
                const squad = squadIds.map(squadId => CharData.characters.find(character => character.id === squadId));
                const newArenaData = {
                    brawlers: res.data.brawlers,
                    lobbyCode: res.data.lobbyCode,
                    participants: [...res.data.participants, { name: name, portrait: portrait, squad: squad, wins: 0,currCharacter:squad[0].name }]
                }
                API.addArenaParticipant(LobbyCode, newArenaData)
                    .then((res) => {
                        console.log(res)
                        history.push("/arena/" + LobbyCode)
                    })
            })
    }

    return (
        <Container id="joinContent">
            <Row>
                <Col sm={12} md={12}>
                    <div>
                    <h1>Join</h1>
                        <h4 id="joinText">Join An Iron Man Arena By Entering The Arena's Lobby Code</h4>
                        <input onChange={handleInputChange} placeholder="Lobby Code" />
                        <br />
                        <button id="joinButton" onClick={joinArena}>Join</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default IronMan;