const router = require("express").Router();
const CustomerCarFormController = require("../controllers/CustomerCarForm.controller");
// const user = require("../models/user");

module.exports = router;

// api routes ===========================================================

router.get("/", CustomerCarFormController.getAll);
router.post("/", CustomerCarFormController.post);
router.put("/:id([0-9a-fA-F]{24})", CustomerCarFormController.put);
router.delete("/:id([0-9a-fA-F]{24})", CustomerCarFormController.deleteInfo);
router.get("/:id([0-9a-fA-F]{24})", CustomerCarFormController.readById);
