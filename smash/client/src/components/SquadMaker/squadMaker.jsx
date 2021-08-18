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
                    lobbyCode: res.data.lobbyCode,
                    participants: res.data.participants,
                });
            })
    }, []);

    // const updateCheck = () => {
    //     API.getArenaByLobbyCode(lobbyCode)
    //         .then((res) => {
    //             if (arenaData.participants !== undefined && arenaData.participants !== res.data.participants ) {
    //                 console.log("different")
    //                 console.log(res.data.participants, "res.data");
    //                 console.log(arenaData.participants, "arenadata");
    //                 clearInterval(myInterval);
    //             }
    //             else {
    //                 console.log("no change")
    //                 console.log(res.data.participants,"res.data");
    //                 console.log(arenaData.participants, "arenadata");
    //                 clearInterval(myInterval);
    //             }
    //         })
    // }
    // const myInterval = setInterval(updateCheck, 5000);

    const arenaUpdate = (event) => {
        const participantName = event.target.attributes.name.value;
        const participantData = participants.find(participant => participant.name === participantName);
        const participantSquad = participantData.squad
        if (participantData.wins !== participantData.squad.length -1) {
            for (let i = 0; i < participantData.wins + 1; i++) {
                participantSquad[i].didWin = true;
            }
            if (participantSquad[participantData.squad.length - 1].hidden === true) {
                for (let i = 0; i < participantData.wins + 2; i++) {
                    participantSquad[i].hidden = false;
                }
            }
        }
        else{
            participantSquad[participantSquad.length - 1].didWin = true;
            participants.forEach(participant => {
                API.getUserByName(participant.name)
                .then((res) => {
                    if(res.data.name === participantName){
                        const newData = {
                            name:res.data.name,
                            portrait:res.data.portrait,
                            userId:res.data.userId,
                            ironManStats:{wins:res.data.ironManStats.wins + 1, losses:res.data.ironManStats.losses},
                            tourneyStats:{...res.data.tourneyStats}
                        }
                        API.updateUserByName(res.data.name, newData)
                    }
                    else{
                        const newData = {
                            name:res.data.name,
                            portrait:res.data.portrait,
                            userId:res.data.userId,
                            ironManStats:{wins:res.data.ironManStats.wins, losses:res.data.ironManStats.losses + 1},
                            tourneyStats:{...res.data.tourneyStats}
                        }
                        API.updateUserByName(res.data.name, newData)
                    }
                })
            })
        }
        const index = participants.findIndex(participant => participant.name === participantName);
        participants[index] = participantData;
        arenaData.participants[index].wins++;
        setArenaData({ ...arenaData, participants: participants });
        API.updateArena(lobbyCode, arenaData);
    }

    if (participants !== undefined) {
        return (
            <Container fluid>
                {participants.map((participant) => {
                    return (
                        <Row id="roster">
                            <Row>
                                <Col sm={1} md={1}>
                                    <button name={participant.name} onClick={arenaUpdate} id="victoryButton" >Victorious</button>
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