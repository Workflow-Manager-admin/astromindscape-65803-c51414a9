import React from "react";
import zodiacData from "./zodiacData";

// PUBLIC_INTERFACE
/**
 * Selector for choosing sun sign, exposes sign state to parent.
 */
function ZodiacSelector({ sunSign, setSunSign }) {
  return (
    <div className="flex flex-col gap-1 mb-3 items-center">
      <label className="mb-2 font-medium">Your Sun Sign:</label>
      <select
        className="border rounded px-4 py-2 focus:ring-2 focus:ring-blue-300 bg-gray-900 text-white dark:bg-gray-900 dark:text-white shadow-sm"
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
