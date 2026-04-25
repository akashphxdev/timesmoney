import type { Metadata } from "next";
import NPSCalculator from "./NPSCalculator";

export const metadata: Metadata = {
  title: "NPS Calculator",
  description: "Calculate your National Pension System (NPS) maturity corpus and monthly pension. Plan your retirement with NPS investments.",
  alternates: { canonical: "https://timesmoney.in/tools/nps-calculator" },
  openGraph: {
    title: "NPS Calculator | TimesMoney",
    description: "Calculate NPS corpus and monthly pension at retirement.",
    url: "https://timesmoney.in/tools/nps-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NPS Calculator | TimesMoney",
    description: "Plan your retirement with NPS calculator.",
  },
};

export default function Page() {
  return <NPSCalculator />;
}
