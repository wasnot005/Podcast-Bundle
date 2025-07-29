import { useState } from "react";

// ---- Slides content model ----
function TitleSlide() {
  return (
    <div className="card">
      <h1 className="h1">
        Premium Podcast <span className="gradientText">Production Plans</span>
      </h1>
      <p className="sub">
        Elevate Your Content with Professional Editing Bundles for Creators & Brands
      </p>
    </div>
  );
}

function PlansSlide() {
  return (
    <div className="card">
      <h2 className="h2">Plans (example)</h2>
      <ul>
        <li><strong>Starter</strong> — 4 clips/week</li>
        <li><strong>Growth</strong> — 12 clips/week</li>
        <li><strong>Scale</strong> — 20 clips/week</li>
      </ul>
      <p className="help" style={{marginTop:12}}>We can replace this with your real content.</p>
    </div>
  );
}

// ---- AI Plan Advisor slide ----
function AISlide() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");

  async function getRecommendation() {
    setLoading(true); setError(""); setReply("");
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt:
            `You are an expert content producer. Based on this description, suggest the best podcast editing plan (simple bullets):\n\n${text}\n\nKeep it under 120 words.`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setReply(data.text || "");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2 className="h2">✨ AI Plan Advisor</h2>
      <p className="help" style={{marginBottom:12}}>
        Tell us about your podcast. Our AI will suggest the best plan for you.
      </p>
      <textarea
        className="textarea"
        placeholder={`e.g., "I run a weekly interview show on tech. I need 4 shorts for social..."\nAdd any constraints like budget or platforms.`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{display:"flex", gap:12, marginTop:12}}>
        <button className="btn btnPrimary" onClick={getRecommendation} disabled={loading || !text.trim()}>
          {loading ? "Thinking…" : "Get AI Recommendation"}
        </button>
        <span className="help" style={{alignSelf:"center"}}>Slide 4 of 7 (example)</span>
      </div>
      {error && <div className="result" style={{borderColor:"#fecaca", background:"#fff1f2", color:"#7f1d1d"}}>Error: {error}</div>}
      {reply && <div className="result">{reply}</div>}
    </div>
  );
}

function PriceCalculatorSlide() {
  return (
    <div className="card">
      <h2 className="h2">Price Calculator (placeholder)</h2>
      <p className="help">You can place your calculator UI here.</p>
    </div>
  );
}

function ThanksSlide() {
  return (
    <div className="card">
      <h2 className="h2">Thanks!</h2>
      <p className="help">This is the final slide—replace with your CTA.</p>
    </div>
  );
}

// ---- Deck controller ----
const SLIDES = [
  { id: "title", component: <TitleSlide /> },
  { id: "plans", component: <PlansSlide /> },
  { id: "features", component: <PlansSlide /> },      // duplicate placeholder
  { id: "advisor", component: <AISlide /> },          // AI slide (4)
  { id: "pricing", component: <PlansSlide /> },
  { id: "calculator", component: <PriceCalculatorSlide /> }, // (6)
  { id: "thanks", component: <ThanksSlide /> },       // (7)
];

export default function App() {
  const [i, setI] = useState(0);
  const last = SLIDES.length - 1;

  return (
    <div className="container">
      <div style={{display:"flex", justifyContent:"center", marginBottom:14}}>
        <p className="help">Slide {i+1} of {SLIDES.length}</p>
      </div>

      {SLIDES[i].component}

      <div className="controls">
        <button className="btn" onClick={() => setI(p => Math.max(0, p-1))} disabled={i===0}>Previous</button>
        <button className="btn btnPrimary" onClick={() => setI(p => Math.min(last, p+1))} disabled={i===last}>Next</button>
      </div>
    </div>
  );
}
