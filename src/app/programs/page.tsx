// app/programs/page.tsx
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen space-y-0">
      {/* Header Section */}
      <section className="bg-gray-50 py-20 px-6 sm:px-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Our Programs</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          None of our programs are age restricted. The classes are divided based
          on the interests of individual fencers, and what they want to get out
          of the club. If you have any questions, please see our{' '}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            contact page
          </Link>.
        </p>
      </section>

      {/* Beginner Program - Green */}
      <section className="relative py-12 px-6 sm:px-12 text-white
        bg-gradient-to-br from-green-500 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Beginner Program</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Introduce the sport of fencing with training in both sabre and foil</li>
            <li>Learn the basic fundamentals of fencing</li>
            <li>Learn the rules of fencing</li>
            <li>Foster an interest and love for the sport</li>
            <li>Have fun</li>
          </ul>
        </div>
      </section>

      {/* Regular Program - Gold */}
      <section className="relative py-12 px-6 sm:px-12 text-black
        bg-gradient-to-br from-yellow-400 to-amber-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Regular Program</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Creating a learning and fun environment for recreational fencers</li>
            <li>Improve upon the fundamentals of the sport</li>
            <li>Emphasis on fun, learning, fitness and personal improvement</li>
          </ul>
        </div>
      </section>

      {/* Advanced Program - Red */}
      <section className="relative py-12 px-6 sm:px-12 text-white
        bg-gradient-to-br from-red-500 to-rose-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Advanced Program</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Preparing fencers who wish to apply to, or belong to, the provincial team</li>
            <li>Reworking and perfecting the fundamentals of fencing</li>
            <li>Maintaining a higher level of training intensity for athletes willing to compete</li>
            <li>Providing a nurturing, positive, and competitive fencing environment</li>
            <li>Providing a program to challenge high level fencers</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="py-12 text-center">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-primary hover:bg-primary-alt text-white rounded-lg font-semibold"
        >
          Contact Us to Join
        </Link>
      </div>
    </main>
  );
}
