// app/tools/car-loan-emi-calculator/page.tsx

import type { Metadata } from "next";
import CarLoanCalculator from "./CarLoanCalculator"; 
export const metadata: Metadata = {
  title: "Car Loan EMI Calculator",
  description:
    "Calculate your monthly car loan EMI instantly. Enter car price, down payment, interest rate and tenure to plan your dream car purchase.",
  alternates: {
    canonical: "https://timesmoney.in/tools/car-loan-emi-calculator",
  },
  openGraph: {
    title: "Car Loan EMI Calculator | TimesMoney",
    description:
      "Calculate your monthly car loan EMI instantly. Plan your dream car purchase with TimesMoney.",
    url: "https://timesmoney.in/tools/car-loan-emi-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan EMI Calculator | TimesMoney",
    description: "Calculate your monthly car loan EMI instantly.",
  },
};

export default function Page() {
  return <CarLoanCalculator />;
}