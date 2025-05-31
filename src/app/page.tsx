// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:px-8 sm:py-20 bg-gray-50 text-gray-800">
      <main className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Welcome to Our Club</h1>
        <p className="text-lg sm:text-xl mb-8">
          Join our community and stay updated with our latest events, registration forms, and payment options.
        </p>

        <nav className="flex flex-col sm:flex-row justify-center gap-4 text-base font-medium">
          <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
          <Link href="/calendar" className="text-blue-600 hover:underline">Live Calendar</Link>
          <Link href="/payments" className="text-blue-600 hover:underline">Make a Payment</Link>
          <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
        </nav>
      </main>
    </div>
  );
}
