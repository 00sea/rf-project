// components/Hero.tsx
'use client';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/sf2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full text-left text-white px-4 sm:px-80">
        <div className="max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Experience the Thrill of Fencing</h1>
          <p className="text-lg sm:text-xl max-w-2xl">
          Rapier Fencing Club is dedicated to providing quality training and fostering a passion for the sport. Join us and discover the art of fencing in a fun and dynamic environment. All skill levels are welcome!
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-primary hover:bg-primary-alt tracking-wider font-semibold rounded-lg shadow-md"
          >
            JOIN NOW
          </a>
        </div>
      </div>


    </section>
  );
}
