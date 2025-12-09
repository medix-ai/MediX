"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    year: "2025",
    items: [
      "제9회 디지털 헬스케어 MEDICAL HACK 최우수상 (부산대학교총장상)",
      "건양대학교의료원 KHD (Konyang Health Datathon) 최우수상",
      "서울 AI 허브 - Seoul AI Young Track (SAY 트랙) | 최종 선정 및 수료",
      "연세대학교 Y-Compass 학생창업팀 | 최종 선정 (A등급 수료)",
      "학생창업유망팀 U 300+ | 최종 선정 및 수료 (교육부장관 명의)",
    ],
  },
];

export default function History() {
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
            History & Achievements
          </h2>
          <p className="text-xl text-gray-600">회사 역사 및 주요 성과 타임라인</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-mint to-mint-dark rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="space-y-4">
                    {achievement.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-gray-50 rounded-lg p-4 border-l-4 border-mint"
                      >
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold text-navy">
                            [{achievement.year}]
                          </span>{" "}
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
