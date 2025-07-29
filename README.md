# Podcast Bundle

This project is a simple React application built with Vite. It contains an AI powered helper that uses Google's Gemini API to recommend the best podcast production plan.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root (or set environment variables in your shell) and define the Gemini API key:
   ```bash
   VITE_GEMINI_API_KEY=your-api-key-here
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Build for production
   ```bash
   npm run build
   ```

The application reads `VITE_GEMINI_API_KEY` using `import.meta.env` at runtime. The Vite configuration exposes variables prefixed with `VITE_` during the build, so the value will be inlined when the app is bundled.
