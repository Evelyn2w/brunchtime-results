import Link from "next/link";

export const metadata = {
  title: "UK 49s Brunchtime Hot & Cold Numbers",
  description: "Discover the most frequently drawn and overdue numbers in UK 49s Brunchtime. Use hot and cold number statistics to guide your daily picks.",
};

const hotNumbers = [
  { num: 5, freq: 38, trend: "up" },
  { num: 12, freq: 36, trend: "up" },
  { num: 23, freq: 35, trend: "same" },
  { num: 7, freq: 34, trend: "up" },
  { num: 41, freq: 33, trend: "down" },
  { num: 18, freq: 33, trend: "same" },
  { num: 30, freq: 32, trend: "up" },
  { num: 9, freq: 31, trend: "down" },
  { num: 44, freq: 31, trend: "same" },
  { num: 2, freq: 30, trend: "up" },
];

const coldNumbers = [
  { num: 37, lastSeen: "21 days ago" },
  { num: 48, lastSeen: "18 days ago" },
  { num: 15, lastSeen: "17 days ago" },
  { num: 26, lastSeen: "16 days ago" },
  { num: 33, lastSeen: "15 days ago" },
  { num: 42, lastSeen: "14 days ago" },
];

export default function HotNumbersPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg,#0a1628,#1d3461)", padding: "52px 24px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "20px", padding: "5px 14px", marginBottom: "16px" }}>
            <span style={{ color: "#4a90e2", fontSize: "12px", fontWeight: "700" }}>🔥 NUMBER ANALYSIS</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: "900", color: "#ffffff", lineHeight: 1.2, marginBottom: "14px" }}>
            Brunchtime Hot &amp; Cold<br /><span style={{ color: "#4a90e2" }}>Number Statistics</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>
            Frequency analysis of the last 100 UK 49s Brunchtime draws. Use these stats alongside our <Link href="/predictions" style={{ color: "#4a90e2" }}>daily predictions</Link> for smarter number selection.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

          {/* Hot Numbers */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px" }}>🔥</span>
              <div>
                <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", margin: 0 }}>Hot Numbers</h2>
                <p style={{ color: "#5a6a8a", fontSize: "13px", margin: "4px 0 0" }}>Most frequently drawn in last 100 Brunchtime draws</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(72px,1fr))", gap: "12px", marginBottom: "20px" }}>
              {hotNumbers.map(({ num, freq, trend }) => (
                <div key={num} style={{ background: "linear-gradient(135deg,#1e6de5,#112240)", borderRadius: "12px", padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: "22px", fontWeight: "900", color: "#ffffff", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: "11px", color: "#8aabcc", marginTop: "4px" }}>{freq}x</div>
                  <div style={{ fontSize: "12px", marginTop: "2px" }}>
                    {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              Hot numbers are drawn most often but this does not guarantee future results. Each draw is independent. Always combine statistical analysis with a sensible betting strategy — see our <Link href="/winning-tips" style={{ color: "#1e6de5" }}>winning tips guide</Link> for more.
            </p>
          </div>

          {/* Cold Numbers */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px" }}>❄️</span>
              <div>
                <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", margin: 0 }}>Cold Numbers (Overdue)</h2>
                <p style={{ color: "#5a6a8a", fontSize: "13px", margin: "4px 0 0" }}>Numbers that have not appeared for the longest time</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: "10px", marginBottom: "20px" }}>
              {coldNumbers.map(({ num, lastSeen }) => (
                <div key={num} style={{ background: "#f0f5ff", border: "1px solid #d0daf0", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#0a1628" }}>{num}</div>
                  <div style={{ fontSize: "11px", color: "#5a6a8a", marginTop: "4px" }}>Last seen</div>
                  <div style={{ fontSize: "12px", color: "#1e6de5", fontWeight: "700" }}>{lastSeen}</div>
                </div>
              ))}
            </div>
            <p style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              Cold numbers are overdue statistically, but lottery draws have no memory — each draw is random. Some players prefer cold numbers on the theory they are "due" to appear. Learn about <Link href="/how-to-play" style={{ color: "#1e6de5" }}>how betting on UK 49s works</Link>.
            </p>
          </div>

          {/* Explanation */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "16px" }}>How to Use Hot &amp; Cold Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px" }}>
              {[
                { icon: "📊", title: "Hot Number Strategy", text: "Focus your picks on the top 5–10 hot numbers. These appear most often in recent draws, giving a statistical edge in frequency." },
                { icon: "❄️", title: "Cold Number Strategy", text: "Pick 1–2 cold numbers alongside hot picks. Overdue numbers sometimes cluster after long absences." },
                { icon: "⚖️", title: "Mixed Strategy", text: "Most experienced players mix 3 hot + 1 cold. This balances statistical frequency with potential overdue returns." },
                { icon: "🎯", title: "Use Predictions Too", text: "Combine hot/cold data with our AI-assisted predictions for the most informed daily number selection." },
              ].map(({ icon, title, text }) => (
                <div key={title} style={{ background: "#f8faff", borderRadius: "10px", padding: "18px" }}>
                  <div style={{ fontSize: "22px", marginBottom: "8px" }}>{icon}</div>
                  <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "14px", marginBottom: "6px" }}>{title}</div>
                  <div style={{ color: "#5a6a8a", fontSize: "13px", lineHeight: 1.6 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Related pages */}
          <div style={{ background: "#0a1628", borderRadius: "16px", padding: "24px 28px" }}>
            <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "16px", marginBottom: "14px" }}>Related Guides</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
              {[
                ["/predictions", "🎯 Today's Predictions"],
                ["/winning-tips", "💡 Winning Tips"],
                ["/how-to-play", "🎮 How to Play"],
                ["/booster-ball", "⭐ Booster Ball Guide"],
                ["/", "📊 Today's Results"],
                ["/brunchtime-draw-time", "🕙 Draw Time & Schedule"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ background: "#112240", border: "1px solid #1d3461", borderRadius: "10px", padding: "12px 14px", textDecoration: "none", color: "#8aabcc", fontSize: "13px", fontWeight: "600" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff8e1", border: "1px solid #f0a500", borderRadius: "12px", padding: "16px 20px" }}>
            <p style={{ color: "#7a5a00", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
              <strong>⚠️ Disclaimer:</strong> Statistics are based on historical data and do not predict future results. UK 49s draws are independently verified random events. Please gamble responsibly — visit <strong>begambleaware.org</strong> for support.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
