import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/groups', label: 'Ministries' },
    { href: '/sermons', label: 'Sermons' },
    { href: '/events', label: 'Events' },
    { href: '/give', label: 'Give' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-xl lg:text-2xl font-montserrat font-bold tracking-wide">
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-teal-700' : 'text-white'
                }`}>
                  UPPER ROOM AG
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-montserrat font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105 relative group py-2 ${
                  isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute left-0 right-0 bottom-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  isScrolled ? 'bg-teal-600' : 'bg-white'
                }`}></span>
              </Link>
            ))}
            
            {/* Plan a Visit Button */}
            <Link
              href="/newhere"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-2.5 font-montserrat font-semibold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Plan a Visit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl mt-2 border border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-montserrat font-medium text-base transition-all duration-200 rounded-lg mx-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3 border-t border-gray-200 mt-2">
              <Link
                href="/newhere"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-montserrat font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Plan a Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}