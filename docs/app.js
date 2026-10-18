/* Walk the Concept: a single-page, no-build site. Routes use the URL hash. */
(function () {
  'use strict';

  /* ---------- helpers ---------- */
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const byId = id => READINGS.find(r => r.id === id);
  const color = lane => (LANES[lane] || LANES.concept).color;
  const norm = s => s.toLowerCase().replace(/[‘’]/g, "'");

  /* ---------- state (saved in the browser) ---------- */
  const KEY = 'walk-the-concept-v1';
  const blank = () => ({ unpacked: {}, said: {}, sort: {}, builds: [], teach: '', flip: { pred: '', same: '', changed: '' }, draft: { kind: 'Song', item: '', lane: 'reproduced', reading: 'goldstein', text: '' }, follow: true });
  let S = blank();
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) { /* storage unavailable */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };

  /* ---------- glossary (key words, all from the readings) ---------- */
  const GLOSS = {};
  READINGS.forEach(r => r.quotes.forEach(q => q.words.forEach(([w, g]) => { GLOSS[norm(w)] = { g, from: r.id }; })));
  const extra = {
    'racial capitalism': ['koshy', 'An economy in which accumulation depends on racial difference to decide whose land, labor, and wealth may be taken.'],
    'social reproduction': ['goldstein', 'How families and communities sustain themselves over time: who raises children, who inherits, who owns.'],
    'heirs’ property': ['goldstein', 'Land passed to descendants as undivided shares, so one heir’s share can be bought and used to force a sale of the whole parcel (Goldstein 75).'],
    'allotment (1887)': ['goldstein', 'The General Allotment Act of 1887, which broke Indigenous communal land into individual holdings.'],
    'filius nullius': ['goldstein', 'Latin for “nobody’s child”: the treatment of Indigenous children as belonging to no one, a complement to terra nullius (Goldstein 67).'],
    'terra nullius': ['goldstein', 'Latin for “nobody’s land”: the claim that land is empty and available to be taken.'],
    'settler colonialism': ['goldstein', 'Colonialism that takes land in order to settle on it permanently.'],
    'racial alchemy of debt': ['harris', 'Harris\u2019s phrase for how racial domination is transformed into financial obligation, so that extraction looks like a contract and not a coercion (Harris 93).'],
    'racial alchemy': ['harris', 'Debt transforms racial domination into something that looks like a plain financial obligation.'],
    'propertizing': ['harris', 'Assigning value to Black bodies by virtue of their indebtedness (Harris 93).'],
    'debt peonage': ['harris', 'Forcing someone to work off a debt, so that their labor stays coerced.'],
    'convict leasing': ['harris', 'Leasing the labor of incarcerated people to private companies.'],
    'colorblind law': ['harris', 'A law with no racial language whose enforcement is still racially targeted (Harris 105).'],
    'risk': ['harris', 'A lender’s rating of how likely a borrower is to default, through which race can enter lending without being named (Harris 97).'],
    'wastelanding': ['day', 'Marking land and its inhabitants as empty, remote, and disposable, so that mining and contamination seem acceptable.'],
    'antipolitics': ['day', 'Reframing political questions about land, labor, and sovereignty as technical problems of engineering and security.'],
    'nonplace': ['day', 'A place removed from the official map, as Shinkolobwe is in the history of nuclear power (Day 145).'],
    'nuclear modernity': ['day', 'The age of nuclear energy and weapons, with its mines and waste sites at the colonial edges.'],
    'logistics': ['day', 'The systems that move materials and labor, which Day treats as a form of colonial power.'],
    'commodity fetishism': ['lowe3', 'Marx’s term for how a commodity’s value seems to belong to the object and hides the labor behind it.'],
    'free labor': ['lowe1', 'Labor called free that depended on unfree labor elsewhere.'],
    'free trade': ['lowe1', 'The doctrine of unrestricted trade that, Lowe argues, accommodated colonial rule.'],
    'bourgeois intimacy': ['lowe1', 'The private home life of the middle class, which Lowe says was produced by the “intimacies of four continents” (Lowe 30).'],
    'colonial commodities': ['lowe1', 'Goods such as tea, silk, and opium produced through colonial trade and labor (Lowe 15).'],
    'past conditional temporality': ['lowe5', 'Reading the past as a set of contingent possibilities, the “what could have been.”'],
    'absenting': ['lowe5', 'Making a group disappear from the historical record, as Chinese emigrant labor does in later histories (Lowe 174).'],
    'history of the present': ['lowe5', 'A history that does not justify the present but exposes how the past was constructed.'],
    'freedom': ['lowe5', 'In this chapter, a promise liberal history says was granted and other histories show is still to come.'],
    'homo oeconomicus': ['wynter03', 'The economic human: a person defined by earning, producing, and consuming.'],
    'dysselected': ['wynter03', 'In the Darwinian story Wynter criticizes, the people marked as not “selected” by evolution: the poor, the jobless, the colonized.'],
    'third event': ['wm', 'Wynter’s name for the origin of humans as a storytelling species, after the origin of the universe and of life.'],
    'development': ['wm', 'The postcolonial idea that former colonies should copy the Western economic model.'],
    'mimetic man2': ['wm', 'Man2 as a model that the rest of the world copied.'],
    'science of the word': ['wm', 'Césaire’s call for a science that studies how stories shape human behavior.']
  };
  Object.keys(extra).forEach(k => { const key = norm(k); if (!GLOSS[key]) GLOSS[key] = { g: extra[k][1], from: extra[k][0] }; });
  const gloss = t => GLOSS[norm(t)];


  /* ---------- written explanation: key terms become tappable ---------- */
  GLOSS['ethnoclass'] = { g: 'Wynter\u2019s word for a mode of being human tied to one class and one region.', from: 'wynter03' };
  const ESSAY_TERMS = [['primitive accumulation'], ['dispossession'], ['social reproduction'], ['filius nullius'], ['terra nullius'], ['heirs\u2019 property'], ['racial alchemy of debt'], ['predatory inclusion'], ['wastelanding'], ['antipolitics'], ['nonplace'], ['commodity fetishism'], ['free labor'], ['Liberty'], ['accommodated'], ['endemic'], ['ethnoclass'], ['overrepresented', 'overrepresentation'], ['veridically'], ['global middle classes'], ['Man2'], ['homo narrans'], ['mimetically'], ['past conditional temporality']];
  const ESSAY_WORDS = Math.round(ESSAY.join(' ').split(/\s+/).length / 10) * 10;
  function termify(text) {
    const low = text.toLowerCase(), hits = [];
    ESSAY_TERMS.forEach(([t, key]) => { const i = low.indexOf(t.toLowerCase()); if (i > -1) hits.push({ s: i, e: i + t.length, key: key || t }); });
    hits.sort((a, b) => a.s - b.s);
    let out = '', pos = 0;
    hits.forEach(h => { if (h.s < pos) return; out += esc(text.slice(pos, h.s)) + `<button class="kt" data-chip="${esc(h.key)}" data-pop>${esc(text.slice(h.s, h.e))}</button>`; pos = h.e; });
    return out + esc(text.slice(pos));
  }

  /* ---------- progress ---------- */
  const unpackedSet = (id, qi) => new Set((S.unpacked[id] && S.unpacked[id][qi]) || []);
  const allUnpacked = (r, qi) => r.quotes[qi].words.every(([w]) => unpackedSet(r.id, qi).has(w));
  const sorted = id => SCENARIOS.filter(s => s.reading === id && S.sort[s.id]).length > 0;
  const built = id => S.builds.some(b => b.reading === id);
  function checks(r) {
    const unpack = r.quotes.every((q, i) => allUnpacked(r, i));
    const say = r.quotes.every((q, i) => S.said[r.id] && S.said[r.id][i]);
    const apply = sorted(r.id) || built(r.id);
    return { unpack, say, apply, done: unpack && say && apply, partial: [unpack, say, apply].filter(Boolean).length };
  }
  const doneCount = () => READINGS.filter(r => checks(r).done).length;

  /* ---------- shell ---------- */
  const app = $('#app');
  function nav(active) {
    const n = doneCount();
    return `<nav class="nav">
      <a class="logo" href="#/"><i></i>Walk the Concept</a>
      <div class="links">
        <a href="#/map" class="${active === 'map' ? 'on' : ''}">Map</a>
        <a href="#/read/${(location.hash.match(/read\/(\w+)/) || [0, 'goldstein'])[1]}" class="${active === 'read' ? 'on' : ''}">Readings</a>
        <a href="#/practice/sort" class="${active === 'practice' ? 'on' : ''}">Practice</a>
        <a href="#/mastery" class="${active === 'mastery' ? 'on' : ''}">Mastery</a>
      </div>
      <button class="follow" id="follow" aria-pressed="${S.follow !== false}" title="Highlights the line you are reading when you hover over it">Follow along: ${S.follow !== false ? 'on' : 'off'}</button>
    </nav>`;
  }
  const footer = () => `<footer><div class="wrap"><span>Built for Critical Globalisms, Fall 2026. Every quotation cites the course reading it comes from.</span><span>Confidential: copying, saving, and printing are disabled.</span></div></footer>`;
  function page(active, inner, opts) {
    app.innerHTML = nav(active) + (opts && opts.byline ? `<div class="byline"><div class="in"><span>Dominic Park · Fall 2026 · Prof. Sunhay You</span></div></div>` : '') + `<main id="main" tabindex="-1">${inner}</main>` + footer();
    closePop();
    wireFollow();
  }

  /* ---------- popover ---------- */
  let popCb = null, popAnchor = null;
  function closePop(refocus) { const a = popAnchor; $('#popwrap').innerHTML = ''; popCb = null; popAnchor = null; if (refocus && a && document.contains(a)) a.focus(); }
  function openPop(anchor, html, onGot) {
    const r = anchor.getBoundingClientRect();
    const left = Math.min(Math.max(12, r.left), window.innerWidth - 360);
    let top = r.bottom + 10; if (top > window.innerHeight - 200) top = Math.max(12, r.top - 190);
    $('#popwrap').innerHTML = `<div class="pop" role="dialog" aria-label="Definition" tabindex="-1" style="left:${left}px;top:${top}px">${html}</div>`;
    popCb = onGot || null; popAnchor = anchor; popY = window.scrollY;
    const b = $('#popwrap [data-got]'); if (b) b.addEventListener('click', e => { e.stopPropagation(); const cb = popCb; closePop(!cb); if (cb) cb(); });
    ($('#popwrap [data-got]') || $('#popwrap .pop')).focus({ preventScroll: true });
  }
  document.addEventListener('click', e => { if (!e.target.closest('.pop') && !e.target.closest('[data-pop]')) closePop(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePop(true); });
  let popY = 0; window.addEventListener('scroll', () => { if ($('#popwrap .pop') && Math.abs(window.scrollY - popY) > 120) closePop(); }, { passive: true });
  function glossPop(anchor, term, withGot, cb) {
    const g = gloss(term);
    openPop(anchor, `<span class="label">${esc(term)} · what it means here</span>${esc(g ? g.g : 'A term from the readings.')}${withGot ? '<br><button class="btn small" data-got style="background:var(--bg);color:var(--ink);border-color:var(--bg)">Got it ✓</button>' : ''}`, cb);
  }

  /* ---------- HOME ---------- */
  function homeArt() {
    const KW = { koshy: 'primitive accumulation', goldstein: 'social reproduction', harris: 'alchemy of debt', day: 'wastelanding', lowe3: 'commodity fetishism', lowe1: 'free labor', lowe5: 'past conditional', wynter03: 'Man2', wm: 'Third Event' };
    const F = "font-family=\"'Chakra Petch',system-ui,sans-serif\"";
    let s = '<svg viewBox="0 0 520 520" role="img" aria-label="Racial capitalism at the center, linked to the key word of each reading">';
    s += '<g fill="none" stroke="#F4F4F0" stroke-opacity=".28"><circle cx="260" cy="260" r="108"/><circle cx="260" cy="260" r="150" stroke-dasharray="2 6"/><line x1="260" y1="0" x2="260" y2="520"/><line x1="0" y1="260" x2="520" y2="260"/></g>';
    for (let t = 0; t <= 520; t += 20) s += `<line x1="0" y1="${t}" x2="${t % 100 === 0 ? 14 : 7}" y2="${t}" stroke="#F4F4F0" stroke-opacity=".5"/>`;
    READINGS.forEach((r, i) => {
      const deg = (i / 9) * 360 - 90, a = deg * Math.PI / 180, c = color(r.lane), cs = Math.cos(a), sn = Math.sin(a);
      const x = 260 + cs * 108, y = 260 + sn * 108, x1 = 260 + cs * 126, y1 = 260 + sn * 126, x2 = 260 + cs * 142, y2 = 260 + sn * 142, lx = 260 + cs * 150, ly = 260 + sn * 150;
      const label = KW[r.id] || r.keyword, words = label.split(' '); const lines = words.length > 1 && label.length > 11 ? [words.slice(0, Math.ceil(words.length / 2)).join(' '), words.slice(Math.ceil(words.length / 2)).join(' ')] : [label];
      const anchor = cs > .3 ? 'start' : cs < -.3 ? 'end' : 'middle';
      const y0 = sn < -.5 ? ly - (lines.length - 1) * 16 - 4 : sn > .5 ? ly + 14 : ly + 5 - (lines.length - 1) * 8;
      s += `<line x1="260" y1="260" x2="${x}" y2="${y}" stroke="#F4F4F0" stroke-opacity=".6" stroke-width="1.5"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="1.5"/><rect x="${x - 11}" y="${y - 11}" width="22" height="22" fill="${c}"/>`;
      s += `<text x="${lx}" y="${y0}" text-anchor="${anchor}" fill="${c}" ${F} font-weight="600" font-size="14" letter-spacing=".5">${lines.map((t, k) => `<tspan x="${lx}" dy="${k ? 16 : 0}">${esc(t.toUpperCase())}</tspan>`).join('')}</text>`;
    });
    s += `<circle cx="260" cy="260" r="62" fill="#F4F4F0"/><text x="260" y="256" text-anchor="middle" fill="#0B0B0B" ${F} font-weight="700" font-size="17">RACIAL</text><text x="260" y="277" text-anchor="middle" fill="#0B0B0B" ${F} font-weight="700" font-size="17">CAPITALISM</text></svg>`;
    return s;
  }
  function viewHome() {
    const cards = READINGS.slice().sort((a, b) => ['koshy', 'goldstein', 'harris', 'day', 'lowe3', 'lowe1', 'lowe5', 'wynter03', 'wm'].indexOf(a.id) - ['koshy', 'goldstein', 'harris', 'day', 'lowe3', 'lowe1', 'lowe5', 'wynter03', 'wm'].indexOf(b.id));
    page('map', `
    <div class="wrap">
      <section class="hero2">
        <div class="metarow"><span>Critical Globalisms</span><span>LAS E701-01</span><span>Prof. Sunhay You</span><span>Fall 2026</span></div>
        <h1 class="mega">Racial<br>capitalism<span class="outline"><br>walked through.</span></h1>
        <div class="hero-grid">
          <div class="hcopy">
            <div class="label">Interactive concept map</div>
            <p class="lead">Racial capitalism is not a topic to memorize; it is a relation to trace across the readings. Predicting, sorting, toggling, and building, you rehearse the concept until you can explain it to someone else.</p>
            <div class="cta"><a class="btn" href="#/read/koshy">Begin the walk →</a><a class="btn out" href="#/map">Open the map</a><a class="btn out" href="#/full">Read the full map</a></div>
            <p class="sans muted note">Readings, practice, and a map you build yourself</p>
          </div>
          <div class="art">${homeArt()}</div>
        </div>
      </section>
    </div>
    <section class="how"><div class="wrap">
      <div class="label">How the walk works</div>
      <div class="steps">
        <div class="step" style="--c:var(--reproduced)"><div class="label c-reproduced">Step 1</div><h3>See the map</h3><p>The map shows how each reading, its key words, and its links beyond the class connect; filtering by layer and opening any node turns a diagram into an argument.</p></div>
        <div class="step" style="--c:var(--renewed)"><div class="label c-renewed">Step 2</div><h3>Work each reading</h3><p>Two quotes anchor each reading. Tapping the underlined words unpacks their meaning; restating the idea in your own words unlocks the next quote.</p></div>
        <div class="step" style="--c:var(--hidden)"><div class="label c-hidden">Step 3</div><h3>Prove it</h3><p>Sorting scenarios into reproduced, renewed, or hidden tests the lanes. Flipping a law between “formally colorblind” and “racialized administration” shows what the words conceal. Building an example of your own tests the concept itself.</p></div>
      </div>
    </div></section>
    <div class="wrap" style="padding-top:64px">
      <div class="label">The readings</div>
      <h2 class="sec" style="margin-top:8px">One concept, many ways in.</h2>
      <div class="rgrid">${cards.map(r => `<a class="rcard" href="#/read/${r.id}" style="--c:${color(r.lane)}"><i></i><div><div class="label" style="color:${color(r.lane)}">${esc(r.kicker)}</div><h3>${esc(r.title)}</h3><div class="sans muted" style="font-size:14px">${r.quotes.length} quotes · ${r.chips.length} key words · <span class="pill" style="font-size:12px;padding:2px 9px">${checks(r).done ? 'Done' : checks(r).partial ? 'In progress' : 'Not started'}</span></div></div></a>`).join('')}</div>
    </div>`);
  }

  /* ---------- MAP EXPLORER ---------- */
  const mapUI = { sel: 'harris', read: true, key: true, out: true, q: '' };
  const SHORTKEY = { lowe5: 'past conditional', harris: 'alchemy of debt', koshy: 'primitive accumulation' };
  const RK = 32, RN = 21.5, RO = 46;
  const polar = (deg, r) => [50 + Math.cos(deg * Math.PI / 180) * r, 50 + Math.sin(deg * Math.PI / 180) * r];
  function viewMap() {
    const sel = byId(mapUI.sel);
    let lines = '';
    READINGS.forEach(r => { const [x, y] = polar(r.angle, RN); lines += `<line x1="50" y1="50" x2="${x}" y2="${y}" stroke="rgba(244,244,240,.45)" stroke-width="2" vector-effect="non-scaling-stroke"/>`; if (mapUI.key) { const [kx, ky] = polar(r.angle, RK); lines += `<line x1="${x}" y1="${y}" x2="${kx}" y2="${ky}" stroke="rgba(244,244,240,.45)" stroke-width="1.5" vector-effect="non-scaling-stroke"/>`; } });
    EDGES.forEach(([a, b]) => { const A = byId(a), B = byId(b), [x1, y1] = polar(A.angle, RN), [x2, y2] = polar(B.angle, RN); const on = a === mapUI.sel || b === mapUI.sel; lines += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color('natural')}" stroke-width="${on ? 2.6 : 1.4}" stroke-dasharray="7 5" opacity="${on ? 1 : .45}" vector-effect="non-scaling-stroke"/>`; });
    let nodes = '';
    const q = norm(mapUI.q.trim());
    READINGS.forEach(r => {
      const [x, y] = polar(r.angle, RN), c = color(r.lane), isSel = r.id === mapUI.sel;
      const dim = q && !(r.chips.concat([r.title, r.keyword]).some(k => norm(k).includes(q)));
      if (mapUI.read) nodes += `<button class="gnode read ${isSel ? 'sel' : ''} ${dim ? 'dim' : ''}" data-node="${r.id}" aria-pressed="${isSel}" style="left:${x}%;top:${y}%;--c:${c}" aria-label="${esc(r.kicker)}">${(r.id === 'wm' ? 'Wynter<br>&amp; McK.' : esc(r.short).replace(' ', '<br>'))}</button>`;
      if (mapUI.key) {
        const [kx, ky] = polar(r.angle, RK), cs = Math.cos(r.angle * Math.PI / 180); const tr = cs > .3 ? 'translate(-8px,-50%)' : cs < -.3 ? 'translate(calc(-100% + 8px),-50%)' : 'translate(-50%,-50%)';
        const label = SHORTKEY[r.id] || r.keyword; const hit = q && norm(r.keyword + ' ' + r.chips.join(' ')).includes(q);
        nodes += `<button class="gkey ${isSel ? 'sel' : ''} ${hit ? 'hit' : ''}" data-key="${r.id}" aria-pressed="${isSel}" style="left:${kx}%;top:${ky}%;transform:${tr};--c:${c}">${esc(label)}</button>`;
      }
      if (mapUI.out) {
        if (isSel) r.outside.forEach((o, i) => { const off = [-26, 26, 46][i]; let [ox, oy] = polar(r.angle + off, RO); ox = Math.min(Math.max(ox, 4), 96); oy = Math.min(Math.max(oy, 4), 96); lines += `<line x1="${polar(r.angle, RK)[0]}" y1="${polar(r.angle, RK)[1]}" x2="${ox}" y2="${oy}" stroke="${c}" stroke-width="1.5" stroke-dasharray="5 4" vector-effect="non-scaling-stroke"/>`; nodes += `<button class="gout" style="left:${ox}%;top:${oy}%;--c:${c}" data-out="${i}" title="${esc(o[0])}" aria-label="Beyond the class ${i + 1}: ${esc(o[0])}">${i + 1}</button>`; });
        else { const [ox, oy] = polar(r.angle, 42); nodes += `<span class="gout small" style="left:${ox}%;top:${oy}%;--c:${c}"></span>`; }
      }
    });
    S.builds.forEach((b, i) => { const r = byId(b.reading); const [ox, oy] = polar(r.angle + 16 + i * 6, 40); nodes += `<span class="gout" style="left:${ox}%;top:${oy}%;--c:${color(b.lane)};width:6%" title="${esc(b.item)}">★</span>`; });
    const defn = sel.explain.split('. ')[0] + '.';
    page('map', `
    <h1 class="sr-only">Concept map explorer: racial capitalism across the readings</h1>
    <div class="explorer">
      <aside class="side">
        <div class="label">Layers</div>
        <label class="toggle"><input type="checkbox" data-layer="read" ${mapUI.read ? 'checked' : ''}>Readings</label>
        <label class="toggle"><input type="checkbox" data-layer="key" ${mapUI.key ? 'checked' : ''}>Key words</label>
        <label class="toggle"><input type="checkbox" data-layer="out" ${mapUI.out ? 'checked' : ''}>Beyond the class</label>
        <input class="search" id="mapq" type="search" placeholder="Find a key word…" value="${esc(mapUI.q)}" aria-label="Find a key word">
        <div class="label">Where an idea lives</div>
        <div class="legend">${['reproduced', 'renewed', 'hidden', 'natural', 'concept'].map(l => `<span style="--c:${color(l)}"><i></i>${LANES[l].name}</span>`).join('')}</div>
        <div class="tip">Hover a node for its first quote. Click or tap it to open the reading. Dashed purple lines join readings that talk to each other.</div>
        <a class="btn" href="#/full">Read the full map →</a>
        ${S.builds.length ? `<div class="label">Your examples</div>${S.builds.map(b => `<div class="sans" style="font-size:13px"><b style="color:${color(b.lane)}">★</b> ${esc(b.item)}</div>`).join('')}` : ''}
      </aside>
      <section class="graph"><div class="glist" role="group" aria-label="Choose a reading">${READINGS.map(r => `<button class="glitem ${r.id === mapUI.sel ? 'sel' : ''} ${q && !(r.chips.concat([r.title, r.keyword]).some(k => norm(k).includes(q))) ? 'dim' : ''}" data-node="${r.id}" aria-pressed="${r.id === mapUI.sel}" style="--c:${color(r.lane)}"><i></i><span><b>${esc(r.kicker)}</b>${esc(SHORTKEY[r.id] || r.keyword)}</span></button>`).join('')}</div><div class="gbox" id="gbox">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">${lines}</svg>
        <div class="gcore">Racial<br>capitalism</div>
        ${nodes}
        <div class="gtip" id="gtip"></div>
      </div>
      <div class="gleg">Solid circle = a reading · pill = its key word · dashed circle = connection beyond the class · purple dashed line = readings in conversation</div></section>
      <aside class="panel" style="--c:${color(sel.lane)}">
        <div class="label" style="color:${color(sel.lane)}">Selected · ${esc(sel.kicker)}</div>
        <h2>${esc(sel.title)}</h2>
        <p class="def">${esc(defn)}</p>
        ${sel.quotes.map(qu => `<blockquote class="q">${esc(qu.t)}<cite>(${esc(qu.cite)})</cite></blockquote>`).join('')}
        <div class="chips">${sel.chips.map(k => `<button class="pill" data-chip="${esc(k)}" data-pop style="color:${color(sel.lane)}">${esc(k)}</button>`).join('')}</div>
        <div class="label">Beyond the class</div>
        ${sel.outside.map((o, i) => `<div class="out" style="--c:${color(sel.lane)}"><b>${i + 1}</b><div><strong>${esc(o[0])}</strong><span>${esc(o[1])}</span></div></div>`).join('')}
        <div class="sans muted" style="font-size:12px">Suggested topics, not course key words.</div>
        <div class="row"><a class="btn" href="#/read/${sel.id}">Open reading →</a><a class="btn out" href="#/practice/sort">Test yourself</a></div>
      </aside>
    </div>`);
    const box = $('#gbox'), tip = $('#gtip');
    $$('[data-node],[data-key]').forEach(el => {
      const id = el.dataset.node || el.dataset.key;
      el.addEventListener('click', () => { mapUI.sel = id; viewMap(); });
      el.addEventListener('mouseenter', () => {
        const r = byId(id), br = el.getBoundingClientRect(), bb = box.getBoundingClientRect();
        tip.innerHTML = `<span class="label">Hover · ${esc(r.kicker)}</span><em>${esc(r.quotes[0].t)} (${esc(r.quotes[0].cite)})</em><span class="sans" style="font-size:12px;color:var(--gold)">Click to open the reading →</span>`;
        let lx = br.left - bb.left + br.width + 10, ly = br.top - bb.top - 10; if (lx > bb.width - 310) lx = br.left - bb.left - 310; if (ly < 0) ly = 8; if (ly > bb.height - 170) ly = bb.height - 180;
        tip.style.left = Math.max(6, lx) + 'px'; tip.style.top = ly + 'px'; tip.classList.add('on');
      });
      el.addEventListener('mouseleave', () => tip.classList.remove('on'));
    });
    $$('[data-layer]').forEach(i => i.addEventListener('change', () => { mapUI[i.dataset.layer] = i.checked; viewMap(); }));
    $('#mapq').addEventListener('input', e => { mapUI.q = e.target.value; const pos = e.target.selectionStart; viewMap(); const n = $('#mapq'); n.focus(); n.setSelectionRange(pos, pos); });
    $$('[data-chip]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); glossPop(b, b.dataset.chip, false); }));
    $$('[data-out]').forEach(b => b.addEventListener('click', () => { const o = sel.outside[+b.dataset.out]; openPop(b, `<span class="label">Beyond the class</span><b>${esc(o[0])}</b><br>${esc(o[1])}`); }));
  }

  /* ---------- READING WALKTHROUGH ---------- */
  const walkUI = {}; // id -> current quote index
  const ORDER = ['koshy', 'goldstein', 'harris', 'day', 'lowe3', 'lowe1', 'lowe5', 'wynter03', 'wm'];
  function wrapQuote(r, qi) {
    const q = r.quotes[qi]; let html = esc(q.t); const un = unpackedSet(r.id, qi);
    q.words.forEach(([w]) => { const e = esc(w); const idx = html.indexOf(e); if (idx > -1 && !html.includes('data-w="' + e + '"')) html = html.slice(0, idx) + `<button class="w ${un.has(w) ? 'done' : ''}" data-w="${e}" data-pop>${e}</button>` + html.slice(idx + e.length); });
    return html;
  }
  function checkSentence(txt) {
    const words = (txt.trim().match(/\S+/g) || []).length;
    if (words < 8) return { ok: false, msg: 'Say a bit more: aim for one full sentence that a friend could follow.' };
    if (!/(because|\bso\b|so that|\bby\b|through|since|which|when|then|became|means|instead|turn|while|as a result|\bit\b.*\bbut\b)/i.test(txt)) return { ok: false, msg: 'Name the mechanism: how does it work, not just what happened? Try “because,” “through,” or “so that.”' };
    return { ok: true, msg: 'That names a mechanism and reads clearly. Checked against the reading’s own claim, it holds.' };
  }
  function exHTML(e, c) {
    return `<article class="ex" style="--c:${c}"><div class="label" style="color:${c}">${e.echo ? 'Echo · beyond the readings' : 'Example'}</div><h3>${esc(e.title)}</h3>${e.quote ? `<blockquote>${e.quote[0]}<cite>(${esc(e.quote[1])})</cite></blockquote>` : ''}<p>${esc(e.text)}</p>${e.img ? `<img src="${e.img}" alt="${esc(e.imgAlt || '')}" loading="lazy"><div class="cap">${esc(e.cap || '')}</div>` : ''}</article>`;
  }
  function viewRead(id) {
    const r = byId(id) || byId('koshy'); id = r.id;
    const qi = walkUI[id] || 0, q = r.quotes[qi], c = color(r.lane), un = unpackedSet(id, qi);
    const said = S.said[id] && S.said[id][qi];
    const unlocked = allUnpacked(r, qi) && !!said;
    const idx = ORDER.indexOf(id), nextId = ORDER[idx + 1];
    page('read', `
    <div class="walk" style="--c:${c}">
      <aside class="stepper"><div class="label" style="margin-bottom:6px">Your walk</div>${ORDER.map((rid, i) => { const rr = byId(rid), ch = checks(rr); return `<a href="#/read/${rid}" class="${rid === id ? 'on' : ''}" style="--c:${color(rr.lane)}"><i class="${ch.done ? 'done' : ''}">${ch.done ? '✓' : i + 1}</i>${esc(rr.kicker)}</a>`; }).join('')}</aside>
      <section class="wmain">
        <div class="label" style="color:${c}">Reading · ${LANES[r.lane].name}</div>
        <h1>${esc(r.kicker.split(',')[0])}: ${esc(r.title)}</h1>
        <p class="muted" style="margin:0;font-size:20px">${esc(r.src)}. Two quotes anchor this reading; tapping any underlined word unpacks it.</p>
        <div class="sans label" style="display:flex;gap:10px;align-items:center;color:var(--ink)">Quote ${qi + 1} of ${r.quotes.length} ${r.quotes.map((_, i) => `<span style="width:12px;height:12px;border-radius:50%;background:${i === qi ? c : 'var(--rule)'};display:inline-block"></span>`).join('')}</div>
        <div class="qcard"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center"><span class="label" style="color:${c}">${esc(q.cite)}</span><span class="tag">Interactive: tap a word</span></div>
          <p class="qt">${wrapQuote(r, qi)}</p>${q.note ? `<div class="sans muted" style="font-size:13px">${esc(q.note)}</div>` : ''}
        </div>
        <div class="chips" style="align-items:center"><span class="label">Words unpacked: ${un.size} of ${q.words.length}</span>${q.words.map(([w]) => `<span class="pill ${un.has(w) ? 'solid' : ''}" style="color:${c}"><span>${un.has(w) ? '✓ ' : ''}${esc(w)}</span></span>`).join('')}</div>
        <div class="say"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><span class="label" style="color:var(--ink)">Say it back</span><span class="tag">Interactive: free text</span></div>
          <p class="muted" style="margin:0">Restate the quote in one sentence a friend would understand. Name the mechanism, not just the result.</p>
          <textarea id="say" aria-label="Your one-sentence restatement of the quote" placeholder="In my own words…">${esc(typeof said === 'string' ? said : '')}</textarea>
          <div id="fb" class="fb hint" role="status" aria-live="polite">${said ? 'Saved. This sentence passed the check.' : 'The check looks for a full sentence that says how the thing works.'}</div>
          <div><button class="btn" id="chk">Check my sentence</button></div></div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><button class="btn" id="next" ${unlocked ? '' : 'disabled'}>${qi < r.quotes.length - 1 ? 'Next quote →' : (nextId ? 'Next reading →' : 'Go to practice →')}${unlocked ? '' : '  (locked)'}</button><span class="sans muted" style="font-size:14px">${unlocked ? 'Unlocked.' : 'Unlocks after you unpack every word and write a sentence that passes.'}</span></div>
        <h2 class="sec" style="font-size:34px;margin-top:16px">What the reading argues</h2>
        <p style="margin:0;font-size:20px">${esc(r.explain)}</p>
        ${r.examples.length || r.extraTerm ? `<div class="label" style="margin-top:8px">Examples from this reading</div>` : ''}
        ${r.extraTerm ? exHTML(r.extraTerm, c) : ''}${r.examples.map(e => exHTML(e, c)).join('')}
      </section>
      <aside class="rail">
        <div class="label">Key words in this reading</div>
        ${r.chips.map(k => { const g = gloss(k), on = Object.values(S.unpacked[id] || {}).some(a => a.some(w => norm(w) === norm(k))); return `<button class="kw" data-kw="${esc(k)}" data-pop style="--c:${c}"><b class="${on ? 'on' : ''}">${on ? '✓' : ''}</b><div><strong>${esc(k)}</strong><span>${esc(g ? g.g : '')}</span></div></button>`; }).join('')}
        <hr style="border:0;border-top:1px solid var(--rule);width:100%">
        <div class="label">Talks to</div>
        <div class="talks">${r.links.map(l => { const o = byId(l); return `<a href="#/read/${l}" style="--c:${color(o.lane)}">${esc(o.kicker)}: ${esc(o.title)}</a>`; }).join('')}</div>
        <div class="label">Beyond the class</div>
        ${r.outside.map(o => `<div style="border:1.5px dashed ${c};border-radius:8px;padding:14px;font-family:var(--sans);font-size:14px;line-height:1.45"><b>${esc(o[0])}</b><br><span class="muted">${esc(o[1])}</span></div>`).join('')}
        <a class="btn out small" href="#/practice/build">Bring your own example</a>
      </aside>
    </div>`);
    $$('.qt .w').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation(); const w = b.dataset.w.replace(/&amp;/g, '&');
      const word = q.words.find(([x]) => esc(x) === b.dataset.w)[0];
      const gl = q.words.find(([x]) => x === word)[1];
      openPop(b, `<span class="label">${esc(word)} · what it means here</span>${esc(gl)}<br><button class="btn small" data-got style="background:var(--bg);color:var(--ink);border-color:var(--bg)">Got it ✓</button>`, () => {
        S.unpacked[id] = S.unpacked[id] || {}; const set = new Set(S.unpacked[id][qi] || []); set.add(word); S.unpacked[id][qi] = Array.from(set); save(); viewRead(id); const nx = $('.qt .w:not(.done)') || $('#say'); if (nx) nx.focus({ preventScroll: true });
      });
    }));
    $$('[data-kw]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); glossPop(b, b.dataset.kw, false); }));
    $('#chk').addEventListener('click', () => {
      const t = $('#say').value, res = checkSentence(t), fb = $('#fb'); fb.className = 'fb ' + (res.ok ? 'ok' : 'no'); fb.textContent = res.msg;
      if (res.ok) { S.said[id] = S.said[id] || {}; S.said[id][qi] = t.trim(); save(); setTimeout(() => viewRead(id), 700); }
    });
    $('#next').addEventListener('click', () => {
      if (qi < r.quotes.length - 1) { walkUI[id] = qi + 1; viewRead(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }
      else { walkUI[id] = 0; location.hash = nextId ? '#/read/' + nextId : '#/practice/sort'; }
    });
  }

  /* ---------- FULL MAP ---------- */
  function rcHTML(r, label) {
    const c = color(r.lane);
    return `<article class="rc sect-anchor" id="card-${r.id}" style="--c:${c}"><div class="label" style="color:${c}">${esc(label || r.kicker)}</div><h4>${esc(r.title)}</h4><div class="s">${esc(r.src)}</div>${r.quotes.map(q => `<p class="qq">${esc(q.t)} <cite>(${esc(q.cite)})</cite></p>`).join('')}<p class="b">${esc(r.explain)}</p><div class="chips">${r.chips.map(k => `<button class="pill" data-chip="${esc(k)}" data-pop style="color:${c}">${esc(k)}</button>`).join('')}</div></article>`;
  }
  function viewFull() {
    const g = id => byId(id), ex = (r) => r.examples.map(e => exHTML(e, color(r.lane))).join('');
    const harris = g('harris'), pi = harris.extraTerm;
    page('map', `
    <div class="wrap">
      <section class="fm-top">
        <div class="label c-reproduced">The concept map, as a page</div>
        <h1>Racial capitalism</h1>
        <div class="fm-grid">
          <div><p style="font-size:25px;line-height:1.4">${esc(g('koshy').explain.split('. ').slice(0, 2).join('. ') + '.')}</p></div>
          <div class="iq"><p>Robinson, as the editors summarize: capitalism ${esc(g('koshy').quotes[0].t)} (${esc(g('koshy').quotes[0].cite)}).</p><p>${esc(g('koshy').quotes[1].t)} (${esc(g('koshy').quotes[1].cite)}).</p></div>
        </div>
        <div class="jump print-hide"><span class="label">Jump to</span><button class="pill" data-jump="essay" style="color:var(--ink)">The map, in words</button><button class="pill" data-jump="terms" style="color:var(--ink)">Key terms</button>${ORDER.map(id => `<button class="pill" data-jump="card-${id}" style="color:${color(g(id).lane)}">${esc(g(id).short)} · ${g(id).quotes.length} quotes</button>`).join('')}</div>
      </section>
      <div class="flow"><div class="sans muted" style="font-size:15px;font-weight:500">Read left to right: how extraction is reproduced, renewed, and hidden.</div>
        <svg viewBox="0 0 1000 92" preserveAspectRatio="none" aria-hidden="true"><rect x="499" y="6" width="3" height="40" fill="#F4F4F0"/><rect x="166" y="44" width="670" height="3" fill="#F4F4F0"/>${[166, 500, 834].map(x => `<rect x="${x - 1}" y="46" width="3" height="28" fill="#F4F4F0"/><polygon points="${x - 13},72 ${x + 13},72 ${x},90" fill="#F4F4F0"/>`).join('')}</svg></div>
      <section class="lanes">
        <div class="lane" style="--c:${color('reproduced')}"><header><h3>1 · Reproduced</h3><p>${LANES.reproduced.q}</p></header>${rcHTML(g('goldstein'), 'Goldstein, ch. 2')}${ex(g('goldstein'))}</div>
        <div class="lane" style="--c:${color('renewed')}"><header><h3>2 · Renewed</h3><p>${LANES.renewed.q}</p></header>${rcHTML(harris, 'Harris, ch. 3')}${exHTML(Object.assign({}, pi, { title: 'Predatory inclusion', text: pi.text }), color('renewed')).replace('>Example<', '>Related term · Harris, ch. 3<')}${ex(harris)}</div>
        <div class="lane" style="--c:${color('hidden')}"><header><h3>3 · Hidden</h3><p>${LANES.hidden.q}</p></header>${rcHTML(g('day'), 'Day, ch. 8')}${ex(g('day'))}${rcHTML(g('lowe3'), 'Lowe, ch. 3')}${ex(g('lowe3'))}</div>
      </section>
      <section class="band"><div class="label">Underneath all three lanes</div><h2 class="sec" style="margin-top:6px">Why it reads as natural</h2><p class="muted" style="font-style:italic;font-size:24px;margin:8px 0 0">The liberal and biological stories that hold the mechanism in place.</p>
        <div class="two"><div class="lane">${rcHTML(g('lowe1'), 'Lowe, ch. 1')}${rcHTML(g('wynter03'), 'Wynter, 2003')}</div><div class="lane">${rcHTML(g('lowe5'), 'Lowe, ch. 5')}${rcHTML(g('wm'), 'Wynter and McKittrick')}</div></div>
        <div class="limits"><div class="label" style="color:var(--gold)">Limits and contribution</div><p>Limits. The chapters work mainly from the United States, Canada, and the British empire, and Flint is a single case, so the three-part pattern should be read as an argument about structure and not a general law. Tiana, “Fast Car,” and A Subtlety illustrate mechanisms; they do not prove them.</p><p>Contribution. The map treats racial capitalism as a relation, not a ranking, and offers three questions for reading it: where is loss built into the form (reproduced), where does the form change while the function stays (renewed), and where is politics relabeled as neutral (hidden)?</p></div>
        <section class="essay sect-anchor" id="essay"><h2 class="sec" style="margin:6px 0 4px">The map, in words</h2><p class="muted" style="font-style:italic;font-size:22px;margin:0 0 20px">Each key term from the quotations above, unpacked and connected. Tap an underlined term for its meaning in the readings.</p><div class="cols">${ESSAY.map(p => `<p>${termify(p)}</p>`).join('')}</div></section>
        <section class="terms sect-anchor" id="terms"><div class="label">Key terms in the quotations</div><h2 class="sec" style="margin:6px 0 4px">Terms, unpacked</h2><p class="muted" style="margin:0 0 20px;font-size:20px">Each quotation above hangs on a few terms. Here is what each one means in the reading that uses it.</p><div class="tgrid">${ORDER.map(id => { const r = byId(id), c = color(r.lane); return `<article class="tblock" style="--c:${c}"><div class="label" style="color:${c}">${esc(r.kicker)}</div>${r.quotes.map(q => `<div class="tq"><div class="tcite">${esc(q.cite)}</div><dl>${q.words.map(([w, g]) => `<dt>${esc(w)}</dt><dd>${esc(g)}</dd>`).join('')}</dl></div>`).join('')}</article>`; }).join('')}</div></section>
        <div class="cited"><div class="label">Works cited (MLA)</div>${WORKS_CITED.map(w => `<p>${esc(w)}</p>`).join('')}<p class="sans muted" style="font-size:13px">Image credits: Walt Disney Animation Studios (film stills); Brooks patty, CC BY-SA 4.0 (A Subtlety photo); Elektra Records (album cover).</p></div>
        <div class="print-hide" style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn out" href="#/map">Back to the explorer</a></div>
      </section>
    </div>`, { byline: true });
    $$('[data-jump]').forEach(b => b.addEventListener('click', () => { const t = document.getElementById(b.dataset.jump); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
    $$('[data-chip]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); glossPop(b, b.dataset.chip, false); }));
  }

  /* ---------- PRACTICE ---------- */
  function tabs(on) { return `<div class="tabs">${[['sort', 'Sort it'], ['flip', 'Flip it'], ['build', 'Build it']].map(([k, n]) => `<a href="#/practice/${k}" class="${on === k ? 'on' : ''}">${n}</a>`).join('')}</div>`; }
  const sortUI = { sel: null, last: null };
  function scenHTML(s, placed) { return `<div class="scen ${sortUI.sel === s.id ? 'sel' : ''}" role="${placed ? 'group' : 'button'}" ${placed ? '' : `aria-pressed="${sortUI.sel === s.id}"`} draggable="${placed ? 'false' : 'true'}" data-s="${s.id}" tabindex="0"><div class="label">${esc(s.source)}</div>${esc(s.text)}${s.img ? `<img src="${s.img}" alt="" loading="lazy">` : ''}${placed ? '<div style="margin-top:8px"><button class="btn out small" data-back="' + s.id + '">Move back</button></div>' : ''}</div>`; }
  function viewSort() {
    const placed = SCENARIOS.filter(s => S.sort[s.id]).length, total = SCENARIOS.length;
    const last = sortUI.last && S.sort[sortUI.last] ? SCENARIOS.find(s => s.id === sortUI.last) : null;
    const lanes = ['reproduced', 'renewed', 'hidden'];
    let verdict = '';
    if (last) {
      const st = S.sort[last.id], res = st.lane === last.best ? 'supported' : (last.also || []).includes(st.lane) ? 'defensible' : 'recheck', lc = color(st.lane);
      const head = res === 'supported' ? 'Supported by the reading.' : res === 'defensible' ? 'Defensible. Now check the lane the reading favors.' : 'Check it against the reading.';
      verdict = `<div class="verdict" style="--c:${lc}">
        <div><div class="label" style="color:${lc}">You chose · ${LANES[st.lane].name}</div><h3>${head}</h3><p class="muted" style="margin:0">${esc(last.why)}</p>${res === 'recheck' ? `<p class="muted" style="margin:10px 0 0">The reading points to <b style="color:${color(last.best)}">${LANES[last.best].name}</b>.</p>` : ''}${last.alt && res !== 'supported' ? '' : last.alt ? `<p class="muted" style="margin:10px 0 0">${esc(last.alt)}</p>` : ''}<blockquote class="q" style="--c:${color(last.best)};margin-top:14px">${last.quote[0]}<cite>(${esc(last.quote[1])})</cite></blockquote></div>
        <div><div class="label" style="color:var(--ink)">Now defend it</div><p style="margin:6px 0 10px">Which detail made you choose it? Could it also fit another lane?</p><textarea id="defend" aria-label="Defend your choice" style="min-height:80px;font-size:18px">${esc(st.defense || '')}</textarea><div class="conf"><span class="label">How sure are you?</span>${[1, 2, 3, 4, 5].map(n => `<button data-conf="${n}" class="${st.conf === n ? 'on' : ''}">${n}</button>`).join('')}</div></div>
        <div style="display:flex;flex-direction:column;gap:10px;align-items:flex-start"><div class="label">Next</div>${placed < total ? '<span class="sans muted" style="font-size:14px">Place another scenario from the deck.</span>' : '<a class="btn" href="#/mastery">See your calibration →</a>'}</div></div>`;
    }
    page('practice', `<div class="wrap" style="padding-top:20px;padding-bottom:30px">${tabs('sort')}
      <div style="display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;align-items:center"><h1 class="page-h" style="font-size:clamp(34px,5vw,56px)">Sort it: reproduced, renewed, or hidden?</h1><span class="pill" style="color:var(--ink)">${placed} of ${total} placed</span></div>
      <p class="muted" style="font-size:22px;margin:10px 0 0">Each scenario belongs to the lane whose mechanism it shows, though some fit more than one; placing one means defending it. Drag a scenario to a lane, or select it and choose a lane.</p>
      <div class="sortgrid"><div><div class="label" style="margin-bottom:12px">Scenario deck · drag from here</div><div class="deck" id="deck">${SCENARIOS.filter(s => !S.sort[s.id]).map(s => scenHTML(s, false)).join('') || '<div class="sans muted">All scenarios placed.</div>'}</div></div>
      <div class="zones"><div class="sr-only" id="sortlive" role="status" aria-live="polite"></div>${lanes.map(l => `<div class="zone" data-zone="${l}" style="--c:${color(l)}"><h3>${LANES[l].name}</h3><p>${l === 'reproduced' ? 'Where is loss built into ordinary family or property life?' : l === 'renewed' ? 'Where did the form change but the extraction stay?' : 'Where was a political question relabeled as neutral or technical?'}</p>${SCENARIOS.filter(s => S.sort[s.id] && S.sort[s.id].lane === l).map(s => scenHTML(s, true)).join('') || '<div class="hint">Drop a scenario here</div>'}<button class="btn out small" data-place="${l}" ${sortUI.sel ? '' : 'disabled'} aria-label="Place the selected scenario in ${LANES[l].name}">Place selected here</button></div>`).join('')}</div></div>
      <div aria-live="polite">${verdict}</div></div>`);
    let dragId = null;
    const place = (sid, lane) => { S.sort[sid] = Object.assign({ conf: 0, defense: '' }, S.sort[sid] || {}, { lane }); sortUI.sel = null; sortUI.last = sid; save(); viewSort(); setTimeout(() => { const v = $('.verdict'); if (v) v.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 60); };
    $$('.scen[draggable="true"]').forEach(el => {
      el.addEventListener('dragstart', e => { dragId = el.dataset.s; el.classList.add('drag'); e.dataTransfer.setData('text/plain', dragId); e.dataTransfer.effectAllowed = 'move'; });
      el.addEventListener('dragend', () => { el.classList.remove('drag'); $$('.zone').forEach(z => z.classList.remove('over')); });
      el.addEventListener('click', () => { sortUI.sel = sortUI.sel === el.dataset.s ? null : el.dataset.s; $$('.scen').forEach(x => { x.classList.toggle('sel', x.dataset.s === sortUI.sel); if (x.getAttribute('role') === 'button') x.setAttribute('aria-pressed', x.dataset.s === sortUI.sel); }); $$('[data-place]').forEach(b => { b.disabled = !sortUI.sel; }); const live = $('#sortlive'); if (live) live.textContent = sortUI.sel ? 'Scenario selected. Choose a lane with the Place selected here buttons, or drag it.' : 'Selection cleared.'; });
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
    });
    $$('.zone').forEach(z => {
      z.addEventListener('dragover', e => { e.preventDefault(); z.classList.add('over'); const h = $('.hint', z); if (h) h.textContent = 'Release to place here'; });
      z.addEventListener('dragleave', () => { z.classList.remove('over'); const h = $('.hint', z); if (h) h.textContent = 'Drop a scenario here'; });
      z.addEventListener('drop', e => { e.preventDefault(); const sid = e.dataTransfer.getData('text/plain') || dragId; if (sid) place(sid, z.dataset.zone); });
      z.addEventListener('click', e => { if (sortUI.sel && !e.target.closest('.scen')) place(sortUI.sel, z.dataset.zone); });
    });
    $$('[data-place]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); if (sortUI.sel) place(sortUI.sel, b.dataset.place); }));
    $$('[data-back]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); delete S.sort[b.dataset.back]; if (sortUI.last === b.dataset.back) sortUI.last = null; save(); viewSort(); }));
    $$('[data-conf]').forEach(b => b.addEventListener('click', () => { S.sort[sortUI.last].conf = +b.dataset.conf; save(); $$('[data-conf]').forEach(x => x.classList.toggle('on', x === b)); }));
    const df = $('#defend'); if (df) df.addEventListener('input', () => { S.sort[sortUI.last].defense = df.value; save(); });
  }

  const HIT = new Set([2, 5, 6, 13, 14, 19, 20, 22, 27, 31, 33, 34, 40, 43, 44, 47, 52, 55]);
  const flipUI = { mode: 'wri' };
  function viewFlip() {
    const enf = flipUI.mode === 'enf';
    page('practice', `<div class="wrap" style="padding-top:20px;padding-bottom:30px">${tabs('flip')}
      <h1 class="page-h" style="font-size:clamp(34px,5vw,56px)">Flip it: colorblind law, racialized administration</h1>
      <p class="muted" style="font-size:22px;margin:10px 0 0">Harris describes “formally colorblind laws” that replaced the Black Codes’ racial language, enforced through “racialized administration.” Predict who the rule will catch; then flip the switch to see whether the prediction holds.</p>
      <div class="flip"><div class="stack">
        <div class="box"><div class="label" style="color:var(--ink)">1 · Predict first</div><div style="font-size:21px;line-height:1.35">If this rule is applied evenly, who do you expect it to catch?</div>
          ${[['Everyone equally', 'equal'], ['People already marked as a problem', 'marked'], ['Not sure yet', 'unsure']].map(([t, v]) => `<label class="opt ${S.flip.pred === v ? 'on' : ''}"><input type="radio" name="pred" value="${v}" ${S.flip.pred === v ? 'checked' : ''}>${t}</label>`).join('')}</div>
        <div class="box"><div class="label" style="color:var(--ink)">2 · The rule, “formally colorblind”</div><div style="font-style:italic;font-size:24px;line-height:1.35">“Any person who is idle, wandering, or without employment may be arrested and fined.”</div><div class="sans muted" style="font-size:12.5px;line-height:1.45">A vagrancy law, paraphrased from Harris’s description of the “public-order laws” that replaced the Black Codes (105). Not a verbatim statute.</div></div>
        <div class="box hot"><div class="label c-renewed">3 · Flip it</div><span class="tag" style="align-self:flex-start">Interactive: click to toggle</span><div class="switch"><button data-mode="wri" class="${enf ? '' : 'on'}">Formally colorblind law</button><button data-mode="enf" class="${enf ? 'on' : ''}">Racialized administration</button></div></div>
      </div><div class="stack">
        <div class="box"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><span class="label c-renewed">Who gets arrested? · ${enf ? 'racialized administration' : 'formally colorblind law'}</span><span class="sans muted" style="font-size:12.5px">Illustration, not data</span></div>
          <div class="dots ${enf ? 'enf' : 'wri'}" id="dots">${Array.from({ length: 60 }, (_, i) => `<i class="${HIT.has(i) ? 'hit' : ''}"></i>`).join('')}</div>
          <div class="sans" style="font-size:14px;color:var(--muted)" id="dotcap" role="status" aria-live="polite">${enf ? '<b style="color:var(--renewed)">●</b> Stopped under the rule: 18 of 60. The words did not change; who the rule reaches did.' : 'On paper, every person is covered by the same words, so no one stands out.'}</div></div>
        <div class="box" style="background:var(--bg);border-color:rgba(31,78,121,.4)"><div class="label c-renewed">Back to the reading</div><div style="font-style:italic;font-size:24px;line-height:1.35;color:var(--renewed)">“formally colorblind laws and a ruthlessly targeted system of racialized administration” (Harris 105)</div>
          <div class="muted" style="font-size:20px">What stayed the same between the two views? What changed? Write one sentence for each.</div>
          <textarea id="same" class="field" aria-label="What stayed the same" style="min-height:70px;font-size:18px" placeholder="Same: the words of the rule.">${esc(S.flip.same)}</textarea><textarea id="changed" class="field" aria-label="What changed" style="min-height:70px;font-size:18px" placeholder="Changed: who the rule reaches.">${esc(S.flip.changed)}</textarea></div>
      </div></div></div>`);
    $$('input[name=pred]').forEach(i => i.addEventListener('change', () => { S.flip.pred = i.value; save(); $$('.opt').forEach(o => o.classList.toggle('on', o.querySelector('input').checked)); }));
    $$('[data-mode]').forEach(b => b.addEventListener('click', () => { flipUI.mode = b.dataset.mode; viewFlip(); }));
    ['same', 'changed'].forEach(k => $('#' + k).addEventListener('input', e => { S.flip[k] = e.target.value; save(); }));
  }

  const CONN = /(because|\bso\b|so that|\bby\b|through|since|which|when|then|means|instead|while|as a result)/i;
  const LIMIT = /(not prove|does not show|do not prove|cannot show|can't show|limit|one case|only illustrates|doesn’t|does not|not a general)/i;
  const CITE = /\([A-Za-z .&,]*\d+(?:[–-]\d+)?\)/;
  function buildChecks(d) {
    const t = d.text || '', low = norm(t);
    const term = KEYTERMS.find(k => low.includes(norm(k)));
    return [
      { ok: !!term, t: 'One key term, held fixed', d: term ? `“${term}” used in your text` : 'Use a term from the readings, such as “social reproduction” or “wastelanding”' },
      { ok: CITE.test(t), t: 'A quote or claim with a page', d: CITE.test(t) ? 'A page-cited reference is in your text' : 'Add a citation like (Goldstein 76)' },
      { ok: CONN.test(t) && t.trim().split(/\s+/).length >= 15, t: 'A mechanism, not just a result', d: CONN.test(t) ? 'You say why it works that way' : 'Say how it works: “because,” “through,” “so that”' },
      { ok: LIMIT.test(t), t: 'A limit', d: LIMIT.test(t) ? 'You say what the example does not prove' : 'What does this example not prove?' }
    ];
  }
  function viewBuild() {
    const d = S.draft;
    page('practice', `<div class="wrap" style="padding-top:20px;padding-bottom:30px">${tabs('build')}
      <h1 class="page-h" style="font-size:clamp(34px,5vw,56px)">Build it: bring your own example.</h1>
      <p class="muted" style="font-size:22px;margin:10px 0 0">Choose something from outside the class and show the mechanism at work; the checklist asks the questions a reviewer would ask.</p>
      <div class="build"><div class="stack">
        <div class="bstep"><h3><b>1</b>Pick something from outside the class</h3><div class="chips" id="kinds">${['Film', 'Song', 'Artwork', 'News event', 'My own life'].map(k => `<button class="pill ${d.kind === k ? 'solid' : ''}" data-kind="${k}" style="color:var(--ink)"><span>${k}</span></button>`).join('')}</div><input class="field" id="item" aria-label="Your example, title" placeholder="For example: Tracy Chapman, “Fast Car” (1988)" value="${esc(d.item)}"></div>
        <div class="bstep"><h3><b>2</b>Which lane does it show?</h3><div class="chips" id="lanes">${['reproduced', 'renewed', 'hidden'].map(l => `<button class="pill ${d.lane === l ? 'solid' : ''}" data-lane="${l}" style="color:${color(l)}"><span>${LANES[l].name}</span></button>`).join('')}</div>
          <label class="label" for="reading">Anchor reading</label><select class="field" id="reading">${ORDER.map(id => `<option value="${id}" ${d.reading === id ? 'selected' : ''}>${esc(byId(id).kicker)}: ${esc(byId(id).title)}</option>`).join('')}</select></div>
        <div class="bstep"><h3><b>3</b>Name the mechanism in two or three sentences</h3><textarea id="text" aria-label="Explain the mechanism in two or three sentences" placeholder="Name a key term, say how it works, cite a page, and say what it does not prove.">${esc(d.text)}</textarea></div>
      </div><div class="stack">
        <div class="bstep" style="border:2px solid var(--ink)"><div class="label" style="color:var(--ink)">Self-check · like a reviewer</div><span class="tag" style="align-self:flex-start">Interactive: ticks as you write</span><div class="check"><ul id="ck"></ul></div></div>
        <div id="preview"></div>
        <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn" id="add">Add to my map</button></div>
        <div id="msg" class="fb hint" role="status" aria-live="polite" style="display:none"></div>
        ${S.builds.length ? `<div class="label">Your examples</div>${S.builds.map((b, i) => `<div class="ex" style="--c:${color(b.lane)}"><h3 style="font-size:22px">${esc(b.item)}</h3><p style="font-size:16px">${esc(b.text)}</p><div><button class="btn out small" data-del="${i}">Remove</button></div></div>`).join('')}` : ''}
      </div></div></div>`);
    const refresh = () => {
      const ck = buildChecks(S.draft); $('#ck').innerHTML = ck.map(c => `<li><b class="${c.ok ? '' : 'no'}">${c.ok ? '✓' : '!'}</b><div><strong>${c.t}</strong><span>${esc(c.d)}</span></div></li>`).join('');
      const lc = color(S.draft.lane); $('#preview').innerHTML = `<article class="ex" style="--c:${lc}"><div class="label" style="color:${lc}">Live preview · your map card</div><h3>${esc(S.draft.item || 'Your example')}</h3><p>${esc(S.draft.text || 'Your explanation appears here as you write.')}</p><div class="sans muted" style="font-size:12.5px">${LANES[S.draft.lane].name} · anchored in ${esc(byId(S.draft.reading).kicker)}</div></article>`;
    };
    refresh();
    $$('[data-kind]').forEach(b => b.addEventListener('click', () => { S.draft.kind = b.dataset.kind; save(); $$('[data-kind]').forEach(x => x.classList.toggle('solid', x === b)); }));
    $$('[data-lane]').forEach(b => b.addEventListener('click', () => { S.draft.lane = b.dataset.lane; save(); $$('[data-lane]').forEach(x => x.classList.toggle('solid', x === b)); refresh(); }));
    $('#item').addEventListener('input', e => { S.draft.item = e.target.value; save(); refresh(); });
    $('#text').addEventListener('input', e => { S.draft.text = e.target.value; save(); refresh(); });
    $('#reading').addEventListener('change', e => { S.draft.reading = e.target.value; save(); refresh(); });
    $('#add').addEventListener('click', () => {
      const m = $('#msg'); m.style.display = 'block';
      if (!S.draft.item.trim() || S.draft.text.trim().split(/\s+/).length < 8) { m.className = 'fb no'; m.textContent = 'Add a title and a few sentences first.'; return; }
      S.builds.push({ item: S.draft.item.trim(), kind: S.draft.kind, lane: S.draft.lane, reading: S.draft.reading, text: S.draft.text.trim() }); S.draft.item = ''; S.draft.text = ''; save(); viewBuild();
      const mm = $('#msg'); mm.style.display = 'block'; mm.className = 'fb ok'; mm.innerHTML = 'Added. Your example now appears as a dashed star on the <a href="#/map">map</a>.';
    });
    $$('[data-del]').forEach(b => b.addEventListener('click', () => { S.builds.splice(+b.dataset.del, 1); save(); viewBuild(); }));
  }

  /* ---------- MASTERY ---------- */
  function viewMastery() {
    const n = doneCount();
    const next = ORDER.map(byId).find(r => !checks(r).done);
    const placed = SCENARIOS.filter(s => S.sort[s.id]);
    const lacks = r => { const c = checks(r); return !c.unpack ? 'unpack the words' : !c.say ? 'say the idea back' : 'apply it to something new'; };
    const t = S.teach || '';
    const rub = [['Defines the term', /(race|racial)/i.test(t) && /(econom|capital|accumul)/i.test(t)], ['Uses a mechanism', CONN.test(t)], ['Names a limit', LIMIT.test(t)]];
    page('mastery', `<div class="wrap" style="padding-top:30px;padding-bottom:20px">
      <div class="label c-reproduced">Mastery</div><h1 class="page-h" style="font-size:clamp(36px,5vw,60px);margin-top:8px">Can you explain it back?</h1>
      <p class="muted" style="font-size:22px;margin:10px 0 0;max-width:900px">Mastery is not recognition; it is explanation. A reading counts as done only when you can unpack its words, say its idea back, and apply it to something new.</p>
      <div class="mgrid"><div class="card" style="padding:28px"><div class="label">Your walk</div>
        <table class="mt"><thead><tr><th>Reading</th><th>Unpack</th><th>Say it back</th><th>Apply</th></tr></thead><tbody>${ORDER.map(id => { const r = byId(id), c = checks(r), col = color(r.lane); const cell = on => `<span class="ck ${on ? 'on' : ''}" style="--c:${col}"></span>`; return `<tr style="--c:${col}"><td><i></i><a href="#/read/${id}" style="text-decoration:none">${esc(r.kicker)}</a></td><td>${cell(c.unpack)}</td><td>${cell(c.say)}</td><td>${cell(c.apply)}</td></tr>`; }).join('')}</tbody></table></div>
      <div style="display:flex;flex-direction:column;gap:24px">
        <div class="dark"><div class="label">Teach it back</div><div style="font-size:23px;line-height:1.4">Explain racial capitalism to a friend in 60 seconds, using one reading and one example you added.</div>
          <div class="chips">${rub.map(([k, ok]) => `<span class="pill ${ok ? 'solid' : ''}" style="color:var(--gold)"><span style="color:${ok ? '#0B0B0B' : 'var(--gold)'}">${ok ? '✓ ' : ''}${k}</span></span>`).join('')}</div>
          <textarea id="teach" aria-label="Explain racial capitalism in your own words" placeholder="Type it as if you were talking…">${esc(t)}</textarea></div>
        <div class="card" style="padding:26px"><div class="label c-renewed">Best next step</div>${next ? `<h3 style="font-size:28px;margin:8px 0">Finish ${esc(next.kicker)}: ${lacks(next)}</h3><p class="muted" style="margin:0 0 14px">${esc(next.title)}. It takes a few minutes.</p><a class="btn" href="#/read/${next.id}">Resume →</a>` : '<h3 style="font-size:28px;margin:8px 0">Every reading is done.</h3><a class="btn" href="#/full">Read the full map</a>'}</div></div></div>
      <div class="mgrid" style="grid-template-columns:1fr 1fr"><div class="card" style="padding:28px"><div class="label">Calibration · confidence vs. result</div>${placed.length ? placed.map(s => { const st = S.sort[s.id], res = st.lane === s.best ? 'supported' : (s.also || []).includes(st.lane) ? 'defensible' : 'recheck'; return `<div class="cal" style="margin-top:14px"><span style="width:150px">${esc(s.source.split(',')[0].split(' ·')[0])}</span><span class="b"><i style="width:${(st.conf || 0) * 20}%"></i></span><span class="pill" style="color:${res === 'supported' ? 'var(--hidden)' : res === 'defensible' ? 'var(--renewed)' : 'var(--reproduced)'}">${res}</span></div>`; }).join('') + `<p class="muted" style="margin:18px 0 0;font-size:18px">The bar is how sure you said you were (out of 5). Compare it with the result on the right.</p>` : '<p class="muted">Place scenarios in Sort it to see how your confidence matches the readings.</p>'}</div>
        <div class="card" style="padding:28px"><div class="label">Beyond the class · suggested, not from the readings</div>${READINGS.filter(r => ['harris', 'lowe3', 'koshy'].includes(r.id)).map(r => `<div style="border:1.5px dashed ${color(r.lane)};border-radius:8px;padding:12px 14px;margin-top:12px;font-family:var(--sans);font-size:14px"><b>${esc(r.outside[0][0])}</b><br><span class="muted">${esc(r.kicker)}</span></div>`).join('')}</div></div></div>`);
    $('#teach').addEventListener('input', e => { S.teach = e.target.value; save(); const t2 = e.target.value; const r2 = [/(race|racial)/i.test(t2) && /(econom|capital|accumul)/i.test(t2), CONN.test(t2), LIMIT.test(t2)]; $$('.dark .pill').forEach((p, i) => { p.classList.toggle('solid', r2[i]); const sp = p.querySelector('span'); const label = rub[i][0]; sp.textContent = (r2[i] ? '✓ ' : '') + label; sp.style.color = r2[i] ? '#0B0B0B' : 'var(--gold)'; }); });
  }


  /* ---------- follow along: gray line highlight on hover ---------- */
  const SKIP = 'button,a,input,textarea,select,svg,script,style,.pop,.gtip,.sr-only,.skip,[aria-hidden="true"]';
  function wireFollow() {
    document.body.classList.toggle('fol-off', S.follow === false);
    const f = $('#follow'); if (f) f.addEventListener('click', () => { S.follow = S.follow === false; save(); f.setAttribute('aria-pressed', S.follow !== false); f.textContent = 'Follow along: ' + (S.follow !== false ? 'on' : 'off'); document.body.classList.toggle('fol-off', S.follow === false); clearHl(); });
    const root = $('main'); if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => (n.nodeValue.trim() && !n.parentElement.closest(SKIP)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => {
      const frag = document.createDocumentFragment();
      n.nodeValue.split(/(\s*\S+\s*)/).filter(Boolean).forEach(part => { if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; } const sp = document.createElement('span'); sp.className = 'hw'; sp.textContent = part; frag.appendChild(sp); });
      if (/flex|grid/.test(getComputedStyle(n.parentElement).display)) { const wrap = document.createElement('span'); wrap.className = 'hwrap'; wrap.appendChild(frag); n.parentNode.replaceChild(wrap, n); }
      else n.parentNode.replaceChild(frag, n);
    });
  }
  let hlOn = [];
  function clearHl() { hlOn.forEach(e => e.classList.remove('hl')); hlOn = []; }
  const blockOf = el => { let p = el.parentElement; while (p && p !== document.body) { const d = getComputedStyle(p).display; if (d !== 'inline' && d !== 'contents') return p; p = p.parentElement; } return document.body; };
  document.addEventListener('mouseover', e => {
    if (S.follow === false) return;
    const w = e.target.closest && e.target.closest('.hw');
    clearHl(); if (!w) return;
    const top = Math.round(w.getBoundingClientRect().top), blk = blockOf(w);
    hlOn = $$('.hw', blk).filter(x => Math.abs(Math.round(x.getBoundingClientRect().top) - top) < 4 && blockOf(x) === blk);
    hlOn.forEach(x => x.classList.add('hl'));
  });
  document.addEventListener('mouseleave', clearHl);
  window.addEventListener('blur', clearHl);

  /* ---------- confidentiality: deterrents against copying ---------- */
  const editable = t => t && t.closest && t.closest('input,textarea,select,[contenteditable="true"]');
  const NOTICE = 'This content is confidential and cannot be copied.';
  ['copy', 'cut'].forEach(ev => document.addEventListener(ev, e => { if (editable(e.target)) return; e.preventDefault(); if (e.clipboardData) e.clipboardData.setData('text/plain', NOTICE); }));
  ['dragstart', 'contextmenu'].forEach(ev => document.addEventListener(ev, e => { if (editable(e.target)) return; e.preventDefault(); }));
  document.addEventListener('selectstart', e => { if (!editable(e.target)) e.preventDefault(); });
  document.addEventListener('keydown', e => {
    if (!(e.ctrlKey || e.metaKey) || editable(e.target)) return;
    if (['c', 'x', 'a', 's', 'p', 'u'].includes(e.key.toLowerCase())) e.preventDefault();
  });
  window.addEventListener('beforeprint', () => { document.body.classList.add('no-print'); });

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, '').split('/');
    const [a, b] = h;
    if (!a) viewHome();
    else if (a === 'map') viewMap();
    else if (a === 'full') viewFull();
    else if (a === 'read') viewRead(b || 'koshy');
    else if (a === 'practice') (b === 'flip' ? viewFlip : b === 'build' ? viewBuild : viewSort)();
    else if (a === 'mastery') viewMastery();
    else viewHome();
    const titles = { '': 'Home', map: 'Concept map explorer', full: 'The concept map, full page', mastery: 'Mastery' };
    let t = titles[a];
    if (a === 'read') { const r = byId(b || 'koshy'); t = 'Reading: ' + r.kicker + ', ' + r.title; }
    if (a === 'practice') t = 'Practice: ' + (b === 'flip' ? 'Flip it' : b === 'build' ? 'Build it' : 'Sort it');
    document.title = (t || 'Home') + ' | Walk the Concept';
    window.scrollTo(0, 0);
    const m = $('#main'); if (m) m.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);
  route();
})();
