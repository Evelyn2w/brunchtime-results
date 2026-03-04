export const dynamic = "force-dynamic";

export const metadata = {
  title: "UK 49s Brunchtime Predictions Today | Hot Numbers",
  description: "Daily UK 49s Brunchtime predictions based on hot number analysis and statistical patterns. Get today's top picks before the 10:49 AM draw.",
};

async function getPredictions() {
  try {
    const res = await fetch("https://star49s.com/api/predictions/get-predictions/", { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    const all = Array.isArray(data?.data) ? data.data : [];
    return all
      .filter(p => p.drawType?.toLowerCase() === "brunchtime" && p.status?.toLowerCase() === "active")
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
  } catch { return []; }
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (isNaN(d)) return "—";
  const day = d.getDate();
  const suffix = [11,12,13].includes(day%100) ? "th" : ["st","nd","rd"][(day%10)-1] || "th";
  return `${day}${suffix} ${d.toLocaleDateString("en-GB",{month:"long",year:"numeric"})}`;
}

function NumberBall({ number, isBooster }) {
  return (
    <div style={{
      width: "52px", height: "52px", borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: "800", fontSize: "18px",
      background: isBooster ? "linear-gradient(135deg, #1e6de5, #0a1628)" : "#ffffff",
      border: isBooster ? "3px solid #1e6de5" : "2px solid #d0daf0",
      color: isBooster ? "#ffffff" : "#0a1628",
      boxShadow: isBooster ? "0 4px 16px rgba(30,109,229,0.35)" : "0 2px 8px rgba(0,0,0,0.08)",
      flexShrink: 0,
    }}>{number}</div>
  );
}

export default async function PredictionsPage() {
  const predictions = await getPredictions();
  const today = predictions[0];
  const yesterday = predictions[1];
  const older = predictions.slice(2);

  return (
    <main style={{ minHeight: "100vh", background: "#f8faff" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "56px 24px 44px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "20px", padding: "6px 16px", marginBottom: "18px" }}>
            <span style={{ fontSize: "12px", color: "#4a90e2", fontWeight: "700" }}>🎯 DAILY PREDICTIONS</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: "900", color: "#ffffff", lineHeight: 1.2, marginBottom: "14px" }}>
            Brunchtime Predictions<br /><span style={{ color: "#4a90e2" }}>Today's Hot Numbers</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
            Statistical analysis of hot and cold numbers to help you pick smarter for the 10:49 AM draw. Updated daily.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 64px" }}>

        {/* Disclaimer */}
        <div style={{ background: "#fff8e1", border: "1px solid #f0a500", borderRadius: "12px", padding: "16px 20px", marginBottom: "36px", display: "flex", gap: "12px" }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>⚠️</span>
          <p style={{ color: "#7a5a00", fontSize: "14px", lineHeight: 1.6 }}>
            <strong>Disclaimer:</strong> These predictions are based on statistical analysis only. Lottery draws are random — no one can guarantee winning numbers. Play responsibly within your means.
          </p>
        </div>

        {/* Today's Prediction */}
        {today && (
          <section style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div style={{ width: "4px", height: "32px", background: "#1e6de5", borderRadius: "2px" }} />
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0a1628" }}>Today's Predictions — {formatDate(today.date)}</h2>
            </div>
            <p style={{ color: "#5a6a8a", fontSize: "14px", marginBottom: "20px", paddingLeft: "16px" }}>
              Our top picks for today's Brunchtime draw based on recent patterns and hot number frequency.
            </p>
            <div style={{ background: "linear-gradient(135deg, #0a1628, #112240)", border: "2px solid #1e6de5", borderRadius: "16px", padding: "28px" }}>
              <div style={{ marginBottom: "24px" }}>
                <div style={{ color: "#4a90e2", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "14px" }}>⭐ 2-Number Prediction + Booster</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  {today.numbers?.slice(0, 2).map((n, i) => <NumberBall key={i} number={n} />)}
                  <div style={{ color: "#5a7aaa", fontSize: "13px", fontWeight: "600", margin: "0 4px" }}>BOOSTER</div>
                  {today.numbers?.[2] && <NumberBall number={today.numbers[2]} isBooster />}
                </div>
              </div>
              {today.fourNumbers?.length > 0 && (
                <div style={{ borderTop: "1px solid #1d3461", paddingTop: "20px" }}>
                  <div style={{ color: "#4a90e2", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "14px" }}>🎯 3-Number Prediction + Booster</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    {today.fourNumbers.slice(0, 3).map((n, i) => <NumberBall key={i} number={n} />)}
                    <div style={{ color: "#5a7aaa", fontSize: "13px", fontWeight: "600", margin: "0 4px" }}>BOOSTER</div>
                    {today.fourNumbers[3] && <NumberBall number={today.fourNumbers[3]} isBooster />}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Yesterday */}
        {yesterday && (
          <section style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div style={{ width: "4px", height: "32px", background: "#f0a500", borderRadius: "2px" }} />
              <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1628" }}>Yesterday's Predictions — {formatDate(yesterday.date)}</h2>
            </div>
            <p style={{ color: "#5a6a8a", fontSize: "14px", marginBottom: "20px", paddingLeft: "16px" }}>Compare yesterday's predictions with the actual results to see how we performed.</p>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ color: "#5a6a8a", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "14px" }}>2-Number Prediction</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  {yesterday.numbers?.slice(0, 2).map((n, i) => <NumberBall key={i} number={n} />)}
                  <div style={{ color: "#5a6a8a", fontSize: "13px", fontWeight: "600", margin: "0 4px" }}>BOOSTER</div>
                  {yesterday.numbers?.[2] && <NumberBall number={yesterday.numbers[2]} isBooster />}
                </div>
              </div>
              {yesterday.fourNumbers?.length > 0 && (
                <div style={{ borderTop: "1px solid #f0f4ff", paddingTop: "20px" }}>
                  <div style={{ color: "#5a6a8a", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "14px" }}>3-Number Prediction</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    {yesterday.fourNumbers.slice(0, 3).map((n, i) => <NumberBall key={i} number={n} />)}
                    <div style={{ color: "#5a6a8a", fontSize: "13px", fontWeight: "600", margin: "0 4px" }}>BOOSTER</div>
                    {yesterday.fourNumbers[3] && <NumberBall number={yesterday.fourNumbers[3]} isBooster />}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Older */}
        {older.length > 0 && (
          <section style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div style={{ width: "4px", height: "32px", background: "#1d3461", borderRadius: "2px" }} />
              <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1628" }}>Previous Predictions</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
              {older.map((p, i) => (
                <div key={i} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "12px", padding: "20px 24px" }}>
                  <div style={{ fontSize: "13px", color: "#5a6a8a", fontWeight: "600", marginBottom: "12px" }}>📅 {formatDate(p.date)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    {p.numbers?.slice(0, 2).map((n, j) => <NumberBall key={j} number={n} />)}
                    <div style={{ color: "#5a6a8a", fontSize: "12px", fontWeight: "600", margin: "0 4px" }}>BOOSTER</div>
                    {p.numbers?.[2] && <NumberBall number={p.numbers[2]} isBooster />}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {!today && (
          <div style={{ textAlign: "center", padding: "60px 24px", color: "#5a6a8a" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎯</div>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#0a1628", marginBottom: "8px" }}>Predictions Coming Soon</h2>
            <p style={{ fontSize: "15px" }}>Today's Brunchtime predictions will be posted before the 10:49 AM draw.</p>
          </div>
        )}

        {/* How We Predict */}
        <section style={{ background: "#0a1628", borderRadius: "20px", padding: "36px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#ffffff", marginBottom: "8px" }}>How We Generate Predictions</h2>
          <p style={{ color: "#5a7aaa", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>Our predictions are based on data analysis, not guesswork.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "16px" }}>
            {[
              ["🔥", "Hot Numbers", "Numbers that have appeared most frequently in the last 10–50 draws are prioritized as they show strong momentum."],
              ["❄️", "Cold Numbers", "Numbers that haven't appeared for many draws may be due for a comeback and are monitored closely."],
              ["📊", "Pattern Analysis", "We track number groups, ranges, and sequences that repeat across multiple Brunchtime draws."],
              ["📅", "Recent Trends", "The most weight is given to the last 10 draws to reflect the most current patterns."],
            ].map(([icon, title, text]) => (
              <div key={title} style={{ background: "#112240", border: "1px solid #1d3461", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
                <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", marginBottom: "8px" }}>{title}</div>
                <div style={{ color: "#5a7aaa", fontSize: "13px", lineHeight: 1.6 }}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Results Link */}
        <div style={{ background: "linear-gradient(135deg, #1e6de5, #0a1628)", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", color: "#ffffff", marginBottom: "8px" }}>Check Today's Official Results</h2>
          <p style={{ color: "#8aabcc", fontSize: "14px", marginBottom: "20px" }}>Compare predictions with actual winning numbers after the draw.</p>
          <a href="/" style={{ background: "#ffffff", color: "#0a1628", padding: "12px 28px", borderRadius: "10px", fontWeight: "800", textDecoration: "none", fontSize: "14px" }}>
            View Brunchtime Results →
          </a>
        </div>

      </div>
    </main>
  );
}
