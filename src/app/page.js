export const dynamic = "force-dynamic";
import Link from "next/link";

async function getBrunchtimeResults() {
  try {
    const res = await fetch("https://star49s.com/api/results/brunchtime/get", { next: { revalidate: 3600 } });
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
      </div>
    </div>
  );
}

const faqs = [
  ["What time is the UK 49s Brunchtime draw?", "The UK 49s Brunchtime draw takes place every day at 10:49 AM (UK time), including weekends and public holidays."],
  ["How many numbers are drawn?", "Six main balls and one Booster Ball are drawn from numbers 1 to 49."],
  ["What is the Booster Ball?", "The Booster Ball is drawn after the six main numbers from the remaining 43 balls."],
  ["How do I check if I've won?", "Compare your numbers with the winning numbers above, then visit your bookmaker to claim."],
  ["Are results official?", "Results are sourced from official UK 49s draw data and updated within minutes."],
  ["Can I get predictions?", "Yes — visit our Predictions page for daily hot number analysis."],
  ["Brunchtime vs Teatime?", "Brunchtime is at 10:49 AM and Teatime at 5:49 PM. Same rules, different times."],
  ["Where to bet?", "Licensed bookmakers including Ladbrokes, Coral, William Hill, Betfred, and Paddy Power."],
];

