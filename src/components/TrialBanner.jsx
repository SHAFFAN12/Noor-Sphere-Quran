import React from 'react';
import { Check } from 'lucide-react';

const TrialBanner = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-10">
      <div className="inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#7fb8e1]"></div>
              <span className="text-[#1668A3] font-bold text-[12.5px] tracking-[0.15em] uppercase">Free Trial</span>
              <div className="h-[1px] w-8 bg-[#7fb8e1]"></div>
            </div>
            
            <h2 className="font-serif text-[32px] md:text-[38px] lg:text-[42px] text-[#102e52] font-bold leading-[1.2] mb-6">
              Start Your Quran Journey with a <span className="text-[#1668A3] italic" style={{ fontFamily: "'Playfair Display', serif" }}>Free<br/>Trial Class</span>
            </h2>
            
            <p className="text-[#6a859c] mb-10 text-[15px] leading-relaxed max-w-[480px]">
              Book your 3 free trial classes today — no card required. Experience the quality of our teaching first-hand before committing.
            </p>
            
            <ul className="flex flex-col gap-4.5 mb-10 text-[#0D3B5C] font-medium">
              <li className="flex items-center gap-3.5">
                <div className="bg-[#eaf4fa] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[#1668A3] stroke-[3]" />
                </div>
                <span className="text-[#102e52] text-[13.5px]">3 completely free classes with no obligation</span>
              </li>
              <li className="flex items-center gap-3.5 mt-4">
                <div className="bg-[#eaf4fa] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[#1668A3] stroke-[3]" />
                </div>
                <span className="text-[#102e52] text-[13.5px]">Choose your preferred male or female teacher</span>
              </li>
              <li className="flex items-center gap-3.5 mt-4">
                <div className="bg-[#eaf4fa] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[#1668A3] stroke-[3]" />
                </div>
                <span className="text-[#102e52] text-[13.5px]">Flexible timing across all time zones</span>
              </li>
              <li className="flex items-center gap-3.5 mt-4">
                <div className="bg-[#eaf4fa] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[#1668A3] stroke-[3]" />
                </div>
                <span className="text-[#102e52] text-[13.5px]">Personalized learning plan created for you</span>
              </li>
              <li className="flex items-center gap-3.5 mt-4">
                <div className="bg-[#eaf4fa] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[#1668A3] stroke-[3]" />
                </div>
                <span className="text-[#102e52] text-[13.5px]">Available for students of all ages & levels</span>
              </li>
            </ul>
            
            <button className="inline-block mt-2 px-9 py-4 rounded-full font-bold bg-[#3b82f6] text-white shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px]">Book Your Free Trial Now ➔</button>
          </div>
          
          <div className="bg-[#0f2e4c] p-8 md:p-10 rounded-[24px] shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8 font-serif flex items-center gap-2.5">
              <span role="img" aria-label="clipboard">📋</span> Register for Free Trial
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div>
                <input type="text" className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60" placeholder="First Name" />
              </div>
              <div>
                <input type="text" className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60" placeholder="Email Address" />
              </div>
              <div>
                <input type="tel" className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60" placeholder="WhatsApp / Contact Number" />
              </div>
              <div className="relative">
                <select className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] appearance-none">
                  <option value="" className="text-white/60">Select a Course</option>
                  <option value="qaida" className="text-slate-800">Noorani Qaida</option>
                  <option value="quran" className="text-slate-800">Quran Reading</option>
                  <option value="hifz" className="text-slate-800">Memorization (Hifz)</option>
                </select>
              </div>
              <div>
                <input type="text" className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60" placeholder="Preferred Time / Timezone" />
              </div>
              
              <button className="w-full py-4 mt-3 rounded-full font-bold bg-[#3b82f6] text-white shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px]">Send My Application ➔</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TrialBanner;
