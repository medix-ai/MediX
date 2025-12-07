"use client";

import { motion } from "framer-motion";

const resources = [
  {
    title: "데모 영상",
    description: "SonoCube, VentricuLab, AxisSight 실제 작동 데모",
    icon: "🎥",
  },
  {
    title: "White Papers",
    description: "기술 및 임상 검증 결과를 담은 PDF 문서",
    icon: "📄",
  },
  {
    title: "IR 자료",
    description: "회사 소개 및 투자자용 요약 Deck",
    icon: "📊",
  },
  {
    title: "기술 문서",
    description: "API 문서 및 기술 명세서",
    icon: "📚",
  },
  {
    title: "Clinical FAQ",
    description: "임상 관련 자주 묻는 질문",
    icon: "❓",
  },
];

export default function ResourcesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-5xl mb-4 emoji">{resource.icon}</div>
              <h3 className="text-2xl font-bold text-navy mb-3">{resource.title}</h3>
              <p className="text-gray-700">{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

