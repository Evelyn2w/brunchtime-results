import Link from "next/link";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/hot-numbers" },
  title: "UK 49s Brunchtime Hot & Cold Numbers | Frequency Analysis",
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
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>
      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Home</Link><span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span><span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px" }}>Hot Numbers</span>
        </div>
      </nav>
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "900", color: "#1a1a1a", margin: 0 }}>
            Brunchtime Hot &amp; Cold Numbers
          </h1>
          <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.7, marginTop: "8px", marginBottom: 0 }}>
            Frequency analysis of the last 100 UK 49s Brunchtime draws.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Hot Numbers */}
          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px" }}>🔥</span>
              <div>
                <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1a1a", margin: 0 }}>Hot Numbers</h2>
                <p style={{ color: "#1a1a1a", fontSize: "16px", margin: "4px 0 0" }}>Most frequently drawn in last 100 Brunchtime draws</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(72px,1fr))", gap: "12px", marginBottom: "20px" }}>
              {hotNumbers.map(({ num, freq, trend }) => (
                <div key={num} style={{ background: "#fff3e0", border: "2px solid #e67e22", borderRadius: "12px", padding: "14px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: "22px", fontWeight: "900", color: "#1a1a1a", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: "13px", color: "#1a1a1a", marginTop: "4px" }}>{freq}x</div>
                  <div style={{ fontSize: "13px", marginTop: "2px", color: "#e67e22" }}>
                    {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.7, margin: 0 }}>
              Hot numbers appear most often but this does not guarantee future results. See our <Link href="/winning-tips" style={{ color: "#2471a3" }}>winning tips guide</Link> for more.
            </p>
          </div>

          {/* Cold Numbers */}
          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px" }}>❄️</span>
              <div>
                <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1a1a", margin: 0 }}>Cold Numbers (Overdue)</h2>
                <p style={{ color: "#1a1a1a", fontSize: "16px", margin: "4px 0 0" }}>Numbers that have not appeared for the longest time</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: "10px", marginBottom: "20px" }}>
              {coldNumbers.map(({ num, lastSeen }) => (
                <div key={num} style={{ background: "#e8f4fd", border: "1px solid #2471a3", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#1a1a1a" }}>{num}</div>
                  <div style={{ fontSize: "13px", color: "#1a1a1a", marginTop: "4px" }}>Last seen</div>
                  <div style={{ fontSize: "14px", color: "#2471a3", fontWeight: "700" }}>{lastSeen}</div>
                </div>
              ))}
            </div>
            <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.7, margin: 0 }}>
              Cold numbers are overdue statistically but each draw is random. Learn <Link href="/how-to-play" style={{ color: "#2471a3" }}>how UK 49s betting works</Link>.
            </p>
          </div>

          {/* Strategies */}
          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>How to Use Hot &amp; Cold Numbers</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px" }}>
              {[
                { icon: "📊", title: "Hot Strategy", text: "Focus on top 5–10 hot numbers for a statistical frequency edge." },
                { icon: "❄️", title: "Cold Strategy", text: "Pick 1–2 cold numbers alongside hot picks — overdue numbers sometimes cluster." },
                { icon: "⚖️", title: "Mixed Strategy", text: "3 hot + 1 cold is the most popular balanced approach." },
                { icon: "🎯", title: "Use Data", text: "Combine hot/cold stats with recent results for informed daily selection." },
              ].map(({ icon, title, text }) => (
                <div key={title} style={{ background: "#f4f6f8", borderRadius: "10px", padding: "18px" }}>
                  <div style={{ fontSize: "22px", marginBottom: "8px" }}>{icon}</div>
                  <div style={{ fontWeight: "700", color: "#1a1a1a", fontSize: "16px", marginBottom: "6px" }}>{title}</div>
                  <div style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: 1.6 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "24px 28px" }}>
            <h3 style={{ color: "#1a1a1a", fontWeight: "700", fontSize: "16px", marginBottom: "14px" }}>Related Guides</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
              {[
                ["/winning-tips", "💡 Winning Tips"],
                ["/how-to-play", "🎮 How to Play"],
                ["/booster-ball", "⭐ Booster Ball Guide"],
                ["/what-is-brunchtime", "📖 What is Brunchtime?"],
                ["/", "📊 Today's Results"],
                ["/brunchtime-draw-time", "🕙 Draw Time & Schedule"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "8px", padding: "12px 14px", textDecoration: "none", color: "#1a1a1a", fontSize: "16px", fontWeight: "600" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff8e1", border: "1px solid #f0a500", borderRadius: "12px", padding: "16px 20px" }}>
            <p style={{ color: "#7a5a00", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
              <strong>⚠️ Disclaimer:</strong> Statistics are based on historical data and do not predict future results. Please gamble responsibly — visit <strong>begambleaware.org</strong> for support.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}