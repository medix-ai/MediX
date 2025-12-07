"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // SkinCoach 외부 링크 (환경변수로 관리 가능)
  const skinCoachUrl = process.env.NEXT_PUBLIC_SKINCOACH_URL || "#";

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full">
            <span className="text-blue-600 text-sm font-medium">
              Research × Clinical AI × Consumer AI
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            From Insight to Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            의료와 일상에 신뢰 가능한 AI
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link
              href="/research"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Research 둘러보기
            </Link>
            <a
              href={skinCoachUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              SkinCoach 시작하기
            </a>
          </div>

          <p className="text-sm text-gray-500">
            의사가 믿고, 사용자가 체감하는 AI
          </p>
        </motion.div>
      </div>
    </section>
  );
}
