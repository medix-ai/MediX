"use client";

import { motion } from "framer-motion";

export default function CoreMessage() {
  return (
    <section className="py-16 px-6 bg-navy text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            정확도와 일관성, 논문과 현장 활용
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            MediX는 의사와 실제 사용자와 함께 제품을 만들고 검증합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
