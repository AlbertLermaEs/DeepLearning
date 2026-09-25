// Figure 5 (optimizers on a ravine) + Figure 6 (batch / mini-batch / stochastic)
const OPT_T = { start: 'inicio', min: 'mínimo' };
const F = (x, y) => x * x / 10 + 2 * y * y;
const G = (x, y) => [x / 5, 4 * y];
const START = [-7, 2], N = 80;

function simulate(kind) {
  let [x, y] = START, vx = 0, vy = 0, sx = 0, sy = 0, mx = 0, my = 0;
  const out = [[x, y]], eps = 1e-8;
  for (let t = 1; t <= N; t++) {
    let [gx, gy] = G(x, y);
    if (kind === 'SGD') { x -= 0.45 * gx; y -= 0.45 * gy; }
    else if (kind === 'Momentum') { vx = 0.9 * vx + 0.04 * gx; vy = 0.9 * vy + 0.04 * gy; x -= vx; y -= vy; }
    else if (kind === 'NAG') { [gx, gy] = G(x - 0.9 * vx, y - 0.9 * vy); vx = 0.9 * vx + 0.04 * gx; vy = 0.9 * vy + 0.04 * gy; x -= vx; y -= vy; }
    else if (kind === 'Adagrad') { sx += gx * gx; sy += gy * gy; x -= 1.2 * gx / Math.sqrt(sx + eps); y -= 1.2 * gy / Math.sqrt(sy + eps); }
    else if (kind === 'RMSProp') { sx = 0.9 * sx + 0.1 * gx * gx; sy = 0.9 * sy + 0.1 * gy * gy; x -= 0.12 * gx / Math.sqrt(sx + eps); y -= 0.12 * gy / Math.sqrt(sy + eps); }
    else if (kind === 'Adam') { mx = 0.9 * mx + 0.1 * gx; my = 0.9 * my + 0.1 * gy; sx = 0.999 * sx + 0.001 * gx * gx; sy = 0.999 * sy + 0.001 * gy * gy; const c1 = 1 - 0.9 ** t, c2 = 1 - 0.999 ** t; x -= 0.3 * (mx / c1) / (Math.sqrt(sx / c2) + eps); y -= 0.3 * (my / c1) / (Math.sqrt(sy / c2) + eps); }
    out.push([x, y]);
  }
  return out;
}

const OPTS = [
  { k: 'SGD', color: 'var(--ink-500)', tex: String.raw`w \leftarrow w - \alpha\,\nabla J(w)`, note: 'El descenso simple. En un valle alargado rebota de pared a pared y avanza despacio hacia el mínimo.' },
  { k: 'Momentum', color: 'var(--cat-1)', tex: String.raw`v \leftarrow \beta v + \alpha\nabla J(w)\\ w \leftarrow w - v`, note: 'Acumula una velocidad v con los gradientes anteriores. Las oscilaciones se cancelan y la dirección constante se acelera, como una bola que rueda.' },
  { k: 'NAG', color: 'var(--cat-3)', tex: String.raw`v \leftarrow \beta v + \alpha\nabla J(w-\beta v)\\ w \leftarrow w - v`, note: 'Nesterov mira hacia adelante: evalúa el gradiente donde la velocidad nos va a llevar, y así frena antes de pasarse.' },
  { k: 'Adagrad', color: 'var(--cat-8)', tex: String.raw`G \leftarrow G + g^2\\ w \leftarrow w - \frac{\alpha}{\sqrt{G+\epsilon}}\,g`, note: 'Cada peso tiene su propia tasa, que se reduce según la suma de sus gradientes al cuadrado. Con el tiempo los pasos se vuelven muy pequeños.' },
  { k: 'RMSProp', color: 'var(--cat-6)', tex: String.raw`E[g^2] \leftarrow \rho E[g^2] + (1-\rho)g^2\\ w \leftarrow w - \frac{\alpha}{\sqrt{E[g^2]+\epsilon}}\,g`, note: 'Como Adagrad, pero con un promedio móvil que olvida el pasado. La tasa ya no se apaga.' },
  { k: 'Adam', color: 'var(--iris-600)', tex: String.raw`m \leftarrow \beta_1 m + (1-\beta_1)g\\ s \leftarrow \beta_2 s + (1-\beta_2)g^2\\ w \leftarrow w - \alpha\,\frac{\hat m}{\sqrt{\hat s}+\epsilon}`, note: 'Combina las dos ideas: el primer momento m suaviza la dirección y el segundo momento s escala la tasa de cada peso.' },
];

