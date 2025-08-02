'use client';

import Link from 'next/link';

interface NavbarProps {
  isLoggedIn: boolean;
  userInitial?: string;
  onLoginClick: () => void;
  onLogout?: () => void;
}

export default function Navbar({ isLoggedIn, userInitial = 'U', onLoginClick, onLogout }: NavbarProps) {
  const navigationItems = [
    { name: 'Company', href: '/company' },
    { name: 'Users', href: '/users' },
    { name: 'Requests', href: '/requests' },
    { name: 'Disbursement', href: '/disbursement' },
    { name: 'Affiliations', href: '/affiliations' },
    { name: 'History', href: '/history' },
    { name: 'Advertisement', href: '/advertisement' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-full mx-auto">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-semibold text-gray-900">United Stars Global</span>
        </Link>

                 {/* Navigation Items */}
         <div className="hidden md:flex items-center space-x-16">
           {navigationItems.map((item) => (
             <Link
               key={item.name}
               href={item.href}
               className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
             >
               {item.name}
             </Link>
           ))}
         </div>

        {/* User Section */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <div className="relative group">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                <span className="text-blue-900 font-semibold text-sm">
                  {userInitial.toUpperCase()}
                </span>
              </div>
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <button
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="bg-blue-900 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}