"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

const skinCoachUrl = "https://medix-ai.github.io/skincoach/";

const products = [
  {
    id: "sonocube",
    title: "SonoCube",
    color: "blue",
    subtitle: "2D Ultrasound, Reimagined in 3D",
    desc: "2D 심초음파만으로 3D 심장 구조를 재구성하고 EF를 자동으로 계산합니다.",
    href: "/research/sonocube",
    icon: Heart,
    gradient: "from-blue-50 to-blue-100/50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    bgColor: "bg-blue-600",
    hoverBg: "hover:bg-blue-700",
  },
  {
    id: "skincoach",
    title: "SkinCoach",
    color: "purple",
    subtitle: "과학 기반 AI 스킨 루틴",
    desc: "성분 분석 기반 맞춤 루틴 추천과 위험 성분 조합 자동 경고를 제공합니다.",
    href: skinCoachUrl,
    isExternal: true,
    icon: Sparkles,
    gradient: "from-purple-50 to-purple-100/50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    bgColor: "bg-purple-600",
    hoverBg: "hover:bg-purple-700",
  },
];

export default function ProductsShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            MediX Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Research와 Service, 두 가지 축으로 의료와 일상을 연결합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            const Component = product.isExternal ? 'a' : Link;
            const linkProps = product.isExternal 
              ? { href: product.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: product.href };

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${product.gradient} rounded-3xl p-8 border-2 ${product.borderColor} hover:shadow-xl transition-all group`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 ${product.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {product.desc}
                </p>

                <Component
                  {...linkProps}
                  className={`inline-flex items-center gap-2 px-6 py-3 ${product.bgColor} ${product.hoverBg} text-white rounded-lg font-semibold transition-all group-hover:gap-3`}
                >
                  {product.isExternal ? "SkinCoach 시작하기" : "자세히 보기"}
                  <ArrowRight size={18} />
                </Component>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

