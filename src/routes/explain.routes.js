const express = require("express");

const router = express.Router();

const adminAuth = require("../middlewares/auth.middleware");
const itemController = require("../controllers/item.controllers");
const { createItemValidator } = require("../validators/item.validator");
const validate = require("../middlewares/validate.middleware");
const recommendationController = require("../controllers/recomendation.controller");


/**
 * @swagger
 * /explain/{item_id}:
 *   get:
 *     summary: Get eligibility explanation for a job
 *     tags:
 *       - Recommendation
 *     parameters:
 *       - in: path
 *         name: item_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Eligibility explanation
 */

router.get("/:item_id", recommendationController.explain);

module.exports = router;