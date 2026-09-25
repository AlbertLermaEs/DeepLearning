// Shared helpers + Figure 1 (neuron) + Figure 2 (forward/backward pass)
const MG = window.MarginaliaDesignSystem_e96b41;

function useInView(ref, threshold = 0.35) {
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return seen;
}

function useTween(duration) {
  const [t, setT] = React.useState(1);
  const raf = React.useRef();
  const play = React.useCallback(() => {
    cancelAnimationFrame(raf.current);
    const t0 = performance.now();
    const tick = (now) => { const k = Math.min(1, (now - t0) / duration); setT(k); if (k < 1) raf.current = requestAnimationFrame(tick); };
    raf.current = requestAnimationFrame(tick);
  }, [duration]);
  React.useEffect(() => () => cancelAnimationFrame(raf.current), []);
  return [t, play];
}

function Section({ title, id, children }) {
  const ref = React.useRef(null);
  const seen = useInView(ref, 0.1);
  return (
    <section ref={ref} id={id} className="mg-section">
      <MG.Reveal show={seen}>
        {title && <h2 className="mg-h2">{title}</h2>}
        {children}
      </MG.Reveal>
    </section>
  );
}

const f2 = (v) => (v >= 0 ? '' : '−') + Math.abs(v).toFixed(2);
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.max(0, Math.min(1, v));

const ACTS = {
  'Sigmoide': (z) => 1 / (1 + Math.exp(-z)),
  'Tanh': (z) => Math.tanh(z),
  'ReLU': (z) => Math.max(0, z),
};

const NEURON_NOTES = ['Primero, cada entrada se\nmultiplica por su peso.', 'Luego, los productos se\nsuman junto con el sesgo b.', 'Finalmente, la activación f\nintroduce la no linealidad.'];
/* ——— Figure 1: the artificial neuron ——— */
function NeuronFigure() {
  const { Diagram, GraphNode, OpNode, Connector, Label, Region, Slider, SegmentedControl, Button, HoverHint } = MG;
  const xs = [1.0, 0.5, -0.8];
  const [w, setW] = React.useState([0.8, -0.4, 0.6]);
  const [b, setB] = React.useState(0.2);
  const [act, setAct] = React.useState('Sigmoide');
  const [t, play] = useTween(1800);
  const ref = React.useRef(null);
  const seen = useInView(ref);
  React.useEffect(() => { if (seen) play(); }, [seen]);

  const z = xs.reduce((s, x, i) => s + x * w[i], 0) + b;
  const f = ACTS[act];
  const y = f(z);
  const Y = [90, 190, 290], SX = 430, SY = 190;

  // activation mini-plot inside region (560..710, 130..250)
  const px = (v) => 572 + ((v + 4) / 8) * 126;
  const [lo, hi] = act === 'ReLU' ? [-0.5, 4] : act === 'Tanh' ? [-1.2, 1.2] : [-0.1, 1.1];
  const py = (v) => 238 - ((Math.min(hi, Math.max(lo, v)) - lo) / (hi - lo)) * 96;
  const curve = Array.from({ length: 81 }, (_, i) => { const zz = -4 + i * 0.1; return `${i ? 'L' : 'M'}${px(zz).toFixed(1)},${py(f(zz)).toFixed(1)}`; }).join('');
  const zc = Math.max(-4, Math.min(4, z));

  const p1 = clamp01(t / 0.45), p2 = clamp01((t - 0.45) / 0.25), p3 = clamp01((t - 0.7) / 0.3);
  const reached = (p) => ({ opacity: p > 0 ? 1 : 0.25, transition: 'opacity var(--dur-reveal) var(--ease-out)' });
  const setWi = (i) => (v) => { const n = [...w]; n[i] = v; setW(n); };

  return (
    <div ref={ref} className="fig-stack">
      <Diagram width={900} height={420}>
        {xs.map((x, i) => {
          const tone = w[i] >= 0 ? 'positive' : 'negative';
          const mx = lerp(120, 400, 0.45), my = lerp(Y[i], SY, 0.45);
          return (
            <g key={i}>
              <Connector from={[122, Y[i]]} to={[400, SY]} tone={tone} width={1 + Math.abs(w[i]) * 3.2}></Connector>
              <Label x={150} y={Y[i] - 40} variant="tick" fontSize={14}>{`w${i + 1} = ${f2(w[i])}`}</Label>
              {p1 > 0 && p1 < 1 && <circle cx={lerp(122, 400, p1)} cy={lerp(Y[i], SY, p1)} r="6" style={{ fill: 'var(--coral-500)' }}></circle>}
              <GraphNode x={90} y={Y[i]} r={30} label={`x${i + 1}`} tone="white" math></GraphNode>
              <Label x={52} y={Y[i] + 5} anchor="end" variant="tick" fontSize={14}>{`${x.toFixed(1)}`}</Label>
            </g>
          );
        })}
        <GraphNode x={SX} y={56} r={22} label="b" tone="gray" math></GraphNode>
        <Label x={SX + 32} y={60} variant="math">{`= ${f2(b)}`}</Label>
        <Connector from={[SX, 78]} to={[SX, 158]}></Connector>
        <g style={reached(p1 >= 1 ? 1 : 0)}>
          <OpNode x={SX} y={SY} r={30} op="Σ" tone="focus"></OpNode>
          <Label x={SX} y={SY + 52} anchor="middle" variant="math">{`z = ${f2(z)}`}</Label>
        </g>
        <Connector from={[SX + 32, SY]} to={[556, SY]}></Connector>
        {p2 > 0 && p2 < 1 && <circle cx={lerp(SX + 32, 556, p2)} cy={SY} r="6" style={{ fill: 'var(--coral-500)' }}></circle>}
        <g style={reached(p2 >= 1 ? 1 : 0)}>
          <Region x={560} y={130} w={150} h={120} tone="well"></Region>
          <line x1={px(0)} y1={136} x2={px(0)} y2={244} style={{ stroke: 'var(--ink-300)', strokeWidth: 1 }}></line>
          <path d={curve} style={{ fill: 'none', stroke: 'var(--iris-600)', strokeWidth: 2 }}></path>
          <circle cx={px(zc)} cy={py(f(zc))} r="5" style={{ fill: 'var(--ink-900)', transition: 'all var(--dur-base, 240ms) var(--ease-out)' }}></circle>
          <Label x={635} y={112} anchor="middle" variant="strong">{`f(z) · ${act.toLowerCase()}`}</Label>
        </g>
        <Connector from={[712, SY]} to={[784, SY]}></Connector>
        {p3 > 0 && p3 < 1 && <circle cx={lerp(712, 784, p3)} cy={SY} r="6" style={{ fill: 'var(--coral-500)' }}></circle>}
        <g style={reached(p3 >= 1 ? 1 : 0)}>
          <GraphNode x={820} y={SY} r={32} label="ŷ" tone="coral" math></GraphNode>
          <Label x={820} y={SY + 54} anchor="middle" variant="math">{`= ${f2(y)}`}</Label>
        </g>
        <Label x={150} y={346} variant="serif">{NEURON_NOTES[0]}</Label>
        <Label x={372} y={346} variant="serif">{NEURON_NOTES[1]}</Label>
        <Label x={600} y={346} variant="serif">{NEURON_NOTES[2]}</Label>
      </Diagram>
      <div className="fig-controls">
        <HoverHint pulse></HoverHint>
        {w.map((wi, i) => (
          <Slider key={i} label={`w${i + 1}`} min={-1} max={1} step={0.01} value={wi} onChange={setWi(i)} format={f2} tone={wi >= 0 ? 'positive' : 'negative'} width={150}></Slider>
        ))}
        <Slider label="b" min={-1} max={1} step={0.01} value={b} onChange={setB} format={f2} width={150}></Slider>
      </div>
      <div className="fig-controls">
        <SegmentedControl size="sm" options={Object.keys(ACTS)} value={act} onChange={setAct}></SegmentedControl>
        <Button size="sm" icon="play" onClick={play}>Propagar</Button>
      </div>
    </div>
  );
}

