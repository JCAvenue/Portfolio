import React from 'react';
import Image from 'next/image';

const ColleagueReviews = () => {
  return (
    <div className="container mx-auto">
      <div className="p-10">
        <div className="my-5">
          <div className="text-2xl font-semibold mb-2 text-center md:text-start">
            Testimonials
          </div>
        </div>
        <div className="md:px-[40px] py-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px]">
            <div>
              <div className="text-sm mb-3 font-light italic">
                &quot;JC is an approachable and helpful colleague. He guided me
                on the development tools that we need to learn and understand.
                He is responsible with his workload and has good management
                skills.&quot;
              </div>
              <div className="flex flex-row gap-4">
                <div>
                  <div className="rounded-full overflow-hidden">
                    <Image
                      alt="Drexmir Review"
                      width={45}
                      height={45}
                      src="/images/drexmir_review.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-blue-500">Drexmir Mentiza</div>
                  <div className="text-sm text-gray-400">
                    Former Colleague at AWB
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm mb-3 font-light italic">
                &quot;I can say that he is a reliable software engineer. He is
                great to work with and has leadership characteristics.&quot;
              </div>
              <div className="flex flex-row gap-4">
                <div>
                  <div className="rounded-full overflow-hidden">
                    <Image
                      alt="Marcy Review"
                      width={45}
                      height={45}
                      src="/images/marcy_review.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-blue-500">Marcy Villegas</div>
                  <div className="text-sm text-gray-400">
                    Former Colleague at MVI
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm mb-3 font-light italic">
                &quot;I witnessed his journey from being an intern to becoming a
                freelance QA and I can say that he is hardworking and dedicated
                to his work.&quot;
              </div>
              <div className="flex flex-row gap-4">
                <div>
                  <div className="rounded-full overflow-hidden">
                    <Image
                      alt="Angel Review"
                      width={45}
                      height={45}
                      src="/images/angel_review.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-blue-500">Angelica Dacuplo</div>
                  <div className="text-sm text-gray-400">
                    Former QA Lead at AWB
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm mb-3 font-light italic">
                &quot;I had the opportunity to work with JC at AWB. We were both
                interns, and I observed how committed he was to producing
                high-quality work as a developer or QA.&quot;
              </div>
              <div className="flex flex-row gap-4">
                <div>
                  <div className="rounded-full overflow-hidden">
                    <Image
                      alt="Krystal Review"
                      width={45}
                      height={45}
                      src="/images/krystal_review.png"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-blue-500">Krystal Yvette Villapando</div>
                  <div className="text-sm text-gray-400">
                    Former Colleague at AWB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColleagueReviews;
