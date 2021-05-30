const userRouter = require("express").Router();
const usersController = require("../controllers/userControllers");

userRouter.route("/api/users")
    .get(usersController.userFindAll)
    .post(usersController.userCreate);

userRouter.route("/api/users/userid/:id")
    .get(usersController.userFindByUserId);

userRouter.route("/api/users/findid/:id")
    .get(usersController.userFindById);

userRouter.route("/api/users/:name")
    .get(usersController.userFindByName);

// Matches with "/api/users/:id"
userRouter.route("/api/users/:id")
    .put(usersController.userUpdate)
    .delete(usersController.userRemove);

// Matches with "/api/users/groups/:id"
userRouter.route("/api/users/groups/:id")
    .get(usersController.userGetGroups);

module.exports = userRouter;