/* ——— Figure 2: forward pass, loss, backward pass, update ——— */
function PassesFigure() {
  const { Diagram, GraphNode, Connector, Label, Button } = MG;
  const X = 1.5, B = 0.1, TGT = 1, ALPHA = 2;
  const [state, setState] = React.useState({ w: 0.2, it: 1, phase: 0, hist: [] });
  const { w, it, phase } = state;
  const z = w * X + B, yh = 1 / (1 + Math.exp(-z)), L = (TGT - yh) ** 2;
  const dLdy = -2 * (TGT - yh), dydz = yh * (1 - yh), dzdw = X, dLdw = dLdy * dydz * dzdw;
  const wNew = w - ALPHA * dLdw;
  const hist = [...state.hist, L];

  const next = () => {
    if (phase < 3) setState({ ...state, phase: phase + 1 });
    else setState({ w: wNew, it: it + 1, phase: 0, hist: [...state.hist, L] });
  };
  const reset = () => setState({ w: 0.2, it: 1, phase: 0, hist: [] });

  const notes = [
    'Primero, la propagación hacia adelante:\nla entrada fluye por la neurona\nhasta producir una predicción ŷ.',
    'Comparamos ŷ con el valor real y.\nLa pérdida L mide qué tan lejos\nquedó la predicción.',
    'Después, la propagación hacia atrás:\ncon la regla de la cadena calculamos\ncuánto contribuyó w al error.',
    'Finalmente, movemos w en sentido\ncontrario al gradiente. La siguiente\npasada tendrá una pérdida menor.',
  ];
  const box = (x, wd, title, val, on, focus) => (
    <g style={{ opacity: on ? 1 : 0.3, transition: 'opacity var(--dur-reveal) var(--ease-out)' }}>
      <rect x={x} y={104} width={wd} height={84} rx="6" style={{ fill: focus ? 'var(--iris-100)' : 'var(--paper)', stroke: focus ? 'var(--iris-600)' : 'var(--ink-600)', strokeWidth: focus ? 2 : 1.5, filter: 'drop-shadow(1px 2px 0 rgba(0,0,0,.10))' }}></rect>
      <Label x={x + wd / 2} y={132} anchor="middle" variant="math" fontSize={17}>{title}</Label>
      <Label x={x + wd / 2} y={172} anchor="middle" variant="tick" fontSize={14}>{val}</Label>
    </g>
  );
  const fwd = phase >= 0, bwd = phase >= 2;
  // loss history sparkline
  const hx = (i) => 700 + i * (160 / 9), hy = (v) => 330 - (v / 0.7) * 60;
  return (
    <div className="fig-stack">
      <Diagram width={900} height={400}>
        <GraphNode x={320} y={44} r={24} label="w" tone={phase === 3 ? 'focus' : 'gray'} math></GraphNode>
        <Label x={352} y={40} variant="tick">{phase === 3 ? `${w.toFixed(2)} → ${wNew.toFixed(2)}` : w.toFixed(2)}</Label>
        <Connector from={[320, 68]} to={[320, 108]} tone={phase === 3 ? 'focus' : 'ink'}></Connector>
        <GraphNode x={790} y={44} r={24} label="y" tone="gray" math></GraphNode>
        <Label x={822} y={40} variant="tick">{TGT.toFixed(2)}</Label>
        <Connector from={[790, 68]} to={[790, 108]}></Connector>
        {box(40, 110, 'x', X.toFixed(2), true)}
        {box(240, 160, 'z = wx + b', z.toFixed(3), fwd, phase === 0)}
        {box(480, 160, 'ŷ = σ(z)', yh.toFixed(3), fwd, phase === 0)}
        {box(720, 140, 'L = (y − ŷ)²', L.toFixed(4), phase >= 1, phase === 1)}
        <Connector key={`f${it}a`} from={[152, 128]} to={[236, 128]} tone="positive" draw></Connector>
        <Connector key={`f${it}b`} from={[402, 128]} to={[476, 128]} tone="positive" draw></Connector>
        <Connector key={`f${it}c`} from={[642, 128]} to={[716, 128]} tone="positive" draw opacity={phase >= 1 ? 1 : 0.2}></Connector>
        {bwd && <g key={`b${it}`}>
          <Connector from={[716, 166]} to={[642, 166]} tone="negative" dashed draw></Connector>
          <Connector from={[476, 166]} to={[402, 166]} tone="negative" dashed draw></Connector>
          <Connector from={[236, 166]} to={[152, 166]} tone="negative" dashed draw></Connector>
          <Label x={679} y={206} anchor="middle" variant="math">{`∂L/∂ŷ = ${f2(dLdy)}`}</Label>
          <Label x={439} y={206} anchor="middle" variant="math">{`∂ŷ/∂z = ${dydz.toFixed(2)}`}</Label>
          <Label x={196} y={206} anchor="middle" variant="math">{`∂z/∂w = x = ${X.toFixed(1)}`}</Label>
          <Label x={40} y={258} variant="strong">{`∂L/∂w = ${f2(dLdy)} · ${dydz.toFixed(2)} · ${X.toFixed(1)} = ${f2(dLdw)}`}</Label>
        </g>}
        {phase === 3 && <Label x={40} y={286} variant="strong">{`w ← ${w.toFixed(2)} − ${ALPHA} · (${f2(dLdw)}) = ${wNew.toFixed(2)}`}</Label>}
        <Label x={40} y={328} variant="serif">{notes[phase]}</Label>
        {hist.length > 1 || phase >= 1 ? <Label x={700} y={256} variant="caption">{`Pérdida por iteración`}</Label> : null}
        {(hist.length > 1 || phase >= 1) && <line x1={700} y1={330} x2={862} y2={330} style={{ stroke: 'var(--ink-300)', strokeWidth: 1 }}></line>}
        {(phase >= 1 ? hist : state.hist).slice(-10).map((v, i) => (
          <line key={i} x1={hx(i)} x2={hx(i)} y1={330} y2={hy(v)} style={{ stroke: i === Math.min(9, hist.length - 1) ? 'var(--coral-500)' : 'var(--coral-400)', strokeWidth: 6, strokeLinecap: 'round', }}></line>
        ))}
      </Diagram>
      <div className="fig-controls">
        <span className="mono-note">{`Iteración ${it} · paso ${phase + 1} / 4`}</span>
        <Button size="sm" icon="rotate-ccw" onClick={reset}>Reiniciar</Button>
        <Button size="sm" variant="primary" iconRight="chevron-right" onClick={next}>{phase === 3 ? 'Nueva iteración' : 'Siguiente paso'}</Button>
      </div>
    </div>
  );
}

Object.assign(window, { MG, useInView, useTween, Section, f2, lerp, clamp01, NeuronFigure, PassesFigure });
