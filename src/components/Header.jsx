import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-[80px] flex items-center">
      <div className="container mx-auto px-4 lg:px-10 flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <img src={logo} alt="Noor Sphere Logo" className="h-[75px]" />
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-[0.95rem] text-[#5d7e9c]">
          <a href="#" className="text-[#0D3B5C] font-semibold hover:text-[#1668A3] transition-colors">Home</a>
          <a href="#" className="hover:text-[#1668A3] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#1668A3] transition-colors">Our Courses</a>
          <a href="#" className="hover:text-[#1668A3] transition-colors">Why Choose Us</a>
          <a href="#" className="hover:text-[#1668A3] transition-colors">Fee Structure</a>
          <a href="#" className="hover:text-[#1668A3] transition-colors">Contact</a>
        </nav>
        
        <button className="bg-[#3b82f6] text-white px-7 py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px]">Free Trial Classes ➔</button>
      </div>
    </header>
  );
};

export default Header;
