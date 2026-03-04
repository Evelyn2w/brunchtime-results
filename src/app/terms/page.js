export const metadata = {
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

      </div>
    </main>
  );
}
