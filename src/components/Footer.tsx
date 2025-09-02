'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 text-sm">
        {/* Club Logo */}
        <div className="pr-10">
          <Image
            src="/logofull.png"
            alt="Club Logo"
            width={300}
            height={40}
            priority
          />
        </div>

        {/* Mailing List */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Join Our Mailing List</h4>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-fit mt-1 px-4 py-2 bg-primary hover:bg-primary-alt text-white text-sm rounded"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p>Email: <a href="mailto:info@rapierfencing.ca" className="hover:underline">info@rapierfencing.ca</a></p>
          <p>Phone: <a href="tel:1234567890" className="hover:underline">(123) 456-7890</a></p>
        </div>
      </div>

      {/* <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Rapier Fencing Club. All rights reserved.
      </div> */}
    </footer>
  );
}
