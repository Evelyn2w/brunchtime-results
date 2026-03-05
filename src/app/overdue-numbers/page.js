import Link from "next/link";
import { getStatistics } from "@/lib/statistics";

export const revalidate = 3600;

export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/overdue-numbers" },
  title: "UK 49s Brunchtime Overdue Numbers | Long Absent Numbers",
  description: "Find out which UK 49s Brunchtime numbers have not appeared for the longest time. Updated overdue number table based on last 30 draws.",
};

export default async function OverdueNumbersPage() {
  const stats = await getStatistics();
  const overdue = stats?.overdue || [];
  const totalDraws = stats?.totalDraws || 30;
  const top5 = overdue.slice(0, 5);
  const top10 = overdue.slice(0, 10);

  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>

      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Home</Link>
          <span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span>
<span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px" }}>Overdue Numbers</span>
        </div>
      </nav>

      <div style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "16px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: "900", color: "#1a1a1a", margin: 0 }}>⏰ Overdue Numbers</h1>
          <p style={{ color: "#1a1a1a", fontSize: "18px", marginTop: "8px", marginBottom: 0 }}>
            Numbers absent for the longest time across last {totalDraws} Brunchtime draws
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

          {/* Top 5 Overdue */}
          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1a1a", marginBottom: "20px" }}>⭐ Top 5 Most Overdue</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
                <thead>
                  <tr style={{ background: "#f4f6f8" }}>
                    <th style={th}>Rank</th>
                    <th style={th}>Number</th>
                    <th style={th}>Times Drawn</th>
                    <th style={th}>Draws Since Last Seen</th>
                    <th style={th}>Last Seen</th>
                  </tr>
                </thead>
                <tbody>
                  {top5.map((item, i) => (
                    <tr key={item.num} style={{ background: i % 2 === 0 ? "#fffdf0" : "#ffffff", borderBottom: "1px solid #f0f0f0" }}>
                      <td style={td}><span style={{ background: "#f39c12", color: "#fff", borderRadius: "50%", width: "28px", height: "28px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "14px" }}>#{i + 1}</span></td>
                      <td style={td}><span style={{ background: "#fef9e7", border: "2px solid #f39c12", borderRadius: "50%", width: "40px", height: "40px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "18px", color: "#1a1a1a" }}>{item.num}</span></td>
                      <td style={{ ...td, fontWeight: "700" }}>{item.freq} times</td>
                      <td style={td}><span style={{ background: "#f39c12", color: "#fff", padding: "3px 10px", borderRadius: "20px", fontWeight: "700", fontSize: "14px" }}>{item.lastSeenDraws} draws</span></td>
                      <td style={td}>{item.lastSeenLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 10 Overdue */}
          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1a1a", marginBottom: "20px" }}>⏰ Top 10 Most Overdue</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
                <thead>
                  <tr style={{ background: "#f4f6f8" }}>
                    <th style={th}>Rank</th>
                    <th style={th}>Number</th>
                    <th style={th}>Times Drawn</th>
                    <th style={th}>Draws Since Last Seen</th>
                    <th style={th}>Last Seen</th>
                  </tr>
                </thead>
                <tbody>
                  {top10.map((item, i) => (
                    <tr key={item.num} style={{ background: i % 2 === 0 ? "#fffdf0" : "#ffffff", borderBottom: "1px solid #f0f0f0" }}>
                      <td style={td}><span style={{ background: i < 5 ? "#f39c12" : "#f4f6f8", color: i < 5 ? "#fff" : "#1a1a1a", border: i < 5 ? "none" : "1px solid #e8ecf0", borderRadius: "50%", width: "28px", height: "28px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "800", fontSize: "14px" }}>#{i + 1}</span></td>
                      <td style={td}><span style={{ background: "#fef9e7", border: "2px solid #f39c12", borderRadius: "50%", width: "40px", height: "40px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "18px", color: "#1a1a1a" }}>{item.num}</span></td>
                      <td style={{ ...td, fontWeight: "700" }}>{item.freq} times</td>
                      <td style={td}><div style={{ background: "#f4f6f8", borderRadius: "6px", height: "8px", width: "100%", maxWidth: "120px", overflow: "hidden", display: "inline-block" }}><div style={{ background: "#f39c12", height: "100%", width: `${(item.lastSeenDraws / (top10[0].lastSeenDraws || 1)) * 100}%` }} /></div><span style={{ marginLeft: "8px", fontSize: "14px", fontWeight: "600" }}>{item.lastSeenDraws} draws</span></td>
                      <td style={td}>{item.lastSeenLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Nav to other stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <Link href="/hot-numbers" style={{ background: "#fff3e0", border: "1px solid #e67e22", borderRadius: "12px", padding: "20px", textDecoration: "none", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>🔥</div>
              <div style={{ fontWeight: "800", color: "#1a1a1a", fontSize: "18px" }}>Hot Numbers</div>
              <div style={{ color: "#1a1a1a", fontSize: "14px", marginTop: "4px" }}>Most frequently drawn</div>
            </Link>
            <Link href="/cold-numbers" style={{ background: "#e8f4fd", border: "1px solid #2471a3", borderRadius: "12px", padding: "20px", textDecoration: "none", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>❄️</div>
              <div style={{ fontWeight: "800", color: "#1a1a1a", fontSize: "18px" }}>Cold Numbers</div>
              <div style={{ color: "#1a1a1a", fontSize: "14px", marginTop: "4px" }}>Least frequently drawn</div>
            </Link>
          </div>

          <div style={{ background: "#fff8e1", border: "1px solid #f0a500", borderRadius: "12px", padding: "16px 20px" }}>
            <p style={{ color: "#7a5a00", fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
              <strong>⚠️ Disclaimer:</strong> Statistics are based on historical data and do not predict future results. Please gamble responsibly — visit <strong>begambleaware.org</strong>.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

const th = { padding: "12px 16px", textAlign: "left", fontWeight: "700", color: "#1a1a1a", fontSize: "14px", borderBottom: "2px solid #e8ecf0" };
const td = { padding: "12px 16px", color: "#1a1a1a", verticalAlign: "middle" };