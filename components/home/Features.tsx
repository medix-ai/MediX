"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description: "실시간 의료 영상 분석으로 즉각적인 임상 정보를 제공합니다.",
  },
  {
    icon: "📈",
    title: "Automated Reports",
    description: "자동화된 리포트 생성으로 판독 시간을 90% 단축합니다.",
  },
  {
    icon: "🎯",
    title: "Smart Precision",
    description: "일관된 정확도로 임상 신뢰도를 향상시킵니다.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full mb-4">
            <span className="text-gray-600 text-sm font-medium">Features</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Streamline Medical AI with
            <br />
            Smart Features
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="mb-6">
                <div className="text-3xl mb-3 emoji">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

