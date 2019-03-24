const circles = [
  {
    name: "Bishopston & Ashley Down",
    centre: { x: 51.481453271475736, y: -2.586463406560199 },
    card: 56.1220916217,
    cardAboveAvg: true,
    wellBeing: 10.7167480713,
    wellBeingAboveAvg: true
  },
  {
    name: "Ashley",
    centre: { x: 51.46830988465869, y: -2.5826731604707702 },
    card: 47.0419485062,
    cardAboveAvg: true,
    wellBeing: 11.2963810954,
    wellBeingAboveAvg: true
  },
  {
    name: "Frome Vale",
    centre: { x: 51.487090549306394, y: -2.531199152981719 },
    card: 52.5126804375,
    cardAboveAvg: true,
    wellBeing: 5.28063055328,
    wellBeingAboveAvg: false
  },
  {
    name: "Hillfields",
    centre: { x: 51.473701809639934, y: -2.5225753211023467 },
    card: 42.2054719965,
    cardAboveAvg: false,
    wellBeing: 7.94248164216,
    wellBeingAboveAvg: false
  },
  {
    name: "Brislington West",
    centre: { x: 51.43439385931224, y: -2.5490698863745944 },
    card: 48.5940154085,
    cardAboveAvg: true,
    wellBeing: 14.7433585567,
    wellBeingAboveAvg: true
  },
  {
    name: "Cotham",
    centre: { x: 51.465963389780946, y: -2.5999108335995267 },
    card: 37.9387727217,
    cardAboveAvg: false,
    wellBeing: 9.36535557287,
    wellBeingAboveAvg: true
  },
  {
    name: "Easton",
    centre: { x: 51.46237199635526, y: -2.558505712306767 },
    card: 43.9278774258,
    cardAboveAvg: false,
    wellBeing: 4.81494827713,
    wellBeingAboveAvg: false
  },
  {
    name: "Southmead",
    centre: { x: 51.50306208450213, y: -2.6011179000657774 },
    card: 31.6405538718,
    cardAboveAvg: false,
    wellBeing: 10.2157242904,
    wellBeingAboveAvg: true
  },
  {
    name: "Henbury & Brentry",
    centre: { x: 51.50897361423407, y: -2.62103514849043 },
    card: 46.8765381902,
    cardAboveAvg: true,
    wellBeing: 3.94558914503,
    wellBeingAboveAvg: false
  },
  {
    name: "Southville",
    centre: { x: 51.44332203083603, y: -2.6039905422451843 },
    card: 48.7446751716,
    cardAboveAvg: true,
    wellBeing: 14.765010161,
    wellBeingAboveAvg: true
  },
  {
    name: "Bishopsworth",
    centre: { x: 51.42178840411747, y: -2.6164555398506413 },
    card: 35.4776425344,
    cardAboveAvg: false,
    wellBeing: 9.21221900852,
    wellBeingAboveAvg: true
  },
  {
    name: "Central",
    centre: { x: 51.45441489548896, y: -2.5943361975129386 },
    card: 33.4215919493,
    cardAboveAvg: false,
    wellBeing: 4.81744044094,
    wellBeingAboveAvg: false
  },
  {
    name: "Knowle",
    centre: { x: 51.43277738744576, y: -2.5723344056870134 },
    card: 52.155814899,
    cardAboveAvg: true,
    wellBeing: 10.5179143228,
    wellBeingAboveAvg: true
  },
  {
    name: "Brislington East",
    centre: { x: 51.440283557635674, y: -2.538653690470255 },
    card: 39.6529506921,
    cardAboveAvg: false,
    wellBeing: 5.3981409889,
    wellBeingAboveAvg: false
  },
  {
    name: "St George West",
    centre: { x: 51.460117397352384, y: -2.546939540158561 },
    card: 48.2132512914,
    cardAboveAvg: true,
    wellBeing: 5.348680524,
    wellBeingAboveAvg: false
  },
  {
    name: "Windmill Hill",
    centre: { x: 51.43909717990885, y: -2.5859442709607294 },
    card: 39.8477204846,
    cardAboveAvg: false,
    wellBeing: 3.72734296813,
    wellBeingAboveAvg: false
  },
  {
    name: "Bedminster",
    centre: { x: 51.437160367112604, y: -2.621872278194263 },
    card: 46.0385050489,
    cardAboveAvg: false,
    wellBeing: 8.05808030669,
    wellBeingAboveAvg: false
  },
  {
    name: "Hartcliffe & Withywood",
    centre: { x: 51.40770370251634, y: -2.6122179733905804 },
    card: 45.7250377758,
    cardAboveAvg: false,
    wellBeing: 7.60560439494,
    wellBeingAboveAvg: false
  },
  {
    name: "St George Central",
    centre: { x: 51.46214058043526, y: -2.5263834027166023 },
    card: 50.1642144019,
    cardAboveAvg: true,
    wellBeing: 4.18535203685,
    wellBeingAboveAvg: false
  },
  {
    name: "Hengrove & Whitchurch Park",
    centre: { x: 51.411542279375816, y: -2.577213415009987 },
    card: 42.9430770393,
    cardAboveAvg: false,
    wellBeing: 7.7056988324,
    wellBeingAboveAvg: false
  },
  {
    name: "Lawrence Hill",
    centre: { x: 51.45459291753686, y: -2.5712342414908114 },
    card: 41.0952142331,
    cardAboveAvg: false,
    wellBeing: 7.27040289381,
    wellBeingAboveAvg: false
  },
  {
    name: "Horfield",
    centre: { x: 51.495084280418844, y: -2.5863791260049473 },
    card: 42.1709035873,
    cardAboveAvg: false,
    wellBeing: 7.20571474367,
    wellBeingAboveAvg: false
  },
  {
    name: "Westbury-on-Trym & Henleaze",
    centre: { x: 51.489794830406666, y: -2.6174827311199365 },
    card: 72.6337614192,
    cardAboveAvg: true,
    wellBeing: 10.6111453332,
    wellBeingAboveAvg: true
  },
  {
    name: "St George Troopers Hill",
    centre: { x: 51.45343615313802, y: -2.5303229832629905 },
    card: 44.3555206792,
    cardAboveAvg: false,
    wellBeing: 10.0315989009,
    wellBeingAboveAvg: true
  },
  {
    name: "Stockwood",
    centre: { x: 51.4184185120091, y: -2.549734590275577 },
    card: 45.0301000534,
    cardAboveAvg: false,
    wellBeing: 5.30185961335,
    wellBeingAboveAvg: false
  },
  {
    name: "Stoke Bishop",
    centre: { x: 51.477425695764694, y: -2.6360431632859567 },
    card: 54.1500690165,
    cardAboveAvg: true,
    wellBeing: 9.78705358706,
    wellBeingAboveAvg: true
  },
  {
    name: "Avonmouth & Lawrence Weston",
    centre: { x: 51.50733416955092, y: -2.676403593578519 },
    card: 42.029555861,
    cardAboveAvg: false,
    wellBeing: 6.92875084503,
    wellBeingAboveAvg: false
  },
  {
    name: "Filwood",
    centre: { x: 51.42541871461089, y: -2.5928026281688696 },
    card: 46.0099617086,
    cardAboveAvg: false,
    wellBeing: 5.63858549278,
    wellBeingAboveAvg: false
  },
  {
    name: "Hotwells & Harbourside",
    centre: { x: 51.44972850261871, y: -2.609578584671327 },
    card: 43.3137859992,
    cardAboveAvg: false,
    wellBeing: 11.0557432305,
    wellBeingAboveAvg: true
  },
  {
    name: "Clifton",
    centre: { x: 51.45651580315947, y: -2.619963313044622 },
    card: 53.5512831871,
    cardAboveAvg: true,
    wellBeing: 10.4239959317,
    wellBeingAboveAvg: true
  },
  {
    name: "Lockleaze",
    centre: { x: 51.485856250896916, y: -2.5656672613818317 },
    card: 42.9774677841,
    cardAboveAvg: false,
    wellBeing: 9.22474052584,
    wellBeingAboveAvg: true
  },
  {
    name: "Clifton Down",
    centre: { x: 51.46496980750949, y: -2.61265665526117 },
    card: 40.9514677032,
    cardAboveAvg: false,
    wellBeing: 9.68237313956,
    wellBeingAboveAvg: true
  },
  {
    name: "Eastville",
    centre: { x: 51.4747101824164, y: -2.54692680566368 },
    card: 46.751663202,
    cardAboveAvg: true,
    wellBeing: 6.44885584556,
    wellBeingAboveAvg: false
  },
  {
    name: "Redland",
    centre: { x: 51.475244994104166, y: -2.6011576167757497 },
    card: 56.9552155452,
    cardAboveAvg: true,
    wellBeing: 7.95377805587,
    wellBeingAboveAvg: false
  }
];
console.log("Roar! Your data!");
