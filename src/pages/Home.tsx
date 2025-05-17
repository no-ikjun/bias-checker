import React, { useState } from "react";
import { articles } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      if (selectedIds.length >= 10) {
        alert("최대 10개까지 선택할 수 있어요.");
        return;
      }
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleSubmit = () => {
    if (selectedIds.length < 10) {
      alert("10개를 모두 선택해야 결과를 볼 수 있어요.");
      return;
    }

    const selectedArticles = articles.filter((a) => selectedIds.includes(a.id));
    localStorage.setItem("selectedArticles", JSON.stringify(selectedArticles));
    navigate("/result");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>
        읽고 싶은 기사를 선택하세요
        <br />
        (최대 10개)
      </h2>
      <div>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            isSelected={selectedIds.includes(article.id)}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        결과 보기
      </button>
    </div>
  );
};
