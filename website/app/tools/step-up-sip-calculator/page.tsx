import type { Metadata } from "next";
import StepUpSIPCalculator from "./StepUpSIPCalculator";

export const metadata: Metadata = {
  title: "Step-Up SIP Calculator",
  description: "Calculate returns on Step-Up SIP where your investment increases every year. See how annual top-up boosts your mutual fund corpus.",
  alternates: { canonical: "https://timesmoney.in/tools/step-up-sip-calculator" },
  openGraph: {
    title: "Step-Up SIP Calculator | TimesMoney",
    description: "See how annual SIP top-up boosts your corpus.",
    url: "https://timesmoney.in/tools/step-up-sip-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Step-Up SIP Calculator | TimesMoney",
    description: "Calculate Step-Up SIP returns and grow wealth faster.",
  },
};

export default function Page() {
  return <StepUpSIPCalculator />;
}
