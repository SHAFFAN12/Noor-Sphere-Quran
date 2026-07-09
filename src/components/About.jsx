import React from 'react';
import largeImage from '../assets/large-image.jpg';
import smallImage from '../assets/small-image.jpg';
import certifiedIcon from '../assets/Qualified & Certified Teachers.png';
import globalIcon from '../assets/Global Accessibility.png';
import maleFemaleIcon from '../assets/male-and-female-about.png';
import affordableIcon from '../assets/affordable-plans.png';

const About = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative ml-8 lg:ml-0 pb-10 lg:pb-0">
            <img
              src={largeImage}
              alt="Quran Student"
              className="rounded-[20px] w-[90%] shadow-2xl"
            />
            <img
              src={smallImage}
              alt="Online Class"
              className="absolute -bottom-8 -left-8 w-[55%] sm:w-[60%] rounded-[15px] border-[10px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            />
            <div className="hidden sm:flex absolute top-[25%] right-[10%] translate-x-1/2 bg-white w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex-col justify-center items-center border-[3px] border-[#e6f0f9] shadow-[0_10px_25px_rgba(0,0,0,0.06)] font-semibold text-[#5d7e9c] text-center leading-[1.3] text-[0.65rem] lg:text-[0.7rem] tracking-[0.05em] z-10">
              <span className="text-[#0b5894] text-[1.7rem] lg:text-[2rem] font-extrabold tracking-normal leading-[1.1] mb-0.5">10+</span>
              YEARS<br/>EXCELLENCE
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <div className="h-[2px] w-10 bg-[#7fb8e1]"></div>
              <span className="text-[#1668A3] font-bold text-sm tracking-[0.2em] uppercase">About Us</span>
              <div className="h-[2px] w-10 bg-[#7fb8e1]"></div>
            </div>
            <h2 className="font-serif text-3xl md:text-[34px] xl:text-[34px] text-[#102e52] font-bold leading-[1.2] mb-6">
              Bringing the <span className="text-[#1668A3] italic" style={{ fontFamily: "'Playfair Display', serif" }}>Light of the Quran</span> Into<br />Every Home
            </h2>
            <p className="mb-10 text-[#6a859c] text-[17px] leading-[1.7]">
              At International Quranic Academic, we believe Quran education should be accessible, authentic, and inspiring. Our mission is to help students of all ages develop a strong connection with the Quran through expert guidance, interactive classes, and a flexible online learning environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 mb-10">
              {/* Card 1 */}
              <div className="bg-[#EAF5FC] p-7 rounded-[20px] border border-white/50 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="w-12 h-12 mb-5">
                  <img src={certifiedIcon} alt="Certified Teachers" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-[#0D3B5C] mb-3 text-[17px]" style={{ fontFamily: "'Poppins', sans-serif" }}>Qualified & Certified Teachers</h4>
                <p className="text-[14.5px] text-[#6a859c] leading-[1.6]">Certified Quran instructors with deep knowledge of Tajweed & Tafseer</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#eaf4fa] p-7 rounded-[20px] border border-white/50 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="w-12 h-12 mb-5">
                  <img src={globalIcon} alt="Global Accessibility" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-[#0D3B5C] mb-3 text-[17px]" style={{ fontFamily: "'Poppins', sans-serif" }}>Global Accessibility</h4>
                <p className="text-[14.5px] text-[#6a859c] leading-[1.6]">Study from anywhere with flexible schedules that fit your lifestyle</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#eaf4fa] p-7 rounded-[20px] border border-white/50 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="w-12 h-12 mb-5">
                  <img src={maleFemaleIcon} alt="Male & Female Tutors" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-[#0D3B5C] mb-3 text-[17px]" style={{ fontFamily: "'Poppins', sans-serif" }}>Male & Female Tutors</h4>
                <p className="text-[14.5px] text-[#6a859c] leading-[1.6]">Professional tutors ensuring comfort and trust for every student</p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#eaf4fa] p-7 rounded-[20px] border border-white/50 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="w-12 h-12 mb-5">
                  <img src={affordableIcon} alt="Affordable Plans" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-[#0D3B5C] mb-3 text-[17px]" style={{ fontFamily: "'Poppins', sans-serif" }}>Affordable Plans</h4>
                <p className="text-[14.5px] text-[#6a859c] leading-[1.6]">Quality learning without financial burden with flexible fee plans</p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <button className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold bg-[#3b82f6] text-white shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[17px]">Discover More ➔</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
