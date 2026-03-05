export const metadata = {
  title: "Terms & Conditions | Brunchtime Results",
  description: "Terms and Conditions for using the Brunchtime Results website.",
};

const S = ({ title, children }) => (
  <div style={{ borderBottom: "1px solid #f0f4ff", paddingBottom: "24px", marginBottom: "24px" }}>
    <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>{title}</h2>
    {children}
  </div>
);
const P = ({ c }) => <p style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 1.8, marginBottom: "10px" }}>{c}</p>;

export default function TermsPage() {
  return (
    <main style={{ minHeight: "80vh", background: "#f8faff" }}>
      <section style={{ background: "linear-gradient(135deg, #0a1628, #1d3461)", padding: "52px 24px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: "900", color: "#ffffff", marginBottom: "10px" }}>Terms & <span style={{ color: "#4a90e2" }}>Conditions</span></h1>
        <p style={{ color: "#8aabcc", fontSize: "14px" }}>Last updated: January 2025</p>
      </section>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px" }}>
          <S title="1. Acceptance of Terms"><P c="By using Brunchtime Results, you agree to these terms. If you do not agree, please do not use this website." /></S>
          <S title="2. Permitted Use"><P c="This site is for informational purposes only. You may not use it for any unlawful purpose or in any way that could damage or impair the site." /></S>
          <S title="3. Accuracy Disclaimer"><P c="We strive to provide accurate results but cannot guarantee 100% accuracy. Always verify results with your bookmaker before making any claims." /></S>
          <S title="4. Gambling Disclaimer"><P c="This site provides lottery results and information only. We do not facilitate gambling. UK 49s betting must be done through licensed bookmakers. You must be 18 or over to gamble." /></S>
          <S title="5. Intellectual Property"><P c="All content on this site is owned by Brunchtime Results unless otherwise stated. You may not reproduce or distribute content without permission." /></S>
          <S title="6. Third Party Links"><P c="We link to third party sites including star49s.com. We are not responsible for the content or policies of external websites." /></S>
          <S title="7. Limitation of Liability"><P c="Brunchtime Results is not liable for any losses arising from use of this site or reliance on results displayed here." /></S>
          <S title="8. Changes"><P c="We may update these terms at any time. Continued use of the site means you accept the updated terms." /></S>
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>9. Responsible Gambling</h2>
            <P c="If you are struggling with gambling, free help is available. Contact GamCare: gamcare.org.uk or call 0808 8020 133 (free, 24/7). Also visit BeGambleAware.org." />
          </div>
        </div>
      </div>
    </main>
  );
}