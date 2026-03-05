import "./globals.css";
import { Navbar, Footer } from "@/components/Layout";

export const metadata = {
  title: { default: "UK 49s Brunchtime Results Today | Winning Numbers", template: "%s | Brunchtime Results" },
  description: "Check today's UK 49s Brunchtime results. Latest winning numbers and Booster Ball from the daily 10:49 AM draw. Updated immediately after each draw.",
  keywords: ["uk49s brunchtime results", "brunchtime results today", "uk 49s brunchtime", "brunchtime winning numbers"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}