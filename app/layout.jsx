import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import Header from "@/components/Header";

const JETBRAINSMONO = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const siteTitle = "Mohammad Zaytoun | Senior Software Engineer";
const siteDescription =
  "Senior Software Engineer in Beirut, Lebanon and founder of Zaytoun Solutions. 8+ years building web, mobile and backend systems with Next.js, Node.js, PHP, Flutter and SQL Server.";

export const metadata = {
  metadataBase: new URL("https://www.zaytoun.dev"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Mohammad Zaytoun",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Zaytoun, Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JETBRAINSMONO.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <Analytics />
          <SpeedInsights />
        </PageTransition>
      </body>
    </html>
  );
}
