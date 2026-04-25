import type { Metadata } from "next";
import SSYCalculator from "./SSYCalculator";

export const metadata: Metadata = {
  title: "SSY Calculator",
  description: "Calculate Sukanya Samriddhi Yojana (SSY) maturity amount. Plan your daughter's future with this government-backed scheme.",
  alternates: { canonical: "https://timesmoney.in/tools/ssy-calculator" },
  openGraph: {
    title: "SSY Calculator | TimesMoney",
    description: "Calculate Sukanya Samriddhi Yojana maturity amount.",
    url: "https://timesmoney.in/tools/ssy-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSY Calculator | TimesMoney",
    description: "Plan your daughter's future with SSY calculator.",
  },
};

export default function Page() {
  return <SSYCalculator />;
}
