"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-navy mb-6">Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              의료와 일상에 신뢰 가능한 AI를 제공하여, 더 정확하고 일관된 의사결정을 돕습니다.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-navy mb-6">Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Research와 Service를 통해 임상 현장과 일상 생활 모두에서 실질적인 가치를 창출합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

