export const metadata = {
  title: "About Us",
  description: "Learn about Brunchtime Results — your trusted source for UK 49s Brunchtime winning numbers updated daily.",
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "32px" }}>
    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#f59e0b", marginBottom: "12px" }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ color: "#a8956a", fontSize: "15px", lineHeight: 1.8, marginBottom: "12px" }}>{children}</p>
);

export default function AboutPage() {
  return (
    <main style={{ minHeight: "80vh" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "900", color: "#fef9ee", marginBottom: "12px" }}>
            About <span style={{ color: "#f59e0b" }}>Brunchtime Results</span>
          </h1>
          <p style={{ color: "#a8956a", fontSize: "16px", lineHeight: 1.7 }}>
            Your dedicated source for UK 49s Brunchtime results, updated daily after every draw.
          </p>
        </div>

        <div style={{ background: "linear-gradient(135deg, #1a0f00, #2d1a00)", border: "1px solid #f59e0b33", borderRadius: "16px", padding: "28px", marginBottom: "40px" }}>
          <Section title="Who We Are">
            <P>Brunchtime Results is a dedicated results website focused on the UK 49s Brunchtime draw. We provide accurate, up-to-date winning numbers and Booster Ball results for every daily draw at 10:49 AM (UK time).</P>
            <P>Our data is sourced from <a href="https://star49s.com" rel="dofollow" style={{ color: "#f59e0b" }}>Star49s.com</a> — one of the most trusted UK 49s results platforms, delivering accurate lottery data to players across the UK and South Africa.</P>
          </Section>

          <Section title="Our Mission">
            <P>We believe every player deserves quick, accurate access to lottery results. Our mission is to provide a clean, fast, and reliable brunchtime results experience — without clutter or confusion.</P>
          </Section>

          <Section title="What We Offer">
            <ul style={{ color: "#a8956a", fontSize: "15px", lineHeight: 2, paddingLeft: "20px" }}>
              <li>Today's Brunchtime winning numbers</li>
              <li>Yesterday's results for quick comparison</li>
              <li>Last 15 draws in one place</li>
              <li>Full weekly draw schedule</li>
              <li>Mobile-friendly, fast-loading experience</li>
            </ul>
          </Section>

          <Section title="Data Source">
            <P>All results are powered by <a href="https://star49s.com/results/brunchtime" rel="dofollow" style={{ color: "#f59e0b" }}>Star49s Brunchtime Results</a>. For full history, predictions, and more draw types, visit Star49s — the complete UK 49s destination.</P>
          </Section>
        </div>

        <div style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)", borderRadius: "16px", padding: "28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "900", color: "#0f0a00", marginBottom: "8px" }}>Visit Star49s for More</h2>
          <p style={{ color: "#1a0a00", fontSize: "14px", marginBottom: "16px" }}>Full predictions, history, and all 4 daily draws.</p>
          <a href="https://star49s.com" rel="dofollow" style={{ background: "#0f0a00", color: "#f59e0b", padding: "10px 24px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "14px" }}>
            Go to Star49s →
          </a>
        </div>

      </div>
    </main>
  );
}
