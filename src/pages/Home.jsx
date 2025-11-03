import React from "react";
import banner from "../assets/image/banner.jpg";
import whypartnerwithus from "../assets/image/img-2.jpg";
import { FaArrowAltCircleRight, FaArrowRight, FaBoxOpen, FaBrain, FaChartLine, FaBuilding, FaDollarSign, FaDotCircle, FaEnvelope, FaExpandArrowsAlt, FaEye, FaGlobeAmericas, FaGraduationCap, FaHeartbeat, FaIndustry, FaLeaf, FaLightbulb, FaMapMarkerAlt, FaMicroscope, FaPhoneAlt, FaPlay, FaRecycle, FaRocket, FaShieldAlt, FaUtensils, FaShoppingCart } from "react-icons/fa";
import { Leaf, Recycle, Globe, Target, Users } from 'lucide-react';
import { FaRobot, FaBolt, FaCertificate, FaLock, FaRunning } from "react-icons/fa";
import { IoTelescope, IoTimeSharp } from "react-icons/io5";
import { GiMeal, GiPlantWatering } from "react-icons/gi";
import whychoose1 from '../assets/image/why choose 1.png';
import whychoose2 from '../assets/image/why choose 2.png';
import whychoose3 from '../assets/image/why choose 3.png';

export default function Home() {

    const solutions = [
        {
            id: 1,
            icon: <FaMicroscope className="w-6 h-6 text-white" />,
            title: "Nature-Positive Innovation Leaders",
            bgcolor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
            description: "Pioneering regenerative food science and technology technologies that work in harmony with natural ecosystems to create positive environmental impact."
        },
        {
            id: 2,
            icon: <FaChartLine className="w-6 h-6 text-white" />,
            title: "Circular Economy Mastery",
            bgcolor: 'bg-gradient-to-br from-purple-500 to-indigo-500',
            description: "Complete lifecycle transformation from regenerative sourcing to zero-waste distribution, creating closed-loop systems that continuously heal the planet."
        },
        {
            id: 3,
            icon: <FaRocket className="w-6 h-6 text-white" />,
            title: "Planetary-Scale Impact Solutions",
            bgcolor: 'bg-gradient-to-br from-indigo-500 to-blue-500',
            description: "Breakthrough new technologies designed to reverse climate change while guaranteeing exponential returns for your business and community."
        },
        {
            id: 4,
            icon: <FaDollarSign className="w-6 h-6 text-white" />,
            title: "Regenerative Business Models",
            bgcolor: 'bg-gradient-to-br from-[#28a745] to-[#ffc107]',
            description: "Profitable strategies that create exponential positive impact, proving that business success and planetary healing are naturally aligned."
        },
        {
            id: 5,
            icon: <FaExpandArrowsAlt className="w-6 h-6 text-white" />,
            title: "Accessible Green Innovation",

            bgcolor: 'bg-gradient-to-br from-[#17a2b8] to-[#dc3545]',
            description: "Democratizing regenerative technologies through affordable, scalable solutions that empower businesses of every size to become climate healers."
        }
    ];


    const industries = [
        {
            icon: <FaHeartbeat className="text-2xl" />,
            title: "Healthcare & Nutrition",
            gradient: "from-[#007BFF] to-[#17A2B8]",
            hoverBorder: "hover:border-blue-500",
            iconColor: "text-blue-600"
        },
        {
            icon: <FaGraduationCap className="text-2xl" />,
            title: "Education & Institutions",
            gradient: "from-[#28A745] to-[#20C997]",
            hoverBorder: "hover:border-green-500",
            iconColor: "text-green-600"
        },
        {
            icon: <FaShoppingCart className="text-2xl" />,
            title: "Retail & E-commerce",
            gradient: "from-[#DC3545] to-[#FD7E14]",
            hoverBorder: "hover:border-red-500",
            iconColor: "text-red-600"
        },
        {
            icon: <FaIndustry className="text-2xl" />,
            title: "Food & Beverage Manufacturing",
            gradient: "from-[#17A2B8] to-[#6F42C1]",
            hoverBorder: "hover:border-cyan-500",
            iconColor: "text-cyan-600"
        },
        {
            icon: <FaDollarSign className="text-2xl" />,
            title: "Finance & Food Investments",
            gradient: "from-[#FFC107] to-[#FF6B6B]",
            hoverBorder: "hover:border-yellow-500",
            iconColor: "text-yellow-600"
        },
        {
            icon: <FaRocket className="text-2xl" />,
            title: "FoodTech Startups & SMEs",
            gradient: "from-[#7C3AED] to-[#EC4899]",
            hoverBorder: "hover:border-purple-500",
            iconColor: "text-purple-600"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section id="about">
                <div
                    className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.95,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-15">
                        {/* Badge */}
                        <span className="px-4 py-1 mb-4 text-sm font-medium bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                            🚀 Transforming Businesses Since 2019
                        </span>

                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-purple-400  bg-clip-text text-transparent">
                            Digital <span className=" bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent flex">Innovation</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-6 text-[24px] max-w-2xl text-gray-300 font-light">
                            We craft cutting-edge <span className="text-yellow-400 font-semibold"> AI-powered solutions </span>
                            that transform your business vision into digital reality. Experience the future of technology today.
                        </p>

                        {/* Feature Cards */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                            <div className="bg-white/10 border border-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:scale-105 transition">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 text-white bg-gradient-to-br from-[#007BFF] to-[#17A2B8] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg mb-4">
                                        <FaBrain className="text-2xl" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
                                <p className="text-gray-300 text-sm">
                                    Next-gen artificial intelligence that learns and adapts to your business needs.
                                </p>
                            </div>

                            <div className="bg-white/10 border border-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 text-white bg-gradient-to-br from-[#28A745] to-[#FFC107] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg mb-4">
                                        <FaRocket className="text-2xl" />
                                    </div>                                </div>
                                <h3 className="text-xl font-semibold mb-2">Rapid Deploy</h3>
                                <p className="text-gray-300 text-sm">
                                    Lightning-fast implementation with zero downtime and seamless integration.
                                </p>
                            </div>

                            <div className="bg-white/10 border border-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 text-white bg-gradient-to-br from-[#DC3545] to-[#17A2B8] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg mb-4">
                                        <FaShieldAlt className="text-2xl" />
                                    </div>                                </div>
                                <h3 className="text-xl font-semibold mb-2">Secure Core</h3>
                                <p className="text-gray-300 text-sm">
                                    Enterprise-grade security with advanced encryption and threat protection.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex gap-6">
                            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">
                                Start Your Transformation
                                <FaArrowAltCircleRight className="text-lg" />
                            </a>
                            {/* <button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-gray-400 hover:bg-gray-800 transition">
                                Watch Demo
                                <FaPlay className="text-sm" />
                            </button> */}
                        </div>

                        {/* Stats */}
                        <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">
                            <div>
                                <h3 className="text-3xl font-black text-[#FFC107] mb-2">500+</h3>
                                <p className="text-sm text-gray-400">Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-[#28A745] mb-2">99.9%</h3>
                                <p className="text-sm text-gray-400">Uptime Guaranteed</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-[#007BFF] mb-2">24/7</h3>
                                <p className="text-sm text-gray-400">Expert Support</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-[#17A2B8] mb-2">5★</h3>
                                <p className="text-sm text-gray-400">Client Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section id="services" className="bg-gradient-to-br from-[#b3d3f3] to-[#f0f7ff]  py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        <span className="text-4xl lg:text-[55px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#263645] via-[#007BFF] to-[#17A2B8]">
                            Our Core Areas <br /> of Innovation
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        We are committed to building a{" "}
                        <span className="text-blue-600 font-medium">sustainable food future</span>{" "}
                        through innovative solutions that reduce waste, promote plant-based
                        nutrition, and empower communities.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-8 mb-16">
    {/* Plant-Based Alternatives */}
    <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 text-white bg-gradient-to-br from-[#28A745] to-[#17A2B8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <FaLeaf className="text-2xl" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Plant-Based Alternatives</h3>
        <p className="text-gray-600 mb-4">
            We develop next-generation protein substitutes from meat alternatives to egg replacements using cutting-edge food science. 
                                {/* Our goal is to offer delicious, nutritious, and sustainable choices for modern consumers. */}
        </p>
    </div>

    {/* Food Waste Reduction */}
    <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 text-white bg-gradient-to-br from-[#FFC107] to-[#28A745] rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <FaRecycle className="text-2xl" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Food Waste Reduction</h3>
        <p className="text-gray-600 mb-4">
            We design smart redistribution models that repurpose surplus edible food through innovative channels.
                                 {/* By minimizing waste, we ensure that food reaches the people who need it most, creating zero-waste, impact-driven solutions. */}
        </p>
    </div>

    {/* Sustainable Food Ecosystem */}
    <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 text-white bg-gradient-to-br from-[#007BFF] to-[#17A2B8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <FaBoxOpen className="text-2xl" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Sustainable Food Ecosystem</h3>
        <p className="text-gray-600 mb-4">
            From eco-friendly packaging to optimized supply chains, we deliver holistic solutions that balance efficiency with environmental responsibility.
        </p>
    </div>

    {/* Advisory & Consulting */}
    <div className="bg-white p-8 rounded-2xl shadow-lg text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 text-white bg-gradient-to-br from-[#DC3545] to-[#17A2B8] rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <FaLightbulb className="text-2xl" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Advisory & Consulting</h3>
        <p className="text-gray-600 mb-4">
            We provide expert guidance for businesses, startups, and communities to adopt sustainable food practices that are profitable, scalable, and impactful.
        </p>
    </div>
</div>

                    {/* CTA Card */}
                    <div className="relative bg-gradient-to-r from-green-700 to-blue-700 text-white rounded-2xl p-12 shadow-lg overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-6 left-6 w-16 h-16 border border-white/40 rounded-full"></div>
                        <div className="absolute bottom-6 right-6 w-12 h-12 border border-white/40 rounded-full"></div>

                        {/* Content */}
                        <h3 className="text-4xl font-extrabold mb-4 text-center">
                            Join the Food Revolution
                        </h3>
                        <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8 text-center">
                            Together, we can build a sustainable, waste-free, and healthier food
                            system for the world. Let’s make a positive impact—one solution at a
                            time.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <a
                                href="#partner"
                                className="px-6 py-3 rounded-full bg-white text-green-700 font-medium shadow hover:bg-gray-100 flex items-center justify-center gap-2 transition"
                            >
                                <FaLightbulb /> Partner With Us
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            <div id="portfolio" className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2">
                            <span className="text-sm sm:text-base"><FaUtensils /></span>
                            FoodTech Innovation
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-[55px] font-bold text-gray-900 mb-3 sm:mb-4 leading-snug sm:leading-tight">
                            Why Choose{" "}
                            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent">
                                Us?
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                            Leading the future of sustainable food technology with innovative
                            solutions that drive both business success and environmental impact.
                        </p>
                    </div>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        {/* Left Column - Solutions List */}
                        <div className="space-y-5 sm:space-y-6">
                            {solutions.map((solution) => (
                                <div key={solution.id} className="flex gap-3 sm:gap-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className={`w-10 h-10 sm:w-12 sm:h-12 ${solution.bgcolor} rounded-xl flex items-center justify-center shadow-lg`}
                                        >
                                            <span className="text-lg sm:text-xl">{solution.icon}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                            {solution.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Images and Stats */}
                        <div className="space-y-5 sm:space-y-6">
                            {/* Top Image with Stats */}
                            <div className="relative">
                                <img
                                    src={whychoose1}
                                    alt="Natural cosmetic products with organic ingredients"
                                    className="w-full h-36 sm:h-44 object-cover rounded-2xl"
                                />
                                {/* Stat Badge - Top Right */}
                                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-gray-100 shadow-lg">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div>
                                            <div className="text-lg sm:text-2xl font-bold text-gray-900">
                                                98%
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                                                Carbon Positive
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row - Two Images */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {/* Bottom Left Image */}
                                <div className="relative">
                                    <img
                                        src={whychoose2}
                                        alt="Colorful healthy food bowl with vegetables"
                                        className="w-full h-32 sm:h-40 object-cover rounded-2xl"
                                    />
                                    {/* Stat Badge - Bottom Left */}
                                    <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-white rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl border border-gray-100">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div>
                                                <div className="text-lg sm:text-2xl font-bold text-gray-900">
                                                    5x
                                                </div>
                                                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                                                    Impact ROI
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Right Image */}
                                <div className="relative">
                                    <img
                                        src={whychoose3}
                                        alt="Green forest with natural vegetation"
                                        className="w-full h-32 sm:h-40 object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="partner" className="relative bg-gradient-to-br from-[#f5faff] to-[#f0f7ff] py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Tagline */}
                    <div className="inline-block bg-white shadow-sm rounded-full px-4 py-1 text-sm font-medium text-sky-600 border border-sky-200 mb-6">
                        ✨ Excellence Guaranteed
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl lg:text-[55px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#212529] via-[#007BFF] to-[#28A745] mb-6 md:mb-8">
                        Why Partner <br className="hidden md:block" />
                        <span className="block bg-gradient-to-r from-[#28a745] via-[#17A2B8] to-[#007BFF] mt-1 bg-clip-text text-transparent">
                            With Us?
                        </span>
                    </h2>

                    <p className="text-[#6C757D] max-w-3xl mx-auto mb-10 md:mb-12 text-base md:text-lg lg:text-[22px]">
                        Experience the difference with{" "}
                        <span className="text-[#007BFF] font-semibold">
                            industry-leading expertise
                        </span>
                        , cutting-edge technology, and unwavering commitment to your success.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                        {/* Left Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            {/* Innovation Card */}
                            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold text-sky-600 mb-2">
                                    Innovation
                                </h3>
                                <p className="text-gray-800 font-semibold mb-3">
                                    Advancing Food Science
                                </p>
                                <div className="w-full bg-sky-100 h-3 rounded-full mb-3">
                                    <div className="bg-sky-500 h-3 rounded-full w-3/4"></div>
                                </div>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Advancing food science with creativity and purpose, driving
                                    breakthrough solutions for tomorrow's challenges.
                                </p>
                            </div>

                            {/* Integrity Card */}
                            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                                    Integrity
                                </h3>
                                <p className="text-gray-800 font-semibold mb-3">
                                    Ethical Practices
                                </p>
                                <div className="w-full bg-green-100 h-3 rounded-full mb-3">
                                    <div className="bg-green-500 h-3 rounded-full w-5/6"></div>
                                </div>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Working with honesty, responsibility, and ethical practices in
                                    every aspect of our operations.
                                </p>
                            </div>

                            {/* Excellence Card */}
                            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
                                    Excellence
                                </h3>
                                <p className="text-gray-800 font-semibold mb-3">
                                    Quality Solutions
                                </p>
                                <div className="w-full bg-yellow-100 h-3 rounded-full mb-3">
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full w-full"></div>
                                </div>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Delivering safe, high-quality, and scalable solutions that
                                    exceed industry standards.
                                </p>
                            </div>

                            {/* Impact Card */}
                            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-2">
                                    Impact
                                </h3>
                                <p className="text-gray-800 font-semibold mb-3">
                                    Creating Real Value
                                </p>
                                <div className="w-full bg-cyan-100 h-3 rounded-full mb-3">
                                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full w-4/5"></div>
                                </div>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Creating real value for people, businesses, and communities
                                    through meaningful innovation.
                                </p>
                            </div>
                        </div>

                        {/* Right Mission Box */}
                        <div className="flex flex-col gap-10">
                            <div
                                className="relative bg-gradient-to-br from-white/90 to-[#f5faff]/90 shadow-blue-100 shadow-xl rounded-2xl p-6 md:p-8 text-left overflow-hidden"
                                style={{
                                    backgroundImage: `url(${whypartnerwithus})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-white/80 rounded-2xl"></div>

                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
                                        Your Success is Our Mission
                                    </h3>

                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <GiPlantWatering className="text-white w-14 h-12 mt-1 bg-gradient-to-br from-[#007bff] to-[#17a2b8] p-3 rounded-xl" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Plant-based alternatives
                                                </h4>
                                                <p className="text-gray-500 text-sm md:text-base">
                                                    To design plant-based alternatives that inspire
                                                    healthier and eco-friendly lifestyles.
                                                </p>
                                            </div>
                                        </li>

                                        <li className="flex items-start gap-4">
                                            <GiMeal className="text-white w-13 h-12 mt-1 bg-gradient-to-br from-[#28a745] to-[#ffc107] p-3 rounded-xl" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Minimize food waste
                                                </h4>
                                                <p className="text-gray-500 text-sm md:text-base">
                                                    To minimize food waste by creating models that repurpose
                                                    surplus food.
                                                </p>
                                            </div>
                                        </li>

                                        <li className="flex items-start gap-4">
                                            <FaLeaf className="text-white w-14 h-12 mt-1 bg-gradient-to-br from-[#17a2b8] to-[#dc3545] p-3 rounded-xl" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">
                                                    Responsible and sustainable ecosystem
                                                </h4>
                                                <p className="text-gray-500 text-sm md:text-base">
                                                    To build a responsible and sustainable ecosystem that
                                                    ensures accessibility for all.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className="relative bg-gradient-to-br from-white/90 to-[#f5faff]/90 shadow-blue-100 shadow-xl rounded-2xl p-6 md:p-8 text-left overflow-hidden"
                                style={{
                                    backgroundImage: `url(${whypartnerwithus})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-white/80 rounded-2xl"></div>

                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
                                        Your Success is Our Vision
                                    </h3>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <FaGlobeAmericas className="text-white w-18 h-12 mt-1 bg-gradient-to-br from-[#007bff] to-[#17a2b8] p-3 rounded-xl" />
                                            <div>
                                                <p className="text-gray-500 text-sm md:text-base">
                                                    To be a global leader in sustainable food innovation,
                                                    delivering smart solutions that nourish lives, reduce
                                                    waste, and protect our planet.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="industry" className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-16 px-6">
                        <div className="max-w-6xl mx-auto">
                              {/* Header */}
                              <div className="text-center mb-12">
                                    <div className="inline-block bg-white shadow-sm rounded-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 mb-4">
                                          🏭 Industry Expertise
                                    </div>
                                    <h2 className="text-5xl lg:text-[55px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#212529] via-[#007BFF] to-[#28A745] mb-8 ">
                                          Industries We <br />Serve
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                          Delivering tailored solutions across diverse sectors
                                    </p>
                              </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-xl border-2 border-gray-100 ${industry.hoverBorder} hover:shadow-lg transition-all duration-300 cursor-pointer group text-center`}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 mx-auto mb-5 text-white bg-gradient-to-br ${industry.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {industry.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-[16px] font-semibold text-gray-800 leading-tight group-hover:text-gray-900 transition-colors">
                                    {industry.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                            <h4 className="text-2xl font-bold text-blue-600 mb-1">6+</h4>
                            <p className="text-gray-600 text-xs">Industries</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                            <h4 className="text-2xl font-bold text-green-600 mb-1">200+</h4>
                            <p className="text-gray-600 text-xs">Projects</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                            <h4 className="text-2xl font-bold text-purple-600 mb-1">95%</h4>
                            <p className="text-gray-600 text-xs">Retention</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                            <h4 className="text-2xl font-bold text-cyan-600 mb-1">24/7</h4>
                            <p className="text-gray-600 text-xs">Support</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="relative bg-gradient-to-br from-[#090e2d] via-[#314497] to-[#513c6a] text-white py-20 px-6 overflow-hidden">
                {/* Floating Shapes */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/30 rounded-full"></div>
                <div className="absolute bottom-16 right-16 w-16 h-16 border border-purple-500/30 rotate-45"></div>
                <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/40 rounded-full"></div>

                <div className="relative max-w-7xl mx-auto text-center">
                    {/* Tagline */}
                    <div className="inline-block bg-[#0c1631] border-2 border-blue-700 text-blue-500 rounded-full px-5 py-1 text-sm font-medium shadow mb-6">
                        🚀 Ready to Launch Your Digital Future?
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl bg-gradient-to-r from-sky-200 to-purple-100 bg-clip-text text-transparent md:text-6xl font-bold mb-4">
                        Let’s Build{" "} <br />
                        <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                            Tomorrow
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-14">
                        Transform your vision into reality with our{" "}
                        <span className="text-sky-400 font-semibold">cutting-edge solutions</span>.
                        The future starts with a single conversation.
                    </p>

                    {/* 3 Cards Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 max-w-5xl mx-auto px-4">
                        {/* Card 1 */}
                        <div className="bg-[#121c3b] rounded-2xl shadow-lg p-8 hover:shadow-xl transition items-center text-center flex flex-col">
                            <FaBolt className="text-sky-400 text-3xl bg-blue-100 w-16 h-16 p-3 rounded-xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Instant Connect</h3>
                            <p className="text-gray-400 mb-4">
                                Skip the wait. Connect directly with our experts right now.
                            </p>
                            <a
                                href="tel:+917065300376" // ✅ opens phone dialer
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 text-white font-medium shadow hover:opacity-90"
                            >
                                <FaPhoneAlt /> Call Now
                            </a>
                            <p className="mt-2 text-sm text-sky-300">+91-7065300376</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#121c3b] rounded-2xl shadow-lg p-8 hover:shadow-xl transition items-center text-center flex flex-col">
                            <FaEnvelope className="text-purple-400 bg-purple-100 w-16 h-16 p-3 rounded-xl text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Strategic Discussion</h3>
                            <p className="text-gray-400 mb-4">
                                Deep dive into your vision with our solution architects.
                            </p>
                            <a

                                href="mailto:dpttechnologiespvtltd@gmail.com?subject=Inquiry%20About%20Your%20Services&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about..."
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow hover:opacity-90"
                            >
                                <FaEnvelope /> Email Us
                            </a>
                            <p className="mt-2 text-sm text-purple-300">dpttechnologiespvtltd@gmail.com</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#121c3b] rounded-2xl shadow-lg p-8 hover:shadow-xl transition items-center text-center flex flex-col">
                            <FaMapMarkerAlt className="text-blue-400 bg-blue-100 w-16 h-16 p-3 rounded-xl text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Meet in Person</h3>
                            <p className="text-gray-400 mb-4">
                                Visit our innovation hub in the heart of Gurgaon.
                            </p>
                            <a
                                href="https://www.google.com/maps?q=Space+I-Tech+Park,+Sector-49,+Gurgaon"
                                target="_blank"
                                rel="noopener noreferrer"
                                // ✅ opens Google Maps directly
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow hover:opacity-90"
                            >
                                <FaMapMarkerAlt /> Our Location
                            </a>
                            <p className="mt-2 text-sm text-blue-300">
                                Space I-Tech Park, Sector-49, Gurgaon
                            </p>
                        </div>
                    </div>


                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
                        <a
                            href="#industry"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 font-medium flex items-center gap-2 shadow hover:opacity-90"
                        >
                            <FaRocket /> Start Your Journey
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-3 rounded-full border border-white/30 font-medium flex items-center gap-2 hover:bg-white hover:text-blue-900 transition"
                        >
                            <FaEye /> Explore Our Work
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-5xl font-bold text-sky-400">500+</h3>
                            <p className="text-gray-300 text-sm">Digital Transformations</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-purple-400">99.9%</h3>
                            <p className="text-gray-300 text-sm">Uptime Delivered</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-indigo-400">24/7</h3>
                            <p className="text-gray-300 text-sm">Expert Support</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-green-400">5★</h3>
                            <p className="text-gray-300 text-sm">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
