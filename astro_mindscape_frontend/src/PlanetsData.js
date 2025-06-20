import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// PUBLIC_INTERFACE
/**
 * Fetches and displays astrological planets data from FreeAstrologyAPI.
 * Displays loading and error state, and shows JSON in a <pre>.
 */
function PlanetsData() {
  const [planets, setPlanets] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlanets = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "https://json.freeastrologyapi.com/western/planets",
          {
            headers: {
              Authorization: "Bearer AWRz4Z8NjN67yngt0sOtT1DdqfX1aAty5pQO6TVa",
              "Content-Type": "application/json"
            }
          }
        );
        setPlanets(response.data);
      } catch (err) {
        setError(
          "Failed to fetch planet data: " +
            (err.response?.data?.error || err.message)
        );
      } finally {
        setLoading(false);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <section className="data-section">
      <h2>Planets Data</h2>
      {loading && <div className="loader">Loading planets...</div>}
      {error && <div className="error">{error}</div>}
      {planets && (
        <pre className="json-data">{JSON.stringify(planets, null, 2)}</pre>
      )}
    </section>
  );
}

export default PlanetsData;
