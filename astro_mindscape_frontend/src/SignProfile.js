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
      <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 12 }}>
        {d.emoji} {sign} Profile
      </h2>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontWeight: 600, color: "#25ecdb" }}>Dates:</span>{" "}
        {d.dates}
      </div>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontWeight: 600, color: "#25ecdb" }}>Element:</span>{" "}
        {d.element} &nbsp; | &nbsp;
        <span style={{ fontWeight: 600, color: "#25ecdb" }}>Modality:</span> {d.modality}
      </div>
      <p style={{ marginBottom: 10 }}>{d.summary}</p>
      <span style={{ fontWeight: 600, color: "#25ecdb" }}>Strengths:</span>
      <ul style={{
        marginLeft: 22,
        fontSize: 15,
        marginBottom: 10,
        listStyle: "disc"
      }}>
        {d.strengths.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <span style={{ fontWeight: 600, color: "#25ecdb" }}>Challenges:</span>
      <ul style={{
        marginLeft: 22,
        fontSize: 15,
        marginBottom: 10,
        listStyle: "disc"
      }}>
        {d.challenges.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <span style={{ fontWeight: 600, color: "#25ecdb" }}>Famous {sign}s:</span>
      <div style={{ marginLeft: 8, fontSize: 14 }}>{d.famous}</div>
    </section>
  );
}
export default SignProfile;
