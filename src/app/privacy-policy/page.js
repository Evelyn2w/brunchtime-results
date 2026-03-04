export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Brunchtime Results — how we collect, use, and protect your information.",
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

export default function PrivacyPolicyPage() {
  return (
    <main style={{ minHeight: "80vh" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "900", color: "#fef9ee", marginBottom: "12px" }}>
            Privacy <span style={{ color: "#f59e0b" }}>Policy</span>
          </h1>
          <p style={{ color: "#a8956a", fontSize: "14px" }}>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
        </div>

        <div style={{ background: "linear-gradient(135deg, #1a0f00, #2d1a00)", border: "1px solid #f59e0b33", borderRadius: "16px", padding: "32px" }}>

          <Section title="1. Introduction">
            <P>Welcome to Brunchtime Results ("we", "our", or "us"). This Privacy Policy explains how we collect, use, and protect information when you visit our website.</P>
            <P>By using our website, you agree to the collection and use of information in accordance with this policy.</P>
          </Section>

          <Section title="2. Information We Collect">
            <P>We collect minimal information to provide our service:</P>
            <ul style={{ paddingLeft: "20px" }}>
              <Li><strong style={{ color: "#fef9ee" }}>Usage Data:</strong> Pages visited, browser type, device type, and time of visit via analytics tools.</Li>
              <Li><strong style={{ color: "#fef9ee" }}>Cookies:</strong> Small files stored on your device to improve user experience.</Li>
              <Li><strong style={{ color: "#fef9ee" }}>Contact Information:</strong> Only if you contact us directly via email.</Li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <P>We use the collected information to:</P>
            <ul style={{ paddingLeft: "20px" }}>
              <Li>Provide and improve our website</Li>
              <Li>Analyze website traffic and usage patterns</Li>
              <Li>Respond to your inquiries</Li>
              <Li>Ensure website security and prevent fraud</Li>
            </ul>
          </Section>

          <Section title="4. Third Party Services">
            <P>Our website uses the following third-party services:</P>
            <ul style={{ paddingLeft: "20px" }}>
              <Li><strong style={{ color: "#fef9ee" }}>Star49s API:</strong> Results data is sourced from star49s.com</Li>
              <Li><strong style={{ color: "#fef9ee" }}>Google Analytics:</strong> For website traffic analysis</Li>
              <Li><strong style={{ color: "#fef9ee" }}>Vercel:</strong> Website hosting and performance</Li>
            </ul>
            <P>These services have their own privacy policies which we encourage you to review.</P>
          </Section>

          <Section title="5. Cookies">
            <P>We use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features may not function properly without cookies.</P>
          </Section>

          <Section title="6. Data Security">
            <P>We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</P>
          </Section>

          <Section title="7. Children's Privacy">
            <P>Our website is not directed to children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us immediately.</P>
          </Section>

          <Section title="8. Changes to This Policy">
            <P>We may update this Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page with an updated date.</P>
          </Section>

          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: "700", color: "#f59e0b", marginBottom: "12px" }}>9. Contact Us</h2>
            <P>If you have questions about this Privacy Policy, please contact us at: <a href="mailto:contact@star49s.com" style={{ color: "#f59e0b" }}>contact@star49s.com</a></P>
          </div>

        </div>

      </div>
    </main>
  );
}
