# Marginalia — design system

Personal design system for academic and professional work: teaching, research presentations, data-analysis reports and dashboards, and a portfolio. It works like an **interactive paper**: clean, lots of white space, diagrams annotated inline beside the text they explain. It should look credible in a classroom, in front of a thesis committee, and to a data-science recruiter.

"Marginalia" is a working name chosen for this system. Rename freely; there is no logo.

## Sources
- Main aesthetic reference: **distill.pub** (articles on FiLM, attention and augmented RNNs, momentum, CTC).
- 13 figure screenshots supplied by the user, copied to `assets/reference/`:
  `conditioning-decomposition`, `film-affine`, `film-scatter`, `rnn-unrolled`, `augmented-rnn-overview`, `ntm-attention-read`, `ntm-addressing-flow`, `act-ponder`, `momentum-regions`, `momentum-small-multiples`, `ctc-case1`, `ctc-case2`, `ctc-beam-search`.
- No codebase, Figma file, font files or logo were provided. All values were sampled from the screenshots.

## Surfaces
1. **Documents**: interactive articles, papers, reports (`ui_kits/article`)
2. **Dashboards**: data-analysis views (`ui_kits/dashboard`)
3. **Slides**: 16:9 presentations for class, defenses and talks (`slides/`)
4. **Motion/video**: the same diagrams with progressive reveal (`Reveal`, `Connector draw`, motion tokens)

---

## CONTENT FUNDAMENTALS
- **Voice:** first-person plural, like an explainer. "We can decompose…", "First, the controller gives a query vector…". The reader and the author work through the idea together. Use "you" rarely, and only for direct instructions ("Drag γ to see…").
- **Tone:** calm, precise, curious. No hype or marketing adjectives. Admit surprise when it's real ("Surprisingly, the convergence rate is independent of α").
- **Sequencing words carry the structure:** First, … Then, … Next, … Finally, … The annotations read as a numbered procedure without numbers.
- **Casing:** sentence case everywhere: titles, labels, buttons ("Convergence rate", "Export figure"). Title Case only for proper names of methods ("Neural Turing Machines", "Adaptive Computation Time").
- **Emphasis:** **bold** marks the term being defined or contrasted ("In a **fully-connected** network…"). *Italic serif* is for asides and legend sentences ("*Blue shows high similarity, pink high dissimilarity.*").
- **Math inline:** symbols are part of the prose (γ, β, α, λ). Use KaTeX, never images of equations. Name each term of an equation in a caption below it.
- **Annotation length:** 1–3 short lines, ~35–45 characters per line, placed right next to the element.
- **Ellipses as narration:** "One cell… can be used over… and over… again." Use sparingly, in sequences.
- **No emoji.** No exclamation marks. Numbers use tabular figures and honest precision ("97.7", not "~98%!").
- **Language:** works in Spanish or English. Keep one language per piece.

