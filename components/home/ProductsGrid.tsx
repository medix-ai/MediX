"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const products = [
  {
    id: "sonocube",
    title: "SonoCube",
    logo: `${basePath}/logos/sono_logo.png`,
    color: "purple",
    subtitle: "2D Ultrasound, Reimagined in 3D",
    desc: "2D 심초음파만으로 3D 심장 구조를 재구성합니다.",
    href: "/research/sonocube",
  },
  {
    id: "ventriculab",
    title: "VentricuLab",
    logo: `${basePath}/logos/ventri_logo.png`,
    color: "blue",
    subtitle: "EF · Volumes · Scar in 30 Seconds",
    desc: "MRI 기반 자동 분할로 30초 내에 분석을 완료합니다.",
    href: "/research/ventriculab",
  },
  {
    id: "axissight",
    title: "AxisSight",
    logo: `${basePath}/logos/axis_logo.png`,
    color: "teal",
    subtitle: "Your Spine, Quantified",
    desc: "X-ray 영상에서 Cobb 각을 자동으로 계산합니다.",
    href: "/research/axissight",
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            MediX AI Solutions
          </h2>
          <p className="text-gray-600">심장·척추 의료 AI부터 스킨케어 AI까지</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => {
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all group"
              >
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src={product.logo}
                    alt={`${product.title} 로고`}
                    width={120}
                    height={120}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{product.subtitle}</p>
                <p className="text-gray-600 mb-6">{product.desc}</p>

                <Link
                  href={product.href}
                  className={`text-sm font-medium flex items-center gap-1 ${
                    product.color === "purple"
                      ? "text-purple-600"
                      : product.color === "blue"
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

