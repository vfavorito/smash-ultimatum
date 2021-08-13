import { React, useEffect, useState } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "react-bootstrap";
import "./squadMaker.css";

function SquadMaker() {
    const lobbyCode = window.location.pathname.substr(-6);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        API.getArenaByLobbyCode(lobbyCode)
            .then((res) => {
                setParticipants(...participants, res.data.participants)
            })
    }, []);
    useEffect(() => {

    })

    if (participants !== undefined) {
        return (
            <Container>
                {participants.map((participant) => {
                    return (
                        <Row id="roster">
                            <Col sm={1} md={1}>
                                <button id="victoryButton">Victorious</button>
                            </Col>
                            <Col id="userHeader" sm={11} md={11}>
                                <img id="userPortrait" src={participant.portrait} alt="competitors portrait" />
                                <h3 id="userName">{participant.name}'s Roster</h3>
                            </Col>
                            <Row>
                                <Col id="characterList" sm={12} md={12} >
                                    {participant.squad.map(character => {
                                        if (character.didWin === false && character !== participant.squad[0]) {
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
                                </Col>
                            </Row>
                        </Row>
                    )
                })}
            </Container>
        )
    }
    else {
        return <h1>Error</h1>
    }
}


export default SquadMaker;