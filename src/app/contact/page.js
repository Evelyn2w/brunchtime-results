import Link from "next/link";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/contact" },
  title: "Contact Us | Brunchtime Results",
  description: "Get in touch with the Brunchtime Results team for questions about UK 49s results.",
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>
      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Home</Link><span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span><span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px" }}>Contact</span>
        </div>
      </nav>
      <section style={{ background: "#f4f6f8", padding: "32px 24px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(22px,3.2vw,36px)", fontWeight: "900", color: "#1a1a1a", marginBottom: "12px" }}>
            Contact <span style={{ color: "#4a90e2" }}>Us</span>
          </h1>
          <p style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: 1.7 }}>Questions about results or predictions? We're here to help.</p>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px 24px 64px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "20px", marginBottom: "48px" }}>
          {[
            { icon: "📧", title: "Email", desc: "For general inquiries and result corrections", value: "contact@star49s.com", href: "mailto:contact@star49s.com" },
            { icon: "🌐", title: "Full Results Site", desc: "All 4 daily draws, predictions, and history", value: "star49s.com", href: "https://star49s.com" },
            { icon: "🔥", title: "Hot Numbers", desc: "Frequently drawn number analysis", value: "View Hot Numbers", href: "/hot-numbers" },
          ].map(({ icon, title, desc, value, href }) => (
            <div key={title} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{icon}</div>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#1a1a1a", marginBottom: "6px" }}>{title}</div>
              <div style={{ color: "#1a1a1a", fontSize: "16px", marginBottom: "14px" }}>{desc}</div>
              <a href={href} rel="dofollow" style={{ color: "#2471a3", fontSize: "16px", fontWeight: "700", textDecoration: "none" }}>{value}</a>
            </div>
          ))}
        </div>

        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#1a1a1a", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          {[
            ["How quickly are results updated?", "Results are posted within 2–5 minutes of each draw at 10:49 AM (UK time)."],
            ["I found an incorrect result. What do I do?", "Email us immediately at contact@star49s.com with the draw date. We will verify and correct it as soon as possible."],
            ["Where does your data come from?", "Results data is sourced from official UK 49s draw records, processed and displayed on this site."],
            ["Can I get predictions here?", "Yes — visit our Predictions page for daily statistical hot number analysis."],
            ["Are you affiliated with UK 49s officially?", "No. We are an independent results website providing information for players. We are not affiliated with UK 49s Ltd."],
          ].map(([q, a]) => (
            <div key={q} style={{ borderBottom: "1px solid #f0f4ff", paddingBottom: "16px", marginBottom: "16px" }}>
              <div style={{ fontWeight: "700", color: "#1a1a1a", fontSize: "18px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}