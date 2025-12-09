"use client";

import { motion } from "framer-motion";

export default function CoreMessage() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            정확하게, 일관되게, 그리고 실제로 사용되도록
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            MediX는 연구·임상·현장을 잇는 실전형 AI를 개발합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
