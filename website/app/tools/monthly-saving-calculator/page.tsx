import type { Metadata } from "next";
import MonthlySavingsCalculator from "./MonthlySavingsCalculator";

export const metadata: Metadata = {
  title: "Monthly Saving Calculator",
  description: "Calculate how much you need to save every month to reach your financial goal. Plan your savings with our easy-to-use calculator.",
  alternates: { canonical: "https://timesmoney.in/tools/monthly-saving-calculator" },
  openGraph: {
    title: "Monthly Saving Calculator | TimesMoney",
    description: "Calculate monthly savings needed to reach your goal.",
    url: "https://timesmoney.in/tools/monthly-saving-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Saving Calculator | TimesMoney",
    description: "Plan your monthly savings to reach your financial goal.",
  },
};

export default function Page() {
  return <MonthlySavingsCalculator />;
}
