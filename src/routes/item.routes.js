const express = require("express");

const router = express.Router();

const adminAuth = require("../middlewares/auth.middleware");
const itemController = require("../controllers/item.controllers");
const { createItemValidator } = require("../validators/item.validator");
const validate = require("../middlewares/validate.middleware");

router.get("/", adminAuth, itemController.getAllItems);
router.post("/", adminAuth, createItemValidator, validate, itemController.createItem);
router.get("/:id", adminAuth, itemController.getItemById);
router.put("/:id", adminAuth, itemController.updateItem);
router.delete("/:id", adminAuth, itemController.deleteItem);

module.exports = router;