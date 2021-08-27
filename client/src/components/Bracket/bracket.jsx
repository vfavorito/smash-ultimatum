import { React, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import API from "../../utils/API";
function Bracket() {

    const lobbyCode = window.location.pathname.substr(-6);
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        API.getTournamentByLobbyCode(lobbyCode)
            .then((res) => {
                setParticipants(res.data.participants)
            });
    }, [])

    if (participants.length > 0) {
        return (
            <Container>
                <h1>Bracket</h1>
                <Row>
                    <Col sm={4} md={4}>
                        {participants.map((participant) => {
                            return (
                                <div>
                                    <p>{participant.name}</p>
                                    <img alt="participant character" src={participant.character.portrait} />
                                </div>
                            )
                        })}
                    </Col>
                </Row>

            </Container>
        )
    }
    else {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <h1>Waiting for Participants</h1>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Bracket;