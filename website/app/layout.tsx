import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WelcomeModal } from "@/components/WelcomeModal";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timesmoney.in"),

  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%231e293b'/><text x='50' y='72' font-family='Georgia,serif' font-size='58' font-weight='bold' text-anchor='middle'><tspan fill='%23ffffff'>T</tspan><tspan fill='%23facc15'>₹</tspan></text></svg>",
  },

  // ✅ Canonical URL — har page ka canonical auto set hoga
  alternates: {
    canonical: "https://timesmoney.in",
  },

  title: {
    default: "TimesMoney | Loans, Insurance & Investments",
    template: "%s | TimesMoney",
  },

  description:
    "TimesMoney is a trusted financial platform helping Indians compare loans, insurance, credit cards, and investments — plus smart calculators to plan your finances better.",

  keywords: [
    "loans india",
    "insurance calculator",
    "investment calculator",
    "SIP calculator",
    "home loan EMI",
    "term insurance",
    "credit cards india",
    "timesmoney",
  ],

  authors: [{ name: "TimesMoney", url: "https://timesmoney.in" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    siteName: "TimesMoney",
    title: "TimesMoney | Loans, Insurance & Investments",
    description:
      "TimesMoney is a trusted financial platform helping Indians compare loans, insurance, credit cards, and investments.",
    url: "https://timesmoney.in",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "TimesMoney - Loans, Insurance & Investments",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TimesMoney | Loans, Insurance & Investments",
    description:
      "Compare loans, insurance & investments. Smart calculators to plan your finances.",
    images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="font-[var(--font-body)]">
        <Navbar />
        <WelcomeModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}