export const metadata = {
<<<<<<< HEAD
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
        <p style={{ color: "#8aabcc", fontSize: "14px" }}>Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
      </section>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 64px" }}>
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f8", borderRadius: "16px", padding: "36px" }}>
          <S title="1. Introduction"><P c="Welcome to Brunchtime Results. This Privacy Policy explains how we collect, use, and protect information when you visit our website. By using our site, you agree to this policy." /></S>
          <S title="2. Information We Collect">
            <P c="We collect minimal information to operate our service:" />
            <ul style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 2, paddingLeft: "20px" }}>
              <li><strong style={{ color: "#0a1628" }}>Usage Data:</strong> Pages visited, browser type, device, and time of visit via analytics.</li>
              <li><strong style={{ color: "#0a1628" }}>Cookies:</strong> Small files to improve your experience and track site usage.</li>
              <li><strong style={{ color: "#0a1628" }}>Contact Info:</strong> Only if you contact us via email.</li>
            </ul>
          </S>
          <S title="3. How We Use Information">
            <ul style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 2, paddingLeft: "20px" }}>
              <li>To provide and improve the website</li>
              <li>To analyze traffic and usage patterns</li>
              <li>To respond to inquiries</li>
              <li>To ensure security and prevent misuse</li>
            </ul>
          </S>
          <S title="4. Third Party Services">
            <P c="We use these third-party services, each with their own privacy policies:" />
            <ul style={{ color: "#5a6a8a", fontSize: "15px", lineHeight: 2, paddingLeft: "20px" }}>
              <li><strong style={{ color: "#0a1628" }}>Results API:</strong> Draw data sourced from star49s.com</li>
              <li><strong style={{ color: "#0a1628" }}>Google Analytics:</strong> Website traffic analysis</li>
              <li><strong style={{ color: "#0a1628" }}>Vercel:</strong> Website hosting and delivery</li>
            </ul>
          </S>
          <S title="5. Cookies"><P c="We use cookies to improve your experience. You may disable cookies in your browser settings, though some site features may not function correctly without them." /></S>
          <S title="6. Data Security"><P c="We implement appropriate technical measures to protect information. However, no internet transmission is 100% secure. We cannot guarantee absolute data security." /></S>
          <S title="7. Children's Privacy"><P c="Our website is not directed to children under 18. We do not knowingly collect data from minors. Contact us immediately if you believe a child has submitted personal data." /></S>
          <S title="8. Changes"><P c="We may update this policy at any time. Changes are effective immediately upon posting, with an updated date shown above." /></S>
          <div><h2 style={{ fontSize: "18px", fontWeight: "700", color: "#0a1628", marginBottom: "10px" }}>9. Contact</h2><P c="Questions about this policy? Email us at contact@star49s.com" /></div>
        </div>
=======
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

>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
      </div>
    </main>
  );
}
