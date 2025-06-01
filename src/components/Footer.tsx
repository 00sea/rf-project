// components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Club Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Rapier Fencing Club</h4>
          <p>
            Building confidence, skill, and sportsmanship through the art of fencing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/calendar" className="hover:underline">Calendar</Link></li>
            <li><Link href="/payments" className="hover:underline">Payments</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Location</h4>
          <p>123 Fencing Lane<br />Vancouver, BC<br />Canada</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p>Email: <a href="mailto:info@rapierfencing.ca" className="hover:underline">info@rapierfencing.ca</a></p>
          <p>Phone: <a href="tel:1234567890" className="hover:underline">(123) 456-7890</a></p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Rapier Fencing Club. All rights reserved.
      </div>
    </footer>
  );
}
