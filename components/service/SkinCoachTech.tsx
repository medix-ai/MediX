"use client";

import { motion } from "framer-motion";

const techFeatures = [
  {
    title: "INCI 기반 성분 임베딩",
    description: "국제 표준 성분 명명법을 활용한 정확한 성분 인식",
  },
  {
    title: "피부 고민별 성분 가중치 시스템",
    description: "사용자의 피부 고민에 맞춘 성분 중요도 계산",
  },
  {
    title: "Risk Detection Engine",
    description: "위험한 성분 조합을 실시간으로 감지하는 엔진",
  },
  {
    title: "Personalization Graph",
    description: "사용자 데이터를 기반으로 한 개인화 그래프 모델",
  },
];

export default function SkinCoachTech() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">기술 설명</h2>
          <p className="text-xl text-gray-300">과학적 근거 기반의 AI 기술</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-mint mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

