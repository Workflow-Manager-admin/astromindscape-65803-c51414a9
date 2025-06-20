import React from "react";
import zodiacData from "./zodiacData";

// PUBLIC_INTERFACE
/**
 * Displays the details and profile for a given zodiac sign.
 */
function SignProfile({ sign }) {
  const d = zodiacData[sign];

  return (
    <section className="data-section">
      <h2 className="text-2xl font-bold mb-2">
        {d.emoji} {sign} Profile
      </h2>
      <div className="mb-2">
        <span className="font-semibold text-cyan-400">Dates:</span>{" "}
        {d.dates}
      </div>
      <div className="mb-2">
        <span className="font-semibold text-cyan-400">Element:</span>{" "}
        {d.element} &nbsp; | &nbsp;
        <span className="font-semibold text-cyan-400">Modality:</span> {d.modality}
      </div>
      <p className="mb-2">{d.summary}</p>
      <span className="font-semibold text-cyan-400">Strengths:</span>
      <ul className="ml-5 list-disc text-sm mb-2">
        {d.strengths.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <span className="font-semibold text-cyan-400">Challenges:</span>
      <ul className="ml-5 list-disc text-sm mb-2">
        {d.challenges.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <span className="font-semibold text-cyan-400">Famous {sign}s:</span>
      <div className="ml-2 text-sm">{d.famous}</div>
    </section>
  );
}
export default SignProfile;
