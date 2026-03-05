export const metadata = {
  title: "Contact Us | Brunchtime Results",
  description: "Get in touch with the Brunchtime Results team.",
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#ffffff", marginBottom: "12px" }}>
          Contact <span style={{ color: "#4a90e2" }}>Us</span>
        </h1>
        <p style={{ color: "#8aabcc", fontSize: "16px" }}>Questions about results or predictions? We are here to help.</p>
      </section>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "20px", marginBottom: "48px" }}>
          {[
            { icon: "📧", title: "Email", desc: "For general inquiries", value: "contact@star49s.com", href: "mailto:contact@star49s.com" },
            { icon: "🌐", title: "Full Results Site", desc: "All draws and history", value: "star49s.com", href: "https://star49s.com" },
            { icon: "🎯", title: "Predictions", desc: "Daily hot number analysis", value: "View Predictions", href: "/predictions" },
          ].map(({ icon, title, desc, value, href }) => (
            <div key={title} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{icon}</div>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#0a1628", marginBottom: "6px" }}>{title}</div>
              <div style={{ color: "#5a6a8a", fontSize: "13px", marginBottom: "14px" }}>{desc}</div>
              <a href={href} style={{ color: "#1e6de5", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>{value}</a>
            </div>
          ))}
        </div>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          {[
            ["How quickly are results updated?", "Results are posted within 2-5 minutes of the 10:49 AM draw."],
            ["Where does your data come from?", "Results are sourced from official UK 49s draw records via star49s.com."],
            ["Can I get predictions here?", "Yes — visit our Predictions page for daily hot number analysis."],
            ["Are you officially affiliated with UK 49s?", "No. We are an independent results website, not affiliated with UK 49s Ltd."],
          ].map(([q, a]) => (
            <div key={q} style={{ borderBottom: "1px solid #f0f4ff", paddingBottom: "16px", marginBottom: "16px" }}>
              <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "15px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}