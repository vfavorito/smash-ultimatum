const arenaRouter = require("express").Router();
const arenaController = require("../controllers/arenaController");

arenaRouter.route("/api/arenas/:id")
    .post(arenaController.arenaCreate);
    

module.exports = arenaRouter