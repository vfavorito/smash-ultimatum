import { React, useState, useEffect } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./tournamentLeaderboard.css";

function TournamentLeaderboard() {
    // state for holding all users in database
    const [users, setUsers] = useState([])
    // grabbing all users from database and assigning them to the users state
    useEffect(() => {
        API.getAllUsers()
            .then((res) => {
                setUsers(res.data);
                console.log(users, "users")
                console.log(res.data, "res.data")
            })
    }, []);
    // once the users state is set render table 
    if (users.length > 0) {
        // sorting the users array by most wins to least
        users.sort((a, b) => parseFloat(b.tourneyStats.wins) - parseFloat(a.tourneyStats.wins));
        return (
            <Container fluid>
                <Row>
                    <Col sm={12} md={12} id="leaderboardHeader">
                        <h2>Tournament Leaderboard</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} id="leaderBoard">
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Portrait</th>
                                    <th>Name</th>
                                    <th>Wins</th>
                                    <th>Losses</th>
                                    <th>Win %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // generating table rows by mapping through the users state
                                    users.map(user => {
                                        const totalGames = parseInt(user.tourneyStats.wins) + parseInt(user.tourneyStats.losses);
                                        const winPercentage = Math.round(parseInt(user.tourneyStats.wins) / totalGames * 100)
                                        return (
                                            <tr id="tableRow">
                                                <td> <img alt="user portrait" src={user.portrait} id="boardPortrait" /></td>
                                                <td>{user.name}</td>
                                                <td>{user.tourneyStats.wins}</td>
                                                <td>{user.tourneyStats.losses}</td>
                                                <td>{winPercentage}%</td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
    else {
        return (
            <></>
        )
    }

}

export default TournamentLeaderboard;