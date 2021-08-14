import { React, useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import FavoriteCharacter from "../../components/FavoriteCharacter/favoriteCharacter";
import UserStats from "../../components/UserStats/userStats";
import CreateIronMan from "../../components/CreateIronMan/createIronMan";
import JoinIronMan from "../../components/JoinIronMan/joinIronMan";
import FavCharStats from "../../components/FavCharStats/favCharStats";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "./mainDashboard.css";

function MainDashboard(props) {
    const { name, portrait } = useContext(UserContext);

    const [charState, setCharState] = useState({
        character: "",
        portrait: "",
        quote:"",
    });

    const changeTheme = (character, portrait, color, quote) => {
        setCharState({
            ...charState,
            character: character,
            portrait: portrait,
            quote: quote
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
            <Row>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={12} md={5}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Create an Iron Man Arena</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Join an Iron Man Arena</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">{name} Stats</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Character Stats</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <FavCharStats stats={charState} />
                        </Col>
                        <Col sm={12} md={7}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <CreateIronMan updateContext={props.updateContext} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <JoinIronMan />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <UserStats />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <FavoriteCharacter className="favChar" themeChanger={changeTheme} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>
        </Container>
    )
}
export default MainDashboard;