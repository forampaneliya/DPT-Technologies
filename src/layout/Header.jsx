import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import logo from "../assets/header-logo.png"

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50); // Change background after scrolling 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 h-[90px] px-6 py-4 z-50 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-xl  border border-white border-opacity-30 ${
            isScrolled 
                ? 'bg-gradient-to-r from-[#8ebeee] via-[#17A2C2] to-[#9cc7b2]  shadow-lg' 
                : 'bg-gradient-to-r from-[#8ebeee] via-[#17A2C2] to-[#9cc7b2] '
        }`}>
            <div className="flex items-center justify-between max-w-6xl mx-auto h-full">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <div className="text-white">
                        <a href="#" id='/'><img src={logo} alt="" /></a>
                    </div>
                </div>

                {/* Desktop Navigation Menu and Get Started Button */}
                <div className="hidden lg:flex items-center">
                    <nav className={`backdrop-blur-xl rounded-full border shadow-2xl px-2 py-4 flex items-center space-x-1 transition-all duration-300 ${
                        isScrolled 
                            ? 'bg-gray-100 border-gray-200' 
                            : 'bg-white/20 border-white/30'
                    }`}>
                        <ul className="flex">
                            <li>
                                <a
                                    href="#about"
                                    className={`px-6 py-3 text-[18px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className={`px-6 py-3 text-[18px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className={`px-6 py-3 text-[18px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`px-6 py-3 text-[18px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div  className="flex items-center space-x-2 ml-4">
                        {/* <a href='/#contact' className={`text-[18px] px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                            isScrolled 
                                ? 'bg-[#007BFF] text-white hover:bg-[#0056b3]' 
                                : 'bg-white/10 text-white hover:bg-white/20'
                        }`}>
                            <span>Get Started</span>
                            <BsArrowRight size={20} className="ml-2" />
                        </a> */}
                    </div>
                </div>

                {/* Tablet Navigation (simplified) */}
                <div className="hidden md:flex lg:hidden items-center">
                    <nav className={`backdrop-blur-xl rounded-full border shadow-2xl px-2 py-2 flex items-center space-x-1 transition-all duration-300 ${
                        isScrolled 
                            ? 'bg-gray-100 border-gray-200' 
                            : 'bg-white/20 border-white/30'
                    }`}>
                        <ul className="flex">
                            <li>
                                <a
                                    href="#about"
                                    className={`px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                     href="#services"
                                    className={`px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className={`px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                        isScrolled ? 'text-gray-800' : 'text-black'
                                    }`}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className={`p-2 transition-colors duration-300 ${
                            isScrolled ? 'text-gray-800' : 'text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className={`md:hidden absolute top-[90px] left-0 right-0 z-[9998] transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-transparent' 
                        : 'bg-transparent'
                }`}>
                    <div className="px-4 py-3">
                        <nav className={`rounded-2xl border shadow-2xl p-3 transition-all duration-300 ${
                            isScrolled 
                                ? 'bg-gray-50 border-gray-200' 
                                : 'bg-white border-white/30'
                        }`}>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="#about"
                                        className={`block px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 text-center ${
                                            isScrolled ? 'text-gray-800' : 'text-black'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className={`block px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 text-center ${
                                            isScrolled ? 'text-gray-800' : 'text-black'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#portfolio"
                                        className={`block px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 text-center ${
                                            isScrolled ? 'text-gray-800' : 'text-black'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className={`block px-4 py-2 text-[16px] bg-transparent hover:bg-[#007BFF] hover:text-white rounded-full font-medium transition-all duration-300 text-center ${
                                            isScrolled ? 'text-gray-800' : 'text-black'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-3 pt-3 border-t border-gray-200">
                                {/* <button
                                    className={`w-full text-[16px] px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                                        isScrolled 
                                            ? 'bg-[#007BFF] text-white hover:bg-[#0056b3]' 
                                            : 'bg-[#007BFF] text-white hover:bg-[#0056b3]'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span>Get Started</span>
                                    <BsArrowRight size={16} className="ml-2" />
                                </button> */}
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;