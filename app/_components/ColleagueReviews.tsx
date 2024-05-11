import React from 'react';
import Image from 'next/image';

import review_items from '@/constant/testimonial_review';

const ColleagueReviews = () => {
  return (
    <div className="container mx-auto">
      <div className="p-10">
        <div className="my-5 text-center md:text-start">
          <div className="text-2xl font-semibold mb-2 ">Testimonials</div>
          <div className=" text-slate-600 font-light">
            How my colleague says about me
          </div>
        </div>
        <div className="md:px-[40px] py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px]">
            {review_items
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((items) => {
                return (
                  <div key={items.name}>
                    <div className="text-sm mb-3 font-light italic">
                      &quot;{items.description}&quot;
                    </div>
                    <div className="flex flex-row gap-4">
                      <div>
                        <div className="rounded-full overflow-hidden">
                          <Image
                            alt={`${items.name} Profile Picture`}
                            width={45}
                            height={45}
                            src={`/images/profile_pictures/${items.image_link}`}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="text-blue-500">{items.name}</div>
                        <div className="text-sm text-gray-400">
                          {items.position}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColleagueReviews;
