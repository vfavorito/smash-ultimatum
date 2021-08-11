const arenaRouter = require("express").Router();
const arenaController = require("../controllers/arenaController");

arenaRouter.route("/api/arenas/:id")
    .post(arenaController.arenaCreate);

arenaRouter.route("/api/arenas/find/:id")
    .get(arenaController.arenaFind);

module.exports = arenaRouter