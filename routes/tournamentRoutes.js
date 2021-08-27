const tournamentRouter = require("express").Router();
const tournamentController = require("../controllers/tournamentController");

tournamentRouter.route("/api/tournaments/:id")
    .post(tournamentController.tournamentCreate);
tournamentRouter.route("/api/tournaments/:id")
    .get(tournamentController.getTournament);
tournamentRouter.route("/api/tournaments/addParticipant/:id")
    .put(tournamentController.addTournamentParticipant);
module.exports = tournamentRouter;