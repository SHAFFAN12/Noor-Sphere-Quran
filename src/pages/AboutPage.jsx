import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImage from '../assets/hero-about.png';
import aboutImage from '../assets/male-and-female-about.png';
import largeImage from '../assets/about-section-2.png';
import iconCertified from '../assets/Certified Teachers.png';
import iconScheduling from '../assets/Flexible Scheduling.png';
import iconOneOnOne from '../assets/One on One Learning.png';
import iconSafe from '../assets/Safe Learning Space.png';
import teamHafiz from '../assets/Hafiz Rashid Ahmed.png';
import teamSara from '../assets/Ustadha Sara Fatima.png';
import teamQari from '../assets/Qari Mohammad Imran.png';

const whyChooseUs = [
  {
    icon: iconCertified,
    title: 'Certified Teachers',
    desc: 'Every teacher holds a verified Ijazah and formal Tajweed training before ever teaching a class.',
  },
  {
    icon: iconScheduling,
    title: 'Flexible Scheduling',
    desc: 'Classes are scheduled around your time zone and routine, with easy rebooking when plans change.',
  },
  {
    icon: iconOneOnOne,
    title: 'One on One Learning',
    desc: 'Every class is one teacher to one student, so pace and attention stay fully personal.',
  },
  {
    icon: iconSafe,
    title: 'Safe Learning Space',
    desc: 'Teachers are background checked and classes are structured to keep children safe and supported.',
  },
];

const team = [
  {
    name: 'Hafiz Rashid Ahmed',
    role: 'Founder & Head Instructor',
    desc: 'Spent over 15 years of Tajweed and Hifz teaching experience across three continents.',
    img: teamHafiz,
    bg: 'from-[#0D3B5C] to-[#1668A3]',
  },
  {
    name: 'Ustadha Sara Fatima',
    role: 'Head of Kids Program',
    desc: 'Specializes in Noorani Qaida and beginner Quran reading for children ages 4 to 12.',
    img: teamSara,
    bg: 'from-[#1668A3] to-[#3b82f6]',
  },
  {
    name: 'Qari Mohammad Imran',
    role: 'Tajweed Specialist',
    desc: 'Teaches advanced Tajweed rules and Quran recitation styles, teaching adults and advanced students.',
    img: teamQari,
    bg: 'from-[#0b5894] to-[#0D3B5C]',
  },
];

