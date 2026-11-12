/* ==========================================================================
   Soepdetective · WORTELSOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/wortel/img/.
   ========================================================================== */
LESSEN.wortel = {
  naam:"Wortelsoep",
  mascotte:"wortel",            // ingrediënt dat als vriendje in de tekstballonnen staat (img/ingredienten/)
  panRand:35,   // hoogte van de rand in pan.webp (in %), voor het overkoken bij galgje
  speurvraag:"Kun je van wortels beter in het donker zien?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"Wortelrassen"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},   // na de quiz: feit of fabel werkt als overhoring
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // groep 1-2: korte les op het digibord, terwijl de soep nog op tafel staat
    kleur:"oranje",
    smaak:{ goed:["zoet"], uitleg:"Wortels zijn van zichzelf een beetje zoet. Daarom proeft wortelsoep zoet! Er gaat ook een snufje zout in." },
    // spellen: elk spel is een eigen dia, in deze volgorde. Spelvormen: volgorde, pluk, goedvoor, kleuren, sorteer.
    spellen:[
      { type:"volgorde", naam:"Hoe groeit een wortel?", titel:"Hoe groeit een wortel?",
        stappen:[ {img:"ob-groei-1", naam:"het zaadje"}, {img:"ob-groei-2", naam:"het sprietje"},
                  {img:"ob-groei-3", naam:"het plantje"}, {img:"ob-groei-4", naam:"de wortel"} ],
        klaar:"Goed zo! Uit een piepklein zaadje groeit een grote wortel.",
        start:"Een wortel groeit onder de grond. Wat komt er eerst? Kom maar tikken!",
        verder:"En wat komt daarna? Kijk goed: wat wordt groter?",
        slot:"Een wortel groeit onder de grond, daar bewaart hij zijn suiker. Daarom is hij zo zoet! Hoe lang zou het duren voordat hij zo groot is? (Ongeveer 3 maanden.)" },
      { type:"volgorde", naam:"Van lang naar kort", titel:"Zet de wortels van lang naar kort",
        stappen:[ {ing:"wortel", schaal:1, naam:"de langste"}, {ing:"wortel", schaal:.76, naam:"een lange"},
                  {ing:"wortel", schaal:.54, naam:"een korte"}, {ing:"wortel", schaal:.34, naam:"de kortste"} ],
        klaar:"Goed zo! Van de langste naar de kortste wortel.",
        start:"Welke wortel is het langst? Kom maar tikken!",
        verder:"En welke wortel is nu het langst?",
        slot:"Wortels zijn niet allemaal even lang. Wie is de langste van de klas? En wie heeft de kortste vinger?" },
      { type:"kleuren", naam:"Wortels in alle kleuren", titel:"Wortels in alle kleuren!",
        items:[ {img:"koppel-nantes", kleur:"oranje"}, {img:"koppel-purplehaze", kleur:"paars"}, {img:"koppel-yellowstone", kleur:"geel"},
                {img:"koppel-lunarwhite", kleur:"wit"}, {img:"koppel-atomicred", kleur:"rood"} ],
        klaar:"Goed zo! Oranje, paars, geel, wit en rood: allemaal wortels!",
        start:"Wist je dat er wortels zijn in allerlei kleuren? Welke kleur moeten we zoeken? Wie weet waar hij is?",
        slot:"Oranje, paars, geel, wit en rood: allemaal wortels! Welke kleur wortel zou jij willen proeven?" },
      { type:"goedvoor", naam:"Goed voor je…?", titel:"Waar is een wortel goed voor?",
        opties:[ {lijf:"ogen", naam:"je ogen", goed:true,  uitleg:"Ja! Wortels zijn goed voor je ogen. Zo kun je goed kijken."},
                 {lijf:"haar", naam:"je haar", goed:false, uitleg:"Nee, van wortels krijg je geen lang haar."},
                 {lijf:"oren", naam:"je oren", goed:false, uitleg:"Nee, je oren hebben niks aan wortels."} ],
        start:"Waar is een wortel goed voor? Je ogen, je haar of je oren? Tik op het plaatje!",
        slot:"Wortels zijn goed voor je ogen. Laat maar eens zien hoe goed jij kunt kijken: wat zie je allemaal in de klas?" }
    ]
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["zoet","#F47B20","-5deg"],["glad","#4F8F3A","5deg"],["warm","#7650A6","-4deg"],["dik","#3B2B22","4deg"],["hartig","#F47B20","-3deg"],["romig","#4F8F3A","5deg"],["pittig","#7650A6","-5deg"],["zacht","#3B2B22","4deg"]],
      g78:[["zoet","#F47B20","-5deg"],["glad","#4F8F3A","5deg"],["warm","#7650A6","-4deg"],["dik","#3B2B22","4deg"],["hartig","#F47B20","-3deg"],["romig","#4F8F3A","5deg"],["pittig","#7650A6","-5deg"],["zacht","#3B2B22","4deg"],["kruidig","#D1352B","3deg"],["fris","#4F8F3A","-4deg"],["aards","#B9520F","5deg"],["fluweelzacht","#7650A6","-3deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Komt het door de smaak, de kleur of hoe hij in je mond voelt?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop.", g78:"Zeven zitten erin, vijf niet. Let op: er liggen twee soorten aardappel! Sleep of tik." },
    opgelost:"Opgelost! In de soep zitten wortel, zoete aardappel, ui, bleekselderij, knoflook, water en een snufje zout.",
    goed:["wortel","ui","bleekselderij","zoeteaardappel","knoflook","zout","water"],
    fout:["banaan","broccoli","aardbei","gember","aardappel"] },   // middenbouw en bovenbouw kiezen uit evenveel ingrediënten
  kern:{
    titel:"Kun je van wortels beter in het donker zien?",
    beeldAlt:"De detective-wortel onderzoekt een wortel met een vergrootglas",
    opties:["Ja, veel beter","Een beetje","Nee, niet beter"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["Wortels zitten vol met een oranje superstofje. Daar maakt je lichaam vitamine A van. En die heb je nodig om goed te zien, ook als het een beetje donker is.",
              "Maar let op: eet je een hele zak wortels, dan krijg je géén nachtkijker-ogen. Een kat word je er niet van!",
              "Dus: wortels houden je ogen gezond. Handig, maar geen toverkracht."]
  },
  lichaam:{
    plaatje:"feitfabel",   // illustratie bij feit of fabel (een plaatje uit soepen/wortel/img/)
    titel:{ g56:"Wortels helpen je lichaam bij twee dingen", g78:"Wortels en je lichaam: feit of fabel?" },
    onthoud:"Wortels houden je ogen gezond en helpen je om niet ziek te worden. Handig, maar geen toverkracht.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpen wortels? Tik een plaatje aan.", opties:[
        {key:"ogen",   naam:"Je ogen",      goed:true,  uitleg:"Ja! Van het oranje stofje maakt je lichaam vitamine A. Die heb je nodig om goed te zien."},
        {key:"afweer", naam:"Niet ziek worden", goed:true, uitleg:"Ja! Vitamine A helpt je lichaam ook om ziektes buiten de deur te houden."},
        {key:"haar",   naam:"Lang haar",    goed:false, uitleg:"Nee, van wortels krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",  goed:false, uitleg:"Nee, je oren hebben niks aan extra wortels."},
        {key:"spieren",naam:"Sterke spieren",goed:false,uitleg:"Niet echt. Voor spieren heb je vooral eiwit nodig, uit bonen, ei, vis of vlees."},
        {key:"rennen", naam:"Harder rennen", goed:false, uitleg:"Nee, je wordt er niet sneller van. Wel gezonder!"}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"Wortels zitten vol met een oranje kleurstof: bètacaroteen.", bak:"feit"},
          {naam:"Je lichaam maakt van bètacaroteen vitamine A.", bak:"feit"},
          {naam:"Heb je te weinig vitamine A, dan zie je slechter in het donker.", bak:"feit"},
          {naam:"Hoe meer wortels je eet, hoe beter je in het donker ziet.", bak:"fabel", uitleg:"Heb je genoeg, dan helpt extra niet meer."},
          {naam:"Van een zak wortels per dag krijg je nachtkijker-ogen, net als een kat.", bak:"fabel"},
          {naam:"Konijnen eten in het echt vooral wortels.", bak:"fabel", uitleg:"Ze eten vooral hooi."}
        ]}
    }
  },
  koppel:{
    titel:"Ken jij deze wortels?",
    v:{ g56:"Elke wortel heeft een eigen naam. Lees de hint, tik op het plaatje en daarna op de naam. Of sleep het plaatje naar de naam.",
        g78:"Acht wortelrassen! Lees de hints goed: vorm en kleur verraden welke wortel het is. Tik of sleep het plaatje naar de goede naam." },
    lijst:[
      {key:"nantes", naam:"Nantes", hint:"Recht als een stok, met een stompe punt. Lekker zoet!"},
      {key:"chantenay", naam:"Chantenay", hint:"Kort en dik. Hij groeit zelfs in harde grond."},
      {key:"parijsemarkt", naam:"Parijse Markt", hint:"Zo rond als een golfbal! Past in een bloempot."},
      {key:"amsterdamsebak", naam:"Amsterdamse Bak", hint:"Een echte Nederlander: klein, dun en snel klaar."},
      {key:"purplehaze", naam:"Purple Haze", hint:"Paars van buiten, oranje vanbinnen. Verrassing!"},
      {key:"atomicred", naam:"Atomic Red", hint:"Rood door hetzelfde kleurstofje als in tomaten."},
      {key:"yellowstone", naam:"Yellowstone", hint:"Zo geel als de zon en lekker zoet."},
      {key:"lunarwhite", naam:"Lunar White", hint:"Bijna geen kleurstof, daarom is hij wit."}
    ],
    g56:["parijsemarkt","purplehaze","atomicred","lunarwhite"],   // alleen deze bij groep 5-6
    goedZo:"Ja! Dat is de {naam}.",                                    // {naam} wordt ingevuld
    mis:"Nee, die past niet. Kijk nog eens naar de vorm en de kleur.",
    slot:"Super! Wortels zijn er in allerlei vormen en kleuren."
  },
  quiz:{
    g56:[
      { v:"Welk stuk van de plant eet je als je een wortel eet?", a:["Het stuk onder de grond","De bloem","De blaadjes"], goed:0, img:"voorraadkast",
        weetje:"Je eet het stuk van de plant dat onder de grond zit. Daar bewaart de plant zijn suiker, net als in een geheime voorraadkast. Daarom is een wortel zo lekker zoet!" },
      { v:"Hoe lang duurt het voordat een wortel dik genoeg is voor de soep?", a:["3 dagen","3 maanden","3 jaar"], goed:1, img:"groei",
        weetje:"Eerst een piepklein zaadje. Dan een sprietje. Dan een plantje. Na zo'n 3 maanden is de wortel dik genoeg voor jouw soep!" },
      { v:"Wat eet een konijn het allermeest?", a:["Wortels","Sla","Hooi"], goed:2, img:"konijn",
        weetje:"In tekenfilms knabbelen konijnen de hele dag op wortels. Maar echt? Voor een konijn is een wortel snoep. Hooi is zijn échte eten!" }
    ],
    g78:[
      { v:"Waarom smaakt een wortel zoet?", a:["Boeren spuiten er suiker op","De plant bewaart er zijn suiker in","Hij zuigt suiker op uit de grond"], goed:1, img:"voorraadkast",
        weetje:"Je eet het stuk van de plant dat onder de grond zit. Daar bewaart de plant zijn suiker, net als in een geheime voorraadkast. Daarom is een wortel zo lekker zoet!" },
      { v:"Hoe lang groeit een wortel van zaadje tot oogst?", a:["Ongeveer 3 weken","Ongeveer 3 maanden","Ongeveer een jaar"], goed:1, img:"groei",
        weetje:"Eerst een piepklein zaadje. Dan een sprietje. Dan een plantje. Na zo'n 3 maanden is de wortel dik genoeg voor jouw soep!" },
      { v:"Waarom krijgt een konijn maar af en toe een wortel?", a:["Er zit veel suiker in","Hij wordt er blind van","Wortels zijn giftig voor konijnen"], goed:0, img:"konijn",
        weetje:"Voor een konijn is een wortel snoep. Hooi is zijn échte eten!" }
    ]
  },
  galgje:{   // midden- en bovenbouw: komt vanzelf vóór Kijk-kunst. Lang woord uit de les, met tip en uitleg.
    g56:{ woord:"VITAMINE", tip:"Wortels helpen je lichaam om dit te maken. Goed voor je ogen!", uitleg:"Van het oranje stofje in wortels maakt je lichaam vitamine A." },
    g78:{ woord:"GROENTEMARKT", tip:"Hier kocht iedereen vroeger zijn wortels: buiten, tussen de kraampjes.", uitleg:"Op de groentemarkt verkochten boeren hun wortels en kool. Op het volgende kunstwerk zie je er een van ruim 350 jaar geleden!" }
  },
  kunst:{
    titel:"Kijk-kunst: De groentemarkt", werk:"De groentemarkt", maker:"Hendrick Sorgh", jaar:"1664", plek:"Rijksmuseum, Amsterdam",
    intro:"Geschilderd door Hendrick Sorgh, in 1664. Dat is al ruim 350 jaar geleden!",
    vragen:{
      g56:[
        {v:"Wat zie je allemaal? Kun jij de wortels vinden?", uitleg:"Vooraan liggen wortels, kool en pompoenen. Smullen!"},
        {v:"Wie zijn de mensen? Wat doen ze?", uitleg:"Kijk naar hun handen en gezichten. Wie verkoopt er groente, en wie komt er kopen?"},
        {v:"Waar zou deze markt zijn?", uitleg:"Het is een markt aan een gracht, in een Nederlandse stad. Zie jij het schip en de huizen?"}
      ],
      g78:[
        {v:"Wat zie je allemaal? Kun jij de wortels vinden?", uitleg:"Vooraan liggen wortels, kool en pompoenen. Smullen!"},
        {v:"Wie zijn de mensen? Wat doen ze?", uitleg:"Kijk naar hun handen en gezichten. Wie verkoopt er groente, en wie komt er kopen?"},
        {v:"Waar zou deze markt zijn?", uitleg:"Het is een markt aan een gracht, in een Nederlandse stad. Zie jij het schip en de huizen?"},
        {v:"Waarom zou de schilder de groente zo groot vooraan hebben geschilderd?", uitleg:"Bedenk het samen: waar kijk je als eerste naar? Wat wilde de schilder dat jij zag?"}
      ]
    }
  },
  maak:{
    titel:"Aan de slag: de wortelfamilie!",
    stappen:{
      g56:["Teken met vetkrijt op zwart papier een wortelfamilie: oranje, paars, geel en wit.","Geef elke wortel een gezicht en een grappige naam.","Waar zijn de wortels en wat zijn ze aan het doen?"],
      g78:["Teken met vetkrijt op zwart papier een wortelfamilie: oranje, paars, geel en wit.","Geef elke wortel een gezicht en een grappige naam.","Waar zijn de wortels en wat zijn ze aan het doen?","Schrijf bij elke wortel één weetje dat je vandaag hebt geleerd."]
    },
    nodig:["Vetkrijt","Zwart papier"],
    zeg:"Ik ben benieuwd hoe jouw wortelfamilie eruitziet!",
    voorbeeldAlt:"Voorbeeldtekening: vier wortels met gezichtjes in vetkrijt op zwart papier"
  }
};
