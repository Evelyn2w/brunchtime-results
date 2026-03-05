import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found | Brunchtime Results",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main style={{ minHeight: "80vh", background: "#f4f6f8", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
      <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>

        {/* Big 404 */}
        <div style={{ position: "relative", marginBottom: "8px" }}>
          <div style={{
            fontSize: "clamp(100px, 20vw, 160px)",
            fontWeight: "900",
            color: "#e8ecf0",
            lineHeight: 1,
            letterSpacing: "-8px",
            userSelect: "none",
          }}>404</div>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "48px",
          }}>🍳</div>
        </div>

        {/* Message */}
        <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: "900", color: "#1a1a1a", marginBottom: "12px" }}>
          This page doesn't exist
        </h1>
        <p style={{ fontSize: "18px", color: "#555555", lineHeight: 1.7, marginBottom: "32px" }}>
          Looks like this draw didn't come in. The page you are looking for has been moved, deleted, or never existed.
        </p>

        {/* Quick Links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "32px" }}>
          {[
            { href: "/", icon: "📊", label: "Today's Results" },
            { href: "/hot-numbers", icon: "🔥", label: "Hot Numbers" },
            { href: "/how-to-play", icon: "🎮", label: "How to Play" },
            { href: "/contact", icon: "✉️", label: "Contact Us" },
          ].map(({ href, icon, label }) => (
            <Link key={href} href={href} style={{
              background: "#ffffff",
              border: "1px solid #e8ecf0",
              borderRadius: "10px",
              padding: "16px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.2s",
            }}>
              <span style={{ fontSize: "24px" }}>{icon}</span>
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#1a1a1a" }}>{label}</span>
            </Link>
          ))}
        </div>

        {/* Back home CTA */}
        <Link href="/" style={{
          display: "inline-block",
          background: "#0a1628",
          color: "#ffffff",
          padding: "14px 32px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "800",
          fontSize: "16px",
        }}>
          ← Back to Homepage
        </Link>

      </div>
    </main>
  );
}
