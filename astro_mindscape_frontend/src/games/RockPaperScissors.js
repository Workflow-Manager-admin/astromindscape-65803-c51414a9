import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * RockPaperScissors
 * Classic game vs computer opponent.
 */
function RockPaperScissors() {
  const moves = [
    { name: "Rock", emoji: "✊" },
    { name: "Paper", emoji: "✋" },
    { name: "Scissors", emoji: "✌️" }
  ];
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  function play(moveIdx) {
    const compIdx = Math.floor(Math.random() * 3);
    setPlayer(moveIdx);
    setComputer(compIdx);

    if (moveIdx === compIdx) {
      setResult("Tie!");
      setScore(sc => ({ ...sc, ties: sc.ties + 1 }));
    } else if (
      (moveIdx === 0 && compIdx === 2) ||
      (moveIdx === 1 && compIdx === 0) ||
      (moveIdx === 2 && compIdx === 1)
    ) {
      setResult("You win!");
      setScore(sc => ({ ...sc, wins: sc.wins + 1 }));
    } else {
      setResult("You lose!");
      setScore(sc => ({ ...sc, losses: sc.losses + 1 }));
    }
  }

  const reset = () => {
    setPlayer(null);
    setComputer(null);
    setResult("");
  };

  return (
    <section className="game-card">
      <h2>Rock Paper Scissors</h2>
      <div style={{ margin: "14px 0" }}>
        {moves.map((m, i) => (
          <button className="btn" key={m.name} onClick={() => play(i)} style={{ margin: "0 5px" }}>
            {m.emoji} {m.name}
          </button>
        ))}
      </div>
      {player !== null && (
        <div>
          <div>
            You: <span>{moves[player].emoji}</span> | Computer: <span>{moves[computer].emoji}</span>
          </div>
          <div style={{ fontWeight: 600, color: "#00ffc1" }}>{result}</div>
          <button className="btn mt-2" onClick={reset}>Play again</button>
        </div>
      )}
      <div style={{ marginTop: 15, fontSize: 13, color: "#aac"}}>
        Score - Wins: {score.wins} Losses: {score.losses} Ties: {score.ties}
      </div>
    </section>
  );
}

export default RockPaperScissors;
