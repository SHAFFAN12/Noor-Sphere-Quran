import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const TrialBanner = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    preferredTime: '',
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
          formType: 'Trial Banner Application Form',
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          preferredTime: formData.preferredTime,
        }),
      });
      const resData = await response.json();
      if (resData.success) {
        setSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          course: '',
          preferredTime: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMsg(resData.error || 'Failed to submit application. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            
            <Link to="/contact" className="inline-block mt-2 px-9 py-4 rounded-full font-bold bg-[#3b82f6] text-white shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px]">Book Your Free Trial Now ➔</Link>
          </div>
          
          <div className="bg-[#0f2e4c] p-8 md:p-10 rounded-[24px] shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8 font-serif flex items-center gap-2.5">
              <span role="img" aria-label="clipboard">📋</span> Register for Free Trial
            </h3>

            {submitted ? (
              <div className="bg-blue-900/50 border border-blue-400 text-white p-6 rounded-xl text-center text-sm font-medium">
                ✓ Application sent successfully! We will contact you shortly via noorspherequran@gmail.com.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMsg && (
                  <div className="bg-red-900/50 border border-red-400 text-red-200 text-xs p-3 rounded-lg">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60"
                    placeholder="WhatsApp / Contact Number"
                  />
                </div>
                <div className="relative">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] appearance-none"
                  >
                    <option value="" className="text-white/60">Select a Course</option>
                    <option value="Noorani Qaida" className="text-slate-800">Noorani Qaida</option>
                    <option value="Quran Reading with Tajweed" className="text-slate-800">Quran Reading</option>
                    <option value="Memorization (Hifz)" className="text-slate-800">Memorization (Hifz)</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-[#1b436b] border border-white/10 p-3.5 rounded-lg text-white outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all text-[13.5px] placeholder:text-white/60"
                    placeholder="Preferred Time / Timezone"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 mt-3 rounded-full font-bold bg-[#3b82f6] text-white shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px] disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send My Application ➔'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TrialBanner;
