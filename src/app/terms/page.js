export const metadata = {
<<<<<<< HEAD
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
        <p style={{ color: "#8aabcc", fontSize: "14px" }}>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
      </section>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px" }}>
          <S title="1. Acceptance"><P c="By using Brunchtime Results, you agree to these Terms. If you disagree, please do not use this site." /></S>
          <S title="2. Permitted Use">
            <P c="You may use this site for lawful purposes only. You must not:" />
            <ul style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 2, paddingLeft: "20px" }}>
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
            <ul style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 2, paddingLeft: "20px" }}>
              <li>GamCare: <a href="https://www.gamcare.org.uk" style={{ color: "#1e6de5" }}>gamcare.org.uk</a></li>
              <li>BeGambleAware: <a href="https://www.begambleaware.org" style={{ color: "#1e6de5" }}>begambleaware.org</a></li>
              <li>National Gambling Helpline: 0808 8020 133 (free, 24/7)</li>
            </ul>
          </S>
          <S title="5. Intellectual Property"><P c="All site content, design, and layout belongs to Brunchtime Results. You may not reproduce or distribute content without written permission." /></S>
          <S title="6. Third Party Links"><P c="We link to third-party sites including star49s.com. We are not responsible for the content or practices of those sites." /></S>
          <S title="7. Limitation of Liability"><P c="Brunchtime Results is not liable for any damages arising from your use of this site or reliance on its content." /></S>
          <S title="8. Changes"><P c="We may update these Terms at any time. Continued use of the site constitutes acceptance of any updates." /></S>
          <div><h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>9. Contact</h2><P c="Questions? Email contact@star49s.com" /></div>
        </div>
=======
  title: "Terms & Conditions",
  description: "Terms and Conditions for using Brunchtime Results website.",
};

const Section = ({ title, children }) => (
  <div style={{ borderBottom: "1px solid #f59e0b11", paddingBottom: "24px", marginBottom: "24px" }}>
    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "#f59e0b", marginBottom: "12px" }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ color: "#a8956a", fontSize: "15px", lineHeight: 1.8, marginBottom: "10px" }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ color: "#a8956a", fontSize: "15px", lineHeight: 1.8, marginBottom: "6px" }}>{children}</li>
);

export default function TermsPage() {
  return (
    <main style={{ minHeight: "80vh" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "900", color: "#fef9ee", marginBottom: "12px" }}>
            Terms & <span style={{ color: "#f59e0b" }}>Conditions</span>
          </h1>
          <p style={{ color: "#a8956a", fontSize: "14px" }}>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>

        <div style={{ background: "linear-gradient(135deg, #1a0f00, #2d1a00)", border: "1px solid #f59e0b33", borderRadius: "16px", padding: "32px" }}>

          <Section title="1. Acceptance of Terms">
            <P>By accessing and using Brunchtime Results, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.</P>
          </Section>

          <Section title="2. Use of Website">
            <P>You may use our website for lawful purposes only. You agree not to:</P>
            <ul style={{ paddingLeft: "20px" }}>
              <Li>Use the website in any way that violates applicable laws or regulations</Li>
              <Li>Attempt to gain unauthorized access to any part of the website</Li>
              <Li>Transmit any harmful or malicious content</Li>
              <Li>Use automated tools to scrape or collect data without permission</Li>
            </ul>
          </Section>

          <Section title="3. Results Accuracy">
            <P>We strive to provide accurate UK 49s Brunchtime results. However, we cannot guarantee 100% accuracy at all times. Results are sourced from <a href="https://star49s.com" rel="dofollow" style={{ color: "#f59e0b" }}>Star49s.com</a>.</P>
            <P><strong style={{ color: "#fef9ee" }}>Always verify results with official sources before making any betting decisions.</strong></P>
          </Section>

          <Section title="4. Gambling Disclaimer">
            <P>This website provides lottery results for informational purposes only. We do not promote, encourage, or facilitate gambling. If you choose to place bets based on information from this website, you do so at your own risk.</P>
            <P>Please gamble responsibly. If you have a gambling problem, seek help from:</P>
            <ul style={{ paddingLeft: "20px" }}>
              <Li>GamCare: <a href="https://www.gamcare.org.uk" style={{ color: "#f59e0b" }}>gamcare.org.uk</a></Li>
              <Li>BeGambleAware: <a href="https://www.begambleaware.org" style={{ color: "#f59e0b" }}>begambleaware.org</a></Li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            <P>The content on this website, including text, design, and layout, is the property of Brunchtime Results. You may not reproduce or distribute any content without our written permission.</P>
          </Section>

          <Section title="6. Third Party Links">
            <P>Our website contains links to third-party websites, including Star49s.com. We are not responsible for the content or privacy practices of those sites.</P>
          </Section>

          <Section title="7. Limitation of Liability">
            <P>Brunchtime Results shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.</P>
          </Section>

          <Section title="8. Changes to Terms">
            <P>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the updated terms.</P>
          </Section>

          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "#f59e0b", marginBottom: "12px" }}>9. Contact</h2>
            <P>For questions about these Terms, contact us at: <a href="mailto:contact@star49s.com" style={{ color: "#f59e0b" }}>contact@star49s.com</a></P>
          </div>

        </div>

>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
      </div>
    </main>
  );
}
