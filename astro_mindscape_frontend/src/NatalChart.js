import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// PUBLIC_INTERFACE
/**
 * Form for user to input birth data to generate a natal wheel chart.
 * Calls FreeAstrologyAPI /western/natal-wheel-chart and displays returned image.
 * Allows custom color selection for chart.
 */
function NatalChart() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    latitude: "",
    longitude: "",
    colors: "#00ffff"
  });
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // PUBLIC_INTERFACE
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setImgUrl("");
    setApiResponse(null);
    try {
      // Build request body as per API spec. Send colors as simple string or array if needed.
      const body = {
        name: form.name,
        date: form.date,
        time: form.time,
        latitude: parseFloat(form.latitude),
        longitude: parseFloat(form.longitude),
        colors: form.colors // this param is optional in API, but included for customization
      };
      const response = await axios.post(
        "https://json.freeastrologyapi.com/western/natal-wheel-chart",
        body,
        {
          headers: {
            Authorization: "Bearer AWRz4Z8NjN67yngt0sOtT1DdqfX1aAty5pQO6TVa",
            "Content-Type": "application/json"
          }
        }
      );
      setImgUrl(response.data.chart_url);
      setApiResponse(response.data);
    } catch (err) {
      setError(
        "Failed to generate chart: " +
          (err.response?.data?.error || err.message)
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="data-section">
      <h2>Natal Wheel Chart Generator</h2>
      <form className="astro-form" onSubmit={handleSubmit}>
        <label>
          Name (for record):
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            type="text"
            autoComplete="name"
          />
        </label>
        <label>
          Date of Birth:
          <input
            name="date"
            required
            value={form.date}
            onChange={handleChange}
            type="date"
          />
        </label>
        <label>
          Time of Birth:
          <input
            name="time"
            required
            value={form.time}
            onChange={handleChange}
            type="time"
          />
        </label>
        <label>
          Latitude:
          <input
            name="latitude"
            required
            value={form.latitude}
            onChange={handleChange}
            type="number"
            step="any"
          />
        </label>
        <label>
          Longitude:
          <input
            name="longitude"
            required
            value={form.longitude}
            onChange={handleChange}
            type="number"
            step="any"
          />
        </label>
        <label>
          Natal Chart Main Color:
          <input
            name="colors"
            value={form.colors}
            onChange={handleChange}
            type="color"
          />
        </label>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Natal Chart"}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      {imgUrl && (
        <div className="chart-section">
          <h3>Your Natal Chart</h3>
          <img
            src={imgUrl}
            alt="Natal Astrological Chart"
            className="chart-image"
          />
        </div>
      )}
      {apiResponse && (
        <details>
          <summary>Show JSON Response</summary>
          <pre className="json-data">
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </details>
      )}
    </section>
  );
}

export default NatalChart;
