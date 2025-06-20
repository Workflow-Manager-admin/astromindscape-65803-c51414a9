import React, { useState } from 'react';
import './App.css';
import HousesData from './HousesData';
import PlanetsData from './PlanetsData';
import AspectsData from './AspectsData';
import NatalChart from './NatalChart';
import GeoCityInput from './GeoCityInput';

// PUBLIC_INTERFACE
/**
 * Main application container for ZodiacPulse.
 * Handles navigation between feature components and basic app shell.
 */
function App() {
  // Tracks the current displayed module
  const [tab, setTab] = useState('natal');

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> ZodiacPulse
            </div>
            {/* Navigation */}
            <div>
              <button className={`btn${tab === 'natal' ? ' btn-large' : ''}`} onClick={() => setTab('natal')}>
                Natal Chart
              </button>
              <button className={`btn${tab === 'houses' ? ' btn-large' : ''}`} onClick={() => setTab('houses')}>
                Houses
              </button>
              <button className={`btn${tab === 'planets' ? ' btn-large' : ''}`} onClick={() => setTab('planets')}>
                Planets
              </button>
              <button className={`btn${tab === 'aspects' ? ' btn-large' : ''}`} onClick={() => setTab('aspects')}>
                Aspects
              </button>
              <button className={`btn${tab === 'geo' ? ' btn-large' : ''}`} onClick={() => setTab('geo')}>
                City→Geo/Astro
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="hero" style={{ paddingTop: 56 }}>
            {/* Show only the selected component */}
            {tab === 'natal' && <NatalChart />}
            {tab === 'houses' && <HousesData />}
            {tab === 'planets' && <PlanetsData />}
            {tab === 'aspects' && <AspectsData />}
            {tab === 'geo' && <GeoCityInput />}
            <div className="description" style={{ marginTop: 32 }}>
              <hr style={{ opacity: 0.2 }} />
              <div>
                <strong>ZodiacPulse:</strong> Modern astrology & astronomy toolkit. Requires internet for API calls.
              </div>
              <div>
                <small>
                  Powered by <a href="https://freeastrologyapi.com" style={{ color: '#00ffff' }}>FreeAstrologyAPI</a> and <a href="https://ipgeolocation.io" style={{ color: '#00ffff' }}>ipgeolocation.io</a>.
                  <br />
                  Source code: <a href="https://github.com/kavia-ai/zodiacpulse" style={{ color: '#00ffff' }}>github.com/kavia-ai/zodiacpulse</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;