import React, { useState } from "react";
import zodiacData from "./zodiacData";

// PUBLIC_INTERFACE
/**
 * Fun astrology mini-games. Includes: sign personality quiz, emoji match.
 */
function AstroGames({ sign }) {
  // Main game: choose personality/emoji/result screens
  const [step, setStep] = useState("choose");

  // For quiz track
  const [answers, setAnswers] = useState([]); // Personality quiz answers (indices)
  const [quizScore, setQuizScore] = useState(null);

  // For emoji match track
  const [emojiData, setEmojiData] = useState(null); // { correctAnswer, opts }
  const [emojiSelected, setEmojiSelected] = useState(null);
  const [emojiGameOver, setEmojiGameOver] = useState(false);

  // Questions for personality quiz
  const questions = [
    {
      q: "Your ideal weekend is...",
      options: [
        { a: "Leading an adventure", sign: "Aries" },
        { a: "Luxury and calm at home", sign: "Taurus" },
        { a: "Meeting new faces", sign: "Gemini" },
        { a: "Time with close family", sign: "Cancer" },
      ],
    },
    {
      q: "Your top skill is...",
      options: [
        { a: "Dramatic self-expression", sign: "Leo" },
        { a: "Complex analysis", sign: "Virgo" },
        { a: "Mediating conflict", sign: "Libra" },
        { a: "Mastering your passion", sign: "Scorpio" },
      ],
    },
    {
      q: "You recharge by...",
      options: [
        { a: "Travel and learning", sign: "Sagittarius" },
        { a: "Building your empire", sign: "Capricorn" },
        { a: "Inventing something new", sign: "Aquarius" },
        { a: "Dreaming, swimming or art", sign: "Pisces" },
      ],
    },
    {
      q: "Biggest challenge?",
      options: [
        { a: "Impatience", sign: "Aries" },
        { a: "Stubbornness", sign: "Taurus" },
        { a: "Scattered focus", sign: "Gemini" },
        { a: "Over-sensitivity", sign: "Cancer" },
      ],
    },
  ];

  // Handle quiz answer selection
  function handleChooseQuiz(idx) {
    const next = [...answers, idx];
    setAnswers(next);

    if (next.length === questions.length) {
      // Compute result
      let allSigns = [];
      questions.forEach((qq, i) => {
        allSigns.push(qq.options[next[i]].sign);
      });
      // Get the sign that occurred the most
      const tally = {};
      allSigns.forEach((s) => (tally[s] = (tally[s] || 0) + 1));
      let res = Object.entries(tally).sort((a, b) => b[1] - a[1]);
      const result = res[0][0];
      setQuizScore(result);
      setStep("result");
    }
  }

  // Reset quiz
  function resetQuiz() {
    setQuizScore(null);
    setAnswers([]);
    setStep("quiz");
  }

  // Start quiz
  function startQuiz() {
    setQuizScore(null);
    setAnswers([]);
    setStep("quiz");
  }

  // Prepare emoji match data randomly
  function initEmojiMatch() {
    const all = zodiacData.allSigns;
    let qIndex = Math.floor(Math.random() * all.length);
    const correctAnswer = all[qIndex];
    let others = all.filter((z) => z !== correctAnswer);
    others = others.sort(() => Math.random() - 0.5);
    let opts = [correctAnswer, ...others.slice(0, 3)].sort(() => Math.random() - 0.5);

    setEmojiData({ correctAnswer, opts });
    setEmojiSelected(null);
    setEmojiGameOver(false);
    setStep("emoji");
  }

  // Handle emoji select
  function handleEmojiSelect(opt) {
    setEmojiSelected(opt);
    setEmojiGameOver(true);
  }

  // UI Renderings
  if (step === "choose") {
    return (
      <section className="data-section flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">Astro Mini Games</h2>
        <button className="btn mb-2" onClick={startQuiz}>
          Astrology Personality Quiz
        </button>
        <button className="btn mb-2" onClick={initEmojiMatch}>
          Zodiac Emoji Match
        </button>
      </section>
    );
  }

  if (step === "quiz") {
    const current = answers.length;
    if (current < questions.length) {
      const q = questions[current];
      return (
        <section className="data-section">
          <div className="flex flex-col items-center">
            <div className="mb-2 font-bold">{q.q}</div>
            <div className="flex flex-col gap-2">
              {q.options.map((opt, i) => (
                <button key={i} className="btn" onClick={() => handleChooseQuiz(i)} tabIndex={0}>
                  {opt.a}
                </button>
              ))}
            </div>
          </div>
        </section>
      );
    } else {
      // Quiz is complete, but the result logic is handled above
      // This branch will be very brief
      return null;
    }
  }

  if (step === "result") {
    return (
      <section className="data-section flex flex-col items-center">
        <div className="font-bold">
          Your star match: <span className="text-cyan-400">{quizScore}</span>{" "}
          {zodiacData[quizScore].emoji}
        </div>
        <div className="mb-2">{zodiacData[quizScore].summary}</div>
        <button className="btn" onClick={resetQuiz}>
          Play Again
        </button>
        <button className="btn mt-1" onClick={() => setStep("choose")}>
          Astro Games Home
        </button>
      </section>
    );
  }

  if (step === "emoji" && emojiData) {
    const { correctAnswer, opts } = emojiData;
    return (
      <section className="data-section">
        <div className="flex flex-col items-center">
          <div className="font-semibold mb-2">
            Which sign uses this emoji?
            <span className="ml-3 text-2xl">{zodiacData[correctAnswer].emoji}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {opts.map((opt) => (
              <button
                key={opt}
                className={`btn ${
                  emojiGameOver && opt === correctAnswer
                    ? "bg-green-500 text-white"
                    : ""
                }
                ${emojiGameOver && emojiSelected === opt && opt !== correctAnswer
                  ? "bg-red-400 text-white"
                  : ""}
                `}
                disabled={emojiGameOver}
                onClick={() => handleEmojiSelect(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          {emojiGameOver && (
            <div className="mt-2">
              {emojiSelected === correctAnswer
                ? "🌟 Correct!"
                : `Oops! That was ${correctAnswer} ${zodiacData[correctAnswer].emoji}`}
            </div>
          )}
          {emojiGameOver && (
            <>
              <button className="btn mt-2" onClick={initEmojiMatch}>
                Play again
              </button>
              <button className="btn mt-2" onClick={() => setStep("choose")}>
                Astro Games Home
              </button>
            </>
          )}
        </div>
      </section>
    );
  }

  return null;
}
export default AstroGames;
