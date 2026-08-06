import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0D3B5C] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="inner">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">

          {/* Logo + Socials */}
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Link to="/">
                <img src={logo} alt="Noor Sphere Logo" style={{ height: '70px', background: 'white', padding: '10px', borderRadius: '8px' }} />
              </Link>
            </div>
            <p className="text-[#A9CCE3] text-sm leading-relaxed mb-8">
              Helping students of all ages around the world build a lifelong connection with the Holy Quran, anytime and anywhere.
            </p>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1f3654] flex items-center justify-center text-[#A9CCE3] hover:bg-[#1668A3] hover:text-white hover:-translate-y-1 transition-all duration-300 text-[14px] font-semibold">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1f3654] flex items-center justify-center text-[#A9CCE3] hover:bg-[#1668A3] hover:text-white hover:-translate-y-1 transition-all duration-300 text-[12px] font-semibold">in</a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1f3654] flex items-center justify-center text-[#A9CCE3] hover:bg-[#1668A3] hover:text-white hover:-translate-y-1 transition-all duration-300 text-[14px]">▷</a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1f3654] flex items-center justify-center text-[#A9CCE3] hover:bg-[#1668A3] hover:text-white hover:-translate-y-1 transition-all duration-300 text-[15px]">@</a>
            </div>
          </div>

          {/* Our Courses */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Courses</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/courses" className="text-blue-100 text-sm hover:text-white transition-all block">Noorani Qaida</Link></li>
              <li><Link to="/courses" className="text-blue-100 text-sm hover:text-white transition-all block">Quran with Tajweed</Link></li>
              <li><Link to="/courses" className="text-blue-100 text-sm hover:text-white transition-all block">Memorizing Quran (Hifz)</Link></li>
              <li><Link to="/courses" className="text-blue-100 text-sm hover:text-white transition-all block">Islamic Education</Link></li>
              <li><Link to="/courses" className="text-blue-100 text-sm hover:text-white transition-all block">Complete Namaz (Salah)</Link></li>
              <li><Link to="/courses" className="text-blue-100 text-sm hover:text-white transition-all block">Translation & Tafseer</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-blue-100 text-sm hover:text-white transition-all block">Home</Link></li>
              <li><Link to="/about" className="text-blue-100 text-sm hover:text-white transition-all block">About Us</Link></li>
              <li><Link to="/courses#pricing" className="text-blue-100 text-sm hover:text-white transition-all block">Fee Structure</Link></li>
              <li><Link to="/contact" className="text-blue-100 text-sm hover:text-white transition-all block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Get In Touch</h4>
            <ul className="flex flex-col gap-5 items-center lg:items-start">
              <li className="flex items-start gap-3 text-blue-100 text-sm">
                <Mail size={18} className="shrink-0 text-[#6FB8EA] mt-1" />
                <a href="mailto:muhammadshaffanedu@gmail.com" className="hover:text-white transition-colors">muhammadshaffanedu@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-blue-100 text-sm">
                <Phone size={18} className="shrink-0 text-[#6FB8EA] mt-1" />
                <span>
                  <a href="tel:03708694049" className="hover:text-white transition-colors">0370 8694049</a>
                  <br />
                  <a href="tel:03467925130" className="hover:text-white transition-colors">0346 7925130</a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-blue-100 text-sm">
                <Globe size={18} className="shrink-0 text-[#6FB8EA] mt-1" />
                <a href="https://noorspherequran.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  noorspherequran.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200 text-center">
          <p>© 2026 Noor Sphere Quran. All rights reserved.</p>
          <p className="text-xs text-blue-300">
            Made by{' '}
            <a
              href="https://muhammad-shaffan-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6FB8EA] hover:text-white transition-colors font-medium"
            >
              Muhammad Shaffan
            </a>
          </p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Partnerships</span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
