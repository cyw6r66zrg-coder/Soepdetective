/* ==========================================================================
   Soepdetective · BROCCOLISOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/broccoli/img/.
   LET OP: de ingrediënten (speur.goed) zijn een AANNAME. Controleer ze op het etiket van Good Soup.
   Kunstwerk: Monira Al Qadiri, Romanesco Dream (2018), Via Nova College Utrecht.
   Auteursrechtelijk beschermd: alleen een link, geen afbeelding.
   ========================================================================== */
LESSEN.broccoli = {
  naam:"Broccolisoep",
  mascotte:"broccoli",
  speurvraag:"Is broccoli eigenlijk een bloem?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"De koolfamilie"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},   // na de quiz: feit of fabel werkt als overhoring
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // onderbouw: korte les op het digibord, terwijl de soep nog op tafel staat
    kleur:"groen",
    smaak:{ goed:["zout"], uitleg:"Broccolisoep is hartig: er gaat een snufje zout in. En proef je ook het frisse, groene smaakje van de broccoli?" },
    // spellen: elk spel is een eigen dia, in deze volgorde. Spelvormen: volgorde, pluk, goedvoor, kleuren, sorteer, vormen, maakgezicht, tel.
    spellen:[
      { type:"volgorde", naam:"Van groot naar klein", titel:"Zet de broccoli van groot naar klein",
        stappen:[ {img:"ob-broccoli", schaal:1, naam:"de hele broccoli"}, {img:"ob-roosje", schaal:.78, naam:"een grote roos"},
                  {img:"ob-roosje", schaal:.55, naam:"een klein roosje"}, {img:"ob-roosje", schaal:.34, naam:"een piepklein roosje"} ],
        klaar:"Goed zo! En zie je het? Elk stukje lijkt weer op een boompje.",
        start:"Een broccoli bestaat uit allemaal kleine boompjes. Welke is het grootst? Kom maar tikken!",
        verder:"En welke is nu het grootst?",
        slot:"Hoe klein kun je een broccoli maken? Elk stukje blijft op een boompje lijken. Wie heeft weleens een broccolibos gezien op zijn bord?" },
      { type:"tel", naam:"Hoeveel roosjes?", titel:"Hoeveel roosjes zijn het?", roosje:"ob-roosje",
        rondes:[3,5,4],
        start:"De broccoli valt uit elkaar in roosjes! Tel samen hardop mee. Tik op elk roosje.",
        slot:"Goed geteld! Hoeveel roosjes zou er op jouw bord liggen?" },
      { type:"goedvoor", naam:"Goed voor je…?", titel:"Waar is broccoli goed voor?",
        opties:[ {lijf:"afweer", naam:"niet ziek worden", goed:true, uitleg:"Ja! In broccoli zitten veel vitamientjes. Die helpen je lijf om niet ziek te worden."},
                 {lijf:"haar", naam:"je haar", goed:false, uitleg:"Nee, van broccoli krijg je geen lang haar."},
                 {lijf:"oren", naam:"je oren", goed:false, uitleg:"Nee, je oren hebben niks aan broccoli."} ],
        start:"Waar is broccoli goed voor? Niet ziek worden, je haar of je oren? Tik op het plaatje!",
        slot:"Broccoli helpt je lijf om niet ziek te worden. Welke groene groente eet jij weleens?" }
    ]
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["groen","#4F8F3A","-5deg"],["hartig","#F47B20","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["fris","#4F8F3A","-3deg"],["romig","#F47B20","5deg"],["zacht","#7650A6","-5deg"],["zout","#3B2B22","4deg"]],
      g78:[["groen","#4F8F3A","-5deg"],["hartig","#F47B20","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["fris","#4F8F3A","-3deg"],["romig","#F47B20","5deg"],["zacht","#7650A6","-5deg"],["zout","#3B2B22","4deg"],["bitter","#B9520F","-4deg"],["kruidig","#7650A6","3deg"],["mild","#4F8F3A","-3deg"],["vol","#F47B20","4deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Proef je de broccoli? Is hij een beetje bitter of juist zacht?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop.", g78:"Zes zitten erin, vijf niet. Let op: niet alles wat groen is, zit in de soep! Sleep of tik." },
    opgelost:"Opgelost! In de soep zitten broccoli, ui, aardappel, knoflook, water en een snufje zout.",
    goed:["broccoli","ui","aardappel","knoflook","water","zout"],
    fout:["banaan","aardbei","tomaat","basilicum","pompoen"] },   // middenbouw en bovenbouw kiezen uit evenveel ingrediënten
  kern:{
    titel:"Is broccoli eigenlijk een bloem?",
    beeldAlt:"De detective-broccoli kijkt verbaasd naar een broccoliplant met gele bloemetjes",
    opties:["Nee, het is een blad","Ja, het zijn bloemknoppen","Nee, het is een wortel"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["Ja! De groene bolletjes van broccoli zijn bloemknoppen: bloemetjes die nog niet open zijn.",
              "Laat je broccoli te lang staan, dan gaan de knopjes open. Dan komen er allemaal kleine gele bloemetjes.",
              "Dus als je broccoli eet, eet je eigenlijk een bos bloemen!"]
  },
  lichaam:{
    plaatje:"feitfabel",
    titel:{ g56:"Broccoli helpt je lichaam bij twee dingen", g78:"Broccoli en je lichaam: feit of fabel?" },
    onthoud:"In broccoli zit veel vitamine C. Die helpt je om niet ziek te worden. Kook hem kort, dan blijven de vitamines erin.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpt broccoli? Tik een plaatje aan.", opties:[
        {key:"afweer", naam:"Niet ziek worden", goed:true,  uitleg:"Ja! In broccoli zit veel vitamine C. Die helpt je lichaam om ziektes buiten de deur te houden."},
        {key:"huid",   naam:"Wondjes genezen",  goed:true,  uitleg:"Ja! Vitamine C helpt je lichaam om een wondje weer dicht te maken."},
        {key:"haar",   naam:"Lang haar",        goed:false, uitleg:"Nee, van broccoli krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",      goed:false, uitleg:"Nee, je oren hebben niks aan extra broccoli."},
        {key:"spieren",naam:"Sterke spieren",   goed:false, uitleg:"Niet echt. Voor spieren heb je vooral eiwit nodig, uit bonen, ei, vis of vlees."},
        {key:"rennen", naam:"Harder rennen",    goed:false, uitleg:"Nee, je wordt er niet sneller van. Wel gezonder!"}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"De groene bolletjes van broccoli zijn bloemknoppen.", bak:"feit"},
          {naam:"Broccoli is familie van bloemkool en spruitjes.", bak:"feit"},
          {naam:"In broccoli zit veel vitamine C.", bak:"feit"},
          {naam:"Broccoli komt oorspronkelijk uit Italië.", bak:"feit", uitleg:"Het woord broccoli is ook Italiaans."},
          {naam:"Broccoli groeit aan een boom.", bak:"fabel", uitleg:"Hij groeit aan een plant op het veld."},
          {naam:"Hoe langer je broccoli kookt, hoe gezonder hij is.", bak:"fabel", uitleg:"Juist niet: lang koken spoelt vitamines weg."}
        ]}
    }
  },
  koppel:{
    titel:"Ken jij de koolfamilie?",
    v:{ g56:"Broccoli heeft veel familie! Lees de hint, tik op het plaatje en daarna op de naam. Of sleep het plaatje naar de naam.",
        g78:"Acht soorten kool, allemaal familie van broccoli! Lees de hints goed: vorm en kleur verraden welke kool het is." },
    lijst:[
      {key:"broccoli", naam:"Broccoli", hint:"Groen, met allemaal kleine boompjes."},
      {key:"bloemkool", naam:"Bloemkool", hint:"Net een broccoli, maar dan wit."},
      {key:"spruitjes", naam:"Spruitjes", hint:"Kleine groene balletjes aan een dikke stengel."},
      {key:"rodekool", naam:"Rode kool", hint:"Rond en paars, met blaadjes in laagjes."},
      {key:"romanesco", naam:"Romanesco", hint:"Lichtgroen, met puntige torentjes."},
      {key:"boerenkool", naam:"Boerenkool", hint:"Donkergroene, gekrulde blaadjes."},
      {key:"wittekool", naam:"Witte kool", hint:"Groot, rond en lichtgroen-wit. Stevig als een bal."},
      {key:"koolrabi", naam:"Koolrabi", hint:"Een lichtgroene bol met sprietjes en blaadjes erop."}
    ],
    g56:["broccoli","bloemkool","spruitjes","rodekool"],   // alleen deze bij de middenbouw
    goedZo:"Ja! Dat is de {naam}.",
    mis:"Nee, die past niet. Kijk nog eens naar de vorm en de kleur.",
    slot:"Super! De koolfamilie is groot: broccoli heeft heel veel neven en nichten."
  },
  quiz:{
    g56:[
      { v:"Wat gebeurt er als je broccoli niet plukt, maar laat staan?", a:["Hij wordt rood","Er komen gele bloemetjes","Hij valt om"], goed:1, img:"bloem",
        weetje:"De groene bolletjes zijn bloemknoppen. Laat je ze staan, dan gaan ze open: er komen allemaal kleine gele bloemetjes." },
      { v:"Waar groeit broccoli?", a:["Aan een boom","Aan een plant op het veld","Onder de grond"], goed:1, img:"veld",
        weetje:"Broccoli groeit aan een plant met grote blauwgroene bladeren. In het midden zit de broccoli, die oogst je." },
      { v:"Romanesco is familie van broccoli. Hoe ziet hij eruit?", a:["Met puntige torentjes","Met lange haren","Met grote stippen"], goed:0, img:"romanesco",
        weetje:"Romanesco heeft puntige torentjes. En elk torentje bestaat weer uit kleinere torentjes!" }
    ],
    g78:[
      { v:"Welk deel van de plant eet je als je broccoli eet?", a:["De wortel","De bloemknoppen","De zaden"], goed:1, img:"bloem",
        weetje:"Je eet de bloemknoppen en een stukje van de stengel. Laat je de broccoli staan, dan komen er gele bloemetjes." },
      { v:"Broccoli hoort bij een grote plantenfamilie. Welke?", a:["De koolfamilie","De wortelfamilie","De tomatenfamilie"], goed:0, img:"veld",
        weetje:"Broccoli is familie van bloemkool, spruitjes, rode kool en boerenkool. Ze horen allemaal bij de kruisbloemenfamilie." },
      { v:"Bij romanesco lijkt elk klein torentje op de hele groente. Hoe heet zo'n patroon?", a:["Een fractal","Een fabel","Een fossiel"], goed:0, img:"romanesco",
        weetje:"Een fractal is een patroon dat zich steeds kleiner herhaalt. Je ziet het ook bij varens, bliksem en ijskristallen." }
    ]
  },
  kunst:{
    // Monira Al Qadiri (geb. 1983): auteursrecht. Daarom tonen we het werk niet zelf, maar openen we de pagina van de kunstenaar.
    titel:"Kijk-kunst: een reuzenbroccoli", werk:"Romanesco Dream", maker:"Monira Al Qadiri", jaar:"2018", plek:"Via Nova College, Utrecht",
    link:"https://www.moniraalqadiri.com/romanesco-dream/",
    linkUitleg:"Opent de website van de kunstenaar met foto's van het kunstwerk.",
    intro:"Monira Al Qadiri is een kunstenaar uit Koeweit. Ze kocht een romanesco bij de groenteboer en maakte hem na: 3 meter groot! Het kunstwerk hangt bij een school in Utrecht.",
    vragen:{
      g56:[
        {v:"Wat zie je? Op welke groente lijkt het?", uitleg:"Een romanesco, familie van de broccoli. Maar dan 3 meter groot: hoger dan een volwassene!"},
        {v:"Welke kleur heeft het? Kijk goed.", uitleg:"De kunstenaar gebruikte glimmende verf die een beetje van kleur verandert, net als een zeepbel."},
        {v:"Hoe zou je je voelen als je ernaast stond?", uitleg:"Heel klein! Net een mier naast een broccoli."}
      ],
      g78:[
        {v:"Wat zie je? Op welke groente lijkt het?", uitleg:"Een romanesco, familie van de broccoli. Maar dan 3 meter groot!"},
        {v:"Welke kleur heeft het? Waarom zou ze deze verf kiezen?", uitleg:"Glimmende verf die van kleur verandert. Daardoor lijkt de groente opeens iets uit de ruimte."},
        {v:"Het kunstwerk is gemaakt met een 3D-printer, in 20 stukken. Hoe zou dat gegaan zijn?", uitleg:"Een echte romanesco werd gescand in de computer, vergroot en in stukken geprint. Daarna zijn de stukken als een puzzel in elkaar gezet."},
        {v:"Waarom zou je een gewone groente zo groot maken?", uitleg:"Bedenk samen: als iets heel groot is, zie je dingen die je normaal niet ziet. Zoals al die torentjes in torentjes."}
      ]
    }
  },
  maak:{
    titel:"Aan de slag: een reuzenbroccoli!",
    stappen:{
      g56:["Teken één broccoli heel groot op je papier, net een boom.","Kleur hem groen met kleurpotlood of waskrijt.","Teken met zwarte fineliner piepkleine poppetjes, huisjes en dieren om de broccoli heen. Zo lijkt hij een reuzenboom!"],
      g78:["Teken één broccoli heel groot op je papier, net een boom.","Kleur hem groen met kleurpotlood of waskrijt.","Teken met zwarte fineliner piepkleine poppetjes, huisjes en dingetjes om de broccoli heen.","Hoe kleiner je de poppetjes tekent, hoe groter de broccoli lijkt. Teken ook iets óp de broccoli: een boomhut, een ladder of een schommel!"]
    },
    nodig:["Wit tekenpapier","Groen kleurpotlood of waskrijt","Zwarte fineliner"],
    zeg:"Ik ben benieuwd hoe groot jij jouw broccoli kunt laten lijken!",
    voorbeeldAlt:"Voorbeeld: een grote groene broccoli met piepkleine poppetjes, huisjes en dieren eromheen, getekend met zwarte fineliner"
  }
};
