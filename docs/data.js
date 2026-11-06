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
    explain: "The economy functions by exploiting racial difference to determine whose land, labor, and wealth are up for grabs. Dispossession is portrayed as an ongoing process, rather than a single event that sets the stage. Land becomes a central focus in this context.",
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
    explain: "Goldstein points to the everyday details of social reproduction: who takes care of children, who inherits wealth. Goldstein shows that power is exercised without overt conquest or occupation. Family histories show dispossession happening regularly, since ownership is handed over in a form that expects to lose itself (76). The Latin ideas of nobody’s child (filius nullius) and nobody’s land (terra nullius) illustrate this process (67).",
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
        text: "When land passes to descendants in undivided shares, a single buyer of one share can ask a court to partition the parcel. This has disproportionately affected African Americans since Reconstruction (73). One sale can trigger the forced sale of everything, creating losses that are baked into inheritance law. Inheritance is often viewed as neutral, but in practice, it’s a system that perpetuates these problems." },
      { title: 'Tracy Chapman, “Fast Car” (1988)', echo: true, img: 'images/Tracy_Chapman_album_cover_1988.jpg', imgAlt: 'Album cover of Tracy Chapman by Tracy Chapman', cap: 'Tracy Chapman, Tracy Chapman (Elektra, 1988), album cover.',
        text: "She cared for her father at home after leaving school, worked at a local supermarket checkout, and felt eager to leave town. Read through Goldstein, the song reveals who struggles with making ends meet when wages don’t cover expenses. It illustrates the point; it proves nothing." }
    ]
  },
  {
    id: 'harris', short: 'Harris', lane: 'renewed', angle: -10,
    kicker: 'Harris, ch. 3',
    title: 'Racial alchemy of debt',
    src: 'Cheryl I. Harris, “The Racial Alchemy of Debt,” Colonial Racial Capitalism (2022)',
    keyword: 'racial alchemy of debt',
    explain: "In Harris, racial domination is embedded in the financial obligations people face. After the Civil War, vagrancy and public-order laws replaced the Black Codes. These laws didn’t mention race directly but were part of a system that targeted Black people through “formally colorblind laws and a ruthlessly targeted system of racialized administration” (105). Debt masks this as personal failing rather than structural condition.",
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
        text: "Harris focuses on areas labeled financially insolvent, like Black neighborhoods treated as insolvent wastelands and made sites for austerity and improvement (98). Flint’s struggles illustrate this pattern, though Flint is one case, so it should be read as an argument about structure and not a general law." },
      { title: 'The Princess and the Frog (2009)', img: 'images/Tiana_Fenner_Brothers_Staircase.jpg', imgAlt: 'Tiana speaks with the two Fenner brothers on a staircase', cap: 'Still: The Princess and the Frog (Walt Disney Animation Studios, 2009).',
        text: "Tiana works two jobs in 1920s New Orleans to purchase an old sugar mill. The realtors claim she’s been outbid and express skepticism about a woman of her background running a business, but they do praise her cooking. This echoes Harris’s argument that exclusion is often phrased as risk, even though the film never explicitly mentions race or ethnicity." }
    ],
    extraTerm: { title: 'Predatory inclusion', quote: ['“the incorporation or predatory inclusion of Black subjects into extractive credit markets”', 'Harris 96'],
      text: 'Letting a group previously excluded from credit into the market doesn’t solve the problem. They are let in on worse terms, and the real gain comes from admitting them (96).' }
  },
  {
    id: 'day', short: 'Day', lane: 'hidden', angle: 30,
    kicker: 'Day, ch. 8',
    title: 'Wastelanding and antipolitics',
    src: 'Iyko Day, “Nuclear Antipolitics and the Queer Art of Logistical Failure,” Colonial Racial Capitalism (2022)',
    keyword: 'wastelanding',
    explain: "Mining and contamination thrive where wastelanding devalues a place’s worth, treating its people as empty, remote, and disposable. Antipolitics then hands the questions to engineers. One decides who can be exposed to harm; the other keeps the question from being asked.",
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
        text: "The Shinkolobwe mine in the Congo, a major source of uranium, gets little attention despite being one of the world’s most significant nuclear sites; it has been erased from the map of nuclear modernity (145). The historical focus remains centered on Hiroshima, and the colonial edge drops out." }
    ]
  },
  {
    id: 'lowe3', short: 'Lowe 3', lane: 'hidden', angle: 70,
    kicker: 'Lowe, ch. 3',
    title: 'Commodity fetishism',
    src: 'Lisa Lowe, “A Fetishism of Colonial Commodities,” The Intimacies of Four Continents (2015)',
    keyword: 'commodity fetishism',
    explain: "Lowe extends Marx by focusing on colonial labor, often overlooked in his theory. The value of a commodity is shown by its price, which says nothing about the workers involved and their locations. Similarly, wastelanding conceals the impact of its exploitation on lands.",
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
        text: "A sphinx-like woman with African features, roughly 75 feet long, lay coated in layers of sugar. She was set against the backdrop of Brooklyn’s Domino Sugar Refinery before its demolition. Walker’s installation reimagined the labor behind sugar production as a physical presence. Tiana’s mill in the film is also a sugar mill." }
    ]
  },
  {
    id: 'lowe1', short: 'Lowe 1', lane: 'natural', angle: 110,
    kicker: 'Lowe, ch. 1',
    title: 'Liberalism and the economy of affirmation and forgetting',
    src: 'Lisa Lowe, “Intimacies of Four Continents,” The Intimacies of Four Continents (2015)',
    keyword: 'liberalism',
    explain: "This chapter explores liberalism beyond its association with liberty. Lowe examines the promises made by liberalism: rights, emancipation, wage labor, and free trade for all. These benefits rely on a specific economic dynamic, the economy of affirmation and forgetting (3). This framework allows freedom to be conferred upon the figure of man in Europe and North America, while the exploitation and violence driving it remain invisible. Mill argues that despotism over those deemed incapable of self-governance is necessary for liberty (15). Free trade is one piece of liberalism and not a definition of it. Lowe’s analysis focuses on British and Anglo-American contexts, which makes her findings less applicable to liberal thinkers elsewhere.",
    quotes: [
      { t: '“the economy of affirmation and forgetting that structures and formalizes the archives of liberalism, and liberal ways of understanding”', cite: 'Lowe 3',
        words: [['economy of affirmation and forgetting', 'Lowe’s name for how liberal thought affirms freedom for some while forgetting the colonial slavery, land seizure, and labor it relied on.'], ['liberalism', 'The tradition that promises rights, emancipation, wage labor, and free trade as universal goods. Lowe studies what that promise depends on, which is broader than liberty alone.']] },
      { t: '“Social relations in the colonized Americas, Asia, and Africa were the condition of possibility for Western liberalism to think the universality of human freedom, however much freedoms for slaves, colonized, and indigenous peoples were precisely exempted by that philosophy”', cite: 'Lowe 16',
        words: [['condition of possibility', 'What has to already exist before something else can be thought or done.'], ['exempted', 'Left out on purpose, as the freedoms of enslaved and colonized people were left out.']] }
    ],
    chips: ['liberalism', 'economy of affirmation and forgetting', 'free trade', 'bourgeois intimacy'],
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
    explain: "Lowe claims some connections are overlooked because we inherit certain categories. Chinese emigrant labor, for instance, disappears from later histories of Britain, the US, and China. Her approach, past conditional temporality, treats the past as a collection of possible outcomes that could have unfolded differently. If laws and choices built these lanes, they weren’t set in stone, they could be altered or rebuilt. Lowe does not say how.",
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
    explain: "Wynter defines Man as a model of humanity that represents not an individual person but rather a Western bourgeois way of being human. This representation passes itself off as the sole definition of humanity, which she calls overrepresentation (260). The origin and legitimacy of this model are at stake. From its beginnings in the Renaissance, Man was conceived as a rational political subject within the state (264, 269). Later, with the rise of biological sciences in the eighteenth century, man’s authority shifted to rely on natural selection and the distinction between selected and dysselected individuals (315). This framework positions the breadwinner as man and those who are jobless or homeless as Human Others (321). The model serves the interests of the bourgeoisie and justifies itself through biological discourse. Lowe writes about liberal humanism, a related idea found in different archives, so the two should not be merged.",
    quotes: [
      { t: '“overrepresentation of its well-being as that of the human species as a whole, rather than as it is veridically: that of the Western and westernized (or conversely) global middle classes”', cite: 'Wynter 313',
        words: [['overrepresentation', 'One group’s way of being human passing for the whole species.'], ['veridically', 'Truthfully, in actual fact.'], ['global middle classes', 'The Western and westernized middle classes Wynter says Man really describes.']] },
      { t: 'Man2 is “defined as a jobholding Breadwinner,” and its Human Others are “peopled by a new category, one now comprised of the jobless, the homeless, the Poor”', cite: 'Wynter 321',
        words: [['Man2', 'Wynter’s name for the second form of Man, from the eighteenth century on, built on the biological sciences and defined by earning.'], ['Breadwinner', 'The person defined by holding a job and earning.'], ['Human Others', 'The people the model leaves outside it.']] }
    ],
    chips: ['Man2', 'homo oeconomicus', 'overrepresentation', 'biocentric', 'dysselected'],
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
    explain: "According to Wynter, the term mimetic refers to copying. She notes that after decolonization, Western powers told newly independent countries their problem was underdevelopment, encouraging them to become Man themselves, a homo oeconomicus (21). The critique of overrepresentation claims it speaks for everyone, while mimesis describes others adopting its goals. Wynter argues that mimicking this model is the primary cause of global warming, not human behavior as a whole (22). She also suggests that the model treats society like a natural organism (22), connecting it to the biological sciences in her 2003 article. The concept of Homo narrans, or storytelling humans, implies the model is a narrative that can be retold (25). Wynter’s idea of the Third Event, which proposes humans began as a storytelling species, is based on her own interpretation of Blombos Cave findings (66–67), making it an argument rather than a proven fact.",
    quotes: [
      { t: '“the Western and mimetically Westernized middle classes,” who “fell into the trap of modeling ourselves on the mimetic model of the Western bourgeoisie’s liberal monohumanist Man2”', cite: 'Wynter and McKittrick 22',
        words: [['mimetically', 'By copying a model, here the Western bourgeois one that was offered as the only way to be human.'], ['liberal monohumanist Man2', 'A single (mono) secular, economic model of the human, tied by Wynter to the Western bourgeoisie. Its content comes from a natural-organism picture of humans (22), so it is not drawn from liberal politics alone.']] },
      { t: '“In my own terms, the human is homo narrans”', cite: 'Wynter and McKittrick 25',
        words: [['homo narrans', 'The storytelling human: a being made partly by the stories it tells about itself.']] }
    ],
    chips: ['homo narrans', 'Third Event', 'development', 'mimetic Man2', 'science of the Word'],
    links: ['wynter03', 'lowe5'],
    outside: [['Who is responsible for climate change', 'Asks whether blame belongs to humans in general or to a particular way of living. A topic outside the readings.']],
    examples: []
  }
];

