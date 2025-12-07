"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutTech() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About our
              <br />
              Technology
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              MediX는 의사와 실제 사용자와 함께 제품을 만들고 검증합니다. 정확도보다
              일관성, 논문보다 현장 활용을 최우선으로 합니다.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
            >
              Learn more
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 aspect-square flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl mb-4 emoji">🔬</div>
              <div className="text-2xl font-bold text-gray-800">
                Clinical Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

