import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Courses', to: '/courses' },
  { label: 'Why Choose Us', to: '/#why' },
  { label: 'Fee Structure', to: '/#pricing' },
  { label: 'Contact', to: '/#contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 h-[80px] flex items-center">
      <div className="container mx-auto px-4 lg:px-10">
      <div className="inner flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Noor Sphere Logo" className="h-[75px]" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[0.95rem] text-[#5d7e9c]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`hover:text-[#1668A3] transition-colors ${
                  isActive ? 'text-[#0D3B5C] font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button className="bg-[#3b82f6] text-white px-7 py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px]">
          Free Trial Classes ➔
        </button>
      </div>
      </div>
    </header>
  );
};

export default Header;
