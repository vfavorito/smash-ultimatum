import React from "react";
// context that holds logged in user data for the front end
const UserContext = React.createContext({
    id: "",
    name: "",
    portrait: "",
    LobbyCode: "",
    participants: [],
    brawlers: ""
});

export default UserContext;