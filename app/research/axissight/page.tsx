import SolutionLayout from "@/components/research/SolutionLayout";

const content = {
  hero: {
    title: "Your Spine, Quantified.",
    subtitle: "AxisSight",
  },
  problem: {
    title: "Problem",
    content: "척추 X-ray Cobb 각 측정은 수동이며 관찰자 간 편차가 큽니다.",
  },
  solution: {
    title: "Solution",
    items: [
      "X-ray 기반 Cobb 각 자동 계산",
      "척추 랜드마크 자동 인식",
      "실시간 측정 결과 제공",
      "판독 시간 90% 단축",
    ],
  },
  mvp: {
    title: "MVP Spec",
    items: [
      "Cobb angle accuracy: ≤ ±3°",
      "Processing time: <5 seconds",
      "Landmark detection: >95% accuracy",
    ],
  },
  roadmap: {
    title: "Roadmap (Milestones)",
    items: [
      "M0-M3: Landmark detection model",
      "M3-M6: Cobb angle calculation",
      "M6-M9: Clinical validation",
      "M9-M12: Integration & deployment",
    ],
  },
  value: {
    title: "Clinical Value",
    items: [
      "판독시간 90% 단축",
      "일관된 측정 결과",
      "초기 진단 정확도 향상",
    ],
  },
};

export default function AxisSightPage() {
  return <SolutionLayout {...content} />;
}

