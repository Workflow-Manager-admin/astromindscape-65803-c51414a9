import React, { useState, useEffect } from "react";
// ZodiacPulse Lite — Modular, Offline, API-free Astrology App

import NavBar from "./NavBar";
import ZodiacSelector from "./ZodiacSelector";
import DailyPrediction from "./DailyPrediction";
import SignProfile from "./SignProfile";
import PlanetMeanings from "./PlanetMeanings";
import HouseGuide from "./HouseGuide";
import AstroGames from "./AstroGames";

import "./App.css";

// PUBLIC_INTERFACE
/**
 * Root App for ZodiacPulse Lite.
 * Controls tab navigation, manages theme, and coordinates child components.
 * No external API calls, all data and logic local.
 */
function App() {
  // Tracks which tab is active
  const [tab, setTab] = useState("daily");
  // Sun sign state
  const [sunSign, setSunSign] = useState(() =>
    window.localStorage.getItem("zp_sunSign") || "Aries"
  );
  // Theme: "light" | "dark"
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem("zp_theme") || "dark"
  );

  // Store sun sign and theme to localStorage for persistence
  useEffect(() => {
    window.localStorage.setItem("zp_sunSign", sunSign);
  }, [sunSign]);
  useEffect(() => {
    document.documentElement.className = ""; // Remove all, then add
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("zp_theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  /** Change theme between light/dark. */
  const toggleTheme = () =>
    setTheme((th) => (th === "dark" ? "light" : "dark"));

  // List of pages/tabs (display, internal name, icon, mobile-short)
  const tabs = [
    { label: "Daily", key: "daily", emoji: "🌞" },
    { label: "Sign Profile", key: "profile", emoji: "🔮" },
    { label: "Planets", key: "planets", emoji: "🪐" },
    { label: "Houses", key: "houses", emoji: "🏠" },
    { label: "Mini Games", key: "games", emoji: "🎲" },
    { label: "About", key: "about", emoji: "✨" },
  ];

  return (
    <div className="app">
      <NavBar
        tabs={tabs}
        activeTab={tab}
        setActiveTab={setTab}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="container" style={{ paddingTop: 88 }}>
        {/* Top—sign selector and daily basics */}
        {tab === "daily" && (
          <>
            <section>
              <ZodiacSelector sunSign={sunSign} setSunSign={setSunSign} />
              <DailyPrediction sunSign={sunSign} />
            </section>
          </>
        )}
        {tab === "profile" && <SignProfile sign={sunSign} />}
        {tab === "planets" && <PlanetMeanings />}
        {tab === "houses" && <HouseGuide />}
        {tab === "games" && <AstroGames sign={sunSign} />}
        {tab === "about" && (
          <section className="data-section">
            <h2>ZodiacPulse Lite</h2>
            <p style={{ marginBottom: "1em", fontWeight: 500 }}>
              <span style={{ fontWeight: 600 }}>ZodiacPulse Lite</span> is a lightweight, engaging and <strong>API-free astrology app</strong>.<br />
              All content is generated <strong>locally in your browser</strong> with no network required. ✨
            </p>
            <ul style={{ marginLeft: 22, fontSize: 15, marginBottom: 18, listStyle: "disc" }}>
              <li>Interactive zodiac selector/daily prediction</li>
              <li>Detailed zodiac, planets and houses info</li>
              <li>Fun mini astro quiz/games</li>
              <li>Offline usage — all data included</li>
              <li>Modern, responsive design</li>
              <li>Toggleable dark/light mode</li>
            </ul>
            <p style={{ marginBottom: "1em" }}>
              <em>
                Made with React, vanilla CSS, and lots of starry wisdom.<br />
                <a href="https://github.com/kavia-ai/zodiacpulse" style={{ color: "#00ffff" }}>Source code</a>
              </em>
            </p>
          </section>
        )}
        <footer style={{
          marginTop: 60,
          fontSize: "12px",
          textAlign: "center",
          color: "#99aabb",
          userSelect: "none",
          paddingBottom: 24
        }}>
          <hr style={{ margin: "16px 0" }} />
          <span>ZodiacPulse Lite &copy; 2024 • No APIs • All data local • Modern astrology for everyone</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
