import { React, useEffect, useState, useContext, useRef } from "react";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import Modal from "react-modal";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
import "./bracket.css";
function Bracket() {

    const { name } = useContext(UserContext);
    const lobbyCode = window.location.pathname.substr(-6);
    const [participants, setParticipants] = useState([]);
    const [tournamentData, setTournamentData] = useState({});
    const [matches, setMatches] = useState();
    const [round, setRound] = useState();
    const roundVictors = useRef();
    const winnerModalIsOpen = useRef();
    const [winner, setWinner] = useState({
        name: "",
        portrait: "",
        character: {}
    });

    const winnerModalToggle = () => {
        winnerModalIsOpen.current = true
    };
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "rgb(189, 189, 189)",
        }
    };

    useEffect(() => {
        let myInterval = setInterval(async () => {
            try {
                API.getTournamentByLobbyCode(lobbyCode)
                    .then(async (res) => {
                        try {
                            if (res.data.tournamentSize === "4" && res.data.tournamentLaunched === true) {
                                if (res.data.round === 1) {
                                    const victorArray = []
                                    res.data.round1.forEach((match) => {
                                        victorArray.push(match.victor);
                                    });
                                    roundVictors.current = victorArray;
                                    if (roundVictors.current.indexOf("") === -1) {
                                        const newData = {
                                            round2: [{
                                                match: 1,
                                                participants: [roundVictors.current[0], roundVictors.current[1]],
                                                victor: ""
                                            }],
                                            round: 2
                                        }
                                        API.updateTournament(lobbyCode, newData);
                                    }
                                }
                                else if (res.data.round === 2 && res.data.round2[0].victor !== "") {
                                    setWinner({
                                        name: res.data.round2[0].victor.name,
                                        portrait: res.data.round2[0].victor.portrait,
                                        character: {
                                            name: res.data.round2[0].victor.character.name,
                                            portrait: res.data.round2[0].victor.character.portrait,
                                            quote: res.data.round2[0].victor.character.quote
                                        }
                                    })
                                    winnerModalToggle();
                                }
                            }
                            else if (res.data.tournamentSize === "8" && res.data.tournamentLaunched === true) {
                                if (res.data.round === 1) {
                                    const victorArray = []
                                    res.data.round1.forEach((match) => {
                                        victorArray.push(match.victor);
                                    });
                                    roundVictors.current = victorArray;
                                    if (roundVictors.current.indexOf("") === -1) {
                                        const newData = {
                                            round2: [{
                                                match: 1,
                                                participants: [roundVictors.current[0], roundVictors.current[1]],
                                                victor: ""
                                            }, {
                                                match: 2,
                                                participants: [roundVictors.current[2], roundVictors.current[3]],
                                                victor: ""
                                            }],
                                            round: 2
                                        }
                                        API.updateTournament(lobbyCode, newData);
                                    }
                                }
                                else if (res.data.round === 2) {
                                    const victorArray = []
                                    res.data.round2.forEach((match) => {
                                        victorArray.push(match.victor);
                                    });
                                    roundVictors.current = victorArray;
                                    if (roundVictors.current.indexOf("") === -1) {
                                        const newData = {
                                            round3: [{
                                                match: 1,
                                                participants: [roundVictors.current[0], roundVictors.current[1]],
                                                victor: ""
                                            }],
                                            round: 3
                                        }
                                        API.updateTournament(lobbyCode, newData);
                                    }
                                }
                                else if (res.data.round === 3 && res.data.round3[0].victor !== "") {
                                    setWinner({
                                        name: res.data.round3[0].victor.name,
                                        portrait: res.data.round3[0].victor.portrait,
                                        character: {
                                            name: res.data.round3[0].victor.character.name,
                                            portrait: res.data.round3[0].victor.character.portrait,
                                            quote: res.data.round3[0].victor.character.quote
                                        }
                                    })
                                    winnerModalToggle();
                                }
                            }
                            setParticipants(res.data.participants);
                            setRound(res.data.round);
                            setTournamentData(res.data);
                            if (res.data.round === 1) {
                                setMatches(res.data.round1)
                            }
                            else if (res.data.round === 2) {
                                setMatches(res.data.round2)
                            }
                            else if (res.data.round === 3) {
                                setMatches(res.data.round3)
                            };
                        }
                        catch (err) {
                            throw err;
                        };
                    });
            }
            catch (err) {
                throw err;
            }
        }, 2000);
        return () => {
            clearInterval(myInterval);
        };
    }, []);

    const launchTournament = () => {
        const humanArr = participants.filter(participant => participant.name.substr(0, 3) !== "Bye");
        const byeArr = participants.filter(participant => participant.name.substr(0, 3) === "Bye");
        let byeCount = 0;
        byeArr.forEach((bye) => {
            byeCount = byeCount + 1;
            bye.name = "Bye " + byeCount
        });
        for (let i = humanArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = humanArr[i];
            humanArr[i] = humanArr[j];
            humanArr[j] = temp;
        }
        console.log(humanArr, "human")
        console.log(byeArr, "byes")
        let index = 0
        byeArr.forEach((bye) => {
            humanArr.splice(index, 0, bye);
            index = index + 2
        })
        API.getTournamentByLobbyCode(lobbyCode)
            .then((res) => {
                if (res.data.tournamentSize === "4") {

                    API.updateTournament(lobbyCode, {
                        round1: [{
                            match: 1,
                            participants: [humanArr[0], humanArr[1]],
                            victor: ""
                        },
                        {
                            match: 2,
                            participants: [humanArr[2], humanArr[3]],
                            victor: ""
                        }],
                        tournamentLaunched: true,
                        round: 1
                    });
                }
                else {

                    API.updateTournament(lobbyCode, {
                        round1: [{
                            match: 1,
                            participants: [humanArr[0], humanArr[1]],
                            victor: ""
                        },
                        {
                            match: 2,
                            participants: [humanArr[2], humanArr[3]],
                            victor: ""
                        },
                        {
                            match: 3,
                            participants: [humanArr[4], humanArr[5]],
                            victor: ""
                        },
                        {
                            match: 4,
                            participants: [humanArr[6], humanArr[7]],
                            victor: ""
                        }],
                        tournamentLaunched: true,
                        round: 1
                    });
                };
            });
    };
    const characterUpdater = (res, thisMatch, victor) => {
        if (round === 1) {
            res.data.round1[thisMatch].participants.forEach((participant) => {
                if (participant.name.substring(0, 3) !== "Bye" && participant.name === victor) {
                    const winningCharacter = participant.character.name
                    API.getUserByName(victor)
                        .then((res) => {
                            res.data.characterStats.forEach(character => {
                                if (character.name === winningCharacter) {
                                    character.wins = character.wins + 1;
                                }
                            })
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        })
                }
                else if (participant.name.substring(0, 3) !== "Bye") {
                    const losingCharacter = participant.character.name
                    API.getUserByName(participant.name)
                        .then((res) => {
                            res.data.characterStats.forEach(character => {
                                if (character.name === losingCharacter) {
                                    character.losses = character.losses + 1;
                                }
                            })
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        })
                }

            })
        }
        else if (round === 2) {
            res.data.round2[thisMatch].participants.forEach((participant) => {
                if (participant.name.substring(0, 3) !== "Bye" && participant.name === victor) {
                    const winningCharacter = participant.character.name
                    API.getUserByName(victor)
                        .then((res) => {
                            res.data.characterStats.forEach(character => {
                                if (character.name === winningCharacter) {
                                    character.wins = character.wins + 1;
                                }
                            })
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        })
                }
                else if (participant.name.substring(0, 3) !== "Bye") {
                    const losingCharacter = participant.character.name
                    API.getUserByName(participant.name)
                        .then((res) => {
                            res.data.characterStats.forEach(character => {
                                if (character.name === losingCharacter) {
                                    character.losses = character.losses + 1;
                                }
                            })
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        })
                }

            })
        }
        else if (round === 3) {
            res.data.round3[thisMatch].participants.forEach((participant) => {
                if (participant.name.substring(0, 3) !== "Bye" && participant.name === victor) {
                    const winningCharacter = participant.character.name
                    API.getUserByName(victor)
                        .then((res) => {
                            res.data.characterStats.forEach(character => {
                                if (character.name === winningCharacter) {
                                    character.wins = character.wins + 1;
                                }
                            })
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        })
                }
                else if (participant.name.substring(0, 3) !== "Bye") {
                    const losingCharacter = participant.character.name
                    API.getUserByName(participant.name)
                        .then((res) => {
                            res.data.characterStats.forEach(character => {
                                if (character.name === losingCharacter) {
                                    character.losses = character.losses + 1;
                                }
                            })
                            const newUserData = {
                                characterStats: res.data.characterStats,
                            }
                            API.updateUserByName(res.data.name, newUserData);
                        })
                }
            })
        }
    }
    const victorSelect = (event) => {
        if (name === tournamentData.admin) {
            const victor = event.target.innerText;
            API.getTournamentByLobbyCode(lobbyCode)
                .then((res) => {
                    if (round === 1) {
                        let newData = [];
                        res.data.round1.forEach((match) => {
                            const search = match.participants.findIndex((participant) => participant.name === victor)
                            if (search !== -1) {
                                const thisMatch = match.match - 1
                                const newMatch = { match: thisMatch + 1, participants: res.data.round1[thisMatch].participants, victor: res.data.round1[thisMatch].participants.find(el => el.name === victor) }
                                newData.push(newMatch);
                                characterUpdater(res, thisMatch, victor);
                            }
                            else {
                                newData.push(match);
                            }
                        })
                        API.updateTournament(lobbyCode, {
                            round1: newData
                        });
                    }
                    else if (round === 2 && res.data.tournamentSize === "8") {
                        let newData = [];
                        res.data.round2.forEach((match) => {
                            const search = match.participants.findIndex((participant) => participant.name === victor)
                            if (search !== -1) {
                                const thisMatch = match.match - 1
                                const newMatch = { match: thisMatch + 1, participants: res.data.round2[thisMatch].participants, victor: res.data.round2[thisMatch].participants.find(el => el.name === victor) }
                                newData.push(newMatch);
                                characterUpdater(res, thisMatch, victor);
                            }
                            else {
                                newData.push(match);
                            }
                        })
                        API.updateTournament(lobbyCode, {
                            round2: newData
                        });
                    }
                    else if (round === 2 && res.data.tournamentSize === "4") {
                        let newData = [];
                        res.data.round2.forEach((match) => {
                            const search = match.participants.findIndex((participant) => participant.name === victor)
                            if (search !== -1) {
                                const thisMatch = match.match - 1
                                const newMatch = { match: thisMatch + 1, participants: res.data.round2[thisMatch].participants, victor: res.data.round2[thisMatch].participants.find(el => el.name === victor) }
                                newData.push(newMatch);
                                characterUpdater(res, thisMatch, victor);
                            }
                            else {
                                newData.push(match);
                            }
                        })
                        API.updateTournament(lobbyCode, {
                            round2: newData
                        })
                            .then((res) => {
                                API.getTournamentByLobbyCode(lobbyCode)
                                    .then((res) => {
                                        const tournamentChampion = res.data.round2[0].victor.name;
                                        const humanParticipants = res.data.participants.filter(participant => participant.name.substr(0, 3) !== "Bye");
                                        humanParticipants.forEach((participant) => {
                                            API.getUserByName(participant.name)
                                                .then((res) => {
                                                    if (res.data.name === tournamentChampion) {
                                                        const newData = {
                                                            tourneyStats: { wins: res.data.tourneyStats.wins + 1, losses: res.data.tourneyStats.losses }
                                                        }
                                                        API.updateUserByName(participant.name, newData);
                                                    }
                                                    else {
                                                        const newData = {
                                                            tourneyStats: { wins: res.data.tourneyStats.wins, losses: res.data.tourneyStats.losses + 1 }
                                                        }
                                                        API.updateUserByName(participant.name, newData);
                                                    }
                                                })
                                        })
                                    })
                            })
                    }
                    else if (round === 3) {
                        let newData = [];
                        res.data.round3.forEach((match) => {
                            const search = match.participants.findIndex((participant) => participant.name === victor)
                            if (search !== -1) {
                                const thisMatch = match.match - 1
                                const newMatch = { match: thisMatch + 1, participants: res.data.round3[thisMatch].participants, victor: res.data.round3[thisMatch].participants.find(el => el.name === victor) }
                                newData.push(newMatch);
                                characterUpdater(res, thisMatch, victor);
                            }
                            else {
                                newData.push(match);
                            }
                        })
                        API.updateTournament(lobbyCode, {
                            round3: newData
                        })
                            .then(() => {
                                API.getTournamentByLobbyCode(lobbyCode)
                                    .then((res) => {
                                        const tournamentChampion = res.data.round3[0].victor.name;
                                        const humanParticipants = res.data.participants.filter(participant => participant.name.substr(0, 3) !== "Bye");
                                        humanParticipants.forEach((participant) => {
                                            API.getUserByName(participant.name)
                                                .then((res) => {
                                                    if (res.data.name === tournamentChampion) {
                                                        const newData = {
                                                            tourneyStats: { wins: res.data.tourneyStats.wins + 1, losses: res.data.tourneyStats.losses }
                                                        }
                                                        API.updateUserByName(participant.name, newData);
                                                    }
                                                    else {
                                                        const newData = {
                                                            tourneyStats: { wins: res.data.tourneyStats.wins, losses: res.data.tourneyStats.losses + 1 }
                                                        }
                                                        API.updateUserByName(participant.name, newData);
                                                    }
                                                })
                                        })
                                    })
                            })
                    }
                })
        }
    }

    const exitTournament = () => {
        window.open("https://smash-ultimatum.herokuapp.com/dashboard", "_self");
    };

    if (participants.length > 0) {
        return (
            <Container id="bracketContainer">
                {
                    tournamentData.tournamentLaunched && matches
                        ?
                        <div>
                           { 
                           name === tournamentData.admin
                           ?
                           <Row>
                                <Col sm={12} md={12}>
                                    <h3>Click On The Match Victor To Advance Them</h3>
                                </Col>
                            </Row>
                            :
                            <></>
                            }
                            <Row>
                                <Col sm={12} md={12}>
                                    <h1>Round {round}</h1>
                                </Col>
                            </Row>
                            <Row id="bracket">
                                <Col sm={12} md={12}>
                                    <div>
                                        {matches.map((match) => {
                                            return (
                                                <div className="matches">
                                                    <h3>Match {match.match}</h3>
                                                    {match.participants.map((participant) => {
                                                        return (
                                                            <div id="matchContent">
                                                                <div
                                                                    className="competitor"
                                                                    style={{ backgroundColor: participant.character.color }}
                                                                    onClick={victorSelect}
                                                                >
                                                                    <img alt="participant character" src={participant.character.portrait} id="compChar" />
                                                                    <p id="compName">{participant.name}</p>
                                                                </div>
                                                                {
                                                                    match.participants.findIndex(el => el.name === participant.name) === 0
                                                                        ?
                                                                        <h2 id="vs">VS</h2>
                                                                        :
                                                                        <div></div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                    <h4>Victor:</h4>
                                                    {
                                                        match.victor !== ""
                                                            ?
                                                            <div
                                                                className="competitor"
                                                                style={{ backgroundColor: match.victor.character.color }}
                                                            >
                                                                <img alt="participant character" src={match.victor.character.portrait} id="compChar" />
                                                                <p id="compName">{match.victor.name}</p>
                                                            </div>
                                                            :
                                                            <h5>To be Decided</h5>
                                                    }
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <Modal
                                        isOpen={winnerModalIsOpen.current}
                                        style={customStyles}
                                        contentLabel="Modal"
                                        id="winnerModal">
                                        <h1>Congratulations!</h1>
                                        <br />
                                        <h2> {winner.name} </h2>
                                        <img alt="winner portrait" src={winner.portrait} />
                                        <br />
                                        <br />
                                        <h3>You Have Become One With</h3>
                                        <br />
                                        <h2>{winner.character.name}</h2>
                                        <img alt="characterPortrait" src={winner.character.portrait} id="characterWinner" />
                                        <h3>{winner.character.quote}</h3>
                                        <br />
                                        <br />
                                        <button
                                            onClick={exitTournament}
                                        >Exit Tournament</button>
                                    </Modal>
                                </Col>
                            </Row>
                        </div>
                        :
                        <Row>
                            <Col sm={12} md={12} id="preLaunch">
                                <h3>Current Competitors:</h3>
                                {participants.map((participant) => {
                                    return (
                                        <div className="competitor" style={{ backgroundColor: participant.character.color }}>
                                            <img alt="participant character" src={participant.character.portrait} id="compChar" />
                                            <p id="compName">{participant.name}</p>
                                        </div>
                                    )
                                })}
                                <br />
                                {
                                    name === tournamentData.admin
                                        ?
                                        <button
                                            id="launchButton"
                                            onClick={launchTournament}>Launch Tournament</button>
                                        :
                                        <div />
                                }
                            </Col>
                        </Row>
                }
            </Container>
        );
    }
    else {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={12} id="waitingScreen">
                        <h1>Setting Up The Tournament</h1>
                        <br />
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        );
    };
};

export default Bracket;