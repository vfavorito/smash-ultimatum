import { React, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import API from "../../utils/API";
import "./bracket.css"
function Bracket() {

    const lobbyCode = window.location.pathname.substr(-6);
    const [participants, setParticipants] = useState([])
    const [tournamentData, setTournamentData] = useState({})
    const bye = {
        character:{
            portrait:"https://ssb.wiki.gallery/images/a/a2/SSBU_spirit_Smash_Ball.png",
            color:"gray"
        },
        name:"Bye"
    }

    useEffect(() => {
        API.getTournamentByLobbyCode(lobbyCode)
            .then((res) => {
                setParticipants(res.data.participants)
                setTournamentData(res.data);
            });
    }, [])

    if (participants.length > 0 && tournamentData.tournamentSize === "4") {
        return (
            <Container id ="bracket">
                <h1>Bracket</h1>
                <Row>
                    <Col sm={1} md={1}></Col>
                    <Col sm={4} md={4}></Col>
                    <Col sm={2} md={2}>
                    { participants.length >= 3
                        ?
                            <div className="competitor" style={{ backgroundColor: participants[2].character.color }} >
                            <img alt="participant character" src={participants[2].character.portrait} id="compChar" />
                            <p id="compName">{participants[2].name}</p>
                            </div>
                            :
                            <div className="competitor" style={{ backgroundColor: bye.character.color }} >
                            <img alt="participant character" src={bye.character.portrait} id="compChar" />
                            <p id="compName">Grand Champion</p>
                            </div>
                        }
                    </Col>
                    <Col sm={4} md={4}></Col>
                </Row>
                <Row>
                <Col sm={1} md={1}></Col>
                    <Col sm={2} md={2}>
                        { participants.length >= 1
                        ?
                            <div className="competitor" style={{ backgroundColor: participants[0].character.color }} >
                            <img alt="participant character" src={participants[0].character.portrait} id="compChar" />
                            <p id="compName">{participants[0].name}</p>
                            </div>
                            :
                            <div className="competitor" style={{ backgroundColor: bye.character.color }} >
                            <img alt="participant character" src={bye.character.portrait} id="compChar" />
                            <p id="compName">{bye.name}</p>
                            </div>
                        }
                    </Col>
                    <Col sm={6} md={6}></Col>
                    <Col sm={2} md={2}>
                    { participants.length >= 3
                        ?
                            <div className="competitor" style={{ backgroundColor: participants[2].character.color }} >
                            <img alt="participant character" src={participants[2].character.portrait} id="compChar" />
                            <p id="compName">{participants[2].name}</p>
                            </div>
                            :
                            <div className="competitor" style={{ backgroundColor: bye.character.color }} >
                            <img alt="participant character" src={bye.character.portrait} id="compChar" />
                            <p id="compName">{bye.name}</p>
                            </div>
                        }
                    </Col>
                </Row>
               
                <Row>
                <Col sm={1} md={1}></Col>
                    <Col sm={2} md={2}></Col>
                    <Col sm={2} md={2}>
                    { participants.length >= 3
                        ?
                            <div className="competitor" style={{ backgroundColor: participants[2].character.color }} >
                            <img alt="participant character" src={participants[2].character.portrait} id="compChar" />
                            <p id="compName">{participants[2].name}</p>
                            </div>
                            :
                            <div className="competitor" style={{ backgroundColor: bye.character.color }} >
                            <img alt="participant character" src={bye.character.portrait} id="compChar" />
                            <p id="compName">Winner M1</p>
                            </div>
                        }
                    </Col>
                    <Col sm={2} md={2}></Col>
                    <Col sm={2} md={2}>
                    { participants.length >= 3
                        ?
                            <div className="competitor" style={{ backgroundColor: participants[2].character.color }} >
                            <img alt="participant character" src={participants[2].character.portrait} id="compChar" />
                            <p id="compName">{participants[2].name}</p>
                            </div>
                            :
                            <div className="competitor" style={{ backgroundColor: bye.character.color }} >
                            <img alt="participant character" src={bye.character.portrait} id="compChar" />
                            <p id="compName">Winner M2</p>
                            </div>
                        }
                    </Col>
                    <Col sm={2} md={2}></Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}></Col>
                </Row>
                <Row>
                <Col sm={1} md={1}></Col>
                    <Col sm={2} md={2}>
                    { participants.length >= 2
                        ?
                            <div className="competitor" style={{ backgroundColor: participants[1].character.color }} >
                            <img alt="participant character" src={participants[1].character.portrait} id="compChar" />
                            <p id="compName">{participants[1].name}</p>
                            </div>
                            :
                            <div className="competitor" style={{ backgroundColor: bye.character.color }} >
                            <img alt="participant character" src={bye.character.portrait} id="compChar" />
                            <p id="compName">{bye.name}</p>
                            </div>
                        }
                    </Col>
                    <Col sm={6} md={6}></Col>
                    <Col sm={2} md={2}>
                    { participants.length >= 4
                        ?
                            <div className="competitor" style={{ backgroundColor: participants[3].character.color }} >
                            <img alt="participant character" src={participants[3].character.portrait} id="compChar" />
                            <p id="compName">{participants[3].name}</p>
                            </div>
                            :
                            <div className="competitor" style={{ backgroundColor: bye.character.color }} >
                            <img alt="participant character" src={bye.character.portrait} id="compChar" />
                            <p id="compName">{bye.name}</p>
                            </div>
                        }
                    </Col>
                </Row>

            </Container>
        )
    }
    else if (tournamentData.tournamentSize === "8") {

    }
    else {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <h1>Waiting for Participants</h1>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Bracket;