export const dynamic = "force-dynamic";

async function getBrunchtimeResults() {
  try {
    const res = await fetch("https://star49s.com/api/results/brunchtime/get", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.data) ? data.data : [];
  } catch {
    return [];
  }
}

function formatDate(dateStr) {
  if (!dateStr) return "Date Pending";
  const d = new Date(dateStr);
  if (isNaN(d)) return "Invalid Date";
  const day = d.getDate();
  const suffix = [11,12,13].includes(day) ? "th" : ["st","nd","rd"][((day%10)-1)] || "th";
  return `${d.toLocaleDateString("en-GB", { weekday: "long" })}, ${day}${suffix} ${d.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}`;
}

function getRelativeTime(dateStr) {
  if (!dateStr) return "";
  const diff = Date.now() - new Date(dateStr);
  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);
  if (days > 0) return `${days}d ${hrs % 24}h ago`;
  if (hrs > 0) return `${hrs}h ${mins % 60}m ago`;
  return `${mins}m ago`;
}

function BallComponent({ number, isBooster = false }) {
  return (
    <div style={{
      width: isBooster ? "52px" : "48px",
      height: isBooster ? "52px" : "48px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "800",
      fontSize: isBooster ? "18px" : "16px",
      background: isBooster
        ? "linear-gradient(135deg, #f59e0b, #b45309)"
        : "linear-gradient(135deg, #1a1100, #2d1f00)",
      border: isBooster ? "2px solid #f59e0b" : "2px solid #f59e0b44",
      color: isBooster ? "#0f0a00" : "#fef9ee",
      boxShadow: isBooster
        ? "0 0 20px rgba(245,158,11,0.5)"
        : "0 4px 12px rgba(0,0,0,0.4)",
      flexShrink: 0,
    }}>
      {number}
    </div>
  );
}

function ResultCard({ result, index }) {
  const isFirst = index === 0;
  const isSecond = index === 1;
  const numbers = result.numbers || result.balls || [];
  const mainNumbers = numbers.slice(0, 6);
  const booster = result.boosterBall || result.booster || numbers[6];

  return (
    <div style={{
      background: isFirst
        ? "linear-gradient(135deg, #1a0f00, #2d1a00)"
        : isSecond
        ? "linear-gradient(135deg, #120c00, #1f1400)"
        : "#111111",
      border: isFirst
        ? "1px solid #f59e0b66"
        : isSecond
        ? "1px solid #f59e0b33"
        : "1px solid #ffffff11",
      borderRadius: "16px",
      padding: "24px",
      marginBottom: "16px",
      position: "relative",
      overflow: "hidden",
    }}>
      {isFirst && (
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          background: "#f59e0b", color: "#0f0a00",
          fontSize: "11px", fontWeight: "700",
          padding: "4px 10px", borderRadius: "20px",
          textTransform: "uppercase", letterSpacing: "0.5px",
        }}>Latest</div>
      )}

      <div style={{ fontSize: "13px", color: "#a8956a", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
        <span>📅</span>
        <span>{formatDate(result.date || result.drawDate || result.createdAt)}</span>
        {isFirst && <span style={{ color: "#f59e0b88", marginLeft: "8px" }}>• {getRelativeTime(result.date || result.createdAt)}</span>}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        {mainNumbers.map((n, i) => <BallComponent key={i} number={n} />)}
        {booster && (
          <>
            <div style={{ color: "#a8956a", fontSize: "12px", fontWeight: "600", margin: "0 4px" }}>BONUS</div>
            <BallComponent number={booster} isBooster={true} />
          </>
        )}
      </div>
    </div>
  );
}

