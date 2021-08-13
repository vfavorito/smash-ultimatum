import axios from "axios";

const API = {
    
    // Returns users using their initial google of github id, stored in user.userId
    getUserByUserId: function (id) {
        return axios.get("/api/users/userid/" + id);
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
    }
};
export default API;