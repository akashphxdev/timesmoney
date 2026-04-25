'use client';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Header from './Header';

const noLayoutRoutes = ['/login'];

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showLayout = !noLayoutRoutes.includes(pathname);

 
  if (!showLayout) return <>{children}</>;

  // ✅ Layout visible for all other routes
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar />
      </div>

      {/* Right */}
      <div className="flex-1 flex flex-col ml-64">

        {/* Header */}
        <div className="fixed top-0 right-0 left-64 z-20">
          <Header />
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto mt-16 p-6 bg-gray-50">
          {children}
        </main>

      </div>
    </div>
  );
}