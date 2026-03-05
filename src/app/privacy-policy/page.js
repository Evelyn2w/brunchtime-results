cat > src/app/privacy-policy/page.js << 'ENDOFFILE'
export const metadata = {
  title: "Privacy Policy | Brunchtime Results",
  description: "Privacy Policy for Brunchtime Results website.",
};

const S = ({ title, children }) => (
  <div style={{ borderBottom: "1px solid #f0f4ff", paddingBottom: "24px", marginBottom: "24px" }}>
    <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>{title}</h2>
    {children}
  </div>
);
const P = ({ c }) => <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.8, marginBottom: "10px" }}>{c}</p>;

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#ffffff", marginBottom: "10px" }}>Privacy <span style={{ color: "#4a90e2" }}>Policy</span></h1>
        <p style={{ color: "#8aabcc", fontSize: "14px" }}>Last updated: January 2025</p>
      </section>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px" }}>
          <S title="1. Introduction"><P c="Welcome to Brunchtime Results. This Privacy Policy explains how we collect, use, and protect information when you visit our website." /></S>
          <S title="2. Information We Collect"><P c="We collect usage data including pages visited, browser type, device, and time of visit via analytics tools. We also use cookies to improve your experience." /></S>
          <S title="3. How We Use Information"><P c="Information is used to provide and improve the website, analyze traffic, respond to inquiries, and ensure security." /></S>
          <S title="4. Third Party Services"><P c="We use star49s.com for results data, Google Analytics for traffic analysis, and Vercel for hosting. Each has their own privacy policy." /></S>
          <S title="5. Cookies"><P c="We use cookies to improve your experience. You may disable cookies in your browser settings, though some features may not work correctly." /></S>
          <S title="6. Data Security"><P c="We implement appropriate technical measures to protect information. No internet transmission is 100% secure." /></S>
          <S title="7. Changes"><P c="We may update this policy at any time. Changes are effective immediately upon posting." /></S>
          <div><h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>8. Contact</h2><P c="Questions? Email us at contact@star49s.com" /></div>
        </div>
      </div>
    </main>
  );
}
ENDOFFILE