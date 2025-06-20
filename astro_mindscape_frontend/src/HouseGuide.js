import React from "react";
import housesData from "./housesData";

// PUBLIC_INTERFACE
/**
 * Lists houses and their meanings in the birth chart.
 */
function HouseGuide() {
  return (
    <section className="data-section">
      <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 12 }}>Astrological Houses</h2>
      <ul style={{
        marginLeft: 22,
        fontSize: "15px",
        marginBottom: 18,
        listStyle: "disc"
      }}>
        {housesData.map((h, idx) => (
          <li key={idx} style={{ marginBottom: 2 }}>
            <span style={{ fontWeight: 600 }}>{h.number}. {h.name}:</span>
            <span style={{ marginLeft: 7 }}>{h.meaning}</span>
          </li>
        ))}
      </ul>
      <div style={{ fontSize: 13, color: "#99bbcc", marginTop: 24 }}>
        <em>
          The houses show where life events happen—each one represents a different area of existence.
        </em>
      </div>
    </section>
  );
}
export default HouseGuide;
