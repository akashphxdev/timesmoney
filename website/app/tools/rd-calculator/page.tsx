import type { Metadata } from "next";
import RDCalculator from "./RDCalculator";

export const metadata: Metadata = {
  title: "RD Calculator",
  description: "Calculate maturity amount on Recurring Deposits. Find out how much your monthly RD investment will grow over time.",
  alternates: { canonical: "https://timesmoney.in/tools/rd-calculator" },
  openGraph: {
    title: "RD Calculator | TimesMoney",
    description: "Calculate RD maturity amount and interest earned.",
    url: "https://timesmoney.in/tools/rd-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Calculator | TimesMoney",
    description: "Find out how your monthly RD grows over time.",
  },
};

export default function Page() {
  return <RDCalculator />;
}
