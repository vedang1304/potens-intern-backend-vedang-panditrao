const express = require("express");

const router = express.Router();

const recommendationController = require("../controllers/recomendation.controller");

const { recommendValidator } = require("../validators/recomendation.validator");

const validate = require("../middlewares/validate.middleware");

router.post(
    "/",
    recommendValidator,
    validate,
    recommendationController.recommend
);
router.get(
    "/explain/:item_id",
    recommendationController.explain
);

module.exports = router;