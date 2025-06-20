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
        <div className="logo" style={{
          fontWeight: 700,
          fontSize: "1.15rem",
          letterSpacing: "1px",
          display: "flex",
          alignItems: "center",
          userSelect: "none"
        }}>
          ZodiacPulse Lite
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
              style={{
                minWidth: 48,
                fontWeight: activeTab === t.key ? 700 : 500,
                boxShadow: activeTab === t.key ? "0 3px 12px 0 #3360f633" : undefined
              }}
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
              marginLeft: 12
            }}
            onClick={toggleTheme}
            aria-label="toggle dark mode"
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
