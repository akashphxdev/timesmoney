import type { Metadata } from "next";
import GratuityCalculator from "./GratuityCalculator";

export const metadata: Metadata = {
  title: "Gratuity Calculator",
  description: "Calculate your gratuity amount as per the Payment of Gratuity Act. Enter your salary and years of service to get your gratuity estimate.",
  alternates: { canonical: "https://timesmoney.in/tools/gratuity-calculator" },
  openGraph: {
    title: "Gratuity Calculator | TimesMoney",
    description: "Calculate your gratuity amount instantly.",
    url: "https://timesmoney.in/tools/gratuity-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratuity Calculator | TimesMoney",
    description: "Calculate gratuity as per the Gratuity Act.",
  },
};

export default function Page() {
  return <GratuityCalculator />;
}
