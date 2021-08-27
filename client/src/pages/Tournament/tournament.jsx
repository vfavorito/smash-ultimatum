import React from "react";
import Bracket from "../../components/Bracket/bracket";
import { Container, Row, Col } from "react-bootstrap";
import "./tournament.css"


function Tournament() {

    const lobbyCode = window.location.pathname.substr(-6);
    return (
        <Container fluid id="tournamentPage">
            <Row>
                <Col sm={12} md={12}>
                    <h1>Tournament Page</h1>
                    <h2>LobbyCode: {lobbyCode}</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12}>
                    <Bracket />
                </Col>

            </Row>


        </Container>
    )
}

export default Tournament;