import { React, useEffect, useState } from "react";
import API from "../../utils/API";
import SquadMaker from "../../components/SquadMaker/squadMaker";
import { Container, Row, Col } from "react-bootstrap";
import "./arena.css";
import Footer from "../../components/Footer/footer"

function Arena() {
    // getting lobbycode from url
    const lobbyCode = window.location.pathname.substr(-6);
    // setting up state to hold arena data
    const [arenaData, setArenaData] = useState();
    // reroute to dashboard if leave arena button is clicked
    const leaveArena = () => {
        window.open("https://smash-ultimatum.herokuapp.com/dashboard", "_self");
    };
    // getting arena data by lobby code and storing it in arenaData state
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
            <div>
                <Container id="arena" fluid>
                    <Row id="header">
                        <Col sm={12} md={10}>
                            <h1 id="header1">Welcome to Smash Town</h1>
                        </Col>
                        <Col sm={12} md={2}>
                            <button
                                id="leaveButton"
                                onClick={leaveArena}
                            >Leave Arena</button>
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
                    <Row id="rosterWindow">
                        <SquadMaker />
                    </Row>
                </Container>
                <Footer />
            </div>
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