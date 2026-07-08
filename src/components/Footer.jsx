import React from 'react';
import { Mail, Phone, Globe, MessageCircle, Share2, Video, Camera } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0D3B5C] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <img src={logo} alt="Noor Sphere Logo" style={{ height: '70px', background: 'white', padding: '10px', borderRadius: '8px' }} />
            </div>
            <p className="text-[#8FB9D4] text-sm leading-relaxed mb-8">
              Helping students of all ages around the world build a lifelong connection with the Holy Quran, anytime and anywhere.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1668A3] hover:-translate-y-1 transition-all duration-300"><MessageCircle size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1668A3] hover:-translate-y-1 transition-all duration-300"><Share2 size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1668A3] hover:-translate-y-1 transition-all duration-300"><Video size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1668A3] hover:-translate-y-1 transition-all duration-300"><Camera size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Courses</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Noorani Qaida</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Quran with Tajweed</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Memorizing Quran (Hifz)</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Islamic Education</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Complete Namaz (Salah)</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Translation & Tafseer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Home</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">About Us</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Fee Structure</a></li>
              <li><a href="#" className="text-blue-100 text-sm hover:text-white hover:pl-2 transition-all block">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Get In Touch</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4 text-blue-100 text-sm">
                <Mail size={18} className="shrink-0 text-[#6FB8EA] mt-1" />
                <span>info@internationalquranicacademic.com</span>
              </li>
              <li className="flex items-start gap-4 text-blue-100 text-sm">
                <Phone size={18} className="shrink-0 text-[#6FB8EA] mt-1" />
                <span>+1 (774) 544-3187<br/>+1 (703) 845-8591</span>
              </li>
              <li className="flex items-start gap-4 text-blue-100 text-sm">
                <Globe size={18} className="shrink-0 text-[#6FB8EA] mt-1" />
                <span>internationalquranicacademic.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>© 2026 International Quranic Academic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Partnerships</a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
