import type { Metadata } from "next";
import SIPCalculator from "./SIPCalculator";

export const metadata: Metadata = {
  title: "SIP Calculator",
  description: "Calculate returns on your SIP investments. Find out how your monthly mutual fund SIP grows with the power of compounding.",
  alternates: { canonical: "https://timesmoney.in/tools/sip-calculator" },
  openGraph: {
    title: "SIP Calculator | TimesMoney",
    description: "Calculate SIP returns and grow your wealth.",
    url: "https://timesmoney.in/tools/sip-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIP Calculator | TimesMoney",
    description: "Find out how your monthly SIP grows over time.",
  },
};

export default function Page() {
  return <SIPCalculator />;
}
