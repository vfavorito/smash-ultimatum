const db = require("../models/tournament.js");

module.exports = {
    tournamentCreate: function (req, res) {
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    getTournament: function (req, res) {
        db
            .findOne({ lobbyCode: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addTournamentParticipant: function (req,res) {
        db
            .findOneAndUpdate({ lobbyCode: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}