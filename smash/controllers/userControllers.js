const User = require("../models/user");

// Defining methods for the booksController
module.exports = {
    userFindAll: function (req, res) {
        User
            .find(req.body)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userFindByUserId: function (req, res) {
        User
            .findOne({ userId: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userFindByName: function (req, res) {
        User
            .findOne({ name: req.params.name })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userFindById: function (req, res) {
        User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userCreate: function (req, res) {
        User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userUpdate: function (req, res) {
        User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userRemove: function (req, res) {
        User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    userGetGroups: function (req, res) {
        User
            .findById(req.params.id)
            .populate('groups')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};