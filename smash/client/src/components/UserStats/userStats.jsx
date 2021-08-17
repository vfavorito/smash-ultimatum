import { React, useContext } from "react";
import UserContext from "../../utils/UserContext";
import "./userStats.css";
import { Container, Col, Row } from "react-bootstrap";

function UserStats() {

    const { name, portrait } = useContext(UserContext);

    return (
        <Container id="userStatsContent">
            <Row>
                <Col sm={12} md={12}>
                    <h2>{name}'s Stats</h2>
                    <img src={portrait} alt="User Portrait" id="userStatsPortrait" />
                    <h3>Wins:</h3>
                    <h3>Losses:</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default UserStats;