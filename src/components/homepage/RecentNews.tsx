'use client';

export default function RecentNews() {
  const news = [
    {
      title: 'Club Open House Success',
      description: 'We had an amazing turnout at our recent open house event.',
    },
    {
      title: 'New Beginner Classes',
      description: 'Starting next month, we are offering additional classes for new fencers.',
    },
    {
      title: 'Holiday Schedule Update',
      description: 'Please note the modified club hours during the holiday season.',
    },
  ];

  return (
    <div className="py-16 px-10 bg-contrast2">
      <h2 className="text-3xl font-bold mb-4">Recent Updates</h2>
      <div className="space-y-4 my-5">
        {news.map((item, i) => (
          <div key={i}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      <a href="/news" className="block mt-5 text-primary font-medium hover:underline">
        View All Updates →
      </a>
    </div>
  );
}
