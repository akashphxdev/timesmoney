import type { Metadata } from "next";
import PPFCalculator from "./PPFCalculator";

export const metadata: Metadata = {
  title: "PPF Calculator",
  description: "Calculate your Public Provident Fund (PPF) maturity amount and interest earned. Plan your long-term tax-free savings with PPF.",
  alternates: { canonical: "https://timesmoney.in/tools/ppf-calculator" },
  openGraph: {
    title: "PPF Calculator | TimesMoney",
    description: "Calculate PPF maturity amount and interest earned.",
    url: "https://timesmoney.in/tools/ppf-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPF Calculator | TimesMoney",
    description: "Plan your tax-free savings with PPF calculator.",
  },
};

export default function Page() {
  return <PPFCalculator />;
}
