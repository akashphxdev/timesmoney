import type { Metadata } from "next";
import HRACalculator from "./HRACalculator";

export const metadata: Metadata = {
  title: "HRA Calculator",
  description: "Calculate your HRA exemption and tax savings. Find out how much House Rent Allowance is exempt from income tax.",
  alternates: { canonical: "https://timesmoney.in/tools/hra-calculator" },
  openGraph: {
    title: "HRA Calculator | TimesMoney",
    description: "Calculate HRA exemption and save on taxes.",
    url: "https://timesmoney.in/tools/hra-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRA Calculator | TimesMoney",
    description: "Find out how much HRA is exempt from income tax.",
  },
};

export default function Page() {
  return <HRACalculator />;
}
