import { React, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext"

function Arena() {

    const { participants, competitors, brawlers, LobbyCode } = useContext(UserContext);

    console.log(participants, "participants", competitors, "competitors", brawlers, "brawlers", LobbyCode, "LobbyCode")

    return (
        <div>
            <h1>arena page</h1>
            <button
                onClick={() => { console.log(participants, "participants", competitors, "competitors", brawlers, "brawlers", LobbyCode, "LobbyCode") }}
            >please</button>
        </div>
    )
}

export default Arena;