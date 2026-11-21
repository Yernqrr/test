
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Main route
app.get("/", (req, res) => {
    res.send("Welcome to BE - Better Education API!");
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "BE server is running!",
        version: "1.0.0"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`BE server running at http://localhost:${PORT}`);
});
