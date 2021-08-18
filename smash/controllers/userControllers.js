const User = require("../models/user");

module.exports = {
    
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
    userUpdateByName: function (req, res) {
        User
            .findOneAndUpdate({ name: req.params.name }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    
};