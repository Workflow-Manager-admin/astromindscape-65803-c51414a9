import React from "react";
import zodiacData from "./zodiacData";

// PUBLIC_INTERFACE
/**
 * Selector for choosing sun sign, exposes sign state to parent.
 */
function ZodiacSelector({ sunSign, setSunSign }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      marginBottom: 18
    }}>
      <label style={{ marginBottom: 10, fontWeight: 500 }}>
        Your Sun Sign:
      </label>
      <select
        style={{
          border: "1.5px solid var(--border-color, #26516055)",
          borderRadius: 8,
          padding: "9px 18px",
          background: "#131f2d",
          color: "#fff",
          fontWeight: 500,
          fontSize: "1.06em",
          boxShadow: "0 2px 8px 0 #00000018"
        }}
        value={sunSign}
        onChange={e => setSunSign(e.target.value)}
        aria-label="Select your sun sign"
      >
        {zodiacData.allSigns.map(sign => (
          <option key={sign} value={sign}>
            {zodiacData[sign].emoji} {sign}
          </option>
        ))}
      </select>
    </div>
  );
}
export default ZodiacSelector;
