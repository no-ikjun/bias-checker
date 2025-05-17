import React from "react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export const BiasBar: React.FC<Props> = ({
  label,
  count,
  percentage,
  color,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 600 }}>{label.toUpperCase()}</span>
        <span>
          {percentage.toFixed(1)}% ({count}개)
        </span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.8 }}
        style={{
          height: "20px",
          borderRadius: "8px",
          backgroundColor: color,
          marginTop: "4px",
        }}
      />
    </div>
  );
};
