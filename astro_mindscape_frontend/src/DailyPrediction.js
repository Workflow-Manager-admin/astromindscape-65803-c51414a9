import React, { useMemo, useState } from "react";
import zodiacData from "./zodiacData";

// PUBLIC_INTERFACE
/**
 * Generates and displays a daily prediction for the chosen sun sign.
 * Randomizes output but persists daily for same sign.
 */
function DailyPrediction({ sunSign }) {
  // "Seed" is YYYY-MM-DD + sign, ensures daily-persistent output per sign.
  const today = new Date().toISOString().slice(0, 10);
  const dailySeed = `${today}-${sunSign}-zplite`;

  // Generate consistent pseudo-random index per day/sign (local, offline)
  function seededRand(str) {
    // Simple string seed to int, slightly hashed
    let hash = 0, i;
    for (i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    const norm = ((Math.abs(hash) % 1000) / 1000); // 0..1
    return norm;
  }

  // "Database" for daily oracle: general prediction, advice, mood, lucky color
  const pool = zodiacData[sunSign].predictions;

  // Stable memoized pick for day/sign
  const { prediction, mood, color, advice } = useMemo(() => {
    const r = seededRand(dailySeed);
    const p = pool.prediction[Math.floor(r * pool.prediction.length)];
    const ad = pool.advice[Math.floor(r * pool.advice.length)];
    const md = pool.mood[Math.floor(r * pool.mood.length)];
    const clr = pool.color[Math.floor(r * pool.color.length)];
    return {
      prediction: p,
      mood: md,
      color: clr,
      advice: ad,
    };
  }, [dailySeed, pool]);

  // Lucky color CSS chip
  const chipStyle = {
    background:
      color && color.hex ? color.hex : "#e87a41",
    color: "#fff",
    padding: "2px 12px",
    borderRadius: "16px",
    fontWeight: 600,
    fontSize: "0.96em",
    marginLeft: 6,
  };

  return (
    <section className="data-section mb-6">
      <h2 className="text-xl font-bold mb-2">
        {zodiacData[sunSign].emoji} {sunSign}&nbsp;—&nbsp;Today’s Zodiac Pulse
      </h2>
      <div className="mb-3 text-base font-medium">
        <span className="text-lg">{prediction}</span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-cyan-400">Advice:</span>{" "}
        <span>{advice}</span>
      </div>
      <div className="flex gap-4 flex-wrap items-center text-sm font-medium mt-1 mb-1">
        <span>
          <span className="font-semibold">Vibe</span>: {mood}
        </span>
        <span>
          <span className="font-semibold">Lucky Color</span>:{" "}
          <span style={chipStyle}>{color.name}</span>
        </span>
      </div>
      <div className="text-xs text-gray-400 mt-3">
        <span>
          <em>
            {new Date().toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            .<br />
            Change sign for a new prediction!
          </em>
        </span>
      </div>
    </section>
  );
}

export default DailyPrediction;
