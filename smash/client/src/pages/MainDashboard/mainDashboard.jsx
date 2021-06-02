import { React, useContext } from "react";
import UserContext from "../../utils/UserContext";
import FriendsList from "../../components/FriendsList/friendsList";
import NavBar from "../../components/NavBar/navBar";
import TournamentInvites from "../../components/TournamentInvites/tournamentInvites";
import IronManInvites from "../../components/IronManInvites/ironManInvites";
import FavoriteCharacter from "../../components/FavoriteCharacter/favoriteCharacter";
import UserStats from "../../components/UserStats/userStats";
import { Container, Row, Col } from "react-bootstrap";

function MainDashboard() {
    const { name, portrait } = useContext(UserContext);
    return (
        <Container fluid>
            <Row>
                <h1>Main Dashboard</h1>
            </Row>
            <Row>
                <Col sm={12} md={5}>
                    <img alt="portrait" src={portrait}></img>
                </Col>
                <Col sm={12} md={5}>
                    <h2>{name}</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <NavBar />
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <FavoriteCharacter className="favChar"/>
                </Col>
                <Col sm={6}>
                    <FriendsList />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <TournamentInvites />
                    <IronManInvites />
                    <UserStats />
                </Col>
            </Row>
        </Container>
    )
}
export default MainDashboard;