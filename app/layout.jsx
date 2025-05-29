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

export const metadata = {
  title: "mzaytoun portfolio",
  description: "Welcome to my portfolio!",
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
