"use client";

import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Team</h2>
          <p className="text-xl text-gray-600">임상과 기술을 연결하는 전문가들</p>
        </motion.div>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <p className="text-gray-700 text-center">
            팀 소개 콘텐츠 영역 (Founder 사진/소개 등)
          </p>
        </div>
      </div>
    </section>
  );
}

