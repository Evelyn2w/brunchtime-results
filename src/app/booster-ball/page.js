import Link from "next/link";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/booster-ball" },
  title: "What is the Booster Ball in UK 49s Brunchtime? | Full Guide",
  description: "Understand exactly how the UK 49s Brunchtime Booster Ball works, how it affects your bets, and how to use it to improve your chances.",
};

export default function BoosterBallPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>

      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "10px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>Home</Link>
          <span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span>
          <span style={{ color: "#666666", fontSize: "14px", whiteSpace: "nowrap" }}>Guides</span>
          <span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span>
          <span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap" }}>Booster Ball Guide</span>
        </div>
      </nav>

      <div style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "32px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: "900", color: "#1a1a1a", margin: 0 }}>The Brunchtime Booster Ball Explained</h1>
          <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.7, marginTop: "12px", marginBottom: 0 }}>Everything you need to know about the 7th ball in every UK 49s draw.</p>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>What Exactly is the Booster Ball?</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>In every UK 49s Brunchtime draw, six main numbers are drawn first from a machine containing 49 balls. Once those six numbers have been selected, a seventh ball is then drawn from the remaining 43 balls still in the machine. That seventh ball is called the Booster Ball.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>Because the Booster Ball is drawn from whatever is left after the main six have been removed, it can never be the same as any of the six main numbers. You will never see the same number appear as both a main ball and the Booster Ball in the same draw.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>On our results page, the Booster Ball is displayed separately from the six main numbers, usually after a dividing line or in a different colour, so it is easy to identify at a glance.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>6-Ball vs 7-Ball — What is the Difference?</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>When you place a UK 49s bet with a bookmaker, you will be asked to choose between a 6-ball game and a 7-ball game. This choice determines whether the Booster Ball counts for your bet or not.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "20px" }}>In a 6-ball game, only the six main numbers matter. The Booster Ball is completely ignored. In a 7-ball game, all seven numbers count — the six main ones and the Booster Ball. This means your chosen numbers have an extra ball to match against, which increases your chances of winning.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontWeight: "800", color: "#1a1a1a", fontSize: "18px", marginBottom: "12px" }}>🎯 6-Ball Bet</div>
                <ul style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: 2, paddingLeft: "18px", margin: 0 }}>
                  <li>Only 6 main balls count</li>
                  <li>Booster Ball is ignored</li>
                  <li>Higher odds offered</li>
                  <li>Better payout per match</li>
                  <li>Suits experienced players</li>
                </ul>
              </div>
              <div style={{ background: "#e8f4fd", border: "1px solid #2471a3", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontWeight: "800", color: "#1a1a1a", fontSize: "18px", marginBottom: "12px" }}>⭐ 7-Ball Bet</div>
                <ul style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: 2, paddingLeft: "18px", margin: 0 }}>
                  <li>6 main + Booster Ball</li>
                  <li>Extra ball to match</li>
                  <li>Easier to win something</li>
                  <li>Lower odds offered</li>
                  <li>Best for beginners</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>A Practical Example</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "20px" }}>Let us say the draw results are: Main balls 5, 14, 22, 31, 38, 45 — and the Booster Ball is 3. You placed a bet on the numbers 3 and 22.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                ["7-Ball Bet", "Both 22 (main) and 3 (Booster) appeared — you win ✅"],
                ["6-Ball Bet", "22 appeared in main balls, but 3 was only the Booster — partial result. Whether you win depends on your bet type."],
                ["Single on 3, 6-Ball", "3 did not appear in the main 6 — you lose ❌"],
                ["Single on 3, 7-Ball", "3 appeared as the Booster Ball — you win ✅"],
              ].map(([scenario, result]) => (
                <div key={scenario} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "10px", padding: "16px 20px" }}>
                  <div style={{ fontWeight: "700", color: "#1a1a1a", fontSize: "16px", marginBottom: "6px" }}>{scenario}</div>
                  <div style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: 1.6 }}>{result}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Should You Always Play 7-Ball?</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>Not necessarily. The 7-ball option gives you a better chance of winning, but the bookmaker adjusts the odds accordingly. You will not get as much back per successful match compared to the 6-ball game.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>For beginners, 7-ball is a sensible starting point because it helps you understand how the Booster Ball works and gives you more opportunities to see winning results. Once you are comfortable, switching to 6-ball for certain bets can improve your returns per win.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>Many experienced players mix their approach — using 7-ball for multi-number bets and 6-ball for single-number bets where the odds are higher.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Tips for Using the Booster Ball</h2>
            {[
              ["Track the Booster Ball history", "Look at past results and note which numbers have appeared as the Booster Ball recently. Some players use this information alongside hot and cold number data to inform their picks."],
              ["Remember it cannot repeat", "The Booster Ball is always drawn from the remaining 43 balls, so it can never duplicate one of the six main numbers. This is a useful thing to keep in mind when reviewing draw results."],
              ["Use it for beginners", "If you are new to UK 49s, starting with 7-ball bets is a great way to get more familiar with the game without risking too much."],
              ["Do not rely on patterns", "The draw is random. While tracking the Booster Ball history can be interesting, past results do not predict future ones. Always bet responsibly."],
            ].map(([tip, desc]) => (
              <div key={tip} style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                <span style={{ color: "#2471a3", fontSize: "20px", flexShrink: 0, marginTop: "2px" }}>⭐</span>
                <div>
                  <div style={{ color: "#1a1a1a", fontWeight: "700", fontSize: "18px", marginBottom: "4px" }}>{tip}</div>
                  <div style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: 1.7 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "24px 28px" }}>
            <h3 style={{ color: "#1a1a1a", fontWeight: "700", fontSize: "18px", marginBottom: "14px" }}>Related Guides</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
              {[["/what-is-brunchtime","📖 What is Brunchtime?"],["/how-to-play","🎮 How to Play"],["/hot-numbers","🔥 Hot Numbers"],["/brunchtime-draw-time","🕙 Draw Time"],["/winning-tips","💡 Winning Tips"],["/","📊 Today's Results"]].map(([href,label]) => (
                <Link key={href} href={href} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "8px", padding: "12px 14px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "600" }}>{label}</Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}