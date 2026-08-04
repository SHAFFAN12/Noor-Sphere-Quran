import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-section-image.png';
import bismillahImage from '../assets/bismillah.png';
import expertTeachersIcon from '../assets/expert-teachers.png';
import worldwideIcon from '../assets/worldwide.png';
import maleFemaleIcon from '../assets/male&female.png';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Hero Free Trial Form',
          ...formData,
        }),
      });
      const resData = await response.json();
      if (resData.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', course: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg(resData.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-white overflow-hidden flex flex-col lg:h-[calc(100vh-80px)] lg:min-h-[700px]">

      {/* Desktop: absolute background image on right */}
      <div className="hidden lg:block absolute top-0 right-0 w-[45%] h-full z-10">
        <img src={heroImage} alt="Boy reading Quran online" className="w-full h-full object-cover object-left" />
      </div>

      {/* Mobile: hero image as full-width banner */}
      <div className="lg:hidden w-full h-64 sm:h-80 overflow-hidden shrink-0">
        <img src={heroImage} alt="Boy reading Quran online" className="w-full h-full object-cover object-top" />
      </div>

      {/* Content area */}
      <div className="flex-1 relative z-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-10 w-full py-8 lg:py-0">
          <div className="inner">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 w-full">

              {/* Left: Text content */}
              <div className="w-full lg:w-[52%] lg:pr-6 text-center lg:text-left animate-fade-in">
                <div className="bg-white px-4 py-1.5 rounded-full inline-flex mb-5 border border-slate-200 text-[#1668A3] normal-case tracking-normal text-sm">
                  <span className="mr-1.5">★</span> 3 Free Trial Classes — No Card Required
                </div>

                <div className="mb-4">
                  <img src={bismillahImage} alt="Bismillah" className="h-12 lg:h-14 mx-auto lg:mx-0" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight font-bold text-[#0D3B5C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Learn the Holy <span className="text-[#1668A3] italic font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Quran</span><br />
                  Online<br />
                  Anytime, Anywhere
                </h1>

                <p className="text-base mb-8 mx-auto lg:mx-0 max-w-md text-[#5C7D92]">
                  International Quranic Academic is a trusted online Quran Academy providing expert one-to-one Quran classes for kids & adults across USA and worldwide. Expert certified male & female tutors available.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start">
                  <Link to="/contact" className="bg-[#3b82f6] text-white px-7 py-3 rounded-full shadow-[0_10px_20px_rgba(59,130,246,0.3)] font-bold text-[14.5px] hover:bg-blue-600 transition-all duration-300 text-center inline-block">Book Free Trial Class ➔</Link>
                  <Link to="/courses#pricing" className="bg-transparent text-[#3b82f6] px-7 py-3 rounded-full border border-[#3b82f6] font-bold text-[14.5px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-center inline-block">View Fee Structure</Link>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-sm sm:text-base font-semibold text-[#0D3B5C]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={expertTeachersIcon} alt="Expert Teachers" className="h-8 sm:h-10" />
                    Expert Teachers
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={worldwideIcon} alt="Worldwide" className="h-8 sm:h-10" />
                    Worldwide
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={maleFemaleIcon} alt="Male & Female" className="h-8 sm:h-10" />
                    Male & Female
                  </div>
                </div>
              </div>

              {/* Right: Sign-up form */}
              <div className="w-full lg:w-auto lg:max-w-lg lg:-ml-6 bg-white border border-blue-100 rounded-3xl shadow-2xl p-6 lg:p-8 flex flex-col relative z-30">
                <h3 className="text-2xl lg:text-3xl mb-1 text-[#0D3B5C] font-bold" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.5px' }}>Start Your Free Trial</h3>
                <p className="text-sm text-slate-500 mb-6">Fill in your details to book 3 free classes</p>

                {submitted ? (
                  <div className="bg-blue-50 border border-blue-200 text-[#0D3B5C] p-4 rounded-xl text-center text-sm font-medium my-4">
                    ✓ Application sent! We will contact you at noorspherequran@gmail.com shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {errorMsg && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-lg mb-3">
                        {errorMsg}
                      </div>
                    )}
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-primary-dark placeholder-slate-400"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-primary-dark placeholder-slate-400"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-primary-dark placeholder-slate-400"
                        placeholder="WhatsApp Number"
                      />
                    </div>
                    <div className="mb-6">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full appearance-none bg-slate-50 border border-blue-100 py-3.5 px-4 rounded-xl text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                      >
                        <option value="">Select a Course</option>
                        <option value="Noorani Qaida">Noorani Qaida</option>
                        <option value="Quran Reading with Tajweed">Quran Reading</option>
                        <option value="Memorization (Hifz)">Memorization (Hifz)</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#3b82f6] text-white rounded-full py-4 font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px] disabled:opacity-50"
                    >
                      {loading ? 'Sending...' : 'Book My Free Class ➔'}
                    </button>
                  </form>
                )}

                <div className="text-center mt-5 text-sm text-[#1668A3] font-medium flex items-center justify-center gap-1.5 bg-blue-50/50 py-3.5 px-4 rounded-xl">
                  <span>✦</span> No credit card required • 3 classes free <span>✦</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative w-full bg-[#1668A3] text-white py-3 z-30 overflow-hidden flex shadow-lg shrink-0">
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
