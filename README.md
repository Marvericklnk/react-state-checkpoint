# React State Checkpoint

A class-based React profile app for GoMyCode, by Marvin. Uses Create React App's react-scripts setup, based on the previously generated CRA starter.

## Run in VS Code
Download and extract the repository ZIP. Open the folder containing package.json, then choose Terminal > New Terminal:

```bash
npm install
npm start
```

Open the localhost address printed in the terminal. Use npm start, not Live Server or npm run dev.

## Requirements
- src/App.js exports a class App that extends Component.
- Its state contains Person (fullName, bio, imgSrc, profession), shows, and seconds.
- shows starts false. The button uses functional setState to toggle it.
- When shows is true, the profile and its local illustration are rendered.
- componentDidMount starts setInterval. Elapsed seconds are calculated from the mount timestamp.
- componentWillUnmount clears the interval.
- Hiding the profile does not unmount App, so the timer continues. Reloading or remounting App restarts it.

## Customise
Edit the Person object in src/App.js. public/profile.svg is a generic illustration, not a photograph of Marvin. Styling is in src/App.css.

## Checks
npm run build

CI=true npm test -- --watchAll=false

The test checks show/hide behaviour, elapsed time while hidden, and interval cleanup on unmount.

Create React App is deprecated but retained to match this checkpoint. Prepared with ChatGPT/Codex assistance.
