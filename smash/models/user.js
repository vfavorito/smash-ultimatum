const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  portrait: { type: String, required: true },
  userId: { type: String, required: true },
  ironManStats: {},
  tourneyStats:{},
});


const User = mongoose.model("User", userSchema);

module.exports = User;