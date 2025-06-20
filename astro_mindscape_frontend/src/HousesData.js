import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// API constants for FreeAstrologyAPI (consistent usage as in DailyHoroscope.js, PlanetsData.js, etc.)
const API_URL = "https://json.freeastrologyapi.com/western/houses";
const API_KEY = "AWRz4Z8NjN67yngt0sOtT1DdqfX1aAty5pQO6TVa";

// PUBLIC_INTERFACE
/**
 * Fetches and displays astrological house data from FreeAstrologyAPI.
 * Shows loader and error states, and outputs JSON data in a <pre>.
 */
function HousesData() {
  const [houses, setHouses] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      setError("");
      try {
        // The FreeAstrologyAPI endpoints for reference:
        // Aspects:    GET https://json.freeastrologyapi.com/western/aspects
        // Planets:    GET https://json.freeastrologyapi.com/western/planets
        // Houses:     GET https://json.freeastrologyapi.com/western/houses
        // Horoscope:  GET https://json.freeastrologyapi.com/sun_sign_prediction/daily/:zodiacName
        //
        // All use Bearer token and application/json content type for GET requests.

        const response = await axios.get(
          API_URL,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json"
            }
          }
        );
        setHouses(response.data);
      } catch (err) {
        // Capture more details for troubleshooting 403 errors
        let moreInfo = "";
        if (err.response) {
          moreInfo += ` (status: ${err.response.status})`;
          if (err.response.data && err.response.data.error) {
            moreInfo += ` [error: ${err.response.data.error}]`;
          }
        }
        setError(
          "Failed to fetch house data: " +
            (err.response?.data?.error || err.message || "Unknown error") +
            moreInfo
        );
      } finally {
        setLoading(false);
      }
    };
    fetchHouses();
  }, []);

  return (
    <section className="data-section">
      <h2>Astrological Houses Data</h2>
      {loading && <div className="loader">Loading houses...</div>}
      {error && <div className="error">{error}</div>}
      {houses && (
        <pre className="json-data">{JSON.stringify(houses, null, 2)}</pre>
      )}
    </section>
  );
}

export default HousesData;
