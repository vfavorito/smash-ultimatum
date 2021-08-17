import React from "react";

const UserContext = React.createContext({
    id: "",
    name: "",
    portrait: "",
    LobbyCode: "",
    participants: [],
    brawlers: ""
});

export default UserContext;