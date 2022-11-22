const router = require("express").Router();
const controller = require("./todos.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .post(controller.create)
  .get(controller.list)
  .all(methodNotAllowed);

module.exports = router;
