const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse"); // PDF Parsing Library
const { Groq } = require("groq-sdk");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Initialize Groq SDK with API key
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const pdfPath = path.join(__dirname, "../public/Joel_Ebenezer_About_Me.pdf");

// Function to extract text from PDF
async function extractTextFromPDF() {
  try {
    const pdfBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(pdfBuffer);
    console.log("📄 PDF Text Extracted Successfully.");
    return data.text; // Returns extracted text
  } catch (error) {
    console.error("❌ Error reading PDF:", error.message);
    return "Error loading resume.";
  }
}

// Route to handle AI queries
app.post("/query", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "❌ No question provided!" });
  }

  try {
    // Extract text from PDF
    const pdfText = await extractTextFromPDF();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: `You are an AI assistant answering questions based on this Document: \n\n ${pdfText}` },
        { role: "user", content: question }
      ],
      model: "llama3-8b-8192", // Ensure you use a valid free-tier model
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false
    });

    console.log("📝 Groq API Response:", chatCompletion);

    if (!chatCompletion || !chatCompletion.choices || !chatCompletion.choices[0]) {
      console.error("❌ Error: Unexpected response from Groq API:", chatCompletion);
      return res.status(500).json({ error: "Failed to retrieve response from AI" });
    }

    const aiResponse = chatCompletion.choices[0].message.content;
    res.json({ answer: aiResponse });

  } catch (error) {
    console.error("❌ Error fetching from Groq API:", error.message);
    res.status(500).json({ error: "Failed to retrieve response from AI" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
