import React, { useEffect, useState } from "react";
import { type Article } from "../data/articles";

export const Result: React.FC = () => {
  const [biasScore, setBiasScore] = useState<number | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("selectedArticles");
    if (!raw) return;

    const selected: Article[] = JSON.parse(raw);
    if (selected.length === 0) return;

    const total = selected.reduce((sum, a) => sum + a.biasScore, 0);
    const avg = total / selected.length;
    setBiasScore(avg);
  }, []);

  const getBiasDescription = (score: number) => {
    if (score <= -50) return "매우 진보적";
    if (score <= -10) return "약간 진보적";
    if (score < 10) return "중도 성향";
    if (score < 50) return "약간 보수적";
    return "매우 보수적";
  };

  if (biasScore === null) {
    return <p style={{ padding: "2rem" }}>결과를 불러오는 중입니다...</p>;
  }

  const description = getBiasDescription(biasScore);
  const positionPercent = (biasScore + 100) / 2; // -100~100 → 0~100%

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>📊 정치 성향 분석 결과</h2>

      <div style={{ marginTop: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.9rem",
          }}
        >
          <span>⬅ 진보</span>
          <span>중도</span>
          <span>보수 ➡</span>
        </div>

        <div
          style={{
            height: "20px",
            background: "linear-gradient(to right, #1a85ff, #b65bf3, #D0021B)",
            borderRadius: "10px",
            marginTop: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${positionPercent}%`,
              transform: "translateX(-50%)",
              top: "-12px",
              fontSize: "1.4rem",
              transition: "left 0.6s ease-out",
            }}
          >
            🔵
          </div>
        </div>

        <p
          style={{ textAlign: "center", fontWeight: "bold", marginTop: "1rem" }}
        >
          정치 성향 점수: {biasScore.toFixed(1)}
          <br />
          0에 가까울수록 중도 성향이에요.
        </p>

        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          당신은 <strong>{description}</strong> 시각을 가지고 있어요.
        </p>
      </div>
    </div>
  );
};
