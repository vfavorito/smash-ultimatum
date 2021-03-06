const db = require("../models/arena.js");

module.exports = {
    arenaCreate: function (req, res) {
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    arenaFind: function (req, res) {
        db
            .findOne({ lobbyCode: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addParticipant: function (req, res) {
        db
            .findOneAndUpdate({ lobbyCode: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateArena: function (req, res) {
        db
            .findOneAndUpdate({ lobbyCode: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}