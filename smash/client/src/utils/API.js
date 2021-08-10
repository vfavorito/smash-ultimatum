import axios from "axios";

const API = {
    
    // Returns users using their initial google of github id, stored in user.userId
    getUserByUserId: function (id) {
        return axios.get("/api/users/userid/" + id);
    },
    
    // Saves an Arena to the database
    saveArena: function (groupData, id) {
        return axios.post("/api/arenas/" + id,groupData);
    },
    
};
export default API;