const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;

app.use(express.json());

app.post("/ask-ollama", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3.2:latest", 
      prompt, 
      stream: false,
    });

    res.json({
      reply: response.data.response,
    });

    console.log("Ollama Response:", response.data.response);
  } catch (error) {
    console.error("Error contacting Ollama:", error.message);
    res.status(500).json({ error: "Failed to contact Ollama" });
  }
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
