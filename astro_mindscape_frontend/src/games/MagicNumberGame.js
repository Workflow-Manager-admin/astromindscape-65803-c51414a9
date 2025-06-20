import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * MagicNumberGame
 * A simple number guessing game (1–20).
 */
function MagicNumberGame() {
  const [target] = useState(() => Math.floor(Math.random() * 20) + 1);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [tries, setTries] = useState(0);
  const [won, setWon] = useState(false);

  const handleGuess = e => {
    e.preventDefault();
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 20) {
      setFeedback("Pick a number 1–20!");
      return;
    }
    setTries(t => t + 1);
    if (numGuess === target) {
      setFeedback(`Correct! The magic number was ${target}.`);
      setWon(true);
    } else if (numGuess < target) {
      setFeedback("Too low.");
    } else {
      setFeedback("Too high.");
    }
  };

  const reset = () => {
    window.location.reload();
  };

  return (
    <section className="game-card">
      <h2 style={{ marginBottom: 12 }}>Magic Number Game</h2>
      <div>Guess a number (1–20):</div>
      {!won && (
        <form onSubmit={handleGuess} style={{ margin: "13px 0" }}>
          <input
            type="number"
            value={guess}
            placeholder="Enter 1-20"
            onChange={e => setGuess(e.target.value)}
            min={1}
            max={20}
            disabled={won}
            style={{
              padding: "7px 10px",
              fontSize: 17,
              borderRadius: "9px",
              width: 80,
              textAlign: "center"
            }}
          />
          <button className="btn" type="submit" disabled={won} style={{ marginLeft: "8px" }}>Guess</button>
        </form>
      )}
      <div style={{ minHeight: 30, margin: "6px 0" }}>{feedback}</div>
      {won && (
        <button className="btn" onClick={reset}>
          Play Again
        </button>
      )}
      <div style={{ marginTop: 11, fontSize: 13, color: "#99bbcc" }}>Tries: {tries}</div>
    </section>
  );
}

export default MagicNumberGame;
