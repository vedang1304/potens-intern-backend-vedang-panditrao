const itemService = require("../services/item.service");

const getAllItems = async (req, res) => {
    try {

        const items = await itemService.getAllItems();

        res.status(200).json({
            success: true,
            count: items.length,
            data: items
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const createItem = async (req, res) => {
    try {

        const job = await itemService.createItem(req.body);

        res.status(201).json({
            success: true,
            message: "Job created successfully",
            data: job
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const getItemById = async (req, res) => {
    try {
        const job = await itemService.getItemById(req.params.id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            data: job
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateItem = async (req, res) => {

    try {

        const job = await itemService.updateItem(
            req.params.id,
            req.body
        );

        res.status(200).json({

            success: true,
            message: "Job updated successfully",

            data: job

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteItem = async (req, res) => {

    try {

        await itemService.deleteItem(req.params.id);

        res.status(200).json({

            success: true,
            message: "Job deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem
};