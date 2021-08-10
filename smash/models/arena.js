const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arenaSchema = new Schema({
  competitors: { type: String, required: true },
  brawlers: { type: String, required: true },
  lobbyCode: { type: String, required: true },
  participants: []
});


const Arena = mongoose.model("Arena", arenaSchema);

module.exports = Arena;