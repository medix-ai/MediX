"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-sm"
        >
          <div className="inline-block px-4 py-1.5 bg-purple-50 rounded-full mb-6">
            <span className="text-purple-600 text-sm font-medium">Get Started</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            정확도보다 일관성,
            <br />
            논문보다 현장 활용
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            MediX는 의사와 실제 사용자와 함께 제품을 만들고 검증합니다. PoC 문의, 연구
            협업, 제품 데모를 경험해보세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              문의하기
            </Link>
            <Link
              href="/resources"
              className="px-8 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              데모 보기
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

