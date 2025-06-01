'use client';

export default function UpcomingEvents() {
  const events = [
    {
      date: 'Sep 10',
      title: 'Beginner Workshop',
      description: 'Introduction to basic fencing techniques',
    },
    {
      date: 'Sep 23',
      title: 'Youth Tournament',
      description: 'Local competition for young fencers',
    },
    {
      date: 'Oct 14',
      title: 'Autumn Invitational',
      description: 'Open championship for all ages',
    },
  ];

  return (
    <div className="bg-contrast py-16 px-10 pr-40 max-w-xl ml-auto">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
      <div className="space-y-4 my-5">
        {events.map((event, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="text-center text-primary font-bold min-w-[48px]">
              <div className="uppercase text-sm leading-tight">{event.date.split(' ')[0]}</div>
              <div className="text-xl">{event.date.split(' ')[1]}</div>
            </div>
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/calendar" className="block mt-5 text-primary font-medium hover:underline">
        View All Events →
      </a>
    </div>
  );
}
