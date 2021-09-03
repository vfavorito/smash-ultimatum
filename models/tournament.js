const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  lobbyCode: { type: String, required: true },
  tournamentSize:"",
  tournamentLaunched:false,
  participants: [],
  round:{type:Number},
  round1:[],
  round2:[],
  round3:[],
  admin:{ type: String, required: true }
});


const Arena = mongoose.model("Tournament", tournamentSchema);

module.exports = Arena;