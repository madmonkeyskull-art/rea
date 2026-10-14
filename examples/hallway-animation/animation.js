const hall = document.querySelector('#hall');
const walker = document.querySelector('#walker');
const head = document.querySelector('#head');
const eyes = document.querySelector('#eyes');
const pause = document.querySelector('#pause');
const speed = document.querySelector('#speed');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let playing = !reducedMotion.matches;
let elapsed = 0;
let previous;
const panels = Array.from({ length: 6 }, () => {
  const panel = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  panel.setAttribute('fill', '#b0ad96');
  panel.setAttribute('stroke', '#6c6e60');
  panel.setAttribute('stroke-width', '5');
  hall.append(panel);
  return panel;
});
function updateControls() {
  pause.textContent = playing ? 'Pause' : 'Play';
  pause.setAttribute('aria-pressed', String(!playing));
}
function render(time) {
  const step = time * Math.PI * 2 / 0.85;
  walker.setAttribute('transform', `translate(${Math.sin(step) * 4} ${Math.cos(step * 2) * 3}) rotate(${Math.sin(step) * 0.8} 240 320)`);
  head.setAttribute('transform', `rotate(${Math.sin(time * 1.8) * 4} 248 235) translate(${Math.sin(time * 1.8) * 2} 0)`);
  const blink = time % 3.4;
  const open = blink > 3.13 && blink < 3.31 ? Math.max(0.08, Math.abs(blink - 3.22) / 0.09) : 1;
  eyes.setAttribute('transform', `translate(0 ${142 * (1 - open)}) scale(1 ${open})`);
  panels.forEach((panel, index) => {
    const depth = ((index / panels.length + time * 0.075) % 1) ** 2;
    const x = 260 - depth * 330;
    const width = 8 + depth * 28;
    const top = 95 - depth * 82;
    const bottom = 330 + depth * 115;
    panel.setAttribute('d', `M${x} ${top}L${x + width} ${top + width * .31}V${bottom - width * .37}L${x} ${bottom}Z`);
  });
}
function tick(now) {
  if (previous !== undefined && playing) elapsed += Math.min((now - previous) / 1000, .05) * Number(speed.value);
  previous = now;
  render(elapsed);
  requestAnimationFrame(tick);
}
pause.addEventListener('click', () => { playing = !playing; updateControls(); });
document.querySelector('#replay').addEventListener('click', () => { elapsed = 0; render(elapsed); });
reducedMotion.addEventListener('change', event => { playing = !event.matches; updateControls(); });
document.addEventListener('visibilitychange', () => { previous = undefined; });
updateControls();
requestAnimationFrame(tick);
