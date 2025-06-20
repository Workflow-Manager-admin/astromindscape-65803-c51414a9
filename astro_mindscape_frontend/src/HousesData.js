import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
        const response = await axios.get(
          "https://json.freeastrologyapi.com/western/houses",
          {
            headers: {
              Authorization: "Bearer AWRz4Z8NjN67yngt0sOtT1DdqfX1aAty5pQO6TVa",
              "Content-Type": "application/json"
            }
          }
        );
        setHouses(response.data);
      } catch (err) {
        setError(
          "Failed to fetch house data: " +
            (err.response?.data?.error || err.message)
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
