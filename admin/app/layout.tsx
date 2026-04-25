import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';

export const metadata: Metadata = {
   icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%231e293b'/><text x='50' y='72' font-family='Georgia,serif' font-size='58' font-weight='bold' text-anchor='middle'><tspan fill='%23ffffff'>T</tspan><tspan fill='%23facc15'>₹</tspan></text></svg>",
  },
  title: 'TimesMoney Admin',
  description: 'TimesMoney Admin Panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}