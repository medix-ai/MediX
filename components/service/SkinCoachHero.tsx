"use client";

import { motion } from "framer-motion";

export default function SkinCoachHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
            과학 기반 AI 스킨 루틴
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            매일 더 정확하게.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">SkinCoach UI 데모 캡처</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

