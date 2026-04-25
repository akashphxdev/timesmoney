import type { Metadata } from "next";
import HomeLoanCalculator from "./HomeLoanCalculator";

export const metadata: Metadata = {
  title: "Home Loan EMI Calculator",
  description: "Calculate your home loan EMI, total interest and repayment schedule. Plan your home purchase with accurate EMI estimates.",
  alternates: { canonical: "https://timesmoney.in/tools/home-loan-emi-calculator" },
  openGraph: {
    title: "Home Loan EMI Calculator | TimesMoney",
    description: "Calculate your home loan EMI and repayment schedule.",
    url: "https://timesmoney.in/tools/home-loan-emi-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Loan EMI Calculator | TimesMoney",
    description: "Plan your home purchase with accurate EMI estimates.",
  },
};

export default function Page() {
  return <HomeLoanCalculator />;
}
