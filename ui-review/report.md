# UI review report: Walk the Concept (website/)

**Mode:** full (no git repo, so `changed` could not be computed). **Date:** 2026-10-18.
**App run:** yes, static server on localhost:8765, driven through the built-in browser.
**Screenshots actually viewed:** map at 375 px (before and after the fix), plus home, map, reading, sort, flip, build, mastery, and full-map pages at desktop width while building. I did **not** view a screenshot of every page at every breakpoint.
**Tools available / missing:** `capture.js` and axe-core could not run (Playwright is not installed). **Substituted:** in-browser scripts that measured target sizes, horizontal overflow, labels, headings, titles, and focus on all 8 routes at 1440, 1098, 508, and 375 px; static `rg` checks; computed contrast ratios; keyboard-path and popover-focus tests. Confidence is lower on visual polish at 320, 768, and landscape widths, which were not captured.
**User research / usability testing:** not possible. Users and goals in `inventory.md` are ASSUMED. The walkthrough below is a heuristic, not testing with people.

## Findings

| Sev | Fundamental | Where | Problem | Fix | Status |
|---|---|---|---|---|---|
| 🔴 | 7 Responsive | styles.css `.gbox`, app.js viewMap | At 375 px the map graph is unusable: labels overlap and clip, and the page scrolls sideways (scrollWidth 400) | At 700 px and below, hide the graph and show a 9-item reading list (`.glist`); order list, panel, then filters | fixed, verified |
| 🟠 | 11 A11Y-12/17, 8 INT-9 | app.js route() | Page title never changed on navigation, and focus stayed wherever it was after a route change | Set `document.title` per route; move focus to `<main tabindex=-1>` | fixed, verified (8 routes) |
| 🟠 | 11 A11Y-4 | app.js viewMap | The map page had no `<h1>` | Added a visually hidden `h1` | fixed, verified |
| 🟠 | 11 A11Y-4 | index.html | No skip link | Added "Skip to content" | fixed |
| 🟠 | 14 FORM-1 / A11Y-6 | app.js (say, defend, same, changed, item, text, reading, teach) | 8 fields had only a placeholder or an unassociated label | `aria-label` on each; `<label for>` on the select | fixed, verified (0 unlabeled) |
| 🟠 | 11 A11Y-14 | app.js viewSort | Placing a scenario required dragging or clicking a drop zone; a keyboard user could not place it | Scenarios are `role=button` with `aria-pressed`; each lane gets a "Place selected here" button | fixed, verified (keyboard path ends in a verdict) |
| 🟠 | 10 FB-8 / A11Y-5 | app.js (`#fb`, `#msg`, `#dotcap`, verdict) | Feedback appeared silently to screen readers | `role=status aria-live=polite` on all four | fixed |
| 🟠 | 11 A11Y-3/17 | app.js openPop | Popover took no focus and did not return it; Esc did not restore focus | Focus moves into the popover, returns to the trigger on Esc; after "Got it" focus goes to the next un-unpacked word | fixed, verified |
| 🟠 | 11 A11Y-9 | styles.css | Byline text `#6B655B` on `#D8D0BF` is 3.76:1; default placeholder `#757575` on `#F3EFE6` is 4.02:1 | Byline uses `--ink`; `::placeholder` set to `#5D574D` (6.23:1) | fixed |
| 🟠 | 11 A11Y-10 | styles.css | No reduced-motion handling | `prefers-reduced-motion` block disables transitions and smooth scroll | fixed |
| 🟠 | 11 A11Y-2 | styles.css | No explicit focus style on dark buttons and pills | Global `:focus-visible` ring (3 px), gold variant on dark surfaces | fixed |
| 🟠 | 9 AFF-5 / A11Y-14 | styles.css | Chips, small buttons, nav links, stepper, confidence buttons, mastery links, toggle were under 44 px on touch widths | 44 px minimums under `(pointer:coarse), (max-width:1100px)`; re-measured: 0 small targets on 7 of 8 routes | fixed, verified |
| 🟡 | 9 AFF-5 | `.gkey`, `.gout` | On the desktop graph (701 to 1100 px) the key-word pills are 29 px tall and the numbered dots 32 px (above the WCAG 24 px minimum, below 44) | Left as is: dense spatial graph; the 44 px list covers touch phones | deferred |
| 🟡 | 8 INT-5 | `#gtip` | Hover tooltip is hover-only | The same quote is in the side panel on click or tap, so nothing essential is hidden | deferred |
| 🟡 | 8 INT-8 | openPop | Popover is not a full focus trap | It holds one button; Tab leaves it and closes it on scroll or outside click | deferred |
| 🟡 | 15 States | app.js | No loading, error, or empty states; `localStorage` failure is silent (progress just does not persist) | None needed for a static, offline-capable page; consider a one-line notice | open |
| 🟡 | 16 Content | data.js | `[add range]` placeholders remain in the works cited | Your content to fill in | open |
| 🟡 | 5 Color | fonts | Google Fonts need a connection; fallback is Georgia and system sans | Self-host the fonts if you present offline | open |

## Heuristic walkthrough (not real testing)
Open `index.html` > "Begin the walk" (1 click) > quote with four underlined words > tap each (4 taps plus 4 "Got it") > write a sentence > "Check" > "Next quote." First-time hesitation points: the lock on "Next quote" is explained next to the button; the sentence check can feel opaque, so the failure message names the missing piece. About 16 interactions to finish one reading.

