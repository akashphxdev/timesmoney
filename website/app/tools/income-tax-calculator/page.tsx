import type { Metadata } from "next";
import IncomeTaxCalculator from "./IncomeTaxCalculator";

export const metadata: Metadata = {
  title: "Income Tax Calculator",
  description: "Calculate your income tax liability for FY 2024-25. Compare old and new tax regime and find which saves you more tax.",
  alternates: { canonical: "https://timesmoney.in/tools/income-tax-calculator" },
  openGraph: {
    title: "Income Tax Calculator | TimesMoney",
    description: "Calculate income tax and compare old vs new regime.",
    url: "https://timesmoney.in/tools/income-tax-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Income Tax Calculator | TimesMoney",
    description: "Calculate your income tax for FY 2024-25.",
  },
};

export default function Page() {
  return <IncomeTaxCalculator />;
}
