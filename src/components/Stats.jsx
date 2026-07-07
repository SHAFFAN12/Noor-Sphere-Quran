import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#0D3B5C] text-white py-16">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="inner">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-5xl lg:text-6xl font-bold mb-1 text-white">1500<span className="text-[#1668A3]">+</span></h3>
            <p className="text-blue-100 font-medium">Students Enrolled</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-5xl lg:text-6xl font-bold mb-1 text-white">50<span className="text-[#1668A3]">+</span></h3>
            <p className="text-blue-100 font-medium">Certified Teachers</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-5xl lg:text-6xl font-bold mb-1 text-white">40<span className="text-[#1668A3]">+</span></h3>
            <p className="text-blue-100 font-medium">Countries Worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-5xl lg:text-6xl font-bold mb-1 text-white">10<span className="text-[#1668A3]">+</span></h3>
            <p className="text-blue-100 font-medium">Years of Excellence</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
