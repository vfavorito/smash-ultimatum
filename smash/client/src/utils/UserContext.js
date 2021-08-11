import React from "react";

const UserContext = React.createContext({
    id: "",
    name: "",
    portrait: "",
    LobbyCode: "",
    participants: [],
    competitors: "",
    brawlers: ""
});

export default UserContext;