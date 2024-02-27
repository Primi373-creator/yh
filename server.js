const express = require("express");
const { createCompletion } = require("./you"); // Replace with the correct path

const app = express();
const port = 3000; // You can use any port you prefer

app.get("/api/createCompletion", async (req, res) => {
    const prompt = req.query.prompt || "default-prompt"; // You can customize the default prompt
    const options = req.query; // You can pass additional query parameters as options

    try {
        const result = await createCompletion(prompt, options);
        res.json(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
