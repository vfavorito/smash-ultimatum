import { React, useEffect, useState } from "react";
import API from "../../utils/API";

function SquadMaker() {
    const lobbyCode = window.location.pathname.substr(-6);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        API.getArenaByLobbyCode(lobbyCode)
            .then((res) => {
                setParticipants(...participants,res.data.participants)
            })
    }, []);

    if (participants !== undefined) {
        return (
            <div>
                {participants.map((participant) => {
                    return (
                        <div key={participant.name}>
                            <h3>{participant.name}'s squad</h3>
                            <img src={participant.portrait} alt="competitors portrait" />
                            {participant.squad.map(character =>
                                <div key={character.name}>
                                    <p>{character.name}</p>
                                    <img src={character.portrait} alt="characters portrait" />
                                </div>)}
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return <h1>Error</h1>
    }
}


export default SquadMaker;