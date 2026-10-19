/* Content for "Walk the Concept". Every quotation is from the course readings and carries a page number.
   Glosses are plain-language paraphrases of how each reading uses the term. */

const LANES = {
  concept:    { name: 'The concept itself', color: '#F4F4F0' },
  reproduced: { name: 'Reproduced', color: '#FF7A59', q: 'How does dispossession survive across generations?' },
  renewed:    { name: 'Renewed', color: '#6DB3FF', q: 'What happens when an older form becomes unacceptable?' },
  hidden:     { name: 'Hidden', color: '#4FE3A5', q: 'How is extraction made to look like nothing?' },
  natural:    { name: 'Why it feels natural', color: '#C99BFF', q: 'Which stories hold the mechanism in place?' }
};

/* words: terms inside the quote that the visitor can tap to unpack (must appear in the quote text) */
const READINGS = [
  {
    id: 'koshy', short: 'Koshy et al.', lane: 'concept', angle: -90,
    kicker: 'Koshy et al., Introduction',
    title: 'Racial capitalism',
    src: 'Susan Koshy, Lisa Marie Cacho, Jodi A. Byrd, and Brian Jordan Jefferson, Introduction, Colonial Racial Capitalism (2022)',
    keyword: 'primitive accumulation',
    explain: "Racial capitalism, as the editors use it, means an economy that needs racial difference to decide whose land, labor, and wealth can be taken. Race is not a prejudice laid over the top. The introduction also moves the argument toward land, treating dispossession as something that keeps happening and not just the opening scene.",
    quotes: [
      { t: '“did not overthrow the fixed social hierarchies of feudalism but instead extended and incorporated these unequal social and/or colonial relations”', cite: 'Koshy et al. 1', note: 'Robinson’s argument, as the editors summarize it.',
        words: [['feudalism', 'The European order of fixed ranks that capitalism is usually said to have replaced; Robinson\u2019s point is that the order did not disappear but fed into capitalism.'], ['extended and incorporated', 'Capitalism did not end these hierarchies; it took them in and put them to work, which is why racial and colonial ranking belongs to capitalism itself and not to its margins.']] },
      { t: '“In addition to rethinking primitive accumulation as endemic to capitalist development, we need to rethink the analytic of ‘dispossession’ so that we can reframe and recenter land within analyses of colonial racial capitalism”', cite: 'Koshy et al. 4',
        words: [['primitive accumulation', 'Marx\u2019s name for the violent taking of land and labor that starts capitalism; the editors argue it continues, so dispossession is a standing condition and not a prehistory.'], ['endemic', 'Built in and present throughout, not a one-time event.'], ['dispossession', 'The taking of land, resources, or livelihood from people; here the editors recenter land within the analysis of racial capitalism.']] }
    ],
    chips: ['primitive accumulation', 'dispossession', 'racial capitalism'],
    links: ['goldstein', 'harris', 'day'],
    outside: [['Land Back and Indigenous land claims', 'Asks how dispossession of land continues and how it might be reversed. A topic outside the readings.']],
    examples: []
  },
  {
    id: 'goldstein', short: 'Goldstein', lane: 'reproduced', angle: -50,
    kicker: 'Goldstein, ch. 2',
    title: 'Social reproduction',
    src: 'Alyosha Goldstein, “In the Constant Flux of Its Incessant Renewal,” Colonial Racial Capitalism (2022)',
    keyword: 'social reproduction',
    explain: "Social reproduction is the unglamorous part of an economy: who raises children, who inherits, who owns. Goldstein shows a state shaping all three without open conquest. Ownership is handed over in a form that expects to lose itself (76), so dispossession shows up as ordinary family history. Filius nullius, nobody’s child, sits beside terra nullius, nobody’s land (67).",
    quotes: [
      { t: '“What is reproduced is at once an individuated possessory relation to private property and the deferral of possession itself”', cite: 'Goldstein 76',
        words: [['individuated possessory relation', 'Ownership held as a private right by one person at a time; it makes land something that can be sold, mortgaged, or lost.'], ['deferral of possession', 'The owning keeps being postponed even as the right to own is granted; the promise of property arrives with its own delay.']] },
      { t: '“colonialism and the legacies of racial slavery remain actively constitutive for capitalist accumulation”', cite: 'Goldstein 67',
        words: [['constitutive', 'Part of what makes a thing what it is, not a force acting on it from outside; Goldstein says slavery and colonialism make up capitalist accumulation.'], ['accumulation', 'The building up of wealth and capital; the question is whose losses make the building possible.']] }
    ],
    chips: ['social reproduction', 'heirs’ property', 'allotment (1887)', 'filius nullius', 'terra nullius', 'settler colonialism', 'deferral of possession'],
    links: ['harris', 'koshy'],
    outside: [['Inheritance, family law, and today’s wealth gaps', 'Asks who passes wealth on and who cannot. A topic outside the readings.']],
    examples: [
      { title: 'Heirs’ property after Reconstruction', quote: ['“a real estate speculator … can purchase a single heir’s share”', 'Goldstein 75'],
        text: "When land passes to descendants as undivided shares, one buyer of one share can ask a court to partition the whole parcel, and partition of heirs’ property has fallen hardest on African Americans since Reconstruction (73). Each heir owns a fraction of everything, so one sale can force the sale of all. The loss is written into inheritance, which is why it reads as neutral law." },
      { title: 'Tracy Chapman, “Fast Car” (1988)', echo: true, img: 'images/Tracy_Chapman_album_cover_1988.jpg', imgAlt: 'Album cover of Tracy Chapman by Tracy Chapman', cap: 'Tracy Chapman, Tracy Chapman (Elektra, 1988), album cover.',
        text: "The narrator leaves school to look after her father, works a supermarket checkout, and plans to leave town. Through Goldstein, the song tracks who absorbs the cost of keeping a household going when the wage does not cover it. It illustrates the point; it proves nothing." }
    ]
  },
  {
    id: 'harris', short: 'Harris', lane: 'renewed', angle: -10,
    kicker: 'Harris, ch. 3',
    title: 'Racial alchemy of debt',
    src: 'Cheryl I. Harris, “The Racial Alchemy of Debt,” Colonial Racial Capitalism (2022)',
    keyword: 'racial alchemy of debt',
    explain: "In Harris, racial domination goes in one end and financial obligation comes out the other. After the Civil War the Black Codes gave way to vagrancy and other public-order laws that never mention race, run through “formally colorblind laws and a ruthlessly targeted system of racialized administration” (105). Debt then makes a structural condition look like personal conduct.",
    quotes: [
      { t: '“Following the Civil War, debt became the principal mechanism through which a system of labor extraction was constructed to replace chattel slavery”', cite: 'Harris 93',
        words: [['debt', 'An obligation to repay; Harris treats it as a social relation that organizes who can be made to work, not only as a loan.'], ['principal mechanism', 'The main way the thing was done.'], ['labor extraction', 'Taking value from people’s work.'], ['chattel slavery', 'A system in which people are legally owned as movable property. Debt took over the work this system did, so the extraction continued under a different legal form.']] },
      { t: '“the incorporation or predatory inclusion of Black subjects into extractive credit markets”', cite: 'Harris 96',
        words: [['predatory inclusion', 'Letting a group in on worse terms and profiting from the admission; access to the market becomes a way of extracting from those once excluded.'], ['extractive credit', 'Credit whose terms take more value from the borrower than they give.']] }
    ],
    chips: ['racial alchemy', 'propertizing', 'predatory inclusion', 'debt peonage', 'convict leasing', 'colorblind law', 'risk'],
    links: ['goldstein', 'day', 'wynter03'],
    outside: [['Fines and fees', 'Harris’s own case is Ferguson (93–94): debt tied to policing.'], ['Risk assessment in lending', 'Harris: race enters lending through “risk assessment,” without being named (97).'], ['Other kinds of debt', 'Ask who gets productive credit and who gets predatory credit. A topic outside the readings.']],
    examples: [
      { title: 'Flint, Michigan', quote: ['“the city lost safe water service as it accrued more debt” (98), a debt “that became literally toxic at the level of everyday life”', 'Harris 98'],
        text: "Harris moves from the indebted person to the indebted place: Black geographies are treated as insolvent wastelands, and so become sites for austerity and improvement (98). Flint is one case, so it should be read as an argument about structure and not a general law." },
      { title: 'The Princess and the Frog (2009)', img: 'images/Tiana_Fenner_Brothers_Staircase.jpg', imgAlt: 'Tiana speaks with the two Fenner brothers on a staircase', cap: 'Still: The Princess and the Frog (Walt Disney Animation Studios, 2009).',
        text: "Tiana works two jobs in 1920s New Orleans to buy an old sugar mill. The realtors tell her she has been outbid and doubt that a woman of her background can run a business, though they praise her cooking. Harris would call that exclusion phrased as risk. The film never names race, so it echoes her argument without demonstrating it." }
    ],
    extraTerm: { title: 'Predatory inclusion', quote: ['“the incorporation or predatory inclusion of Black subjects into extractive credit markets”', 'Harris 96'],
      text: 'Admission to the market is not the remedy. A group once shut out of productive credit is let in on worse terms, and profit is drawn from the admission itself.' }
  },
  {
    id: 'day', short: 'Day', lane: 'hidden', angle: 30,
    kicker: 'Day, ch. 8',
    title: 'Wastelanding and antipolitics',
    src: 'Iyko Day, “Nuclear Antipolitics and the Queer Art of Logistical Failure,” Colonial Racial Capitalism (2022)',
    keyword: 'wastelanding',
    explain: "Wastelanding marks a place and its people as empty, remote, and disposable, so mining and contamination can go on without anyone asking. Antipolitics hands the questions to engineers. One decides who can be exposed; the other keeps the question from being asked.",
    quotes: [
      { t: '“the ‘wasteland’ is a racial and spatial signifier that renders an environment and the bodies that inhabit it pollutable”', cite: 'Voyles qtd. in Day 133',
        words: [['signifier', 'A sign that carries a meaning.'], ['pollutable', 'Able to be contaminated without that counting as a harm.']] },
      { t: '“depoliticizing everything it touches, everywhere whisking political realities out of sight”', cite: 'Ferguson qtd. in Day 138', note: 'Said of the nuclear industry as an “antipolitics machine.”',
        words: [['depoliticizing', 'Making a political question look technical or neutral.'], ['whisking political realities out of sight', 'Moving the questions of whose land and whose labor out of public view.']] }
    ],
    chips: ['wastelanding', 'antipolitics', 'nonplace', 'nuclear modernity', 'logistics'],
    links: ['lowe3', 'harris'],
    outside: [['Polluted neighborhoods and who lives near them', 'Asks who bears environmental harm today. A topic outside the readings.']],
    examples: [
      { title: 'Uranium and the “nonplace”', quote: ['“Shinkolobwe is now considered an official nonplace”', 'Zoellner qtd. in Day 145'],
        text: "The Shinkolobwe mine in the Congo, one of the world’s richest sources of uranium, has been erased from the map of nuclear modernity (145). Nuclear history is remembered at its visible center, Hiroshima; the colonial edge drops out." }
    ]
  },
  {
    id: 'lowe3', short: 'Lowe 3', lane: 'hidden', angle: 70,
    kicker: 'Lowe, ch. 3',
    title: 'Commodity fetishism',
    src: 'Lisa Lowe, “A Fetishism of Colonial Commodities,” The Intimacies of Four Continents (2015)',
    keyword: 'commodity fetishism',
    explain: "Lowe takes Marx’s idea that a commodity hides the labor behind it and points at the labor Marx left out: colonial labor. A price shows what something costs and says nothing about who made it or where. Wastelanding works the same way on land.",
    quotes: [
      { t: '“abstracted value occults the histories of labor, material, and geography”', cite: 'Lowe 85',
        words: [['abstracted value', 'A price or worth pulled away from the conditions that produced it.'], ['occults', 'Hides; the old sense of occult is concealed, kept from view.']] },
      { t: '“simultaneously admitted and obscured the difference of colonial labor”', cite: 'Lowe 83', note: 'About Marx’s formulation of the fetishism of commodities.',
        words: [['admitted and obscured', 'Marx let colonial labor into his account and hid it at the same time.'], ['colonial labor', 'Work done by colonized and enslaved people that supplied the commodities.']] }
    ],
    chips: ['commodity fetishism', 'colonial labor', 'abstracted value'],
    links: ['day', 'lowe1'],
    outside: [['Supply chains of everyday products', 'Asks who made a phone, shirt, or sugar and where. A topic outside the readings.']],
    examples: [
      { title: 'Kara Walker, A Subtlety (2014)', echo: true, img: 'images/A_Subtlety_Kara_Walker_2014_sideview.jpg', imgAlt: 'A giant white sugar sphinx inside the Domino Sugar Refinery', cap: 'Photo: Brooks patty, CC BY-SA 4.0.',
        text: "A sphinx-like woman with African features, coated in sugar and roughly 75 feet long, filled the Domino Sugar Refinery in Brooklyn before its demolition. Sugar is a colonial commodity, and Walker puts the labor behind it in the room as a body. Tiana’s mill in the film is also a sugar mill." }
    ]
  },
  {
    id: 'lowe1', short: 'Lowe 1', lane: 'natural', angle: 110,
    kicker: 'Lowe, ch. 1',
    title: '“Free” labor and the intimacies of four continents',
    src: 'Lisa Lowe, “Intimacies of Four Continents,” The Intimacies of Four Continents (2015)',
    keyword: 'free labor',
    explain: "Liberty in this chapter mostly means free trade, and free trade made room for colonial rule instead of ending it. The bourgeois home looks private and calm; Lowe traces its wealth to settler appropriation and to enslaved and indentured labor, and its comforts to colonized workers. Free labor belongs to that system. Her evidence is the British empire, so the claim should not be stretched to every liberal tradition.",
    quotes: [
      { t: '“‘Liberty’ did not contradict colonial rule but rather accommodated both colonialism as territorial rule, and colonialism as the expansion of imperial trades in Asia”', cite: 'Lowe 15',
        words: [['Liberty', 'Here, the doctrine of free trade and free government, not freedom in general.'], ['accommodated', 'Made room for, rather than opposed.']] },
      { t: '“settler colonial appropriation with enslaved and indentured labor founded the formative wealth of the European bourgeoisie”', cite: 'Lowe 30',
        words: [['appropriation', 'Taking land or labor for one’s own use.'], ['bourgeoisie', 'The property-owning middle class whose wealth, Lowe argues, rested on settler and enslaved labor.']] }
    ],
    chips: ['free labor', 'free trade', 'bourgeois intimacy', 'colonial commodities'],
    links: ['lowe3', 'lowe5', 'wynter03'],
    outside: [['Gig work and the language of freedom', 'Asks what “free” means when work is unprotected. A topic outside the readings.']],
    examples: []
  },
  {
    id: 'lowe5', short: 'Lowe 5', lane: 'natural', angle: 150,
    kicker: 'Lowe, ch. 5',
    title: 'Past conditional temporality',
    src: 'Lisa Lowe, “Freedoms Yet to Come,” The Intimacies of Four Continents (2015)',
    keyword: 'past conditional temporality',
    explain: "Lowe argues that inherited categories leave certain connections unseen; Chinese emigrant labor, for example, drops out of later histories of Britain, the United States, and China. Her alternative, past conditional temporality, reads the past as a set of possibilities that could have gone otherwise. If the lanes on this map were built by laws and choices, they were not required, and might be rebuilt. Lowe does not say how.",
    quotes: [
      { t: '“the tyranny of world history, whose categories and frameworks have not permitted understanding of the connections among various peoples, differentially affected by empire”', cite: 'Lowe 174',
        words: [['tyranny of world history', 'The way inherited categories decide what counts as history and leave connections unseen.'], ['differentially affected', 'Touched by the same system in different ways.']] },
      { t: '“a configuration of multiple contingent possibilities, all present, yet none inevitable”', cite: 'Lowe 175',
        words: [['contingent', 'Dependent on conditions that could have gone otherwise.'], ['inevitable', 'Certain to happen no matter what; Lowe treats no outcome as inevitable.']] }
    ],
    chips: ['past conditional temporality', 'absenting', 'history of the present', 'freedom'],
    links: ['lowe1', 'wm'],
    outside: [['Reparations and imagining other futures', 'Asks how a different past could change what is possible now. A topic outside the readings.']],
    examples: []
  },
  {
    id: 'wynter03', short: 'Wynter 2003', lane: 'natural', angle: 190,
    kicker: 'Wynter, 2003',
    title: 'Man2 and overrepresentation',
    src: 'Sylvia Wynter, “Unsettling the Coloniality of Being/Power/Truth/Freedom” (2003)',
    keyword: 'Man2',
    explain: "Wynter says Man, the figure at the center of modern thought, is an ethnoclass: one class and one region passing itself off as everyone. Man2 is the jobholder, and the people left outside him are the jobless, the homeless, the poor. This helps with Harris. When work and credit decide who counts, owing money reads as personal failure.",
    quotes: [
      { t: '“overrepresentation of its well-being as that of the human species as a whole, rather than as it is veridically: that of the Western and westernized (or conversely) global middle classes”', cite: 'Wynter 313',
        words: [['overrepresentation', 'One group’s way of being human passing for the whole species.'], ['veridically', 'Truthfully, in actual fact.'], ['global middle classes', 'The Western and westernized middle classes Wynter says Man really describes.']] },
      { t: 'Man2 is “defined as a jobholding Breadwinner,” and its Human Others are “peopled by a new category, one now comprised of the jobless, the homeless, the Poor”', cite: 'Wynter 321',
        words: [['Man2', 'Wynter’s name for the modern, economic model of the human.'], ['Breadwinner', 'The person defined by holding a job and earning.'], ['Human Others', 'The people the model leaves outside it.']] }
    ],
    chips: ['Man2', 'homo oeconomicus', 'overrepresentation', 'dysselected'],
    links: ['harris', 'wm', 'lowe1'],
    outside: [['Credit scores and who counts as creditworthy', 'Asks how a number can stand for a person’s worth. A topic outside the readings.']],
    examples: []
  },
  {
    id: 'wm', short: 'Wynter & McKittrick', lane: 'natural', angle: 230,
    kicker: 'Wynter and McKittrick',
    title: 'Man2 as a model, and the Third Event',
    src: 'Sylvia Wynter and Katherine McKittrick, “Unparalleled Catastrophe for Our Species?” (2015)',
    keyword: 'Third Event',
    explain: "Mimetic means copied. After the anticolonial and civil rights struggles, Wynter says, the bourgeois model of the human was the only one on offer, so the world copied it, and she blames global warming on that copying and not on humans in general. Homo narrans, the storytelling human, means the model is a story and can be retold. The Third Event, her claim that humans began as a storytelling species, rests on her own reading of Blombos Cave (66–67), so it is an argument and not a settled finding.",
    quotes: [
      { t: '“the Western and mimetically Westernized middle classes,” who “fell into the trap of modeling ourselves on the mimetic model of the Western bourgeoisie’s liberal monohumanist Man2”', cite: 'Wynter and McKittrick 22',
        words: [['mimetically', 'By copying.'], ['liberal monohumanist Man2', 'A single model of the human drawn from the liberal bourgeoisie.']] },
      { t: '“In my own terms, the human is homo narrans”', cite: 'Wynter and McKittrick 25',
        words: [['homo narrans', 'The storytelling human: a being made partly by the stories it tells about itself.']] }
    ],
    chips: ['homo narrans', 'Third Event', 'development', 'mimetic Man2', 'science of the Word'],
    links: ['wynter03', 'lowe5'],
    outside: [['Who is responsible for climate change', 'Asks whether blame belongs to humans in general or to a particular way of living. A topic outside the readings.']],
    examples: []
  }
];

