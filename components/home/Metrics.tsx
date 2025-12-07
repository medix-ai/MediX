"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "3개", label: "의료기관 PoC 진행", icon: "🏥" },
  { value: "3건", label: "2026 의료AI 학회 발표 예정", icon: "📊" },
  { value: "5,000+", label: "AI 기반 루틴 추천 사용자", icon: "👥" },
  { value: "3대", label: "의료 AI 제품 파이프라인 보유", icon: "🔬" },
];

export default function Metrics() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">지표/성과 요약</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{metric.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-mint mb-2">
                {metric.value}
              </div>
              <div className="text-gray-300 text-lg">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