const LINK_NOTES = {
  "koshy|goldstein": "The editors treat dispossession as something that keeps happening. Goldstein shows one way it keeps happening, through families and inheritance.",
  "koshy|harris": "The editors say racial capitalism extends older hierarchies. Harris follows one form that takes after slavery, which is debt.",
  "koshy|day": "The editors put land and extraction near the center. Day follows uranium out of colonized land and the questions that never get asked about it.",
  "goldstein|harris": "Goldstein follows property through families, and Harris follows it through credit and debt. Both show a loss that looks like paperwork, but the mechanisms differ: inheritance rules in one, lending and enforcement in the other.",
  "harris|day": "Harris’s colorblind law drops race from the wording, and Day’s antipolitics hands political questions to engineers. Both take politics out of the language, with different tools.",
  "harris|wynter03": "Wynter’s Man2 gives one reason owing money can read as personal failure. That link is my reading and neither author makes it.",
  "day|lowe3": "Lowe’s commodity hides the labor inside it, and Day’s wasteland hides the place. They are related moves and not one idea.",
  "lowe3|lowe1": "Chapter 3 follows commodities and the labor they hide. Chapter 1 asks what liberal freedom had to forget in order to exist.",
  "lowe1|lowe5": "Chapter 1 shows what the liberal story of freedom forgets. Chapter 5 asks what could be recovered by reading the past differently.",
  "lowe1|wynter03": "Lowe is about liberalism and its archives, and Wynter is about a model of the human built on biology and economics. Each says one group’s freedom or humanity was made to look universal, but they are not the same object.",
  "lowe5|wm": "Past conditional temporality and homo narrans both treat the present as something that could be told another way. Neither explains how that turns into material change.",
  "wynter03|wm": "The 2003 article names Man and overrepresentation. The conversation adds mimesis, which is how other people came to copy the model."
};

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
  "The map begins where Robinson’s analysis starts. According to Koshy et al., Robinson argues that capitalism “did not overthrow the fixed social hierarchies of feudalism but instead extended and incorporated these unequal social and/or colonial relations” (Koshy et al., Colonial Racial Capitalism, 1). The term incorporated is what sticks with me, as it suggests racism wasn’t something tacked on later, but was already inherent in economic systems. As the introduction goes on, the editors turn to land and Marx’s concept of primitive accumulation, a process they contend never truly ends (4). My lanes (reproduced, renewed, hidden) are simply a series of categories, and some readings overlap between them.",
  "Goldstein starts by examining a seemingly everyday topic: child custody and property inheritance. Goldstein draws an interesting comparison between foster care and adoption law on one hand, and property law on the other. This connection is tied to two Latin phrases: filius nullius (nobody’s child) and terra nullius (nobody’s land) (Goldstein, Colonial Racial Capitalism, 67). These concepts allowed Native children to be treated as having no claim to their heritage, just like unclaimed land had been viewed.",
  "What gets reproduced, in Goldstein’s words, is “an individuated possessory relation to private property and the deferral of possession itself” (76). That can lead to complex situations, such as heirs’ property, where multiple individuals own a portion of a larger plot. A developer can then buy one small part and petition a court to sell off the entire property (75), often through a simple process that involves filing paperwork, without needing to physically remove family members from the land. This has had a disproportionate impact on African American families since Reconstruction (73).",
  "The chapter also shows how these laws carry forward assumptions about heteronormative and racial dynamics in their logic (76). The inheritance process is not neutral but reflects existing power imbalances between households. The issue isn’t just who inherits what, but which households have historically held more power and privilege. Tracy Chapman’s “Fast Car” is not in the chapter. I put it here because the narrator leaves school to look after her father, and I am not sure that is Goldstein’s subject so much as mine.",
  "Harris claims that debt became the primary means by which forced labor was re-established after the Civil War (Harris, Colonial Racial Capitalism, 93). Harris calls this phenomenon the racial alchemy of debt. The Black Codes, which named race openly, were pushed back, but their replacement laws, vagrancy and other public-order statutes, made no mention of race.",
  "However, these laws still ran on “formally colorblind laws and a ruthlessly targeted system of racialized administration” (105). In Harris’s account, people who owe money are seen as individuals who made poor choices, rather than as victims of structural inequality. I find this perspective difficult to dispute.",
  "In Harris’s theory, predatory inclusion refers to the practice of granting access to credit on exploitative terms (96). In Flint, the entire city accumulated debt while simultaneously facing a water crisis, further exacerbating its financial woes (98). While a single case like Flint is insufficient to build a comprehensive theory, I’ll include it in this discussion: The Princess and the Frog comes to mind, where Tiana invests in an old sugar mill but faces skepticism from realtors due to her background, though nobody says race.",
  "When discussing colonial racial capitalism, Day moves the focus to often overlooked places. In Voyles’s phrase as Day quotes it, a wasteland is a racial and spatial label that makes a place and the people in it pollutable (Voyles qtd. in Day, Colonial Racial Capitalism, 133). The Shinkolobwe mine in the Congo, a major source of uranium, is treated as a nonplace and left out of the standard Hiroshima narrative (Zoellner qtd. in Day 145). Then there is antipolitics: discussions around the industry hand the questions to engineers and strip politics from every aspect, according to Ferguson quoted in Day (138).",
  "Lowe’s work touches on this concept, noting that “Abstracted value occults the histories of labor, material, and geography” (Lowe, The Intimacies of Four Continents, 85). Price tags lack human fingerprints. Kara Walker’s sugar sphinx, a large woman coated in sugar set in a Brooklyn refinery that was about to be torn down, is a poignant reminder of this issue. Day concludes with Takahiro Iwasaki, who crafts miniature power lines and cranes from household items like hair, towels, and toothbrushes. Day reads these miniatures as “a queer human temporality that resists absorption into the abstract temporality of the commodity form” (152). The image of the towels is a more vivid illustration of this concept than its underlying description.",
  "Lowe and Wynter present distinct perspectives on why all of this passes as normal. However, their views shouldn’t be taken as equivalent. At issue for Lowe is liberalism, which promises universal benefits such as rights, emancipation, wage labor, and free trade. But she questions what makes this promise possible, suggesting it relies on an economy of affirmation and forgetting (3).",
  "According to Lowe, a specific group’s freedom is made to appear universal at the expense of others in her critique of liberalism. She uses Mill as an example to illustrate how liberty is tied to colonial rule. He views despotism over those deemed incapable of self-governance as necessary for liberty (15). This perspective allows for the exclusion of colonial subjects from considerations of liberty. Free trade is one piece of that story, and calling liberty free trade skips the argument.",
  "Wynter’s subject is a model of the human. In Wynter’s account, Man is a Western bourgeois way of being human that overrepresents itself as the whole species (Wynter, “Unsettling the Coloniality of Being,” 260). This model originated in the Renaissance as the rational political subject of the state (264) and was later solidified through the biological sciences, natural selection, and the split between the selected and the dysselected from the eighteenth century on (315). In that biocentric form it became homo oeconomicus, the jobholding breadwinner.",
  "Those who don’t fit this ideal are relegated to the status of Human Others, including the jobless, the homeless, and the poor (321). In the aftermath of decolonization, Western nations told postcolonial states that their problem was underdevelopment and encouraged them to adopt the human model for themselves (Wynter and McKittrick, “Unparalleled Catastrophe for Our Species?,” 21). This led to a process of mimesis, where non-Western societies attempted to emulate the dominant culture’s definition of humanity (22).",
  "Wynter emphasizes how this overrepresentation creates a false sense of universality. Lowe examines liberal political economy as the source of these issues, while Wynter looks to biology and the sciences that describe what a human is. Their perspectives intersect in their acknowledgment that some groups’ freedom or humanity was constructed as universal at the expense of others. Putting them side by side is my move and not theirs.",
  "Three links across the readings are worth saying plainly. The first is between Goldstein and Lowe. According to Lowe, Hegel believed freedom came from possessing oneself through labor and trading goods (29). However, Goldstein says reproduction hands people “an individuated possessory relation to private property and the deferral of possession itself” (76). This tension is clear in heirs’ property cases, where one sale can impact all heirs, and it shows the disconnect between possessory relationships and real ownership.",
  "Lowe also has a connection with Harris. A colorblind law doesn’t single out specific groups but still unfairly affects those already disadvantaged (105), much like Lowe’s point that liberal categories claim universality while ignoring underlying connections they rely on (16).",
  "The third is a place where I would keep two ideas apart. Day writes about places treated as nonplaces, while Lowe examines how value hides the labor in it. In her final chapter, Lowe describes the past as a set of possibilities that could have gone another way (175), a sentiment that aligns with Wynter’s idea that the model is a story that can be retold (25), but neither author explains how a story turns into a change in who owns the land.",
  "Most of the material comes from the United States, Canada, and the British Empire. Flint and the sugar mill are single cases, and the song and film are my reading and not the authors’. The map implies connections between sources, but these links are actually my own additions, not inherent to the data. I’ve had trouble figuring out what happens when land or loans aren’t involved in an argument."
];
