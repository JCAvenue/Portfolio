import React from 'react';

const Jumbotron = () => {
  return (
    <div className=" flex justify-center mb-8 h-[500px]">
      <div className="container mx-auto flex flex-col py-6 px-8 items-center justify-center">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 mt-10 mb-3 text-center to-green-500 text-5xl font-extrabold">
          John Carlo Fababeir
        </div>
        <div className="mb-5 text-3xl md:text-4xl font-bold flex flex-row items-center text-center justify-center">
          <div>Software Engineer</div>
        </div>
        <div className="font-normal text-center mb-7 text-gray-600 ">
          A Professional Software Engineer with a demonstrated history of working
          in Software Development and Scrum/Agile Environment.
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <button className="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 px-4 py-3 text-white font-medium text-xs md:text-sm rounded-md w-[120px] md:w-auto">
              Download CV
            </button>
          </div>
          <div>
            <button className="border-[1px] px-4 py-3 hover:border-blue-400 active:bg-gray-100 hover:text-blue-500 text-xs font-medium md:text-sm rounded-md w-[120px] md:w-auto">
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
