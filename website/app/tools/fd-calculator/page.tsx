import type { Metadata } from "next";
import FDCalculator from "./FDCalculator";

export const metadata: Metadata = {
  title: "FD Calculator",
  description: "Calculate maturity amount and interest earned on Fixed Deposits. Compare simple and compound interest for FD investments.",
  alternates: { canonical: "https://timesmoney.in/tools/fd-calculator" },
  openGraph: {
    title: "FD Calculator | TimesMoney",
    description: "Calculate maturity amount on Fixed Deposits.",
    url: "https://timesmoney.in/tools/fd-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FD Calculator | TimesMoney",
    description: "Calculate FD maturity amount and interest earned.",
  },
};

export default function Page() {
  return <FDCalculator />;
}
