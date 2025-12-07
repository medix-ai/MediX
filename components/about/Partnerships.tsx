"use client";

import { motion } from "framer-motion";

export default function Partnerships() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Clinical Partnerships
          </h2>
          <p className="text-xl text-gray-300">
            임상 검증을 함께하는 파트너 기관들
          </p>
        </motion.div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <p className="text-gray-300 text-center">
            Clinical partners 리스트 및 로고 영역
          </p>
        </div>
      </div>
    </section>
  );
}

