const recommendationService = require("../services/recomendation.services");

const recommend = async (req, res) => {
    try {

        const recommendations =
            await recommendationService.recommend(req.body);

        if (recommendations.length === 0) {

            return res.status(200).json({
                success: true,
                count: 0,
                message: "No matching jobs found.",
                recommendations: []
            });

        }

        res.status(200).json({
            success: true,
            count: recommendations.length,
            recommendations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const explain = async (req, res) => {

    try {

        const response = await recommendationService.explain(req.params.item_id);

        if (!response) {

            return res.status(404).json({
                success: false,
                message: "Job not found."
            });

        }

        return res.status(200).json({
            success: true,
            data: response
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    recommend,
    explain
};