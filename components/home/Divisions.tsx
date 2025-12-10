"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Divisions() {
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
            MediX의 2가지 축
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Research와 Service가 하나의 브랜드로 통합되어 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Research Division */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-navy/5 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl emoji">💙</span>
              </div>
              <h3 className="text-2xl font-bold text-navy">Research Division</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              정량화·시각화·일관성을 핵심으로 하는 <strong>심장·척추 의료 AI 연구팀</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-mint mr-2">•</span>
                <span className="text-gray-700"><strong>SonoCube:</strong> 2D 심초음파 → 3D·EF 자동화</span>
              </li>
              <li className="flex items-start">
                <span className="text-mint mr-2">•</span>
                <span className="text-gray-700"><strong>VentricuLab:</strong> MRI EF·Volumes·Scar 자동 분석</span>
              </li>
              <li className="flex items-start">
                <span className="text-mint mr-2">•</span>
                <span className="text-gray-700"><strong>AxisSight:</strong> X-ray Cobb 자동 계측</span>
              </li>
            </ul>
            <Link
              href="/research"
              className="inline-block px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors font-semibold"
            >
              View Research Portfolio →
            </Link>
          </motion.div>

          {/* Service Division */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl emoji">💜</span>
              </div>
              <h3 className="text-2xl font-bold text-navy">Service Division</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              AI가 사용자 개인의 피부 정보를 해석하고 최적 루틴을 설계하는 <strong>SkinCoach</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-mint mr-2">•</span>
                <span className="text-gray-700">성분 분석 기반 맞춤 루틴</span>
              </li>
              <li className="flex items-start">
                <span className="text-mint mr-2">•</span>
                <span className="text-gray-700">위험 성분 조합 자동 경고</span>
              </li>
              <li className="flex items-start">
                <span className="text-mint mr-2">•</span>
                <span className="text-gray-700">예산 기반 최적화 제품 추천</span>
              </li>
            </ul>
            <a
              href="https://medix-ai.github.io/skincoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-mint text-navy rounded-lg hover:bg-mint-light transition-colors font-semibold"
            >
              Start SkinCoach →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

