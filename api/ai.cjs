// api/ai.cjs  — Vercel Serverless Function (CommonJS)
const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  // CORS (optional; keep simple)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing GEMINI_API_KEY" });

    // Vercel may give req.body as object or string; handle both:
    let body = req.body;
    if (typeof body === "string") body = JSON.parse(body || "{}");

    const prompt = body?.prompt?.toString() || "";
    if (!prompt.trim()) return res.status(400).json({ error: "Missing prompt" });

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const text = result?.response?.text?.() || "";

    return res.status(200).json({ text });
  } catch (err) {
    console.error("AI error:", err);
    return res.status(500).json({ error: err?.message || "Server error" });
  }
};
