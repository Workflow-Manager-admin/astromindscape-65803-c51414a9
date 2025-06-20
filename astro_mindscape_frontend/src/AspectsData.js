import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// PUBLIC_INTERFACE
/**
 * Fetches and displays astrological aspects data from FreeAstrologyAPI.
 * Loader, error, and outputs JSON.
 */
function AspectsData() {
  const [aspects, setAspects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAspects = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "https://json.freeastrologyapi.com/western/aspects",
          {
            headers: {
              Authorization: "Bearer AWRz4Z8NjN67yngt0sOtT1DdqfX1aAty5pQO6TVa",
              "Content-Type": "application/json"
            }
          }
        );
        setAspects(response.data);
      } catch (err) {
        setError(
          "Failed to fetch aspects data: " +
            (err.response?.data?.error || err.message)
        );
      } finally {
        setLoading(false);
      }
    };
    fetchAspects();
  }, []);

  return (
    <section className="data-section">
      <h2>Aspects Data</h2>
      {loading && <div className="loader">Loading aspects...</div>}
      {error && <div className="error">{error}</div>}
      {aspects && (
        <pre className="json-data">{JSON.stringify(aspects, null, 2)}</pre>
      )}
    </section>
  );
}

export default AspectsData;
