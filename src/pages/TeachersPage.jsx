import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import local assets for teacher photos
import hafizRashidImg from '../assets/Hafiz Rashid Ahmed.png';
import ustadhaSaraImg from '../assets/Ustadha Sara Fatima.png';
import qariImranImg from '../assets/Qari Mohammad Imran.png';

const teachers = [
  {
    id: 1,
    name: 'Qari Abdullah Rahman',
    role: 'Hifz & Tajweed Specialist',
    image: hafizRashidImg,
    specialties: ['Hifz', 'Tajweed', 'Adults'],
    bio: 'Fifteen years teaching memorization with a structured revision system that keeps every Surah retained long term.',
    experience: '15 yrs',
    languages: 'Arabic, English',
    categories: ['hifz', 'tajweed'],
  },
  {
    id: 2,
    name: 'Ustadha Maryam Siddiqui',
    role: 'Noorani Qaida & Kids Specialist',
    image: ustadhaSaraImg,
    specialties: ['Noorani Qaida', 'Kids 4+'],
    bio: 'Specializes in first time young readers, using patient, interactive methods to build confident foundational skills.',
    experience: '9 yrs',
    languages: 'English, Urdu',
    categories: ['qaida'],
  },
  {
    id: 3,
    name: 'Qari Yusuf Hamid',
    role: 'Tajweed & Quran Reading',
    image: qariImranImg,
    specialties: ['Tajweed', 'Reading', 'Teens'],
    bio: 'Focuses on real time pronunciation correction, helping students move from basic reading to fluent recitation.',
    experience: '11 yrs',
    languages: 'Arabic, English',
    categories: ['tajweed'],
  },
  {
    id: 4,
    name: 'Ustadha Aisha Noor',
    role: 'Islamic Studies & Arabic',
    image: hafizRashidImg,
    specialties: ['Islamic Studies', 'All Ages'],
    bio: 'Teaches Duas, Salah, and Seerah in an age appropriate way, making core beliefs practical and easy to remember.',
    experience: '8 yrs',
    languages: 'English, Urdu',
    categories: ['islamic', 'arabic'],
  },
  {
    id: 5,
    name: 'Sheikh Omar Farouk',
    role: 'Quranic Arabic Language',
    image: qariImranImg,
    specialties: ['Nahw & Sarf', 'Teens & Adults'],
    bio: "Grammar focused teaching that helps students understand the Quran's meaning directly from the Arabic text.",
    experience: '13 yrs',
    languages: 'Arabic, English',
    categories: ['arabic'],
  },
  {
    id: 6,
    name: 'Ustadha Khadija Malik',
    role: 'Hifz Specialist, Female Students',
    image: ustadhaSaraImg,
    specialties: ['Hifz', 'Kids & Teens'],
    bio: 'Builds a personal memorization plan for each student with daily lessons and long term revision built in.',
    experience: '10 yrs',
    languages: 'Arabic, Urdu, English',
    categories: ['hifz'],
  },
];

const joinSteps = [
  {
    num: '1',
    title: 'Ijazah Verification',
    desc: "Every applicant's Sanad and certification chain is verified back to certified scholars.",
  },
  {
    num: '2',
    title: 'Background Check',
    desc: 'Full background screening is completed before any teacher is approved to join.',
  },
  {
    num: '3',
    title: 'Teaching Assessment',
    desc: 'Teachers demonstrate their method on a mock class, reviewed for clarity and patience.',
  },
  {
    num: '4',
    title: 'Ongoing Review',
    desc: 'Parent feedback and progress outcomes are reviewed regularly to maintain teaching quality.',
  },
];

const filterCategories = [
  { id: 'all', label: 'All Teachers' },
  { id: 'qaida', label: 'Noorani Qaida' },
  { id: 'tajweed', label: 'Tajweed' },
  { id: 'hifz', label: 'Hifz' },
  { id: 'arabic', label: 'Arabic Language' },
  { id: 'islamic', label: 'Islamic Studies' },
];

const TeachersPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTeachers = activeFilter === 'all'
    ? teachers
    : teachers.filter(t => t.categories.includes(activeFilter));

  return (
    <div className="app">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#F4F9FD] to-[#FFFFFF] py-16 lg:py-20 text-center">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner max-w-[850px] mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-[14px] mb-8">
              <Link to="/" className="text-[#6A859C] hover:text-[#1668A3] transition-colors font-medium">Home</Link>
              <span className="text-[#2F80ED] font-semibold">/</span>
              <span className="text-[#0D3B5C] font-bold">Our Teachers</span>
            </div>

            <h1
              className="text-[#0B2545] font-extrabold leading-[1.2] mb-6 text-4xl md:text-5xl lg:text-[50px] tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Meet the Teachers Guiding{' '}
              <span className="italic text-[#C9A227] font-serif font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                Every<br />Student's Journey.
              </span>
            </h1>

            <p className="text-[#6a859c] text-[16px] md:text-[17px] leading-[1.75] mb-10 max-w-[685px] mx-auto">
              Every teacher is Ijazah certified, background checked, and trained to teach children and adults one on one, online.
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-4 text-black text-[14px] font-semibold">
                {['Ijazah Certified', 'Background Checked', 'Male & Female Teachers'].map((tag) => (
                  <span key={tag} className="bg-white border border-[#E6EDf5] px-6 py-2.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="bg-white border border-[#E6EDf5] px-6 py-2.5 rounded-full text-black text-[14px] font-semibold">
                Multiple Languages
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="bg-[#0B2545] rounded-[24px] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-white/20 w-full max-w-[1200px] mx-auto shadow-lg">
              {[
                { value: '25+', label: 'Certified Teachers' },
                { value: '12+', label: 'Years Average Experience' },
                { value: '6', label: 'Languages Spoken' },
                { value: '4.9/5', label: 'Average Teacher Rating' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center py-6 md:py-2 flex-1 w-full text-center">
                  <p
                    className="text-[#C9A227] font-bold leading-none mb-3 text-[36px] md:text-[44px]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-blue-100 text-[14px] md:text-[15px] font-medium tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="text-center mb-16">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Our Faculty</span>
              <h2
                className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2] mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Teachers Matched to{' '}
                <span className="text-[#C9A227] font-semibold italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Your Child's Level
                </span>
              </h2>
              <p className="text-[#6a859c] max-w-2xl mx-auto text-[15.5px] leading-[1.75]">
                Filter by specialty to find the right teacher, or let us match one for you during your free trial class.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-6 py-2.5 rounded-full font-bold text-[14px] transition-all duration-300 border ${
                    activeFilter === cat.id
                      ? 'bg-[#0B2545] text-white border-[#0D2C52] shadow-md'
                      : 'bg-white text-[#5d7e9c] border-[#E6EDF5] hover:border-[#0B2545] hover:text-[#1668A3]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="bg-white rounded-[24px] overflow-hidden shadow-[0_6px_25px_rgba(0,0,0,0.03)] border border-[#eaf4fa] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(11,37,69,0.07)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Photo with Overlay Tag */}
                    <div className="h-[260px] overflow-hidden relative">
                      <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-[#C9A227] text-[#0D3B5C] font-bold text-[11px] px-3.5 py-1.5 rounded-full shadow-sm">
                        ★ Ijazah Certified
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 pb-4 text-center md:text-left">
                      <h4
                        className="font-bold text-[#0D3B5C] text-[21px] mb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {teacher.name}
                      </h4>
                      <p className="text-[#2F80ED] text-[13.5px] font-semibold uppercase tracking-wider mb-4">
                        {teacher.role}
                      </p>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                        {teacher.specialties.map((spec) => (
                          <span key={spec} className="px-3 py-1 bg-[#EAF5FC] text-[#1668A3] text-[12px] font-bold rounded-md">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <p className="text-[14.5px] text-[#6a859c] leading-[1.7] mb-6">
                        {teacher.bio}
                      </p>
                    </div>
                  </div>

                  {/* Footer Meta & Button */}
                  <div className="px-8 pb-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-5 border-t border-slate-100 mb-6 text-[13.5px] text-[#6a859c] font-medium">
                      <span>
                        <strong className="text-[#0D3B5C]">Experience:</strong> {teacher.experience}
                      </span>
                      <span>
                        <strong className="text-[#0D3B5C]">Language:</strong> {teacher.languages}
                      </span>
                    </div>

                    <Link to="/contact" className="w-full py-3.5 rounded-full font-bold text-[#1668A3] border border-[#1668A3] hover:bg-[#3a82f6] hover:text-white transition-all duration-300 text-[14px] text-center block">
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Process */}
      <section className="bg-[#F4F8FB] py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="text-center mb-16">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Our Standard</span>
              <h2
                className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                How a Teacher{' '}
                <span className="text-[#C9A227] italic font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Joins Our Academy
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {joinSteps.map((step) => (
                <div key={step.num} className="p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0D3B5C] text-white flex items-center justify-center font-bold text-[18px] mb-6">
                    {step.num}
                  </div>
                  <h4
                    className="font-bold text-[#0D3B5C] text-[17px] mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-[14px] text-[#6a859c] leading-[1.6]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Match Banner */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="bg-[#0D3B5C] rounded-[20px] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1200px] mx-auto shadow-xl text-center md:text-left">
              <div>
                <h2
                  className="font-bold text-[22px] md:text-[26px] text-white leading-[1.35] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Let us match you with the right<br />teacher.
                </h2>
                <p className="text-blue-200 text-[13.5px] leading-relaxed">
                  Book a free trial class and meet a certified teacher suited to your goals.
                </p>
              </div>
              <Link to="/contact" className="bg-[#2F80ED] text-white px-8 py-3.5 rounded-full font-bold shadow-[0_8px_20px_rgba(47,128,237,0.3)] hover:shadow-[0_12.29px_24.58px_-8.19px_rgba(47,128,237,0.5)] hover:bg-blue-600 transition-all duration-300 text-[15px] whitespace-nowrap inline-block">
                Book Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeachersPage;
