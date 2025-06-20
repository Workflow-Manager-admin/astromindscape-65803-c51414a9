import React from "react";
import housesData from "./housesData";

// PUBLIC_INTERFACE
/**
 * Lists houses and their meanings in the birth chart.
 */
function HouseGuide() {
  return (
    <section className="data-section">
      <h2 className="text-xl font-bold mb-2">Astrological Houses</h2>
      <ul className="ml-5 list-disc text-sm mb-2">
        {housesData.map((h, idx) => (
          <li key={idx}>
            <span className="font-semibold">{h.number}. {h.name}:</span>
            <span className="ml-2">{h.meaning}</span>
          </li>
        ))}
      </ul>
      <div className="text-xs text-gray-400 mt-4">
        <em>
          The houses show where life events happen—each one represents a different area of existence.
        </em>
      </div>
    </section>
  );
}
export default HouseGuide;
