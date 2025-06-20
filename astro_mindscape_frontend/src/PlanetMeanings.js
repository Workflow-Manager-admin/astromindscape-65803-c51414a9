import React from "react";
import planetsData from "./planetsData";

// PUBLIC_INTERFACE
/**
 * Lists planets and their astrological meanings.
 */
function PlanetMeanings() {
  return (
    <section className="data-section">
      <h2 className="text-xl font-bold mb-2">Planets & Meanings</h2>
      <ul className="ml-5 list-disc text-sm mb-2">
        {planetsData.allPlanets.map((p) => (
          <li key={p}>
            <span className="font-semibold">{planetsData[p].symbol}&nbsp;{planetsData[p].name}:</span>
            <span className="ml-1">{planetsData[p].meaning}</span>
          </li>
        ))}
      </ul>
      <div className="text-xs text-gray-400 mt-4">
        <em>
          Planets represent universal life principles and different energies in astrology.
        </em>
      </div>
    </section>
  );
}
export default PlanetMeanings;
