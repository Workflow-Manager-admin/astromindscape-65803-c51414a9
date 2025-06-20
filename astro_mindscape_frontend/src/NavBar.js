import React from "react";

// PUBLIC_INTERFACE
/**
 * Top nav bar for tab/page switching and theme toggle.
 */
function NavBar({ tabs, activeTab, setActiveTab, theme, toggleTheme }) {
  return (
    <nav
      className="navbar"
      style={{
        borderBottom: "1.5px solid var(--border-color, #d6e4f0)"
      }}
    >
      <div style={{
        maxWidth: 950,
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* ZodiacPulse logo with hamburger hover */}
        <div
          className="logo logo-hamburger"
          tabIndex={0}
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            letterSpacing: "1px",
            display: "flex",
            alignItems: "center",
            userSelect: "none",
            position: "relative",
            width: 48,
            minWidth: 48,
            minHeight: 44,
            color: "var(--primary)",
            paddingLeft: 2,
            cursor: "pointer",
          }}
          aria-label="ZodiacPulse Lite logo and main menu"
        >
          <span className="logo-hamburger-text" aria-label="ZodiacPulse Lite">
            ZodiacPulse Lite
          </span>
          {/* Hamburger icon rendered via 3 styled spans */}
          <span
            className="logo-hamburger-icon"
            aria-hidden="true"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        {/* Navigation tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`btn${activeTab === t.key ? " btn-large" : ""}`}
              onClick={() => setActiveTab(t.key)}
              aria-label={t.label}
              tabIndex="0"
            >
              {t.label}
            </button>
          ))}
          <button
            className="btn btn-large"
            title="Toggle light/dark mode"
            style={{
              borderWidth: 0,
              paddingInline: 16,
              fontSize: "1em",
              marginLeft: 12,
            }}
            onClick={toggleTheme}
            aria-label={`toggle ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
