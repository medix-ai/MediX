import SolutionLayout from "@/components/research/SolutionLayout";

const content = {
  hero: {
    title: "2D Ultrasound, Reimagined in 3D.",
    subtitle: "SonoCube",
  },
  demoImage: "/images/sono_main.png",
  problem: {
    title: "Problem",
    content: "2D 심초음파는 관찰자 편차가 크고 3D 장비는 고가·폐쇄형입니다.",
  },
  solution: {
    title: "Solution",
    items: [
      "벤더 비종속 프리핸드 3D",
      "LV/LA 자동 분할",
      "EF 자동 정량화",
      "온프레미스 실시간 추론",
    ],
  },
  mvp: {
    title: "MVP Spec",
    items: [
      "EF accuracy: ±5%p",
      "Segmentation quality: DICE > 0.90",
      "Latency: <100ms (edge inference)",
    ],
  },
  roadmap: {
    title: "Roadmap (Milestones)",
    items: [
      "M0-M3: Core 3D reconstruction",
      "M3-M6: Segmentation & EF calculation",
      "M6-M9: Clinical validation",
      "M9-M12: Deployment & optimization",
    ],
  },
  value: {
    title: "Clinical Value",
    items: [
      "재관찰 유도율 증가",
      "일관된 EF 트래킹",
      "초음파사 workflow 단축",
    ],
  },
};

export default function SonoCubePage() {
  return <SolutionLayout {...content} />;
}

