import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * FizzBuzzGame
 * Classic game—user continues the FizzBuzz sequence correctly.
 */
function nextFizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return `${n}`;
}

function FizzBuzzGame() {
  const [sequence, setSequence] = useState(["1"]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(2);
  const [msg, setMsg] = useState("");
  const [lost, setLost] = useState(false);

  const handleNext = e => {
    e.preventDefault();
    const expected = nextFizzBuzz(step);
    if (input.trim() === expected) {
      setSequence(s => [...s, input.trim()]);
      setStep(s => s + 1);
      setInput("");
      setMsg("");
    } else {
      setMsg(`Oops! Expected "${expected}"`);
      setLost(true);
    }
  };

  const reset = () => {
    setSequence(["1"]);
    setStep(2);
    setInput("");
    setMsg("");
    setLost(false);
  };

  return (
    <section className="game-card">
      <h2>FizzBuzz Mini</h2>
      <div>
        <strong>Sequence so far:</strong> {sequence.join(", ")}
      </div>
      {!lost && (
        <form onSubmit={handleNext} style={{ marginTop: 10 }}>
          <input
            type="text"
            placeholder={`#${step} (Fizz/Buzz/etc)`}
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{
              padding: "7px",
              fontSize: 17,
              borderRadius: "10px",
              width: 118,
              textAlign: "center"
            }}
            autoFocus
          />
          <button className="btn" type="submit" style={{ marginLeft: 8 }}>Enter</button>
        </form>
      )}
      <div style={{ minHeight: 23, margin: "8px 0", color: lost ? "#ff4c78" : "#04ffd2" }}>{msg}</div>
      {lost && (
        <button className="btn" onClick={reset}>Try Again</button>
      )}
    </section>
  );
}

export default FizzBuzzGame;
