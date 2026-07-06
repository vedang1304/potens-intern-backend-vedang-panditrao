const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const recommendationRoutes = require("./routes/recomendation.routes");
const itemRoutes = require("./routes/item.routes");

const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());



app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Profile Recommendation API is running 🚀"
    });
});



app.use("/recommend", recommendationRoutes);
app.use("/items", itemRoutes);



app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});

module.exports = app;