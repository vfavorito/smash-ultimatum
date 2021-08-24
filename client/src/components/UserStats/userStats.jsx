import { React, useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import "./userStats.css";
import { Container, Col, Row } from "react-bootstrap";

function UserStats() {
    // the logged in users data
    const { name, portrait } = useContext(UserContext);
    // setting up stats state that will be updated with api call
    const [userStats, setUserStats] = useState();
    // once name is updated get the users data from database and set it to userStats
    useEffect(() => {
        if (name.length > 1) {
            API.getUserByName(name)
                .then((res) => {
                    setUserStats({ ironManStats: res.data.ironManStats, tourneyStats: res.data.tourneyStats })
                });
        }
    }, [name]);
    // if userStats has been updated
    if (userStats !== undefined) {
        return (
            <Container id="userStatsContent">
                <Row>
                    <Col sm={12} md={12}>
                        <h2>{name}'s Stats</h2>
                        <img src={portrait} alt="User Portrait" id="userStatsPortrait" />
                        <h3>Iron Man Stats</h3>
                        <h4>Wins: {userStats.ironManStats.wins}</h4>
                        <h4>Losses: {userStats.ironManStats.losses}</h4>
                    </Col>
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

export default UserStats;