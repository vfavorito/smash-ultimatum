const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  lobbyCode: { type: String, required: true },
  tournamentSize:"",
  participants: [],
  rounds:{},
  admin:{ type: String, required: true }
});


const Arena = mongoose.model("Tournament", tournamentSchema);

module.exports = Arena;