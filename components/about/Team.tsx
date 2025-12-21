"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Team.MediX</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            AI 전공 4학년 대표와 의학과 4학년 팀원이 함께하고 있습니다.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg overflow-hidden"
        >
          <div className="rounded-lg overflow-hidden">
            <Image
              src={`${basePath}/images/team_medix_main.png`}
              alt="MediX 팀 소개"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

