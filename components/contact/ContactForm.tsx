"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactTypes = [
  "PoC 문의",
  "연구 협업 문의",
  "임상 자문 참여 신청",
  "SkinCoach 제휴",
  "기타 문의",
];

// 이메일은 inmani1555@gmail.com로만 전송
const recipientEmail = "inmani1555@gmail.com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // mailto 링크로 이메일 클라이언트 열기
    const subject = encodeURIComponent(`[MediX] ${formData.type} - ${formData.name}`);
    const body = encodeURIComponent(`
문의 유형: ${formData.type}
이름: ${formData.name}
소속 기관/회사: ${formData.organization || "미입력"}
문의 내용:
${formData.message}
    `.trim());
    
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setSubmitStatus({
      type: "success",
      message: "이메일 클라이언트가 열렸습니다. 이메일을 확인하고 전송해주세요.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-semibold text-navy mb-2"
              >
                문의 유형
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent"
                required
                disabled={isSubmitting}
              >
                <option value="">선택해주세요</option>
                {contactTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-navy mb-2"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-semibold text-navy mb-2"
              >
                소속 기관/회사
              </label>
              <input
                type="text"
                id="organization"
                value={formData.organization}
                onChange={(e) =>
                  setFormData({ ...formData, organization: e.target.value })
                }
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-navy mb-2"
              >
                문의 내용
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-mint text-navy font-semibold rounded-lg hover:bg-mint-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "전송 중..." : "이메일 보내기"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
