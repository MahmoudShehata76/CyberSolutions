import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-ibm-plex",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cyber Solutions",
    default: "Cyber Solutions - Industrial Automation & Digital Transformation",
  },
  description: "Cyber Solutions provides cutting-edge industrial automation, operational technology cybersecurity, and digital transformation solutions in Saudi Arabia aligned with Vision 2030.",
  keywords: ["Industrial Automation", "OT Cybersecurity", "Digital Transformation", "Saudi Arabia", "Vision 2030", "SCADA", "Data Centers"],
  authors: [{ name: "Cyber Solutions Engineering Team" }],
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: "https://cybersolutions.com.sa",
    title: "Cyber Solutions",
    description: "Engineering Secure Digital Infrastructure for Critical Industries.",
    siteName: "Cyber Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${ibmPlexSansArabic.variable} font-sans`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