const EDGES = [['goldstein','harris'],['harris','day'],['lowe3','day'],['wynter03','harris'],['lowe1','lowe3'],['lowe5','wm'],['koshy','goldstein'],['koshy','harris']];

const WORKS_CITED = [
  'Chapman, Tracy. “Fast Car.” Tracy Chapman, Elektra, 1988.',
  'Day, Iyko. “Nuclear Antipolitics and the Queer Art of Logistical Failure.” Colonial Racial Capitalism, edited by Susan Koshy et al., Duke UP, 2022, pp. 131\u201357.',
  'Goldstein, Alyosha. “‘In the Constant Flux of Its Incessant Renewal’: The Social Reproduction of Racial Capitalism and Settler Colonial Entitlement.” Colonial Racial Capitalism, edited by Susan Koshy et al., Duke UP, 2022, pp. 60\u201387.',
  'Harris, Cheryl I. “The Racial Alchemy of Debt: Dispossession and Accumulation in Afterlives of Slavery.” Colonial Racial Capitalism, edited by Susan Koshy et al., Duke UP, 2022, pp. 88\u2013128.',
  'Koshy, Susan, et al. Introduction. Colonial Racial Capitalism, edited by Koshy et al., Duke UP, 2022, pp. 1–14.',
  'Lowe, Lisa. The Intimacies of Four Continents. Duke UP, 2015.',
  'The Princess and the Frog. Directed by Ron Clements and John Musker, Walt Disney Animation Studios, 2009.',
  'Walker, Kara. A Subtlety, or the Marvelous Sugar Baby. Creative Time, Domino Sugar Refinery, Brooklyn, 2014.',
  'Wynter, Sylvia. “Unsettling the Coloniality of Being/Power/Truth/Freedom: Towards the Human, After Man, Its Overrepresentation—An Argument.” CR: The New Centennial Review, vol. 3, no. 3, 2003, pp. 257\u2013337.',
  'Wynter, Sylvia, and Katherine McKittrick. “Unparalleled Catastrophe for Our Species? Or, to Give Humanness a Different Future: Conversations.” Sylvia Wynter: On Being Human as Praxis, edited by Katherine McKittrick, Duke UP, 2015, pp. 9\u201389.'
];

