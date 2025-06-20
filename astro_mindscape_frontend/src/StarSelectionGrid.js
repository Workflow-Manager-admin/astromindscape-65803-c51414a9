import React, { useState } from "react";
import "./App.css"; // Uses theme variables/colors for integration

// PUBLIC_INTERFACE
/**
 * StarSelectionGrid
 * Props:
 *   - onSelect (optional): function(selectedStarIndex) called when a star is selected (1-based index)
 *   - gridSize (optional): how many stars per row/column (default: 5)
 *   - initialValue (optional): initial selected star (1-based index)
 *
 * Usage: <StarSelectionGrid onSelect={(i) => ...} gridSize={6} />
 *
 * Displays a square grid of star icons; user can click to select. Selected star is highlighted.
 */
function StarSelectionGrid({ onSelect, gridSize = 5, initialValue = null }) {
  const totalStars = gridSize * gridSize;
  const [selected, setSelected] = useState(
    initialValue && initialValue > 0 && initialValue <= totalStars
      ? initialValue
      : null
  );

  // Array for grid rendering: [1..totalStars]
  const stars = Array.from({ length: totalStars }, (_, i) => i + 1);

  // Handle selection change
  const handleSelect = (idx) => {
    setSelected(idx);
    if (onSelect) onSelect(idx);
  };

  return (
    <div
      className="star-grid-container"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, minmax(34px, 1fr))`,
        gridGap: 12,
        justifyContent: "center",
        alignItems: "center",
        margin: "24px auto 10px auto",
        maxWidth: gridSize * 48,
        padding: "4px",
        background: "rgba(0,255,255,0.018)",
        borderRadius: 12,
        boxShadow: "0 2px 18px 0 rgba(0,255,255,0.03)",
      }}
      aria-label="Star selection grid"
      role="group"
    >
      {stars.map((idx) => (
        <button
          key={idx}
          type="button"
          className={`star-btn${selected === idx ? " star-btn-selected" : ""}`}
          aria-label={`Star ${idx} ${selected === idx ? "(selected)" : ""}`}
          tabIndex={0}
          onClick={() => handleSelect(idx)}
          style={{
            // Style for both normal and selected state
            background: selected === idx
              ? "var(--kavia-orange, gold)" // highlighted color
              : "rgba(255,255,255,0.09)",
            color: selected === idx
              ? "#fff"
              : "var(--kavia-dark, #7d6a4f)",
            border: selected === idx
              ? "2.5px solid var(--kavia-orange, #e87a41)"
              : "2px solid var(--border-color, #ccd8ec44)",
            borderRadius: "50%",
            fontSize: 30,
            transition: "all 0.18s",
            cursor: "pointer",
            boxShadow: selected === idx
              ? "0 0 19px 2px #e87a4188"
              : "0 1.5px 6px 0 #00000011",
            outline: "none",
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2px"
          }}
        >
          {/* Unicode star: filled for selected, outlined for others */}
          {selected === idx ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
}

export default StarSelectionGrid;
