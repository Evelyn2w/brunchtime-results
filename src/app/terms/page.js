import Link from "next/link";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app/terms" },
  title: "Terms & Conditions | Brunchtime Results",
  description: "Terms and Conditions for using the Brunchtime Results website.",
};

const S = ({ title, children }) => (
  <div style={{ borderBottom: "1px solid #f0f4ff", paddingBottom: "24px", marginBottom: "24px" }}>
    <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>{title}</h2>
    {children}
  </div>
);
const P = ({ c }) => <p style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 1.8, marginBottom: "10px" }}>{c}</p>;

export default function TermsPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8" }}>
      <nav aria-label="breadcrumb" style={{ background: "#ffffff", borderBottom: "1px solid #e8ecf0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "10px 24px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" }}>
          <Link href="/" style={{ color: "#2471a3", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Home</Link><span style={{ color: "#aaaaaa", margin: "0 8px", fontSize: "14px" }}>›</span><span style={{ color: "#1a1a1a", fontWeight: "600", fontSize: "14px" }}>Terms & Conditions</span>
        </div>
      </nav>
      <section style={{ background: "#f4f6f8", padding: "16px 24px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#1a1a1a", marginBottom: "10px" }}>Terms & <span style={{ color: "#1a1a1a" }}>Conditions</span></h1>
        <p style={{ color: "#1a1a1a", fontSize: "14px" }}>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
      </section>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px 24px 64px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px" }}>
          <S title="1. Acceptance"><P c="By using Brunchtime Results, you agree to these Terms. If you disagree, please do not use this site." /></S>
          <S title="2. Permitted Use">
            <P c="You may use this site for lawful purposes only. You must not:" />
            <ul style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 2, paddingLeft: "20px" }}>
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt unauthorized access to any site system</li>
              <li>Use automated tools to scrape data without permission</li>
              <li>Transmit malicious or harmful content</li>
            </ul>
          </S>
          <S title="3. Results Accuracy"><P c="We strive for accuracy in all results displayed. However, results should always be verified with official sources before making betting decisions. We accept no liability for errors or omissions." /></S>
          <S title="4. Gambling Disclaimer">
            <P c="This website provides lottery results for informational purposes only. We do not promote gambling. If you choose to place bets, you do so at your own risk." />
            <P c="Please gamble responsibly. For support:" />
            <ul style={{ color: "#1a1a1a", fontSize: "18px", lineHeight: 2, paddingLeft: "20px" }}>
              <li>GamCare: <a href="https://www.gamcare.org.uk" style={{ color: "#1e6de5" }}>gamcare.org.uk</a></li>
              <li>BeGambleAware: <a href="https://www.begambleaware.org" style={{ color: "#1e6de5" }}>begambleaware.org</a></li>
              <li>National Gambling Helpline: 0808 8020 133 (free, 24/7)</li>
            </ul>
          </S>
          <S title="5. Intellectual Property"><P c="All site content, design, and layout belongs to Brunchtime Results. You may not reproduce or distribute content without written permission." /></S>
          <S title="6. Third Party Links"><P c="We link to third-party sites including star49s.com. We are not responsible for the content or practices of those sites." /></S>
          <S title="7. Limitation of Liability"><P c="Brunchtime Results is not liable for any damages arising from your use of this site or reliance on its content." /></S>
          <S title="8. Changes"><P c="We may update these Terms at any time. Continued use of the site constitutes acceptance of any updates." /></S>
          <div><h2 style={{ fontSize: "22px", fontWeight: "700", color: "#1a1a1a", marginBottom: "10px" }}>9. Contact</h2><P c="Questions? Email contact@star49s.com" /></div>
        </div>
      </div>
    </main>
  );
}