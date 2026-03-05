import "./globals.css";
import { Navbar, Footer } from "@/components/Layout";

export const metadata = {
  title: { default: "UK 49s Brunchtime Results Today | Winning Numbers", template: "%s" },
  description: "Check today's UK 49s Brunchtime results. Latest winning numbers and Booster Ball from the daily 10:49 AM draw. Updated immediately after each draw.",
  keywords: ["uk49s brunchtime results", "brunchtime results today", "uk 49s brunchtime", "brunchtime winning numbers", "uk49s today"],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://brunchtime-results.vercel.app" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}