## VISUAL FOUNDATIONS
- **Background:** plain white paper (`--paper`). No textures, gradients, photos or full-bleed imagery. Tinted areas only appear *inside* diagrams to group things: lavender `--surface-group` for a time step or module, light gray `--surface-well` with a 1.5px gray border for a subsystem box.
- **Color:** mostly ink on white. Gray `#666` does the structural work (strokes, arrows, annotation text). Hue carries **meaning only**: coral = one quantity / positive / "up", sky/cyan = the opposing one / negative / "down", iris (purple) = the path or step in focus, indigo = attention/similarity intensity, magenta = dissimilarity. Amber is reserved for the "touch me" hint. Sequential data uses YlGnBu (cool, default) or OrRd (warm — trajectories, heat, intensity; from the damping small-multiples), each with a dark overflow band. Categorical data uses 14 soft hues.
- **Fills are light, strokes are mid.** A colored element = pale fill (`*-200`) + medium stroke (`*-400`) of the same hue. Value intensity = the opacity of an inset rounded fill inside a gray-framed cell.
- **Type:** Source Sans 3 for everything (text, labels, pills, ticks). Source Serif 4 italic for asides and region labels. KaTeX for math. Source Code Pro for numbers and code in UI. Headings are bold with slightly tight tracking. Body is 18/1.65.
- **Layout:** distill column grid: 680px text column, 960px page column for figures, 220px right gutter for sidenotes. Figures break out wider than text; annotations sit *inside* the figure, aligned with what they explain. Dashboards reuse the same widths and hairline rules.
- **Spacing:** 4px base scale. Big vertical rhythm between sections (48–96px); tight inside diagrams.
- **Corner radii:** 3px value fills, 4px controls, 6px diagram cells, 10px regions/panels, pill for step labels ("softmax").
- **Borders:** 1px hairline `--ink-200` for rules and dividers, 1.5px `--ink-600` for diagram outlines, 2px for emphasis paths. Tables use booktabs rules (heavy top/bottom, hairline under header).
- **Shadows:** almost none. The one signature: diagram cells have a **hard 1.5/2px offset shadow** at 10% black (`--shadow-diagram`), a "paper cut-out" look. Popovers/tooltips get one soft `--shadow-pop`. No other elevation.
- **Cards:** no floating cards. A "panel" is a section with a top hairline and a bold gray title (`Panel variant="rule"`), or a bordered white box for dashboard tiles. No colored left-border cards.
- **Transparency/blur:** no blur. Transparency is used only for data: point opacity in scatters, fading non-focused paths (like attention weights) to 20–40%.
- **Imagery:** no photography by default. Figures are diagrams and plots. If photos are used in a portfolio, show them plain on white, unfiltered, with captions.
- **Hover:** links go gray-underline → blue. Buttons get a slightly darker/lighter surface (no lift). Chart elements: hovering a legend item isolates its category (others fade to ~8%). Hovering a table row gives an `--ink-50` wash.
- **Press:** a slightly darker fill. No shrink or bounce.
- **Focus:** 2px sky outline, 2px offset. Inputs get a sky border plus a 3px `--sky-100` ring.
- **Motion:** quiet and explanatory. Fade + 6px lift (`--dur-reveal` 640ms, `--ease-out`), staggered 140ms. Paths *draw* in (`Connector draw`). Values tween fill-opacity. No bounces, springs, parallax or looping decoration. The only loop allowed is the amber hint's halo pulse. Everything collapses to 0ms under `prefers-reduced-motion`.
- **Fixed elements:** none in articles (except an optional slim TOC). Dashboards have a static top bar and no sticky chrome beyond it.

## ICONOGRAPHY
- The reference uses almost no UI icons. Meaning is carried by **Unicode arrows inside cells** (↑ ↓ ↖ ↗ ↘ ↙ ←), by operator glyphs (+, ·, ×) drawn as SVG strokes in `OpNode`, and by Greek letters.
- For UI chrome (buttons, dashboard, slides), use **Lucide** (`lucide-static@0.460.0` from unpkg), rendered through the `Icon` component as a CSS mask so it inherits `currentColor`. It has a 1.5–2px stroke, rounded, outline style, which fits the thin-stroke diagrams. *This is a substitution: no icon set was provided.*
- The distill "interactive" affordance (amber circle with a pointing hand) is rebuilt as `HoverHint` with Lucide's `pointer`.
- No emoji. No PNG icons. No icon fonts.

## Fonts (substitution)
No font files were provided. The system uses Google Fonts: **Source Sans 3** (distill uses system sans / Roboto-like), **Source Serif 4** (for the serif annotations in the NTM/ACT figures), **Source Code Pro**, and **KaTeX** from CDN. Replace them in `tokens/fonts.css` if you have licensed files.

---

## Index
- `styles.css`: entry point (imports only)
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `motion.css`, `base.css`
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Motion, Brand)
- `assets/reference/`: source screenshots
- `components/`: React primitives (see below), one `@dsCard` per folder
- `ui_kits/article/`: interactive paper
- `ui_kits/dashboard/`: analysis dashboard
- `slides/`: sample 16:9 slides
- `thumbnail.html`, `SKILL.md`

## Components
**controls/**: Button, Slider, Switch, Checkbox, Radio, Select, Input, SegmentedControl
**display/**: Icon, Tag, Tooltip, Panel, Metric, DataTable, HoverHint, Reveal
**article/**: ArticleHeader, Figure, Sidenote, Equation, Citation
**diagram/** (SVG, place inside `Diagram`): Diagram, Cell, Matrix, VectorCells, OpNode, OpPill, GraphNode, Connector, Label, Region, Brace
**charts/**: LineChart, ScatterPlot, BarChart, StemPlot, Legend, Colorbar

### Intentional additions
No source defined a component inventory, so this is an authored set. The domain-specific families (diagram, charts, article) come directly from the reference figures. Omitted as not needed for this brand: Dialog, Toast, Avatar, Tabs (SegmentedControl covers view switching). `Icon` wraps Lucide. `Reveal` provides progressive disclosure for slides and video.
