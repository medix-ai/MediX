"use client";

import { motion } from "framer-motion";

export default function ResearchHero() {
  return (
    <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            MediX AI Solutions
          </h1>
          <p className="text-gray-600">심장·척추 의료 AI부터 스킨케어 AI까지</p>
        </motion.div>
      </div>
    </section>
  );
}

