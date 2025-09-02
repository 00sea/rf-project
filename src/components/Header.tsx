// components/Header.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    // Check immediately (in case we're already scrolled)
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isHome
      ? scrolled
        ? 'bg-primary shadow-md text-white'
        : 'bg-transparent text-white'
      : 'bg-primary shadow-md text-white'}`}
    >      <div className="mx-auto px-50 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo2.png"
            alt="Club Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-4xl font-bebas text-white mt-2 ml-2">
            RAPIER FENCING CLUB
          </span>
          {/* <p className="text-xs font-semibold  mt-0.5 text-white">
            Est. 1996
          </p> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-semibold text-white mt-1">
          <Link href="/about" className="hover:underline hover:underline-offset-6 hover:decoration-2">ABOUT</Link>
          <Link href="/calendar" className="hover:underline hover:underline-offset-6 hover:decoration-2">SCHEDULE</Link>
          <Link href="/programs" className="hover:underline hover:underline-offset-6 hover:decoration-2">MEMBERSHIP</Link>
          <Link href="/contact" className="hover:underline hover:underline-offset-6 hover:decoration-2">CONTACT</Link>
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
