import Link from "next/link";

export const metadata = {
  title: "UK 49s Brunchtime Draw Time & Schedule | Daily at 10:49 AM",
  description: "Find out the exact UK 49s Brunchtime draw time, weekly schedule, and what to do if results are delayed. Updated information for 2025.",
};

const schedule = [
  { day: "Monday", time: "10:49 AM", status: "active" },
  { day: "Tuesday", time: "10:49 AM", status: "active" },
  { day: "Wednesday", time: "10:49 AM", status: "active" },
  { day: "Thursday", time: "10:49 AM", status: "active" },
  { day: "Friday", time: "10:49 AM", status: "active" },
  { day: "Saturday", time: "10:49 AM", status: "active" },
  { day: "Sunday", time: "10:49 AM", status: "active" },
];

export default function DrawTimePage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg,#0a1628,#1d3461)", padding: "52px 24px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "20px", padding: "5px 14px", marginBottom: "16px" }}>
            <span style={{ color: "#4a90e2", fontSize: "12px", fontWeight: "700" }}>🕙 SCHEDULE</span>
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: "900", color: "#ffffff", lineHeight: 1.2, marginBottom: "14px" }}>
            Brunchtime Draw Time<br /><span style={{ color: "#4a90e2" }}>& Weekly Schedule</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>
            The UK 49s Brunchtime draw takes place every single day of the year — including weekends and public holidays.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Big time display */}
          <div style={{ background: "linear-gradient(135deg,#0a1628,#112240)", border: "2px solid #1e6de5", borderRadius: "20px", padding: "36px", textAlign: "center" }}>
            <div style={{ fontSize: "14px", color: "#5a7aaa", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px" }}>Daily Brunchtime Draw</div>
            <div style={{ fontSize: "clamp(48px,8vw,80px)", fontWeight: "900", color: "#ffffff", lineHeight: 1 }}>10:49 <span style={{ color: "#4a90e2" }}>AM</span></div>
            <div style={{ fontSize: "16px", color: "#8aabcc", marginTop: "12px" }}>UK Time (GMT / BST) — Every Day of the Year</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
              <div style={{ background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "10px", padding: "10px 20px" }}>
                <div style={{ color: "#4a90e2", fontSize: "13px", fontWeight: "700" }}>Results in</div>
                <div style={{ color: "#ffffff", fontWeight: "800", fontSize: "18px" }}>~5 mins</div>
              </div>
              <div style={{ background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "10px", padding: "10px 20px" }}>
                <div style={{ color: "#4a90e2", fontSize: "13px", fontWeight: "700" }}>Draws per year</div>
                <div style={{ color: "#ffffff", fontWeight: "800", fontSize: "18px" }}>365</div>
              </div>
              <div style={{ background: "#1e6de522", border: "1px solid #1e6de544", borderRadius: "10px", padding: "10px 20px" }}>
                <div style={{ color: "#4a90e2", fontSize: "13px", fontWeight: "700" }}>Time zone</div>
                <div style={{ color: "#ffffff", fontWeight: "800", fontSize: "18px" }}>GMT/BST</div>
              </div>
            </div>
          </div>

          {/* Weekly schedule */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "16px" }}>Weekly Draw Schedule</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {schedule.map(({ day, time }) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8faff", borderRadius: "10px", padding: "14px 18px" }}>
                  <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "15px" }}>{day}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontWeight: "700", color: "#1e6de5", fontSize: "15px" }}>{time}</span>
                    <span style={{ background: "#dcfce7", color: "#16a34a", fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px" }}>✓ Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time zones */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "16px" }}>Draw Time in Your Time Zone</h2>
            <p style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
              The official draw time is 10:49 AM UK time. Here is when that falls in other popular regions where UK 49s is followed:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "12px" }}>
              {[
                { flag: "🇬🇧", region: "United Kingdom", time: "10:49 AM", tz: "GMT/BST" },
                { flag: "🇿🇦", region: "South Africa", time: "11:49 AM / 12:49 PM", tz: "SAST (+1/+2)" },
                { flag: "🇺🇸", region: "New York (EST)", time: "5:49 AM", tz: "EST/EDT" },
                { flag: "🇮🇳", region: "India (IST)", time: "4:19 PM / 3:19 PM", tz: "IST (+5:30)" },
                { flag: "🇦🇺", region: "Sydney (AEST)", time: "9:49 PM", tz: "AEST (+11)" },
                { flag: "🇦🇪", region: "Dubai (GST)", time: "2:49 PM", tz: "GST (+4)" },
              ].map(({ flag, region, time, tz }) => (
                <div key={region} style={{ background: "#f8faff", border: "1px solid #e2e8f8", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontSize: "22px", marginBottom: "6px" }}>{flag}</div>
                  <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "13px", marginBottom: "4px" }}>{region}</div>
                  <div style={{ color: "#1e6de5", fontWeight: "800", fontSize: "14px" }}>{time}</div>
                  <div style={{ color: "#5a6a8a", fontSize: "11px", marginTop: "2px" }}>{tz}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "16px" }}>Draw Time FAQs</h2>
            {[
              ["Does the Brunchtime draw happen on bank holidays?", "Yes. UK 49s Brunchtime runs every day of the year including all UK bank holidays, Christmas Day, and New Year's Day."],
              ["What happens if the draw is delayed?", "Occasional technical delays do occur. Results are typically posted within 15–30 minutes. We update this site as soon as official results are confirmed."],
              ["Is 10:49 AM GMT or BST?", "The draw always happens at 10:49 AM UK local time. During British Summer Time (late March to late October), this is 10:49 BST which is UTC+1. In winter it is 10:49 GMT (UTC+0)."],
              ["Can I place bets after the draw starts?", "No. Bookmakers close betting before the draw begins, typically several minutes before 10:49 AM. Always place your bet in advance."],
              ["When are results published on this site?", "Results are posted on our homepage within 5 minutes of the draw completing. Bookmark the results page for quick daily access."],
            ].map(([q, a]) => (
              <div key={q} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #f0f4ff" }}>
                <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "15px", marginBottom: "8px" }}>{q}</div>
                <div style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>

          {/* Related */}
          <div style={{ background: "#0a1628", borderRadius: "16px", padding: "24px 28px" }}>
            <h3 style={{ color: "#ffffff", fontWeight: "700", fontSize: "16px", marginBottom: "14px" }}>Explore More</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "10px" }}>
              {[
                ["/", "📊 Today's Results"],
                ["/predictions", "🎯 Predictions"],
                ["/what-is-brunchtime", "📖 What is Brunchtime?"],
                ["/how-to-play", "🎮 How to Play"],
                ["/hot-numbers", "🔥 Hot Numbers"],
                ["/winning-tips", "💡 Winning Tips"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ background: "#112240", border: "1px solid #1d3461", borderRadius: "10px", padding: "12px 14px", textDecoration: "none", color: "#8aabcc", fontSize: "13px", fontWeight: "600" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
