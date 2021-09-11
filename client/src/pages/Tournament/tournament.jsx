import {React,useState, useEffect} from "react";
import Bracket from "../../components/Bracket/bracket";
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./tournament.css";
import Footer from "../../components//Footer/footer";

function Tournament() {
    const lobbyCode = window.location.pathname.substr(-6);
    const [tournamentData, setTournamentData] = useState({
        tournamentSize:undefined
    });

    const exitTournament = () => {
        window.open("https://smash-ultimatum.herokuapp.com/dashboard", "_self");
    }

    useEffect(()=>{
        API.getTournamentByLobbyCode(lobbyCode)
        .then((res) => {
            setTournamentData(res.data)
        })
    },[])
    return (
        <div>
        <Container fluid id="tournamentPage">
            <Row id="header">
                <Col sm={12} md={10} id="header">
                    <h1 id="header1">Welcome to Smashville</h1>
                </Col>
                <Col sm={12} md={2}>
                <button
                    onClick={exitTournament}
                    id="leaveButton">Leave Tournament</button>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} id="smallHeaders">
                    <h4>LobbyCode: {lobbyCode}</h4>
                    {tournamentData.tournamentSize !== undefined
                        ?
                        <h4>{tournamentData.tournamentSize} Man Tournament</h4>
                        :
                        <div />
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12}>
                    <Bracket />
                </Col>

            </Row>
        </Container>
        <Footer />
        </div>
    )
}

export default Tournament;