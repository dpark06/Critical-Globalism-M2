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
    explain: 'Racial capitalism is an economy in which accumulation depends on racial difference to decide whose land, labor, and wealth may be taken. The problem of inequality sits in the relation between race and capital, not in either alone. The editors push the claim to land: dispossession is treated as a continuing relation and not only as capitalism’s origin.',
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
    explain: "Social reproduction names how families and communities sustain themselves over time: who raises children, who inherits, who owns. Goldstein’s claim is narrower than the charge that property law is unfair: ownership is granted in a form that presumes its own loss (76), so dispossession arrives as ordinary family history rather than a state act. Filius nullius, nobody’s child, extends terra nullius, nobody’s land, from soil to kinship (67).",
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
        text: 'When land passes to descendants as undivided shares, one buyer of one share can demand that the whole parcel be partitioned, and the partition of heirs’ property has disproportionately affected African Americans since Reconstruction (73). The mechanism is that each heir owns a fraction of everything, so one sale can force the sale of all. The loss is built into the form of inheritance, which is why it reads as neutral law and not as racial dispossession.' },
      { title: 'Tracy Chapman, “Fast Car” (1988)', echo: true, img: 'images/Tracy_Chapman_album_cover_1988.jpg', imgAlt: 'Album cover of Tracy Chapman by Tracy Chapman', cap: 'Tracy Chapman, Tracy Chapman (Elektra, 1988), album cover.',
        text: 'The narrator leaves school to care for her father, works a supermarket checkout, and plans to leave town. Read through Goldstein, the song tracks who absorbs the cost of reproducing a household when the wage does not cover it. It illustrates the mechanism and does not prove it.' }
    ]
  },
  {
    id: 'harris', short: 'Harris', lane: 'renewed', angle: -10,
    kicker: 'Harris, ch. 3',
    title: 'Racial alchemy of debt',
    src: 'Cheryl I. Harris, “The Racial Alchemy of Debt,” Colonial Racial Capitalism (2022)',
    keyword: 'racial alchemy of debt',
    explain: "Alchemy transmutes substance: racial domination goes in and financial obligation comes out. Harris shows the Black Codes’ explicit racial hierarchy giving way to vagrancy and other public-order laws, a system run through “formally colorblind laws and a ruthlessly targeted system of racialized administration” (105). Debt then works as a disguise because it makes a structural condition look like personal conduct.",
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
        text: 'Tiana works two jobs in 1920s New Orleans to buy an old sugar mill for her restaurant. The realtors tell her she has been outbid and doubt that a woman of her background can run a business, though they praise her cooking. Read with Harris, the scene shows exclusion phrased as risk, so a refusal rooted in who she is arrives as a neutral market judgment. The film never names race outright, so it dramatizes Harris’s mechanism more than it demonstrates it.' }
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
    explain: 'Wastelanding decides who may be exposed: land and its inhabitants are marked as empty, remote, and disposable. Antipolitics then converts a political question, whose land and whose labor, into an engineering one. The first makes the harm permissible; the second keeps anyone from asking.',
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
        text: 'The Shinkolobwe mine in the Congo, one of the world’s richest sources of uranium, has been erased from the map of nuclear modernity (145). Nuclear history is remembered at its visible center, Hiroshima, so the colonial edge disappears from the story.' }
    ]
  },
  {
    id: 'lowe3', short: 'Lowe 3', lane: 'hidden', angle: 70,
    kicker: 'Lowe, ch. 3',
    title: 'Commodity fetishism',
    src: 'Lisa Lowe, “A Fetishism of Colonial Commodities,” The Intimacies of Four Continents (2015)',
    keyword: 'commodity fetishism',
    explain: 'Lowe reads Marx’s fetishism of commodities as hiding colonial labor too. A commodity shows its price and hides who made it and where, the same disappearing act as wastelanding, performed on objects instead of land.',
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
        text: 'A sphinx-like woman with African features, coated in sugar and roughly 75 feet long, filled the Domino Sugar Refinery in Brooklyn before its demolition. Sugar is a colonial commodity whose labor fetishism occults, and Walker puts that labor in the room as a body. Tiana’s mill in the film is also a sugar mill.' }
    ]
  },
  {
    id: 'lowe1', short: 'Lowe 1', lane: 'natural', angle: 110,
    kicker: 'Lowe, ch. 1',
    title: '“Free” labor and the intimacies of four continents',
    src: 'Lisa Lowe, “Intimacies of Four Continents,” The Intimacies of Four Continents (2015)',
    keyword: 'free labor',
    explain: "Liberty here means free trade, the doctrine that accommodated colonial rule instead of replacing it: enclosure and usurpation continued beside new, governed movement of goods and people. The intimacies of four continents names the hidden supply side of the bourgeois home, since settler appropriation and enslaved and indentured labor produced its wealth, and colonized workers produced its comforts. The consequence for this map is that free labor belongs to the same system it seems to oppose. Because Lowe’s evidence is the British empire, the claim should not be stretched to every liberal tradition.",
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
    explain: "By the tyranny of world history, Lowe means that inherited categories cannot register connections among peoples affected by empire in different ways, so Chinese emigrant labor drops out of later histories of Britain, the United States, and China. Her remedy, past conditional temporality, reads the past as contingent, meaning dependent on conditions that could have gone otherwise, with no outcome inevitable. If the three lanes were built by laws and choices, they were not necessary, which suggests they might be rebuilt. Lowe stops short of saying how, and so does this map.",
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
    explain: "Wynter calls Man an ethnoclass mode of being human: a model of the human tied to one class and region, the global middle classes of the West and the westernized. Overrepresentation names the move by which that model passes for the whole species, so anyone outside it falls into Human Otherness. In Man2 the model is the jobholding breadwinner, which moves Otherness onto the jobless, the homeless, and the poor. The link to Harris follows: when employment and credit mark who counts, owing money reads as personal failure and not as structure.",
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
    explain: "Mimetic means copied: after the anticolonial and civil rights struggles, Wynter says, the bourgeois liberal monohumanist Man2 was the only available model, so the world imitated it. She ties global warming to that imitation and not to human activities in general. Homo narrans, the storytelling human, names what the model leaves out: a species whose self-descriptions are told, and so can be retold. The Third Event, the origin of humans as a storytelling species, rests on her own reading of Blombos Cave (66–67), so it is an argument and not a settled finding.",
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
  "Racial capitalism is not an economy with racism added to it; it is an economy that uses racial difference to decide whose land, labor, and wealth may be taken. The usual question asks whether race or class causes inequality. These readings ask instead what work racial difference does inside accumulation. Koshy et al. begin from Robinson, whose argument is that capitalism “did not overthrow the fixed social hierarchies of feudalism but instead extended and incorporated these unequal social and/or colonial relations” (Koshy et al., Colonial Racial Capitalism, 1). The key terms follow from that claim. Primitive accumulation, once treated as capitalism’s violent first stage, becomes a standing feature of capitalist development, and dispossession, the taking of land and livelihood, moves to the center of the analysis (4). The map organizes the remaining readings around three questions: how dispossession is reproduced, how it is renewed when an older form becomes unacceptable, and how it is hidden.",
  "Goldstein supplies the first answer through social reproduction, the processes by which families and communities sustain themselves over time. If a state can govern who raises children, who inherits, and who owns, it can reshape a community’s future without a single act of open conquest; the ordinary instruments of family life; adoption, inheritance, and property law; can do the work of conquest. Filius nullius, nobody’s child, extends terra nullius, nobody’s land, from soil to kinship (Goldstein, Colonial Racial Capitalism, 67). The sharpest mechanism is property itself. What is reproduced, Goldstein writes, is “an individuated possessory relation to private property and the deferral of possession itself” (76), so ownership is granted in a form that presumes its own loss. Heirs’ property shows how this works: because each heir holds a fractional share of the whole parcel, a speculator who buys a single heir’s share can force the sale of everyone’s (75). The loss is written into the form. Reproduction is also a question of gender and sexuality; Goldstein notes that these familial and generational processes carry heteronormative and racial dispositions into their logic (76), so the household that inherits is already a particular kind of household. Dispossession then arrives as ordinary family history and not as a state act, which is why it reads as neutral law. Tracy Chapman’s “Fast Car” illustrates the cost of reproducing a household on a wage that does not cover it, though a song can illustrate the mechanism and cannot prove it.",
  "Harris answers the second question. Her racial alchemy of debt names a transformation of substance: racial domination goes in, and financial obligation comes out. After the Civil War, she argues, debt became the principal mechanism of a labor-extraction system built to replace chattel slavery (Harris, Colonial Racial Capitalism, 93). The Black Codes’ explicit racial hierarchy gave way to vagrancy and other public-order laws, a system run through “formally colorblind laws and a ruthlessly targeted system of racialized administration” (105). If the law no longer names anyone, what exactly is being enforced? The answer is the same extraction under a different sign, and debt makes it look like personal conduct instead of structure. Predatory inclusion refines the point: admission to credit is no remedy when it means being let in on worse terms (96). Flint extends the pattern from person to place, since the city lost safe water as it took on more debt (98); it is one case, so it supports an argument about structure and not a general law. Tiana’s attempt to buy a sugar mill in The Princess and the Frog follows the same logic, because the realtors’ doubt about a woman of her background arrives as a judgment about risk. The film never names race, so it dramatizes Harris’s mechanism more than it demonstrates it.",
  "Day and Lowe answer the third. Wastelanding is the representation of land and its inhabitants as empty, remote, and disposable; Voyles, quoted by Day, calls the wasteland a racial and spatial signifier that makes an environment and the people in it pollutable (Voyles qtd. in Day, Colonial Racial Capitalism, 133). Antipolitics then converts a political question, whose land and whose labor, into an engineering one, with an industry that strips politics from everything it handles (Ferguson qtd. in Day 138). The Shinkolobwe mine in the Congo, now treated as a nonplace (Zoellner qtd. in Day 145), shows both at once. Lowe finds the same disappearing act in commodities instead of land: “abstracted value occults the histories of labor, material, and geography” (Lowe, The Intimacies of Four Continents, 85), and Marx’s own account made room for colonial labor and hid it at once (83). Kara Walker’s sugar sphinx reverses the disappearance by putting that labor in the room as a body, which is why it belongs beside Lowe and not beside the music or the film. Day ends with the Hiroshima artist Takahiro Iwasaki, whose miniature landscapes built from hair, towels, and toothbrushes offer, in her reading, “a queer human temporality that resists absorption into the abstract temporality of the commodity form” (152); this is not just a rebuke of the commodity; it is a way of seeing the labor the commodity hides.",
  "Further readings explain why all of this feels natural. Lowe’s first chapter argues that liberty did not contradict colonial rule but accommodated it (15), so free labor belongs to the same system it seems to oppose, and the comforts of the bourgeois home rested on settler appropriation and on enslaved and indentured labor (30). Wynter names the model of the human that makes this legible. Man, in her account, is an ethnoclass mode of being human whose well-being is overrepresented as that of the species, when it truly belongs to the Western and westernized middle classes (Wynter, “Unsettling the Coloniality of Being,” 313). Man2 is the jobholding breadwinner, and the people outside it are the jobless, the homeless, and the poor (321). That is the link back to Harris: when employment and credit mark who counts, owing money reads as personal failure. With McKittrick, Wynter adds that the world copied this model, mimetically (Wynter and McKittrick, “Unparalleled Catastrophe,” 22), and that because the human is homo narrans, a storytelling species (25), the model is a story that can be retold. Lowe’s past conditional temporality points the same way. If the past is “a configuration of multiple contingent possibilities, all present, yet none inevitable” (175), the three lanes were built by laws and choices and were not necessary, which suggests they might be rebuilt.",
  "The map has limits that matter. Its readings work mainly from the United States, Canada, and the British empire, and its three-part pattern rests on a few cases, so it should be read as an argument about structure and not a general law. Lowe stops short of saying how a past can be reopened; so does the map. A fuller account would ask not only where extraction hides, but what a case with no land and no loan would show, and who would be positioned to notice it."
];
