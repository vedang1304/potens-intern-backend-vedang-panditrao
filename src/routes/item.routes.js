const express = require("express");

const router = express.Router();

const adminAuth = require("../middlewares/auth.middleware");
const itemController = require("../controllers/item.controllers");
const { createItemValidator } = require("../validators/item.validator");
const validate = require("../middlewares/validate.middleware");


/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all jobs
 *     tags:
 *       - Jobs
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: List of all jobs
 */
router.get("/", adminAuth, itemController.getAllItems);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new job
 *     tags:
 *       - Jobs
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               category:
 *                 type: string
 *               description:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *               minimumExperience:
 *                 type: integer
 *               maximumExperience:
 *                 type: integer
 *               minimumEducation:
 *                 type: string
 *               location:
 *                 type: string
 *               workMode:
 *                 type: string
 *                 example: HYBRID
 *               salary:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Job created successfully
 */
router.post("/", adminAuth, createItemValidator, validate, itemController.createItem);


/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get a single job by ID
 *     tags:
 *       - Jobs
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job details
 *       404:
 *         description: Job not found
 */
router.get("/:id", adminAuth, itemController.getItemById);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update a job
 *     tags:
 *       - Jobs
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       404:
 *         description: Job not found
 */
router.put("/:id", adminAuth, itemController.updateItem);

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Delete a job
 *     tags:
 *       - Jobs
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */
router.delete("/:id", adminAuth, itemController.deleteItem);

module.exports = router;