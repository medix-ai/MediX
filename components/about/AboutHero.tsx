"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-navy to-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About MediX</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            의료와 일상을 연결하는 정량화 중심 AI 기업
          </p>
        </motion.div>
      </div>
    </section>
  );
}

