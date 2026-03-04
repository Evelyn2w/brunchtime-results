export const metadata = {
  title: "What is the UK 49s Brunchtime Draw? | Complete Guide",
  description: "Everything you need to know about the UK 49s Brunchtime draw — how it works, draw times, rules, and how to check results.",
};

export default function WhatIsBrunchtimePage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "20px", padding: "5px 14px", marginBottom: "16px" }}>
            <span style={{ color: "#4a90e2", fontSize: "12px", fontWeight: "700" }}>📖 COMPLETE GUIDE</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: "900", color: "#ffffff", lineHeight: 1.2, marginBottom: "14px" }}>
            What is the UK 49s<br /><span style={{ color: "#4a90e2" }}>Brunchtime Draw?</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>
            A complete beginner's guide to the UK 49s Brunchtime lottery draw — how it works, when it happens, and what makes it unique.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>

        {/* Quick Facts */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "12px", marginBottom: "40px" }}>
          {[["🕙","Draw Time","10:49 AM"],["📅","Days","Every Day"],["🎱","Balls Drawn","6 + Bonus"],["🔢","Number Pool","1 to 49"],["🏴󠁧󠁢󠁥󠁮󠁧󠁿","Origin","United Kingdom"],["🌍","Popular In","UK & South Africa"]].map(([icon,label,val]) => (
            <div key={label} style={{ background: "#0a1628", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", marginBottom: "6px" }}>{icon}</div>
              <div style={{ fontSize: "11px", color: "#5a7aaa", marginBottom: "3px" }}>{label}</div>
              <div style={{ fontWeight: "800", fontSize: "14px", color: "#ffffff" }}>{val}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "12px" }}>What is UK 49s Brunchtime?</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "12px" }}>
              The UK 49s Brunchtime is a daily lottery-style numbers draw held every morning at <strong style={{ color: "#0a1628" }}>10:49 AM (UK time)</strong>. It is operated by UK 49s Ltd and is one of the most popular betting-based draws in the United Kingdom and South Africa.
            </p>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85 }}>
              Unlike traditional lotteries where you buy a ticket, UK 49s Brunchtime is a <strong style={{ color: "#0a1628" }}>betting game</strong>. Players place bets with licensed bookmakers on which numbers they think will be drawn. This makes it available through shops, online betting platforms, and mobile apps.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "12px" }}>How Does the Brunchtime Draw Work?</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "16px" }}>
              The draw uses a mechanical ball machine containing 49 numbered balls (1–49). Six main balls are drawn one at a time, followed by one <strong style={{ color: "#0a1628" }}>Booster Ball</strong> drawn from the remaining 43 balls.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                ["1️⃣", "Six main balls are drawn from 49 numbered balls"],
                ["2️⃣", "One Booster Ball is drawn from the remaining 43 balls"],
                ["3️⃣", "Results are published immediately after the draw"],
                ["4️⃣", "Players compare their selections to the official results"],
                ["5️⃣", "Winnings are paid out by the bookmaker where the bet was placed"],
              ].map(([num, text]) => (
                <div key={num} style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "#f8faff", borderRadius: "10px", padding: "12px 16px" }}>
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>{num}</span>
                  <span style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "12px" }}>Brunchtime vs Other UK 49s Draws</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "16px" }}>
              UK 49s runs two draws every day. Here is how Brunchtime compares to the other draw:
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "#0a1628" }}>
                    {["Draw","Time","Days","Popularity"].map(h => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#ffffff", fontWeight: "700" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: "#1e6de511", borderBottom: "1px solid #e2e8f8" }}>
                    <td style={{ padding: "12px 16px", fontWeight: "700", color: "#0a1628" }}>🍳 Brunchtime</td>
                    <td style={{ padding: "12px 16px", color: "#5a6a8a" }}>10:49 AM</td>
                    <td style={{ padding: "12px 16px", color: "#5a6a8a" }}>Daily</td>
                    <td style={{ padding: "12px 16px", color: "#5a6a8a" }}>Very High</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f8" }}>
                    <td style={{ padding: "12px 16px", fontWeight: "700", color: "#0a1628" }}>🫖 Teatime</td>
                    <td style={{ padding: "12px 16px", color: "#5a6a8a" }}>5:49 PM</td>
                    <td style={{ padding: "12px 16px", color: "#5a6a8a" }}>Daily</td>
                    <td style={{ padding: "12px 16px", color: "#5a6a8a" }}>Very High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "12px" }}>Why is Brunchtime So Popular?</h2>
            <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.85, marginBottom: "12px" }}>
              The UK 49s Brunchtime draw has become one of the most followed daily draws worldwide for several reasons:
            </p>
            <ul style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 2.2, paddingLeft: "20px" }}>
              <li><strong style={{ color: "#0a1628" }}>Flexibility:</strong> Players choose how many numbers to pick (1–6), giving full control over risk and reward.</li>
              <li><strong style={{ color: "#0a1628" }}>Daily occurrence:</strong> Seven days a week including weekends means more chances to play.</li>
              <li><strong style={{ color: "#0a1628" }}>Accessible:</strong> Available through most UK bookmakers online and in-store.</li>
              <li><strong style={{ color: "#0a1628" }}>South Africa popularity:</strong> Hugely popular with South African players who follow both draws daily.</li>
              <li><strong style={{ color: "#0a1628" }}>Morning timing:</strong> The 10:49 AM draw suits players who prefer betting in the morning.</li>
            </ul>
          </div>

          {/* Internal Links */}
          <div style={{ background: "#0a1628", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#ffffff", marginBottom: "16px" }}>Learn More</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "10px" }}>
              {[
                { href: "/", label: "📊 Today's Results", desc: "Latest winning numbers" },
                { href: "/how-to-play", label: "🎮 How to Play", desc: "Step-by-step guide" },
                { href: "/booster-ball", label: "⭐ Booster Ball", desc: "What it is and how it works" },
                { href: "/predictions", label: "🎯 Today's Predictions", desc: "Hot number analysis" },
                { href: "/hot-numbers", label: "🔥 Hot Numbers", desc: "Most frequent numbers" },
                { href: "/winning-tips", label: "💡 Winning Tips", desc: "Expert strategies" },
              ].map(({ href, label, desc }) => (
                <a key={href} href={href} style={{ background: "#112240", border: "1px solid #1d3461", borderRadius: "10px", padding: "14px", textDecoration: "none" }}>
                  <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", marginBottom: "4px" }}>{label}</div>
                  <div style={{ color: "#5a7aaa", fontSize: "12px" }}>{desc}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
