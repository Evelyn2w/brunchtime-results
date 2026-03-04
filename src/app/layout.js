import "./globals.css";
import { Navbar, Footer } from "@/components/Layout";

export const metadata = {
  title: { default: "UK 49s Brunchtime Results Today | Latest Winning Numbers", template: "%s | Brunchtime Results" },
  description: "Check today's UK 49s Brunchtime results. Latest winning numbers and Booster Ball from the daily 10:49 AM draw. Updated immediately after each draw.",
  keywords: ["uk49s brunchtime results", "brunchtime results today", "uk 49s brunchtime", "brunchtime winning numbers"],
  alternates: { canonical: "https://brunchtime-results.vercel.app" },
  openGraph: {
    title: "UK 49s Brunchtime Results Today",
    description: "Latest UK 49s Brunchtime winning numbers updated after every draw.",
    url: "https://brunchtime-results.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
