import React, { useState, useRef } from "react";

// PUBLIC_INTERFACE
/**
 * ReactionTestGame
 * Test your reaction speed! Click as soon as the color changes.
 */
function ReactionTestGame() {
  const [started, setStarted] = useState(false);
  const [canClick, setCanClick] = useState(false);
  const [message, setMessage] = useState("Click start and wait for green.");
  const [startTime, setStartTime] = useState(null);
  const [reaction, setReaction] = useState(null);
  const timeoutRef = useRef(null);

  const start = () => {
    setStarted(true);
    setMessage("Wait for green...");
    setCanClick(false);
    setReaction(null);
    const wait = 1000 + Math.random() * 3000;
    timeoutRef.current = setTimeout(() => {
      setCanClick(true);
      setMessage("Click now!");
      setStartTime(Date.now());
    }, wait);
  };

  const stop = () => {
    clearTimeout(timeoutRef.current);
    setStarted(false);
    setCanClick(false);
    setMessage("Click start and wait for green.");
    setReaction(null);
  };

  const handlePanelClick = () => {
    if (!started) return;
    if (!canClick) {
      setStarted(false);
      setMessage("Too soon! Wait for green. Try again.");
      clearTimeout(timeoutRef.current);
      setReaction(null);
    } else {
      const rt = Date.now() - startTime;
      setReaction(rt);
      setStarted(false);
      setCanClick(false);
      setMessage(`Your reaction: ${rt} ms.`);
    }
  };

  return (
    <section className="game-card">
      <h2>Reaction Speed Test</h2>
      <div style={{ margin: "13px 0" }}>{message}</div>
      <div
        onClick={handlePanelClick}
        style={{
          cursor: started ? "pointer" : "not-allowed",
          width: 220,
          height: 76,
          margin: "0 auto 15px",
          background: canClick ? "#3bf302" : "#2a3142",
          borderRadius: 12,
          outline: canClick ? "3px solid #6dffab" : "2px solid #444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem",
          color: canClick ? "#141a2b" : "#ccd"
        }}
        tabIndex={0}
        aria-label="Reaction panel, click when green"
      >
        {canClick ? "CLICK!" : "Wait..."}
      </div>
      {!started && (
        <button className="btn" onClick={start}>
          Start
        </button>
      )}
      {reaction && (
        <div style={{ marginTop: 12, color: "#03ffd5" }}>
          Play again to beat your score!
        </div>
      )}
      <button onClick={stop} style={{ margin: "10px 0 0", fontSize: 13, background: "none", color: "#aac", border: "none" }}>
        Reset
      </button>
    </section>
  );
}

export default ReactionTestGame;
