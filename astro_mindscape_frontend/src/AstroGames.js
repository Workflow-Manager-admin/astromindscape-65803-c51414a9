import React, { useState, Suspense, lazy } from "react";
import zodiacData from "./zodiacData";

// Lazy load all mini games
const miniGames = [
  {
    key: "magicNumber",
    name: "Magic Number",
    emoji: "🎯",
    component: lazy(() => import("./games/MagicNumberGame")),
    desc: "Guess the magic number! Fast simple fun.",
  },
  {
    key: "reaction",
    name: "Reaction Speed",
    emoji: "⏱️",
    component: lazy(() => import("./games/ReactionTestGame")),
    desc: "How quick are you? Click when the color turns.",
  },
  {
    key: "rps",
    name: "Rock Paper Scissors",
    emoji: "✊✋✌️",
    component: lazy(() => import("./games/RockPaperScissors")),
    desc: "Classic hand battle vs the computer.",
  },
  {
    key: "memory",
    name: "Memory Match",
    emoji: "🃏",
    component: lazy(() => import("./games/MemoryMiniGame")),
    desc: "Flip and match pairs: can you clear the grid?",
  },
  {
    key: "fizzbuzz",
    name: "FizzBuzz Mini",
    emoji: "🔢",
    component: lazy(() => import("./games/FizzBuzzGame")),
    desc: "Type the next FizzBuzz in the sequence.",
  }
];

function useEscapeToClose(handler, open) {
  React.useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") handler();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler, open]);
}

// Blurry fade-in modal overlay for games
function GameModal({ children, open, onClose }) {
  useEscapeToClose(onClose, open);

  if (!open) return null;
  return (
    <div
      className="astro-game-modal-blur"
      onClick={onClose}
      style={{
        position: "fixed",
        zIndex: 2000,
        top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(14,21,35,0.6)",
        backdropFilter: "blur(12px) saturate(115%)",
        WebkitBackdropFilter: "blur(12px) saturate(115%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s",
        animation: "fadeIn 0.57s cubic-bezier(.7,0,.23,.99)",
      }}
      tabIndex={-1}
      aria-label="Game modal overlay"
      role="dialog"
    >
      {/* Prevent click propagation from closing when clicking modal itself */}
      <div
        className="astro-game-modal-content fade-in"
        onClick={e => e.stopPropagation()}
        style={{
          background: "rgba(24,28,39,0.93)",
          borderRadius: "22px",
          boxShadow: "0 10px 40px 0 #040c16cc",
          padding: "0 0 10px 0",
          minWidth: 340,
          maxWidth: "98vw",
          minHeight: 130,
          maxHeight: "90vh",
          overflowY: "auto",
          outline: "2.5px solid #03ffd523"
        }}
      >
        {children}
        <button
          className="btn"
          onClick={onClose}
          style={{
            margin: "15px auto 2px",
            display: "block",
            background: "#00ffe1",
            color: "#151d29",
            borderRadius: "11px"
          }}
          tabIndex={0}
        >Close</button>
      </div>
    </div>
  );
}
/**
 * Fun astrology mini-games as a grid; clicking one launches it in a modal, with fade-in and frosted glass effect.
 */
function AstroGames() {
  const [modalKey, setModalKey] = useState(null);

  return (
    <section>
      <h2 style={{fontWeight: 700, textAlign: "center", margin: "17px 0 0"}}>Astro Mini Games</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px,1fr))",
        gap: 18,
        margin: "30px auto 15px",
        maxWidth: 780
      }}>
        {miniGames.map(game => (
          <button
            key={game.key}
            className="game-card fade-in"
            tabIndex={0}
            style={{
              cursor: "pointer",
              background: "rgba(255,255,255,0.07)",
              border: "none",
              outline: "none",
              transition: "box-shadow 0.19s, transform 0.14s",
              boxShadow: modalKey === game.key ? "0 4px 18px #00ffe122" : "0 2px 12px #0cafdd14",
              color: "#fff"
            }}
            onClick={() => setModalKey(game.key)}
            aria-label={game.name}
          >
            <span style={{fontSize: "2.1rem", display: "block", marginBottom: 4}}>{game.emoji}</span>
            <span style={{fontWeight: 600, fontSize: "1.11rem"}}>{game.name}</span>
            <div style={{fontSize: 13, color: "#aee", marginTop: 5, minHeight: 26}}>{game.desc}</div>
          </button>
        ))}
      </div>
      <GameModal open={!!modalKey} onClose={() => setModalKey(null)}>
        <Suspense fallback={<div style={{
          padding: 48, textAlign: "center"
        }}>Loading game...</div>}>
          {modalKey &&
            (() => {
              const game = miniGames.find(g => g.key === modalKey);
              if (!game) return <div>Not found</div>;
              const Comp = game.component;
              return <Comp />;
            })()
          }
        </Suspense>
      </GameModal>
      <div style={{textAlign: "center", marginTop: 18, color: "#ccd", fontSize: "0.99em"}}>
        <em>Tip: Close the game with ESC, or by clicking outside the pop-up.</em>
      </div>
    </section>
  );
}
export default AstroGames;