/* Sort it: each scenario names its reading, the lane the reading supports, and lanes that are defensible */
const SCENARIOS = [
  { id: 's-tiana', reading: 'harris', source: 'The Princess and the Frog, 2009', text: 'Tiana is told she has been outbid, and the realtors doubt that a woman of her background can run a business.', best: 'renewed', also: ['reproduced'], img: 'images/Tiana_Fenner_Brothers_Staircase_alt.jpg',
    why: 'The scene fits Harris: a refusal that sounds like a market judgment about risk and means, with the reason about who she is left unsaid.', quote: ['“constructed as not ‘creditworthy’”', 'Harris 96'], alt: 'It could also be Reproduced: her father’s dream and her savings are about who gets to own across generations (Goldstein 76).' },
  { id: 's-flint', reading: 'harris', source: 'Harris, p. 98', text: 'A city is called insolvent, takes on more debt, and loses safe water.', best: 'renewed', also: [],
    why: 'Harris moves from the indebted person to the indebted place: the form of extraction changes, and debt carries it.', quote: ['“a debt that became literally toxic at the level of everyday life”', 'Harris 98'] },
  { id: 's-heirs', reading: 'goldstein', source: 'Goldstein, p. 75', text: 'Heirs each hold a share of one parcel; a speculator buys a single share and forces the whole parcel to be sold.', best: 'reproduced', also: ['renewed'],
    why: 'Goldstein reads this as social reproduction: the loss is built into the form of inheritance and repeats across generations.', quote: ['“the deferral of possession itself”', 'Goldstein 76'], alt: 'It could also be Renewed: the form of dispossession changed from allotment to partition (Goldstein 73).' },
  { id: 's-day', reading: 'day', source: 'Day, p. 145', text: "A mine that supplied uranium is now treated as a nonplace on the map of nuclear history.", best: 'hidden', also: [],
    why: 'Day’s wastelanding and antipolitics: the place and its labor disappear from the story, which is how the extraction stays unquestioned.', quote: ['“Shinkolobwe is now considered an official nonplace”', 'Zoellner qtd. in Day 145'] },
  { id: 's-walker', reading: 'lowe3', source: 'Lowe, p. 85 · Kara Walker, 2014', text: 'A sphinx coated in sugar fills a sugar refinery just before its demolition.', best: 'hidden', also: [], img: 'images/A_Subtlety_Kara_Walker_2014_sideview.jpg',
    why: 'Commodity fetishism hides the labor behind a product. Walker puts that labor in the room as a body.', quote: ['“abstracted value occults the histories of labor, material, and geography”', 'Lowe 85'] }
];

