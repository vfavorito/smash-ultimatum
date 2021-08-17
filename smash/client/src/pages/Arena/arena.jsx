import { React, useEffect, useState } from "react";
import API from "../../utils/API";
import SquadMaker from "../../components/SquadMaker/squadMaker";
import { Container, Row, Col } from "react-bootstrap";
import "./arena.css";

function Arena() {
    const lobbyCode = window.location.pathname.substr(-6);
    const [arenaData, setArenaData] = useState();

    useEffect(() => {
        API.getArenaByLobbyCode(lobbyCode)
            .then((res) => {
                setArenaData({
                    LobbyCode: res.data.lobbyCode,
                    brawlers: res.data.brawlers,
                    participants: res.data.participants.length
                })
            })
    }, []);
    if (arenaData !== undefined) {
        return (
            <Container id="arena" fluid>
                <Row id="header">
                    <Col sm={12} md={9}>
                        <h1 id="header1">Welcome to Smash Town</h1>
                    </Col>
                    <Col sm={12} md={3}>
                        <h1 id="header2">Population: {arenaData.participants}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="smallHeaders" sm={12} md={12}>
                        <h4>Lobby Code: {arenaData.LobbyCode}</h4>
                    </Col>
                    <Col className="smallHeaders" sm={12} md={12}>
                        <h4>{arenaData.brawlers} Man Iron Man</h4>
                    </Col>
                </Row>
                <Row>
                    <SquadMaker />
                </Row>
            </Container>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

export default Arena;