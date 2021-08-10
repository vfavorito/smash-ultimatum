const db = require("../models/arena.js");

module.exports = {
    arenaCreate: function (req, res) {
        console.log(req.body, "body")
        console.log(req.params,"params")
        console.log("in controller")
        db
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err))
    }
}