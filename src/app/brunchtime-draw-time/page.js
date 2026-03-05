import Link from "next/link";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/brunchtime-draw-time" },
  title: "UK 49s Brunchtime Draw Time & Schedule | Daily at 10:49 AM",
  description: "Find out the exact UK 49s Brunchtime draw time, weekly schedule, and what to do if results are delayed.",
};

const schedule = [
  { day: "Monday" }, { day: "Tuesday" }, { day: "Wednesday" }, { day: "Thursday" },
  { day: "Friday" }, { day: "Saturday" }, { day: "Sunday" },
];

export default function DrawTimePage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>

      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "10px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500", whiteSpace: "nowrap" }}>Home</Link>
          <span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span>
          <span style={{ color: "#666666", fontSize: "14px", whiteSpace: "nowrap" }}>Guides</span>
          <span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span>
          <span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap" }}>Draw Time & Schedule</span>
        </div>
      </nav>

      <div style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0", padding: "32px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: "900", color: "#1a1a1a", margin: 0 }}>Brunchtime Draw Time & Weekly Schedule</h1>
          <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.7, marginTop: "12px", marginBottom: 0 }}>Everything you need to know about when the UK 49s Brunchtime draw takes place.</p>
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "13px", color: "#1a1a1a", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>Daily Brunchtime Draw</div>
            <div style={{ fontSize: "clamp(48px,8vw,80px)", fontWeight: "900", color: "#1a1a1a", lineHeight: 1 }}>10:49 <span style={{ color: "#2471a3" }}>AM</span></div>
            <div style={{ fontSize: "18px", color: "#1a1a1a", marginTop: "12px" }}>UK Time (GMT / BST) — Every Day of the Year</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              {[["Results in", "~5 mins"], ["Draws per year", "365"], ["Time zone", "GMT/BST"]].map(([label, val]) => (
                <div key={label} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "10px", padding: "12px 20px" }}>
                  <div style={{ color: "#1a1a1a", fontSize: "13px", fontWeight: "700" }}>{label}</div>
                  <div style={{ color: "#1a1a1a", fontWeight: "800", fontSize: "18px" }}>{val}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Why 10:49 AM?</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "14px" }}>The timing of the UK 49s Brunchtime draw is not accidental. The 10:49 AM slot was chosen to sit in the gap between the morning rush and lunchtime, giving players a convenient window to check results before their midday break. The specific time of 10:49 — rather than a round number like 11:00 — is typical of UK 49s draws, which also include the 5:49 PM Teatime slot.</p>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: 0 }}>For players in South Africa, 10:49 AM UK time translates to 11:49 AM or 12:49 PM local time depending on the time of year, which also falls conveniently around the late morning to lunchtime period. This is one reason why the Brunchtime draw has such a strong following in South Africa.</p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Weekly Schedule</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "20px" }}>One of the great things about the UK 49s Brunchtime draw is its consistency. Unlike some lottery draws that only happen on specific days of the week, Brunchtime runs every single day without exception.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {schedule.map(({ day }) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f4f6f8", borderRadius: "10px", padding: "14px 18px" }}>
                  <div style={{ fontWeight: "700", color: "#1a1a1a", fontSize: "16px" }}>{day}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontWeight: "700", color: "#2471a3", fontSize: "16px" }}>10:49 AM</span>
                    <span style={{ background: "#dcfce7", color: "#16a34a", fontSize: "12px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px" }}>✓ Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Draw Time Around the World</h2>
            <p style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.8, marginBottom: "20px" }}>The official time is always 10:49 AM UK time. Here is when that falls in other regions where UK 49s is popular:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px" }}>
              {[
                { flag: "🇬🇧", region: "United Kingdom", time: "10:49 AM", tz: "GMT/BST" },
                { flag: "🇿🇦", region: "South Africa", time: "11:49 AM / 12:49 PM", tz: "SAST" },
                { flag: "🇺🇸", region: "New York", time: "5:49 AM", tz: "EST/EDT" },
                { flag: "🇮🇳", region: "India", time: "4:19 PM / 3:19 PM", tz: "IST" },
                { flag: "🇦🇺", region: "Sydney", time: "9:49 PM", tz: "AEST" },
                { flag: "🇦🇪", region: "Dubai", time: "2:49 PM", tz: "GST" },
              ].map(({ flag, region, time, tz }) => (
                <div key={region} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "10px", padding: "16px" }}>
                  <div style={{ fontSize: "22px", marginBottom: "6px" }}>{flag}</div>
                  <div style={{ fontWeight: "700", color: "#1a1a1a", fontSize: "14px", marginBottom: "4px" }}>{region}</div>
                  <div style={{ color: "#2471a3", fontWeight: "800", fontSize: "15px" }}>{time}</div>
                  <div style={{ color: "#1a1a1a", fontSize: "12px", marginTop: "2px" }}>{tz}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "32px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#1a1a1a", marginBottom: "16px" }}>Frequently Asked Questions</h2>
            {[
              ["Does the draw happen on bank holidays?", "Yes. The UK 49s Brunchtime draw runs every single day of the year, including all UK bank holidays, Christmas Day, and New Year's Day. This is one of the things that makes it popular — you never have to wonder whether there will be a draw today."],
              ["What if the draw is delayed?", "Occasional delays do happen, usually due to technical issues. When this occurs, results are typically published within 15 to 30 minutes of the scheduled time. We update this site as soon as official results are confirmed, so checking back here is a reliable way to stay informed."],
              ["Is 10:49 AM GMT or BST?", "The draw always takes place at 10:49 AM UK local time. During British Summer Time, which runs from late March to late October, this means 10:49 BST which is UTC+1. In winter it reverts to 10:49 GMT which is UTC+0. The draw time itself never changes — only the offset from UTC."],
              ["Can I bet after the draw has started?", "No. Bookmakers close their betting markets before the draw begins, typically several minutes before 10:49 AM. If you try to place a bet too close to the draw time, the market will already be closed. Always place your bet in advance to avoid missing out."],
              ["When are results posted here?", "We aim to publish results within five minutes of the draw completing. You can bookmark our homepage and check back shortly after 10:49 AM each day for the latest numbers."],
            ].map(([q, a]) => (
              <div key={q} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #e8ecf0" }}>
                <div style={{ fontWeight: "700", color: "#1a1a1a", fontSize: "18px", marginBottom: "8px" }}>{q}</div>
                <div style={{ color: "#1a1a1a", fontSize: "17px", lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#ffffff", border: "1px solid #e8ecf0", borderRadius: "12px", padding: "24px 28px" }}>
            <h3 style={{ color: "#1a1a1a", fontWeight: "700", fontSize: "18px", marginBottom: "14px" }}>Related Guides</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
              {[["/what-is-brunchtime","📖 What is Brunchtime?"],["/how-to-play","🎮 How to Play"],["/booster-ball","⭐ Booster Ball Guide"],["/hot-numbers","🔥 Hot Numbers"],["/winning-tips","💡 Winning Tips"],["/","📊 Today's Results"]].map(([href,label]) => (
                <Link key={href} href={href} style={{ background: "#f4f6f8", border: "1px solid #e8ecf0", borderRadius: "8px", padding: "12px 14px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "600" }}>{label}</Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}