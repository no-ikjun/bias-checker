import React from "react";
import { type Article } from "../data/articles";

interface Props {
  article: Article;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export const ArticleCard: React.FC<Props> = ({
  article,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(article.id)}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        border: isSelected ? "2px solid #007bff" : "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        cursor: "pointer",
        background: isSelected ? "#f0f8ff" : "white",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <img
        src={article.thumbnail}
        alt={article.title}
        style={{
          width: "120px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0, color: "black" }}>{article.title}</h3>
        <p style={{ margin: "0.3rem 0", fontSize: "0.9rem", color: "#555" }}>
          {article.source}
        </p>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#333" }}>
          {article.content.length > 60
            ? `${article.content.slice(0, 60)}...`
            : article.content}
        </p>
      </div>
    </div>
  );
};
