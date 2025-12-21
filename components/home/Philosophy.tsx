"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Clinical fidelity",
    description: "임상 현장에서 검증된 정확도와 신뢰성",
    icon: "🏥",
  },
  {
    title: "Scientific rigor",
    description: "논문과 학회를 통한 과학적 검증",
    icon: "📚",
  },
  {
    title: "Practical deployment",
    description: "실제 병원 환경에서 바로 사용 가능한 솔루션",
    icon: "⚡",
  },
];

export default function Philosophy() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">MediX의 철학</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            정확성·일관성·임상 신뢰를 기반으로 하는 실전형 AI 기업
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="text-4xl mb-4 emoji">{principle.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
