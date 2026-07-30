import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Courses', to: '/courses' },
  { label: 'Our Teachers', to: '/teachers' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="inner flex justify-between items-center w-full h-[70px] lg:h-[80px]">
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Noor Sphere Logo" className="h-[55px] lg:h-[75px]" />
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

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-block bg-[#3b82f6] text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[13px] lg:text-[14.5px] whitespace-nowrap text-center"
            >
              Free Trial Class
            </Link>
            <button
              className="lg:hidden p-2 text-[#0D3B5C] rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg text-[0.95rem] font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-[#1668A3] font-semibold'
                      : 'text-[#5d7e9c] hover:bg-slate-50 hover:text-[#1668A3]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 bg-[#3b82f6] text-white px-7 py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 transition-all duration-300 text-[14.5px] text-center block"
            >
              Free Trial Class
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
