import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="inner">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-[1px] w-10 bg-[#7fb8e1]"></div>
          <span className="text-[#1668A3] font-bold text-[13px] tracking-[0.15em] uppercase">Choose a Plan</span>
          <div className="h-[1px] w-10 bg-[#7fb8e1]"></div>
        </div>
        
        <h2 className="font-serif text-3xl md:text-[38px] lg:text-[42px] text-[#102e52] font-bold leading-[1.2] max-w-[800px] mx-auto mb-6">
          Flexible & Affordable <span className="text-[#1668A3] italic" style={{ fontFamily: "'Playfair Display', serif" }}>Fee Plans</span>
        </h2>
        
        <p className="text-[#6a859c] max-w-2xl mx-auto mb-16 text-[16px] leading-[1.7]">
          Quality Quran education made accessible for every family. Family discounts available for multiple enrollments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-[1200px] mx-auto items-center mt-12">
          {/* Plan 1 */}
          <div className="bg-white p-8 rounded-[20px] border border-[#eaf4fa] flex flex-col h-full hover:bg-gradient-to-b hover:from-[#1668A3] hover:to-[#0D3B5C] hover:border-transparent hover:shadow-[0_20px_40px_rgba(13,59,92,0.25)] hover:-translate-y-2 transition-all duration-500 group">
            <h4 className="text-[11.5px] font-bold text-[#1668A3] group-hover:text-white uppercase tracking-wide mb-3 transition-colors duration-300">2 Classes / Week · 8 Month</h4>
            <div className="text-[46px] font-bold text-[#102e52] group-hover:text-white mb-6 font-serif leading-none transition-colors duration-300">$25<span className="text-[15px] text-[#6a859c] group-hover:text-white/70 font-sans font-normal ml-1 transition-colors duration-300">/mo</span></div>
            <ul className="flex flex-col gap-4 mb-8 flex-grow text-[14px] text-[#5d7e9c] group-hover:text-white/90 transition-colors duration-300">
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> One-on-One Online Session</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> 30 Minutes per Class</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> Monthly Progress Report</li>
            </ul>
            <Link to="/contact" className="w-full py-3.5 rounded-full border border-[#7fb8e1] text-[#1668A3] font-bold text-[14.5px] text-center group-hover:bg-white group-hover:text-[#0D3B5C] group-hover:border-white transition-all duration-300 inline-block">Enroll Now</Link>
          </div>
          
          {/* Plan 2 - Popular */}
          <div className="bg-gradient-to-b from-[#1668A3] to-[#0D3B5C] text-white p-8 rounded-[20px] shadow-[0_20px_40px_rgba(13,59,92,0.25)] lg:scale-105 z-10 flex flex-col h-[105%] hover:-translate-y-2 transition-all duration-500 relative border border-transparent">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#1668A3] text-[11px] font-bold px-6 py-1.5 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">Most Popular</div>
            <h4 className="text-[11.5px] font-bold text-white uppercase tracking-wide mb-3 mt-2">3 Classes / Week · 12 Month</h4>
            <div className="text-[46px] font-bold text-white mb-6 font-serif leading-none">$35<span className="text-[15px] text-white/70 font-sans font-normal ml-1">/mo</span></div>
            <ul className="flex flex-col gap-4 mb-8 flex-grow text-[14px] text-white/90">
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-white shrink-0 mt-0.5" /> One-on-One Online Session</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-white shrink-0 mt-0.5" /> 30 Minutes per Class</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-white shrink-0 mt-0.5" /> Monthly Progress Report</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-white shrink-0 mt-0.5" /> Feedback Session Included</li>
            </ul>
            <Link to="/contact" className="w-full py-3.5 rounded-full bg-white text-[#0D3B5C] font-bold text-[14.5px] text-center hover:bg-slate-100 transition-all duration-300 inline-block">Enroll Now</Link>
          </div>
          
          {/* Plan 3 */}
          <div className="bg-white p-8 rounded-[20px] border border-[#eaf4fa] flex flex-col h-full hover:bg-gradient-to-b hover:from-[#1668A3] hover:to-[#0D3B5C] hover:border-transparent hover:shadow-[0_20px_40px_rgba(13,59,92,0.25)] hover:-translate-y-2 transition-all duration-500 group">
            <h4 className="text-[11.5px] font-bold text-[#1668A3] group-hover:text-white uppercase tracking-wide mb-3 transition-colors duration-300">4 Classes / Week · 16 Month</h4>
            <div className="text-[46px] font-bold text-[#102e52] group-hover:text-white mb-6 font-serif leading-none transition-colors duration-300">$45<span className="text-[15px] text-[#6a859c] group-hover:text-white/70 font-sans font-normal ml-1 transition-colors duration-300">/mo</span></div>
            <ul className="flex flex-col gap-4 mb-8 flex-grow text-[14px] text-[#5d7e9c] group-hover:text-white/90 transition-colors duration-300">
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> One-on-One Online Session</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> 30 Minutes per Class</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> Dedicated Teacher Support</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> Bi-Monthly Progress Evaluation</li>
            </ul>
            <Link to="/contact" className="w-full py-3.5 rounded-full border border-[#7fb8e1] text-[#1668A3] font-bold text-[14.5px] text-center group-hover:bg-white group-hover:text-[#0D3B5C] group-hover:border-white transition-all duration-300 inline-block">Enroll Now</Link>
          </div>
          
          {/* Plan 4 */}
          <div className="bg-white p-8 rounded-[20px] border border-[#eaf4fa] flex flex-col h-full hover:bg-gradient-to-b hover:from-[#1668A3] hover:to-[#0D3B5C] hover:border-transparent hover:shadow-[0_20px_40px_rgba(13,59,92,0.25)] hover:-translate-y-2 transition-all duration-500 group">
            <h4 className="text-[11.5px] font-bold text-[#1668A3] group-hover:text-white uppercase tracking-wide mb-3 transition-colors duration-300">5 Classes / Week · 24 Month</h4>
            <div className="text-[46px] font-bold text-[#102e52] group-hover:text-white mb-6 font-serif leading-none transition-colors duration-300">$60<span className="text-[15px] text-[#6a859c] group-hover:text-white/70 font-sans font-normal ml-1 transition-colors duration-300">/mo</span></div>
            <ul className="flex flex-col gap-4 mb-8 flex-grow text-[14px] text-[#5d7e9c] group-hover:text-white/90 transition-colors duration-300">
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> Multiple Family Members</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> 30 Minutes per Class</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> Dedicated Teacher + Flexible Timing</li>
              <li className="flex items-start gap-3 leading-snug"><Check size={16} className="text-[#1668A3] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" /> Monthly Parent Review Session</li>
            </ul>
            <Link to="/contact" className="w-full py-3.5 rounded-full border border-[#7fb8e1] text-[#1668A3] font-bold text-[14.5px] text-center group-hover:bg-white group-hover:text-[#0D3B5C] group-hover:border-white transition-all duration-300 inline-block">Enroll Now</Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
