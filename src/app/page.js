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

// White ball with thick colored border — exactly like 49s.co.uk
const BORDER_COLORS = [
  "#c0392b", // red
  "#d4ac0d", // gold
  "#7d3c98", // purple
  "#2471a3", // blue
  "#d35400", // orange
  "#784212", // brown
];

function getBorderColor(number) {
  return BORDER_COLORS[(number - 1) % BORDER_COLORS.length];
}

function Ball({ number, isBooster, size = 48 }) {
  const borderColor = isBooster ? "#7d3c98" : getBorderColor(number);
  const borderWidth = size >= 44 ? "5px" : "4px";
  const fontSize = size >= 48 ? "18px" : size >= 36 ? "14px" : "12px";
  return (
    <div style={{
      width: `${size}px`, height: `${size}px`,
      borderRadius: "50%",
      background: "#ffffff",
      border: `${borderWidth} solid ${borderColor}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: "900", fontSize,
      color: "#1a1a1a",
      flexShrink: 0,
      boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
      letterSpacing: "-0.5px",
    }}>{number}</div>
  );
}

function ResultCard({ result, label, isFirst }) {
  const numbers = result.numbers || result.balls || [];
  const main = numbers.slice(0, 6);
  const booster = result.boosterBall || result.booster || numbers[6];
  return (
    <div style={{
      background:"#ffffff",
      border: isFirst?"2px solid #3498db":"1px solid #e8ecf0",
      borderRadius:"12px", padding:"20px 24px",
      boxShadow: isFirst?"0 4px 20px rgba(52,152,219,0.15)":"0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"14px", flexWrap:"wrap", gap:"8px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          {label && <span style={{ background: isFirst?"#3498db":"#95a5a6", color:"#fff", fontSize:"11px", fontWeight:"700", padding:"3px 10px", borderRadius:"4px", textTransform:"uppercase" }}>{label}</span>}
          <span style={{ fontSize:"16px", color:"#1a1a1a" }}>{formatDate(result.date||result.drawDate||result.createdAt)}</span>
        </div>
        <span style={{ fontSize:"12px", color:"#1a1a1a" }}>10:49 AM</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:"8px", flexWrap:"wrap" }}>
        {main.map((n,i) => <Ball key={i} number={n} />)}
        {booster && (<>
          <div style={{ width:"1px", height:"40px", background:"#e8ecf0", margin:"0 6px", flexShrink:0 }} />
          <Ball number={booster} isBooster />
          <span style={{ fontSize:"11px", color:"#9b59b6", fontWeight:"700", textTransform:"uppercase" }}>Booster</span>
        </>)}
      </div>
    </div>
  );
}

function HistoryRow({ result, index }) {
  const numbers = result.numbers || result.balls || [];
  const main = numbers.slice(0, 6);
  const booster = result.boosterBall || result.booster || numbers[6];
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"8px", padding:"14px 16px", background: index%2===0?"#ffffff":"#f8f9fa", borderBottom:"1px solid #f0f0f0" }}>
      <div style={{ fontSize:"18px", color:"#1a1a1a", fontWeight:"500" }}>{formatDate(result.date||result.drawDate||result.createdAt)}</div>
      <div style={{ display:"flex", alignItems:"center", gap:"6px", flexWrap:"wrap" }}>
        {main.map((n,i) => <Ball key={i} number={n} size={36} />)}
        {booster && (<>
          <div style={{ width:"1px", height:"26px", background:"#e8ecf0", margin:"0 6px" }} />
          <Ball number={booster} isBooster size={36} />
        </>)}
      </div>
    </div>
  );
}

const faqs = [
  ["What time is the UK 49s Brunchtime draw?","The UK 49s Brunchtime draw takes place every day at 10:49 AM (UK time), including weekends and public holidays."],
  ["How many numbers are drawn?","Six main balls and one Booster Ball are drawn from numbers 1 to 49."],
  ["What is the Booster Ball?","The Booster Ball is drawn after the six main numbers from the remaining 43 balls."],
  ["How do I check if I've won?","Compare your numbers with the winning numbers above, then visit your bookmaker to claim."],
  ["Can I get predictions?","Yes — visit our Predictions page for daily hot number analysis."],
  ["Where can I bet?","Licensed bookmakers including Ladbrokes, Coral, William Hill, Betfred, and Paddy Power."],
];

export default async function HomePage() {
  const results = await getBrunchtimeResults();
  const latest = results.slice(0, 15);

  const SITE_URL = "https://brunchtime-results.vercel.app";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Brunchtime Results",
    "url": SITE_URL,
    "description": "UK 49s Brunchtime results updated daily. Check today's winning numbers and Booster Ball.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brunchtime Results",
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.ico`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@star49s.com",
      "contactType": "customer support"
    }
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "UK 49s Brunchtime Results Today | Winning Numbers",
    "url": SITE_URL,
    "description": "Check today's UK 49s Brunchtime results. Latest winning numbers and Booster Ball from the daily 10:49 AM draw.",
    "isPartOf": { "@type": "WebSite", "url": SITE_URL },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL }]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(([q, a]) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <main style={{ minHeight:"100vh", background:"#f4f6f8" }}>

      <div style={{ background:"#ffffff", borderBottom:"1px solid #e8ecf0", padding:"24px" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", textAlign:"center" }}>
          <h1 style={{ fontSize:"28px", fontWeight:"900", color:"#1a1a1a", margin:0 }}>UK 49s Brunchtime Results</h1>
        </div>
      </div>

      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"24px 24px 64px" }}>

        {latest.length > 0 && (
          <section id="today" style={{ marginBottom:"16px", scrollMarginTop:"80px" }}>
            <ResultCard result={latest[0]} label="Latest Draw" isFirst />
          </section>
        )}

        {latest.length > 1 && (
          <section id="yesterday" style={{ marginBottom:"24px", scrollMarginTop:"80px" }}>
            <ResultCard result={latest[1]} label="Yesterday" />
          </section>
        )}

        {latest.length > 2 && (
          <section id="history" style={{ marginBottom:"40px", scrollMarginTop:"80px" }}>
            <div style={{ background:"#ffffff", border:"1px solid #e8ecf0", borderRadius:"12px", overflow:"hidden" }}>
              <div style={{ padding:"14px 16px", borderBottom:"1px solid #e8ecf0", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <h2 style={{ fontSize:"18px", fontWeight:"700", color:"#1a1a1a", margin:0 }}>Last 15 Draws</h2>
                <Link href="/hot-numbers" style={{ fontSize:"12px", color:"#3498db", textDecoration:"none", fontWeight:"600" }}>Hot Numbers →</Link>
              </div>
              {latest.slice(2).map((r,i) => <HistoryRow key={i} result={r} index={i} />)}
            </div>
          </section>
        )}

        <section style={{ marginBottom:"40px" }}>
          <h2 style={{ fontSize:"16px", fontWeight:"700", color:"#1a1a1a", marginBottom:"14px" }}>Brunchtime Guides</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"10px" }}>
            {[
              {href:"/what-is-brunchtime",icon:"📖",title:"What is Brunchtime?"},
              {href:"/how-to-play",icon:"🎮",title:"How to Play"},
              {href:"/booster-ball",icon:"⭐",title:"Booster Ball Guide"},
              {href:"/hot-numbers",icon:"🔥",title:"Hot & Cold Numbers"},
              {href:"/brunchtime-draw-time",icon:"🕙",title:"Draw Time & Schedule"},
              {href:"/winning-tips",icon:"💡",title:"Winning Tips"},
              {href:"/predictions",icon:"🎯",title:"Today's Predictions"},
            ].map(({href,icon,title}) => (
              <Link key={href} href={href} style={{ background:"#ffffff", border:"1px solid #e8ecf0", borderRadius:"8px", padding:"14px 16px", textDecoration:"none", display:"flex", alignItems:"center", gap:"10px" }}>
                <span style={{ fontSize:"18px" }}>{icon}</span>
                <span style={{ fontSize:"16px", fontWeight:"600", color:"#1a1a1a" }}>{title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize:"16px", fontWeight:"700", color:"#1a1a1a", marginBottom:"14px" }}>Frequently Asked Questions</h2>
          <div style={{ background:"#ffffff", border:"1px solid #e8ecf0", borderRadius:"12px", overflow:"hidden" }}>
            {faqs.map(([q,a],i) => (
              <div key={q} style={{ padding:"16px 20px", borderBottom: i<faqs.length-1?"1px solid #f0f0f0":"none" }}>
                <div style={{ fontWeight:"700", color:"#1a1a1a", fontSize:"18px", fontWeight:"700", marginBottom:"6px" }}>{q}</div>
                <div style={{ color:"#1a1a1a", fontSize:"18px", lineHeight:1.7 }}>{a}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
    </>
  );
}