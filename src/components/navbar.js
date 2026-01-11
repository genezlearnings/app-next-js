import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Genez Learnings</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8
            ">
              <Link href="/" className={`${router.pathname === '/' ? 'text-indigo-600 font-medium' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Home
              </Link>
              <Link href="/courses" className={`${router.pathname.startsWith('/courses') ? 'text-indigo-600 font-medium' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Courses
              </Link>
              <Link href="/about" className={`${router.pathname === '/about' ? 'text-indigo-600 font-medium' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                About Us
              </Link>
              <Link href="/testimonials" className={`${router.pathname === '/testimonials' ? 'text-indigo-600 font-medium' : 'text-gray-700 hover:text-indigo-600'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Testimonials
              </Link>
              <Link href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`${router.pathname === '/' ? 'bg-gray-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'} block px-3 py-2 rounded-md text-base font-medium`}>
              Home
            </Link>
            <Link href="/courses" className={`${router.pathname.startsWith('/courses') ? 'bg-gray-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'} block px-3 py-2 rounded-md text-base font-medium`}>
              Courses
            </Link>
            <Link href="/about" className={`${router.pathname === '/about' ? 'bg-gray-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'} block px-3 py-2 rounded-md text-base font-medium`}>
              About Us
            </Link>
            <Link href="/testimonials" className={`${router.pathname === '/testimonials' ? 'bg-gray-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'} block px-3 py-2 rounded-md text-base font-medium`}>
              Testimonials
            </Link>
            <Link href="/contact" className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 mt-2">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
