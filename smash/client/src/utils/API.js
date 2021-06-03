import axios from "axios";

const API = {
    //data = { userId: , groupId: }
    userUpdate: function (id, data) {
        return axios.put("/api/users/" + id, data);
    },
    // Gets user by id
    getAllUsers: function () {
        return axios.get("/api/users");
    },
    // Gets user by id
    getUser: function (id) {
        return axios.get("/api/users/findid/" + id);
    },
    // Returns users using their initial google of github id, stored in user.userId
    getUserByUserId: function (id) {
        return axios.get("/api/users/userid/" + id);
    },
    // Gets user by user name

    getUsername: function (name) {
        return axios.get("/api/users/" + name);
    },
    // Gets all groups
    getGroups: function () {
        return axios.get("/api/groups");
    },
    // Gets the group with the given id
    getGroup: function (id) {
        return axios.get("/api/groups/" + id);
    },
    // Deletes the group with the given id
    deleteGroup: function (id) {
        return axios.delete("/api/groups/" + id);
    },
    // Saves a group to the database
    saveGroup: function (groupData, id) {
        console.log("groupData", groupData);
        return axios.post("/api/groups/" + id, groupData);
    },
    // Gets groups that a specific user belongs to, takes user id
    getUserGroups: function (id) {
        return axios.get("/api/users/groups/" + id);
    },
    // Get users that belong to a specific group, takes group id
    getGroupUsers: function (id) {
        return axios.get("/api/groups/users/" + id);
    },
    // Saves a group to the database
    // data = { groupID: , userID: }
    saveUserToGroup: function (data) {
        console.log(data);
        return axios.post("/api/groups/users", data);
    },
    newSaveUserToGroup: function (data) {
        console.log(data);
        return axios.post("/api/groups/newUsers", data);
    }
};
export default API;