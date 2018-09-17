const router = require("express").Router();
const CustomerLibraryController = require("../controllers/CustomerLibrary.controller");

module.exports = router;

// api Routes ======================================================================

router.get("/", CustomerLibraryController.getAll);
router.post("/", CustomerLibraryController.post);
router.put("/:id([0-9a-fA-F]{24})", CustomerLibraryController.put);
router.delete("/:id([0-9a-fA-F]{24})", CustomerLibraryController.deleteInfo);
router.get("/:id([0-9a-fA-F]{24})", CustomerLibraryController.readById);
