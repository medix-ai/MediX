"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            History & Achievements
          </h2>
        </motion.div>
        <div className="bg-gray-50 rounded-xl p-8">
          <p className="text-gray-700 text-center">
            회사 역사 및 주요 성과 타임라인
          </p>
        </div>
      </div>
    </section>
  );
}

