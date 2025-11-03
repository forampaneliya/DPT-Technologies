import React from 'react';
import { Instagram } from 'lucide-react';
import footerlogo from '../assets/footerlogo.png';
import { FaBrain, FaEnvelope, FaFacebookF, FaLinkedinIn, FaPaperPlane, FaPhoneAlt, FaRegCompass, FaRocket, FaSatelliteDish, FaShieldAlt, FaTwitter } from 'react-icons/fa';
import { FaCloudArrowUp } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Section - Full width on mobile, 2 cols on tablet, 1 col on desktop */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <div className="flex mb-4 sm:mb-6 justify-center md:justify-start">
              <div className="p-4 sm:p-6 w-full max-w-[250px] flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500/25 to-purple-500/25 bg-opacity-20 backdrop-blur-md border border-white/30 shadow-lg">
                <div className="h-12 sm:h-16 w-12 sm:w-16 rounded-lg flex items-center justify-center">
                  <img src={footerlogo} alt="DPT Technologies" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center md:text-left">
              Pioneering the future of digital transformation with{" "}
              <span className="text-cyan-400">AI-powered solutions</span> that revolutionize how businesses operate and grow.
            </p>

            <div className="flex space-x-2 sm:space-x-3 pt-4 justify-center md:justify-start">
              {/* Facebook */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center 
                              bg-white/10 backdrop-blur-md border border-white/20 shadow-md 
                              cursor-pointer transition-all duration-300 
                              hover:bg-gradient-to-r from-blue-500 to-cyan-500 group">
                <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300 group-hover:text-white" />
              </div>

              {/* Twitter */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center 
                              bg-white/10 backdrop-blur-md border border-white/20 shadow-md 
                              cursor-pointer transition-all duration-300 
                              hover:bg-gradient-to-r from-cyan-500/70 to-blue-500/70 group">
                <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300 group-hover:text-white" />
              </div>

              {/* LinkedIn */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center 
                              bg-white/10 backdrop-blur-md border border-white/20 shadow-md 
                              cursor-pointer transition-all duration-300 
                              hover:bg-gradient-to-r from-purple-500/70 to-indigo-500/70 group">
                <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 group-hover:text-white" />
              </div>

              {/* Instagram */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center 
                              bg-white/10 backdrop-blur-md border border-white/20 shadow-md 
                              cursor-pointer transition-all duration-300 
                              hover:bg-gradient-to-r from-pink-500/70 to-purple-500/70 group">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300 group-hover:text-white" />
              </div>
            </div>
          </div>

          {/* Navigate Section - Full width on mobile, 1 col on tablet, 1 col on desktop */}
          <div className="space-y-4 md:ms-0 lg:ms-10">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center justify-center md:justify-start">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center me-2
                              bg-gradient-to-r from-blue-500 to-cyan-500 border border-white/10 shadow-md group">
                <FaRegCompass className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              Navigate
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item, index) => {
                const gradients = [
                  'from-blue-500 to-cyan-500',
                  'from-purple-500 to-indigo-500',
                  'from-cyan-500 to-blue-500',
                  'from-indigo-500 to-purple-500',
                  'from-green-500 to-emerald-500'
                ];
                
                return (
                  <li key={index} className="flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors group justify-center md:justify-start">
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-lg flex items-center justify-center me-2
                                    bg-gradient-to-r ${gradients[index]} shadow-md
                                    opacity-0 -translate-x-2 transition-all duration-300 
                                    group-hover:opacity-100 group-hover:translate-x-0`}>
                      <MdKeyboardArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-blue-200">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Solutions Section - Full width on mobile, 1 col on tablet, 1 col on desktop */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center justify-center md:justify-start">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center me-2
                              bg-gradient-to-r from-purple-500 to-indigo-500 border border-white/10 shadow-md group">
                <FaRocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              Solutions
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { title: 'AI & Machine Learning', subtitle: 'Intelligent Systems', icon: FaBrain, gradient: 'from-blue-500 to-cyan-500', color: 'text-blue-200' },
                { title: 'Cloud & DevOps', subtitle: 'Scalable Infrastructure', icon: FaCloudArrowUp, gradient: 'from-purple-500 to-indigo-500', color: 'text-purple-200' },
                { title: 'Cybersecurity', subtitle: 'Advanced Protection', icon: FaShieldAlt, gradient: 'from-red-500 to-pink-500', color: 'text-red-200' }
              ].map((item, index) => (
                <li key={index} className="flex items-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transition-all">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${item.gradient} rounded mr-2 sm:mr-3 flex items-center justify-center shadow-md flex-shrink-0`}>
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs sm:text-sm">{item.title}</div>
                    <div className={`${item.color} text-xs`}>{item.subtitle}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section - Full width on mobile, 2 cols on tablet, 1 col on desktop */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center justify-center md:justify-start">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center me-2
                              bg-gradient-to-r from-green-500 to-emerald-500 border border-white/10 shadow-md group">
                <FaSatelliteDish className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              </div>
              Connect
            </h3>
            <div className="space-y-3 sm:space-y-4 flex flex-col items-center md:items-start">
              <div className="flex items-center p-3 sm:p-4 w-full max-w-[300px] rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transition-all">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-2 sm:mr-3 flex items-center justify-center shadow-md flex-shrink-0">
                  <FaPhoneAlt className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white text-xs sm:text-sm font-medium">Direct Line</div>
                  <div className="text-cyan-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm break-all cursor-pointer mt-1 sm:mt-2">
                    +91-7065300376
                  </div>
                </div>
              </div>
              
              <div className="flex items-center w-full max-w-[300px] p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transition-all">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg mr-2 sm:mr-3 flex items-center justify-center shadow-md flex-shrink-0">
                  <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-white text-xs sm:text-sm font-medium">Email Hub</div>
                  <div className="text-purple-300 mt-1 sm:mt-2 hover:text-white transition-colors duration-300 text-xs sm:text-sm break-all cursor-pointer">
                    dpttechnologiespvtltd@gmail.com
                  </div>
                </div>
              </div>

              {/* Stay Ahead Card */}
              {/* <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 sm:p-4 rounded-xl w-full max-w-[300px] mt-4 sm:mt-6">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Stay Ahead</h4>
                <p className="text-blue-100 text-xs sm:text-sm mb-2 sm:mb-3">
                  Get insights and exclusive resources delivered to your inbox.
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/20 border border-white/30 rounded-l-lg text-white placeholder-blue-200 text-xs sm:text-sm focus:outline-none focus:border-white/50 min-w-0"
                  />
                  <button className="text-white bg-white/20 border border-white/30 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-r-lg font-semibold text-xs sm:text-sm transition-colors flex-shrink-0">
                    <FaPaperPlane className="w-3 h-3" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-900 text-white py-6 sm:py-8 px-0 -mx-4 sm:-mx-6 mt-8 sm:mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="border-t border-gray-800 pt-6 sm:pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
                {/* Company Info - Left */}
                <div className="text-gray-400 text-center md:text-left order-1 md:order-1">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="text-xs sm:text-sm text-blue-200">© 2024</span> 
                    <span className="text-xs sm:text-sm text-white font-bold md:ms-1">DPT Technologies Pvt. Ltd.</span>
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm mt-1">
                    Crafting digital excellence since 2019
                  </div>
                </div>
                
                {/* Navigation Links - Center */}
                <div className="flex flex-wrap justify-center items-center w-full md:w-auto order-2 md:order-2">
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs text-blue-200">
                    <div className="hover:text-white cursor-pointer transition-colors duration-200 whitespace-nowrap text-center">
                      Privacy Policy
                    </div>
                    <div className="hover:text-white cursor-pointer transition-colors duration-200 whitespace-nowrap text-center">
                      Terms of Service
                    </div>
                    <div className="hover:text-white cursor-pointer transition-colors duration-200 whitespace-nowrap text-center">
                      Cookies
                    </div>
                    <div className="hover:text-white cursor-pointer transition-colors duration-200 whitespace-nowrap text-center">
                      Sitemap
                    </div>
                  </div>
                </div>
                
                {/* System Status - Right */}
                <div className="flex items-center text-xs sm:text-sm text-gray-400 order-2 md:order-3">
                  <div className="flex items-center bg-gray-800 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                    <span className="text-green-300 text-xs sm:text-sm whitespace-nowrap">All Systems Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}