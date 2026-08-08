"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-dark/90 backdrop-blur-md py-2 shadow-lg border-b border-white/5" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <img src="/images/logo.svg" className="h-14 w-auto" alt="Cyber Solutions - Industrial Automation & Digital Transformation" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className={`font-semibold transition-colors ${pathname === "/" ? "text-primary" : "text-white hover:text-primary"}`}>Home</Link>
          <Link href="/about" className={`font-semibold transition-colors ${pathname === "/about" ? "text-primary" : "text-white hover:text-primary"}`}>About</Link>
          
          {/* Dropdown */}
          <div className="relative group py-2">
            <button className="font-semibold text-white hover:text-primary transition-colors flex items-center">
              Offered Solutions
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full left-0 mt-0 w-64 bg-navy-light glass-dark border border-white/10 rounded-xl shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 overflow-hidden">
              <Link href="/solutions#automation" className="px-4 py-2.5 hover:bg-white/10 text-sm font-medium text-gray-light hover:text-white transition-colors">Industrial Automation</Link>
              <Link href="/solutions#plc" className="px-4 py-2.5 hover:bg-white/10 text-sm font-medium text-gray-light hover:text-white transition-colors">PLC & SCADA</Link>
              <Link href="/solutions#instrumentation" className="px-4 py-2.5 hover:bg-white/10 text-sm font-medium text-gray-light hover:text-white transition-colors">Instrumentation</Link>
              <Link href="/solutions#cyber" className="px-4 py-2.5 hover:bg-white/10 text-sm font-medium text-gray-light hover:text-white transition-colors">OT Cybersecurity</Link>
              <Link href="/solutions#smart" className="px-4 py-2.5 hover:bg-white/10 text-sm font-medium text-gray-light hover:text-white transition-colors">Smart Infrastructure</Link>
              <Link href="/solutions#datacenter" className="px-4 py-2.5 hover:bg-white/10 text-sm font-medium text-gray-light hover:text-white transition-colors">Data Centers</Link>
              <Link href="/solutions#network" className="px-4 py-2.5 hover:bg-white/10 text-sm font-medium text-gray-light hover:text-white transition-colors">Industrial Networking</Link>
            </div>
          </div>

          <Link href="/industries" className={`font-semibold transition-colors ${pathname === "/industries" ? "text-primary" : "text-white hover:text-primary"}`}>Industries</Link>
          <Link href="/projects" className={`font-semibold transition-colors ${pathname === "/projects" ? "text-primary" : "text-white hover:text-primary"}`}>Projects</Link>
          <Link href="/insights" className={`font-semibold transition-colors ${pathname === "/insights" ? "text-primary" : "text-white hover:text-primary"}`}>Insights</Link>
          <Link href="/careers" className={`font-semibold transition-colors ${pathname === "/careers" ? "text-primary" : "text-white hover:text-primary"}`}>Careers</Link>
          
          <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-glow transform hover:-translate-y-1 ml-4">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-navy z-40 lg:hidden overflow-y-auto px-6 pt-28 flex flex-col space-y-6 pb-24">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-2xl ${pathname === "/" ? "text-primary" : "text-white"}`}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-2xl ${pathname === "/about" ? "text-primary" : "text-white"}`}>About</Link>
          
          <div className="font-semibold text-white">
            <button 
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)} 
              className="flex justify-between items-center w-full text-left text-2xl focus:outline-none"
            >
              Offered Solutions
              <svg className={`w-6 h-6 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isMobileSolutionsOpen && (
              <div className="flex flex-col space-y-4 pl-4 border-l-2 border-white/10 mt-5">
                <Link href="/solutions#automation" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-light font-medium text-lg">Industrial Automation</Link>
                <Link href="/solutions#plc" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-light font-medium text-lg">PLC & SCADA</Link>
                <Link href="/solutions#instrumentation" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-light font-medium text-lg">Instrumentation</Link>
                <Link href="/solutions#cyber" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-light font-medium text-lg">OT Cybersecurity</Link>
                <Link href="/solutions#smart" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-light font-medium text-lg">Smart Infrastructure</Link>
                <Link href="/solutions#datacenter" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-light font-medium text-lg">Data Centers</Link>
                <Link href="/solutions#network" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-light font-medium text-lg">Industrial Networking</Link>
              </div>
            )}
          </div>
          
          <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-2xl ${pathname === "/industries" ? "text-primary" : "text-white"}`}>Industries</Link>
          <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-2xl ${pathname === "/projects" ? "text-primary" : "text-white"}`}>Projects</Link>
          <Link href="/insights" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-2xl ${pathname === "/insights" ? "text-primary" : "text-white"}`}>Insights</Link>
          <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className={`font-semibold text-2xl ${pathname === "/careers" ? "text-primary" : "text-white"}`}>Careers</Link>
          
          <div className="pt-6">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block bg-primary text-center text-white px-6 py-4 rounded-full font-semibold text-xl">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
