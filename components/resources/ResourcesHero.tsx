"use client";

import { motion } from "framer-motion";

export default function ResourcesHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">Resources</h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            데모 영상, 화이트페이퍼, 기술 문서 등 다양한 자료를 확인하세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

