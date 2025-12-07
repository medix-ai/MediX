"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface SolutionLayoutProps {
  hero: {
    title: string;
    subtitle: string;
  };
  problem: {
    title: string;
    content: string;
  };
  solution: {
    title: string;
    items: string[];
  };
  mvp: {
    title: string;
    items: string[];
  };
  roadmap: {
    title: string;
    items: string[];
  };
  value: {
    title: string;
    items: string[];
  };
}

export default function SolutionLayout({
  hero,
  problem,
  solution,
  mvp,
  roadmap,
  value,
}: SolutionLayoutProps) {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4">
              {hero.title}
            </h1>
            <p className="text-2xl text-gray-600">{hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Demo Placeholder */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-video flex items-center justify-center">
            <span className="text-gray-500 text-lg">데모 영상 영역</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-6">{problem.title}</h2>
          <p className="text-xl text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-mint">
            {problem.content}
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-6">{solution.title}</h2>
          <ul className="space-y-4">
            {solution.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-mint mr-3 text-xl">✓</span>
                <span className="text-gray-700 text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* MVP Spec Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-6">{mvp.title}</h2>
          <div className="bg-navy text-white rounded-xl p-8">
            <ul className="space-y-3">
              {mvp.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-mint mr-3">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-6">{roadmap.title}</h2>
          <div className="space-y-4">
            {roadmap.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-l-4 border-mint shadow-sm"
              >
                <span className="text-gray-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Value Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-6">{value.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {value.items.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-mint/10 to-mint/5 p-6 rounded-xl border border-mint/20"
              >
                <p className="text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">PoC 문의</h2>
          <p className="text-xl text-gray-300 mb-8">
            임상 검증 및 PoC 협업을 원하시면 연락주세요.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-mint text-navy font-semibold rounded-lg hover:bg-mint-light transition-colors"
          >
            Contact for PoC →
          </Link>
        </div>
      </section>
    </div>
  );
}

