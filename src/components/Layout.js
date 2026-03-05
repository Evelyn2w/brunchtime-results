"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const mainLinks = [
    { href: "/", label: "Results" },
    { href: "/predictions", label: "Predictions" },
=======

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Results" },
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

<<<<<<< HEAD
  const guideLinks = [
    { href: "/what-is-brunchtime", label: "What is Brunchtime?" },
    { href: "/how-to-play", label: "How to Play" },
    { href: "/booster-ball", label: "Booster Ball Guide" },
    { href: "/hot-numbers", label: "Hot Numbers" },
    { href: "/brunchtime-draw-time", label: "Draw Time & Schedule" },
    { href: "/winning-tips", label: "Winning Tips" },
  ];

  return (
    <header style={{ background: "#0a1628", borderBottom: "1px solid #1d3461", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(10,22,40,0.2)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "linear-gradient(135deg, #1e6de5, #0a1628)", border: "2px solid #1e6de5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🍳</div>
          <div>
            <div style={{ fontWeight: "800", fontSize: "15px", color: "#ffffff" }}>Brunchtime <span style={{ color: "#4a90e2" }}>Results</span></div>
            <div style={{ fontSize: "10px", color: "#5a7aaa" }}>UK 49s • 10:49 AM</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2px", "@media(max-width:768px)": { display: "none" } }} className="desktop-nav">
          {isHome && (
            <>
              <a href="#today" style={navStyle(false)}>Today</a>
              <a href="#yesterday" style={navStyle(false)}>Yesterday</a>
              <a href="#history" style={navStyle(false)}>History</a>
              <span style={{ color: "#1d3461", margin: "0 4px" }}>|</span>
            </>
          )}
          {mainLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={navStyle(pathname === href)}>{label}</Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "1px solid #1d3461", borderRadius: "8px", padding: "8px 10px", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px" }}
          className="hamburger"
          aria-label="Menu"
        >
          <span style={{ display: "block", width: "20px", height: "2px", background: menuOpen ? "#4a90e2" : "#8aabcc", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: menuOpen ? "transparent" : "#8aabcc", transition: "all 0.2s" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: menuOpen ? "#4a90e2" : "#8aabcc", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#0d1f3c", borderTop: "1px solid #1d3461", padding: "16px 20px 20px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            {/* Anchor links only on homepage */}
            {isHome && (
              <div style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #1d3461" }}>
                <div style={{ color: "#5a7aaa", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>Jump To</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[["#today","Today's Result"],["#yesterday","Yesterday"],["#history","Last 15 Draws"]].map(([href, label]) => (
                    <a key={href} href={href} onClick={() => setMenuOpen(false)}
                      style={{ background: "#1e6de533", border: "1px solid #1e6de555", color: "#4a90e2", padding: "7px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Main pages */}
            <div style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #1d3461" }}>
              <div style={{ color: "#5a7aaa", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>Pages</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {mainLinks.map(({ href, label }) => (
                  <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                    style={{ background: pathname === href ? "#1d3461" : "#112240", color: pathname === href ? "#ffffff" : "#8aabcc", padding: "10px 14px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", textDecoration: "none", border: "1px solid #1d3461" }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Guide links */}
            <div>
              <div style={{ color: "#5a7aaa", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>Guides & Info</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {guideLinks.map(({ href, label }) => (
                  <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                    style={{ background: "#112240", color: "#8aabcc", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", border: "1px solid #1d3461" }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
=======
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
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
    </header>
  );
}

<<<<<<< HEAD
function navStyle(active) {
  return {
    color: active ? "#ffffff" : "#8aabcc",
    textDecoration: "none", fontSize: "14px", fontWeight: "600",
    padding: "6px 11px", borderRadius: "8px",
    background: active ? "#1d3461" : "transparent",
  };
}

export function Footer() {
  return (
    <footer style={{ background: "#0a1628", borderTop: "1px solid #1d3461", padding: "48px 24px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "32px", marginBottom: "40px" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <span style={{ fontSize: "20px" }}>🍳</span>
              <span style={{ fontWeight: "800", fontSize: "15px", color: "#ffffff" }}>Brunchtime Results</span>
            </div>
            <p style={{ color: "#5a7aaa", fontSize: "13px", lineHeight: 1.7, marginBottom: "12px" }}>
              Accurate UK 49s Brunchtime winning numbers, updated within minutes of every 10:49 AM draw.
            </p>
          </div>

          <div>
            <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "13px", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Results</div>
            {[
              { href: "/", label: "Today's Results" },
              { href: "/#yesterday", label: "Yesterday's Results" },
              { href: "/#history", label: "Last 15 Draws" },
              { href: "/predictions", label: "Today's Predictions" },
            ].map(({ href, label }) => (
              <div key={label} style={{ marginBottom: "9px" }}>
                <Link href={href} style={{ color: "#5a7aaa", textDecoration: "none", fontSize: "13px" }}>{label}</Link>
              </div>
            ))}
          </div>

          <div>
            <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "13px", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Guides</div>
            {[
              { href: "/what-is-brunchtime", label: "What is Brunchtime?" },
              { href: "/how-to-play", label: "How to Play UK 49s" },
              { href: "/booster-ball", label: "Booster Ball Explained" },
              { href: "/hot-numbers", label: "Hot Numbers" },
              { href: "/brunchtime-draw-time", label: "Draw Time & Schedule" },
              { href: "/winning-tips", label: "Winning Tips" },
            ].map(({ href, label }) => (
              <div key={label} style={{ marginBottom: "9px" }}>
                <Link href={href} style={{ color: "#5a7aaa", textDecoration: "none", fontSize: "13px" }}>{label}</Link>
              </div>
            ))}
          </div>

          <div>
            <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "13px", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Legal & Info</div>
            {[
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
            ].map(({ href, label }) => (
              <div key={label} style={{ marginBottom: "9px" }}>
                <Link href={href} style={{ color: "#5a7aaa", textDecoration: "none", fontSize: "13px" }}>{label}</Link>
              </div>
            ))}
            <div style={{ marginTop: "16px" }}>
              <div style={{ color: "#ffffff", fontWeight: "700", fontSize: "13px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Other Draws</div>
              {[
                { href: "https://star49s.com/results/lunchtime", label: "Lunchtime Results" },
                { href: "https://star49s.com/results/teatime", label: "Teatime Results" },
                { href: "https://star49s.com/results/drivetime", label: "Drivetime Results" },
              ].map(({ href, label }) => (
                <div key={label} style={{ marginBottom: "9px" }}>
                  <a href={href} rel="dofollow" style={{ color: "#5a7aaa", textDecoration: "none", fontSize: "13px" }}>{label}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1d3461", paddingTop: "20px", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#5a7aaa", fontSize: "12px" }}>© {new Date().getFullYear()} Brunchtime Results. All rights reserved.</p>
          <p style={{ color: "#5a7aaa", fontSize: "12px" }}>Full history at <a href="https://star49s.com/results/brunchtime" rel="dofollow" style={{ color: "#4a90e2" }}>star49s.com</a></p>
=======
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
>>>>>>> 7ddeb3f83e47a8aed68191419906e4ddf9921855
        </div>
      </div>
    </footer>
  );
}
