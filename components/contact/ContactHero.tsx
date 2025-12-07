"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-navy to-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            PoC 문의, 연구 협업 등 다양한 문의를 환영합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

