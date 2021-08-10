const User = require("../models/user");

module.exports = {
    
    userFindByUserId: function (req, res) {
        User
            .findOne({ userId: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
};