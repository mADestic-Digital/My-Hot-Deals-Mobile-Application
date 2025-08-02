'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  isLoggedIn: boolean;
  userInitial?: string;
  onLoginClick: () => void;
  onLogout?: () => void;
}

export default function Navbar({ isLoggedIn, userInitial = 'U', onLoginClick, onLogout }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
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
              <div 
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <span className="text-blue-900 font-semibold text-sm">
                  {userInitial.toUpperCase()}
                </span>
              </div>
              {/* Dropdown menu */}
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 ${
                isProfileDropdownOpen 
                  ? 'opacity-100 visible' 
                  : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              }`}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  Settings
                </a>
                <button
                  onClick={() => {
                    onLogout?.();
                    setIsProfileDropdownOpen(false);
                  }}
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
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {!isLoggedIn && (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-900 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}