import axios from "axios";

const API = {
    
    // Returns users using their initial google id, stored in user.userId
    getUserByUserId: function (id) {
        return axios.get("/api/users/userid/" + id);
    },
    getUserByName: function (name) {
        return axios.get("/api/users/name/" + name);
    },
    getAllUsers: function () {
        return axios.get("/api/users");
    },
    // Saves an Arena to the database
    saveArena: function (groupData, id) {
        return axios.post("/api/arenas/" + id, groupData);
    },
    //Returns an Arena's info by searching lobbyCode
    getArenaByLobbyCode: function (id) {
        return axios.get("/api/arenas/find/" + id);
    },
    //adds Participant to arena
    addArenaParticipant: function (id, participantData){
        return axios.put("/api/arenas/addParticipant/" + id, participantData)
    },
    // to update anything about the arena document
    updateArena: function(id, data){
        return axios.put("/api/arenas/update/" + id, data)
    },
    // to update stats of user document
    updateUserByName: function(name, data){
        return axios.put("/api/users/update/" + name, data)
    },
    createTournament: function(lobbyCode, tourneyData){
        return axios.post("/api/tournaments/" + lobbyCode, tourneyData)
    },
    getTournamentByLobbyCode: function(lobbyCode){
        return axios.get("/api/tournaments/" + lobbyCode)
    },
    addTournamentParticipant: function(lobbyCode,participantData){
        return axios.put("/api/tournaments/addParticipant/" + lobbyCode, participantData)
    },
    updateTournament: function(lobbyCode, data){
        return axios.put("/api/tournaments/update/" + lobbyCode, data);
    }
};
export default API;