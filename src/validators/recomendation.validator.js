const { body } = require("express-validator");

const recommendValidator = [
    body("skills")
        .isArray({ min: 1 })
        .withMessage("Skills are required"),

    body("experience")
        .isNumeric()
        .withMessage("Experience must be a number"),

    body("education")
        .notEmpty()
        .withMessage("Education is required"),

    body("preferredLocation")
        .notEmpty(),

    body("preferredWorkMode")
        .isIn(["REMOTE", "HYBRID", "ONSITE"]),

    body("preferredCategory")
        .notEmpty(),

    body("minimumSalary")
        .isNumeric()
];

module.exports = {
    recommendValidator
};