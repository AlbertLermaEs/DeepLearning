/* @ds-bundle: {"format":4,"namespace":"MarginaliaDesignSystem_e96b41","components":[{"name":"ArticleHeader","sourcePath":"components/article/ArticleHeader.jsx"},{"name":"Citation","sourcePath":"components/article/Citation.jsx"},{"name":"Equation","sourcePath":"components/article/Equation.jsx"},{"name":"Figure","sourcePath":"components/article/Figure.jsx"},{"name":"Sidenote","sourcePath":"components/article/Sidenote.jsx"},{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx"},{"name":"Colorbar","sourcePath":"components/charts/Colorbar.jsx"},{"name":"Legend","sourcePath":"components/charts/Legend.jsx"},{"name":"LineChart","sourcePath":"components/charts/LineChart.jsx"},{"name":"ScatterPlot","sourcePath":"components/charts/ScatterPlot.jsx"},{"name":"StemPlot","sourcePath":"components/charts/StemPlot.jsx"},{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"Checkbox","sourcePath":"components/controls/Checkbox.jsx"},{"name":"Input","sourcePath":"components/controls/Input.jsx"},{"name":"Radio","sourcePath":"components/controls/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/controls/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/controls/Select.jsx"},{"name":"Slider","sourcePath":"components/controls/Slider.jsx"},{"name":"Switch","sourcePath":"components/controls/Switch.jsx"},{"name":"Brace","sourcePath":"components/diagram/Brace.jsx"},{"name":"Cell","sourcePath":"components/diagram/Cell.jsx"},{"name":"Connector","sourcePath":"components/diagram/Connector.jsx"},{"name":"Diagram","sourcePath":"components/diagram/Diagram.jsx"},{"name":"GraphNode","sourcePath":"components/diagram/GraphNode.jsx"},{"name":"Label","sourcePath":"components/diagram/Label.jsx"},{"name":"Matrix","sourcePath":"components/diagram/Matrix.jsx"},{"name":"OpNode","sourcePath":"components/diagram/OpNode.jsx"},{"name":"OpPill","sourcePath":"components/diagram/OpPill.jsx"},{"name":"Region","sourcePath":"components/diagram/Region.jsx"},{"name":"VectorCells","sourcePath":"components/diagram/VectorCells.jsx"},{"name":"DataTable","sourcePath":"components/display/DataTable.jsx"},{"name":"HoverHint","sourcePath":"components/display/HoverHint.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"Metric","sourcePath":"components/display/Metric.jsx"},{"name":"Panel","sourcePath":"components/display/Panel.jsx"},{"name":"Reveal","sourcePath":"components/display/Reveal.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/display/Tooltip.jsx"}],"sourceHashes":{"components/article/ArticleHeader.jsx":"6e99a7de08a4","components/article/Citation.jsx":"30f3b49b99d5","components/article/Equation.jsx":"b1095c0eea18","components/article/Figure.jsx":"88a5108c9247","components/article/Sidenote.jsx":"c76d1ddf9186","components/charts/BarChart.jsx":"6016f06443a7","components/charts/Colorbar.jsx":"11835777da0b","components/charts/Legend.jsx":"ef8b0e3d0cf8","components/charts/LineChart.jsx":"698efad079fc","components/charts/ScatterPlot.jsx":"bfa65d6c30ec","components/charts/StemPlot.jsx":"5c5211433e32","components/controls/Button.jsx":"611d3de7679d","components/controls/Checkbox.jsx":"bd30568355a4","components/controls/Input.jsx":"3e54c3ad08d0","components/controls/Radio.jsx":"75c937a60ba1","components/controls/SegmentedControl.jsx":"62e7a5367e2d","components/controls/Select.jsx":"b9e88732353c","components/controls/Slider.jsx":"14fda37d2bf3","components/controls/Switch.jsx":"5d59e3c6e703","components/diagram/Brace.jsx":"fc3736dbb796","components/diagram/Cell.jsx":"ad7e67919346","components/diagram/Connector.jsx":"2e9da52137e7","components/diagram/Diagram.jsx":"665eb2f99c5e","components/diagram/GraphNode.jsx":"ab7b3ad7eac6","components/diagram/Label.jsx":"91ea1d28ce0c","components/diagram/Matrix.jsx":"ab4e4c71bad9","components/diagram/OpNode.jsx":"fe042709564d","components/diagram/OpPill.jsx":"960ea1cd729c","components/diagram/Region.jsx":"ae3c32530164","components/diagram/VectorCells.jsx":"3ae148e62f0e","components/display/DataTable.jsx":"e9444c1d30fb","components/display/HoverHint.jsx":"0916c87f3991","components/display/Icon.jsx":"5c62a8dba652","components/display/Metric.jsx":"cbd5e73239d5","components/display/Panel.jsx":"109527fa7b96","components/display/Reveal.jsx":"80aeeacab442","components/display/Tag.jsx":"c2ddf54bf110","components/display/Tooltip.jsx":"344045b01e88","slides/fit.js":"a83f19878248","ui_kits/article/AddressingFigure.jsx":"1202b4c03e8a","ui_kits/article/FilmFigure.jsx":"ba9774490520","ui_kits/article/Parts.jsx":"443a23ac54ab","ui_kits/dashboard/Dashboard.jsx":"d0229f5bc4e3","ui_kits/dashboard/Parameters.jsx":"27e72eb69e02"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MarginaliaDesignSystem_e96b41 = window.MarginaliaDesignSystem_e96b41 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/article/ArticleHeader.jsx
try { (() => {
/** Article masthead: title, dek, and a distill-style byline grid (authors · affiliations · published · DOI). */
function ArticleHeader({
  kicker,
  title,
  description,
  authors = [],
  published,
  doi,
  width = 'var(--col-page)',
  style
}) {
  const lab = {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: 'var(--text-subtle)',
    marginBottom: 6
  };
  const val = {
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--text-body)'
  };
  const affs = [...new Set(authors.map(a => a.affiliation).filter(Boolean))];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: width,
      margin: '0 auto',
      ...style
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-display)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 22,
      lineHeight: 1.45,
      color: 'var(--text-muted)',
      maxWidth: 'var(--col-text)',
      textWrap: 'pretty'
    }
  }, description), (authors.length > 0 || published || doi) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: 24,
      marginTop: 36,
      paddingTop: 16,
      borderTop: '1px solid var(--border-rule)'
    }
  }, authors.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "Authors"), authors.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: val
  }, a.url ? /*#__PURE__*/React.createElement("a", {
    href: a.url
  }, a.name) : a.name))), affs.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "Affiliations"), affs.map(a => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: val
  }, a))), published && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "Published"), /*#__PURE__*/React.createElement("div", {
    style: val
  }, published)), doi && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lab
  }, "DOI"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...val,
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, doi))));
}
Object.assign(__ds_scope, { ArticleHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/article/ArticleHeader.jsx", error: String((e && e.message) || e) }); }

// components/article/Citation.jsx
try { (() => {
/** Inline numbered citation [n] with a hover card showing the reference. */
function Citation({
  n,
  title,
  authors,
  venue,
  year,
  url
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: url || '#',
    style: {
      fontSize: '0.78em',
      verticalAlign: '0.35em',
      lineHeight: 0,
      color: 'var(--sky-600)',
      textDecoration: 'none',
      fontWeight: 600,
      padding: '0 1px'
    }
  }, "[", n, "]"), /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '100%',
      transform: `translate(-50%, ${open ? -6 : -2}px)`,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      width: 300,
      padding: '10px 12px',
      background: 'var(--paper)',
      border: '1px solid var(--border-rule)',
      boxShadow: 'var(--shadow-pop)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--text-body)',
      zIndex: 30,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, [authors, venue, year].filter(Boolean).join(' · '))));
}
Object.assign(__ds_scope, { Citation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/article/Citation.jsx", error: String((e && e.message) || e) }); }

// components/article/Equation.jsx
try { (() => {
const KATEX_JS = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
let loading;
function loadKatex() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.katex) return Promise.resolve(window.katex);
  if (!loading) loading = new Promise(res => {
    const s = document.createElement('script');
    s.src = KATEX_JS;
    s.onload = () => res(window.katex);
    s.onerror = () => res(null);
    document.head.appendChild(s);
  });
  return loading;
}

/** TeX math via KaTeX (auto-loaded). `display` centers it as a block with an optional equation number. */
function Equation({
  tex,
  display = false,
  number,
  color,
  style
}) {
  const [html, setHtml] = React.useState(() => {
    try {
      return window.katex ? window.katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false
      }) : null;
    } catch (e) {
      return null;
    }
  });
  React.useEffect(() => {
    let live = true;
    loadKatex().then(k => {
      if (!live || !k) return;
      try {
        setHtml(k.renderToString(tex, {
          displayMode: display,
          throwOnError: false
        }));
      } catch (e) {/* keep fallback */}
    });
    return () => {
      live = false;
    };
  }, [tex, display]);
  const inner = html ? /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-math)',
      fontStyle: 'italic'
    }
  }, tex);
  if (!display) return /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      ...style
    }
  }, inner);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      margin: '24px 0',
      color: color || 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      overflowX: 'auto'
    }
  }, inner), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-subtle)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "(", number, ")"));
}
Object.assign(__ds_scope, { Equation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/article/Equation.jsx", error: String((e && e.message) || e) }); }

// components/article/Figure.jsx
try { (() => {
const WIDTHS = {
  text: 'var(--col-text)',
  page: 'var(--col-page)',
  screen: 'var(--col-screen)'
};

/** Figure block. width="page" lets diagrams break out of the text column; caption sits below in muted small text. */
function Figure({
  children,
  caption,
  number,
  width = 'page',
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      maxWidth: WIDTHS[width] || width,
      margin: '40px auto',
      padding: '0 24px',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, children), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      maxWidth: 'var(--col-text)',
      margin: width === 'text' ? '14px 0 0' : '14px auto 0',
      fontSize: 'var(--fs-caption)',
      lineHeight: 'var(--lh-caption)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, number != null && /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 700
    }
  }, "Figure ", number, ". "), caption));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/article/Figure.jsx", error: String((e && e.message) || e) }); }

// components/article/Sidenote.jsx
try { (() => {
/** Margin note that floats into the right gutter beside the paragraph it annotates. Falls back to an inline aside when `inline`. */
function Sidenote({
  children,
  number,
  inline,
  style
}) {
  const [narrow, setNarrow] = React.useState(typeof window !== 'undefined' && window.innerWidth < 1200);
  React.useEffect(() => {
    const f = () => setNarrow(window.innerWidth < 1200);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  inline = inline ?? narrow;
  const base = {
    fontSize: 'var(--fs-caption)',
    lineHeight: 'var(--lh-caption)',
    color: 'var(--text-muted)',
    textWrap: 'pretty'
  };
  const marker = number != null && /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink-500)',
      marginRight: 4
    }
  }, number);
  if (inline) return /*#__PURE__*/React.createElement("span", {
    role: "note",
    style: {
      ...base,
      display: 'block',
      margin: '12px 0',
      paddingTop: 8,
      borderTop: '1px solid var(--border-rule)',
      ...style
    }
  }, marker, children);
  return /*#__PURE__*/React.createElement("span", {
    role: "note",
    style: {
      ...base,
      display: 'block',
      float: 'right',
      clear: 'right',
      width: 'var(--col-gutter)',
      marginRight: 'calc(-1 * (var(--col-gutter) + var(--col-gap)))',
      marginTop: 4,
      ...style
    }
  }, marker, children);
}
Object.assign(__ds_scope, { Sidenote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/article/Sidenote.jsx", error: String((e && e.message) || e) }); }

// components/charts/BarChart.jsx
try { (() => {
/** Horizontal bar chart with labels on the left and values at bar ends. One highlighted bar carries the accent. */
function BarChart({
  data = [],
  width = 480,
  barHeight = 18,
  gap = 10,
  labelWidth = 120,
  max,
  highlight,
  color = 'var(--ink-300)',
  highlightColor = 'var(--sky-600)',
  format = v => v,
  style
}) {
  const mx = max ?? Math.max(...data.map(d => d.value));
  const iw = width - labelWidth - 56;
  const height = data.length * (barHeight + gap) - gap;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    style: {
      display: 'block',
      maxWidth: width,
      overflow: 'visible',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, data.map((d, i) => {
    const y = i * (barHeight + gap),
      w = Math.max(1, d.value / mx * iw),
      hl = highlight === i || highlight === d.label;
    return /*#__PURE__*/React.createElement("g", {
      key: d.label
    }, /*#__PURE__*/React.createElement("text", {
      x: labelWidth - 10,
      y: y + barHeight / 2,
      textAnchor: "end",
      dominantBaseline: "central",
      style: {
        fill: hl ? 'var(--ink-900)' : 'var(--ink-600)',
        fontSize: 14,
        fontWeight: hl ? 600 : 400
      }
    }, d.label), /*#__PURE__*/React.createElement("rect", {
      x: labelWidth,
      y: y,
      width: w,
      height: barHeight,
      rx: 2,
      style: {
        fill: hl ? highlightColor : color,
        transition: 'width var(--dur-slow) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: labelWidth + w + 6,
      y: y + barHeight / 2,
      dominantBaseline: "central",
      style: {
        fill: 'var(--ink-700)',
        fontSize: 13,
        fontVariantNumeric: 'tabular-nums'
      }
    }, format(d.value)));
  }), /*#__PURE__*/React.createElement("line", {
    x1: labelWidth,
    x2: labelWidth,
    y1: -4,
    y2: height + 4,
    style: {
      stroke: 'var(--ink-800)'
    }
  }));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/Colorbar.jsx
try { (() => {
const SEQ = ['var(--seq-0)', 'var(--seq-1)', 'var(--seq-2)', 'var(--seq-3)', 'var(--seq-4)', 'var(--seq-5)', 'var(--seq-6)'];
const WARM = ['var(--seq-warm-0)', 'var(--seq-warm-1)', 'var(--seq-warm-2)', 'var(--seq-warm-3)', 'var(--seq-warm-4)', 'var(--seq-warm-5)', 'var(--seq-warm-6)'];
const DIV = ['var(--sky-500)', 'var(--sky-200)', 'var(--paper)', 'var(--coral-200)', 'var(--coral-500)'];

/** Continuous color scale key. scheme: sequential (YlGnBu) | warm (OrRd) | diverging (sky ↔ coral). `overflowFrom` paints values above it black (e.g. divergence > 1). */
function Colorbar({
  scheme = 'sequential',
  min = 0,
  max = 1,
  ticks = 5,
  overflowFrom,
  width = 320,
  height = 18,
  label,
  format = v => v.toFixed(1),
  style
}) {
  const stops = scheme === 'diverging' ? DIV : scheme === 'warm' ? WARM : SEQ;
  const end = overflowFrom != null ? (overflowFrom - min) / (max - min) : 1;
  const tv = Array.from({
    length: ticks + 1
  }, (_, i) => min + (max - min) * i / ticks);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      width,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink-800)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${end * 100}%`,
      background: `linear-gradient(90deg, ${stops.join(',')})`
    }
  }), end < 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: scheme === 'warm' ? 'var(--seq-warm-over)' : 'var(--seq-over)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 16
    }
  }, tv.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: `${i / ticks * 100}%`,
      transform: 'translateX(-50%)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-600)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, format(v)))));
}
Object.assign(__ds_scope, { Colorbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Colorbar.jsx", error: String((e && e.message) || e) }); }

// components/charts/Legend.jsx
try { (() => {
/** Categorical legend. Prefer direct labels on the chart; use this when marks are too dense (scatter clusters). */
function Legend({
  items = [],
  variant = 'dot',
  direction = 'row',
  title,
  active,
  onSelect,
  showLabels = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--ink-600)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction,
      flexWrap: 'wrap',
      gap: showLabels ? direction === 'row' ? '6px 16px' : 6 : 6,
      alignItems: direction === 'row' ? 'center' : 'flex-start'
    }
  }, items.map((it, i) => {
    const dim = active != null && active !== i;
    const mark = variant === 'line' ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 2,
        background: it.color,
        borderRadius: 1
      }
    }) : variant === 'swatch' ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        background: it.color,
        borderRadius: 2
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        background: it.color,
        borderRadius: '50%'
      }
    });
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      title: it.label,
      onMouseEnter: onSelect ? () => onSelect(i) : undefined,
      onMouseLeave: onSelect ? () => onSelect(null) : undefined,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: 0,
        border: 'none',
        background: 'none',
        cursor: onSelect ? 'pointer' : 'default',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink-700)',
        opacity: dim ? 0.3 : 1,
        transition: 'opacity var(--dur-fast) var(--ease-out)'
      }
    }, mark, showLabels && it.label);
  })));
}
Object.assign(__ds_scope, { Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Legend.jsx", error: String((e && e.message) || e) }); }

// components/charts/LineChart.jsx
try { (() => {
const PALETTE = ['var(--ink-800)', 'var(--coral-500)', 'var(--sky-600)', 'var(--iris-600)', 'var(--cat-8)', 'var(--cat-12)'];
function ticks(min, max, n) {
  const span = max - min || 1;
  let step = Math.pow(10, Math.floor(Math.log10(span / n)));
  const err = n / span * step;
  if (err <= 0.15) step *= 10;else if (err <= 0.35) step *= 5;else if (err <= 0.75) step *= 2;
  const out = [];
  for (let v = Math.ceil(min / step) * step; v <= max + step * 1e-6; v += step) out.push(+v.toFixed(10));
  return out;
}

/** Minimal line chart: left/bottom axis only, faint horizontal grid, lines labelled directly at their ends. */
function LineChart({
  series = [],
  width = 560,
  height = 280,
  xLabel,
  yLabel,
  xDomain,
  yDomain,
  xTicks = 5,
  yTicks = 4,
  directLabels = true,
  grid = true,
  format = v => v,
  style
}) {
  const labelY = React.useRef({});
  const all = series.flatMap(s => s.data);
  const xd = xDomain || [Math.min(...all.map(p => p[0])), Math.max(...all.map(p => p[0]))];
  const yd = yDomain || [Math.min(0, ...all.map(p => p[1])), Math.max(...all.map(p => p[1]))];
  const m = {
    t: 16,
    r: directLabels ? 104 : 16,
    b: xLabel ? 44 : 28,
    l: 44
  };
  const iw = width - m.l - m.r,
    ih = height - m.t - m.b;
  const sx = v => m.l + (v - xd[0]) / (xd[1] - xd[0] || 1) * iw;
  const sy = v => m.t + ih - (v - yd[0]) / (yd[1] - yd[0] || 1) * ih;
  const tx = {
    fill: 'var(--ink-600)',
    fontSize: 12,
    fontVariantNumeric: 'tabular-nums'
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    style: {
      display: 'block',
      maxWidth: width,
      overflow: 'visible',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, ticks(yd[0], yd[1], yTicks).map(t => /*#__PURE__*/React.createElement("g", {
    key: 'y' + t
  }, grid && /*#__PURE__*/React.createElement("line", {
    x1: m.l,
    x2: m.l + iw,
    y1: sy(t),
    y2: sy(t),
    style: {
      stroke: 'var(--ink-100)'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: m.l - 8,
    y: sy(t),
    textAnchor: "end",
    dominantBaseline: "central",
    style: tx
  }, format(t)))), ticks(xd[0], xd[1], xTicks).map(t => /*#__PURE__*/React.createElement("g", {
    key: 'x' + t
  }, /*#__PURE__*/React.createElement("line", {
    x1: sx(t),
    x2: sx(t),
    y1: m.t + ih,
    y2: m.t + ih + 4,
    style: {
      stroke: 'var(--ink-800)'
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: sx(t),
    y: m.t + ih + 17,
    textAnchor: "middle",
    style: tx
  }, t))), /*#__PURE__*/React.createElement("line", {
    x1: m.l,
    x2: m.l + iw,
    y1: m.t + ih,
    y2: m.t + ih,
    style: {
      stroke: 'var(--ink-800)'
    }
  }), xLabel && /*#__PURE__*/React.createElement("text", {
    x: m.l + iw,
    y: height - 4,
    textAnchor: "end",
    style: {
      ...tx,
      fontWeight: 600,
      fontSize: 13
    }
  }, xLabel), yLabel && /*#__PURE__*/React.createElement("text", {
    x: m.l,
    y: m.t - 4,
    textAnchor: "start",
    style: {
      ...tx,
      fontWeight: 600,
      fontSize: 13
    }
  }, yLabel), (() => {
    labelY.current = {};
    const ls = series.map((s, i) => ({
      i,
      y: sy(s.data[s.data.length - 1][1])
    })).sort((p, q) => p.y - q.y);
    for (let k = 1; k < ls.length; k++) if (ls[k].y - ls[k - 1].y < 15) ls[k].y = ls[k - 1].y + 15;
    ls.forEach(l => {
      labelY.current[l.i] = l.y;
    });
    return null;
  })(), series.map((s, i) => {
    const c = s.color || PALETTE[i % PALETTE.length];
    const last = s.data[s.data.length - 1];
    return /*#__PURE__*/React.createElement("g", {
      key: s.name || i
    }, /*#__PURE__*/React.createElement("path", {
      d: s.data.map((p, j) => `${j ? 'L' : 'M'}${sx(p[0])},${sy(p[1])}`).join(''),
      style: {
        fill: 'none',
        stroke: c,
        strokeWidth: s.width || 1.75,
        strokeDasharray: s.dashed ? '5 4' : undefined,
        strokeLinejoin: 'round'
      }
    }), directLabels && s.name && /*#__PURE__*/React.createElement("text", {
      x: sx(last[0]) + 8,
      y: labelY.current[i],
      dominantBaseline: "central",
      style: {
        fill: c,
        fontSize: 13,
        fontWeight: 600
      }
    }, s.name));
  }));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/ScatterPlot.jsx
try { (() => {
const CAT = Array.from({
  length: 14
}, (_, i) => `var(--cat-${i + 1})`);

/** Scatter plot. axes="cross" draws zero-crossing axes (as in the FiLM γ/β plots); "frame" draws left/bottom axes. `highlight` fades other categories. */
function ScatterPlot({
  points = [],
  width = 360,
  height = 320,
  axes = 'cross',
  xLabel,
  yLabel,
  r = 3.5,
  opacity = 0.72,
  highlight,
  colors = CAT,
  xDomain,
  yDomain,
  style
}) {
  const pad = 14;
  const xs = points.map(p => p.x),
    ys = points.map(p => p.y);
  const xd = xDomain || [Math.min(...xs), Math.max(...xs)];
  const yd = yDomain || [Math.min(...ys), Math.max(...ys)];
  const sx = v => pad + (v - xd[0]) / (xd[1] - xd[0] || 1) * (width - 2 * pad);
  const sy = v => height - pad - (v - yd[0]) / (yd[1] - yd[0] || 1) * (height - 2 * pad);
  const ax = {
    stroke: 'var(--ink-800)',
    strokeWidth: 1
  };
  const x0 = axes === 'cross' ? sx(Math.max(xd[0], Math.min(xd[1], 0))) : pad;
  const y0 = axes === 'cross' ? sy(Math.max(yd[0], Math.min(yd[1], 0))) : height - pad;
  const lab = {
    fill: 'var(--ink-700)',
    fontSize: 22,
    fontFamily: 'var(--font-math)',
    fontStyle: 'italic'
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    style: {
      display: 'block',
      maxWidth: width,
      overflow: 'visible',
      ...style
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: 0,
    x2: width,
    y1: y0,
    y2: y0,
    style: ax
  }), /*#__PURE__*/React.createElement("line", {
    x1: x0,
    x2: x0,
    y1: 0,
    y2: height,
    style: ax
  }), xLabel && /*#__PURE__*/React.createElement("text", {
    x: width - 4,
    y: y0 + 24,
    textAnchor: "end",
    style: lab
  }, xLabel), yLabel && /*#__PURE__*/React.createElement("text", {
    x: x0 + 10,
    y: 18,
    style: lab
  }, yLabel), points.map((p, i) => {
    const dim = highlight != null && p.c !== highlight;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: sx(p.x),
      cy: sy(p.y),
      r: r,
      style: {
        fill: colors[(p.c ?? 0) % colors.length],
        opacity: dim ? 0.08 : opacity,
        transition: 'opacity var(--dur-base) var(--ease-out)'
      }
    });
  }));
}
Object.assign(__ds_scope, { ScatterPlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ScatterPlot.jsx", error: String((e && e.message) || e) }); }

// components/charts/StemPlot.jsx
try { (() => {
/** Lollipop/stem plot of a sequence around zero — iterates, residuals, impulse responses. */
function StemPlot({
  values = [],
  width = 300,
  height = 140,
  max,
  color = 'var(--ink-400)',
  dot = 'var(--seq-6)',
  title,
  style
}) {
  const mx = max ?? Math.max(...values.map(Math.abs), 1e-9);
  const top = title ? 28 : 4;
  const mid = top + (height - top) / 2,
    amp = (height - top) / 2 - 4;
  const step = values.length > 1 ? (width - 4) / (values.length - 1) : 0;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: "100%",
    style: {
      display: 'block',
      maxWidth: width,
      overflow: 'visible',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("text", {
    x: 0,
    y: 16,
    style: {
      fill: 'var(--ink-700)',
      fontSize: 16,
      fontWeight: 700
    }
  }, title), values.map((v, i) => {
    const x = 2 + i * step,
      y = mid - Math.max(-1, Math.min(1, v / mx)) * amp;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: x,
      x2: x,
      y1: mid,
      y2: y,
      style: {
        stroke: color,
        strokeWidth: 1.5
      }
    }), /*#__PURE__*/React.createElement("circle", {
      cx: x,
      cy: y,
      r: 1.6,
      style: {
        fill: dot
      }
    }));
  }), /*#__PURE__*/React.createElement("line", {
    x1: 0,
    x2: width,
    y1: mid,
    y2: mid,
    style: {
      stroke: 'var(--ink-900)',
      strokeWidth: 1
    }
  }));
}
Object.assign(__ds_scope, { StemPlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/StemPlot.jsx", error: String((e && e.message) || e) }); }

// components/controls/Radio.jsx
try { (() => {
/** Radio group — vertical or inline list of mutually exclusive options. */
function Radio({
  options,
  value,
  defaultValue,
  onChange,
  name,
  direction = 'column',
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && (options[0].value ?? options[0])));
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": name,
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 18 : 8,
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, options.map(o => {
    const val = o.value ?? o;
    const lab = o.label ?? o;
    const on = val === cur;
    return /*#__PURE__*/React.createElement("label", {
      key: String(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 15,
        color: 'var(--text-body)',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "radio",
      "aria-checked": on,
      disabled: disabled,
      onClick: () => {
        setInner(val);
        onChange && onChange(val);
      },
      style: {
        width: 16,
        height: 16,
        padding: 0,
        flex: 'none',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1.5px solid ${on ? 'var(--ink-800)' : 'var(--ink-400)'}`,
        background: 'var(--paper)',
        cursor: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--ink-800)',
        transform: on ? 'scale(1)' : 'scale(0)',
        transition: 'transform var(--dur-fast) var(--ease-out)'
      }
    })), lab);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Radio.jsx", error: String((e && e.message) || e) }); }

// components/controls/SegmentedControl.jsx
try { (() => {
/** Segmented toggle for switching views / figure modes (e.g. "fully-connected | convolutional"). */
function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  size = 'md',
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && (options[0].value ?? options[0])));
  const cur = value ?? inner;
  const h = size === 'sm' ? 26 : 32;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 2,
      background: 'var(--ink-100)',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, options.map(o => {
    const val = o.value ?? o;
    const on = val === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: String(val),
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(val);
        onChange && onChange(val);
      },
      style: {
        height: h - 4,
        padding: '0 12px',
        border: 'none',
        borderRadius: 3,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 13 : 14,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        background: on ? 'var(--paper)' : 'transparent',
        boxShadow: on ? '0 1px 2px rgba(0,0,0,.08)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
      }
    }, o.label ?? o);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/controls/Slider.jsx
try { (() => {
/** Custom range slider — the core control of explorable explanations. */
function Slider({
  value,
  min = 0,
  max = 1,
  step = 0.01,
  onChange,
  label,
  format,
  showValue = true,
  width = 240,
  tone = 'ink',
  disabled = false,
  style
}) {
  const ref = React.useRef(null);
  const [drag, setDrag] = React.useState(false);
  const [inner, setInner] = React.useState(value ?? min);
  const v = value ?? inner;
  const t = Math.max(0, Math.min(1, (v - min) / (max - min)));
  const color = {
    ink: 'var(--ink-700)',
    focus: 'var(--iris-600)',
    positive: 'var(--coral-500)',
    negative: 'var(--sky-600)'
  }[tone] || 'var(--ink-700)';
  const set = clientX => {
    const r = ref.current.getBoundingClientRect();
    let nv = min + Math.max(0, Math.min(1, (clientX - r.left) / r.width)) * (max - min);
    nv = Math.round(nv / step) * step;
    nv = +nv.toFixed(6);
    setInner(nv);
    onChange && onChange(nv);
  };
  const onDown = e => {
    if (disabled) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDrag(true);
    set(e.clientX);
  };
  const onKey = e => {
    const d = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? step : e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -step : 0;
    if (!d) return;
    e.preventDefault();
    const nv = +Math.max(min, Math.min(max, v + d)).toFixed(6);
    setInner(nv);
    onChange && onChange(nv);
  };
  const shown = format ? format(v) : v;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 14,
      color: 'var(--text-muted)',
      width
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, shown)), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "slider",
    tabIndex: disabled ? -1 : 0,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": v,
    "aria-label": label,
    onPointerDown: onDown,
    onPointerMove: e => drag && set(e.clientX),
    onPointerUp: () => setDrag(false),
    onKeyDown: onKey,
    style: {
      position: 'relative',
      width,
      height: 20,
      cursor: disabled ? 'default' : 'pointer',
      touchAction: 'none',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 9,
      height: 2,
      borderRadius: 1,
      background: 'var(--ink-200)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${t * 100}%`,
      top: 9,
      height: 2,
      borderRadius: 1,
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${t * 100}% - 7px)`,
      top: 3,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--paper)',
      border: `1.5px solid ${color}`,
      boxSizing: 'border-box',
      boxShadow: drag ? `0 0 0 4px var(--ink-100)` : 'var(--shadow-diagram)',
      transition: 'box-shadow var(--dur-fast) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Slider.jsx", error: String((e && e.message) || e) }); }

// components/controls/Switch.jsx
try { (() => {
/** On/off toggle for settings and figure options. */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 15,
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: 30,
      height: 18,
      padding: 0,
      border: 'none',
      borderRadius: 999,
      flex: 'none',
      background: on ? 'var(--ink-800)' : 'var(--ink-300)',
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 14 : 2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--paper)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Switch.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Brace.jsx
try { (() => {
/** Curly brace grouping a span of cells, with an optional label at its tip. direction: right | left | down | up. */
function Brace({
  x = 0,
  y = 0,
  length = 80,
  direction = 'right',
  depth = 8,
  label,
  labelBold = true
}) {
  const L = length,
    w = depth,
    m = L / 2;
  // canonical: vertical brace starting at (0,0) going down, tip pointing +x
  const d = `M0,0 Q${w},0 ${w},${w} L${w},${m - w} Q${w},${m} ${2 * w},${m} Q${w},${m} ${w},${m + w} L${w},${L - w} Q${w},${L} 0,${L}`;
  const tf = {
    right: `translate(${x},${y})`,
    left: `translate(${x},${y}) scale(-1,1)`,
    down: `matrix(0,1,1,0,${x},${y})`,
    up: `matrix(0,-1,1,0,${x},${y})`
  }[direction];
  const tip = {
    right: [x + 2 * w + 10, y + m],
    left: [x - 2 * w - 10, y + m],
    down: [x + m, y + 2 * w + 18],
    up: [x + m, y - 2 * w - 8]
  }[direction];
  const anchor = direction === 'right' ? 'start' : direction === 'left' ? 'end' : 'middle';
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: d,
    transform: tf,
    style: {
      fill: 'none',
      stroke: 'var(--ink-600)',
      strokeWidth: 1.5
    }
  }), label && /*#__PURE__*/React.createElement("text", {
    x: tip[0],
    y: tip[1],
    textAnchor: anchor,
    dominantBaseline: "central",
    style: {
      fill: 'var(--ink-600)',
      fontSize: 17,
      fontWeight: labelBold ? 700 : 400
    }
  }, label));
}
Object.assign(__ds_scope, { Brace });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Brace.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Cell.jsx
try { (() => {
const T = {
  neutral: ['var(--ink-50)', 'var(--ink-600)', 'var(--ink-600)'],
  white: ['var(--paper)', 'var(--ink-600)', 'var(--ink-700)'],
  ghost: ['var(--paper)', 'var(--ink-300)', 'var(--ink-400)'],
  positive: ['var(--coral-200)', 'var(--coral-400)', 'var(--coral-600)'],
  negative: ['var(--sky-200)', 'var(--sky-400)', 'var(--sky-600)'],
  focus: ['var(--iris-200)', 'var(--iris-600)', 'var(--iris-600)']
};

/** A labelled rounded box — the "A" / "S" cell of a network diagram. (x, y) = top-left. */
function Cell({
  x = 0,
  y = 0,
  w = 48,
  h = 48,
  label,
  tone = 'neutral',
  shadow = true,
  fontSize,
  rx = 6,
  opacity = 1,
  serif = false,
  onClick
}) {
  const [fill, stroke, ink] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("g", {
    opacity: opacity,
    onClick: onClick,
    style: {
      cursor: onClick ? 'pointer' : undefined
    }
  }, shadow && /*#__PURE__*/React.createElement("rect", {
    x: x + 1.5,
    y: y + 2,
    width: w,
    height: h,
    rx: rx,
    style: {
      fill: 'rgba(0,0,0,.10)'
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    rx: rx,
    style: {
      fill,
      stroke,
      strokeWidth: 1.5
    }
  }), label != null && /*#__PURE__*/React.createElement("text", {
    x: x + w / 2,
    y: y + h / 2,
    textAnchor: "middle",
    dominantBaseline: "central",
    style: {
      fill: ink,
      fontSize: fontSize || Math.round(Math.min(w, h) * 0.46),
      fontFamily: serif ? 'var(--font-math)' : 'var(--font-sans)',
      fontStyle: serif ? 'italic' : 'normal'
    }
  }, label));
}
Object.assign(__ds_scope, { Cell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Cell.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Connector.jsx
try { (() => {
const COLOR = {
  ink: 'var(--ink-600)',
  dark: 'var(--ink-950)',
  muted: 'var(--ink-400)',
  focus: 'var(--iris-600)',
  positive: 'var(--coral-500)',
  negative: 'var(--sky-600)'
};
function buildPath(pts, curve, r) {
  if (pts.length < 2) return '';
  const [x0, y0] = pts[0];
  let d = `M${x0},${y0}`;
  if (curve === 'smooth') {
    for (let i = 1; i < pts.length; i++) {
      const [ax, ay] = pts[i - 1],
        [bx, by] = pts[i];
      const dx = bx - ax,
        dy = by - ay;
      d += Math.abs(dx) >= Math.abs(dy) ? ` C${ax + dx / 2},${ay} ${ax + dx / 2},${by} ${bx},${by}` : ` C${ax},${ay + dy / 2} ${bx},${ay + dy / 2} ${bx},${by}`;
    }
    return d;
  }
  if (curve === 'step') {
    for (let i = 1; i < pts.length - 1; i++) {
      const [px, py] = pts[i - 1],
        [cx, cy] = pts[i],
        [nx, ny] = pts[i + 1];
      const l1 = Math.hypot(cx - px, cy - py) || 1,
        l2 = Math.hypot(nx - cx, ny - cy) || 1;
      const rr = Math.min(r, l1 / 2, l2 / 2);
      d += ` L${cx - (cx - px) / l1 * rr},${cy - (cy - py) / l1 * rr} Q${cx},${cy} ${cx + (nx - cx) / l2 * rr},${cy + (ny - cy) / l2 * rr}`;
    }
    const [ex, ey] = pts[pts.length - 1];
    return d + ` L${ex},${ey}`;
  }
  return d + pts.slice(1).map(([x, y]) => ` L${x},${y}`).join('');
}

/** Line/arrow between points. curve: straight | step (orthogonal, rounded corners) | smooth (S-curves). `draw` animates the stroke in. */
function Connector({
  points,
  from,
  to,
  curve = 'straight',
  radius = 8,
  arrow = 'end',
  tone = 'ink',
  width = 1.5,
  dashed = false,
  opacity = 1,
  draw,
  d
}) {
  const pts = points || [from, to];
  const path = d || buildPath(pts, curve, radius);
  const dash = dashed === 'dot' ? '1.5 4' : dashed ? '6 5' : undefined;
  const m = `url(#mg-arrow-${tone})`;
  const animate = draw !== undefined && !dash;
  return /*#__PURE__*/React.createElement("path", {
    d: path,
    pathLength: animate ? 1 : undefined,
    markerEnd: arrow === 'end' || arrow === 'both' ? m : undefined,
    markerStart: arrow === 'start' || arrow === 'both' ? m : undefined,
    style: {
      fill: 'none',
      stroke: COLOR[tone] || tone,
      strokeWidth: width,
      strokeDasharray: animate ? 1 : dash,
      strokeLinecap: dashed === 'dot' ? 'round' : 'butt',
      strokeDashoffset: animate ? draw ? 0 : 1 : undefined,
      opacity,
      transition: animate ? 'stroke-dashoffset var(--dur-slow) var(--ease-in-out), opacity var(--dur-base) var(--ease-out)' : 'opacity var(--dur-base) var(--ease-out)'
    }
  });
}
Object.assign(__ds_scope, { Connector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Connector.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Diagram.jsx
try { (() => {
const ARROWS = {
  ink: 'var(--ink-600)',
  dark: 'var(--ink-950)',
  muted: 'var(--ink-400)',
  focus: 'var(--iris-600)',
  positive: 'var(--coral-500)',
  negative: 'var(--sky-600)'
};

/** SVG canvas for inline diagrams. Provides arrow markers (#mg-arrow-<tone>) and base text styling. Children use absolute user-space coordinates. */
function Diagram({
  width = 640,
  height = 320,
  children,
  title,
  fluid = true,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    width: fluid ? '100%' : width,
    role: "img",
    "aria-label": title,
    style: {
      display: 'block',
      maxWidth: width,
      height: 'auto',
      overflow: 'visible',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("defs", null, Object.entries(ARROWS).map(([k, c]) => /*#__PURE__*/React.createElement("marker", {
    key: k,
    id: `mg-arrow-${k}`,
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "9",
    markerHeight: "9",
    markerUnits: "userSpaceOnUse",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0.8 L10,5 L0,9.2 L2.6,5 Z",
    style: {
      fill: c
    }
  })))), children);
}
Object.assign(__ds_scope, { Diagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Diagram.jsx", error: String((e && e.message) || e) }); }

// components/diagram/GraphNode.jsx
try { (() => {
const FILL = {
  sky: 'var(--sky-500)',
  coral: 'var(--coral-500)',
  gray: 'var(--ink-300)',
  white: 'var(--paper)',
  focus: 'var(--iris-400)'
};

/** Circular node for graphs, lattices and search trees (CTC, beam search). (x, y) = center. */
function GraphNode({
  x = 0,
  y = 0,
  r = 17,
  label,
  tone = 'white',
  math = false,
  opacity = 1
}) {
  return /*#__PURE__*/React.createElement("g", {
    opacity: opacity
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r,
    style: {
      fill: FILL[tone] || FILL.white,
      stroke: 'var(--ink-950)',
      strokeWidth: 1.2,
      transition: 'fill var(--dur-base) var(--ease-out)'
    }
  }), label != null && /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + 1,
    textAnchor: "middle",
    dominantBaseline: "central",
    style: {
      fill: 'var(--ink-950)',
      fontSize: r * 1.1,
      fontFamily: math ? 'var(--font-math)' : 'var(--font-sans)',
      fontStyle: math ? 'italic' : 'normal'
    }
  }, label));
}
Object.assign(__ds_scope, { GraphNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/GraphNode.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Label.jsx
try { (() => {
const V = {
  annotation: {
    fontSize: 16,
    lh: 24,
    fill: 'var(--ink-600)'
  },
  strong: {
    fontSize: 16,
    lh: 24,
    fill: 'var(--ink-800)',
    fontWeight: 700
  },
  title: {
    fontSize: 17,
    lh: 24,
    fill: 'var(--ink-700)',
    fontWeight: 700
  },
  serif: {
    fontSize: 16,
    lh: 25,
    fill: 'var(--ink-600)',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic'
  },
  math: {
    fontSize: 26,
    lh: 30,
    fill: 'var(--ink-700)',
    fontFamily: 'var(--font-math)',
    fontStyle: 'italic'
  },
  caption: {
    fontSize: 13,
    lh: 18,
    fill: 'var(--ink-500)'
  },
  tick: {
    fontSize: 12,
    lh: 16,
    fill: 'var(--ink-600)',
    fontWeight: 600,
    fontVariantNumeric: 'tabular-nums'
  }
};

/** Multi-line SVG text for inline annotations. (x, y) = top of first line. Use "\n" for line breaks; wrap words in <tspan fontWeight="700"> for emphasis. */
function Label({
  x = 0,
  y = 0,
  children,
  variant = 'annotation',
  anchor = 'start',
  opacity = 1,
  fontSize,
  lineHeight
}) {
  const v = V[variant] || V.annotation;
  const fs = fontSize || v.fontSize,
    lh = lineHeight || (fontSize ? fontSize * 1.5 : v.lh);
  const lines = typeof children === 'string' ? children.split('\n') : [children];
  const {
    lh: _l,
    fontSize: _f,
    fill,
    ...rest
  } = v;
  return /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y,
    textAnchor: anchor,
    opacity: opacity,
    style: {
      fill,
      fontSize: fs,
      ...rest,
      transition: 'opacity var(--dur-reveal) var(--ease-out)'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("tspan", {
    key: i,
    x: x,
    dy: i === 0 ? fs * 0.9 : lh
  }, l)));
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Label.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Matrix.jsx
try { (() => {
const T = {
  positive: ['var(--coral-200)', 'var(--coral-400)'],
  negative: ['var(--sky-200)', 'var(--sky-400)'],
  focus: ['var(--iris-200)', 'var(--iris-400)'],
  neutral: ['var(--ink-50)', 'var(--ink-400)']
};

/** Grid-of-cells matrix (weights, feature maps). Optional `splitAt` column switches to `tone2` — e.g. [W_x | W_z]. */
function Matrix({
  x = 0,
  y = 0,
  rows = 4,
  cols = 3,
  cell = 40,
  tone = 'positive',
  tone2 = 'negative',
  splitAt,
  rx = 6,
  label
}) {
  const uid = React.useId().replace(/:/g, '');
  const W = cols * cell,
    H = rows * cell;
  const segs = splitAt ? [[0, splitAt, tone], [splitAt, cols, tone2]] : [[0, cols, tone]];
  return /*#__PURE__*/React.createElement("g", null, segs.map(([c0, c1, tn], i) => {
    const [fill, stroke] = T[tn] || T.positive;
    const cx0 = x + c0 * cell,
      cw = (c1 - c0) * cell;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("clipPath", {
      id: `${uid}-${i}`
    }, /*#__PURE__*/React.createElement("rect", {
      x: cx0 - (c0 === 0 ? 2 : 0),
      y: y - 2,
      width: cw + (c0 === 0 ? 2 : 0) + (c1 === cols ? 2 : 0),
      height: H + 4
    })), /*#__PURE__*/React.createElement("g", {
      clipPath: `url(#${uid}-${i})`
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: W,
      height: H,
      rx: rx,
      style: {
        fill,
        stroke,
        strokeWidth: 1.5
      }
    }), Array.from({
      length: c1 - c0 - (c1 === cols ? 1 : 0)
    }, (_, k) => /*#__PURE__*/React.createElement("line", {
      key: 'v' + k,
      x1: cx0 + (k + 1) * cell,
      x2: cx0 + (k + 1) * cell,
      y1: y,
      y2: y + H,
      style: {
        stroke,
        strokeWidth: 1.5
      }
    })), Array.from({
      length: rows - 1
    }, (_, k) => /*#__PURE__*/React.createElement("line", {
      key: 'h' + k,
      x1: cx0,
      x2: cx0 + cw,
      y1: y + (k + 1) * cell,
      y2: y + (k + 1) * cell,
      style: {
        stroke,
        strokeWidth: 1.5
      }
    }))));
  }), label && /*#__PURE__*/React.createElement("text", {
    x: x + W / 2,
    y: y + H + 20,
    textAnchor: "middle",
    style: {
      fill: 'var(--ink-600)',
      fontSize: 16
    }
  }, label));
}
Object.assign(__ds_scope, { Matrix });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Matrix.jsx", error: String((e && e.message) || e) }); }

// components/diagram/OpNode.jsx
try { (() => {
const FILL = {
  neutral: 'var(--ink-100)',
  white: 'var(--paper)',
  focus: 'var(--iris-200)',
  positive: 'var(--coral-200)',
  negative: 'var(--sky-200)'
};

/** Circular operator node (+, ·, ×, or any short glyph). (x, y) = center. */
function OpNode({
  x = 0,
  y = 0,
  r = 20,
  op = '+',
  tone = 'neutral',
  shadow = false
}) {
  const s = {
    stroke: 'var(--ink-600)',
    strokeWidth: 1.5,
    strokeLinecap: 'round'
  };
  const a = r * 0.42;
  let glyph;
  if (op === '+') glyph = /*#__PURE__*/React.createElement("path", {
    d: `M${x - a},${y} H${x + a} M${x},${y - a} V${y + a}`,
    style: s
  });else if (op === '×') glyph = /*#__PURE__*/React.createElement("path", {
    d: `M${x - a * 0.72},${y - a * 0.72} L${x + a * 0.72},${y + a * 0.72} M${x + a * 0.72},${y - a * 0.72} L${x - a * 0.72},${y + a * 0.72}`,
    style: s
  });else if (op === '·') glyph = /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: Math.max(2, r * 0.13),
    style: {
      fill: 'var(--ink-600)'
    }
  });else glyph = /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y,
    textAnchor: "middle",
    dominantBaseline: "central",
    style: {
      fill: 'var(--ink-700)',
      fontSize: r * 0.95,
      fontFamily: 'var(--font-math)'
    }
  }, op);
  return /*#__PURE__*/React.createElement("g", null, shadow && /*#__PURE__*/React.createElement("circle", {
    cx: x + 1.5,
    cy: y + 2,
    r: r,
    style: {
      fill: 'rgba(0,0,0,.10)'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r,
    style: {
      fill: FILL[tone] || FILL.neutral,
      stroke: 'var(--ink-600)',
      strokeWidth: 1.5
    }
  }), glyph);
}
Object.assign(__ds_scope, { OpNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/OpNode.jsx", error: String((e && e.message) || e) }); }

// components/diagram/OpPill.jsx
try { (() => {
/** Rounded pill naming a processing step ("softmax", "dot product"). (x, y) = center. */
function OpPill({
  x = 0,
  y = 0,
  label,
  h = 30,
  w,
  tone = 'white',
  active = false
}) {
  const width = w || Math.round(String(label).length * 7.8 + 36);
  const fill = active ? 'var(--iris-200)' : tone === 'neutral' ? 'var(--ink-50)' : 'var(--paper)';
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: x - width / 2 + 1.5,
    y: y - h / 2 + 2,
    width: width,
    height: h,
    rx: h / 2,
    style: {
      fill: 'rgba(0,0,0,.10)'
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: x - width / 2,
    y: y - h / 2,
    width: width,
    height: h,
    rx: h / 2,
    style: {
      fill,
      stroke: active ? 'var(--iris-600)' : 'var(--ink-600)',
      strokeWidth: 1.5
    }
  }), /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + 0.5,
    textAnchor: "middle",
    dominantBaseline: "central",
    style: {
      fill: 'var(--ink-700)',
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'var(--font-sans)'
    }
  }, label));
}
Object.assign(__ds_scope, { OpPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/OpPill.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Region.jsx
try { (() => {
const T = {
  group: {
    fill: 'var(--iris-100)',
    stroke: 'var(--iris-200)',
    strokeWidth: 1
  },
  well: {
    fill: 'var(--ink-50)',
    stroke: 'var(--ink-400)',
    strokeWidth: 1.5
  },
  outline: {
    fill: 'none',
    stroke: 'var(--ink-300)',
    strokeWidth: 1
  },
  positive: {
    fill: 'var(--coral-100)',
    stroke: 'none',
    strokeWidth: 0
  },
  negative: {
    fill: 'var(--sky-100)',
    stroke: 'none',
    strokeWidth: 0
  }
};

/** Background region grouping part of a diagram (a time step, a module, a subsystem). */
function Region({
  x = 0,
  y = 0,
  w,
  h,
  tone = 'group',
  rx = 10,
  dashed = false,
  label,
  opacity = 1
}) {
  return /*#__PURE__*/React.createElement("g", {
    opacity: opacity
  }, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    rx: rx,
    style: {
      ...T[tone],
      strokeDasharray: dashed ? '5 4' : undefined
    }
  }), label && /*#__PURE__*/React.createElement("text", {
    x: x + 12,
    y: y + 20,
    style: {
      fill: 'var(--ink-500)',
      fontSize: 13,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic'
    }
  }, label));
}
Object.assign(__ds_scope, { Region });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Region.jsx", error: String((e && e.message) || e) }); }

// components/diagram/VectorCells.jsx
try { (() => {
function fillFor(v, scheme) {
  const a = Math.min(1, Math.abs(v));
  switch (scheme) {
    case 'diverging':
      return [v >= 0 ? 'var(--coral-400)' : 'var(--cyan-400)', 0.12 + 0.6 * a];
    case 'similarity':
      return [v >= 0 ? 'var(--indigo-500)' : 'var(--magenta-500)', 0.1 + 0.85 * a];
    case 'focus':
      return ['var(--iris-400)', 0.08 + 0.8 * a];
    case 'sequential':
      return ['var(--indigo-500)', 0.06 + 0.84 * a];
    default:
      return [null, 0];
  }
}

/** A vector drawn as a row/column of framed cells; inner fills encode value. glyphs="arrows" draws ↑/↓ sized by magnitude. */
function VectorCells({
  x = 0,
  y = 0,
  values = [],
  cell = 40,
  orientation = 'row',
  scheme = 'sequential',
  glyphs,
  inset = 5,
  rx = 6,
  onCellClick,
  label,
  labelSide = 'right'
}) {
  const n = values.length;
  const row = orientation === 'row';
  const W = row ? n * cell : cell,
    H = row ? cell : n * cell;
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: W,
    height: H,
    rx: rx,
    style: {
      fill: 'var(--paper)',
      stroke: 'var(--ink-600)',
      strokeWidth: 1.5
    }
  }), values.map((v, i) => {
    const cx = row ? x + i * cell : x,
      cy = row ? y : y + i * cell;
    const [c, op] = fillFor(v, scheme);
    const g = glyphs === 'arrows' ? v >= 0 ? '↑' : '↓' : Array.isArray(glyphs) ? glyphs[i] : null;
    const gs = glyphs === 'arrows' ? 11 + 12 * Math.min(1, Math.abs(v)) : cell * 0.42;
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      onClick: onCellClick ? () => onCellClick(i) : undefined,
      style: {
        cursor: onCellClick ? 'pointer' : undefined
      }
    }, i > 0 && (row ? /*#__PURE__*/React.createElement("line", {
      x1: cx,
      x2: cx,
      y1: y,
      y2: y + H,
      style: {
        stroke: 'var(--ink-600)',
        strokeWidth: 1.5
      }
    }) : /*#__PURE__*/React.createElement("line", {
      x1: x,
      x2: x + W,
      y1: cy,
      y2: cy,
      style: {
        stroke: 'var(--ink-600)',
        strokeWidth: 1.5
      }
    })), c && /*#__PURE__*/React.createElement("rect", {
      x: cx + inset,
      y: cy + inset,
      width: cell - 2 * inset,
      height: cell - 2 * inset,
      rx: 4,
      style: {
        fill: c,
        fillOpacity: op,
        transition: 'fill-opacity var(--dur-base) var(--ease-out)'
      }
    }), g && /*#__PURE__*/React.createElement("text", {
      x: cx + cell / 2,
      y: cy + cell / 2,
      textAnchor: "middle",
      dominantBaseline: "central",
      style: {
        fill: 'var(--ink-600)',
        fontSize: gs
      }
    }, g));
  }), label && (labelSide === 'right' ? /*#__PURE__*/React.createElement("text", {
    x: x + W + 16,
    y: y + H / 2,
    dominantBaseline: "central",
    style: {
      fill: 'var(--ink-600)',
      fontSize: 16
    }
  }, label) : /*#__PURE__*/React.createElement("text", {
    x: x + W / 2,
    y: y + H + 22,
    textAnchor: "middle",
    style: {
      fill: 'var(--ink-600)',
      fontSize: 16
    }
  }, label)));
}
Object.assign(__ds_scope, { VectorCells });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/VectorCells.jsx", error: String((e && e.message) || e) }); }

// components/display/DataTable.jsx
try { (() => {
/** Booktabs-style table: heavy top/bottom rules, hairline under header, no zebra, no vertical lines. */
function DataTable({
  columns,
  rows,
  dense = false,
  highlight,
  caption,
  onRowClick,
  style
}) {
  const [hover, setHover] = React.useState(-1);
  const pad = dense ? '5px 10px' : '9px 12px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: dense ? 14 : 15,
      fontVariantNumeric: 'tabular-nums',
      borderTop: '1.5px solid var(--ink-800)',
      borderBottom: '1.5px solid var(--ink-800)'
    }
  }, caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: 'bottom',
      textAlign: 'left',
      paddingTop: 8,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: pad,
      textAlign: c.align || 'left',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--ink-400)',
      whiteSpace: 'nowrap'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const hl = highlight === i || hover === i;
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(-1),
      onClick: onRowClick ? () => onRowClick(r, i) : undefined,
      style: {
        background: highlight === i ? 'var(--sky-100)' : hl ? 'var(--ink-50)' : 'transparent',
        cursor: onRowClick ? 'pointer' : 'default'
      }
    }, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: pad,
        textAlign: c.align || 'left',
        color: 'var(--text-body)',
        fontFamily: c.mono ? 'var(--font-mono)' : 'inherit',
        fontSize: c.mono ? '0.9em' : undefined,
        borderTop: i ? '1px solid var(--ink-100)' : 'none'
      }
    }, c.render ? c.render(r[c.key], r) : c.format ? c.format(r[c.key]) : r[c.key])));
  }))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
const LUCIDE = 'https://unpkg.com/lucide-static@0.460.0/icons/';

/** Lucide icon rendered as a CSS mask so it inherits `color`. */
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  title,
  style
}) {
  const url = `url(${LUCIDE}${name}.svg)`;
  return /*#__PURE__*/React.createElement("span", {
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      verticalAlign: '-0.14em',
      background: color,
      WebkitMask: `${url} center / contain no-repeat`,
      mask: `${url} center / contain no-repeat`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/controls/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 28,
    px: 10,
    fs: 13,
    ic: 14,
    gap: 6
  },
  md: {
    h: 34,
    px: 14,
    fs: 15,
    ic: 16,
    gap: 7
  },
  lg: {
    h: 42,
    px: 18,
    fs: 17,
    ic: 18,
    gap: 8
  }
};

/** Quiet rectangular button. Primary = ink fill; secondary = hairline outline; ghost = text only. */
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  title,
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const iconOnly = !children && icon;
  const V = {
    primary: {
      bg: p ? 'var(--ink-950)' : h ? 'var(--ink-700)' : 'var(--ink-900)',
      fg: 'var(--text-inverse)',
      bd: 'transparent'
    },
    secondary: {
      bg: p ? 'var(--ink-100)' : h ? 'var(--ink-50)' : 'var(--paper)',
      fg: 'var(--text-body)',
      bd: h ? 'var(--ink-500)' : 'var(--border-control)'
    },
    ghost: {
      bg: p ? 'var(--ink-200)' : h ? 'var(--ink-100)' : 'transparent',
      fg: 'var(--ink-700)',
      bd: 'transparent'
    },
    link: {
      bg: 'transparent',
      fg: h ? 'var(--text-link-hover)' : 'var(--text-link)',
      bd: 'transparent'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    title: title,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      width: iconOnly ? s.h : fullWidth ? '100%' : undefined,
      padding: iconOnly ? 0 : variant === 'link' ? 0 : `0 ${s.px}px`,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: V.fg,
      background: V.bg,
      border: `1px solid ${V.bd}`,
      borderRadius: 'var(--radius-sm)',
      textDecoration: variant === 'link' ? 'underline' : 'none',
      textUnderlineOffset: 3,
      textDecorationColor: 'var(--ink-300)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/Checkbox.jsx
try { (() => {
/** Square checkbox with label. */
function Checkbox({
  checked,
  defaultChecked = false,
  indeterminate = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const filled = on || indeterminate;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 15,
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": indeterminate ? 'mixed' : on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 16,
      height: 16,
      padding: 0,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${filled ? 'var(--ink-800)' : 'var(--ink-400)'}`,
      background: filled ? 'var(--ink-800)' : 'var(--paper)',
      cursor: 'inherit',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, filled && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: indeterminate ? 'minus' : 'check',
    size: 12,
    color: "#fff"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/controls/Input.jsx
try { (() => {
/** Single-line text field with optional label, leading icon, hint and error. */
function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  label,
  hint,
  error,
  icon,
  mono = false,
  size = 'md',
  type = 'text',
  width,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 28 : 34;
  const bd = error ? 'var(--status-bad)' : focus ? 'var(--focus-ring)' : 'var(--border-control)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      width,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--ink-500)",
    style: {
      position: 'absolute',
      left: 10,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      boxSizing: 'border-box',
      padding: `0 10px 0 ${icon ? 32 : 10}px`,
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : mono ? 14 : 15,
      color: 'var(--text-body)',
      background: disabled ? 'var(--ink-50)' : 'var(--paper)',
      border: `1px solid ${bd}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? `0 0 0 3px ${error ? 'var(--coral-100)' : 'var(--sky-100)'}` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--status-bad)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Input.jsx", error: String((e && e.message) || e) }); }

// components/controls/Select.jsx
try { (() => {
/** Native select with hairline styling and a Lucide chevron. */
function Select({
  options,
  value,
  defaultValue,
  onChange,
  label,
  size = 'md',
  width,
  disabled = false,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 28 : 34;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 4,
      width,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 30px 0 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      color: 'var(--text-body)',
      background: 'var(--paper)',
      border: `1px solid ${focus ? 'var(--focus-ring)' : 'var(--border-control)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? '0 0 0 3px var(--sky-100)' : 'none',
      outline: 'none',
      cursor: 'pointer',
      opacity: disabled ? 0.4 : 1
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: String(o.value ?? o),
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--ink-500)",
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Select.jsx", error: String((e && e.message) || e) }); }

// components/display/HoverHint.jsx
try { (() => {
/** Amber "you can touch this" badge placed beside interactive figure elements. */
function HoverHint({
  size = 26,
  pulse = false,
  label = 'Interactive',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    title: label,
    "aria-label": label,
    role: "img",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      flex: 'none',
      background: 'var(--interactive-hint)',
      color: '#fff',
      boxShadow: '0 0 0 3px var(--interactive-halo)',
      animation: pulse ? 'mg-halo 1.6s var(--ease-in-out) infinite' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "pointer",
    size: Math.round(size * 0.58),
    color: "#fff"
  }));
}
Object.assign(__ds_scope, { HoverHint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/HoverHint.jsx", error: String((e && e.message) || e) }); }

// components/display/Metric.jsx
try { (() => {
/** Single headline number for dashboards and slides. */
function Metric({
  label,
  value,
  unit,
  delta,
  deltaTone,
  note,
  size = 'md',
  style
}) {
  const tone = deltaTone || (typeof delta === 'string' && delta.trim().startsWith('-') ? 'bad' : 'good');
  const toneColor = {
    good: 'var(--status-good)',
    bad: 'var(--status-bad)',
    neutral: 'var(--text-muted)'
  }[tone];
  const fs = {
    sm: 24,
    md: 34,
    lg: 56
  }[size] || 34;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: fs * 0.45,
      color: 'var(--text-muted)'
    }
  }, unit)), (delta || note) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      color: toneColor,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === 'bad' ? 'arrow-down-right' : tone === 'good' ? 'arrow-up-right' : 'minus',
    size: 13
  }), delta), note));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Metric.jsx", error: String((e && e.message) || e) }); }

// components/display/Panel.jsx
try { (() => {
const VARIANTS = {
  plain: {
    background: 'var(--paper)',
    border: '1px solid var(--border-rule)'
  },
  well: {
    background: 'var(--surface-well)',
    border: '1.5px solid var(--ink-400)'
  },
  group: {
    background: 'var(--surface-group)',
    border: '1px solid var(--iris-200)'
  },
  rule: {
    background: 'transparent',
    border: 'none',
    borderTop: '1px solid var(--border-rule)',
    borderRadius: 0
  }
};

/** Container surface. `rule` = distill-style section with only a top hairline and a bold heading. */
function Panel({
  children,
  title,
  meta,
  variant = 'plain',
  padding = 20,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.plain;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: variant === 'rule' ? '14px 0 0' : padding,
      ...v,
      ...style
    }
  }, (title || meta) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 12
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--ink-700)',
      lineHeight: 1.3
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, meta)), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Panel.jsx", error: String((e && e.message) || e) }); }

// components/display/Reveal.jsx
try { (() => {
/** Progressive-disclosure wrapper: fades + lifts content in. Drive `show` from a step counter for slides/video. */
function Reveal({
  children,
  show = true,
  index = 0,
  as = 'div',
  style
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      opacity: show ? 1 : 0,
      transform: show ? 'none' : 'translateY(var(--reveal-shift))',
      transition: `opacity var(--dur-reveal) var(--ease-out), transform var(--dur-reveal) var(--ease-out)`,
      transitionDelay: show ? `calc(${index} * var(--stagger))` : '0ms',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const TONES = {
  neutral: ['var(--ink-100)', 'var(--ink-700)', 'var(--ink-300)'],
  positive: ['var(--coral-100)', 'var(--coral-600)', 'var(--coral-400)'],
  negative: ['var(--sky-100)', 'var(--sky-600)', 'var(--sky-400)'],
  focus: ['var(--iris-100)', 'var(--iris-600)', 'var(--iris-400)'],
  hint: ['#fff4dc', 'var(--amber-600)', 'var(--amber-500)']
};

/** Small pill label for categories, status, and diagram legends. */
function Tag({
  children,
  tone = 'neutral',
  variant = 'soft',
  mono = false,
  dot = false,
  style
}) {
  const [bg, fg, bd] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: mono ? 12 : 13,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: fg,
      background: variant === 'outline' ? 'transparent' : bg,
      border: `1px solid ${variant === 'outline' ? bd : 'transparent'}`,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: bd
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Tooltip.jsx
try { (() => {
/** Hover/focus tooltip. Plain white card, hairline border, soft shadow. */
function Tooltip({
  children,
  content,
  placement = 'top',
  open,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const show = open ?? hover;
  const pos = placement === 'bottom' ? {
    top: '100%',
    marginTop: 8
  } : {
    bottom: '100%',
    marginBottom: 8
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: `translateX(-50%) translateY(${show ? 0 : placement === 'bottom' ? -4 : 4}px)`,
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      background: 'var(--paper)',
      border: '1px solid var(--border-rule)',
      boxShadow: 'var(--shadow-pop)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 10px',
      fontSize: 13,
      lineHeight: 1.4,
      color: 'var(--text-body)',
      whiteSpace: 'nowrap',
      zIndex: 20
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tooltip.jsx", error: String((e && e.message) || e) }); }

// slides/fit.js
try { (() => {
(function () {
  function fit() {
    var s = document.querySelector('.stage');
    if (!s) return;
    var k = Math.min(innerWidth / 1920, innerHeight / 1080);
    s.style.transform = 'scale(' + k + ') translate(-50%,-50%)';
  }
  addEventListener('resize', fit);
  document.addEventListener('DOMContentLoaded', fit);
  setInterval(fit, 500);
  fit();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/fit.js", error: String((e && e.message) || e) }); }

// ui_kits/article/AddressingFigure.jsx
try { (() => {
// Attention-addressing flow (NTM) — step-through with progressive reveal.
function AddressingFigure() {
  const {
    Diagram,
    VectorCells,
    OpPill,
    Connector,
    Label,
    Button
  } = window.MarginaliaDesignSystem_e96b41;
  const [step, setStep] = React.useState(1);
  const rows = [{
    pill: 'dot product',
    v: [0.7, 0.65, -0.9, -0.6, 0.45],
    scheme: 'similarity',
    note: 'First, the controller gives a query\nvector and each memory entry is\nscored for similarity with the query.'
  }, {
    pill: 'softmax',
    v: [0.45, 0.42, 0.05, 0.08, 0.3],
    scheme: 'sequential',
    note: 'The scores are then converted\ninto a distribution using softmax.'
  }, {
    pill: 'interpolate',
    v: [0.2, 0.3, 0.03, 0.2, 0.6],
    scheme: 'sequential',
    note: 'Next, we interpolate the attention\nfrom the previous time step.'
  }, {
    pill: 'sharpen',
    v: [0.02, 0.25, 0.45, 0.03, 0.55],
    scheme: 'sequential',
    note: 'Finally, we sharpen the attention\ndistribution.'
  }];
  const Y0 = 40,
    S = 118;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Diagram, {
    width: 720,
    height: Y0 + 50 + rows.length * S
  }, /*#__PURE__*/React.createElement(VectorCells, {
    x: 300,
    y: Y0,
    values: [0, 0, 0, 0, 0],
    scheme: "none",
    glyphs: ['↖', '↖', '↙', '↘', '↗'],
    cell: 48,
    label: "memory"
  }), rows.map((r, i) => {
    const y = Y0 + 48 + i * S,
      on = step > i;
    return /*#__PURE__*/React.createElement("g", {
      key: r.pill,
      style: {
        opacity: on ? 1 : 0.12,
        transition: 'opacity var(--dur-reveal) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Connector, {
      from: [420, y],
      to: [420, y + 26]
    }), /*#__PURE__*/React.createElement(OpPill, {
      x: 420,
      y: y + 44,
      label: r.pill,
      active: step === i + 1
    }), /*#__PURE__*/React.createElement(Connector, {
      from: [420, y + 60],
      to: [420, y + 70]
    }), /*#__PURE__*/React.createElement(VectorCells, {
      x: 300,
      y: y + 70,
      values: r.v,
      scheme: r.scheme,
      cell: 48
    }), /*#__PURE__*/React.createElement(Label, {
      x: 0,
      y: y + 22,
      variant: "serif"
    }, r.note));
  }), /*#__PURE__*/React.createElement(Label, {
    x: 560,
    y: Y0 + 48 + S + 70,
    variant: "serif",
    opacity: step >= 1 ? 1 : 0
  }, "Blue shows high similarity,\npink high dissimilarity.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "chevron-left",
    disabled: step <= 1,
    onClick: () => setStep(step - 1)
  }, "Back"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      width: 56,
      textAlign: 'center'
    }
  }, step, " / ", rows.length), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconRight: "chevron-right",
    disabled: step >= rows.length,
    onClick: () => setStep(step + 1)
  }, "Next step")));
}
window.AddressingFigure = AddressingFigure;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/article/AddressingFigure.jsx", error: String((e && e.message) || e) }); }

// ui_kits/article/FilmFigure.jsx
try { (() => {
// Interactive FiLM figure — the distill "affine transform" diagram, driven by sliders.
function FilmFigure() {
  const {
    Diagram,
    VectorCells,
    OpNode,
    Connector,
    Label,
    Region,
    HoverHint,
    Slider,
    SegmentedControl
  } = window.MarginaliaDesignSystem_e96b41;
  const [g, setG] = React.useState(0.8);
  const [b, setB] = React.useState(0.3);
  const x = [0.6, -0.35, -0.5];
  const gamma = [-0.7, 0.35 * g / 0.8, g];
  const beta = [0.55, 0.3, -b];
  const scaled = x.map((v, i) => Math.max(-1, Math.min(1, v * gamma[i] * 1.4)));
  const out = scaled.map((v, i) => Math.max(-1, Math.min(1, v + beta[i] * 0.6)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Diagram, {
    width: 760,
    height: 520
  }, /*#__PURE__*/React.createElement(Label, {
    x: 300,
    y: 0
  }, "In a fully-connected network,\nFiLM applies a different affine\ntransformation to each feature."), /*#__PURE__*/React.createElement(VectorCells, {
    x: 330,
    y: 84,
    values: x,
    cell: 44,
    scheme: "diverging",
    glyphs: "arrows"
  }), /*#__PURE__*/React.createElement(Region, {
    x: 290,
    y: 170,
    w: 212,
    h: 290,
    tone: "well"
  }), /*#__PURE__*/React.createElement(Connector, {
    from: [396, 128],
    to: [396, 194]
  }), /*#__PURE__*/React.createElement(OpNode, {
    x: 396,
    y: 216,
    op: "\xB7",
    r: 22
  }), /*#__PURE__*/React.createElement(Connector, {
    from: [396, 238],
    to: [396, 290]
  }), /*#__PURE__*/React.createElement(VectorCells, {
    x: 330,
    y: 292,
    values: scaled,
    cell: 44,
    scheme: "diverging",
    glyphs: "arrows"
  }), /*#__PURE__*/React.createElement(Connector, {
    from: [396, 336],
    to: [396, 384]
  }), /*#__PURE__*/React.createElement(OpNode, {
    x: 396,
    y: 406,
    op: "+",
    r: 22
  }), /*#__PURE__*/React.createElement(Connector, {
    from: [396, 428],
    to: [396, 470]
  }), /*#__PURE__*/React.createElement(VectorCells, {
    x: 330,
    y: 472,
    values: out,
    cell: 44,
    scheme: "diverging",
    glyphs: "arrows"
  }), /*#__PURE__*/React.createElement(Label, {
    x: 0,
    y: 120
  }, "First, each feature is\nscaled by the corresponding\nγ parameter."), /*#__PURE__*/React.createElement(VectorCells, {
    x: 0,
    y: 194,
    values: gamma,
    cell: 44,
    scheme: "diverging",
    glyphs: "arrows"
  }), /*#__PURE__*/React.createElement(Connector, {
    from: [132, 216],
    to: [372, 216]
  }), /*#__PURE__*/React.createElement(Label, {
    x: 196,
    y: 228,
    variant: "math"
  }, "\u03B3"), /*#__PURE__*/React.createElement(Label, {
    x: 0,
    y: 300
  }, "Then, each feature is\nshifted by the corresponding\nβ parameter."), /*#__PURE__*/React.createElement(VectorCells, {
    x: 0,
    y: 384,
    values: beta,
    cell: 44,
    scheme: "diverging",
    glyphs: "arrows"
  }), /*#__PURE__*/React.createElement(Connector, {
    from: [132, 406],
    to: [372, 406]
  }), /*#__PURE__*/React.createElement(Label, {
    x: 196,
    y: 418,
    variant: "math"
  }, "\u03B2"), /*#__PURE__*/React.createElement(Label, {
    x: 540,
    y: 290,
    variant: "serif"
  }, "Coral cells point up,\ncyan cells point down;\nsize and fill show magnitude.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(HoverHint, {
    pulse: true
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "\u03B3\u2083 (scale)",
    min: -1,
    max: 1,
    value: g,
    onChange: setG,
    format: v => v.toFixed(2),
    tone: "positive",
    width: 200
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "\u03B2\u2083 (shift)",
    min: -1,
    max: 1,
    value: b,
    onChange: setB,
    format: v => v.toFixed(2),
    tone: "negative",
    width: 200
  })));
}
window.FilmFigure = FilmFigure;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/article/FilmFigure.jsx", error: String((e && e.message) || e) }); }

// ui_kits/article/Parts.jsx
try { (() => {
// Scatter of γ/β with legend isolate (FiLM parameter plot) + article shell pieces.
function ParamScatter() {
  const {
    ScatterPlot,
    Legend,
    Panel
  } = window.MarginaliaDesignSystem_e96b41;
  const [act, setAct] = React.useState(null);
  const data = React.useMemo(() => {
    let s = 11;
    const r = () => {
      s = s * 16807 % 2147483647;
      return s / 2147483647;
    };
    const g = () => {
      let u = 0;
      for (let i = 0; i < 6; i++) u += r();
      return u / 6 - 0.5;
    };
    const mk = centers => centers.flatMap(([cx, cy, sp], c) => Array.from({
      length: 70
    }, () => ({
      x: cx + g() * sp,
      y: cy + g() * sp,
      c
    })));
    return [mk([[-0.6, 0.3, 0.6], [0.1, 0.9, 1], [0.5, 0.4, 0.5], [-0.8, -0.6, 0.4], [0.3, -0.5, 0.7], [-0.3, -0.2, 0.5], [0.8, 0.2, 0.4], [-0.1, 0.4, 0.8]]), mk([[-0.5, 0.2, 0.3], [0.1, 0.6, 0.5], [0.3, -0.1, 0.3], [-0.2, -0.5, 0.35], [0.7, -0.3, 0.6], [0.2, -0.2, 0.2], [0.0, 0.7, 0.4], [-0.4, 0.5, 0.3]])];
  }, []);
  const items = Array.from({
    length: 8
  }, (_, i) => ({
    label: `feature map ${i + 1}`,
    color: `var(--cat-${i + 1})`
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 40,
      width: '100%'
    }
  }, ['Visual reasoning model', 'Style transfer model'].map((t, k) => /*#__PURE__*/React.createElement(Panel, {
    key: t,
    variant: "rule",
    title: t
  }, /*#__PURE__*/React.createElement(ScatterPlot, {
    points: data[k],
    width: 380,
    height: 300,
    xLabel: "\u03B3",
    yLabel: "\u03B2",
    highlight: act,
    xDomain: [-1.3, 1.3],
    yDomain: [-1.2, 1.4]
  }), /*#__PURE__*/React.createElement(Legend, {
    title: "Feature map",
    showLabels: false,
    items: items,
    active: act,
    onSelect: setAct,
    style: {
      marginTop: 16
    }
  }))));
}
function TopBar() {
  const {
    Button
  } = window.MarginaliaDesignSystem_e96b41;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 32px',
      borderBottom: '1px solid var(--border-rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, "Marginalia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Articles"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Teaching"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "About")));
}
function Section({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--col-text)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '64px 0 12px',
      letterSpacing: 'var(--ls-heading)'
    }
  }, title), children);
}
Object.assign(window, {
  ParamScatter,
  TopBar,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/article/Parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
// Analysis dashboard — experiment tracking view built from DS primitives.
const DASH_RUNS = [{
  id: 'film-07',
  model: 'FiLM',
  lr: '3e-4',
  seed: 7,
  acc: 97.7,
  loss: 0.081,
  status: 'done'
}, {
  id: 'film-03',
  model: 'FiLM',
  lr: '1e-4',
  seed: 3,
  acc: 97.1,
  loss: 0.094,
  status: 'done'
}, {
  id: 'cat-02',
  model: 'Concat',
  lr: '3e-4',
  seed: 2,
  acc: 96.2,
  loss: 0.118,
  status: 'done'
}, {
  id: 'cbn-05',
  model: 'CBN',
  lr: '3e-4',
  seed: 5,
  acc: 95.4,
  loss: 0.131,
  status: 'running'
}, {
  id: 'base-01',
  model: 'Baseline',
  lr: '1e-3',
  seed: 1,
  acc: 68.5,
  loss: 0.702,
  status: 'done'
}];
function dashCurve(k, a, off) {
  return Array.from({
    length: 40
  }, (_, i) => [i, +(a * Math.exp(-i / k) + off + Math.sin(i * 1.7) * 0.012).toFixed(3)]);
}
function DashHeader({
  view,
  setView
}) {
  const {
    SegmentedControl,
    Button,
    Input
  } = window.MarginaliaDesignSystem_e96b41;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 28px',
      borderBottom: '1px solid var(--border-rule)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)'
    }
  }, "Marginalia"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, "CLEVR conditioning study"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: view,
    onChange: setView,
    options: ['Overview', 'Runs', 'Parameters']
  }), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Filter runs\u2026",
    width: 180
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "download"
  }, "Export"));
}
function DashOverview({
  sel,
  setSel
}) {
  const {
    Metric,
    Panel,
    LineChart,
    BarChart,
    DataTable,
    Tag,
    Slider,
    Switch
  } = window.MarginaliaDesignSystem_e96b41;
  const [smooth, setSmooth] = React.useState(0.6);
  const [logy, setLogy] = React.useState(false);
  const run = DASH_RUNS[sel];
  const series = [{
    name: 'train',
    color: 'var(--coral-500)',
    width: 2,
    data: dashCurve(6 + smooth * 4, 1.9, run.loss * 0.7)
  }, {
    name: 'val',
    color: 'var(--sky-500)',
    width: 2,
    data: dashCurve(7 + smooth * 4, 1.9, run.loss)
  }];
  const tf = logy ? series.map(s => ({
    ...s,
    data: s.data.map(([x, y]) => [x, +Math.log10(y).toFixed(3)])
  })) : series;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 36,
      padding: '28px',
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
      gap: 24,
      paddingBottom: 24,
      borderBottom: '1px solid var(--border-rule)'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Best test accuracy",
    value: "97.7",
    unit: "%",
    delta: "+1.5 pts",
    deltaTone: "neutral",
    note: "FiLM vs. Concat"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Validation loss",
    value: run.loss.toFixed(3),
    delta: "-0.037",
    deltaTone: "neutral",
    note: run.id
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Runs",
    value: "128",
    note: "5 seeds \xD7 4 models"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "GPU hours",
    value: "412",
    note: "of 600 budget"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    variant: "rule",
    title: "Loss curves",
    meta: /*#__PURE__*/React.createElement(Tag, {
      mono: true,
      tone: "focus",
      variant: "outline"
    }, run.id)
  }, /*#__PURE__*/React.createElement(LineChart, {
    width: 640,
    height: 260,
    xLabel: "epoch",
    yLabel: logy ? 'log₁₀ loss' : 'loss',
    series: tf
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'flex-end',
      marginTop: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Smoothing",
    value: smooth,
    onChange: setSmooth,
    format: v => v.toFixed(2),
    width: 200,
    tone: "focus"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Log scale",
    checked: logy,
    onChange: setLogy
  }))), /*#__PURE__*/React.createElement(Panel, {
    variant: "rule",
    title: "Accuracy by model",
    meta: "mean of 5 seeds"
  }, /*#__PURE__*/React.createElement(BarChart, {
    width: 420,
    labelWidth: 90,
    highlight: run.model,
    color: "var(--sky-200)",
    highlightColor: "var(--iris-400)",
    format: v => v.toFixed(1),
    data: [{
      label: 'FiLM',
      value: 97.4
    }, {
      label: 'Concat',
      value: 96.0
    }, {
      label: 'CBN',
      value: 95.2
    }, {
      label: 'Baseline',
      value: 68.3
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '16px 0 0',
      lineHeight: 1.5
    }
  }, "Conditioning at every layer closes most of the gap. The baseline only sees the question at the classifier."))), /*#__PURE__*/React.createElement(Panel, {
    variant: "rule",
    title: "Runs",
    meta: "click a row to inspect"
  }, /*#__PURE__*/React.createElement(DataTable, {
    highlight: sel,
    onRowClick: (_, i) => setSel(i),
    columns: [{
      key: 'id',
      label: 'Run',
      mono: true
    }, {
      key: 'model',
      label: 'Model'
    }, {
      key: 'lr',
      label: 'LR',
      mono: true,
      align: 'right'
    }, {
      key: 'seed',
      label: 'Seed',
      align: 'right'
    }, {
      key: 'acc',
      label: 'Acc. %',
      align: 'right',
      format: v => v.toFixed(1)
    }, {
      key: 'loss',
      label: 'Val. loss',
      align: 'right',
      format: v => v.toFixed(3)
    }, {
      key: 'status',
      label: 'Status',
      render: v => /*#__PURE__*/React.createElement(Tag, {
        tone: v === 'running' ? 'focus' : 'neutral',
        dot: true
      }, v)
    }],
    rows: DASH_RUNS
  })));
}
Object.assign(window, {
  DashHeader,
  DashOverview,
  DASH_RUNS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Parameters.jsx
try { (() => {
// Secondary dashboard views: parameter explorer + convergence small multiples.
function DashParameters() {
  const {
    Panel,
    StemPlot,
    Colorbar,
    Slider,
    Legend,
    ScatterPlot
  } = window.MarginaliaDesignSystem_e96b41;
  const [beta, setBeta] = React.useState(0.5);
  const [alpha, setAlpha] = React.useState(1.2);
  const seq = (b, a) => {
    const out = [];
    let x = 1,
      v = 0;
    for (let i = 0; i < 30; i++) {
      v = b * v - a * 0.5 * x;
      x = x + v;
      out.push(x);
    }
    return out;
  };
  const cases = [['Ripples', 0.9, 0.3], ['Monotonic decrease', 0.1, 0.3], ['1-step convergence', 0, 2], ['Oscillations', 0.1, 3.4], ['Divergence', 0.4, 4.2]];
  const pts = React.useMemo(() => {
    let s = 3;
    const r = () => {
      s = s * 16807 % 2147483647;
      return s / 2147483647;
    };
    return Array.from({
      length: 400
    }, () => {
      const c = Math.floor(r() * 6);
      return {
        x: (c % 3 - 1) * 0.6 + (r() - 0.5) * 0.7,
        y: (Math.floor(c / 3) - 0.5) * 0.9 + (r() - 0.5) * 0.6,
        c: c * 2
      };
    });
  }, []);
  const [act, setAct] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
      padding: 28,
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    variant: "rule",
    title: "Momentum: regimes of convergence",
    meta: "gradient descent on a quadratic"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      gap: 24,
      marginTop: 8
    }
  }, cases.map(([t, b, a]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '1px solid var(--border-rule)',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(StemPlot, {
    title: t,
    width: 210,
    height: 130,
    values: seq(b, a),
    color: "var(--sky-400)",
    dot: "var(--sky-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 8,
      fontFamily: 'var(--font-mono)'
    }
  }, "\u03B2=", b, " \u03B1=", a))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    variant: "rule",
    title: "Try it"
  }, /*#__PURE__*/React.createElement(StemPlot, {
    width: 460,
    height: 160,
    values: seq(beta, alpha),
    color: "var(--coral-400)",
    dot: "var(--coral-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Momentum \u03B2",
    value: beta,
    onChange: setBeta,
    format: v => v.toFixed(2),
    width: 200,
    tone: "positive"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Step-size \u03B1",
    min: 0,
    max: 4,
    step: 0.05,
    value: alpha,
    onChange: setAlpha,
    format: v => v.toFixed(2),
    width: 200,
    tone: "focus"
  })), /*#__PURE__*/React.createElement(Colorbar, {
    label: "Convergence rate",
    min: 0,
    max: 1.2,
    ticks: 6,
    overflowFrom: 1,
    width: 360,
    style: {
      marginTop: 24
    }
  })), /*#__PURE__*/React.createElement(Panel, {
    variant: "rule",
    title: "Learned \u03B3 / \u03B2",
    meta: "hover a color"
  }, /*#__PURE__*/React.createElement(ScatterPlot, {
    width: 440,
    height: 260,
    points: pts,
    xLabel: "\u03B3",
    yLabel: "\u03B2",
    highlight: act == null ? null : act * 2
  }), /*#__PURE__*/React.createElement(Legend, {
    showLabels: false,
    items: Array.from({
      length: 6
    }, (_, i) => ({
      label: 'map ' + (i + 1),
      color: `var(--cat-${i * 2 + 1})`
    })),
    active: act,
    onSelect: setAct,
    style: {
      marginTop: 12
    }
  }))));
}
window.DashParameters = DashParameters;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Parameters.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArticleHeader = __ds_scope.ArticleHeader;

__ds_ns.Citation = __ds_scope.Citation;

__ds_ns.Equation = __ds_scope.Equation;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.Sidenote = __ds_scope.Sidenote;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.Colorbar = __ds_scope.Colorbar;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.ScatterPlot = __ds_scope.ScatterPlot;

__ds_ns.StemPlot = __ds_scope.StemPlot;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Brace = __ds_scope.Brace;

__ds_ns.Cell = __ds_scope.Cell;

__ds_ns.Connector = __ds_scope.Connector;

__ds_ns.Diagram = __ds_scope.Diagram;

__ds_ns.GraphNode = __ds_scope.GraphNode;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Matrix = __ds_scope.Matrix;

__ds_ns.OpNode = __ds_scope.OpNode;

__ds_ns.OpPill = __ds_scope.OpPill;

__ds_ns.Region = __ds_scope.Region;

__ds_ns.VectorCells = __ds_scope.VectorCells;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.HoverHint = __ds_scope.HoverHint;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
