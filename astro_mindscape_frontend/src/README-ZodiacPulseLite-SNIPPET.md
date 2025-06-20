# ZodiacPulse Lite — README Snippet

ZodiacPulse Lite is an engaging, fully local astrology React app:  
- Choose your Sun sign, get personalized daily guidance and fun predictions  
- Browse detailed profiles for each zodiac sign  
- Explore planets and astrological houses with creative, human-written content  
- Enjoy astro mini-games and quizzes  
- Modern responsive UI, dark/light mode toggle, totally offline-friendly  
- *No API calls, no account needed—runs 100% in your browser*  

### Key Features:
- Functional modular React components
- Static data for signs, planets, houses, and predictions in `src/`
- LocalStorage for sign/theme memory
- Fast, touch-friendly, polished design (Tailwind-style)
- Optional Framer Motion transitions (extend with `<motion.div>` if desired)

To start:  
1. `cd astro_mindscape_frontend`
2. `npm install`
3. `npm start`

Source structure:
- `App.js` (main container)
- `NavBar.js` (navigation, theme control)
- `ZodiacSelector.js`, `DailyPrediction.js`, `SignProfile.js`
- `PlanetMeanings.js`, `HouseGuide.js`, `AstroGames.js`
- `zodiacData.js`, `planetsData.js`, `housesData.js` (static data)
- `StarSelectionGrid.js` (visually appealing, selectable grid of stars for user input)

**Component integration tip:**  
To let users choose a star and react to their selection, import and use the grid as follows:
```jsx
import StarSelectionGrid from "./StarSelectionGrid";
// ...
<StarSelectionGrid gridSize={5} onSelect={(star) => setStarChoice(star)} />
```

Best viewed in Chrome/Edge/Safari/Firefox.  
—
For any additions, expand the content arrays or document new features alongside the above pattern.
