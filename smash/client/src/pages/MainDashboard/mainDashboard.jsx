import { React, useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import FavoriteCharacter from "../../components/FavoriteCharacter/favoriteCharacter";
import UserStats from "../../components/UserStats/userStats";
import CreateIronMan from "../../components/CreateIronMan/createIronMan";
import JoinIronMan from "../../components/JoinIronMan/joinIronMan";
import FavCharStats from "../../components/FavCharStats/favCharStats";
import { Container, Row, Col } from "react-bootstrap";
import "./mainDashboard.css";

function MainDashboard() {
    const { name, portrait } = useContext(UserContext);

    const [charState, setCharState] = useState({
        character: "",
        portrait: "",
    });

    const changeTheme = (character, portrait, color) => {
        setCharState({
            ...charState,
            character:character,
            portrait:portrait,
        })
        document.getElementById("dashboard").style.backgroundColor = color;
    }

    return (
        <Container fluid id="dashboard">
            <Row>
                <Col sm={8} md={8}>
                    <h1>Welcome To Smash Ultimatum</h1>
                </Col>
                <Col sm={4} md={4}>
                    <h1 className="userInfo">{name}</h1>
                    <img className="userInfo" alt="portrait" src={portrait}></img>
                </Col>
            </Row>
            <Row className="content">
                <Col sm={12} md={4}>
                    <FavoriteCharacter className="favChar" themeChanger={changeTheme} />
                </Col>
                <Col sm={12} md={4}>
                    <CreateIronMan />
                    <JoinIronMan />
                    <FavCharStats stats={charState}/>
                </Col>
                <Col sm={12} md={4}>
                    <UserStats />
                </Col>
            </Row>
        </Container>
    )
}
export default MainDashboard;