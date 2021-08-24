const arenaRouter = require("express").Router();
const arenaController = require("../controllers/arenaController");

arenaRouter.route("/api/arenas/:id")
    .post(arenaController.arenaCreate);

arenaRouter.route("/api/arenas/find/:id")
    .get(arenaController.arenaFind);

arenaRouter.route("/api/arenas/addParticipant/:id")
    .put(arenaController.addParticipant);

arenaRouter.route("/api/arenas/update/:id")
    .put(arenaController.updateArena);

module.exports = arenaRouter