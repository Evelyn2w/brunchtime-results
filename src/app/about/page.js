export const metadata = {
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
          </a>
        </div>

      </div>
    </main>
  );
}