/* Words a self-check looks for */
const KEYTERMS = [].concat(...READINGS.map(r => r.chips)).concat(['social reproduction','wastelanding','antipolitics','commodity fetishism','racial alchemy of debt','predatory inclusion','overrepresentation','free labor','racial capitalism','dispossession','primitive accumulation']);

/* The written explanation that accompanies the map . */
const ESSAY = [
  "Robinson comes first, because the editors start with him. As Koshy et al. summarize it, he argues that capitalism “did not overthrow the fixed social hierarchies of feudalism but instead extended and incorporated these unequal social and/or colonial relations” (Koshy et al., Colonial Racial Capitalism, 1). Read that slowly and racism stops being something added to an economy that a fairer wage might sand off. It is in the material. The editors then pull the idea toward land. Primitive accumulation, the violent taking Marx put at the start of his story, never finished, and dispossession becomes the thing to watch (4). The lanes on this map are my own filing system, not theirs: reproduced, renewed, hidden. They are a convenience, and a couple of the readings fit more than one.",
  "Goldstein’s name for the first lane is social reproduction, and the question behind it sounds small: who raises children, who inherits, who ends up owning anything? Governments answer it all the time through adoption and foster care, inheritance law, and property records, and none of it looks like conquest. Filius nullius, nobody’s child, sits beside terra nullius, nobody’s land (Goldstein, Colonial Racial Capitalism, 67), which, in her account, helped justify placing Native children with non-Native families. What gets reproduced is “an individuated possessory relation to private property and the deferral of possession itself” (76). Ownership arrives with its own loss built in. Heirs’ property is the clearest case in the chapter. Every heir holds a fraction of the whole parcel, so a speculator can buy one heir’s share and force the entire parcel to sale (75). Nobody has to be thrown off the land; the paperwork does it. Goldstein adds that these family processes carry heteronormative and racial dispositions into their logic (76), so the household that inherits is already a particular kind of household. Tracy Chapman’s “Fast Car” is nowhere in the chapter. It is here because the narrator quits school to look after her father and the cost of keeping a home going lands on one person; a song can show that and cannot prove it.",
  "Harris starts from the end of slavery. After the Civil War, she argues, debt became the main way a system of forced labor got rebuilt (Harris, Colonial Racial Capitalism, 93). Her phrase for the result is the racial alchemy of debt: racial domination goes in, financial obligation comes out. The Black Codes said it out loud and were pushed back. What replaced them were vagrancy and other public-order laws that never mention race and still ran on “formally colorblind laws and a ruthlessly targeted system of racialized administration” (105). What is a colorblind law supposed to be blind to? Debt did the same job from the other side, because a person who owes money looks like a person who made choices. Predatory inclusion is her name for the cruelest version, being let into credit on worse terms than anyone else (96). Flint moves furthest, since the debt belongs to a city. The city lost safe water as it took on more debt (98). It is one case, though, and it should not be stretched. The sugar mill in The Princess and the Frog is a looser fit. Tiana saves every dollar, the realtors worry about a woman of her background, and the refusal comes out sounding like caution about risk. The film never says race, so it can only echo Harris.",
  "Day’s uranium story happens mostly somewhere else. Voyles, quoted by Day, calls a wasteland a racial and spatial label that makes a place and the people in it pollutable (Voyles qtd. in Day, Colonial Racial Capitalism, 133). The Shinkolobwe mine in the Congo, one of the richest sources of uranium, is now treated as a nonplace (Zoellner qtd. in Day 145), missing from the story most people tell about Hiroshima. Antipolitics is what follows: the questions go to engineers, and the industry strips politics from everything it handles (Ferguson qtd. in Day 138). Lowe calls the same move commodity fetishism, in a different material. “Abstracted value occults the histories of labor, material, and geography” (Lowe, The Intimacies of Four Continents, 85). A price has no fingerprints. Kara Walker’s sugar sphinx fills a refinery with the fingerprints, which is why it sits beside Lowe and not beside the song or the film. Day ends on Takahiro Iwasaki, who builds tiny power lines and cranes out of hair, towels, and toothbrushes. She reads them as “a queer human temporality that resists absorption into the abstract temporality of the commodity form” (152). That sentence is dense, but the materials are easy to picture.",
  "The remaining readings explain why any of this passes as normal. Lowe’s first chapter says liberty did not fight colonial rule; it made room for it (15), and the comforts of the bourgeois home were paid for by settler appropriation and by enslaved and indentured labor (30). Free labor sits inside the system it seems to oppose. Wynter gives the person that system was built around a name: Man, an ethnoclass mode of being human, whose well-being gets passed off as the species’ well-being (Wynter, “Unsettling the Coloniality of Being,” 313). By Man2 he is a jobholder, and everyone outside the job is the jobless, the homeless, the poor (321). That helps with Harris: if having work and credit is what marks a person as fully human, owing money reads as personal failure. In the later conversation, Wynter says the world copied this model, mimetically (Wynter and McKittrick, “Unparalleled Catastrophe,” 22), and because people are homo narrans, a storytelling species (25), the model is a story and stories get retold. Lowe’s last chapter bets on the same thing, under the name past conditional temporality. The past, she writes, is “a configuration of multiple contingent possibilities, all present, yet none inevitable” (175).",
  "The readings lean on the United States, Canada, and the British empire, and Flint and the sugar mill are single cases, so the pattern here is thin. Lowe never says how a closed past gets reopened, and the map does not either. Every example involves land or a loan. What happens to the argument with neither is the part these readings leave open."
];
