'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="bg-white py-40 px-6 sm:px-12 md:px-20 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Text Content */}
          <div className="flex-1">
            <h3 className="text-5xl text-primary sm:text-5xl font-bold mb-6">
              Who we are
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Our club has been open since 1996. We teach both sabre and foil. We have five coaches, Bethany, Zach, Xavier and Zico who specialize in sabre, and Anna, a foil specialist. All of our coaches have been high performance athletes and our club brings international fencing experience to Winnipeg. Classes are bilingual and instruction is given in both English and French. Our practice nights are Monday and Thursday. Monday trainings are from 4:30pm to 6:00pm for general members, with an additional 6:00pm to 7:30pm slot for advanced classes on Mondays.
            </p>
            <p className="text-lg leading-relaxed mb-10">
              Our coaches are accompanied by assistant coaches daily. They are provincial team fencers who are enrolled in, or have completed the level one coaching certification sanctioned by the Manitoba Fencing Association.
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-primary text-white px-6 py-2 rounded font-semibold bg-primary hover:bg-primary-alt transition"
            >
              OUR PROGRAMS
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 hidden md:block">
            <Image
              src="/fencer-about.png" // Make sure this file exists in your public/ folder
              alt="Illustration"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
