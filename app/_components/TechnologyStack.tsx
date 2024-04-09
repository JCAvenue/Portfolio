import React from 'react';
import Image from 'next/image';

import tech_items from '@/constant/tech_items';

const TechnologyStack = () => {

  const startDate: any = new Date(2021, 8);
  const currentDate: any = new Date();
  const difference = currentDate - startDate;
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const yearsExperience = difference / millisecondsPerYear;

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="container mx-auto px-8 mb-10">
        <div className="mt-10 text-center text-xl font-semibold mb-10 ">
          More than {yearsExperience.toFixed(1)} years of software development
          experience across various{' '}
          <span className="text-blue-500">Technology stacks</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full mx-auto gap-2">
          {tech_items.map((item) => {
            return (
              <div
                key={item.alt_name}
                className=" p-5 rounded-xl"
              >
                <div className="flex items-center relative h-[70px]">
                  <Image
                    alt={item.alt_name}
                    fill
                    priority
                    src={item.link}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
