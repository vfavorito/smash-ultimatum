const userRouter = require("express").Router();
const usersController = require("../controllers/userControllers");

userRouter.route("/api/users/userid/:id")
    .get(usersController.userFindByUserId);

module.exports = userRouter;