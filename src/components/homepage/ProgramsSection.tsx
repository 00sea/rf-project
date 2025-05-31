'use client';

import Link from 'next/link';
import { GiSwordHilt } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiFencer } from "react-icons/gi";


export default function ProgramsSection() {
  const programs = [
    {
      title: 'Beginner Program',
      bullets: [
        'Introduce the sport of fencing with training in both sabre and foil',
        'Learn the basic fundamentals of fencing',
        'Learn the rules of fencing',
        'Foster an interest and love for the sport',
        'Have fun',
      ],
      href: '/contact',
      cta: 'Learn More',
    },
    {
      title: 'Regular Program',
      bullets: [
        'Creating a learning and fun environment for recreational fencers',
        'Improve upon the fundamentals of the sport',
        'Emphasis on fun, learning, fitness and personal improvement',
      ],
      href: '/contact',
      cta: 'Learn More',
    },
    {
      title: 'Advanced Program',
      bullets: [
        'Preparing fencers who wish to apply to, or belong to, the provincial team',
        'Reworking and perfecting the fundamentals of fencing',
        'Maintaining a higher level of training intensity for athletes who are willing to compete',
        'Providing a nurturing, positive, and competitive fencing environment',
        'Providing a program to challenge high level fencers',
      ],
      href: '/contact',
      cta: 'Learn More',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-10">
      <h2 className="text-4xl text-primary font-bold text-center mb-12">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map(({ title, bullets, href, cta }) => (
          <div
            key={title}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <ul className="list-disc list-inside text-gray-600 mb-10 space-y-2">
              {bullets.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <FaArrowRightLong className="mt-1.5 text-primary shrink-0 text-xs" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={href}
              className="mt-auto text-primary hover:underline font-medium"
            >
              {cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
