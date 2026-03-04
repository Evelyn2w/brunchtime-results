"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Results" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header style={{
      background: "linear-gradient(180deg, #1a0f00 0%, #0f0a00 100%)",
      borderBottom: "1px solid #f59e0b22",
      padding: "16px 24px",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "linear-gradient(135deg, #f59e0b, #ea580c)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px",
          }}>🍳</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: "700", fontSize: "17px", color: "#f59e0b" }}>
              Brunchtime Results
            </div>
            <div style={{ fontSize: "11px", color: "#a8956a" }}>UK 49s • 10:49 AM Daily</div>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              color: pathname === href ? "#f59e0b" : "#a8956a",
              textDecoration: "none", fontSize: "14px", fontWeight: "600",
              padding: "6px 12px", borderRadius: "8px",
              background: pathname === href ? "#f59e0b22" : "transparent",
              transition: "all 0.2s",
            }}>{label}</Link>
          ))}
          <a href="https://star49s.com/results/brunchtime" target="_blank" rel="dofollow"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #ea580c)",
              color: "#0f0a00", padding: "7px 14px", borderRadius: "8px",
              fontSize: "13px", fontWeight: "700", textDecoration: "none",
            }}>
            Star49s →
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #f59e0b22",
      padding: "32px 24px",
      marginTop: "40px",
      background: "#0a0700",
    }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "24px", marginBottom: "28px" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#f59e0b", fontWeight: "700", fontSize: "16px", marginBottom: "12px" }}>
              🍳 Brunchtime Results
            </div>
            <p style={{ color: "#a8956a", fontSize: "13px", lineHeight: 1.6 }}>
              Latest UK 49s Brunchtime winning numbers updated daily.
            </p>
          </div>
          <div>
            <div style={{ color: "#fef9ee", fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>Pages</div>
            {[
              { href: "/", label: "Results" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <div key={href} style={{ marginBottom: "8px" }}>
                <Link href={href} style={{ color: "#a8956a", textDecoration: "none", fontSize: "13px" }}>{label}</Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ color: "#fef9ee", fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>Legal</div>
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
            ].map(({ href, label }) => (
              <div key={href} style={{ marginBottom: "8px" }}>
                <Link href={href} style={{ color: "#a8956a", textDecoration: "none", fontSize: "13px" }}>{label}</Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ color: "#fef9ee", fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>More Draws</div>
            {[
              { href: "https://star49s.com/results/lunchtime", label: "Lunchtime Results" },
              { href: "https://star49s.com/results/teatime", label: "Teatime Results" },
              { href: "https://star49s.com/results/drivetime", label: "Drivetime Results" },
              { href: "https://star49s.com/predictions/brunchtime", label: "Predictions" },
            ].map(({ href, label }) => (
              <div key={href} style={{ marginBottom: "8px" }}>
                <a href={href} rel="dofollow" style={{ color: "#a8956a", textDecoration: "none", fontSize: "13px" }}>{label}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #f59e0b11", paddingTop: "20px", textAlign: "center", color: "#a8956a", fontSize: "12px" }}>
          <p style={{ marginBottom: "6px" }}>
            Data powered by <a href="https://star49s.com" rel="dofollow" style={{ color: "#f59e0b" }}>Star49s.com</a> — UK 49s Results & Predictions
          </p>
          <p>© {new Date().getFullYear()} Brunchtime Results. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
