export const metadata = {
  title: "About Us | Brunchtime Results",
  description: "Learn about Brunchtime Results — a dedicated UK 49s results website.",
};

export default function AboutPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#ffffff", marginBottom: "12px" }}>
          About <span style={{ color: "#4a90e2" }}>Brunchtime Results</span>
        </h1>
        <p style={{ color: "#8aabcc", fontSize: "16px" }}>Your trusted source for UK 49s Brunchtime results, updated daily.</p>
      </section>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px", marginBottom: "48px" }}>
          {[
            { icon: "🎯", title: "Our Mission", text: "Fast, accurate Brunchtime results for every player. We update within minutes of the 10:49 AM draw." },
            { icon: "📊", title: "Our Data", text: "Results sourced from official UK 49s draw data via star49s.com — the most trusted UK 49s platform." },
            { icon: "🔍", title: "Predictions", text: "Daily hot and cold number analysis published before each draw based on frequency patterns." },
          ].map(({ icon, title, text }) => (
            <div key={title} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{icon}</div>
              <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>{title}</h2>
              <p style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.8 }}>{text}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1628", marginBottom: "16px" }}>What is the UK 49s Brunchtime Draw?</h2>
          <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
            The UK 49s Brunchtime is a daily draw held every morning at 10:49 AM (UK time). Six main numbers and one Booster Ball are drawn from 49 balls. Players place bets with licensed bookmakers choosing 1 to 6 numbers.
          </p>
          <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.8 }}>
            Particularly popular in South Africa and the UK, the Brunchtime draw runs 7 days a week including weekends and public holidays.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "16px", marginBottom: "40px" }}>
          {[["1","Draws Daily"],["10:49 AM","Draw Time"],["1–49","Numbers"],["7 Days","Every Week"]].map(([val, label]) => (
            <div key={label} style={{ background: "#0a1628", borderRadius: "14px", padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: "900", color: "#4a90e2", marginBottom: "6px" }}>{val}</div>
              <div style={{ fontSize: "12px", color: "#8aabcc" }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "linear-gradient(135deg, #1e6de5, #0a1628)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", color: "#ffffff", marginBottom: "10px" }}>Check Today's Results</h2>
          <a href="/" style={{ background: "#ffffff", color: "#0a1628", padding: "12px 28px", borderRadius: "10px", fontWeight: "800", textDecoration: "none", fontSize: "14px" }}>
            View Results →
          </a>
        </div>
      </div>
    </main>
  );
}