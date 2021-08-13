import { React, useEffect, useState } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "react-bootstrap";
import "./squadMaker.css";

function SquadMaker() {
    const lobbyCode = window.location.pathname.substr(-6);
    const [participants, setParticipants] = useState([]);
    const [arenaData, setArenaData] = useState({});

    useEffect(() => {
        API.getArenaByLobbyCode(lobbyCode)
            .then((res) => {
                setParticipants(...participants, res.data.participants);
                setArenaData({
                brawlers: res.data.brawlers,
                competitors: res.data.competitors,
                lobbyCode: res.data.lobbyCode,
                participants: res.data.participants,
                });
            })
    }, []);
    
    const arenaUpdate = (event) => {
        const participantName = event.target.attributes.name.value;
        const participantData = participants.find(participant => participant.name === participantName);
        const participantSquad = participantData.squad
        for(let i=0; i< participantData.wins + 2; i++){
            participantSquad[i].didWin=true;
        }
        const index = participants.findIndex(participant => participant.name === participantName);
        participants[index] = participantData;
        arenaData.participants[index].wins ++;
        setArenaData({ ...arenaData,participants:participants });
        API.updateArena(lobbyCode, arenaData);
    }

    if (participants !== undefined) {
        return (
            <Container>
                {participants.map((participant) => {
                    return (
                        <Row id="roster">
                            <Row>
                                <Col sm={1} md={1}>
                                    <button name={participant.name} onClick={arenaUpdate} id="victoryButton" >Victorious</button>
                                </Col>
                                <Col id="userHeader" sm={10} md={10}>
                                    <img id="userPortrait" src={participant.portrait} alt="competitors portrait" />
                                    <h3 id="userName">{participant.name}'s Roster</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col id="characterList" sm={12} md={12} >
                                    {participant.squad.map(character => {
                                        if (character.didWin === false && character !== participant.squad[0]) {
                                            return (
                                                <div className="hiddenContainer">
                                                    <div className="hidden" />
                                                    <p>???</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className="character">
                                                    <img id="characterPortrait" src={character.portrait} alt="characters portrait" />
                                                    <p id="characterName">{character.name}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </Col>
                            </Row>
                        </Row>
                    )
                })}
            </Container>
        )
    }
    else {
        return <></>
    }
}


export default SquadMaker;