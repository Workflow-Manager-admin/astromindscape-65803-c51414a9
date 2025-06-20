import React, { useState, useEffect } from "react";

// PUBLIC_INTERFACE
/**
 * MemoryMiniGame
 * Flip cards to match emoji pairs. Fastest in fewest tries!
 */
const EMOJIS = ["🪐", "🌟", "⭐", "☄️", "🌑", "☀️", "🌈", "✨"];

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function MemoryMiniGame() {
  const [deck, setDeck] = useState(() => shuffle([...EMOJIS, ...EMOJIS]));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [tries, setTries] = useState(0);

  // On flip (idx)
  const flip = idx => {
    if (flipped.length === 2 || matched.includes(idx) || flipped.includes(idx)) return;
    setFlipped(f => [...f, idx]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      setTries(t => t + 1);
      const [a, b] = flipped;
      if (deck[a] === deck[b]) {
        setMatched(m => [...m, a, b]);
        setTimeout(() => setFlipped([]), 700);
      } else {
        setTimeout(() => setFlipped([]), 900);
      }
    }
  }, [flipped, deck]);

  const reset = () => {
    setDeck(shuffle([...EMOJIS, ...EMOJIS]));
    setFlipped([]);
    setMatched([]);
    setTries(0);
  };

  const win = matched.length === deck.length;

  return (
    <section className="game-card">
      <h2>Quick Memory Game</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(4, 48px)", gap: 8, justifyContent: "center", margin: "13px 0"}}>
        {deck.map((emj, idx) => {
          const isFaceUp = flipped.includes(idx) || matched.includes(idx);
          return (
            <button
              key={idx}
              onClick={() => flip(idx)}
              tabIndex={0}
              disabled={isFaceUp || flipped.length === 2}
              style={{
                width: 48, height: 48,
                borderRadius: 9,
                background: isFaceUp ? "#00ffc1" : "#131d24",
                color: isFaceUp ? "#181f2d" : "#e7e7ee",
                fontSize: 28,
                border: "2px solid #00ffc2",
                boxShadow: isFaceUp ? "0 1.5px 11px #00ffc222" : "0 1.5px 11px #111c2b11"
              }}
            >
              {isFaceUp ? emj : "?"}
            </button>
          );
        })}
      </div>
      {win ? (
        <div>
          <div style={{margin: "6px 0", color: "#00daff", fontWeight: 600}}>You matched all pairs in {tries} tries!</div>
          <button className="btn" onClick={reset}>Play Again</button>
        </div>
      ) : (
        <div style={{marginTop: 9, fontSize: 13, color: "#aac"}}>Tries: {tries}</div>
      )}
    </section>
  );
}

export default MemoryMiniGame;
