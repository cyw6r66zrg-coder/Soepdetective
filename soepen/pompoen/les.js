/* ==========================================================================
   Soepdetective · POMPOENSOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/pompoen/img/.
   LET OP: de ingrediënten (speur.goed) zijn een AANNAME op basis van gangbare recepten.
   Controleer ze op het etiket van Good Soup voordat de soep op klaar:true gaat.
   Kunstwerk: Yayoi Kusama, Pumpkin (1994), Naoshima. Auteursrechtelijk beschermd: alleen een link, geen afbeelding.
   ========================================================================== */
LESSEN.pompoen = {
  naam:"Pompoensoep",
  mascotte:"pompoen",
  speurvraag:"Hoe zwaar kan een pompoen worden?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"Pompoensoorten"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},   // na de quiz: feit of fabel werkt als overhoring
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // onderbouw: korte les op het digibord, terwijl de soep nog op tafel staat
    kleur:"oranje",
    smaak:{ goed:["zoet"], uitleg:"Pompoen is van zichzelf een beetje zoet, net als wortel. Proef je het?" },
    // spellen: elk spel is een eigen dia, in deze volgorde. Spelvormen: volgorde, pluk, goedvoor, kleuren, sorteer, vormen, maakgezicht.
    spellen:[
      { type:"vormen", naam:"Vormen in de pompoen", titel:"Welke vormen zie je in de pompoen?", basis:"ob-pompoen",
        vormen:[ {vorm:"driehoek", x:30, y:36, s:17}, {vorm:"rondje", x:70, y:36, s:16}, {vorm:"hartje", x:50, y:55, s:13},
                 {vorm:"ster", x:31, y:72, s:16},     {vorm:"vierkant", x:69, y:72, s:14} ],
        klaar:"Goed zo! Je hebt alle vormen gevonden.",
        start:"In deze pompoen zijn vormen gesneden. Lees de vraag voor: hoe ziet die vorm eruit? Teken hem samen in de lucht. Wie weet waar hij in de pompoen zit?",
        slot:"Driehoek, rondje, hartje, ster en vierkant! Welke vorm zie jij in de klas?" },
      { type:"maakgezicht", naam:"Maak een lampion", titel:"Maak je eigen pompoenlampion!", basis:"ob-pompoen",
        plekken:[ {id:"ogen", emo:"👀", keuzes:["driehoek","rondje","ster","hartje"]},
                  {id:"neus", emo:"👃", keuzes:["driehoek","rondje","hartje","vierkant"]},
                  {id:"mond", emo:"👄", keuzes:["maan","vierkant","rondje","ster"]} ],
        start:"Welke vorm kiezen we voor de ogen? En voor de neus en de mond? Kies samen!",
        slot:"Wat een mooie lampion! Welke vormen hebben we gekozen?" },
      { type:"goedvoor", naam:"Goed voor je…?", titel:"Waar is een pompoen goed voor?",
        opties:[ {lijf:"ogen", naam:"je ogen", goed:true,  uitleg:"Ja! Pompoen is goed voor je ogen, net als wortel. Daarom zijn ze allebei oranje!"},
                 {lijf:"haar", naam:"je haar", goed:false, uitleg:"Nee, van pompoen krijg je geen lang haar."},
                 {lijf:"oren", naam:"je oren", goed:false, uitleg:"Nee, je oren hebben niks aan pompoen."} ],
        start:"Waar is een pompoen goed voor? Je ogen, je haar of je oren? Tik op het plaatje!",
        slot:"Pompoen is goed voor je ogen. Welke andere oranje groente kennen we die ook goed is voor je ogen? (De wortel!)" }
    ]
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["zoet","#F47B20","-5deg"],["romig","#4F8F3A","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["dik","#F47B20","-3deg"],["zacht","#4F8F3A","5deg"],["hartig","#7650A6","-5deg"],["oranje","#3B2B22","4deg"]],
      g78:[["zoet","#F47B20","-5deg"],["romig","#4F8F3A","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["dik","#F47B20","-3deg"],["zacht","#4F8F3A","5deg"],["hartig","#7650A6","-5deg"],["fluweelzacht","#3B2B22","4deg"],["kruidig","#B9520F","-4deg"],["vol","#7650A6","3deg"],["mild","#4F8F3A","-3deg"],["herfstig","#F47B20","4deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Proef je het zoete van de pompoen? En hoe voelt hij in je mond?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop.", g78:"Zes zitten erin, vijf niet. Let op: niet alles wat oranje of rood is, zit in de soep! Sleep of tik." },
    opgelost:"Opgelost! In de soep zitten pompoen, ui, wortel, knoflook, water en een snufje zout.",
    goed:["pompoen","ui","wortel","knoflook","water","zout"],
    fout:["banaan","aardbei","broccoli","tomaat","paprika"] },   // middenbouw en bovenbouw kiezen uit evenveel ingrediënten
  kern:{
    titel:"Hoe zwaar kan een pompoen worden?",
    beeldAlt:"De detective-pompoen kijkt verbaasd naar een reuzenpompoen op een weegschaal",
    opties:["Zo zwaar als een hond","Zo zwaar als een koe","Zo zwaar als een auto"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["De zwaarste pompoen ooit woog 1247 kilo! Dat is zwaarder dan een kleine auto.",
              "Hij werd in 2023 gekweekt in Amerika. De kweker gaf hem elke dag heel veel water.",
              "Gewone pompoenen in de winkel wegen 1 tot 5 kilo. Daar kun je genoeg soep van maken!"]
  },
  lichaam:{
    plaatje:"feitfabel",   // illustratie bij feit of fabel (een plaatje uit soepen/pompoen/img/)
    titel:{ g56:"Pompoen helpt je lichaam bij twee dingen", g78:"Pompoen en je lichaam: feit of fabel?" },
    onthoud:"Pompoen is goed voor je ogen en helpt je om niet ziek te worden, net als wortel.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpt pompoen? Tik een plaatje aan.", opties:[
        {key:"ogen",   naam:"Je ogen",        goed:true,  uitleg:"Ja! Pompoen zit vol oranje kleurstof, net als wortel. Daar maakt je lichaam vitamine A van."},
        {key:"afweer", naam:"Niet ziek worden", goed:true, uitleg:"Ja! Vitamine A helpt je lichaam ook om ziektes buiten de deur te houden."},
        {key:"haar",   naam:"Lang haar",      goed:false, uitleg:"Nee, van pompoen krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",    goed:false, uitleg:"Nee, je oren hebben niks aan extra pompoen."},
        {key:"spieren",naam:"Sterke spieren", goed:false, uitleg:"Niet echt. Voor spieren heb je vooral eiwit nodig, uit bonen, ei, vis of vlees."},
        {key:"rennen", naam:"Harder rennen",  goed:false, uitleg:"Nee, je wordt er niet sneller van. Wel gezonder!"}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"Een pompoen is familie van de komkommer.", bak:"feit"},
          {naam:"Pompoen is oranje door bètacaroteen, net als wortel.", bak:"feit"},
          {naam:"Je lichaam maakt van bètacaroteen vitamine A.", bak:"feit"},
          {naam:"De zwaarste pompoen ooit woog meer dan 1000 kilo.", bak:"feit", uitleg:"Hij woog 1247 kilo (2023)."},
          {naam:"Pompoenpitten kun je niet eten.", bak:"fabel", uitleg:"Geroosterd zijn ze lekker en gezond."},
          {naam:"Pompoenen groeien onder de grond.", bak:"fabel", uitleg:"Ze groeien aan een lange rank, op de grond."}
        ]}
    }
  },
  koppel:{
    titel:"Ken jij deze pompoenen?",
    v:{ g56:"Elke pompoen heeft een eigen naam. Lees de hint, tik op het plaatje en daarna op de naam. Of sleep het plaatje naar de naam.",
        g78:"Acht pompoensoorten! Lees de hints goed: vorm en kleur verraden welke pompoen het is. Tik of sleep het plaatje naar de goede naam." },
    lijst:[
      {key:"halloween", naam:"Halloweenpompoen", hint:"Groot, rond en knaloranje. Ideaal om uit te hollen!"},
      {key:"flespompoen", naam:"Flespompoen", hint:"Lichtbruin en gevormd als een fles of een peer."},
      {key:"patisson", naam:"Patisson", hint:"Plat met een golvende rand, net een vliegende schotel."},
      {key:"tulband", naam:"Turkse tulband", hint:"Lijkt op een hoed met een knop erop. Rood met groen."},
      {key:"hokkaido", naam:"Hokkaido", hint:"Klein, rond en oranje. De schil kun je mee-eten!"},
      {key:"spaghetti", naam:"Spaghettipompoen", hint:"Geel en ovaal. Vanbinnen zit hij vol slierten!"},
      {key:"muskaat", naam:"Muskaatpompoen", hint:"Groot en plat, met diepe ribbels. Bruin-oranje."},
      {key:"hubbard", naam:"Blauwe Hubbard", hint:"Blauwgrijs van buiten, oranje vanbinnen."}
    ],
    g56:["halloween","flespompoen","patisson","tulband"],   // alleen deze bij de middenbouw
    goedZo:"Ja! Dat is de {naam}.",
    mis:"Nee, die past niet. Kijk nog eens naar de vorm en de kleur.",
    slot:"Super! Pompoenen zijn er in allerlei vormen en kleuren."
  },
  quiz:{
    g56:[
      { v:"Waar groeit een pompoen?", a:["Onder de grond","Aan een lange rank, op de grond","Hoog in een boom"], goed:1, img:"rank",
        weetje:"Een pompoen groeit aan een lange slingerplant: een rank. De pompoen ligt op de grond en wordt elke dag een beetje dikker." },
      { v:"Welke kleuren kunnen pompoenen hebben?", a:["Alleen oranje","Oranje, geel, groen, wit en blauw","Alleen groen"], goed:1, img:"kleuren",
        weetje:"Pompoenen zijn er in heel veel kleuren: oranje, geel, groen, wit en zelfs blauwgrijs. En ook in heel veel vormen!" },
      { v:"Wat zit er vanbinnen in een pompoen?", a:["Sap, net als in een sinaasappel","Pitten en draadjes","Niks, hij is hol"], goed:1, img:"binnen",
        weetje:"Vanbinnen zitten heel veel pitten tussen sliertige draadjes. Geroosterd kun je de pitten opeten!" }
    ],
    g78:[
      { v:"Bij welke plantenfamilie hoort de pompoen?", a:["De familie van de komkommer","De familie van de appel","De familie van de aardappel"], goed:0, img:"rank",
        weetje:"De pompoen is familie van de komkommer, de courgette en de meloen. Ze groeien allemaal aan een rank." },
      { v:"Onderzoekers vonden heel oude pompoenpitten in Mexico. Hoe oud waren die ongeveer?", a:["Ongeveer 100 jaar","Ongeveer 1000 jaar","Ongeveer 10.000 jaar"], goed:2, img:"binnen",
        weetje:"De oudste pompoenpitten zijn zo'n 10.000 jaar oud. Pompoenen komen oorspronkelijk uit Midden- en Zuid-Amerika." },
      { v:"Wortels en pompoenen zijn allebei oranje. Waar komt die kleur vandaan?", a:["Van bètacaroteen","Van de zon","Van oranje regenwater"], goed:0, img:"kleuren",
        weetje:"Bètacaroteen is een oranje kleurstofje. Je lichaam maakt er vitamine A van, en dat is goed voor je ogen." }
    ]
  },
  galgje:{   // midden- en bovenbouw: komt vanzelf vóór Kijk-kunst. Lang woord uit de les, met tip en uitleg.
    g56:{ woord:"WEEGSCHAAL", tip:"Weet je nog, de speurvraag? Hiermee zie je hoe zwaar iets is.", uitleg:"De zwaarste pompoenen zijn zo zwaar dat er een extra grote weegschaal nodig is!" },
    g78:{ woord:"KOMKOMMERFAMILIE", tip:"De plantenfamilie van de pompoen.", uitleg:"Pompoen, komkommer, courgette en meloen zijn familie van elkaar." }
  },
  kunst:{
    // Kusama (1929-2026): auteursrecht tot 2096. Daarom tonen we het werk niet zelf, maar openen we de officiële pagina.
    titel:"Kijk-kunst: Yayoi Kusama", werk:"Pumpkin (Pompoen)", maker:"Yayoi Kusama", jaar:"1994", plek:"eiland Naoshima, Japan",
    link:"https://benesse-artsite.jp/en/story/20210611-1661.html",
    linkUitleg:"Opent de website van Benesse Art Site Naoshima, waar de pompoen staat.",
    intro:"Yayoi Kusama was een beroemde kunstenaar uit Japan. Ze hield heel erg van stippen én van pompoenen. Deze grote gele pompoen staat aan zee, op een eiland in Japan.",
    vragen:{
      g56:[
        {v:"Wat zie je? Wat valt je als eerste op?", uitleg:"Een grote gele pompoen vol zwarte stippen, op een pier aan zee."},
        {v:"Kijk naar de stippen. Zijn ze allemaal even groot?", uitleg:"Nee! Bovenaan zijn ze klein, in het midden worden ze groter. Zo lijkt de pompoen extra rond."},
        {v:"Hoe groot denk je dat de pompoen is? Groter dan jij?", uitleg:"Hij is ongeveer 2 meter hoog: groter dan een volwassene!"}
      ],
      g78:[
        {v:"Wat zie je? Wat valt je als eerste op?", uitleg:"Een grote gele pompoen vol zwarte stippen, op een pier aan zee."},
        {v:"Kijk naar de stippen. Zijn ze allemaal even groot? Wat doet dat met de vorm?", uitleg:"Ze worden groter en kleiner. Daardoor lijkt de pompoen bol en rond, net als een echte."},
        {v:"Kusama zei dat pompoenen haar aan vroeger deden denken. Waarom zou een kunstenaar steeds hetzelfde onderwerp kiezen?", uitleg:"Haar familie had een kwekerij. Ze tekende als kind al pompoenen, en bleef dat haar hele leven doen."},
        {v:"In 2021 sleurde een tyfoon de pompoen de zee in. Er kwam een nieuwe. Waarom zouden mensen hem zo graag terug wilden?", uitleg:"Hij was het symbool van het eiland geworden. Mensen reizen van ver om hem te zien."}
      ]
    }
  },
  maak:{
    titel:"Aan de slag: een stippenpompoen!",
    stappen:{
      g56:["Teken een grote pompoen op geel papier en knip hem uit.","Maak zwarte stippen: druk met de achterkant van een potlood of een kurk in zwarte verf.","Maak bovenaan kleine stippen en in het midden grote. Zie je hoe rond je pompoen wordt?"],
      g78:["Teken een grote pompoen op geel papier en knip hem uit.","Maak zwarte stippen met een kurk, een dop of een penseel.","Laat de stippen groter en kleiner worden, zodat je pompoen bol lijkt, net als bij Kusama.","Bedenk: wat is jouw lievelingsvorm? Maak een tweede pompoen met die vorm in plaats van stippen."]
    },
    nodig:["Geel papier","Zwarte verf","Kurk of potlood","Schaar"],
    zeg:"Ik ben benieuwd hoe rond jij je pompoen kunt laten lijken!",
    voorbeeldAlt:"Voorbeeld: een gele papieren pompoen met zwarte stippen in verschillende maten"
  }
};
