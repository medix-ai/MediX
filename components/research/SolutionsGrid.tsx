"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    name: "SonoCube",
    icon: "🫀",
    description: "2D만으로 3D 심장 구조 재구성",
    features: [
      "EF ±5%p 정확도",
      "온프레미스 엣지 추론 (지연 <100ms)",
      "벤더 비종속 프리핸드 3D",
    ],
    href: "/research/sonocube",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "VentricuLab",
    icon: "❤️‍🔥",
    description: "MRI LV/RV endo/epi 자동 분할",
    features: [
      "EF ±3%p",
      "Scar/LGE 분석",
      "30초 내 자동 분석",
    ],
    href: "/research/ventriculab",
    color: "from-red-500 to-red-600",
  },
  {
    name: "AxisSight",
    icon: "🦴",
    description: "Cobb 각 자동 계산",
    features: [
      "오차 ≤ ±3°",
      "판독시간 90% 단축",
      "X-ray 기반 자동 계측",
    ],
    href: "/research/axissight",
    color: "from-purple-500 to-purple-600",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-br ${solution.color} p-8 text-white`}>
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                <p className="text-white/90">{solution.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-mint mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.href}
                  className="block w-full text-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

