const express = require("express");

const router = express.Router();

const recommendationController = require("../controllers/recomendation.controller");
const { recommendValidator } = require("../validators/recomendation.validator");
const validate = require("../middlewares/validate.middleware");

/**
 * @swagger
 * /recommend:
 *   post:
 *     summary: Get top 3 recommended jobs
 *     tags:
 *       - Recommendation
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Top 3 recommended jobs
 */

router.post("/",recommendValidator,validate,recommendationController.recommend);


module.exports = router;