import type { Metadata } from "next";
import EMICalculator from "./EMICalculator";

export const metadata: Metadata = {
  title: "EMI Calculator",
  description: "Calculate your loan EMI instantly. Enter loan amount, interest rate and tenure to find your monthly EMI and total interest payable.",
  alternates: { canonical: "https://timesmoney.in/tools/emi-calculator" },
  openGraph: {
    title: "EMI Calculator | TimesMoney",
    description: "Calculate your loan EMI instantly.",
    url: "https://timesmoney.in/tools/emi-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMI Calculator | TimesMoney",
    description: "Calculate your loan EMI instantly.",
  },
};

export default function Page() {
  return <EMICalculator />;
}
