import React from "react";

// PUBLIC_INTERFACE
/**
 * Top nav bar for tab/page switching and theme toggle.
 */
function NavBar({ tabs, activeTab, setActiveTab, theme, toggleTheme }) {
  return (
    <nav
      className={`navbar shadow-md ${
        theme === "dark"
          ? "bg-[#121d2d] text-white"
          : "bg-gradient-to-r from-sky-100 via-yellow-50 to-white text-gray-800"
      } fixed top-0 left-0 w-full z-40`}
      style={{ borderBottom: "1.5px solid var(--border-color, #d6e4f0)" }}
    >
      <div className="container flex flex-row items-center justify-between py-2">
        <div className="logo flex items-center font-bold gap-2 select-none text-lg">
          <span className="logo-symbol" role="img" aria-label="logo">
            ★
          </span>
          ZodiacPulse Lite
        </div>
        {/* Navigation tabs */}
        <div className="flex items-center gap-1 sm:gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`btn px-3 py-2 rounded-md ${
                activeTab === t.key
                  ? "btn-large bg-accent font-bold scale-105 shadow"
                  : ""
              }`}
              onClick={() => setActiveTab(t.key)}
              aria-label={t.label}
              tabIndex="0"
              style={{ minWidth: 48 }}
            >
              <span className="mr-1">{t.emoji}</span>
              <span className="hidden xs:inline">{t.label}</span>
            </button>
          ))}
          <button
            className="ml-2 btn btn-large"
            title="Toggle light/dark mode"
            style={{ borderWidth: 0, paddingInline: 16, fontSize: "1em" }}
            onClick={toggleTheme}
            aria-label="toggle dark mode"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
