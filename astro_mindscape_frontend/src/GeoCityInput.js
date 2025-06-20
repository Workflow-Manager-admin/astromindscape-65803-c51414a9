import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// Demo: Use your IPGeolocation API key below
const IPGEO_KEY = "demo"; // Replace with real key for production

// PUBLIC_INTERFACE
/**
 * Allows user to enter a city, fetches geolocation and astronomy info,
 * displays loading/error states, and pretty-prints the results.
 */
function GeoCityInput() {
  const [city, setCity] = useState("");
  const [astronomy, setAstronomy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // PUBLIC_INTERFACE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setAstronomy(null);
    setLoading(true);

    try {
      // Get lat/lon from city name using OpenCage (fallback for this demo)
      // In real app, you'd use an official city→geo service; here, we approximate via OpenCage.
      const openCageUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        city
      )}&key=54691e1d2f01462aa897e1c47be66632`; // demo key, replace for prod
      const geoResp = await axios.get(openCageUrl);
      if (
        !geoResp.data.results ||
        geoResp.data.results.length === 0 ||
        !geoResp.data.results[0].geometry
      ) {
        throw new Error("Could not find coordinates for that city.");
      }
      const { lat, lng } = geoResp.data.results[0].geometry;

      // Get Astronomy info from IPGeolocation.io
      const ipgeoUrl = `https://api.ipgeolocation.io/v2/astronomy?apiKey=${IPGEO_KEY}&lat=${lat}&long=${lng}`;
      const astroResp = await axios.get(ipgeoUrl);
      setAstronomy({
        coords: { lat, lng },
        astronomy: astroResp.data
      });
    } catch (err) {
      setError(
        "Error fetching astronomy/geo info: " +
          (err.response?.data?.message || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="data-section">
      <h2>City → Astronomy Lookup</h2>
      <form className="astro-form" onSubmit={handleSubmit}>
        <label>
          City Name:
          <input
            type="text"
            placeholder="eg. Paris"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Searching..." : "Lookup"}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
      {astronomy && (
        <div className="astro-results">
          <div>
            <strong>Coordinates:</strong>{" "}
            {astronomy.coords.lat}, {astronomy.coords.lng}
          </div>
          <pre className="json-data">
            {JSON.stringify(astronomy.astronomy, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
}

export default GeoCityInput;
