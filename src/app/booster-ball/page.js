import Link from "next/link";

export const metadata = {
  title: "What is the Booster Ball in UK 49s Brunchtime? | Full Guide",
  description: "Understand exactly how the UK 49s Brunchtime Booster Ball works, how it affects your bets, and how to use it to improve your chances.",
};

export default function BoosterBallPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg,#0a1628,#1d3461)", padding: "52px 24px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "20px", padding: "5px 14px", marginBottom: "16px" }}>
            <span style={{ color: "#4a90e2", fontSize: "12px", fontWeight: "700" }}>⭐ EXPLAINED</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: "900", color: "#ffffff", lineHeight: 1.2, marginBottom: "14px" }}>
            The Brunchtime<br /><span style={{ color: "#4a90e2" }}>Booster Ball Explained</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>
            Everything you need to know about the 7th ball drawn in every UK 49s Brunchtime draw.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* What is it */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "14px" }}>What is the Booster Ball?</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "14px" }}>
              The <strong style={{ color: "#0a1628" }}>Booster Ball</strong> is the 7th and final ball drawn in every UK 49s Brunchtime draw. After the six main balls are selected from 49 numbers, the Booster Ball is then drawn from the <strong style={{ color: "#0a1628" }}>remaining 43 balls</strong> — meaning it cannot duplicate any of the main six numbers.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", padding: "20px", background: "#f0f5ff", borderRadius: "12px" }}>
              {[7, 14, 22, 31, 38, 45].map(n => (
                <div key={n} style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#ffffff", border: "2px solid #d0daf0", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "16px", color: "#0a1628" }}>{n}</div>
              ))}
              <div style={{ display: "flex", alignItems: "center", color: "#5a6a8a", fontSize: "12px", fontWeight: "700", margin: "0 4px" }}>BOOSTER</div>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "linear-gradient(135deg,#1e6de5,#0a1628)", border: "3px solid #1e6de5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "18px", color: "#ffffff", boxShadow: "0 4px 16px rgba(30,109,229,0.4)" }}>3</div>
            </div>
          </div>

          {/* 6-ball vs 7-ball */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "16px" }}>6-Ball vs 7-Ball Bets</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "20px" }}>
              When placing your bet with a bookmaker, you choose whether to play a <strong style={{ color: "#0a1628" }}>6-ball</strong> or <strong style={{ color: "#0a1628" }}>7-ball</strong> game. This is one of the most important decisions in UK 49s Brunchtime betting.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ background: "#f8faff", border: "1px solid #d0daf0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontWeight: "800", color: "#0a1628", fontSize: "16px", marginBottom: "10px" }}>🎯 6-Ball Bet</div>
                <ul style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 2, paddingLeft: "18px", margin: 0 }}>
                  <li>Only 6 main balls count</li>
                  <li>Booster Ball excluded</li>
                  <li>Higher odds to win</li>
                  <li>Better payout per match</li>
                  <li>Best for experienced players</li>
                </ul>
              </div>
              <div style={{ background: "#e8f0ff", border: "2px solid #1e6de5", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontWeight: "800", color: "#1e6de5", fontSize: "16px", marginBottom: "10px" }}>⭐ 7-Ball Bet</div>
                <ul style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 2, paddingLeft: "18px", margin: 0 }}>
                  <li>6 main + Booster Ball</li>
                  <li>Extra ball = better odds</li>
                  <li>Lower payout per match</li>
                  <li>Easier to win something</li>
                  <li>Best for beginners</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How it affects winnings */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "14px" }}>How the Booster Ball Affects Your Winnings</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "16px" }}>
              In a 7-ball game, your selected numbers can match against any of the 7 drawn balls (6 main + Booster). This increases your chances of matching numbers but reduces the odds offered by the bookmaker. Here is an example:
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "#0a1628" }}>
                    {["Scenario","Bet Type","Result","Paid?"].map(h => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#ffffff", fontWeight: "700" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Pick 2 numbers: 3 & 18", "7-Ball", "3 = Booster Ball, 18 = Main ball", "✅ Yes — both matched"],
                    ["Pick 2 numbers: 3 & 18", "6-Ball", "3 = Booster Ball, 18 = Main ball", "❌ No — 3 not in main 6"],
                    ["Pick 1 number: 3", "7-Ball", "3 = Booster Ball drawn", "✅ Yes — matched in 7-ball"],
                    ["Pick 1 number: 3", "6-Ball", "3 = Booster Ball only", "❌ No — only main 6 count"],
                  ].map(([sc, bt, res, paid], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#f8faff" : "#ffffff", borderBottom: "1px solid #e2e8f8" }}>
                      <td style={{ padding: "12px 16px", color: "#0a1628", fontWeight: "600", fontSize: "13px" }}>{sc}</td>
                      <td style={{ padding: "12px 16px", color: "#5a6a8a" }}>{bt}</td>
                      <td style={{ padding: "12px 16px", color: "#5a6a8a", fontSize: "12px" }}>{res}</td>
                      <td style={{ padding: "12px 16px", fontWeight: "700", color: paid.includes("✅") ? "#16a34a" : "#dc2626" }}>{paid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div style={{ background: "#0a1628", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>Booster Ball Quick Tips</h2>
            {[
              ["Always start with 7-ball", "Beginners should use the 7-ball option to improve matching chances until you get comfortable."],
              ["Track Booster Ball history", "Check our results page to see which numbers have been Booster Balls recently."],
              ["Switch to 6-ball for higher payouts", "Once you're experienced, the 6-ball bet offers better returns per match."],
              ["Booster can't repeat main numbers", "The 7th ball is drawn from 43 remaining balls, so it always gives you a unique number."],
            ].map(([tip, desc]) => (
              <div key={tip} style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
                <span style={{ color: "#1e6de5", fontSize: "18px", flexShrink: 0 }}>⭐</span>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", marginBottom: "3px" }}>{tip}</div>
                  <div style={{ color: "#5a7aaa", fontSize: "13px" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Related */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
            {[
              ["/", "📊 Today's Results"],
              ["/predictions", "🎯 Predictions"],
              ["/how-to-play", "🎮 How to Play"],
              ["/hot-numbers", "🔥 Hot Numbers"],
              ["/winning-tips", "💡 Winning Tips"],
              ["/what-is-brunchtime", "📖 What is Brunchtime?"],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "10px", padding: "13px 16px", textDecoration: "none", color: "#0a1628", fontWeight: "600", fontSize: "13px", textAlign: "center" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
