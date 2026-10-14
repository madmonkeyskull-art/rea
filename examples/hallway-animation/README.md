# Hallway animation

A standalone hallway animation using the supplied cartoon character and walking motion inspired by the [hallway GIF](https://giphy.com/gifs/emo-pVuja7BJl0Eow). The character is a transparent cutout derived from the supplied illustration. Its walking bob and sway and the hallway parallax are animated in JavaScript.

From the repository root, run:

```sh
python3 -m http.server 4173 --directory examples/hallway-animation --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. Pause/play, replay and speed controls work without dependencies. Reduced-motion preferences start the scene paused. Geometry lives in `index.html`; the walking, body sway and hallway parallax timings live in `animation.js`.
