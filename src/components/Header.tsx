// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary shadow sticky top-0 z-50">
      <div className="mx-auto px-50 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo1.png"
            alt="Club Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-5xl font-bebas text-white">
            RAPIER FENCING CLUB
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-medium text-lg font-inter text-white">
          <Link href="/about" className="hover:text-blue-500">ABOUT</Link>
          <Link href="/calendar" className="hover:text-blue-500">CALENDAR</Link>
          <Link href="/payments" className="hover:text-blue-500">PAYMENTS</Link>
          <Link href="/contact" className="hover:text-blue-500">CONTACT</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 font-medium bg-white border-t">
          <Link href="/about" className="block hover:text-blue-500">About</Link>
          <Link href="/calendar" className="block hover:text-blue-500">Calendar</Link>
          <Link href="/payments" className="block hover:text-blue-500">Payments</Link>
          <Link href="/contact" className="block hover:text-blue-500">Contact</Link>
        </nav>
      )}
    </header>
  );
}