export default async function HomePage() {
  const results = await getBrunchtimeResults();
  const latest15 = results.slice(0, 15);

  return (
    <main style={{ minHeight: "100vh", background: "#0f0a00" }}>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "32px 24px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "900",
            color: "#fef9ee",
            lineHeight: 1.2,
            marginBottom: "12px",
          }}>
            UK 49s Brunchtime<br />
            <span style={{ color: "#f59e0b" }}>Results Today</span>
          </h1>
          <p style={{ color: "#a8956a", fontSize: "16px", lineHeight: 1.6, maxWidth: "500px", margin: "0 auto" }}>
            Latest winning numbers and Booster Ball from the daily UK 49s Brunchtime draw at 10:49 AM (UK time).
          </p>
        </div>

        {/* Today's Result */}
        {latest15.length > 0 && (
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "24px", fontWeight: "700",
              color: "#fef9ee", marginBottom: "8px",
            }}>
              Today's Brunchtime Winning Numbers
            </h2>
            <p style={{ color: "#a8956a", fontSize: "14px", marginBottom: "20px" }}>
              These are the most recent results, updated immediately after the draw.
            </p>
            <ResultCard result={latest15[0]} index={0} />
          </section>
        )}

        {/* Yesterday */}
        {latest15.length > 1 && (
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px", fontWeight: "700",
              color: "#fef9ee", marginBottom: "8px",
            }}>
              Yesterday's Brunchtime Results
            </h2>
            <p style={{ color: "#a8956a", fontSize: "14px", marginBottom: "20px" }}>
              Missed yesterday's draw? Check the official numbers below.
            </p>
            <ResultCard result={latest15[1]} index={1} />
          </section>
        )}

        {/* Last 15 */}
        {latest15.length > 2 && (
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px", fontWeight: "700",
              color: "#fef9ee", marginBottom: "8px",
            }}>
              Last 15 Brunchtime Results
            </h2>
            <p style={{ color: "#a8956a", fontSize: "14px", marginBottom: "20px" }}>
              Browse the most recent 15 draws in one place.
            </p>
            {latest15.slice(2).map((r, i) => <ResultCard key={i} result={r} index={i + 2} />)}
          </section>
        )}

        {/* Draw Schedule */}
        <section style={{
          background: "linear-gradient(135deg, #1a0f00, #2d1a00)",
          border: "1px solid #f59e0b33",
          borderRadius: "16px",
          padding: "28px",
          marginBottom: "40px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px", fontWeight: "700",
            color: "#f59e0b", marginBottom: "8px",
          }}>Brunchtime Draw Schedule</h2>
          <p style={{ color: "#a8956a", fontSize: "14px", marginBottom: "20px" }}>
            The UK 49s Brunchtime draw takes place every day at 10:49 AM (UK time).
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px" }}>
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
              <div key={day} style={{
                background: "#0f0a00", border: "1px solid #f59e0b22",
                borderRadius: "10px", padding: "10px 4px", textAlign: "center",
              }}>
                <div style={{ color: "#f59e0b", fontSize: "12px", fontWeight: "700" }}>{day}</div>
                <div style={{ color: "#a8956a", fontSize: "11px", marginTop: "4px" }}>10:49</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px", fontWeight: "700",
            color: "#fef9ee", marginBottom: "12px",
          }}>About UK 49s Brunchtime</h2>
          <p style={{ color: "#a8956a", fontSize: "15px", lineHeight: 1.7, marginBottom: "12px" }}>
            The UK 49s Brunchtime is a daily lottery draw held every morning at 10:49 AM (UK time). 
            Players pick between 1 and 6 numbers from 1 to 49 and place bets with licensed bookmakers. 
            Six main balls and one Booster Ball are drawn, giving players extra winning chances.
          </p>
          <p style={{ color: "#a8956a", fontSize: "15px", lineHeight: 1.7 }}>
            For predictions and full history, visit{" "}
            <a href="https://star49s.com/results/brunchtime" rel="dofollow"
              style={{ color: "#f59e0b", textDecoration: "underline" }}>
              Star49s Brunchtime Results
            </a>{" "}
            — the most comprehensive UK 49s results website.
          </p>
        </section>

        {/* CTA */}
        <section style={{
          background: "linear-gradient(135deg, #f59e0b, #ea580c)",
          borderRadius: "16px",
          padding: "32px",
          textAlign: "center",
          marginBottom: "40px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "24px", fontWeight: "900",
            color: "#0f0a00", marginBottom: "8px",
          }}>Want Brunchtime Predictions?</h2>
          <p style={{ color: "#1a0a00", fontSize: "15px", marginBottom: "20px" }}>
            Get daily hot number predictions before the draw on Star49s.
          </p>
          <a href="https://star49s.com/predictions/brunchtime" rel="dofollow"
            style={{
              background: "#0f0a00", color: "#f59e0b",
              padding: "12px 28px", borderRadius: "10px",
              fontSize: "15px", fontWeight: "700",
              textDecoration: "none", display: "inline-block",
            }}>
            View Brunchtime Predictions →
          </a>
        </section>

      </div>
    </main>
  );
}
