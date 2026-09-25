// Figure 3 (loss functions) + Figure 4 (gradient descent on J(w))
function LossFigure() {
  const { LineChart, SegmentedControl, Equation } = MG;
  const [mode, setMode] = React.useState('Regresión');
  const es = Array.from({ length: 121 }, (_, i) => -3 + i * 0.05);
  const ps = Array.from({ length: 100 }, (_, i) => 0.01 + i * 0.0099);
  const reg = [
    { name: 'MSE', color: 'var(--coral-500)', data: es.filter((e) => Math.abs(e) <= 2).map((e) => [e, e * e]), width: 2 },
    { name: 'MAE', color: 'var(--sky-600)', data: es.map((e) => [e, Math.abs(e)]), width: 2 },
  ];
  const cls = [
    { name: 'y = 1', color: 'var(--coral-500)', data: ps.map((p) => [p, -Math.log(p)]), width: 2 },
    { name: 'y = 0', color: 'var(--sky-600)', data: ps.map((p) => [p, -Math.log(1 - p)]), width: 2 },
  ];
  const isReg = mode === 'Regresión';
  return (
    <div className="fig-stack">
      <SegmentedControl size="sm" options={['Regresión', 'Clasificación']} value={mode} onChange={setMode}></SegmentedControl>
      <div className="loss-grid">
        <LineChart key={mode} series={isReg ? reg : cls} width={560} height={300}
          xLabel={isReg ? 'error  y − ŷ' : 'probabilidad predicha  ŷ'} yLabel="pérdida"
          xDomain={isReg ? [-3, 3] : [0, 1]} yDomain={[0, isReg ? 4 : 4.6]} directLabels grid></LineChart>
        <div className="loss-side">
          {isReg ? (<>
            <div><Equation display tex="\mathrm{MSE}=\frac{1}{n}\sum_{i=1}^{n}(y_i-\hat y_i)^2" color="var(--coral-600)"></Equation>
              <p className="aside">El cuadrado castiga mucho más los errores grandes: un error de 3 cuesta 9.</p></div>
            <div><Equation display tex="\mathrm{MAE}=\frac{1}{n}\sum_{i=1}^{n}\lvert y_i-\hat y_i\rvert" color="var(--sky-600)"></Equation>
              <p className="aside">Crece en línea recta, por eso es más estable cuando los datos tienen alta volatilidad.</p></div>
          </>) : (<>
            <div><Equation display tex="L=-\big[y\log\hat y+(1-y)\log(1-\hat y)\big]"></Equation>
              <p className="aside">Si la clase real es 1 y el modelo predice ŷ cercano a 0, la pérdida tiende a infinito. Equivocarse con confianza sale caro.</p></div>
          </>)}
        </div>
      </div>
    </div>
  );
}

const DESC_T = { w: 'peso w', j: 'costo J(w)', g: 'mínimo global', l: 'mínimo local', tan: 'La recta coral es la tangente:\nsu pendiente es el gradiente.\nDamos un paso en sentido contrario.' };
const J = (w) => 0.06 * w ** 4 - 0.5 * w ** 2 + 0.35 * w + 1.5;
const dJ = (w) => 0.24 * w ** 3 - w + 0.35;

