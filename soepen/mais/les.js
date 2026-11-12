/* ==========================================================================
   Soepdetective · MAÏSSOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/mais/img/.
   LET OP: de ingrediënten (speur.goed) zijn een AANNAME. Controleer ze op het etiket van Good Soup.
   Kunstwerk: de Corn Palace (Mitchell, VS). Muurschilderingen van maïskolven, elk jaar nieuw:
   alleen een link, geen afbeelding (auteursrecht op de ontwerpen en foto's).
   Opdracht bewust zonder eten: mozaïek van papier.
   ========================================================================== */
LESSEN.mais = {
  naam:"Maïssoep",
  mascotte:"mais",
  speurvraag:"Hoe wordt een maïskorrel popcorn?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"Maïssoorten"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // onderbouw: korte les op het digibord, terwijl de soep nog op tafel staat
    kleur:"geel",
    kleurspel:{ type:"zoek", items:[ {k:"banaan",goed:true}, {k:"broccoli",goed:false}, {k:"mais",goed:true}, {k:"tomaat",goed:false},
                                     {k:"aardbei",goed:false}, {k:"wortel",goed:false}, {k:"pompoen",goed:false}, {k:"paprika",goed:false} ] },
    smaak:{ goed:["zoet"], uitleg:"Maïs is van zichzelf een beetje zoet. Daarom proeft maïssoep zoet en zacht!" },
    // spellen: elk spel is een eigen dia, in deze volgorde. Spelvormen: volgorde, pluk, goedvoor, kleuren, sorteer, vormen, maakgezicht, tel, pop.
    spellen:[
      { type:"pop", naam:"Pop!", titel:"Pop! Maak popcorn!", korrel:"ob-korrel", popcorn:"ob-popcorn", aantal:6,
        start:"Tik op een maïskorrel in de pan… en luister: POP! Tel samen hoeveel popcorn we maken.",
        klaar:"Wat een popcorn! Alle korrels zijn gepopt.",
        slot:"Hoe zou dat komen, dat een korreltje zo knalt? (Er zit een druppeltje water in. Als het heet wordt, knalt de korrel open!)" },
      { type:"volgorde", naam:"Wat wordt het?", titel:"Van maïsplant tot popcorn",
        stappen:[ {img:"ob-plant", naam:"de maïsplant"}, {img:"ob-kolf", naam:"de maïskolf"},
                  {img:"ob-korrels", naam:"de korrels"}, {img:"ob-popcorn", naam:"de popcorn"} ],
        klaar:"Goed zo! Van een hoge plant naar een bakje popcorn.",
        start:"Wat komt er eerst? Kom maar tikken!",
        verder:"En wat komt daarna?",
        slot:"De maïsplant wordt heel hoog, wel hoger dan de juf! Wie heeft weleens een maïsveld gezien?" },
      { type:"kleuren", naam:"Maïs in alle kleuren", titel:"Maïs in alle kleuren!", ding:"maïskolf", lidwoord:"de",
        items:[ {img:"koppel-suikermais", kleur:"geel"}, {img:"koppel-blauw", kleur:"blauw"}, {img:"koppel-rood", kleur:"rood"},
                {img:"koppel-wit", kleur:"wit"}, {img:"koppel-paars", kleur:"paars"} ],
        klaar:"Goed zo! Geel, blauw, rood, wit en paars: allemaal maïs!",
        start:"Wist je dat maïs er in allerlei kleuren is? Welke kleur zoeken we? Wie weet waar hij is?",
        slot:"Welke kleur maïs zou jij willen proeven?" },
      { type:"goedvoor", naam:"Goed voor je…?", titel:"Waar is maïs goed voor?",
        opties:[ {lijf:"rennen", naam:"spelen en rennen", goed:true, uitleg:"Ja! Maïs geeft je energie. Daar kun je lekker van spelen en rennen."},
                 {lijf:"haar", naam:"je haar", goed:false, uitleg:"Nee, van maïs krijg je geen lang haar."},
                 {lijf:"oren", naam:"je oren", goed:false, uitleg:"Nee, je oren hebben niks aan maïs."} ],
        start:"Waar is maïs goed voor? Spelen en rennen, je haar of je oren? Tik op het plaatje!",
        slot:"Maïs geeft je energie. Laat maar zien: wie kan op de plaats rennen?" }
    ]
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["zoet","#F47B20","-5deg"],["geel","#B9520F","5deg"],["warm","#7650A6","-4deg"],["romig","#4F8F3A","4deg"],["zacht","#3B2B22","-3deg"],["glad","#F47B20","5deg"],["hartig","#7650A6","-5deg"],["dik","#3B2B22","4deg"]],
      g78:[["zoet","#F47B20","-5deg"],["geel","#B9520F","5deg"],["warm","#7650A6","-4deg"],["romig","#4F8F3A","4deg"],["zacht","#3B2B22","-3deg"],["glad","#F47B20","5deg"],["hartig","#7650A6","-5deg"],["dik","#3B2B22","4deg"],["fluweelzacht","#4F8F3A","-4deg"],["mild","#F47B20","3deg"],["vol","#7650A6","-3deg"],["zonnig","#B9520F","4deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Proef je het zoete van de maïs?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop.", g78:"Zes zitten erin, vijf niet. Let op: niet alles wat geel is, zit in de soep! Sleep of tik." },
    opgelost:"Opgelost! In de soep zitten maïs, ui, aardappel, knoflook, water en een snufje zout.",
    goed:["mais","ui","aardappel","knoflook","water","zout"],
    fout:["banaan","aardbei","broccoli","tomaat","pompoen"] },   // middenbouw en bovenbouw kiezen uit evenveel ingrediënten
  kern:{
    titel:"Hoe wordt een maïskorrel popcorn?",
    beeldAlt:"De detective-maïskolf kijkt verbaasd naar een pan waar popcorn uit springt",
    opties:["Door er suiker op te doen","Door het water in de korrel","Door hem te bevriezen"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["In elke popcornkorrel zit een piepklein druppeltje water, opgesloten in een harde schil.",
              "Als je de korrel verhit, wordt het water stoom. De stoom wil eruit, maar de schil is dicht… tot hij knalt: POP!",
              "Dat kan alleen met popmaïs: die heeft een extra harde schil."]
  },
  lichaam:{
    plaatje:"feitfabel",
    titel:{ g56:"Maïs helpt je lichaam bij twee dingen", g78:"Maïs en je lichaam: feit of fabel?" },
    onthoud:"Maïs geeft je energie om te spelen en te rennen. En er zitten vezels in: goed voor je buik.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpt maïs? Tik een plaatje aan.", opties:[
        {key:"rennen", naam:"Spelen en rennen", goed:true, uitleg:"Ja! Maïs geeft je energie. Daar kun je lang van spelen en rennen."},
        {key:"ogen",   naam:"Je ogen",          goed:true, uitleg:"Ja! In gele maïs zitten stofjes die goed zijn voor je ogen."},
        {key:"haar",   naam:"Lang haar",        goed:false, uitleg:"Nee, van maïs krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",      goed:false, uitleg:"Nee, je oren hebben niks aan extra maïs."},
        {key:"spieren",naam:"Sterke spieren",   goed:false, uitleg:"Niet echt. Voor spieren heb je vooral eiwit nodig, uit bonen, ei, vis of vlees."},
        {key:"afweer", naam:"Niet ziek worden", goed:false, uitleg:"Daar zijn andere groenten beter in, zoals broccoli en paprika."}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"Elk draadje aan een maïskolf hoort bij één korrel.", bak:"feit"},
          {naam:"Maïs is eigenlijk een soort gras.", bak:"feit"},
          {naam:"Popcorn knalt open door water in de korrel.", bak:"feit"},
          {naam:"Maïs komt oorspronkelijk uit Mexico.", bak:"feit"},
          {naam:"Van elke maïskorrel kun je popcorn maken.", bak:"fabel", uitleg:"Alleen popmaïs heeft een harde genoeg schil."},
          {naam:"Maïs groeit onder de grond.", bak:"fabel", uitleg:"Aan een hoge plant, vaak hoger dan 2 meter."}
        ]}
    }
  },
  koppel:{
    titel:"Ken jij deze maïs?",
    v:{ g56:"Maïs is er in veel soorten! Lees de hint, tik op het plaatje en daarna op de naam. Of sleep het plaatje naar de naam.",
        g78:"Acht soorten maïs! Lees de hints goed: vorm en kleur verraden welke maïs het is." },
    lijst:[
      {key:"suikermais", naam:"Suikermaïs", hint:"Geel en zoet. Die eet je van de kolf of uit blik."},
      {key:"minimais", naam:"Minimaïs", hint:"Een piepklein kolfje. Je eet hem helemaal op!"},
      {key:"blauw", naam:"Blauwe maïs", hint:"Donkerblauw, bijna zwart. Er worden blauwe chips van gemaakt."},
      {key:"bont", naam:"Bonte maïs", hint:"Elke korrel een andere kleur, net glimmende knikkers."},
      {key:"wit", naam:"Witte maïs", hint:"Wit tot lichtgeel, net parels."},
      {key:"rood", naam:"Rode maïs", hint:"Donkerrood, van boven tot onder."},
      {key:"paars", naam:"Paarse maïs", hint:"Paars. In Peru maken ze er een paarse drank van."},
      {key:"popmais", naam:"Popmaïs", hint:"Kleine, harde korrels. Hier maak je popcorn van."}
    ],
    g56:["suikermais","minimais","blauw","bont"],   // alleen deze bij de middenbouw
    goedZo:"Ja! Dat is de {naam}.",
    mis:"Nee, die past niet. Kijk nog eens naar de vorm en de kleur.",
    slot:"Super! Maïs is er in allerlei maten en kleuren."
  },
  quiz:{
    g56:[
      { v:"Aan een maïskolf zitten lange draadjes. Waar zijn die voor?", a:["Om warm te blijven","Elk draadje hoort bij één korrel","Om te kriebelen"], goed:1, img:"draadjes",
        weetje:"Elk draadje vangt stuifmeel op. Daarna groeit er aan het eind van dat draadje één maïskorrel." },
      { v:"Waar komt maïs oorspronkelijk vandaan?", a:["Uit Mexico","Uit Nederland","Uit China"], goed:0, img:"veld",
        weetje:"Maïs komt uit Mexico. Duizenden jaren geleden maakten mensen daar maïs van een wild gras." },
      { v:"Wat kun je allemaal van maïs maken?", a:["Popcorn, tortilla's en cornflakes","Alleen soep","Kaas en melk"], goed:0, img:"producten",
        weetje:"Van maïs maak je popcorn, tortilla's, cornflakes, chips en natuurlijk maïssoep!" }
    ],
    g78:[
      { v:"Aan een maïskolf zitten honderden draadjes. Waar zijn die voor?", a:["Ze beschermen tegen de kou","Elk draadje hoort bij één korrel","Ze lokken vogels"], goed:1, img:"draadjes",
        weetje:"Elk draadje vangt stuifmeel op. Pas dan kan er aan dat draadje een korrel groeien. Mist een draadje stuifmeel, dan krijg je een gat in de kolf." },
      { v:"Maïs is lang geleden gemaakt van een wild gras. Waar gebeurde dat?", a:["In Mexico","In Egypte","In Zweden"], goed:0, img:"veld",
        weetje:"Zo'n 9000 jaar geleden begonnen mensen in Mexico met een wild gras. Steeds bewaarden ze de beste zaden. Zo werd het maïs." },
      { v:"Wat kun je allemaal van maïs maken?", a:["Popcorn, tortilla's en cornflakes","Alleen veevoer","Kaas en melk"], goed:0, img:"producten",
        weetje:"Van maïs maak je popcorn, tortilla's, cornflakes en chips. Een groot deel van alle maïs wordt ook aan dieren gevoerd." }
    ]
  },
  galgje:{   // midden- en bovenbouw: komt vanzelf vóór Kijk-kunst. Lang woord uit de les, met tip en uitleg.
    g56:{ woord:"POPCORNKORREL", tip:"Als je deze verhit, knalt hij open.", uitleg:"Er zit een druppeltje water in dat stoom wordt: POP!" },
    g78:{ woord:"BIOSCOOPFILM", tip:"Hierbij eet je vaak een grote bak popcorn.", uitleg:"Popcorn is de bekendste snack in de bioscoop. Het wordt gemaakt van een speciaal soort maïs: pofmaïs." }
  },
  kunst:{
    titel:"Kijk-kunst: een paleis van maïs", werk:"De Corn Palace", maker:"wisselende kunstenaars, elk jaar nieuw", jaar:"sinds 1892", plek:"Mitchell, South Dakota (VS)",
    link:"https://en.wikipedia.org/wiki/Corn_Palace",
    linkUitleg:"Opent een pagina met foto's van de Corn Palace.",
    intro:"In Amerika staat een gebouw dat helemaal versierd is met maïs! Elk jaar komen er nieuwe muurschilderingen op, gemaakt van wel 275.000 maïskolven in allerlei kleuren.",
    vragen:{
      g56:[
        {v:"Wat zie je? Kun je zien dat het van maïs is?", uitleg:"De plaatjes op de muur zijn gemaakt van maïskolven in verschillende kleuren. Van ver lijkt het een schilderij!"},
        {v:"Welke kleuren zie je? Waar komen die kleuren vandaan?", uitleg:"Maïs is er in veel kleuren: geel, rood, bruin, paars, wit. Er is geen verf gebruikt!"},
        {v:"Waarom zouden ze de plaatjes elk jaar opnieuw maken?", uitleg:"De maïs verkleurt in de zon, en vogels eten ervan! Daarom komen er elk jaar nieuwe."}
      ],
      g78:[
        {v:"Wat zie je? Kun je zien dat het van maïs is?", uitleg:"De muurschilderingen zijn gemaakt van doorgezaagde maïskolven, vastgespijkerd op de muur."},
        {v:"Hoe weet je waar welke kleur moet komen?", uitleg:"Er is eerst een tekening gemaakt met een nummer per vakje, net als kleuren op nummer. Per nummer hoort één kleur kolf."},
        {v:"Waarom zouden ze de plaatjes elk jaar opnieuw maken?", uitleg:"De maïs verkleurt en vogels eten ervan. En elk jaar is er een nieuw thema."},
        {v:"Is dit kunst? Waarom wel of niet?", uitleg:"Bedenk het samen. Er is een ontwerp, kleur en vakmanschap. Maar het is ook een toeristische trekpleister. Mag dat samengaan?"}
      ]
    }
  },
  maak:{
    titel:"Aan de slag: een mozaïek in maïskleuren!",
    stappen:{
      g56:["Teken met potlood iets eenvoudigs: een maïskolf, een dier of een zon.","Scheur gekleurd papier in kleine snippers: geel, oranje, rood, bruin en paars.","Plak de snippers dicht tegen elkaar op je tekening, net als de maïskolven op de Corn Palace."],
      g78:["Maak een ontwerp op ruitjespapier: kleur elk vakje in of geef het een nummer.","Maak een kleurcode: 1 = geel, 2 = oranje, 3 = rood, enzovoort.","Scheur gekleurd papier in snippers en plak vakje voor vakje je mozaïek, precies volgens je code.","Kijk van een afstand: wordt je plaatje duidelijker als je verder weg staat?"]
    },
    nodig:["Gekleurd papier","Lijm","Potlood","Ruitjespapier (bovenbouw)"],
    zeg:"Ik ben benieuwd naar jouw maïsmozaïek!",
    voorbeeldAlt:"Voorbeeld: een mozaïek van gescheurde papiersnippers in geel, oranje, rood en paars, in de vorm van een maïskolf"
  }
};
