import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Plus, Minus } from 'lucide-react';

// Import local assets for courses
import nooraniQaidaIcon from '../assets/Noorani Qaida-1.png';
import quranReadingIcon from '../assets/Noorani Qaida.png';
import memorizationIcon from '../assets/Hifz (Quran Memorization).png';
import basicIslamicIcon from '../assets/Basic Islamic Education-2.png';
import translationIcon from '../assets/Quranic Arabic Language.png';
import GraduationCap from "../assets/Ijazah Certification.png";

const courses = [
  {
    id: 1,
    title: 'Noorani Qaida',
    tag: 'BEGINNER',
    tagBg: 'bg-[#FEF3C7] text-[#D97706]', // amber/yellow badge
    icon: nooraniQaidaIcon,
    desc: 'The foundation course for new readers. Students learn Arabic letters, correct pronunciation, and basic Tajweed rules before moving into Quran reading.',
    age: '4+',
    duration: '3 to 6 months',
  },
  {
    id: 2,
    title: 'Quran Reading with Tajweed',
    tag: 'BEGINNER TO INTERMEDIATE',
    tagBg: 'bg-[#FEF3C7] text-[#D97706]',
    icon: quranReadingIcon,
    desc: 'Students learn to read the Quran fluently while applying proper Tajweed rules, with correction given in real time during every class.',
    age: '7+',
    duration: 'Ongoing',
  },
  {
    id: 3,
    title: 'Hifz (Quran Memorization)',
    tag: 'INTERMEDIATE TO ADVANCED',
    tagBg: 'bg-[#FEF3C7] text-[#D97706]',
    icon: memorizationIcon,
    desc: 'A structured memorization plan built on daily new lessons, recent revision, and long term revision, so every Surah stays retained.',
    age: '7+',
    duration: '2 to 5 years',
  },
  {
    id: 4,
    title: 'Basic Islamic Education',
    tag: 'ALL LEVELS',
    tagBg: 'bg-[#FEF3C7] text-[#D97706]',
    icon: basicIslamicIcon,
    desc: 'Covers core beliefs, daily Duas, Salah, Islamic manners, and Seerah, taught in an age appropriate way for kids and adults alike.',
    age: 'All ages',
    duration: 'Self paced',
  },
  {
    id: 5,
    title: 'Quranic Arabic Language',
    tag: 'INTERMEDIATE',
    tagBg: 'bg-[#FEF3C7] text-[#D97706]',
    icon: translationIcon,
    desc: "Grammar focused course covering Nahw and Sarf, built to help students understand the Quran's meaning directly from the Arabic text.",
    age: '12+',
    duration: '6 to 12 months',
  },
  {
    id: 6,
    title: 'Ijazah Certification',
    tag: 'ADVANCED',
    tagBg: 'bg-[#FEF3C7] text-[#D97706]',
    icon: GraduationCap,
    desc: 'For advanced students seeking a formal Sanad in Quran recitation, connecting their learning chain back to certified scholars.',
    age: '16+',
    duration: 'Varies by Qari',
  },
];

const steps = [
  {
    num: '1',
    title: 'Book a Free Trial',
    desc: 'Pick a time that works for your family and meet a certified teacher, no cost, no commitment.',
  },
  {
    num: '2',
    title: 'Get Assessed & Matched',
    desc: "Your teacher evaluates the student's current level and recommends the right starting course.",
  },
  {
    num: '3',
    title: 'Follow a Personal Plan',
    desc: 'Classes are scheduled weekly at a pace built around the student, not a fixed group timeline.',
  },
  {
    num: '4',
    title: 'Track Real Progress',
    desc: 'Parents receive regular progress updates so you always know exactly where your child stands.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$59',
    details: '2 classes per week, 30 minutes each',
    features: [
      'One on one live classes',
      'Certified teacher',
      'Monthly progress report',
      'Free trial class included',
    ],
    buttonText: 'Choose Starter',
    isPopular: false,
  },
  {
    name: 'Standard',
    price: '$89',
    details: '3 classes per week, 40 minutes each',
    features: [
      'One on one live classes',
      'Certified teacher',
      'Weekly progress report',
      'Free rebooking anytime',
      'Free trial class included',
    ],
    buttonText: 'Choose Standard',
    isPopular: true,
  },
  {
    name: 'Intensive',
    price: '$139',
    details: '5 classes per week, 40 minutes each',
    features: [
      'One on one live classes',
      'Certified teacher',
      'Weekly progress report',
      'Priority scheduling',
      'Free trial class included',
    ],
    buttonText: 'Choose Intensive',
    isPopular: false,
  },
];

