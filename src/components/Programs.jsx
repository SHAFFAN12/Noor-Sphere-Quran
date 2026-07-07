import React from 'react';
import { Users, Clock, ChevronRight } from 'lucide-react';

import nooraniQaidaIcon from '../assets/Noorani Qaida.png';
import quranReadingIcon from '../assets/Quran Reading with Tajweed.png';
import memorizationIcon from '../assets/Memorizing the Quran (Hifz).png';
import basicIslamicIcon from '../assets/Basic Islamic Education.png';
import completeNamazIcon from '../assets/Complete Namaz (Salah).png';
import translationIcon from '../assets/Translation & Tafseer.png';

const programs = [
  {
    id: 1,
    title: "Noorani Qaida",
    level: "Beginner",
    icon: nooraniQaidaIcon,
    desc: "Start from the basics with proper Arabic letter recognition and foundational reading skills before advancing to full Quran recitation.",
    audience: "All Ages",
    duration: "30 minutes"
  },
  {
    id: 2,
    title: "Quran Reading with Tajweed",
    level: "All Levels",
    icon: quranReadingIcon,
    desc: "Master the rules of proper Quranic recitation with certified Qaris. Learn pronunciation, rhythm, and the beauty of reciting as it was revealed.",
    audience: "All Levels",
    duration: "30 minutes"
  },
  {
    id: 3,
    title: "Memorizing the Quran (Hifz)",
    level: "All Levels",
    icon: memorizationIcon,
    desc: "Become a Hafiz with dedicated teachers who provide proven revision strategies and fully personalized memorization plans.",
    audience: "All Levels",
    duration: "30 minutes"
  },
  {
    id: 4,
    title: "Basic Islamic Education",
    level: "All Levels",
    icon: basicIslamicIcon,
    desc: "Fiqh, Aqeedah, Seerah, Islamic history, Duas, Kalmas, and Namaz — comprehensive Islamic education for children and adults.",
    audience: "All Ages",
    duration: "30 minutes"
  },
  {
    id: 5,
    title: "Complete Namaz (Salah)",
    level: "All Levels",
    icon: completeNamazIcon,
    desc: "Transform your Namaz from a daily routine into a deeply moving, live conversation with Allah by internalizing the verses you recite.",
    audience: "All Levels",
    duration: "30 minutes"
  },
  {
    id: 6,
    title: "Translation & Tafseer",
    level: "Advanced",
    icon: translationIcon,
    desc: "Deep dive into the meanings, context, and interpretation of Quranic verses — connect with the Book of Allah on a profound spiritual level.",
    audience: "Advanced",
    duration: "60 minutes"
  }
];

const Programs = () => {
  return (
    <section className="py-24 bg-[#F4FAFF] text-center">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="inner">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-[1px] w-10 bg-[#7fb8e1]"></div>
          <span className="text-[#1668A3] font-bold text-[13px] tracking-[0.15em] uppercase">Our Programs</span>
          <div className="h-[1px] w-10 bg-[#7fb8e1]"></div>
        </div>
        
        <h2 className="font-serif text-3xl md:text-[38px] lg:text-[42px] text-[#102e52] font-bold leading-[1.2] max-w-[800px] mx-auto mb-6">
          Online Quran Courses Designed for<br />
          <span className="text-[#1668A3] italic" style={{ fontFamily: "'Playfair Display', serif" }}>Every Level</span>
        </h2>
        
        <p className="text-[#6a859c] max-w-2xl mx-auto mb-16 text-[16px] leading-[1.7]">
          Choose from our range of expertly designed courses, each tailored to help you grow in your Quranic journey at your own pace.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {programs.map(program => (
            <div className="bg-white p-8 rounded-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-[#eaf4fa] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group" key={program.id}>
              
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-[#eaf4fa] text-[#1668A3] text-[11px] font-bold rounded-full uppercase tracking-wider">{program.level}</span>
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  <img src={program.icon} alt={program.title} className="w-full h-full object-contain" />
                </div>
              </div>
              
              <h4 className="font-serif text-[22px] font-bold text-[#102e52] mb-3">{program.title}</h4>
              <p className="text-[14.5px] text-[#6a859c] leading-[1.7] mb-8 min-h-[70px]">{program.desc}</p>
              
              <div className="flex gap-4 pt-5 border-t border-slate-100 mb-6 text-[13px] font-bold text-[#1668A3]">
                <span className="flex items-center gap-1.5"><Users size={16} className="text-[#7fb8e1]" /> {program.audience}</span>
                <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#7fb8e1]" /> {program.duration}</span>
              </div>
              
              <a href="#" className="flex items-center gap-1.5 text-[#1668A3] font-bold text-[14.5px] hover:text-[#0b5894] transition-colors">Enroll Now <ChevronRight size={16} /></a>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
