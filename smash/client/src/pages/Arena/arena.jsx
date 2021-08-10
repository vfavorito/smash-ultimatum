import { React } from "react";

function Arena(){

    const lobbyCode=window.location.pathname.substr(window.location.pathname.length -6)

    return(
        <h1>Lobby Code: {lobbyCode}</h1>
    )
}

export default Arena;