import React from "react";
import LoginWindow from "../../components/LoginWindow/loginWindow";
import { Container, Row, Col } from "react-bootstrap";
import "./loginScreen.css";

function LoginScreen(){

    return(
        <Container fluid id="container">
            <div id="master">
            <Row>
                <Col sm={3} md={3}></Col>
                <Col id="loginBox" sm={6} md={6}>
                    <div id="content">
                        <h1 class="loginHeader">Smash Ultimatum</h1>
                        <LoginWindow />
                    </div>
                </Col>
                <Col sm={3} md={3}></Col>
            </Row>
            </div>
        </Container>
    )
}

export default LoginScreen;