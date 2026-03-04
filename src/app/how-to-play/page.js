import Link from "next/link";

export const metadata = {
  title: "How to Play UK 49s Brunchtime | Step-by-Step Betting Guide",
  description: "Learn how to play UK 49s Brunchtime. Step-by-step guide covering bet types, odds, number selection strategies, and how to claim winnings.",
};

export default function HowToPlayPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#ffffff", marginBottom: "12px" }}>
            How to Play <span style={{ color: "#4a90e2" }}>UK 49s Brunchtime</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>A complete guide to placing bets, understanding odds, and choosing the right numbers for the 10:49 AM draw.</p>
        </div>
      </section>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 64px" }}>

        <section style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "4px", height: "32px", background: "#1e6de5", borderRadius: "2px" }} />
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0a1628" }}>Step-by-Step: How to Bet</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              ["1","Find a Licensed Bookmaker","Visit Ladbrokes, Coral, Betfred, or William Hill in the UK. South African players can use local licensed betting shops. All offer UK 49s Brunchtime markets."],
              ["2","Pick Your Numbers","Choose 1–6 numbers from 1 to 49. Fewer numbers = higher odds but bigger potential payout per £1 staked."],
              ["3","Add Booster Ball Option","Decide whether to include the Booster Ball in your bet. This adds an extra dimension to your bet and changes your odds."],
              ["4","Set Your Stake","Minimum bets are usually £0.10. Decide your stake — only bet what you can afford to lose."],
              ["5","Place Before 10:40 AM","Bookmakers close Brunchtime markets ~5–10 minutes before the draw. Always bet by 10:40 AM."],
              ["6","Check Results Here","Results are posted here within minutes of the 10:49 AM draw. Compare with your bet slip."],
              ["7","Claim Your Winnings","Take your winning slip to the bookmaker within 90 days. Online wins are usually credited automatically."],
            ].map(([n,title,text]) => (
              <div key={n} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "14px", padding: "22px", display: "flex", gap: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#1e6de5", color: "#fff", fontWeight: "900", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{n}</div>
                <div>
                  <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "15px", marginBottom: "6px" }}>{title}</div>
                  <div style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.7 }}>{text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "4px", height: "32px", background: "#1e6de5", borderRadius: "2px" }} />
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0a1628" }}>Bet Types & Approximate Odds</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px" }}>
            {[
              ["1 Number","~5/1 – 8/1","Highest chance of winning. Just needs to appear in the 6 main balls or Booster. Best for beginners."],
              ["2 Numbers","~12/1 – 15/1","Both must appear in the 6 main balls. Popular choice for experienced players."],
              ["3 Numbers","~70/1 – 80/1","All 3 must be drawn. Used frequently with prediction strategies."],
              ["4 Numbers","~500/1+","All 4 must appear. High difficulty, high reward."],
              ["5 Numbers","~3,000/1+","All 5 must match. Very hard but life-changing payouts."],
              ["6 Numbers","~10,000/1+","All 6 must match the draw. Maximum risk and reward."],
            ].map(([type,odds,desc]) => (
              <div key={type} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontWeight: "800", color: "#0a1628", fontSize: "16px", marginBottom: "4px" }}>{type}</div>
                <div style={{ color: "#1e6de5", fontWeight: "700", fontSize: "13px", marginBottom: "8px" }}>{odds}</div>
                <div style={{ color: "#5a6a8a", fontSize: "13px", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
          <p style={{ color: "#5a6a8a", fontSize: "13px", marginTop: "12px" }}>* Odds vary by bookmaker. Always check before betting.</p>
        </section>

        <section style={{ background: "#0a1628", borderRadius: "20px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>Smart Betting Tips</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "14px" }}>
            {[
              ["🔥","Use Hot Numbers","Check today's hot numbers before placing your bet. Numbers with recent momentum."],
              ["💰","Start with Singles","Single number bets have the best win rate. Build experience before moving to pairs."],
              ["📊","Track Patterns","Review the last 10–15 results before betting to spot current trends."],
              ["🛡️","Set a Budget","Decide your limit before betting. Never chase losses."],
            ].map(([icon,title,text]) => (
              <div key={title} style={{ background: "#112240", border: "1px solid #1d3461", borderRadius: "12px", padding: "18px" }}>
                <div style={{ fontSize: "22px", marginBottom: "8px" }}>{icon}</div>
                <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", marginBottom: "6px" }}>{title}</div>
                <div style={{ color: "#5a7aaa", fontSize: "13px", lineHeight: 1.6 }}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#fff8e1", border: "2px solid #f0a500", borderRadius: "16px", padding: "24px", marginBottom: "36px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "800", color: "#7a5a00", marginBottom: "10px" }}>⚠️ Gamble Responsibly</h2>
          <p style={{ color: "#7a5a00", fontSize: "14px", lineHeight: 1.7 }}>UK 49s is a betting game involving real money. Only bet what you can afford to lose. For support: <strong>GamCare</strong> 0808 8020 133 (free, 24/7) • <strong>BeGambleAware</strong> begambleaware.org</p>
        </section>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "12px" }}>
          {[["/","Today's Results"],["/predictions","Predictions"],["/hot-numbers","Hot Numbers"],["/uk49s-brunchtime-guide","Full Guide"]].map(([href,label]) => (
            <Link key={href} href={href} style={{ textDecoration: "none", background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "12px", padding: "16px 20px", display: "block", textAlign: "center" }}>
              <div style={{ fontWeight: "700", color: "#1e6de5", fontSize: "14px" }}>{label} →</div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
