import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// API constants for FreeAstrologyAPI
const API_URL = "https://json.freeastrologyapi.com/sun_sign_prediction/daily";
const API_KEY = "AWRz4Z8NjN67yngt0sOtT1DdqfX1aAty5pQO6TVa";

// List of all zodiac signs for dropdown (format: lower case for endpoint)
const ZODIAC_SIGNS = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
];

// PUBLIC_INTERFACE
/**
 * DailyHoroscope component.
 * Lets user select a sun sign and fetches daily horoscope from FreeAstrologyAPI.
 * Handles loading/error states and clear output display.
 */
function DailyHoroscope() {
  // State for selected sign, horoscope result, loading/error status
  const [selectedSign, setSelectedSign] = useState("aries");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // PUBLIC_INTERFACE
  /**
   * Handles fetching the prediction for the current sun sign.
   * Makes GET request to /sun_sign_prediction/daily/:zodiacName
   */
  const fetchHoroscope = async (sign) => {
    setLoading(true);
    setError("");
    setPrediction(null);
    try {
      const response = await axios.get(
        `${API_URL}/${sign}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );
      setPrediction(response.data.prediction);
    } catch (err) {
      setError(
        "Could not fetch today’s prediction: " +
          (err.response?.data?.error || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  // PUBLIC_INTERFACE
  /**
   * Handles dropdown change for sun sign selection.
   * Updates the selected sign and fetches new prediction.
   */
  const handleSignChange = (e) => {
    const sign = e.target.value;
    setSelectedSign(sign);
    setPrediction(null); // Clear previous prediction while new is loading
    fetchHoroscope(sign);
  };

  // Fetch the horoscope on initial mount (for default sign)
  React.useEffect(() => {
    fetchHoroscope(selectedSign);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="data-section">
      <h2 style={{ marginBottom: 18 }}>Daily Horoscope</h2>
      {/* Instructions */}
      <div className="description" style={{ marginBottom: 6 }}>
        Choose your zodiac sun sign from the dropdown below to see your free daily horoscope!
      </div>
      {/* Select dropdown for all signs */}
      <form className="astro-form" style={{ marginTop: 18 }}>
        <label>
          Select Sun Sign:&nbsp;
          <select
            value={selectedSign}
            onChange={handleSignChange}
            disabled={loading}
            style={{ padding: "7px", fontSize: "1.02em" }}
            aria-label="Sun Sign"
          >
            {ZODIAC_SIGNS.map((sign) => (
              <option key={sign} value={sign}>
                {sign.charAt(0).toUpperCase() + sign.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </form>

      {/* Loader, Error, or Output */}
      {loading && <div className="loader">Fetching your horoscope...</div>}
      {error && <div className="error">{error}</div>}
      {!loading && prediction && (
        <div
          className="astro-results"
          style={{
            marginTop: 14,
            fontSize: "1.17em",
            lineHeight: "1.5",
            color: "#fff8e1",
            background: "rgba(255,255,255,0.015)"
          }}
        >
          <span style={{ fontWeight: 700, color: "#00ffff" }}>
            {selectedSign.charAt(0).toUpperCase() + selectedSign.slice(1)}:
          </span>
          <div style={{ marginTop: 6, whiteSpace: "pre-line" }}>{prediction}</div>
        </div>
      )}
      <div style={{ marginTop: 18, color: "#9bb", fontSize: "0.98em" }}>
        <small>
          Powered by <a href="https://freeastrologyapi.com" style={{ color: "#00ffff" }}>FreeAstrologyAPI</a>.
        </small>
      </div>
    </section>
  );
}

export default DailyHoroscope;
