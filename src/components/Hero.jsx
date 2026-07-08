import React from 'react';
import { Lock } from 'lucide-react';
import heroImage from '../assets/hero-section-image.png';
import bismillahImage from '../assets/bismillah.png';
import expertTeachersIcon from '../assets/expert-teachers.png';
import worldwideIcon from '../assets/worldwide.png';
import maleFemaleIcon from '../assets/male&female.png';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] h-[calc(100vh-80px)] overflow-hidden flex items-center bg-white">
      <div className="absolute top-0 right-0 w-[45%] h-full z-10">
        <img src={heroImage} alt="Boy reading Quran online" className="w-full h-full object-cover object-left" />
      </div>
      
      <div className="container relative z-20 flex items-center h-full py-16 w-full mx-auto px-4 lg:px-10">
        <div className="inner flex items-center w-full h-full">
        
        <div className="w-[52%] pr-6 animate-fade-in">
          <div className="bg-white px-4 py-1.5 rounded-full inline-flex mb-5 border border-slate-200 text-[#1668A3] normal-case tracking-normal">
            <span className="mr-1.5">★</span> 3 Free Trial Classes — No Card Required
          </div>
          
          <div className="mb-4">
            <img src={bismillahImage} alt="Bismillah" className="h-14" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl mb-5 leading-tight font-bold text-[#0D3B5C]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Learn the Holy <span className="text-[#1668A3] italic font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Quran</span><br />
            Online<br />
            Anytime, Anywhere
          </h1>
          
          <p className="text-base mb-8 max-w-md text-[#5C7D92]">
            International Quranic Academic is a trusted online Quran Academy providing expert one-to-one Quran classes for kids & adults across USA and worldwide. Expert certified male & female tutors available.
          </p>
          
          <div className="flex gap-4 mb-10">
            <button className="bg-[#3b82f6] text-white px-7 py-3 rounded-full shadow-[0_10px_20px_rgba(59,130,246,0.3)] font-bold text-[14.5px] hover:bg-blue-600 transition-all duration-300">Book Free Trial Class ➔</button>
            <button className="bg-transparent text-[#3b82f6] px-7 py-3 rounded-full border border-[#3b82f6] font-bold text-[14.5px] hover:bg-blue-600 transition-all duration-300">View Fee Structure</button>
          </div>
          
          <div className="flex gap-6 text-base font-semibold text-[#0D3B5C] mt-12">
            <div className="flex items-center gap-3">
              <img src={expertTeachersIcon} alt="Expert Teachers" className="h-10" />
              Expert Teachers
            </div>
            <div className="flex items-center gap-3">
              <img src={worldwideIcon} alt="Worldwide" className="h-10" />
              Worldwide
            </div>
            <div className="flex items-center gap-3">
              <img src={maleFemaleIcon} alt="Male & Female" className="h-10" />
              Male & Female
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-lg -ml-6 bg-white border border-blue-100 rounded-3xl shadow-2xl p-8 flex flex-col relative z-30">
          <h3 className="text-3xl mb-1 text-[#0D3B5C] font-bold" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.5px' }}>Start Your Free Trial</h3>
          <p className="text-sm text-slate-500 mb-6">Fill in your details to book 3 free classes</p>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <input type="text" className="w-full bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-primary-dark placeholder-slate-400" placeholder="Your Full Name" />
            </div>
            <div className="mb-4">
              <input type="email" className="w-full bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-primary-dark placeholder-slate-400" placeholder="Email Address" />
            </div>
            <div className="mb-4">
              <input type="tel" className="w-full bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-primary-dark placeholder-slate-400" placeholder="WhatsApp Number" />
            </div>
            <div className="mb-6">
              <select className="w-full appearance-none bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm">
                <option value="">Select a Course</option>
                <option value="qaida">Noorani Qaida</option>
                <option value="quran">Quran Reading</option>
                <option value="hifz">Memorization (Hifz)</option>
              </select>
            </div>
            <button className="w-full bg-[#3b82f6] text-white rounded-full py-4 font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px]">Book My Free Class ➔</button>
          </form>
          
          <div className="text-center mt-5 text-sm text-[#1668A3] font-medium flex items-center justify-center gap-1.5 bg-blue-50/50 py-3.5 px-4 rounded-xl">
            <span>✦</span> No credit card required • 3 classes free <span>✦</span>
          </div>
        </div>
        </div>

      </div>

      {/* Text Slider */}
      <div className="absolute bottom-0 left-0 w-full bg-[#1668A3] text-white py-3 z-30 overflow-hidden flex shadow-lg">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[
                "Expert Certified Teachers",
                "One-on-One Online Sessions",
                "Male & Female Tutors Available",
                "40+ Countries Served",
                "Flexible Scheduling",
                "3 Free Trial Classes",
                "Personalized Learning Plans",
                "Trusted Quran Academy"
              ].map((text, index) => (
                <span key={index} className="mx-8 text-sm md:text-base font-medium tracking-wide flex items-center">
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
