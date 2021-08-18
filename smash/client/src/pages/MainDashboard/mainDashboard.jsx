import { React, useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API"
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

    const changeTheme = (character, portrait, quote) => {
        API.getUserByName(name)
        .then((res) =>{
            setCharState({
                ...charState,
                character: character,
                portrait: portrait,
                quote: quote,
                stats: res.data.characterStats.find(character => character.name = character)
            });
        })

        
    };

    return (
        <Container fluid id="dashboard">
            <Row id="header">
                <Col sm={8} md={8}>
                    <h1>Welcome To Smash Ultimatum</h1>
                </Col>
                <Col sm={4} md={4}>
                    <h1 className="userInfo">{name}</h1>
                    <img className="userInfo" id="userPortrait"alt="portrait" src={portrait}></img>
                </Col>
            </Row>
            <Row>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={12} md={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item variant="secondary">
                                    <Nav.Link id="navPill1" eventKey="first">Create an Iron Man Arena</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link id="navPill2" eventKey="second">Join an Iron Man Arena</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link id="navPill3" eventKey="third">{name}'s Stats</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link id="navPill4" eventKey="fourth">Character Stats</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <FavCharStats stats={charState} />
                        </Col>
                        <Col sm={12} md={9}>
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