export const dynamic = "force-dynamic";
<<<<<<< HEAD
import Link from "next/link";

async function getBrunchtimeResults() {
  try {
    const res = await fetch("https://star49s.com/api/results/brunchtime/get", { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.data) ? data.data : [];
  } catch { return []; }
}

function formatDate(dateStr) {
  if (!dateStr) return "Pending";
  const d = new Date(dateStr);
  if (isNaN(d)) return "—";
  const day = d.getDate();
  const suffix = [11,12,13].includes(day%100) ? "th" : ["st","nd","rd"][(day%10)-1] || "th";
  return `${d.toLocaleDateString("en-GB",{weekday:"long"})}, ${day}${suffix} ${d.toLocaleDateString("en-GB",{month:"long",year:"numeric"})}`;
}

function Ball({ number, isBooster }) {
  return (
    <div style={{ width: isBooster?"54px":"50px", height: isBooster?"54px":"50px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:"800", fontSize:"17px", background: isBooster?"linear-gradient(135deg,#1e6de5,#0a1628)":"#ffffff", border: isBooster?"3px solid #1e6de5":"2px solid #d0daf0", color: isBooster?"#ffffff":"#0a1628", boxShadow: isBooster?"0 4px 16px rgba(30,109,229,0.4)":"0 2px 8px rgba(0,0,0,0.08)", flexShrink:0 }}>{number}</div>
  );
}

function ResultCard({ result, isFirst, isSecond }) {
  const numbers = result.numbers || result.balls || [];
  const main = numbers.slice(0, 6);
  const booster = result.boosterBall || result.booster || numbers[6];
  return (
    <div style={{ background: isFirst?"linear-gradient(135deg,#0a1628,#112240)":"#ffffff", border: isFirst?"2px solid #1e6de5":"1px solid #e2e8f8", borderRadius:"16px", padding:"28px", boxShadow: isFirst?"0 8px 32px rgba(30,109,229,0.2)":"0 2px 12px rgba(0,0,0,0.05)" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"16px", flexWrap:"wrap", gap:"8px" }}>
        <div style={{ fontSize:"14px", color: isFirst?"#8aabcc":"#5a6a8a", fontWeight:"500" }}>📅 {formatDate(result.date||result.drawDate||result.createdAt)}</div>
        {isFirst && <span style={{ background:"#1e6de5", color:"#fff", fontSize:"11px", fontWeight:"700", padding:"4px 12px", borderRadius:"20px" }}>LATEST DRAW</span>}
        {isSecond && <span style={{ background:"#f0a500", color:"#fff", fontSize:"11px", fontWeight:"700", padding:"4px 12px", borderRadius:"20px" }}>YESTERDAY</span>}
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:"8px", flexWrap:"wrap" }}>
        {main.map((n,i) => <Ball key={i} number={n} />)}
        {booster && (<><div style={{ color: isFirst?"#5a7aaa":"#5a6a8a", fontSize:"12px", fontWeight:"700", margin:"0 4px" }}>BONUS</div><Ball number={booster} isBooster /></>)}
=======

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
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
      </div>
    </div>
  );
}

<<<<<<< HEAD
const faqs = [
  ["What time is the UK 49s Brunchtime draw?", "The UK 49s Brunchtime draw takes place every day at 10:49 AM (UK time), including weekends and public holidays. Results are posted here within minutes of the draw completing."],
  ["How many numbers are drawn in the Brunchtime?", "Six main balls and one Booster Ball are drawn from numbers 1 to 49. Players can bet on anywhere from 1 to 6 numbers with licensed bookmakers."],
  ["What is the Booster Ball in UK 49s?", "The Booster Ball is an additional ball drawn after the six main numbers. It is selected from the remaining 43 balls and provides extra winning chances depending on your bet type with the bookmaker."],
  ["How do I check if I've won the Brunchtime draw?", "Compare the numbers you bet with the winning numbers shown above. If your numbers match, take your bet slip to the bookmaker where you placed the bet to claim your winnings."],
  ["Are the results on this site official?", "Results are sourced from official UK 49s draw data and updated within minutes of each draw. We recommend verifying with your bookmaker before claiming."],
  ["Can I get Brunchtime predictions?", "Yes — visit our Predictions page for daily statistical analysis of hot and cold numbers. These are based on historical patterns and are updated before each draw."],
  ["What is the difference between Brunchtime and Teatime?", "Both are UK 49s draws with the same rules, but Brunchtime takes place at 10:49 AM and Teatime at 5:49 PM. Many players participate in both daily draws."],
  ["Where can I bet on the UK 49s Brunchtime?", "UK 49s bets can be placed with licensed bookmakers including Ladbrokes, Coral, William Hill, Betfred, and Paddy Power in the UK, and various licensed bookmakers in South Africa."],
];

export default async function HomePage() {
  const results = await getBrunchtimeResults();
  const latest = results.slice(0, 15);

  return (
    <main style={{ minHeight:"100vh", background:"#f8faff" }}>

      {/* Hero */}
      <section style={{ background:"linear-gradient(135deg,#0a1628 0%,#1d3461 100%)", padding:"64px 24px 52px", textAlign:"center" }}>
        <div style={{ maxWidth:"800px", margin:"0 auto" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#1e6de522", border:"1px solid #1e6de544", borderRadius:"20px", padding:"6px 16px", marginBottom:"20px" }}>
            <span style={{ fontSize:"12px", color:"#4a90e2", fontWeight:"700" }}>🟢 UPDATED AFTER EVERY DRAW</span>
          </div>
          <h1 style={{ fontSize:"clamp(28px,5vw,52px)", fontWeight:"900", color:"#ffffff", lineHeight:1.15, marginBottom:"16px", letterSpacing:"-1px" }}>
            UK 49s Brunchtime<br /><span style={{ color:"#4a90e2" }}>Results Today</span>
          </h1>
          <p style={{ color:"#8aabcc", fontSize:"17px", lineHeight:1.7, maxWidth:"580px", margin:"0 auto 32px" }}>
            Official winning numbers and Booster Ball from the daily UK 49s Brunchtime draw at 10:49 AM. Updated within minutes of every draw.
          </p>
          <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#today" style={{ background:"#1e6de5", color:"#fff", padding:"13px 28px", borderRadius:"10px", fontWeight:"700", textDecoration:"none", fontSize:"15px" }}>Today's Numbers ↓</a>
            <a href="#history" style={{ background:"transparent", color:"#fff", padding:"13px 28px", borderRadius:"10px", fontWeight:"700", textDecoration:"none", fontSize:"15px", border:"2px solid #1d3461" }}>View History</a>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section style={{ background:"#ffffff", borderBottom:"1px solid #e2e8f8" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))" }}>
          {[["🕙","Draw Time","10:49 AM"],["📅","Frequency","Every Day"],["🎱","Main Balls","6 Numbers"],["⭐","Booster","1 Ball"],["🔢","Range","1 – 49"]].map(([icon,label,val]) => (
            <div key={label} style={{ padding:"18px 12px", textAlign:"center", borderRight:"1px solid #f0f4ff" }}>
              <div style={{ fontSize:"22px", marginBottom:"4px" }}>{icon}</div>
              <div style={{ fontSize:"11px", color:"#5a6a8a", marginBottom:"2px" }}>{label}</div>
              <div style={{ fontWeight:"800", fontSize:"15px", color:"#0a1628" }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"48px 24px 64px" }}>

        {/* Today */}
        {latest.length > 0 && (
          <section id="today" style={{ marginBottom:"48px", scrollMarginTop:"80px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
              <div style={{ width:"4px", height:"32px", background:"#1e6de5", borderRadius:"2px" }} />
              <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>Today's Brunchtime Results</h2>
            </div>
            <p style={{ color:"#5a6a8a", fontSize:"15px", marginBottom:"20px", paddingLeft:"16px" }}>Official winning numbers from today's 10:49 AM draw.</p>
            <ResultCard result={latest[0]} isFirst />
=======
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
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
          </section>
        )}

        {/* Yesterday */}
<<<<<<< HEAD
        {latest.length > 1 && (
          <section id="yesterday" style={{ marginBottom:"48px", scrollMarginTop:"80px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
              <div style={{ width:"4px", height:"32px", background:"#f0a500", borderRadius:"2px" }} />
              <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>Yesterday's Brunchtime Results</h2>
            </div>
            <p style={{ color:"#5a6a8a", fontSize:"15px", marginBottom:"20px", paddingLeft:"16px" }}>The official numbers from the previous day's Brunchtime draw.</p>
            <ResultCard result={latest[1]} isSecond />
          </section>
        )}

        {/* History */}
        {latest.length > 2 && (
          <section id="history" style={{ marginBottom:"48px", scrollMarginTop:"80px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
              <div style={{ width:"4px", height:"32px", background:"#1d3461", borderRadius:"2px" }} />
              <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>Last 15 Brunchtime Results</h2>
            </div>
            <p style={{ color:"#5a6a8a", fontSize:"15px", marginBottom:"20px", paddingLeft:"16px" }}>Browse recent draws to spot patterns and track <Link href="/hot-numbers" style={{ color:"#1e6de5" }}>hot numbers</Link>.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {latest.slice(2).map((r,i) => <ResultCard key={i} result={r} />)}
            </div>
          </section>
        )}

        {/* Topical Authority Internal Links */}
        <section style={{ marginBottom:"48px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px" }}>
            <div style={{ width:"4px", height:"32px", background:"#1e6de5", borderRadius:"2px" }} />
            <h2 style={{ fontSize:"24px", fontWeight:"800", color:"#0a1628" }}>UK 49s Brunchtime Guides</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"16px" }}>
            {[
              { href:"/what-is-brunchtime", icon:"📖", title:"What is UK 49s Brunchtime?", desc:"Complete beginner guide — how the draw works, history, and why millions follow it daily." },
              { href:"/how-to-play", icon:"🎮", title:"How to Play UK 49s", desc:"Step-by-step guide to placing bets, understanding odds, and choosing your numbers." },
              { href:"/booster-ball", icon:"⭐", title:"Booster Ball Explained", desc:"How the 7th ball works, when to use 6-ball vs 7-ball, and how it affects payouts." },
              { href:"/hot-numbers", icon:"🔥", title:"Hot & Cold Numbers", desc:"Discover which Brunchtime numbers appear most and least frequently based on historical data." },
              { href:"/brunchtime-draw-time", icon:"🕙", title:"Draw Time & Schedule", desc:"Everything about the 10:49 AM draw time, timezone differences, and weekly schedule." },
              { href:"/winning-tips", icon:"💡", title:"Winning Tips & Strategies", desc:"Number selection strategies, bankroll management tips, and common mistakes to avoid." },
              { href:"/predictions", icon:"🎯", title:"Today's Predictions", desc:"Daily hot number predictions based on statistical analysis before every draw." },
            ].map(({ href, icon, title, desc }) => (
              <Link key={href} href={href} style={{ textDecoration:"none", background:"#ffffff", border:"1px solid #e2e8f8", borderRadius:"14px", padding:"22px", transition:"box-shadow 0.2s", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize:"28px", marginBottom:"10px" }}>{icon}</div>
                <div style={{ fontWeight:"700", fontSize:"15px", color:"#0a1628", marginBottom:"6px" }}>{title}</div>
                <div style={{ color:"#5a6a8a", fontSize:"13px", lineHeight:1.6 }}>{desc}</div>
                <div style={{ color:"#1e6de5", fontSize:"13px", fontWeight:"700", marginTop:"10px" }}>Read more →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Draw Schedule */}
        <section style={{ background:"#0a1628", borderRadius:"20px", padding:"36px", marginBottom:"48px" }}>
          <h2 style={{ fontSize:"22px", fontWeight:"800", color:"#ffffff", marginBottom:"8px" }}>Weekly Draw Schedule</h2>
          <p style={{ color:"#5a7aaa", fontSize:"14px", marginBottom:"24px" }}>UK 49s Brunchtime runs every day at 10:49 AM — including weekends. See our <Link href="/brunchtime-draw-time" style={{ color:"#4a90e2" }}>full draw time guide</Link>.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"8px" }}>
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
              <div key={d} style={{ background:"#112240", border:"1px solid #1d3461", borderRadius:"10px", padding:"12px 4px", textAlign:"center" }}>
                <div style={{ color:"#4a90e2", fontSize:"12px", fontWeight:"700" }}>{d}</div>
                <div style={{ color:"#5a7aaa", fontSize:"11px", marginTop:"6px" }}>10:49</div>
                <div style={{ color:"#1e6de5", fontSize:"10px", marginTop:"4px" }}>●</div>
=======
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
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
              </div>
            ))}
          </div>
        </section>

        {/* About */}
<<<<<<< HEAD
        <section style={{ marginBottom:"48px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px" }}>
            <div style={{ width:"4px", height:"32px", background:"#1e6de5", borderRadius:"2px" }} />
            <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>About the UK 49s Brunchtime Draw</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"20px" }}>
            {[
              { title:"How It Works", text:"Six main balls and one Booster Ball are drawn from 49 numbers. Players bet on 1–6 numbers with licensed bookmakers. The fewer numbers you pick, the higher the odds. Learn more in our how-to-play guide.", link:"/how-to-play", linkText:"How to Play →" },
              { title:"Hot & Cold Numbers", text:"Tracking which numbers appear frequently (hot) and which haven't appeared lately (cold) is a popular strategy among experienced players. Our analysis is updated after every draw.", link:"/hot-numbers", linkText:"View Hot Numbers →" },
              { title:"The Booster Ball", text:"After the six main balls, one Booster Ball is drawn from the remaining 43. It offers extra winning opportunities depending on your bet type. Some players bet specifically on the Booster.", link:"/uk49s-brunchtime-guide", linkText:"Full Guide →" },
              { title:"Responsible Gambling", text:"UK 49s involves real money. Always bet within your means. This site provides results and information only. For gambling support, contact GamCare or BeGambleAware.", link:"/terms", linkText:"Our Disclaimer →" },
            ].map(({ title, text, link, linkText }) => (
              <div key={title} style={{ background:"#ffffff", border:"1px solid #e2e8f8", borderRadius:"16px", padding:"24px" }}>
                <h3 style={{ fontSize:"17px", fontWeight:"700", color:"#0a1628", marginBottom:"10px" }}>{title}</h3>
                <p style={{ color:"#5a6a8a", fontSize:"14px", lineHeight:1.8, marginBottom:"12px" }}>{text}</p>
                <Link href={link} style={{ color:"#1e6de5", fontSize:"13px", fontWeight:"700", textDecoration:"none" }}>{linkText}</Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom:"48px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
            <div style={{ width:"4px", height:"32px", background:"#1e6de5", borderRadius:"2px" }} />
            <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>Frequently Asked Questions</h2>
          </div>
          <p style={{ color:"#5a6a8a", fontSize:"15px", marginBottom:"24px", paddingLeft:"16px" }}>
            Everything you need to know about the UK 49s Brunchtime draw. For more, read our <Link href="/uk49s-brunchtime-guide" style={{ color:"#1e6de5" }}>complete guide</Link>.
          </p>
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {faqs.map(([q, a]) => (
              <div key={q} style={{ background:"#ffffff", border:"1px solid #e2e8f8", borderRadius:"12px", padding:"20px 24px" }}>
                <div style={{ fontWeight:"700", color:"#0a1628", fontSize:"15px", marginBottom:"8px" }}>{q}</div>
                <div style={{ color:"#5a6a8a", fontSize:"14px", lineHeight:1.7 }}>{a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background:"linear-gradient(135deg,#1e6de5,#0a1628)", borderRadius:"20px", padding:"44px", textAlign:"center" }}>
          <h2 style={{ fontSize:"26px", fontWeight:"900", color:"#ffffff", marginBottom:"10px" }}>Want Daily Brunchtime Predictions?</h2>
          <p style={{ color:"#8aabcc", fontSize:"15px", marginBottom:"24px", maxWidth:"480px", margin:"0 auto 24px" }}>Expert hot number analysis before every draw, based on statistical patterns from hundreds of past results.</p>
          <Link href="/predictions" style={{ background:"#ffffff", color:"#0a1628", padding:"13px 28px", borderRadius:"10px", fontWeight:"800", textDecoration:"none", fontSize:"15px" }}>View Today's Predictions →</Link>
=======
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
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
        </section>

      </div>
    </main>
  );
}
