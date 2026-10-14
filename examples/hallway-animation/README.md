# Hallway animation

A standalone procedural SVG interpretation of the supplied [hallway GIF](https://giphy.com/gifs/emo-pVuja7BJl0Eow). This is a stylized recreation of the motion and composition, not a frame-exact recreation of live-action footage.

From the repository root, run:

```sh
python3 -m http.server 4173 --directory examples/hallway-animation --bind 127.0.0.1
```

Open http://127.0.0.1:4173/. Pause/play, replay and speed controls work without dependencies. Reduced-motion preferences start the scene paused. Geometry lives in `index.html`; the walking, head sway, blink and hallway parallax timings live in `animation.js`.
