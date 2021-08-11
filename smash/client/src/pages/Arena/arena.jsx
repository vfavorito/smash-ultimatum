import { React, useEffect, useState } from "react";
import API from "../../utils/API"
import SquadMaker from "../../components/SquadMaker/squadMaker";

function Arena() {
    const lobbyCode = window.location.pathname.substr(-6);
    const [arenaData, setArenaData] = useState();

    useEffect(() => {
        API.getArenaByLobbyCode(lobbyCode)
            .then((res) => {
                setArenaData({ competitors: res.data.competitors, LobbyCode: res.data.lobbyCode, brawlers: res.data.brawlers })
            })
    }, []);
    if (arenaData !== undefined) {
        return (
            <div>
                <h1>Welcome to Smash Town Baby! Population: {arenaData.competitors}</h1>
                <h4>Lobby Code: {arenaData.LobbyCode}</h4>
                <h4>{arenaData.brawlers} Man Iron Man</h4>
                <SquadMaker />
            </div>
        )
    }
    else {
        return (
            <h1>error</h1>
        )
    }
}

export default Arena;