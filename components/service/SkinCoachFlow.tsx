"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "1", title: "피부 타입 입력", description: "사용자의 피부 타입과 고민 입력" },
  { number: "2", title: "제품 등록", description: "OCR/바코드로 보유 제품 등록" },
  { number: "3", title: "AI 분석", description: "성분 분석 및 위험도 평가" },
  { number: "4", title: "루틴 생성", description: "개인화된 AM/PM 루틴 자동 생성" },
  { number: "5", title: "제품 추천", description: "예산 기반 최적 제품 추천" },
  { number: "6", title: "루틴 히스토리", description: "변화 추적 및 루틴 최적화" },
];

export default function SkinCoachFlow() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            사용자 흐름
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

