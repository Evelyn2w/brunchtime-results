import Link from "next/link";

export const metadata = {
  title: "UK 49s Brunchtime Winning Tips & Strategies | Expert Guide",
  description: "Practical tips and betting strategies for UK 49s Brunchtime. Learn how to choose numbers, manage your bankroll, and improve your winning chances.",
};

export default function WinningTipsPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg,#0a1628,#1d3461)", padding: "52px 24px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "20px", padding: "5px 14px", marginBottom: "16px" }}>
            <span style={{ color: "#4a90e2", fontSize: "12px", fontWeight: "700" }}>💡 STRATEGY GUIDE</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: "900", color: "#ffffff", lineHeight: 1.2, marginBottom: "14px" }}>
            Brunchtime Winning<br /><span style={{ color: "#4a90e2" }}>Tips & Strategies</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>
            Practical strategies used by experienced UK 49s players to improve their results.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Top tips */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "20px" }}>Top 8 Brunchtime Strategies</h2>
            {[
              { n: "01", title: "Start with 2-Number Bets", text: "Two-number bets offer the best balance of risk vs reward for most players. The odds are manageable, payouts are reasonable, and you do not need all six numbers to match. Perfect starting point if you are new to UK 49s." },
              { n: "02", title: "Always Play the 7-Ball Option", text: `The Booster Ball dramatically increases your matching chances. When you play 7-ball, your numbers are checked against all 7 drawn balls. Read our <a href="/booster-ball" style="color:#1e6de5">Booster Ball guide</a> to understand how this works in detail.` },
              { n: "03", title: "Use Hot Numbers as Your Base", text: `Check our <a href="/hot-numbers" style="color:#1e6de5">hot numbers page</a> and use the top 3–5 most frequently drawn numbers as the foundation of your picks. Numbers like 5, 12, and 23 have historically appeared most often in Brunchtime draws.` },
              { n: "04", title: "Add One Cold (Overdue) Number", text: "Mix in one cold number with your hot picks. While each draw is random, overdue numbers do tend to cluster over time. A 2-hot + 1-cold selection is a popular mixed approach." },
              { n: "05", title: "Check Daily Predictions", text: `Our <a href="/predictions" style="color:#1e6de5">predictions page</a> provides statistically informed number suggestions every day. These are based on frequency analysis, overdue patterns, and historical draw data — a useful daily reference.` },
              { n: "06", title: "Set a Fixed Daily Budget", text: "Decide on a fixed stake per day before you start — and stick to it. Never chase losses. Many experienced players bet the same small amount every day rather than varying stakes based on emotion." },
              { n: "07", title: "Avoid Consecutive Number Sequences", text: "Numbers like 1, 2, 3, 4 rarely all appear together in random draws. Spread your picks across different ranges — low (1–16), mid (17–32), and high (33–49) for better distribution." },
              { n: "08", title: "Track Your Own Results", text: "Keep a simple record of your daily picks and outcomes. Over time you will spot which number ranges perform better for you and can refine your strategy accordingly." },
            ].map(({ n, title, text }) => (
              <div key={n} style={{ display: "flex", gap: "16px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f0f4ff" }}>
                <div style={{ minWidth: "40px", height: "40px", borderRadius: "10px", background: "#f0f5ff", border: "2px solid #d0daf0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "13px", color: "#1e6de5", flexShrink: 0 }}>{n}</div>
                <div>
                  <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "16px", marginBottom: "6px" }}>{title}</div>
                  <div style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              </div>
            ))}
          </div>

          {/* Bankroll section */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "14px" }}>Bankroll Management</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "16px" }}>
              The most important skill in any betting game is not picking numbers — it is managing your money. Here is a simple approach used by consistent players:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "14px" }}>
              {[
                { icon: "📅", title: "Daily limit", text: "Set a fixed daily maximum. Most successful players use £1–£5 per day." },
                { icon: "🚫", title: "No chasing", text: "After a losing day, do not double your stake. Flat betting protects your bankroll." },
                { icon: "📊", title: "Track monthly", text: "Review wins vs losses once a month. Adjust your strategy if needed, not your emotions." },
                { icon: "💳", title: "Separate funds", text: "Keep betting money separate from household expenses. Treat it as entertainment budget." },
              ].map(({ icon, title, text }) => (
                <div key={title} style={{ background: "#f8faff", borderRadius: "10px", padding: "16px" }}>
                  <div style={{ fontSize: "20px", marginBottom: "8px" }}>{icon}</div>
                  <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "14px", marginBottom: "5px" }}>{title}</div>
                  <div style={{ color: "#5a6a8a", fontSize: "13px", lineHeight: 1.6 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Common mistakes */}
          <div style={{ background: "#0a1628", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>❌ Common Mistakes to Avoid</h2>
            {[
              ["Betting 6 numbers every day", "High-number bets drain your bankroll fast. Stick to 2–3 numbers for sustainable play."],
              ["Ignoring the Booster Ball", "Not using the 7-ball option is one of the most common beginners' mistakes."],
              ["Using only birthdays and anniversaries", "Numbers 1–31 are over-represented when players use dates. Spread across the full 1–49 range."],
              ["Changing numbers every single draw", "Pick a core set of numbers and stick with them for a period. Consistency helps you track performance."],
              ["Betting without checking results first", "Always check the latest results before placing a bet — patterns from recent draws matter."],
            ].map(([mistake, fix]) => (
              <div key={mistake} style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
                <span style={{ color: "#dc2626", fontSize: "16px", flexShrink: 0 }}>✗</span>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", marginBottom: "3px" }}>{mistake}</div>
                  <div style={{ color: "#5a7aaa", fontSize: "13px" }}>{fix}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Related */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
            {[
              ["/", "📊 Today's Results"],
              ["/predictions", "🎯 Daily Predictions"],
              ["/hot-numbers", "🔥 Hot Numbers"],
              ["/booster-ball", "⭐ Booster Ball"],
              ["/how-to-play", "🎮 How to Play"],
              ["/brunchtime-draw-time", "🕙 Draw Schedule"],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "10px", padding: "13px 16px", textDecoration: "none", color: "#0a1628", fontWeight: "600", fontSize: "13px", textAlign: "center" }}>
                {label}
              </Link>
            ))}
          </div>

          <div style={{ background: "#fff8e1", border: "1px solid #f0a500", borderRadius: "12px", padding: "16px 20px" }}>
            <p style={{ color: "#7a5a00", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
              <strong>⚠️ Responsible Gambling:</strong> These tips are for entertainment purposes. No strategy guarantees winnings in a random draw. Please gamble responsibly. For help: <strong>GamCare 0808 8020 133</strong> or <strong>BeGambleAware.org</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
