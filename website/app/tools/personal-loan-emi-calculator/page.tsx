import type { Metadata } from "next";
import PersonalLoanCalculator from "./PersonalLoanCalculator";

export const metadata: Metadata = {
  title: "Personal Loan EMI Calculator",
  description: "Calculate your personal loan EMI, total interest and repayment schedule. Compare personal loan offers from top banks.",
  alternates: { canonical: "https://timesmoney.in/tools/personal-loan-emi-calculator" },
  openGraph: {
    title: "Personal Loan EMI Calculator | TimesMoney",
    description: "Calculate personal loan EMI and total interest.",
    url: "https://timesmoney.in/tools/personal-loan-emi-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan EMI Calculator | TimesMoney",
    description: "Calculate your personal loan EMI instantly.",
  },
};

export default function Page() {
  return <PersonalLoanCalculator />;
}