const faqData = [
  {
    question: 'Which course should my child start with?',
    answer: 'Most children with no prior reading experience start with Noorani Qaida. During the free trial, the teacher assesses your child and recommends the right starting point.',
  },
  {
    question: 'How are classes scheduled?',
    answer: 'Classes are highly flexible and scheduled around your availability. You can choose class timings that fit your timezone, and rebook or reschedule if your plans change.',
  },
  {
    question: 'Can adults join these courses too?',
    answer: 'Yes, absolutely! We have dedicated courses and structured plans tailored for adults, whether you are starting from Noorani Qaida or working on advanced Tajweed and Hifz.',
  },
  {
    question: 'What happens during the free trial class?',
    answer: 'During the trial class, you will meet your teacher, experience our 1-on-1 virtual learning platform, and get an assessment of the student’s current Quran reading level.',
  },
  {
    question: 'Is there a minimum commitment?',
    answer: 'No, there is no long-term commitment. All our fee plans are billed on a monthly basis, and you can pause, upgrade, or cancel your subscription at any time.',
  },
];

const CoursesPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#pricing') {
      const el = document.getElementById('pricing');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="app">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#F4F9FD] to-[#FFFFFF] py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner text-center max-w-[850px] mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-[14px] mb-8">
              <Link to="/" className="text-[#6A859C] hover:text-[#1668A3] transition-colors font-medium">Home</Link>
              <span className="text-[#2F80ED] font-semibold">/</span>
              <span className="text-[#0D3B5C] font-bold">Our Courses</span>
            </div>

            <h1
              className="text-[#0B2545] font-extrabold leading-[1.2] mb-6 text-4xl md:text-5xl lg:text-[50px] tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Structured Quran Courses{' '}
              <span className="italic text-[#C9A227] font-serif font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                for<br />Every Age and Level.
              </span>
            </h1>

            <p className="text-[#6a859c] text-[16px] md:text-[17px] leading-[1.75] mb-10 max-w-[680px] mx-auto">
              From a child's first Arabic letters to complete Hifz, every course follows a clear curriculum,
              taught one on one by a certified teacher matched to your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-black text-[14px] font-semibold">
              {['Ages 4 to Adult', 'One on One Classes', 'Flexible Scheduling', 'Certified Teachers'].map((tag) => (
                <span key={tag} className="bg-white border border-[#E6EDf5] px-6 py-2.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="text-center mb-16">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Our Programs</span>
              <h2
                className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2] mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Choose the Course That{' '}
                <span className="text-[#C9A227] font-semibold italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Fits Your<br />Journey
                </span>
              </h2>
              <p className="text-[#6a859c] max-w-2xl mx-auto text-[15.5px] leading-[1.75]">
                Every course below is taught live, one teacher to one student, with a personalized pace and a clear progress plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => {
                const IconComponent = course.icon;
                return (
                  <div
                    key={course.id}
                    className="bg-white p-8 rounded-[24px] shadow-[0_6px_25px_rgba(0,0,0,0.03)] border border-[#eaf4fa] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(11,37,69,0.07)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Header Row */}
                      <div className="flex justify-between items-center mb-6">
                        {/* Icon on the Left */}
                        <div className="w-[60px] h-[60px] bg-[#EAF5FC] rounded-2xl flex items-center justify-center text-[#1668A3] shadow-sm">
                          {course.isLucideIcon ? (
                            <IconComponent size={28} className="stroke-[1.8]" />
                          ) : (
                            <img src={course.icon} alt={course.title} className="w-[42px] h-[42px] object-contain" />
                          )}
                        </div>

                        {/* Tag on the Right */}
                        <span className={`px-3 py-1.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider ${course.tagBg}`}>
                          {course.tag}
                        </span>
                      </div>

                      <h4
                        className="font-bold text-[#0D3B5C] text-[20px] mb-3 text-center md:text-left"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {course.title}
                      </h4>
                      <p className="text-[14.5px] text-[#6a859c] leading-[1.7] mb-8 min-h-[90px] text-center md:text-left">
                        {course.desc}
                      </p>
                    </div>

                    <div>
                      {/* Meta Section */}
                      <div className="flex items-center gap-4 pt-5 border-t border-slate-100 mb-6 text-[13px] text-[#6a859c] font-medium">
                        <span>
                          <strong className="text-[#0D3B5C]">Ages:</strong> {course.age}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>
                          <strong className="text-[#0D3B5C]">Duration:</strong> {course.duration}
                        </span>
                      </div>

                      {/* Button */}
                      <Link to="/contact" className="w-full py-3 rounded-full font-bold text-[#1668A3] border border-[#1668A3] hover:bg-[#1668A3] hover:text-white transition-all duration-300 text-[14px] text-center block">
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How it Begins */}
      <section className="bg-[#F4F9FD] py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="text-center mb-16">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Getting Started</span>
              <h2
                className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                How Your{' '}
                <span className="text-[#C9A227] italic font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Course Journey
                </span>{' '}
                Begins
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
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

      {/* Pricing Plans */}
      <section id="pricing" className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="text-center mb-16">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Simple Pricing</span>
              <h2
                className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2] mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Plans Built Around{' '}
                <span className="text-[#C9A227] italic font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Your Schedule
                </span>
              </h2>
              <p className="text-[#6a859c] max-w-2xl mx-auto text-[15.5px] leading-[1.7]">
                Every plan includes one on one classes with a certified teacher and free rebooking when plans change.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-[1100px] mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-[24px] p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    plan.isPopular
                      ? 'border-[3px] border-[#2F80ED] shadow-[0_15px_35px_rgba(47,128,237,0.12)] -translate-y-2'
                      : 'group border-[3px] border-[#dceef7] hover:border-[#2F80ED] shadow-sm hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(47,128,237,0.12)]'
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2F80ED] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h4
                      className="font-bold text-[#0D3B5C] text-[20px] mb-4"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {plan.name}
                    </h4>

                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-4xl md:text-[42px] font-black text-[#0D3B5C]">{plan.price}</span>
                      <span className="text-[#6a859c] text-sm">/month</span>
                    </div>

                    <p className="text-[13.5px] text-[#6a859c] font-medium mb-8 border-b border-slate-100 pb-5">
                      {plan.details}
                    </p>

                    <ul className="flex flex-col gap-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check size={16} className="text-[#2F80ED] stroke-[2.5]" />
                          <span className="text-[14px] text-[#102e52] font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-3.5 rounded-full font-bold text-[14.5px] transition-all duration-300 text-center block ${
                      plan.isPopular
                        ? 'bg-[#2F80ED] text-white shadow-[0_6px_16px_rgba(47,128,237,0.35)] hover:bg-blue-600'
                        : 'border border-[#1668A3] text-[#1668A3] bg-white group-hover:bg-[#2F80ED] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_6px_16px_rgba(47,128,237,0.35)] hover:bg-blue-600'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[#F4F8FB] py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="text-center mb-16">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Common Questions</span>
              <h2
                className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Frequently Asked{' '}
                <span className="text-[#C9A227] italic font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Questions
                </span>
              </h2>
            </div>

            <div className="max-w-[800px] mx-auto flex flex-col gap-4">
              {faqData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-[16px] border border-[#e2edf5] overflow-hidden transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-bold text-[#0D3B5C] text-[16px] md:text-[17px] pr-4">
                        {faq.question}
                      </span>
                      <span className="text-[#2F80ED] shrink-0">
                        {isOpen ? <Minus size={20} className="stroke-[2.5]" /> : <Plus size={20} className="stroke-[2.5]" />}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[200px] border-t border-slate-50' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-5 text-[14.5px] text-[#6a859c] leading-[1.7] bg-[#FAFCFE]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="bg-[#0D3B5C] rounded-[20px] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1200px] mx-auto shadow-xl text-center md:text-left">
              <div>
                <h2
                  className="font-bold text-[22px] md:text-[26px] text-white leading-[1.35] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Not sure which course is right for<br />you?
                </h2>
                <p className="text-blue-200 text-[13.5px] leading-relaxed">
                  Book a free trial class and let a certified teacher help you choose.
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

export default CoursesPage;
