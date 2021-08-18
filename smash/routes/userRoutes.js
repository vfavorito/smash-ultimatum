const userRouter = require("express").Router();
const usersController = require("../controllers/userControllers");

userRouter.route("/api/users/userid/:id")
    .get(usersController.userFindByUserId);

userRouter.route("/api/users/name/:name")
    .get(usersController.userFindByName);

userRouter.route("/api/users/update/:name")
    .put(usersController.userUpdateByName)
module.exports = userRouter;