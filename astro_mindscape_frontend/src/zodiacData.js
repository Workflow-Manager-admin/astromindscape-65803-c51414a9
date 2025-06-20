const zodiacData = {
  allSigns: [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ],
  Aries: {
    emoji: "♈",
    dates: "Mar 21 – Apr 19",
    element: "Fire",
    modality: "Cardinal",
    summary:
      "Energetic, pioneering, and direct. Aries loves to lead, initiate, and act fast. Sometimes impulsive but always bold.",
    strengths: [
      "Leadership",
      "Courage",
      "Enthusiasm",
      "Confidence",
      "Independence"
    ],
    challenges: [
      "Impatience",
      "Impulsiveness",
      "Short temper",
      "Self-focus"
    ],
    famous: "Leonardo da Vinci, Lady Gaga, Mariah Carey",
    predictions: {
      prediction: [
        "A surge of energy propels you forward—tackle that new project!",
        "Take a bold step today. You’re being noticed.",
        "Fiery momentum brings new beginnings—act with confidence!"
      ],
      mood: ["Driven", "Enthusiastic", "Restless", "Motivated"],
      color: [
        { name: "Red", hex: "#ff222b" },
        { name: "Scarlet", hex: "#e15560" },
        { name: "Bright Orange", hex: "#ff7f2b" }
      ],
      advice: [
        "Pause before reacting—thoughtful wins over hasty.",
        "Your drive is a gift; share it with others.",
        "Let spontaneity inspire, not overwhelm."
      ]
    }
  },
  Taurus: {
    emoji: "♉",
    dates: "Apr 20 – May 20",
    element: "Earth",
    modality: "Fixed",
    summary:
      "Steady, grounded, and practical. Taurus treasures comfort, loyalty, and beautiful things. Sometimes slow to change.",
    strengths: [
      "Patience",
      "Reliability",
      "Loyalty",
      "Attention to beauty",
      "Persistence"
    ],
    challenges: [
      "Stubbornness",
      "Materialism",
      "Resistance to change"
    ],
    famous: "William Shakespeare, Adele, Dwayne Johnson",
    predictions: {
      prediction: [
        "Establish a soothing routine today—comfort will anchor you.",
        "A new source of abundance is on the horizon—cultivate it.",
        "Slowing down reveals what’s precious."
      ],
      mood: ["Calm", "Serene", "Deliberate", "Grounded"],
      color: [
        { name: "Emerald", hex: "#42c78d" },
        { name: "Earth Brown", hex: "#927d51" },
        { name: "Pale Green", hex: "#a4e6b6" }
      ],
      advice: [
        "Flexibility can yield surprising pleasures.",
        "Trust your inner sense of value.",
        "Treat yourself but avoid over-indulgence."
      ]
    }
  },
  Gemini: {
    emoji: "♊",
    dates: "May 21 – Jun 20",
    element: "Air",
    modality: "Mutable",
    summary:
      "Quick, communicative, and curious. Gemini is a question-asker and storyteller—sometimes scattered but always clever.",
    strengths: [
      "Adaptability",
      "Intelligence",
      "Wit",
      "Social skills"
    ],
    challenges: [
      "Indecision",
      "Restlessness",
      "Superficiality"
    ],
    famous: "Angelina Jolie, Kanye West, John F. Kennedy",
    predictions: {
      prediction: [
        "A new idea sparks—share it with someone open-minded.",
        "Curiosity leads you to a valuable connection.",
        "Juggle tasks with playfulness, not pressure."
      ],
      mood: ["Playful", "Inquisitive", "Social", "Active"],
      color: [
        { name: "Yellow", hex: "#ffee60" },
        { name: "Sky Blue", hex: "#64bafc" },
        { name: "Mint", hex: "#99fafd" }
      ],
      advice: [
        "Let one thing capture your focus fully.",
        "Listen as much as you talk.",
        "Change your scenery to spark creativity."
      ]
    }
  },
  Cancer: {
    emoji: "♋",
    dates: "Jun 21 – Jul 22",
    element: "Water",
    modality: "Cardinal",
    summary:
      "Nurturing, intuitive, emotionally rich. Cancer craves comfort, home, and close bonds—sometimes withdrawn, always caring.",
    strengths: [
      "Empathy",
      "Loyalty",
      "Intuition",
      "Imagination"
    ],
    challenges: [
      "Moodiness",
      "Over-sensitivity",
      "Clinginess"
    ],
    famous: "Selena Gomez, Princess Diana, Elon Musk",
    predictions: {
      prediction: [
        "A feeling from the past brings insight—honor your emotions.",
        "Soothing rituals restore your peace today.",
        "Kindness shared returns to you multiplied."
      ],
      mood: ["Sensitive", "Comfortable", "Supportive", "Intuitive"],
      color: [
        { name: "Silver", hex: "#e0e5e7" },
        { name: "Seafoam", hex: "#84dcd6" },
        { name: "Pearl White", hex: "#f7f6ed" }
      ],
      advice: [
        "Don’t carry everyone else’s worries.",
        "Trust your hunches—your intuition is strong.",
        "Open up instead of closing off."
      ]
    }
  },
  Leo: {
    emoji: "♌",
    dates: "Jul 23 – Aug 22",
    element: "Fire",
    modality: "Fixed",
    summary:
      "Charismatic, generous, creative. Leo shines in the spotlight but rules with warmth—sometimes dramatic but always loyal.",
    strengths: [
      "Creativity",
      "Confidence",
      "Leadership",
      "Charisma"
    ],
    challenges: [
      "Pride",
      "Stubbornness",
      "Attention-seeking"
    ],
    famous: "Barack Obama, Madonna, Jennifer Lopez",
    predictions: {
      prediction: [
        "Show compassion as you lead—others will follow.",
        "A burst of inspiration enlivens creative pursuits.",
        "Recognition comes from a generous act."
      ],
      mood: ["Radiant", "Generous", "Proud", "Excited"],
      color: [
        { name: "Gold", hex: "#ffd700" },
        { name: "Orange", hex: "#ffc050" },
        { name: "Royal Purple", hex: "#7541cb" }
      ],
      advice: [
        "Let others shine beside you.",
        "A compliment means the world—give one today.",
        "Let your heart and art lead the way."
      ]
    }
  },
  Virgo: {
    emoji: "♍",
    dates: "Aug 23 – Sep 22",
    element: "Earth",
    modality: "Mutable",
    summary:
      "Analytical, practical, helpful. Virgo seeks improvement & order, helping others shine—sometimes critical, always caring.",
    strengths: [
      "Organization",
      "Attention to detail",
      "Helpfulness",
      "Intellect"
    ],
    challenges: [
      "Perfectionism",
      "Worry",
      "Critical tendencies"
    ],
    famous: "Beyoncé, Zendaya, Keanu Reeves",
    predictions: {
      prediction: [
        "Small improvements have big effects today.",
        "Share kindness—someone needs your gentle support.",
        "Let simple tasks soothe your mind."
      ],
      mood: ["Focused", "Organized", "Calm", "Helpful"],
      color: [
        { name: "Olive", hex: "#b5c266" },
        { name: "Earth Brown", hex: "#807452" },
        { name: "Ivory", hex: "#f7f6ed" }
      ],
      advice: [
        "Mistakes teach more than criticism.",
        "Give yourself credit for every small win.",
        "Perfection isn’t the goal—growth is."
      ]
    }
  },
  Libra: {
    emoji: "♎",
    dates: "Sep 23 – Oct 22",
    element: "Air",
    modality: "Cardinal",
    summary:
      "Charming, fair-minded, and sociable. Libra balances beauty and justice—sometimes indecisive, always diplomatic.",
    strengths: [
      "Diplomacy",
      "Fairness",
      "Aesthetic sense",
      "Sociability"
    ],
    challenges: [
      "Indecisiveness",
      "Avoidance of conflict",
      "People-pleasing"
    ],
    famous: "Kim Kardashian, Will Smith, Serena Williams",
    predictions: {
      prediction: [
        "A compromise opens new doors for you.",
        "Beauty inspires action; make your space lovely.",
        "Balance restores your peace."
      ],
      mood: ["Balanced", "Diplomatic", "Peaceful", "Social"],
      color: [
        { name: "Pale Blue", hex: "#a4c6f6" },
        { name: "Pink", hex: "#ebb9cb" },
        { name: "White", hex: "#fff" }
      ],
      advice: [
        "It’s okay to say no.",
        "Trust your sense of harmony.",
        "Collaboration offers surprise rewards."
      ]
    }
  },
  Scorpio: {
    emoji: "♏",
    dates: "Oct 23 – Nov 21",
    element: "Water",
    modality: "Fixed",
    summary:
      "Intense, magnetic, insightful. Scorpio sees beneath the surface—sometimes secretive but always passionate.",
    strengths: [
      "Determination",
      "Resourcefulness",
      "Emotional depth",
      "Courage"
    ],
    challenges: [
      "Jealousy",
      "Resentment",
      "Secretiveness"
    ],
    famous: "Drake, Anne Hathaway, Ryan Gosling",
    predictions: {
      prediction: [
        "Transformation is underway—embrace what changes.",
        "A private moment brings a revelation.",
        "Your resolve inspires others today."
      ],
      mood: ["Intense", "Focused", "Private", "Empowered"],
      color: [
        { name: "Burgundy", hex: "#802048" },
        { name: "Black", hex: "#10101a" },
        { name: "Teal", hex: "#53a0ac" }
      ],
      advice: [
        "Share your feelings—vulnerability is strength.",
        "Release what you cannot control.",
        "Use passion as a positive force."
      ]
    }
  },
  Sagittarius: {
    emoji: "♐",
    dates: "Nov 22 – Dec 21",
    element: "Fire",
    modality: "Mutable",
    summary:
      "Adventurous, open, and philosophical. Sagittarius seeks knowledge and freedom—sometimes blunt but always optimistic.",
    strengths: [
      "Optimism",
      "Adventurousness",
      "Honesty",
      "Wisdom"
    ],
    challenges: [
      "Impulsiveness",
      "Restlessness",
      "Tactlessness"
    ],
    famous: "Taylor Swift, Nicki Minaj, Brad Pitt",
    predictions: {
      prediction: [
        "An answer appears where you least expect it—be open.",
        "A new adventure awaits. Say yes.",
        "Learning brings joy—feed your mind."
      ],
      mood: ["Optimistic", "Energetic", "Philosophical", "Free"],
      color: [
        { name: "Purple", hex: "#7b6be2" },
        { name: "Royal Blue", hex: "#657cf7" },
        { name: "Gold", hex: "#ffc640" }
      ],
      advice: [
        "Listen deeply, even when you disagree.",
        "Spontaneity brings delight, not disaster.",
        "Root freedom in wisdom."
      ]
    }
  },
  Capricorn: {
    emoji: "♑",
    dates: "Dec 22 – Jan 19",
    element: "Earth",
    modality: "Cardinal",
    summary:
      "Ambitious, reliable, disciplined. Capricorn climbs high and stays steady—sometimes rigid but always dedicated.",
    strengths: [
      "Discipline",
      "Responsibility",
      "Practicality",
      "Ambition"
    ],
    challenges: [
      "Rigidity",
      "Workaholism",
      "Pessimism"
    ],
    famous: "Michelle Obama, LeBron James, Martin Luther King Jr.",
    predictions: {
      prediction: [
        "Structure brings unexpected rewards today.",
        "Your effort will soon be recognized—keep going.",
        "A tradition creates new meaning."
      ],
      mood: ["Grounded", "Determined", "Serious", "Reliable"],
      color: [
        { name: "Navy", hex: "#21305e" },
        { name: "Charcoal", hex: "#474d57" },
        { name: "Forest Green", hex: "#586a2d" }
      ],
      advice: [
        "Loosen up your schedule for surprise joy.",
        "Rely on long-term plans, not just short wins.",
        "Let loved ones support your dreams."
      ]
    }
  },
  Aquarius: {
    emoji: "♒",
    dates: "Jan 20 – Feb 18",
    element: "Air",
    modality: "Fixed",
    summary:
      "Innovative, idealistic, humanitarian. Aquarius sees the future—sometimes eccentric but always original.",
    strengths: [
      "Originality",
      "Visionary thinking",
      "Friendliness",
      "Independence"
    ],
    challenges: [
      "Detachment",
      "Aloofness",
      "Unpredictability"
    ],
    famous: "Oprah Winfrey, Harry Styles, Ellen DeGeneres",
    predictions: {
      prediction: [
        "Break the mold—your ideas matter today.",
        "A friend brings good news.",
        "An experiment leads to insight."
      ],
      mood: ["Inventive", "Humanitarian", "Unconventional", "Inspired"],
      color: [
        { name: "Electric Blue", hex: "#3fd0fc" },
        { name: "Aqua", hex: "#36e3dc" },
        { name: "Silver", hex: "#b5c6cc" }
      ],
      advice: [
        "Remember to ground your dreams in reality.",
        "Reach out to an old acquaintance.",
        "Let change be your friend."
      ]
    }
  },
  Pisces: {
    emoji: "♓",
    dates: "Feb 19 – Mar 20",
    element: "Water",
    modality: "Mutable",
    summary:
      "Compassionate, creative, receptive. Pisces glides through feeling and fantasy—sometimes escapist, always imaginative.",
    strengths: [
      "Empathy",
      "Creativity",
      "Intuition",
      "Adaptability"
    ],
    challenges: [
      "Escapism",
      "Over-sensitivity",
      "Indecision"
    ],
    famous: "Rihanna, Steve Jobs, Albert Einstein",
    predictions: {
      prediction: [
        "A dream inspires a real-world action—listen to your instincts.",
        "Creative pursuits bring peace today.",
        "A gentle word can heal more than you know."
      ],
      mood: ["Dreamy", "Gentle", "Imaginative", "Compassionate"],
      color: [
        { name: "Sea Green", hex: "#98dde3" },
        { name: "Lavender", hex: "#a7a6e4" },
        { name: "Plum", hex: "#6d2956" }
      ],
      advice: [
        "Don’t lose yourself in others’ emotions.",
        "Make art, music, or poetry today.",
        "Trust your creative flow—it’s leading you right."
      ]
    }
  }
};

export default zodiacData;
