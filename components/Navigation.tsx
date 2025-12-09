"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/medix_logo.png"
              alt="MediX"
              width={120}
              height={40}
              className="object-contain h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-navy hover:text-mint transition-colors">
              About MediX
            </Link>
            
            <div className="relative group">
              <button className="text-navy hover:text-mint transition-colors flex items-center">
                Research Division
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/research" className="block px-4 py-3 hover:bg-gray-50 rounded-t-lg">
                  Overview
                </Link>
                <Link href="/research/sonocube" className="block px-4 py-3 hover:bg-gray-50">
                  SonoCube
                </Link>
                <Link href="/research/ventriculab" className="block px-4 py-3 hover:bg-gray-50">
                  VentricuLab
                </Link>
                <Link href="/research/axissight" className="block px-4 py-3 hover:bg-gray-50 rounded-b-lg">
                  AxisSight
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-navy hover:text-mint transition-colors flex items-center">
                Service Division
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <Link href="/service/skincoach" className="block px-4 py-3 hover:bg-gray-50 rounded-lg">
                  SkinCoach
                </Link>
              </div>
            </div>

            <Link href="/resources" className="text-navy hover:text-mint transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-navy hover:text-mint transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-navy"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 space-y-4">
              <Link href="/about" className="block text-navy hover:text-mint">
                About MediX
              </Link>
              <div>
                <button
                  onClick={() => setIsResearchOpen(!isResearchOpen)}
                  className="flex items-center justify-between w-full text-navy hover:text-mint"
                >
                  Research Division
                  <svg className={`w-4 h-4 transition-transform ${isResearchOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isResearchOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/research" className="block text-gray-600 hover:text-mint">
                      Overview
                    </Link>
                    <Link href="/research/sonocube" className="block text-gray-600 hover:text-mint">
                      SonoCube
                    </Link>
                    <Link href="/research/ventriculab" className="block text-gray-600 hover:text-mint">
                      VentricuLab
                    </Link>
                    <Link href="/research/axissight" className="block text-gray-600 hover:text-mint">
                      AxisSight
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="flex items-center justify-between w-full text-navy hover:text-mint"
                >
                  Service Division
                  <svg className={`w-4 h-4 transition-transform ${isServiceOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServiceOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/service/skincoach" className="block text-gray-600 hover:text-mint">
                      SkinCoach
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/resources" className="block text-navy hover:text-mint">
                Resources
              </Link>
              <Link href="/contact" className="block text-navy hover:text-mint">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

