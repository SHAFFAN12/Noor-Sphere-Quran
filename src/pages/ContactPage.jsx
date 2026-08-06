import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Plus, Minus } from 'lucide-react';
import { submitWeb3Form } from '../utils/web3forms';
import phoneIcon from '../assets/My work (57).png';
import emailIcon from '../assets/My work (58).png';
import locationIcon from '../assets/My work (59).png';
import chatIcon from '../assets/My work (60).png';

const contactInfo = [
  {
    icon: phoneIcon,
    title: 'Call Us',
    value: '0370 8694049 / 0346 7925130',
  },
  {
    icon: emailIcon,
    title: 'Email Us',
    value: 'noorspherequran@gmail.com',
  },
  {
    icon: locationIcon,
    title: 'Our Office',
    value: '123 Islamic Center Road, Toronto, ON',
  },
  {
    icon: chatIcon,
    title: 'Live Chat',
    value: 'Available during office hours',
  },
];

const officeHours = [
  { days: 'Monday to Friday', hours: '8:00 AM – 10:00 PM' },
  { days: 'Saturday', hours: '9:00 AM – 8:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
];

const socials = [
  { label: 'f', href: '#' },
  { label: 'in', href: '#' },
  { label: 'ig', href: '#' },
  { label: 'yt', href: '#' },
];

const faqData = [
  {
    question: 'How soon can we start after signing up?',
    answer: 'Most families are matched with a teacher and booked for a free trial class within 24 to 48 hours of reaching out.',
  },
  {
    question: 'Do you accommodate different time zones?',
    answer: 'Yes, we have teachers available 24/7. We schedule classes at times that are convenient for your time zone and routine.',
  },
  {
    question: 'What do I need for an online class?',
    answer: 'You only need a laptop, tablet, or smartphone with a stable internet connection and headphones. All learning materials are provided digitally.',
  },
  {
    question: 'Can I request a specific teacher?',
    answer: 'Yes! If you have a preference for a male or female tutor, or a specific teaching style, let us know and we will match you accordingly.',
  },
];

const ContactPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cityCountry: '',
    course: '',
    age: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const resData = await submitWeb3Form({
        formType: 'Contact Page Inquiry Form',
        ...formData,
      });

      if (resData.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          cityCountry: '',
          course: '',
          age: '',
          message: '',
        });
        setTimeout(() => setFormSubmitted(false), 6000);
      } else {
        setErrorMsg(resData.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#F4F9FD] to-[#FFFFFF] py-16 lg:py-20 text-center">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner max-w-[850px] mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-[14px] mb-8">
              <a href="/" className="text-[#6A859C] hover:text-[#1668A3] transition-colors font-medium">Home</a>
              <span className="text-[#2F80ED] font-semibold">/</span>
              <span className="text-[#0D3B5C] font-bold">Contact</span>
            </div>

            <h1
              className="text-[#0B2545] font-extrabold leading-[1.2] mb-6 text-4xl md:text-5xl lg:text-[50px] tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Let's Find the Right{' '}
              <span className="italic text-[#C9A227] font-serif font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                Course for<br />Your Family.
              </span>
            </h1>

            <p className="text-[#6a859c] text-[16px] md:text-[17px] leading-[1.75] mb-10 max-w-[680px] mx-auto">
              Questions about courses, scheduling, or pricing? Reach out and our team will respond within one business day.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-black text-[14px] font-semibold">
              {['Free Trial Class', 'Response Within 24 Hours', 'All Time Zones Welcome'].map((tag) => (
                <span key={tag} className="bg-white border border-[#E6EDf5] px-6 py-2.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[20px] border border-[#eaf4fa] shadow-[0_4px_15px_rgba(11,37,69,0.02)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="w-[60px] h-[60px] flex items-center justify-center mb-6">
                    <img src={info.icon} alt={info.title} className="w-full h-full object-contain" />
                  </div>
                  <h4
                    className="font-bold text-[#0D3B5C] text-[17px] mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {info.title}
                  </h4>
                  <p className="text-[14px] text-[#6a859c] leading-relaxed font-medium break-all px-2">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form & Sidebar Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 bg-white rounded-[24px] p-8 md:p-10 border border-[#eaf4fa] shadow-[0px_20px_40px_-20px_#0B2545]">
                <h3
                  className="text-2xl font-bold text-[#0D3B5C] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Send Us a Message
                </h3>
                <p className="text-sm text-slate-500 mb-8">
                  Fill out the form below to send an email to <span className="font-semibold text-[#1668A3]">noorspherequran@gmail.com</span>. Our team will get back to you shortly.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#EAF5FC] border border-[#1668A3]/20 rounded-xl p-6 text-center">
                    <h4 className="font-bold text-[#0D3B5C] text-lg mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm text-[#6a859c]">Thank you for reaching out. An email has been sent via Nodemailer to noorspherequran@gmail.com.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {errorMsg && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-lg">
                        {errorMsg}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#0D3B5C] uppercase tracking-wider">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#FAFCFE] border border-[#e2edf5] py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#2F80ED] text-sm text-[#102e52] placeholder-slate-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#0D3B5C] uppercase tracking-wider">Phone Number</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#FAFCFE] border border-[#e2edf5] py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#2F80ED] text-sm text-[#102e52] placeholder-slate-400"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#0D3B5C] uppercase tracking-wider">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#FAFCFE] border border-[#e2edf5] py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#2F80ED] text-sm text-[#102e52] placeholder-slate-400"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#0D3B5C] uppercase tracking-wider">Enter Your City & Country</label>
                      <input
                        required
                        type="text"
                        name="cityCountry"
                        value={formData.cityCountry}
                        onChange={handleChange}
                        className="w-full bg-[#FAFCFE] border border-[#e2edf5] py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#2F80ED] text-sm text-[#102e52] placeholder-slate-400"
                        placeholder="Your City & Country"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#0D3B5C] uppercase tracking-wider">Course of Interest</label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full appearance-none bg-[#FAFCFE] border border-[#e2edf5] py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#2F80ED] text-sm text-[#102e52] bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%20fill%3D%22none%22%20stroke%3D%22%231668A3%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat"
                        >
                          <option value="">Select a Course</option>
                          <option value="Noorani Qaida">Noorani Qaida</option>
                          <option value="Quran Reading with Tajweed">Quran Reading with Tajweed</option>
                          <option value="Hifz (Quran Memorization)">Hifz (Quran Memorization)</option>
                          <option value="Quranic Arabic Language">Quranic Arabic Language</option>
                          <option value="Basic Islamic Education">Basic Islamic Education</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-[#0D3B5C] uppercase tracking-wider">Student Age</label>
                        <input
                          required
                          type="text"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="w-full bg-[#FAFCFE] border border-[#e2edf5] py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#2F80ED] text-sm text-[#102e52] placeholder-slate-400"
                          placeholder="e.g. 8 years, or Adult"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#0D3B5C] uppercase tracking-wider">Message</label>
                      <textarea
                        required
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#FAFCFE] border border-[#e2edf5] py-3.5 px-4 rounded-xl focus:outline-none focus:border-[#2F80ED] text-sm text-[#102e52] placeholder-slate-400 resize-none"
                        placeholder="Tell us a bit about your goals or schedule..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#2F80ED] text-white py-4 rounded-full font-bold shadow-[0_8px_20px_rgba(47,128,237,0.3)] hover:shadow-[0_12px_25px_rgba(47,128,237,0.5)] hover:bg-blue-600 transition-all duration-300 text-[15px] disabled:opacity-50"
                    >
                      {loading ? 'Sending Message via Nodemailer...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Map, Hours, Socials */}
              <div className="lg:col-span-5 flex flex-col gap-8 w-full">
                {/* Stylized Map Card */}
                <div className="bg-[#EAF5FC] border border-[#d2e7f7] rounded-[24px] h-[220px] relative overflow-hidden shadow-sm flex items-center justify-center">
                  {/* Styled Map Background Lines */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1668A3_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="absolute top-[40%] left-[20%] w-[150px] h-[2px] bg-[#1668A3]/10 transform rotate-12"></div>
                  <div className="absolute top-[30%] left-[50%] w-[200px] h-[2px] bg-[#1668A3]/10 transform -rotate-45"></div>
                  <div className="absolute top-[65%] left-[10%] w-[250px] h-[2px] bg-[#1668A3]/10 transform -rotate-6"></div>
                  <div className="absolute top-[25%] right-[10%] w-[120px] h-[2px] bg-[#1668A3]/10 transform rotate-45"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shadow-lg border border-[#e2edf5]">
                      <MapPin size={24} className="text-[#EF4444] fill-[#EF4444]/20 animate-bounce" />
                    </div>
                    <span className="text-[12.5px] text-[#0D3B5C] font-bold mt-3.5 bg-white px-3 py-1.5 rounded-full shadow-sm">
                      Toronto, Ontario, Canada
                    </span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white rounded-[24px] p-8 border border-[#eaf4fa] shadow-sm">
                  <h4
                    className="font-bold text-[#0D3B5C] text-[18px] mb-6 border-b border-slate-100 pb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Office Hours
                  </h4>
                  <div className="flex flex-col gap-4">
                    {officeHours.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[14px]">
                        <span className="text-[#0D3B5C] font-semibold">{item.days}</span>
                        <span className={`font-semibold ${item.hours === 'Closed' ? 'text-[#EF4444]' : 'text-[#6a859c]'}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Follow Socials */}
                <div className="bg-[#0B2545] rounded-[24px] p-8 text-white shadow-md">
                  <h4
                    className="font-bold text-[18px] mb-2 text-white"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Follow Our Academy
                  </h4>
                  <p className="text-[13.5px] text-blue-200 leading-relaxed mb-6">
                    Updates, student progress stories, and free learning tips.
                  </p>
                  <div className="flex gap-3">
                    {socials.map((soc, idx) => (
                      <a
                        key={idx}
                        href={soc.href}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold flex items-center justify-center transition-colors text-[14px]"
                      >
                        {soc.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="bg-white py-24 border-t border-[#f1f6fa]">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="text-center mb-16">
              <span className="text-[#2F80ED] font-bold text-sm tracking-[0.2em] uppercase block mb-5">Before You Write In</span>
              <h2
                className="font-bold text-[32px] md:text-[38px] text-[#0D3B5C] leading-[1.2]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Quick Answers to{' '}
                <span className="text-[#C9A227] italic font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Common Questions
                </span>
              </h2>
            </div>

            <div className="max-w-[800px] mx-auto flex flex-col gap-4">
              {faqData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-[#FAFCFE] rounded-[16px] border border-[#e2edf5] overflow-hidden transition-all duration-300"
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
                        isOpen ? 'max-h-[200px] border-t border-[#e2edf5]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-5 text-[14.5px] text-[#6a859c] leading-[1.7] bg-white">
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

      {/* CTA Footer Call Banner */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="inner">
            <div className="bg-[#0D3B5C] rounded-[20px] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[1200px] mx-auto shadow-xl text-center md:text-left">
              <div>
                <h2
                  className="font-bold text-[22px] md:text-[26px] text-white leading-[1.35] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Prefer to just talk it through?
                </h2>
                <p className="text-blue-200 text-[13.5px] leading-relaxed">
                  Call us directly and we will help you find the right course and teacher.
                </p>
              </div>
              <a href="tel:03708694049" className="bg-[#2F80ED] text-white px-8 py-3.5 rounded-full font-bold shadow-[0_8px_20px_rgba(47,128,237,0.3)] hover:shadow-[0_12.29px_24.58px_-8.19px_rgba(47,128,237,0.5)] hover:bg-blue-600 transition-all duration-300 text-[15px] whitespace-nowrap inline-block text-center">
                Call 0370 8694049
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