## Open questions for you
1. Who opens this, a professor on a laptop or classmates on phones? That decides whether the 44 px work or the desktop graph is the priority.
2. Should "Add to my map" examples persist only on this browser (current), or be exportable?
3. Do you want a dark mode or print stylesheet beyond the current print rules?

## Scorecard (condensed; fundamentals grouped)
| Page | Visual 1 to 6 | Responsive 7 | Interaction 8 to 10 | Forms and states 14 to 15 | A11y 11 | IA and content 12, 13, 16 | Product 17 to 19, 23, 24 |
|---|---|---|---|---|---|---|---|
| Home | ✅ | ✅ | ✅ | n/a | ✅ | ✅ | ⚠️ assumed users |
| Map explorer | ✅ | ✅ (list under 700 px) | ⚠️ hover tooltip | n/a | ✅ | ✅ | ⚠️ assumed users |
| Full map | ✅ | ✅ | ✅ | n/a | ✅ | ⚠️ placeholders | ⚠️ assumed users |
| Reading | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ assumed users |
| Sort it | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ assumed users |
| Flip it | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ assumed users |
| Build it | ✅ | ✅ | ✅ | ⚠️ no error state | ✅ | ✅ | ⚠️ assumed users |
| Mastery | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ assumed users |

Blockers: 0. Majors: all fixed and verified. Minors: listed above for you to decide.

---

## Addendum: web brutalism restyle (2026-10-18)

Scope: theme override block in `website/styles.css`, new home hero and graphic in `app.js`, lane colors in `data.js`, fonts in `index.html`.
Re-verified in the browser at 1280 px and 375 px on all 8 routes (the app was run; no screenshot tooling beyond the built-in browser).

| Sev | Fundamental | Problem found after the restyle | Fix | Status |
|---|---|---|---|---|
| 🟠 | 7 Responsive / A11Y-8 | Mastery table pushed the page to 653 px wide at 375 px (mono headers) | Smaller header type, tighter cell padding, scrollable card under 700 px | fixed, verified (scrollWidth 375) |
| 🟠 | 5 Color / A11Y-9 | Bright lane colors needed dark text on filled shapes (white on `#FF7A59` is 2.3:1) | Filled nodes, pills, checks, and buttons use `#0B0B0B` text (7.7 to 17.9:1) | fixed |
| 🟡 | 1 Hierarchy | Map node labels overflowed their squares ("WYNTER & MCKITTRICK", "CAPITALISM") | Shorter node label for the last reading, larger center node, smaller node type | fixed, verified (0 overflowing nodes) |

Computed contrast on `#141413`: body `#F4F4F0` 16.7:1, muted `#A9A9A1` 7.8:1, placeholder `#8F8F88` 5.7:1, reproduced 7.2:1, renewed 8.4:1, hidden 11.3:1, natural 8.4:1. Inverted sections (`#0B0B0B` on `#F4F4F0`) are 17.9:1.
Regression checks passed: 0 unlabeled fields, 0 horizontal overflow on 8 routes at 1280 and 375 px, 0 targets under 44 px at 375 px, 0 console errors, and the map, reading, sort, flip, build, and written-explanation flows all work.
New minors (deferred): images are grayscale until hover (informative images keep their alt text and captions); Share Tech Mono labels are 11 to 13 px uppercase with wide tracking, readable but dense on phones; the first row's color marker wraps above its label in the narrow mastery table.

---

## Addendum: follow-along highlight, uncropped images, copy deterrents (2026-10-18)

Scope: `app.js` (wireFollow, confidentiality handlers, rewritten copy, removed export buttons), `styles.css` (highlight, image placement, layout refinements), `index.html` (robots meta). Run in the built-in browser at 1280 px and 375 px.

| Sev | Fundamental | Problem | Fix | Status |
|---|---|---|---|---|
| 🟠 | 7 Responsive | Wrapping every word in a span turned text in flex rows (step headings, option labels) into separate flex items, so Build it (794 px) and Flip it (427 px) overflowed at 375 px | Words inside a flex or grid parent now sit in one `.hwrap` block | fixed, verified (8 routes, scrollWidth 375) |
| 🟠 | 11 A11Y / 8 INT | The new "Follow along" control needed a state, a label, and a 44 px target | `button` with `aria-pressed`, text "Follow along: on/off", min-height 44 px; the setting persists | fixed, verified |
| 🟡 | 11 A11Y-4 | `user-select:none` and blocked copy stop users from copying text on purpose; screen readers and keyboard users are unaffected, but assistive tools that rely on selection may be limited | Inputs, textareas, and selects stay selectable and pastable | accepted (confidentiality request) |
| 🟡 | 9 AFF | Images are grayscale until hover | Unchanged from the earlier restyle; now shown whole (`object-fit:contain`, natural ratio) | accepted |

Verified: the highlight turns a whole visual line gray (`#A3A39E`) with black text (about 7.7:1) and clears on mouse-out; copy, cut, right-click, drag, and Ctrl/Cmd C, X, A, S, P, U are blocked outside form fields; printing is blocked; the Export buttons are gone; paste into the writing fields still works; images keep their own aspect ratios (1.00, 1.78, 1.41); 0 console errors; all interaction flows pass.
Limits to tell the user: these are client-side deterrents only. Screenshots, browser developer tools, and view-source cannot be stopped by a static site. Real confidentiality needs a server-side login.
