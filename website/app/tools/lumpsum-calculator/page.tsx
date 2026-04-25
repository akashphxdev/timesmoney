import type { Metadata } from "next";
import LumpsumCalculator from "./LumpsumCalculator";

export const metadata: Metadata = {
  title: "Lumpsum Calculator",
  description: "Calculate returns on lumpsum mutual fund investments. See how a one-time investment grows with compound interest over time.",
  alternates: { canonical: "https://timesmoney.in/tools/lumpsum-calculator" },
  openGraph: {
    title: "Lumpsum Calculator | TimesMoney",
    description: "Calculate returns on lumpsum mutual fund investments.",
    url: "https://timesmoney.in/tools/lumpsum-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumpsum Calculator | TimesMoney",
    description: "See how a one-time investment grows over time.",
  },
};

export default function Page() {
  return <LumpsumCalculator />;
}
