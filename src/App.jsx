import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState("General");
  const [expandedFAQ, setExpandedFAQ] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  // --- 1. ADD STATE FOR MOBILE MENU ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // ... (rest of your component code, like categoryIcons, tabs, faqs)
  const categoryIcons = {
    General: (
      <svg
        className="w-5 h-5 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    Account: (
      <svg
        className="w-5 h-5 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    "Wallet and Asset": (
      <svg
        className="w-5 h-5 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    Trading: (
      <svg
        className="w-5 h-5 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
        />
      </svg>
    ),
    Disputes: (
      <svg
        className="w-5 h-5 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    Advertising: (
      <svg
        className="w-5 h-5 text-gray-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
  };
  const tabs = [
    "General",
    "Account",
    "Wallet and Asset",
    "Trading",
    "Disputes",
    "Advertising",
  ];
  const faqs = [
    {
      question: "What is A-Crypto?",
      answer:
        "A-Crypto is a leading crypto trading platform offering a wide range of services including P2P trading, token swaps, and more.\n\nOur platform is designed to provide a secure, user-friendly, and efficient trading experience for both beginners and experienced traders.",
    },
    {
      question: "How does A-Crypto ensure the security of my funds?",
      answer:
        "We implement industry-leading security measures including cold storage, multi-signature wallets, and regular security audits.",
    },
    {
      question: "What cryptocurrencies can I trade on A-Crypto?",
      answer:
        "A-Crypto supports a wide range of cryptocurrencies including Bitcoin, Ethereum, and many other popular altcoins.",
    },
    {
      question: "Is A-Crypto available worldwide?",
      answer:
        "Yes, A-Crypto is available in most countries worldwide, with some restrictions based on local regulations.",
    },
    {
      question: "What are the fees for using A-Crypto?",
      answer:
        "Our fee structure is competitive and transparent. Trading fees start from 0.1% and vary based on your trading volume.",
    },
    {
      question: "How can I get started with A-Crypto?",
      answer:
        "Simply sign up for an account, complete the verification process, and you can start trading immediately.",
    },
    {
      question: "Does A-Crypto offer customer support?",
      answer:
        "Yes, we offer 24/7 customer support through live chat, email, and our comprehensive help center.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between py-6">
            <div className="text-white text-xl font-semibold">A-Crypto</div>

            {/* --- THIS IS THE ORIGINAL DESKTOP MENU --- */}
            {/* It's correctly hidden on mobile and shown on desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white font-medium text-sm border-b-2 border-white pb-1"
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden sm:block border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-purple-700 transition-all duration-300">
                Sign In
              </button>
              <button className="hidden sm:block bg-gradient-to-r from-[rgba(239,231,244,1)] to-[rgba(207,180,221,1)] text-purple-700 px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300">
                Register
              </button>

              {/* --- 2. ADD HAMBURGER BUTTON (VISIBLE ONLY ON MOBILE) --- */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white"
                >
                  {isMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* --- 3. ADD MOBILE MENU (CONDITIONAL) --- */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-900/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white font-medium text-sm border-b-2 border-white pb-1"
              >
                Contact Us
              </a>
              <div className="flex flex-col items-center space-y-3 pt-4 sm:hidden">
                <button className="border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-purple-700 transition-all duration-300 w-32">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-[rgba(239,231,244,1)] to-[rgba(207,180,221,1)] text-purple-700 px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 w-32">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* --- The rest of your code remains the same --- */}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgba(150,92,182,1)] to-[rgba(99,12,146,1)] text-white pt-32 pb-24 relative overflow-hidden">
        {/* Dotted patterns overlay - matching the image */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Multiple layered dot patterns to create the effect */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "10px 10px",
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "20px 20px",
            }}
          ></div>

          {/* Larger circular dot patterns for depth */}
          <div className="absolute top-10 left-10 w-96 h-96 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
          <div className="absolute bottom-10 right-10 w-80 h-80 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)`,
                backgroundSize: "35px 35px",
              }}
            ></div>
          </div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)`,
                backgroundSize: "25px 25px",
              }}
            ></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
            viverra orci diam. Nibh est vitae suspendisse parturient sed lorem
            eu.
          </p>
        </div>
      </section>
      {/* Get In Touch Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Facilisis commodo mattis neque nulla ultrices mattis sed.
                Ullamcorper tempus mattis ac tristique gravida ornare faucibus
                suspendisse.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Writing your message here..."
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              {/* Purple Rectangle/Map Placeholder */}
              <div className="bg-[rgba(176,163,255,1)] rounded-xl h-64 flex items-center justify-center">
                {/* This is the placeholder from the design */}
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgba(99,12,146,1)] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">+123 456 789 101</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[rgba(99,12,146,1)] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday / 8AM to 5PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-semibold text-gray-900 mb-4">Follow Us:</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[rgba(99,12,146,1)] text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[rgba(99,12,146,1)] text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[rgba(99,12,146,1)] text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[rgba(99,12,146,1)] text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Centered FAQs title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
          </div>

          {/* Search bar */}
          <div className="flex justify-end mb-8">
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Category Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-md shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-3 border-b border-gray-100 last:border-b-0 ${
                      activeTab === tab
                        ? "bg-[rgba(239,231,244,1)] text-purple-700"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {/* Render specific icon based on tab */}
                    {React.cloneElement(categoryIcons[tab], {
                      className: `w-5 h-5 flex-shrink-0 ${
                        activeTab === tab ? "text-purple-700" : "text-gray-400"
                      }`,
                    })}
                    <span>{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3">
              {/* FAQ Items */}
              <div>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <button
                      onClick={() =>
                        setExpandedFAQ(expandedFAQ === index ? null : index)
                      }
                      className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-base font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          expandedFAQ === index
                            ? "rotate-180 text-purple-600"
                            : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {expandedFAQ === index && (
                      <div className="pb-4 text-gray-600 leading-relaxed">
                        {faq.answer.split("\n\n").map((paragraph, i) => (
                          <p key={i} className="mb-3">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center pt-4">
                <button className="text-gray-400 text-sm hover:text-gray-600 transition-colors">
                  Load more ...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[rgba(78,0,98,1)] to-[rgba(34,0,118,1)] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">A-Crypto</h3>
              <p className="text-sm text-purple-200 mb-6 leading-relaxed">
                Trade Crypto easily anytime, anywhere.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Terms of use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Businesses */}
            <div>
              <h4 className="font-semibold mb-4">Businesses</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Prime
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Custody
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Asset Hub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Commerce
                  </a>
                </li>
              </ul>
            </div>

            {/* Exchange */}
            <div>
              <h4 className="font-semibold mb-4">Exchange</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Exchange Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Margin Trading
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Derivatives Trading
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Trading Arena
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-purple-200">Copyright 2021, Cryptous</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Social Media Icons */}
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;