"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import logo from "@/assets/logo/logo.jpeg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/mission-vision', label: 'Mission & Vision' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/99 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b border-slate-100/50'
          : 'bg-white/95 backdrop-blur-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative w-14 h-12 rounded-xl overflow-hidden ring-2 ring-orange-100/50 group-hover:ring-orange-200/80 transition-all duration-300">
                <Image src={logo} alt="ECOSEN Logo" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900 leading-tight tracking-tight">
                ECOSEN
              </span>
              <span className="text-xs font-bold text-orange-600 leading-tight tracking-wider">
                INC LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                  isActive(link.href)
                    ? 'text-orange-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.href) ? (
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-lg"></span>
                ) : (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-7 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_8px_32px_rgba(234,88,12,0.4)] relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-slate-100/80 transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-800 group-hover:text-orange-600 transition-colors duration-300" />
            ) : (
              <Menu className="w-5 h-5 text-slate-800 group-hover:text-orange-600 transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200/80 bg-gradient-to-b from-white/50 to-white/80 backdrop-blur-sm animate-slide-down">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-3.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-orange-700 bg-gradient-to-r from-orange-50 to-orange-100/60'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-6 mt-6 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3.5 rounded-lg font-bold text-sm text-center transition-all duration-300 shadow-[0_4px_16px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_24px_rgba(234,88,12,0.4)]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </header>
  );
}
