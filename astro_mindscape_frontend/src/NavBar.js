import React from "react";

// PUBLIC_INTERFACE
/**
 * Top nav bar for tab/page switching and theme toggle.
 * Minimalist, Apple.com-inspired structure.
 */
function NavBar({ tabs, activeTab, setActiveTab, theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left: Logo/title (no extraneous wrappers) */}
        <a
          href="/"
          tabIndex={0}
          className="navbar-logo"
          aria-label="ZodiacPulse Lite home"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 600,
            letterSpacing: 0,
          }}
        >
          ZodiacPulse Lite
        </a>
        {/* Right: Navigation links horizontal */}
        <div className="navbar-links">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`navbar-link${activeTab === t.key ? " active" : ""}`}
              aria-current={activeTab === t.key ? "page" : undefined}
              aria-label={t.label}
              tabIndex={0}
              onClick={() => setActiveTab(t.key)}
              type="button"
            >
              {t.label}
            </button>
          ))}
          <button
            className="navbar-theme-toggle"
            onClick={toggleTheme}
            aria-label={`toggle ${theme === "dark" ? "light" : "dark"} mode`}
            type="button"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