export default async function HomePage() {
  const results = await getBrunchtimeResults();
  const latest = results.slice(0, 15);
  return (
    <main style={{ minHeight:"100vh", background:"#f8faff" }}>
      <section style={{ background:"linear-gradient(135deg,#0a1628,#1d3461)", padding:"64px 24px 52px", textAlign:"center" }}>
        <div style={{ maxWidth:"800px", margin:"0 auto" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"#1e6de522", border:"1px solid #1e6de544", borderRadius:"20px", padding:"6px 16px", marginBottom:"20px" }}>
            <span style={{ fontSize:"12px", color:"#4a90e2", fontWeight:"700" }}>🟢 UPDATED AFTER EVERY DRAW</span>
          </div>
          <h1 style={{ fontSize:"clamp(28px,5vw,52px)", fontWeight:"900", color:"#ffffff", lineHeight:1.15, marginBottom:"16px" }}>
            UK 49s Brunchtime<br /><span style={{ color:"#4a90e2" }}>Results Today</span>
          </h1>
          <p style={{ color:"#8aabcc", fontSize:"17px", lineHeight:1.7, maxWidth:"580px", margin:"0 auto 32px" }}>
            Official winning numbers from the daily 10:49 AM draw. Updated within minutes.
          </p>
          <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#today" style={{ background:"#1e6de5", color:"#fff", padding:"13px 28px", borderRadius:"10px", fontWeight:"700", textDecoration:"none", fontSize:"15px" }}>Today's Numbers ↓</a>
            <a href="#history" style={{ background:"transparent", color:"#fff", padding:"13px 28px", borderRadius:"10px", fontWeight:"700", textDecoration:"none", fontSize:"15px", border:"2px solid #1d3461" }}>View History</a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"48px 24px 64px" }}>
        {latest.length > 0 && (
          <section id="today" style={{ marginBottom:"48px", scrollMarginTop:"80px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
              <div style={{ width:"4px", height:"32px", background:"#1e6de5", borderRadius:"2px" }} />
              <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>Today's Brunchtime Results</h2>
            </div>
            <ResultCard result={latest[0]} isFirst />
          </section>
        )}
        {latest.length > 1 && (
          <section id="yesterday" style={{ marginBottom:"48px", scrollMarginTop:"80px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
              <div style={{ width:"4px", height:"32px", background:"#f0a500", borderRadius:"2px" }} />
              <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>Yesterday's Results</h2>
            </div>
            <ResultCard result={latest[1]} isSecond />
          </section>
        )}
        {latest.length > 2 && (
          <section id="history" style={{ marginBottom:"48px", scrollMarginTop:"80px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
              <div style={{ width:"4px", height:"32px", background:"#1d3461", borderRadius:"2px" }} />
              <h2 style={{ fontSize:"26px", fontWeight:"800", color:"#0a1628" }}>Last 15 Results</h2>
            </div>
            <p style={{ color:"#5a6a8a", fontSize:"15px", marginBottom:"20px", paddingLeft:"16px" }}>Track <Link href="/hot-numbers" style={{ color:"#1e6de5" }}>hot numbers</Link> from recent draws.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {latest.slice(2).map((r,i) => <ResultCard key={i} result={r} />)}
            </div>
          </section>
        )}
        <section style={{ marginBottom:"48px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"20px" }}>
            <div style={{ width:"4px", height:"32px", background:"#1e6de5", borderRadius:"2px" }} />
            <h2 style={{ fontSize:"24px", fontWeight:"800", color:"#0a1628" }}>UK 49s Brunchtime Guides</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"16px" }}>
            {[
              { href:"/what-is-brunchtime", icon:"📖", title:"What is Brunchtime?", desc:"How the draw works and why millions follow it." },
              { href:"/how-to-play", icon:"🎮", title:"How to Play", desc:"Step-by-step betting guide for new players." },
              { href:"/booster-ball", icon:"⭐", title:"Booster Ball", desc:"6-ball vs 7-ball explained simply." },
              { href:"/hot-numbers", icon:"🔥", title:"Hot Numbers", desc:"Most and least frequent numbers." },
              { href:"/brunchtime-draw-time", icon:"🕙", title:"Draw Schedule", desc:"Times, time zones, and weekly schedule." },
              { href:"/winning-tips", icon:"💡", title:"Winning Tips", desc:"Strategies and bankroll management." },
              { href:"/predictions", icon:"🎯", title:"Predictions", desc:"Daily hot number analysis." },
            ].map(({ href, icon, title, desc }) => (
              <Link key={href} href={href} style={{ textDecoration:"none", background:"#ffffff", border:"1px solid #e2e8f8", borderRadius:"14px", padding:"22px", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize:"28px", marginBottom:"10px" }}>{icon}</div>
                <div style={{ fontWeight:"700", fontSize:"15px", color:"#0a1628", marginBottom:"6px" }}>{title}</div>
                <div style={{ color:"#5a6a8a", fontSize:"13px", lineHeight:1.6 }}>{desc}</div>
                <div style={{ color:"#1e6de5", fontSize:"13px", fontWeight:"700", marginTop:"10px" }}>Read more →</div>
              </Link>
            ))}
          </div>
        </section>
        <section style={{ display:"flex", flexDirection:"column", gap:"10px", marginBottom:"48px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"8px" }}>
            <div style={{ width:"4px", height:"32px", background:"#1e6de5", borderRadius:"2px" }} />
            <h2 style={{ fontSize:"24px", fontWeight:"800", color:"#0a1628" }}>Frequently Asked Questions</h2>
          </div>
          {faqs.map(([q,a]) => (
            <div key={q} style={{ background:"#ffffff", border:"1px solid #e2e8f8", borderRadius:"12px", padding:"20px 24px" }}>
              <div style={{ fontWeight:"700", color:"#0a1628", fontSize:"15px", marginBottom:"8px" }}>{q}</div>
              <div style={{ color:"#5a6a8a", fontSize:"14px", lineHeight:1.7 }}>{a}</div>
            </div>
          ))}
        </section>
        <section style={{ background:"linear-gradient(135deg,#1e6de5,#0a1628)", borderRadius:"20px", padding:"44px", textAlign:"center" }}>
          <h2 style={{ fontSize:"26px", fontWeight:"900", color:"#ffffff", marginBottom:"10px" }}>Want Daily Predictions?</h2>
          <p style={{ color:"#8aabcc", fontSize:"15px", marginBottom:"24px" }}>Hot number analysis before every draw.</p>
          <Link href="/predictions" style={{ background:"#ffffff", color:"#0a1628", padding:"13px 28px", borderRadius:"10px", fontWeight:"800", textDecoration:"none", fontSize:"15px" }}>View Predictions →</Link>
        </section>
      </div>
    </main>
  );
}