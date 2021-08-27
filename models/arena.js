const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arenaSchema = new Schema({
  brawlers: { type: String, required: true },
  lobbyCode: { type: String, required: true },
  participants: [],
  admin:{ type: String, required: true },
  vote:{},
  roundWinner:""
});


const Arena = mongoose.model("Arena", arenaSchema);

module.exports = Arena;