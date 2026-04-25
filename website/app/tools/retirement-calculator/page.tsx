import type { Metadata } from "next";
import RetirementCalculator from "./RetirementCalculator";

export const metadata: Metadata = {
  title: "Retirement Calculator",
  description: "Calculate how much corpus you need to retire comfortably. Plan your retirement savings with inflation-adjusted estimates.",
  alternates: { canonical: "https://timesmoney.in/tools/retirement-calculator" },
  openGraph: {
    title: "Retirement Calculator | TimesMoney",
    description: "Plan your retirement with inflation-adjusted estimates.",
    url: "https://timesmoney.in/tools/retirement-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Calculator | TimesMoney",
    description: "Calculate how much corpus you need to retire comfortably.",
  },
};

export default function Page() {
  return <RetirementCalculator />;
}
