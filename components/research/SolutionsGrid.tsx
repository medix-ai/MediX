"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const solutions = [
  {
    id: "sonocube",
    title: "SonoCube",
    logo: `${basePath}/logos/sono_logo.png`,
    color: "purple",
    subtitle: "2D Ultrasound, Reimagined in 3D",
    desc: "2D 심초음파만으로 3D 심장 구조를 재구성합니다.",
    href: "/research/sonocube",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
          {solutions.map((solution) => {
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all group"
              >
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src={solution.logo}
                    alt={`${solution.title} 로고`}
                    width={120}
                    height={120}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{solution.subtitle}</p>
                <p className="text-gray-600 mb-6">{solution.desc}</p>

                <Link
                  href={solution.href}
                  className={`text-sm font-medium flex items-center gap-1 ${
                    solution.color === "purple"
                      ? "text-purple-600"
                      : solution.color === "blue"
                      ? "text-blue-600"
                      : "text-teal-600"
                  } group-hover:gap-2 transition-all`}
                >
                  자세히 보기
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
