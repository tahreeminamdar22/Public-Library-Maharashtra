'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBookOpen, FaQuestionCircle, FaUserShield, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="./assets/img/nlb.jpg" alt="Logo" className="h-10 w-auto" />
            <span className="font-bold text-gray-900 text-lg">National Library Bandra</span>
          </Link>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <NavItem
              href="https://nlbdkc.noeticindia.com/digitalLibrary"
              label="Digital Library"
              icon={<FaBookOpen />}
              color="text-teal-600"
            />
            <NavItem
              href="https://nlbdkc.noeticindia.com/nationallibraryvandre/page/help-center-updated?pageId=79"
              label="Help Center"
              icon={<FaQuestionCircle />}
              color="text-green-600"
            />
            <NavItem
              href="https://nlbdkc.noeticindia.com/"
              label="Admin Panel"
              icon={<FaUserShield />}
              color="text-yellow-600"
            />
            <NavItem
              href="https://nlbdkc.noeticindia.com/creation/userProfile"
              label="My Account"
              icon={<FaUserCircle />}
              color="text-blue-600"
            />
            <NavItem
              href="https://nlbdkc.noeticindia.com/logout"
              label="Logout"
              icon={<FaSignOutAlt />}
              color="text-red-600"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, label, icon, color }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <span className={`flex items-center gap-2 font-semibold text-sm hover:underline transition ${color}`}>
        {icon}
        {label}
      </span>
    </Link>
  );
}
