const express = require("express");
const userController = require("../controller/user.controller")

const router = express.Router();

router.route("/random").get(userController.getRandomUser);
router.route("/all").get(userController.getAllUser);
router.route("/save").post(userController.postUser);
router.route("/update/:id").patch(userController.updateUserOfId)
router.route("/bulk-update").patch(userController.bulkUpdateUserOfId)
router.route("/delete/:id").delete(userController.deleteUserOfId)

module.exports = router;