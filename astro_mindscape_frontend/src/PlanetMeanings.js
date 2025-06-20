import React from "react";
import planetsData from "./planetsData";

// PUBLIC_INTERFACE
/**
 * Lists planets and their astrological meanings.
 */
function PlanetMeanings() {
  return (
    <section className="data-section">
      <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12 }}>Planets & Meanings</h2>
      <ul style={{
        marginLeft: 22,
        fontSize: 15,
        marginBottom: 18,
        listStyle: "disc"
      }}>
        {planetsData.allPlanets.map((p) => (
          <li key={p} style={{ marginBottom: 2 }}>
            <span style={{ fontWeight: 600 }}>
              {planetsData[p].symbol}&nbsp;{planetsData[p].name}:
            </span>
            <span style={{ marginLeft: 6 }}>{planetsData[p].meaning}</span>
          </li>
        ))}
      </ul>
      <div style={{ fontSize: 13, color: "#99bbcc", marginTop: 24 }}>
        <em>
          Planets represent universal life principles and different energies in astrology.
        </em>
      </div>
    </section>
  );
}
export default PlanetMeanings;