const AboutPage = () => {
  return (
    <div className="app">
      <Header />

      {/* Hero */}
      <section className="bg-[#edf2f7] pt-8 pb-12">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[12.5px] text-[#6a859c] mb-6">
            <a href="/" className="hover:text-[#1668A3] transition-colors">Home</a>
            <span className="text-[#b0c4d4]">/</span>
            <span className="text-[#0D3B5C] font-medium">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: Text */}
            <div>
              <h1
                className="font-bold text-[#0D3B5C] leading-[1.25] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px' }}
              >
                Rooted in the Quran.{' '}
                <span className="italic" style={{ color: '#c9a227' }}>Built</span>
                <br />
                <span className="italic" style={{ color: '#c9a227' }}>for Every Home.</span>
              </h1>

              <p className="text-[#6a859c] text-[14px] leading-[1.75] mb-6 max-w-[420px]">
                We are a team of certified Quran teachers and Islamic educators helping
                students of every age learn Quran recitation, Tajweed, and memorization
                online, from wherever they call home.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <button className="bg-[#3b82f6] text-white px-5 py-2.5 rounded-full font-semibold shadow-[0_6px_16px_rgba(59,130,246,0.35)] hover:bg-blue-600 transition-all duration-300 text-[13px]">
                  Book Free Trial
                </button>
                <button className="bg-white text-[#0D3B5C] px-5 py-2.5 rounded-full border border-[#d1dfe9] font-semibold text-[13px] hover:bg-[#f4f8fb] transition-all duration-300">
                  Meet Our Teachers
                </button>
              </div>

              <div className="flex gap-8">
                {[
                  { value: '9+', label: 'Years of Teaching' },
                  { value: '50+', label: 'Certified Teachers' },
                  { value: '1500+', label: 'Students Worldwide' },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="font-bold text-[#0D3B5C] leading-none mb-1"
                      style={{ fontFamily: "'Poppins', sans-serif", fontSize: '25px' }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[#6a859c] text-[11px]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image with overlay card */}
            <div className="relative rounded-[16px] overflow-hidden bg-[#edf2f7]" style={{ height: '360px' }}>
              <img
                src={heroImage}
                alt="Student learning Quran online"
                className="w-full h-full object-contain object-center"
              />
            </div>

          </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#f4f8fb] py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <img
                src={largeImage}
                alt="Online Quran learning"
                className="rounded-[20px] w-full shadow-2xl max-h-[520px] object-cover"
              />
              <div className="absolute -bottom-0 -left-18 bg-white rounded-[14px] px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-4">
                <p
                  className="text-[#2F80ED] font-bold leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '28px' }}
                >
                  10+
                </p>
                <p className="text-[#6a859c] text-[12px] leading-[1.4] max-w-[100px]">
                  Countries reached through online classes
                </p>


              </div>
            </div>

            <div className="lg:pl-6">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Our Story</span>
              <h2
                className="font-bold text-[30px] md:text-[36px] text-[#0D3B5C] leading-[1.2] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A simple idea.{' '}
                <span className="text-[#C9A227] font-semibold italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Quran learning without borders.
                </span>
              </h2>
              <p className="text-[#6a859c] text-[15px] leading-[1.8] mb-5">
                International Quran Academy started with one goal: make authentic, high quality Quran
                education accessible to Muslim families no matter where they live. What began as a handful
                of online classes has grown into a full academy of certified teachers, structured courses,
                and students spread across the globe.
              </p>
              <p className="text-[#6a859c] text-[15px] leading-[1.8] mb-5">
                We built our academy around three things families told us they wanted most: qualified
                teachers, flexible scheduling, and a safe, respectful learning environment for their
                children. Every course, every teacher, and every class we run today is still measured
                against those three standards.
              </p>
              <p className="text-[#6a859c] text-[15px] leading-[1.8]">
                Today we serve students of all ages, from young children taking their first steps in
                Noorani Qaida to adults working toward complete Hifz. Our teachers are trained in Tajweed
                and certified in Ijazah, and our platform is built specifically for one on one Quran
                learning, not repurposed video call software.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F4F9FD] py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
          <div className="text-center mb-14">
            <span className="text-[#2F80ED] font-bold text-[12px] tracking-[0.2em] uppercase block mb-5">Our Purpose</span>
            <h2
              className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mission and{' '}
              <span className="text-[#C9A227] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Vision
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            <div className="p-8 rounded-[20px] bg-white shadow-sm border-t-4 border-[#1668A3] transition-shadow duration-300 hover:shadow-[0_20.4px_40.8px_-20.4px_rgba(11,37,69,0.25)]">
              <h3
                className="font-bold text-[18px] text-[#0D3B5C] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Our Mission
              </h3>
              <p className="text-[#6a859c] text-[14px] leading-[1.8]">
                To deliver structured, high quality Quran education to Muslim families worldwide through
                certified teachers, proven curriculums, and flexible online classes that fit around real
                family life.
              </p>
            </div>

            <div className="p-8 rounded-[20px] bg-white shadow-sm border-t-4 border-[#c9a227] transition-shadow duration-300 hover:shadow-[0_20.4px_40.8px_-20.4px_rgba(11,37,69,0.25)]">
              <h3
                className="font-bold text-[18px] text-[#0D3B5C] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Our Vision
              </h3>
              <p className="text-[#6a859c] text-[14px] leading-[1.8]">
                A world where distance, location, or a busy schedule never stands between a student and the
                Quran, and where every home has access to a qualified teacher just a click away.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f4f8fb] py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
          <div className="text-center mb-16">
            <span className="text-[#2F80ED] font-bold text-[12px] tracking-[0.2em] uppercase block mb-5">Why Families Choose Us</span>
            <h2
              className="font-bold text-[32px] md:text-[38px] text-[#0B2545] leading-[1.2]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What Sets Our{' '}
              <span className="text-[#C9A227] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Academy
              </span>{' '}
              Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-[20px] border border-[#dceef7] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h4
                  className="font-bold text-[#0D3B5C] text-[16px] mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-[#6a859c] text-[14px] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0B2545] py-8">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { value: '1500+', label: 'Students Enrolled' },
              { value: '50+', label: 'Certified Teachers' },
              { value: '40+', label: 'Countries Reached' },
              { value: '10+', label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-5 md:py-0 md:px-16">
                <p
                  className="text-white font-bold leading-none mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '28px' }}
                >
                  {stat.value}
                </p>
                <p className="text-blue-200 text-[13px]">{stat.label}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F4F9FD] py-24">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-[#2F80ED] font-bold text-[12px] tracking-[0.2em] uppercase">Meet the Team</span>
            </div>
            <h2
              className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The People Behind Your{' '}
              <span className="text-[#C9A227] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Quran Journey
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[20px] overflow-hidden bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-[340px] overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h4
                    className="font-bold text-[#0D3B5C] text-[17px] mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {member.name}
                  </h4>
                  <p className="text-[#2F80ED] text-[12.5px] font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#6a859c] text-[13.5px] leading-[1.7]">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
          <div className="bg-[#0D3B5C] rounded-[20px] px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                className="font-bold text-[22px] md:text-[26px] text-white leading-[1.35] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Start your Quran journey with a<br />free trial class.
              </h2>
              <p className="text-blue-200 text-[13.5px] leading-relaxed">
                Book a free session and get matched with a certified teacher this week.
              </p>
            </div>
            <button className="bg-[#3b82f6] text-white px-7 py-3.5 rounded-full font-semibold shadow-[0_6px_16px_rgba(59,130,246,0.4)] hover:bg-blue-500 transition-all duration-300 text-[14px] whitespace-nowrap">
              Book Your Free Trial
            </button>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
