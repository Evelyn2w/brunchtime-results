export const metadata = {
<<<<<<< HEAD
  title: "About Us | Brunchtime Results",
  description: "Learn about Brunchtime Results — a dedicated UK 49s results website providing accurate daily Brunchtime winning numbers.",
};

export default function AboutPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#ffffff", marginBottom: "12px" }}>
            About <span style={{ color: "#4a90e2" }}>Brunchtime Results</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>Your trusted source for UK 49s Brunchtime results, updated daily.</p>
        </div>
      </section>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 64px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px", marginBottom: "48px" }}>
          {[
            { icon: "🎯", title: "Our Mission", text: "We believe every UK 49s player deserves fast, accurate access to Brunchtime results. Our mission is to provide a clean, reliable results experience that helps players check their numbers quickly and confidently." },
            { icon: "📊", title: "Our Data", text: "All results are sourced from official UK 49s draw data. We update our database within minutes of each draw taking place at 10:49 AM, ensuring you always have the most current information available." },
            { icon: "🔍", title: "Our Predictions", text: "Our prediction team analyzes hot and cold numbers, frequency patterns, and draw trends to publish daily number suggestions before each Brunchtime draw. These are statistical hints, not guarantees." },
          ].map(({ icon, title, text }) => (
            <div key={title} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{icon}</div>
              <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>{title}</h2>
              <p style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.8 }}>{text}</p>
            </div>
          ))}
        </div>

        {/* About UK 49s */}
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1628", marginBottom: "16px" }}>What is the UK 49s Brunchtime Draw?</h2>
          <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
            The UK 49s Brunchtime is a daily lottery-style draw held every morning at 10:49 AM (UK time). It is one of two daily UK 49s draws — the other being the Teatime draw at 5:49 PM. Six main numbers and one Booster Ball are drawn from a pool of 49 balls numbered 1 to 49.
          </p>
          <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.8, marginBottom: "16px" }}>
            Unlike traditional lotteries, UK 49s is a betting game. Players place bets with licensed bookmakers rather than buying tickets directly. This means players choose how many numbers to pick (1–6) and their preferred stake. The more numbers picked, the lower the odds but the higher the potential prize.
          </p>
          <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.8 }}>
            UK 49s is particularly popular in South Africa, where it has a large following among daily players. The Brunchtime draw is convenient for players who prefer morning betting before the afternoon and evening draws.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "16px", marginBottom: "40px" }}>
          {[["Daily","Draws Per Day","1"],["10:49 AM","Draw Time","UK"],["1–49","Number Range","49 Balls"],["7","Days a Week","Including Weekends"]].map(([val,label,sub]) => (
            <div key={label} style={{ background: "#0a1628", borderRadius: "14px", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: "900", color: "#4a90e2", marginBottom: "4px" }}>{val}</div>
              <div style={{ fontSize: "12px", color: "#8aabcc", marginBottom: "2px" }}>{label}</div>
              <div style={{ fontSize: "11px", color: "#5a7aaa" }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #1e6de5, #0a1628)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", color: "#ffffff", marginBottom: "10px" }}>Ready to Check Results?</h2>
          <p style={{ color: "#8aabcc", fontSize: "14px", marginBottom: "20px" }}>See today's official Brunchtime winning numbers.</p>
          <a href="/" style={{ background: "#ffffff", color: "#0a1628", padding: "12px 28px", borderRadius: "10px", fontWeight: "800", textDecoration: "none", fontSize: "14px" }}>
            View Today's Results →
=======
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
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
          </a>
        </div>

      </div>
    </main>
  );
}
