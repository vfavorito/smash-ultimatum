import { React, useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import "./userStats.css";
import { Container, Col, Row } from "react-bootstrap";

function UserStats() {

    const { name, portrait } = useContext(UserContext);
    const [ userStats, setUserStats ] = useState({
        ironManStats:{},
        tourneyStats:{}
    });

    useEffect(() => {
        API.getUserByName(name)
        .then((res) => {
            setUserStats({...userStats, ironManStats:res.data.ironManStats, tourneyStats:res.data.tourneyStats})
            console.log(res.data.ironManStats)
        })
        console.log(userStats)
    },[])
    if(userStats.ironManStats !== {}){
        return (
            <Container id="userStatsContent">
                <Row>
                    <Col sm={12} md={12}>
                        <h2>{name}'s Stats</h2>
                        <img src={portrait} alt="User Portrait" id="userStatsPortrait" />
                        <h3>Iron Man Stats</h3>
                        <h4>Wins: {userStats.ironManStats.wins}</h4>
                        <h4>Losses: {userStats.ironManStats.losses}</h4>
                        <br />
                        <h3>Tournament Stats</h3>
                        <h4>Wins: {userStats.tourneyStats.wins}</h4>
                        <h4>Losses: {userStats.tourneyStats.losses}</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <>
            </>
        )
    }
    
}

export default UserStats;