export const metadata = {
<<<<<<< HEAD
  title: "Contact Us | Brunchtime Results",
  description: "Get in touch with the Brunchtime Results team for questions about UK 49s results.",
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#ffffff", marginBottom: "12px" }}>
            Contact <span style={{ color: "#4a90e2" }}>Us</span>
          </h1>
          <p style={{ color: "#8aabcc", fontSize: "16px", lineHeight: 1.7 }}>Questions about results or predictions? We're here to help.</p>
        </div>
      </section>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 64px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "20px", marginBottom: "48px" }}>
          {[
            { icon: "📧", title: "Email", desc: "For general inquiries and result corrections", value: "contact@star49s.com", href: "mailto:contact@star49s.com" },
            { icon: "🌐", title: "Full Results Site", desc: "All 4 daily draws, predictions, and history", value: "star49s.com", href: "https://star49s.com" },
            { icon: "🎯", title: "Predictions", desc: "Daily hot number analysis", value: "View Predictions", href: "/predictions" },
          ].map(({ icon, title, desc, value, href }) => (
            <div key={title} style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "28px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{icon}</div>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#0a1628", marginBottom: "6px" }}>{title}</div>
              <div style={{ color: "#5a6a8a", fontSize: "13px", marginBottom: "14px" }}>{desc}</div>
              <a href={href} rel="dofollow" style={{ color: "#1e6de5", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>{value}</a>
=======
  title: "Contact Us",
  description: "Get in touch with the Brunchtime Results team. We're here to help with any questions about UK 49s Brunchtime results.",
};

const P = ({ children }) => (
  <p style={{ color: "#a8956a", fontSize: "15px", lineHeight: 1.8, marginBottom: "12px" }}>{children}</p>
);

export default function ContactPage() {
  return (
    <main style={{ minHeight: "80vh" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "900", color: "#fef9ee", marginBottom: "12px" }}>
            Contact <span style={{ color: "#f59e0b" }}>Us</span>
          </h1>
          <p style={{ color: "#a8956a", fontSize: "16px", lineHeight: 1.7 }}>
            Have a question or found an issue with our results? We'd love to hear from you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {[
            { icon: "📧", title: "Email Us", desc: "For general inquiries and feedback", value: "contact@star49s.com", href: "mailto:contact@star49s.com" },
            { icon: "🌐", title: "Visit Star49s", desc: "For full results, predictions and more", value: "star49s.com", href: "https://star49s.com" },
          ].map(({ icon, title, desc, value, href }) => (
            <div key={title} style={{ background: "linear-gradient(135deg, #1a0f00, #2d1a00)", border: "1px solid #f59e0b33", borderRadius: "16px", padding: "24px" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>{icon}</div>
              <div style={{ color: "#fef9ee", fontWeight: "700", fontSize: "16px", marginBottom: "6px" }}>{title}</div>
              <div style={{ color: "#a8956a", fontSize: "13px", marginBottom: "12px" }}>{desc}</div>
              <a href={href} rel="dofollow" style={{ color: "#f59e0b", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>{value}</a>
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
            </div>
          ))}
        </div>

<<<<<<< HEAD
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#0a1628", marginBottom: "20px" }}>Frequently Asked Questions</h2>
          {[
            ["How quickly are results updated?", "Results are posted within 2–5 minutes of each draw at 10:49 AM (UK time)."],
            ["I found an incorrect result. What do I do?", "Email us immediately at contact@star49s.com with the draw date. We will verify and correct it as soon as possible."],
            ["Where does your data come from?", "Results data is sourced from official UK 49s draw records, processed and displayed on this site."],
            ["Can I get predictions here?", "Yes — visit our Predictions page for daily statistical hot number analysis."],
            ["Are you affiliated with UK 49s officially?", "No. We are an independent results website providing information for players. We are not affiliated with UK 49s Ltd."],
          ].map(([q, a]) => (
            <div key={q} style={{ borderBottom: "1px solid #f0f4ff", paddingBottom: "16px", marginBottom: "16px" }}>
              <div style={{ fontWeight: "700", color: "#0a1628", fontSize: "15px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "#5a6a8a", fontSize: "14px", lineHeight: 1.6 }}>{a}</div>
=======
        <div style={{ background: "linear-gradient(135deg, #1a0f00, #2d1a00)", border: "1px solid #f59e0b33", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "#f59e0b", marginBottom: "16px" }}>
            Frequently Asked Questions
          </h2>

          {[
            { q: "How often are results updated?", a: "Results are updated immediately after each draw at 10:49 AM (UK time), usually within a few minutes." },
            { q: "Where does the data come from?", a: "All results are sourced from Star49s.com, a trusted UK 49s results platform." },
            { q: "What if results are incorrect?", a: "If you notice any discrepancy, please contact us immediately via email and we will investigate." },
            { q: "Can I get predictions here?", a: "For daily brunchtime predictions, visit Star49s.com/predictions/brunchtime." },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderBottom: "1px solid #f59e0b11", paddingBottom: "16px", marginBottom: "16px" }}>
              <div style={{ color: "#fef9ee", fontWeight: "600", fontSize: "15px", marginBottom: "6px" }}>{q}</div>
              <div style={{ color: "#a8956a", fontSize: "14px", lineHeight: 1.6 }}>{a}</div>
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
            </div>
          ))}
        </div>

<<<<<<< HEAD
=======
        <div style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "900", color: "#0f0a00", marginBottom: "8px" }}>Need More Help?</h2>
          <p style={{ color: "#1a0a00", fontSize: "14px", marginBottom: "14px" }}>Visit Star49s for comprehensive support and resources.</p>
          <a href="https://star49s.com/contact" rel="dofollow" style={{ background: "#0f0a00", color: "#f59e0b", padding: "10px 24px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "14px" }}>
            Contact Star49s →
          </a>
        </div>

>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
      </div>
    </main>
  );
}
