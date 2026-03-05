import Link from "next/link";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/privacy-policy" },
  title: "Privacy Policy | Brunchtime Results",
  description: "Privacy Policy for Brunchtime Results website.",
};

const S = ({ title, children }) => (
  <div style={{ borderBottom: "1px solid #f0f4ff", paddingBottom: "24px", marginBottom: "24px" }}>
    <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>{title}</h2>
    {children}
  </div>
);
const P = ({ c }) => <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.8, marginBottom: "10px" }}>{c}</p>;

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>
      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Home</Link><span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span><span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px" }}>Privacy Policy</span>
        </div>
      </nav>
      <section style={{ background: "#f4f6f8", padding: "32px 24px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#1a1a1a", marginBottom: "10px" }}>Privacy <span style={{ color: "#1a1a1a" }}>Policy</span></h1>
        <p style={{ color: "#1a1a1a", fontSize: "14px" }}>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
      </section>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px" }}>
          <S title="1. Introduction"><P c="Welcome to Brunchtime Results. This Privacy Policy explains how we collect, use, and protect information when you visit our website. By using our site, you agree to this policy." /></S>
          <S title="2. Information We Collect">
            <P c="We collect minimal information to operate our service:" />
            <ul style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 2, paddingLeft: "20px" }}>
              <li><strong style={{ color: "#1a1a1a" }}>Usage Data:</strong> Pages visited, browser type, device, and time of visit via analytics.</li>
              <li><strong style={{ color: "#1a1a1a" }}>Cookies:</strong> Small files to improve your experience and track site usage.</li>
              <li><strong style={{ color: "#1a1a1a" }}>Contact Info:</strong> Only if you contact us via email.</li>
            </ul>
          </S>
          <S title="3. How We Use Information">
            <ul style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 2, paddingLeft: "20px" }}>
              <li>To provide and improve the website</li>
              <li>To analyze traffic and usage patterns</li>
              <li>To respond to inquiries</li>
              <li>To ensure security and prevent misuse</li>
            </ul>
          </S>
          <S title="4. Third Party Services">
            <P c="We use these third-party services, each with their own privacy policies:" />
            <ul style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 2, paddingLeft: "20px" }}>
              <li><strong style={{ color: "#1a1a1a" }}>Results API:</strong> Draw data sourced from star49s.com</li>
              <li><strong style={{ color: "#1a1a1a" }}>Google Analytics:</strong> Website traffic analysis</li>
              <li><strong style={{ color: "#1a1a1a" }}>Vercel:</strong> Website hosting and delivery</li>
            </ul>
          </S>
          <S title="5. Cookies"><P c="We use cookies to improve your experience. You may disable cookies in your browser settings, though some site features may not function correctly without them." /></S>
          <S title="6. Data Security"><P c="We implement appropriate technical measures to protect information. However, no internet transmission is 100% secure. We cannot guarantee absolute data security." /></S>
          <S title="7. Children's Privacy"><P c="Our website is not directed to children under 18. We do not knowingly collect data from minors. Contact us immediately if you believe a child has submitted personal data." /></S>
          <S title="8. Changes"><P c="We may update this policy at any time. Changes are effective immediately upon posting, with an updated date shown above." /></S>
          <div><h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>9. Contact</h2><P c="Questions about this policy? Email us at contact@star49s.com" /></div>
        </div>
      </div>
    </main>
  );
}