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

    if (participants !== undefined) {
        return (
            <Container>
                {participants.map((participant) => {
                    return (
                        <Row id="roster">
                            <Col id="userHeader" sm={12} md={12}>
                                <img id="userPortrait" src={participant.portrait} alt="competitors portrait" />
                                <h3 id="userName">{participant.name}'s Roster</h3>
                            </Col>
                            <Row>
                                <Col id="characterList" sm={12} md={12} >
                                    {participant.squad.map(character =>
                                        <div id="character">
                                            <img id="characterPortrait" src={character.portrait} alt="characters portrait" />
                                            <p id="characterName">{character.name}</p>
                                        </div>
                                    )}
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