function DescentFigure() {
  const { Diagram, Label, Slider, Button, HoverHint, Connector } = MG;
  const [alpha, setAlpha] = React.useState(0.1);
  const [w0, setW0] = React.useState(3.1);
  const [path, setPath] = React.useState([3.1]);
  const [running, setRunning] = React.useState(false);
  const timer = React.useRef();
  const ref = React.useRef(null);
  const seen = useInView(ref);

  const W = [-3.4, 3.4], JY = [-0.6, 5.2];
  const X0 = 60, X1 = 860, Y0 = 40, Y1 = 360;
  const sx = (w) => X0 + ((w - W[0]) / (W[1] - W[0])) * (X1 - X0);
  const sy = (j) => Y1 - ((j - JY[0]) / (JY[1] - JY[0])) * (Y1 - Y0);
  const curve = Array.from({ length: 171 }, (_, i) => { const w = W[0] + i * 0.04; return `${i ? 'L' : 'M'}${sx(w).toFixed(1)},${sy(J(w)).toFixed(1)}`; }).join('');

  const run = (start = w0, a = alpha) => {
    clearInterval(timer.current);
    let p = [start];
    setPath(p); setRunning(true);
    timer.current = setInterval(() => {
      const w = p[p.length - 1];
      const n = w - a * dJ(w);
      p = [...p, n]; setPath(p);
      if (p.length > 36 || !isFinite(n) || n < W[0] || n > W[1] || Math.abs(n - w) < 1e-3) { clearInterval(timer.current); setRunning(false); }
    }, 170);
  };
  React.useEffect(() => { if (seen) run(); }, [seen]);
  React.useEffect(() => () => clearInterval(timer.current), []);

  const cur = path[path.length - 1];
  const inside = cur >= W[0] && cur <= W[1] && isFinite(cur);
  const shown = path.filter((w) => w >= W[0] && w <= W[1]);
  const last = shown[shown.length - 1];
  const g = dJ(last), dw = 0.55;
  let status = '';
  if (!running && path.length > 1) {
    if (!inside) status = 'La tasa es tan grande que el punto salta fuera de la curva: el descenso diverge.';
    else if (Math.abs(dJ(cur)) > 0.05) status = 'El punto oscila de un lado a otro sin asentarse: α es demasiado grande.';
    else if (cur < 0) status = `Llegamos al mínimo global en ${path.length - 1} pasos.`;
    else status = `Nos quedamos atrapados en un mínimo local después de ${path.length - 1} pasos.`;
  }
  const onPick = (e) => {
    const svg = e.currentTarget.ownerSVGElement || e.currentTarget;
    const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    const w = Math.max(-3.2, Math.min(3.2, W[0] + ((p.x - X0) / (X1 - X0)) * (W[1] - W[0])));
    setW0(w); run(w);
  };
  return (
    <div ref={ref} className="fig-stack">
      <Diagram width={900} height={400}>
        <line x1={X0} y1={Y1} x2={X1} y2={Y1} style={{ stroke: 'var(--ink-400)', strokeWidth: 1 }}></line>
        <Label x={X1} y={Y1 + 26} anchor="end" variant="caption">{DESC_T.w}</Label>
        <Label x={X0} y={Y0 - 14} variant="caption">{DESC_T.j}</Label>
        <path d={curve} style={{ fill: 'none', stroke: 'var(--ink-600)', strokeWidth: 2 }}></path>
        <rect x={X0} y={Y0} width={X1 - X0} height={Y1 - Y0} style={{ fill: 'transparent', cursor: 'crosshair' }} onClick={onPick}></rect>
        <Label x={sx(-2.2)} y={sy(J(-2.2)) + 30} anchor="middle" variant="serif">{DESC_T.g}</Label>
        <Label x={sx(1.85)} y={sy(J(1.85)) + 30} anchor="middle" variant="serif">{DESC_T.l}</Label>
        {shown.slice(1).map((w, i) => (
          <line key={'s' + i} x1={sx(shown[i])} y1={sy(J(shown[i]))} x2={sx(w)} y2={sy(J(w))} style={{ stroke: 'var(--iris-400)', strokeWidth: 1.5, strokeDasharray: '3 3' }}></line>
        ))}
        {shown.map((w, i) => (
          <circle key={i} cx={sx(w)} cy={sy(J(w))} r={4} style={{ fill: 'var(--iris-400)', opacity: 0.35 + 0.65 * (i / shown.length) }}></circle>
        ))}
        <line x1={sx(last - dw)} y1={sy(J(last) - g * dw)} x2={sx(last + dw)} y2={sy(J(last) + g * dw)} style={{ stroke: 'var(--coral-500)', strokeWidth: 2 }}></line>
        <circle cx={sx(last)} cy={sy(J(last))} r={9} style={{ fill: 'var(--ink-900)', stroke: 'var(--paper)', strokeWidth: 2 }}></circle>
        <Label x={sx(last) + (last > 0 ? 24 : -24)} y={sy(J(last)) - 40} anchor={last > 0 ? 'start' : 'end'} variant="tick" fontSize={14}>{`∂J/∂w = ${f2(g)}`}</Label>
        <Label x={X0 + 10} y={Y0 + 24} variant="serif">{DESC_T.tan}</Label>
      </Diagram>
      <p className="fig-status">{status || '\u00a0'}</p>
      <div className="fig-controls">
        <HoverHint pulse></HoverHint>
        <Slider label="tasa de aprendizaje α" min={0.02} max={1} step={0.01} value={alpha} onChange={setAlpha} format={(v) => v.toFixed(2)} tone="focus" width={240}></Slider>
        <Button size="sm" variant="primary" icon="play" onClick={() => run()}>Descender</Button>
      </div>
      <div className="fig-controls">
        <span className="aside-inline">Prueba α = 0.10, 0.60 y 0.95. Haz clic sobre la curva para elegir otro punto inicial.</span>
      </div>
    </div>
  );
}

Object.assign(window, { LossFigure, DescentFigure });
