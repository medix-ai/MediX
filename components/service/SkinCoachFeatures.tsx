"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "성분 분석 기반 맞춤 루틴",
    description: "INCI 기반 성분 데이터베이스를 활용한 정확한 제품 분석",
  },
  {
    title: "위험 성분 조합 자동 경고",
    description: "피부에 해로운 성분 조합을 실시간으로 감지하고 알림",
  },
  {
    title: "예산 기반 최적화 제품 추천",
    description: "사용자의 예산에 맞춘 최적의 스킨케어 제품 추천",
  },
  {
    title: "AM/PM 루틴 자동 생성",
    description: "아침과 저녁에 맞춘 개인화된 스킨케어 루틴 제공",
  },
  {
    title: "보유 제품 100% 활용 가능",
    description: "이미 가지고 있는 제품을 최대한 활용하는 루틴 설계",
  },
];

export default function SkinCoachFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            SkinCoach 핵심 메시지
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
            >
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

