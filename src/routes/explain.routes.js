const express = require("express");

const router = express.Router();

const adminAuth = require("../middlewares/auth.middleware");
const itemController = require("../controllers/item.controllers");
const { createItemValidator } = require("../validators/item.validator");
const validate = require("../middlewares/validate.middleware");
const recommendationController = require("../controllers/recomendation.controller");


router.get("/:item_id", recommendationController.explain);

module.exports = router;