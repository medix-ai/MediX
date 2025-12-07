import SolutionLayout from "@/components/research/SolutionLayout";

const content = {
  hero: {
    title: "EF · Volumes · Scar — in 30 Seconds.",
    subtitle: "VentricuLab",
  },
  problem: {
    title: "Problem",
    content: "MRI 심장 분석은 수동 작업이 많고 시간이 오래 걸립니다.",
  },
  solution: {
    title: "Solution",
    items: [
      "MRI LV/RV endo/epi 자동 분할",
      "EF 및 Volumes 자동 계산",
      "Scar/LGE 분석",
      "30초 내 완전 자동 분석",
    ],
  },
  mvp: {
    title: "MVP Spec",
    items: [
      "EF accuracy: ±3%p",
      "Segmentation quality: DICE > 0.92",
      "Processing time: <30 seconds",
    ],
  },
  roadmap: {
    title: "Roadmap (Milestones)",
    items: [
      "M0-M3: Segmentation model development",
      "M3-M6: EF & volume calculation",
      "M6-M9: Scar analysis integration",
      "M9-M12: Clinical deployment",
    ],
  },
  value: {
    title: "Clinical Value",
    items: [
      "판독 시간 대폭 단축",
      "일관된 정량화 결과",
      "Scar 분석 자동화",
    ],
  },
};

export default function VentricuLabPage() {
  return <SolutionLayout {...content} />;
}

