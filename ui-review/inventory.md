# UI inventory: Walk the Concept (website/)

Mode: **full** (the folder is not a git repo, so `changed` could not be computed; every file under `website/` was treated as changed).
App run: yes, local static server on port 8765. Single-page app, hash routes, source in `website/app.js`, `website/data.js`, `website/styles.css`.

Shared on every route: skip link, nav (logo, Map, Readings, Practice, Mastery), progress bar, footer.

## # (home): `app.js` viewHome
User & goal: a classmate or the professor opening the guide; wants to understand what it is and start. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Begin the walk | link/button | app.js viewHome | yes |
| 2 | Open the map | link/button | app.js viewHome | yes |
| 3 | Read the full map | link/button | app.js viewHome | yes |
| 4 | Nine reading cards | card-as-link | app.js viewHome | yes |
| 5 | Mini map art | decorative svg | app.js homeArt | yes |

## #/map: viewMap
User & goal: see how the readings, key words, and outside topics connect; open one. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Layer toggles (Readings, Key words, Beyond the class) | checkbox x3 | viewMap | yes |
| 2 | Find a key word | search input | viewMap | yes |
| 3 | Read the full map | link | viewMap | yes |
| 4 | Reading nodes (9) | button | viewMap `.gnode` | yes |
| 5 | Key-word pills (9) | button | viewMap `.gkey` | yes |
| 6 | Beyond-the-class dots (1 to 3, selected node) | button | viewMap `.gout` | yes |
| 7 | Hover tooltip | hover popup | viewMap `#gtip` | yes |
| 8 | Reading list (small screens) | button x9 | viewMap `.glitem` | yes (added in this review) |
| 9 | Panel key-word chips | button (opens definition) | viewMap `[data-chip]` | yes |
| 10 | Open reading / Test yourself | links | viewMap panel | yes |
| 11 | Definition popover (Esc, Got it) | popover | openPop | yes |

## #/full: viewFull
User & goal: read the whole concept map and its written explanation; export it. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Jump to chips (10) | button | viewFull `[data-jump]` | yes |
| 2 | Key-word chips on every card | button | viewFull `[data-chip]` | yes |
| 3 | Underlined terms in the written explanation (24) | inline button | termify | yes |
| 4 | Export this map (PDF) | button (print) | viewFull | yes |
| 5 | Back to the explorer | link | viewFull | yes |
| 6 | Images x3 with captions | img | exHTML | yes |

## #/read/<id>: viewRead
User & goal: work through one reading's two quotes and prove they understood. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Stepper links (9) | link | viewRead | yes |
| 2 | Tappable words in the quote | inline button | wrapQuote | yes |
| 3 | Definition popover with Got it | dialog | openPop | yes |
| 4 | Say it back textarea | textarea | viewRead `#say` | yes |
| 5 | Check my sentence | button | viewRead `#chk` | yes |
| 6 | Next quote / Next reading (locked state) | button | viewRead `#next` | yes |
| 7 | Key-word rows (definitions) | button | viewRead `[data-kw]` | yes |
| 8 | Talks to links | link | viewRead | yes |
| 9 | Bring your own example | link | viewRead | yes |

## #/practice/sort: viewSort
User & goal: apply the three lanes to scenarios and defend choices. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Practice tabs (Sort, Flip, Build) | link x3 | tabs() | yes |
| 2 | Scenario cards (5) | draggable button | scenHTML | yes |
| 3 | Lane drop zones (3) | drop target | viewSort | yes |
| 4 | Place selected here (3) | button | viewSort `[data-place]` | yes (added) |
| 5 | Move back | button | scenHTML `[data-back]` | yes |
| 6 | Defend textarea | textarea | viewSort `#defend` | yes |
| 7 | Confidence 1 to 5 | button x5 | viewSort `[data-conf]` | yes |
| 8 | See your calibration | link | viewSort | yes |

## #/practice/flip: viewFlip
User & goal: see how the same rule produces different outcomes. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Prediction radios (3) | radio | viewFlip | yes |
| 2 | Toggle: colorblind law / racialized administration | button x2 | viewFlip `[data-mode]` | yes |
| 3 | Dot grid and caption | status | viewFlip | yes |
| 4 | Same / Changed textareas | textarea x2 | viewFlip | yes |

## #/practice/build: viewBuild
User & goal: build one example of their own that passes a reviewer-style checklist. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Kind chips (5) | button | viewBuild `[data-kind]` | yes |
| 2 | Title input | input | viewBuild `#item` | yes |
| 3 | Lane chips (3) | button | viewBuild `[data-lane]` | yes |
| 4 | Anchor reading select | select | viewBuild `#reading` | yes |
| 5 | Mechanism textarea | textarea | viewBuild `#text` | yes |
| 6 | Self-check list | live status | viewBuild `#ck` | yes |
| 7 | Add to my map / Export | buttons | viewBuild | yes |
| 8 | Remove (saved examples) | button | viewBuild `[data-del]` | yes |

## #/mastery: viewMastery
User & goal: see what is done, practice explaining it back, find the next step. (ASSUMED)
| # | Element | Type | Source | Reviewed |
|---|---|---|---|---|
| 1 | Progress table links (9) | link | viewMastery | yes |
| 2 | Teach it back textarea | textarea | viewMastery `#teach` | yes |
| 3 | Rubric chips | status | viewMastery | yes |
| 4 | Resume | link | viewMastery | yes |
