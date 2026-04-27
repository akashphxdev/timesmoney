'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineUser,
  AiOutlineTags,
  AiOutlineShopping,
  AiOutlineFundProjectionScreen,
  AiOutlinePicture,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineMessage,
  AiOutlineCalendar
} from 'react-icons/ai';

const menuItems = [
  { name: 'Dashboard', icon: AiOutlineDashboard, href: '/dashboard' },

  { name: 'Blogs', icon: AiOutlineFileText, href: '/blogs' },
  { name: 'Categories', icon: AiOutlineTags, href: '/categories' },

  { name: 'Products', icon: AiOutlineShopping, href: '/products' },
  { name: 'Leads', icon: AiOutlineFundProjectionScreen, href: '/leads' },

  { name: 'Our Partners', icon: AiOutlineTeam, href: '/our-partners' },

  { name: 'Ad Management', icon: AiOutlinePicture, href: '/ads' },

 { name: 'Ad Events', icon: AiOutlineCalendar, href: '/ads-events' },

  { name: 'Testimonials', icon: AiOutlineMessage, href: '/testimonials' },


  { name: 'Admins', icon: AiOutlineUser, href: '/admins' },

  { name: 'Settings', icon: AiOutlineSetting, href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
            <span className="text-yellow-500 font-bold text-sm">T₹</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">
              Times<span className="text-green-500">Money</span>
            </p>
            <span className="text-[10px] text-gray-400">
              Admin Panel CMS
            </span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition ${
                active
                  ? 'bg-green-200 text-green-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{item.name}</span>
              </div>

              {active && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-gray-200 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
          C
        </div>
        <div className="leading-tight">
          <p className="text-sm font-medium text-gray-800">CMS Admin</p>
          <p className="text-[10px] text-gray-400">SUPER ADMIN</p>
        </div>
      </div>

    </aside>
  );
}