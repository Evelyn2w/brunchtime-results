export const metadata = {
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
            </div>
          ))}
        </div>

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
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "900", color: "#0f0a00", marginBottom: "8px" }}>Need More Help?</h2>
          <p style={{ color: "#1a0a00", fontSize: "14px", marginBottom: "14px" }}>Visit Star49s for comprehensive support and resources.</p>
          <a href="https://star49s.com/contact" rel="dofollow" style={{ background: "#0f0a00", color: "#f59e0b", padding: "10px 24px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "14px" }}>
            Contact Star49s →
          </a>
        </div>

      </div>
    </main>
  );
}