function OptimizerFigure() {
  const { Diagram, Label, SegmentedControl, Button, Equation } = MG;
  const [sel, setSel] = React.useState('Momentum');
  const [k, setK] = React.useState(N);
  const raf = React.useRef();
  const ref = React.useRef(null);
  const seen = useInView(ref);
  const paths = React.useMemo(() => Object.fromEntries(OPTS.map((o) => [o.k, simulate(o.k)])), []);
  const play = () => {
    cancelAnimationFrame(raf.current);
    const t0 = performance.now();
    const tick = (now) => { const n = Math.min(N, Math.floor((now - t0) / 45)); setK(n); if (n < N) raf.current = requestAnimationFrame(tick); };
    raf.current = requestAnimationFrame(tick);
  };
  React.useEffect(() => { if (seen) play(); }, [seen]);
  React.useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const PX = (x) => 20 + (x + 8) * 58, PY = (y) => 180 - y * 53;
  const levels = [0.1, 0.4, 1, 2, 3.5, 5.5, 8, 11, 14, 18];
  const o = OPTS.find((d) => d.k === sel);
  const d = (pts) => pts.slice(0, k + 1).map(([x, y], i) => `${i ? 'L' : 'M'}${PX(x).toFixed(1)},${PY(Math.max(-3.3, Math.min(3.3, y))).toFixed(1)}`).join('');
  const [ex, ey] = paths[sel][k];
  return (
    <div ref={ref} className="fig-stack">
      <SegmentedControl size="sm" options={OPTS.map((d) => d.k)} value={sel} onChange={setSel}></SegmentedControl>
      <div className="optim-grid">
        <Diagram width={620} height={360}>
          <defs><clipPath id="optclip"><rect x="20" y="20" width="580" height="320" rx="10"></rect></clipPath></defs>
          <rect x="20" y="20" width="580" height="320" rx="10" style={{ fill: 'var(--paper)', stroke: 'var(--ink-200)' }}></rect>
          <g clipPath="url(#optclip)">
            {levels.map((c, i) => (
              <ellipse key={c} cx={PX(0)} cy={PY(0)} rx={Math.sqrt(10 * c) * 58} ry={Math.sqrt(c / 2) * 53} style={{ fill: `var(--seq-${Math.min(6, i < 3 ? 0 : i - 3)})`, fillOpacity: 0, stroke: 'var(--seq-3)', strokeOpacity: 0.25 + 0.5 * (1 - i / levels.length), strokeWidth: 1 }}></ellipse>
            ))}
            {OPTS.filter((d) => d.k !== sel).map((d2) => (
              <path key={d2.k} d={d(paths[d2.k])} style={{ fill: 'none', stroke: d2.color, strokeWidth: 1.5, opacity: 0.22 }}></path>
            ))}
            <path d={d(paths[sel])} style={{ fill: 'none', stroke: o.color, strokeWidth: 2.5, strokeLinejoin: 'round' }}></path>
            <circle cx={PX(ex)} cy={PY(Math.max(-3.3, Math.min(3.3, ey)))} r="6" style={{ fill: o.color, stroke: 'var(--paper)', strokeWidth: 2 }}></circle>
          </g>
          <circle cx={PX(START[0])} cy={PY(START[1])} r="5" style={{ fill: 'var(--ink-900)' }}></circle>
          <Label x={PX(START[0]) + 10} y={PY(START[1]) - 12} variant="caption">{OPT_T.start}</Label>
          <path d={`M${PX(0) - 6},${PY(0)} L${PX(0) + 6},${PY(0)} M${PX(0)},${PY(0) - 6} L${PX(0)},${PY(0) + 6}`} style={{ stroke: 'var(--ink-900)', strokeWidth: 2 }}></path>
          <Label x={PX(0)} y={PY(0) + 24} anchor="middle" variant="caption">{OPT_T.min}</Label>
        </Diagram>
        <div className="optim-side">
          <div className="optim-name" style={{ color: o.color }}>{o.k}</div>
          <Equation key={sel} display tex={String.raw`\begin{aligned}${o.tex.split('\\\\').map((l) => l.replace(/\\leftarrow/, '&\\leftarrow')).join('\\\\')}\end{aligned}`}></Equation>
          <p className="aside">{o.note}</p>
          <div className="mono-note">{`paso ${k} · J = ${F(ex, ey).toFixed(3)}`}</div>
        </div>
      </div>
      <div className="fig-controls">
        <Button size="sm" variant="primary" icon="play" onClick={play}>Repetir animación</Button>
      </div>
    </div>
  );
}

function VariantsFigure() {
  const { LineChart, Panel } = MG;
  const rng = (seed) => () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; };
  const mk = (n, noise, seed) => { const r = rng(seed); return Array.from({ length: n }, (_, i) => [i, Math.max(0.02, 2 * Math.exp(-i / (n / 4)) + 0.1 + noise * r() * (0.5 + Math.exp(-i / (n / 3))))]); };
  const rows = [
    { t: 'Por lotes (batch)', m: 'todos los datos por paso', data: mk(20, 0, 1), c: 'var(--sky-600)' },
    { t: 'Mini-lotes', m: 'B ejemplos por paso', data: mk(80, 0.35, 7), c: 'var(--iris-600)' },
    { t: 'Estocástico (SGD)', m: 'un ejemplo por paso', data: mk(160, 1.1, 3), c: 'var(--coral-500)' },
  ];
  return (
    <div className="variants-grid">
      {rows.map((r) => (
        <Panel key={r.t} variant="rule" title={r.t} meta={r.m}>
          <LineChart series={[{ data: r.data, color: r.c, width: 1.75 }]} width={280} height={180} xLabel="actualizaciones" yLabel="pérdida" yDomain={[0, 2.6]} xTicks={3} yTicks={3}></LineChart>
        </Panel>
      ))}
    </div>
  );
}

Object.assign(window, { OptimizerFigure, VariantsFigure });
