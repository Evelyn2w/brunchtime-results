import Link from "next/link";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/how-to-play" },
  title: "How to Play UK 49s Brunchtime | Step by Step Guide",
  description: "Learn exactly how to play the UK 49s Brunchtime draw. Step by step instructions for beginners on placing bets and understanding the rules.",
};

export default function HowToPlayPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>

      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "10px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>Home</Link>
          <span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span>
          <span style={{ color: "#666666", fontSize: "14px", whiteSpace: "nowrap" }}>Guides</span>
          <span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span>
          <span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap" }}>How to Play</span>
        </div>
      </nav>

      <div style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "32px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: "900", color: "#1a1a1a", margin: 0 }}>How to Play UK 49s Brunchtime</h1>
          <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.7, marginTop: "12px", marginBottom: 0 }}>A step by step guide for anyone getting started with UK 49s.</p>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Step 1 — Find a Licensed Bookmaker</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>Before you can play UK 49s Brunchtime, you need an account with a bookmaker that offers UK 49s as a betting market. Most major UK bookmakers carry it — including Betway, Bet365, and many others. If you are in South Africa, there are several local bookmakers that specifically cater to UK 49s players.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>Always make sure the bookmaker is properly licensed in your country. A licensed bookmaker is regulated, which means your funds are protected and the betting process is fair. Never use an unlicensed site, no matter how attractive the odds look.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Step 2 — Choose How Many Numbers to Pick</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>This is where UK 49s gets interesting. You can choose to bet on just one number, or up to six numbers. The choice you make affects both your odds of winning and how much you could win.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>Betting on just one number is straightforward — if it comes up in the draw, you win. Betting on two or more numbers means all of your chosen numbers must appear in the draw for a full win, though some bookmakers offer partial payouts if only some of your numbers come up.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginTop: "20px" }}>
              {[["1 Number","Easiest to win, lowest payout"],["2 Numbers","Good balance of odds"],["3 Numbers","Popular choice for daily players"],["4-6 Numbers","Harder to win, much higher payout"]].map(([label, desc]) => (
                <div key={label} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "10px", padding: "16px" }}>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#1a1a1a", marginBottom: "6px" }}>{label}</div>
                  <div style={{ fontSize: "14px", color: "#1a1a1a", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Step 3 — Decide on 6-Ball or 7-Ball</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>When placing your bet, your bookmaker will ask whether you want to play a 6-ball or 7-ball game. This is an important decision that many beginners overlook.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>In a 6-ball game, only the six main numbers count. Your selected number must appear among those six to win. In a 7-ball game, the Booster Ball is included as well, giving you an extra number to match against. This makes it slightly easier to win, but the odds offered by the bookmaker will be lower to reflect that.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>If you are just starting out, the 7-ball game is generally recommended. The extra ball gives you a better chance of matching your numbers, which helps you get a feel for how the draw works before moving to the higher-stakes 6-ball format.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Step 4 — Set Your Stake</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>Once you have chosen your numbers and your game type, you set how much you want to bet. Most bookmakers allow very small minimum stakes, so you do not need to risk a lot of money to get started.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>Only ever bet what you are comfortable losing. The Brunchtime draw is meant to be enjoyable. Set a daily or weekly limit for yourself and stick to it. Many experienced players treat it like buying a newspaper — a small regular cost that adds some interest to their morning.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Step 5 — Place Your Bet Before 10:49 AM</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>Bookmakers close betting a few minutes before the draw begins. Make sure you have placed your bet well before 10:49 AM UK time. If you try to bet too close to the deadline, the market may already be closed and your bet will not be accepted.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>A good habit is to place your bet the night before or early in the morning. This way you never miss the cutoff, and you can check the results later in the day without any stress about whether your bet was registered in time.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Step 6 — Check the Results</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>Results are published shortly after the draw at 10:49 AM. You can check them right here on this page — we update results within minutes of each draw. Your bookmaker will also settle winning bets automatically in most cases.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>Bookmark our homepage so you can check results quickly each day without having to search for them every time.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "24px 28px" }}>
            <h3 style={{ color: "#1a1a1a", fontWeight: "700", fontSize: "18px", marginBottom: "14px" }}>Related Guides</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
              {[["/what-is-brunchtime","📖 What is Brunchtime?"],["/booster-ball","⭐ Booster Ball Guide"],["/hot-numbers","🔥 Hot Numbers"],["/brunchtime-draw-time","🕙 Draw Time"],["/winning-tips","💡 Winning Tips"],["/","📊 Today's Results"]].map(([href,label]) => (
                <Link key={href} href={href} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "8px", padding: "12px 14px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "600" }}>{label}</Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}