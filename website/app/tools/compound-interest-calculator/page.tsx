import type { Metadata } from "next";
import StepUpSIPCalculator from "./StepUpSIPCalculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator",
  description: "Calculate compound interest on your investments. See how your money grows with the power of compounding over time.",
  alternates: { canonical: "https://timesmoney.in/tools/compound-interest-calculator" },
  openGraph: {
    title: "Compound Interest Calculator | TimesMoney",
    description: "See how your money grows with the power of compounding.",
    url: "https://timesmoney.in/tools/compound-interest-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator | TimesMoney",
    description: "Calculate compound interest on your investments.",
  },
};

export default function Page() {
  return <StepUpSIPCalculator />;
}
