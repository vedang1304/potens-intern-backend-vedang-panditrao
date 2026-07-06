const { body } = require("express-validator");

const createItemValidator = [
    body("title").notEmpty().withMessage("Title is required"),
    body("company").notEmpty().withMessage("Company is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("skills").isArray({ min: 1 }).withMessage("At least one skill is required"),
    body("minimumExperience").isNumeric(),
    body("maximumExperience").isNumeric(),
    body("minimumEducation").notEmpty(),
    body("location").notEmpty(),
    body("workMode").isIn(["REMOTE", "HYBRID", "ONSITE"]),
    body("salary").isNumeric()
];

module.exports = {
    createItemValidator
};