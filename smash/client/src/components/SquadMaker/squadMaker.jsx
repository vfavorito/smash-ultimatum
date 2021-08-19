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
                setParticipants(res.data.participants)
                setArenaData({
                    brawlers: res.data.brawlers,
                    lobbyCode: res.data.lobbyCode,
                    participants: res.data.participants,
                });
            })
    }, []);

    const updater = (event) => {
        const participantName = event.target.attributes.name.value;
        const participantData = participants.find(participant => participant.name === participantName);
        const participantSquad = participantData.squad;
        participants.forEach((participant) => {
            API.getUserByName(participant.name)
                .then(async (res) => {
                    try {
                        if (res.data.name === participantName) {
                            await res.data.characterStats.forEach(character => {
                                if (character.name === participant.currCharacter) {
                                    character.wins = character.wins + 1
                                };
                            });
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        }
                        else {
                            await res.data.characterStats.forEach(character => {
                                if (character.name === participant.currCharacter) {
                                    character.losses = character.losses + 1
                                };
                            });
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        }
                    }
                    catch (err) {
                        throw err;
                    }
                })
        })
        if (participantData.wins < participantData.squad.length) {
            for (let i = 0; i < participantData.wins + 1; i++) {
                participantSquad[i].didWin = true;
            }
            if (participantSquad[participantData.squad.length - 1].hidden === true) {
                for (let i = 0; i < participantData.wins + 2; i++) {
                    participantSquad[i].hidden = false;
                    const index = participants.findIndex(participant => participant.name === participantName);
                    arenaData.participants[index].currCharacter = participantSquad.find(character => character.didWin === false).name
                }
            }
            const index = participants.findIndex(participant => participant.name === participantName);
            participants[index] = participantData;
            arenaData.participants[index].wins++;
            setArenaData({ ...arenaData, participants: participants });
            API.updateArena(lobbyCode, arenaData);
        }
        else {
            console.log("in else")
            participantSquad[participantSquad.length - 1].didWin = true;
            participants.forEach(participant => {
                API.getUserByName(participant.name)
                    .then((res) => {
                        if (res.data.name === participantName) {
                            const newData = {
                                ironManStats: { wins: res.data.ironManStats.wins + 1, losses: res.data.ironManStats.losses }
                            }
                            API.updateUserByName(res.data.name, newData);
                        }
                        else {
                            const newData = {
                                ironManStats: { wins: res.data.ironManStats.wins, losses: res.data.ironManStats.losses + 1 },
                            }
                            API.updateUserByName(res.data.name, newData);
                        }
                    })
            })
        }
    }

    if (participants !== undefined) {
        return (
            <Container fluid>
                {participants.map((participant) => {
                    return (
                        <Row id="roster">
                            <Row>
                                <Col sm={1} md={1}>
                                    <button name={participant.name} onClick={updater} id="victoryButton" >Victorious</button>
                                </Col>
                                <Col id="userHeader" sm={10} md={10}>
                                    <img id="userPortrait" src={participant.portrait} alt="participants portrait" />
                                    <h3 id="userName">{participant.name}'s Roster</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col id="characterList" sm={12} md={12} >
                                    {participant.squad.map(character => {
                                        if (character.hidden === true && character !== participant.squad[0]) {
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