/* ==========================================================================
   Soepdetective · ERWTENSOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/erwt/img/.
   Ingrediënten (speur.goed): volgens het recept van Good Soup (nov 2026).
   Thema: de wintersoep van Nederland. Erwten drogen om te bewaren; erwtensoep bij het schaatsen.
   Kunstwerk: Hendrick Avercamp, Winterlandschap met ijsvermaak (ca. 1608), Rijksmuseum (SK-A-1718). Publiek domein.
   Tot kunst.webp er is: link naar het Rijksmuseum.
   ========================================================================== */
LESSEN.erwt = {
  naam:"Erwtensoep",
  mascotte:"erwt",
  speurvraag:"Waarom heten ze spliterwten?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"Peulvruchten"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // onderbouw: korte les op het digibord, terwijl de soep nog op tafel staat
    kleur:"groen",
    smaak:{ goed:["zout"], uitleg:"Erwtensoep is hartig: er gaat een snufje zout in. En voel je hoe dik en zacht hij is?" },
    kennis:{ kleur:{ kleuren:["#7FA83A","#4F8F3A"], tekst:"Groen! Gedroogde erwtjes kunnen ook geel zijn." }, grond:{ plek:"boven", tekst:"Erboven! Ze groeien in een peul aan een plant met krulletjes." }, weetje:{ v:"Waarom is erwtensoep zo dik?", a:"De erwtjes koken helemaal zacht. Soms blijft de lepel er rechtop in staan!" } },   // dia "In het echt" na "Wie ben ik?" (foto = img/foto.webp)
    // spellen: elk spel is een eigen dia, in deze volgorde.
    spellen:[
      { type:"tel", naam:"Hoeveel erwtjes?", titel:"Hoeveel erwtjes zitten er in de peul?", roosje:"ob-erwtje", achter:"ob-peul", wat:"erwtjes", een:"erwtje",
        plekken:[[20,50],[33,48],[46,47],[59,47],[72,48],[85,50]],   // op een rij in de open peul (in % van het vlak)
        rondes:[4,6,5],
        start:"De peul is open. Hoeveel erwtjes zitten erin? Tik op elk erwtje en tel hardop mee.",
        slot:"Goed geteld. In één peul zitten vaak zes tot tien erwtjes." },
      { type:"volgorde", naam:"Van zaadje tot peul", titel:"Van zaadje tot peul",
        stappen:[ {img:"ob-stap-1", naam:"het zaadje"}, {img:"ob-stap-2", naam:"het plantje"},
                  {img:"ob-stap-3", naam:"de bloem"}, {img:"ob-stap-4", naam:"de peul"} ],
        klaar:"Goed zo. Uit de bloem groeit de peul, en daarin zitten de erwtjes.",
        start:"Wat komt er eerst? Kom maar tikken.",
        verder:"En wat komt daarna?",
        slot:"Zie je de krulletjes aan het plantje? Daarmee klimt de erwt omhoog, langs een stokje of een hek." },
      { type:"goedvoor", naam:"Goed voor je…?", titel:"Waar zijn erwten goed voor?",
        opties:[ {lijf:"spieren", naam:"sterke spieren", goed:true, uitleg:"Ja! In erwten zit veel eiwit. Daar maakt je lijf sterke spieren van."},
                 {lijf:"haar", naam:"je haar", goed:false, uitleg:"Nee, van erwten krijg je geen lang haar."},
                 {lijf:"oren", naam:"je oren", goed:false, uitleg:"Nee, je oren hebben niks aan erwten."} ],
        start:"Waar zijn erwten goed voor? Sterke spieren, je haar of je oren? Tik op het plaatje.",
        slot:"Erwten maken je sterk. Laat je spierballen maar eens zien!" }
    ]
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["dik","#2F7F6B","-5deg"],["hartig","#B9520F","5deg"],["warm","#7650A6","-4deg"],["groen","#4F8F3A","4deg"],["zout","#3B2B22","-3deg"],["romig","#2F7F6B","5deg"],["zacht","#7650A6","-5deg"],["vol","#3B2B22","4deg"]],
      g78:[["dik","#2F7F6B","-5deg"],["hartig","#B9520F","5deg"],["warm","#7650A6","-4deg"],["groen","#4F8F3A","4deg"],["zout","#3B2B22","-3deg"],["romig","#2F7F6B","5deg"],["zacht","#7650A6","-5deg"],["vol","#3B2B22","4deg"],["stevig","#B9520F","-4deg"],["kruidig","#7650A6","3deg"],["zoetig","#4F8F3A","-3deg"],["mild","#2F7F6B","4deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Is hij te dik, of juist lekker stevig?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop.", g78:"Zes zitten erin, vijf niet. Let op: knolselderij is iets anders dan bleekselderij. Sleep of tik." },
    opgelost:"Opgelost: in de soep zitten spliterwten, knolselderij, wortel, ui, water en een snufje zout.",
    goed:["erwt","knolselderij","wortel","ui","water","zout"],
    fout:["bleekselderij","broccoli","banaan","tomaat","aardbei"] },
  kennis:{   // "Maak kennis": komt vanzelf na "Wat zit erin?". Echte foto (img/foto.webp) + 4 kaartjes: voorkant vraag, achterkant antwoord.
    titel:"Maak kennis met de erwt", fotoAlt:"Verse erwten in open peulen",
    kaarten:[
      {v:"Hoeveel erwtjes zitten er in een peul?", a:"Meestal zes tot tien. Ze liggen netjes op een rij."},
      {v:"Wanneer oogsten we erwten in Nederland?", a:"Verse erwten in de zomer, in juni en juli. Gedroogd kun je ze het hele jaar eten."},
      {v:"Kun je de peul ook eten?", a:"Bij peultjes en sugarsnaps wel! Bij gewone erwten niet: die peul is taai."},
      {v:"Hoe heet erwtensoep ook nog?", a:"Snert! Echte snert is zo dik dat er soms een lepel rechtop in blijft staan."}
    ]
  },
  kern:{
    titel:"Waarom heten ze spliterwten?",
    beeldAlt:"De detective-erwt bekijkt met een vergrootglas een erwt die in twee helften is gespleten",
    opties:["Ze zijn in tweeën gespleten","Ze komen uit de stad Split","Ze zijn heel klein"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["Spliterwten zijn gedroogde erwten. Na het drogen gaat het velletje eraf en valt de erwt uit elkaar in twee helften.",
              "'Splijten' betekent in tweeën breken. Zo krijg je een spliterwt.",
              "Gedroogde erwten kun je maanden bewaren. Zo kon je vroeger ook in de winter, als er niks groeide, nog soep maken."]
  },
  lichaam:{
    plaatje:"feitfabel",
    titel:{ g56:"Erwten helpen je lichaam bij twee dingen", g78:"Erwten en je lichaam: feit of fabel?" },
    onthoud:"Erwten zijn peulvruchten. Daar zit veel eiwit in, en dat heb je nodig om sterk te worden en te groeien.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpen erwten? Tik een plaatje aan.", opties:[
        {key:"spieren",naam:"Sterke spieren",   goed:true,  uitleg:"Ja! In erwten zit veel eiwit. Daar bouwt je lichaam spieren mee."},
        {key:"rennen", naam:"Energie om te spelen", goed:true, uitleg:"Ja! Erwtensoep geeft je lang energie. Daarom aten schaatsers het vroeger op het ijs."},
        {key:"haar",   naam:"Lang haar",        goed:false, uitleg:"Nee, van erwten krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",      goed:false, uitleg:"Nee, je oren hebben niks aan extra erwten."},
        {key:"ogen",   naam:"Zien in het donker", goed:false, uitleg:"Nee, daar heb je vitamine A voor nodig, uit bijvoorbeeld wortels."},
        {key:"huid",   naam:"Een bruine huid",  goed:false, uitleg:"Nee, daar doen erwten niks aan."}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"Spliterwten zijn gedroogde erwten.", bak:"feit"},
          {naam:"Erwten groeien in een peul.", bak:"feit"},
          {naam:"In peulvruchten zit veel eiwit.", bak:"feit"},
          {naam:"Een monnik ontdekte met erwten hoe je dingen van je ouders erft.", bak:"feit"},
          {naam:"Spliterwten groeien als halve erwtjes aan de plant.", bak:"fabel", uitleg:"Ze worden pas na het drogen in tweeën gespleten."},
          {naam:"Erwtensoep mag je alleen in de winter eten.", bak:"fabel", uitleg:"Het mag altijd. Maar in de winter is het extra lekker."}
        ]}
    }
  },
  koppel:{
    titel:"Ken jij de peulvruchten?",
    v:{ g56:"Erwten zijn peulvruchten. Lees de hint, tik op het plaatje en daarna op de naam. Of sleep het plaatje naar de naam.",
        g78:"Zes peulvruchten: ze groeien allemaal in een peul. Lees de hints goed: vorm en kleur verraden welke het is." },
    lijst:[
      {key:"doperwt", naam:"Doperwten", hint:"Klein, rond en knalgroen. Vers uit de peul."},
      {key:"kikkererwt", naam:"Kikkererwten", hint:"Lichtbruin en rond, met een klein puntje. Daar maak je hummus van."},
      {key:"bruinebonen", naam:"Bruine bonen", hint:"Bruin en een beetje niervormig."},
      {key:"linzen", naam:"Linzen", hint:"Klein en plat, als piepkleine schijfjes. Rood, groen of bruin."},
      {key:"kapucijner", naam:"Kapucijners", hint:"Rond, rimpelig en grijsbruin."},
      {key:"kidneybonen", naam:"Kidneybonen", hint:"Donkerrood en in de vorm van een nier."}
    ],
    g56:["doperwt","kikkererwt","bruinebonen","linzen"],   // alleen deze bij de middenbouw
    goedZo:"Ja, dat zijn {naam}.",
    mis:"Nee, die past niet. Kijk nog eens naar de vorm en de kleur.",
    slot:"Super. Erwten, bonen en linzen: allemaal peulvruchten."
  },
  quiz:{
    g56:[
      { v:"Waar groeien erwten?", a:["Onder de grond","In een peul aan een plant","Aan een boom"], goed:1, img:"peul",
        weetje:"Erwten groeien in een peul. In één peul zitten meestal zes tot tien erwtjes op een rij." },
      { v:"Waarom drogen we erwten?", a:["Zodat je ze lang kunt bewaren","Zodat ze groener worden","Zodat ze harder groeien"], goed:0, img:"drogen",
        weetje:"Gedroogde erwten blijven maanden goed. Zo kon je vroeger ook in de winter soep maken." },
      { v:"Hoe dik is echte erwtensoep?", a:["Zo dun als water","Zo dik dat de lepel rechtop blijft staan","Zo hard als steen"], goed:1, img:"lepel",
        weetje:"Dat zeggen mensen over echte snert: de lepel blijft er rechtop in staan." }
    ],
    g78:[
      { v:"Een monnik deed ruim 150 jaar geleden proeven met duizenden erwtenplanten. Wat ontdekte hij?", a:["Hoe je eigenschappen van je ouders erft","Hoe je erwten droogt","Hoe snel erwten groeien"], goed:0, img:"mendel",
        weetje:"Gregor Mendel keek naar de kleur en de vorm van erwten in elke generatie. Zo ontdekte hij de regels van erfelijkheid." },
      { v:"Waarom aten mensen vroeger erwtensoep bij het schaatsen?", a:["Het geeft lang warmte en energie","Het is goed voor je schaatsen","Het was gratis"], goed:0, img:"drogen",
        weetje:"Dikke, warme soep vol erwten geeft lang energie. Bij de koek-en-zopie op het ijs kon je een kom kopen." },
      { v:"Erwten zijn peulvruchten. Welke stof zit er veel in?", a:["Eiwit","Suiker","Vet"], goed:0, img:"peul",
        weetje:"Peulvruchten zitten vol eiwit. Daarom zijn ze een goede vervanger van vlees." }
    ]
  },
  galgje:{   // midden- en bovenbouw: komt vanzelf vóór Kijk-kunst. Lang woord uit de les, met tip en uitleg.
    g56:{ woord:"PEULVRUCHTEN", tip:"Erwten, bonen en linzen horen bij deze familie. Ze groeien allemaal in een peul.", uitleg:"Peulvruchten zitten vol eiwit." },
    g78:{ woord:"ERFELIJKHEID", tip:"Gregor Mendel ontdekte hier de regels van, met erwtenplanten.", uitleg:"Erfelijkheid: hoe eigenschappen van ouders naar kinderen gaan." }
  },
  kunst:{
    // Publiek domein. Zodra kunst.webp er is: link en linkUitleg weghalen, dan toont de les het schilderij zelf.
    titel:"Kijk-kunst: een winterdag op het ijs", werk:"Winterlandschap met ijsvermaak", maker:"Hendrick Avercamp", jaar:"ca. 1608", plek:"Rijksmuseum, Amsterdam",
    link:"https://www.rijksmuseum.nl/nl/collectie/SK-A-1718",
    linkUitleg:"Opent de pagina van het Rijksmuseum met het schilderij.",
    intro:"Hendrick Avercamp was een Nederlandse schilder. Ruim 400 jaar geleden schilderde hij een bevroren rivier vol mensen. In die tijd waren de winters vaak heel koud.",
    vragen:(()=>{ const v=[
        {v:"Wat zie je allemaal op het ijs?", uitleg:"Schaatsers, mensen op een slee, kinderen die spelen, iemand die valt, een paard met een slee. Zoek maar!"},
        {v:"Kun jij iemand vinden die valt?", uitleg:"Avercamp verstopte grappige dingen in zijn schilderij. Kijk goed: wie is er gevallen?"},
        {v:"Waarom zouden er zoveel mensen op het ijs zijn?", uitleg:"Als het water bevroren was, werd het ijs een weg en een feestplein tegelijk. Iedereen ging naar buiten."},
        {v:"Kijk naar achteren. Hoe laat de schilder zien dat dingen ver weg zijn?", uitleg:"Achteraan zijn de mensen kleiner en de kleuren lichter en vager. Zo lijkt het schilderij diep."}
      ]; return { g56:v.slice(0,3), g78:v }; })()
  },
  maak:{
    titel:"Aan de slag: een winterdag op het ijs!",
    stappen:{
      g56:["Teken een bevroren rivier of sloot, met bomen en huizen aan de kant.","Teken heel veel kleine mensjes: schaatsers, een slee, iemand die valt.","Teken ergens een kraampje waar warme erwtensoep wordt verkocht."],
      g78:["Teken een bevroren rivier of sloot met een horizon. Achteraan teken je alles kleiner en lichter.","Vul het ijs met kleine figuurtjes: schaatsers, sleeën, spelende kinderen.","Teken een koek-en-zopie: een kraampje met erwtensoep.","Verstop drie grappige details in je tekening. Laat een klasgenoot ze zoeken!"]
    },
    nodig:["Wit tekenpapier","Potlood","Fineliner","Kleurpotlood"],
    zeg:"Ik ben benieuwd wie de grappigste details verstopt.",
    voorbeeldAlt:"Voorbeeld: een kindertekening van een bevroren sloot met kleine schaatsers en een soepkraampje"
  }
};
