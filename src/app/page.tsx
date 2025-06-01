import Hero from '@/components/homepage/Hero';
import ProgramsSection from '@/components/homepage/ProgramsSection';
import UpcomingEvents from '@/components/homepage/UpcomingEvents';
import RecentNews from '@/components/homepage/RecentNews';

export default function Home() {
  return (
    <>
      <Hero />

      <ProgramsSection />

      <section className="bg-contrast">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
          <UpcomingEvents />
          <RecentNews />
        </div>
      </section>

      {/* <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
        <p>Use the links above to learn more, view the calendar, or contact us!</p>
      </section> */}



    </>
  );
}
