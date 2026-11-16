/* ==========================================================================
   Soepdetective · COURGETTESOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/courgette/img/.
   Ingrediënten (speur.goed): volgens het recept van Good Soup (nov 2026).
   Thema: hoe snel een courgette groeit. Bewust anders dan pompoen (familie komkommer/pompoen staat daar al).
   Kunstwerk: Sarah Lucas, Kevin (2013), bronzen courgette, stond bij het Centraal Museum in Utrecht.
   Auteursrecht (kunstenaar leeft): alleen een link, geen afbeelding. Gesprek gaat over groei, grootte, materiaal en plek.
   ========================================================================== */
LESSEN.courgette = {
  naam:"Courgettesoep",
  mascotte:"courgette",
  speurvraag:"Hoeveel groeit een courgette in één dag?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"Courgettesoorten"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // onderbouw: korte les op het digibord, terwijl de soep nog op tafel staat
    kleur:"groen",
    smaak:{ goed:["zout"], uitleg:"Courgettesoep is hartig en zacht. Proef je ook de tijm? Dat is een lekker kruidje." },
    kennis:{ kleur:{ kleuren:["#4E7A2E","#F2C200"], tekst:"Groen! Maar er zijn ook gele courgettes." }, grond:{ plek:"boven", tekst:"Erboven! Hij groeit aan een plant met hele grote bladeren." }, weetje:{ v:"Hoe groot kan een courgette worden?", a:"Laat je hem hangen, dan wordt hij zo groot als je arm!" } },   // dia "In het echt" na "Wie ben ik?" (foto = img/foto.webp)
    // spellen: elk spel is een eigen dia, in deze volgorde.
    spellen:[
      { type:"groei", naam:"Hoe lang is hij?", titel:"Hoe lang is de courgette?", dingen:["ob-courgette-1","ob-courgette-2","ob-courgette-3"], rondes:[3,5,8],
        start:"Kijk, een kleine courgette aan de plant. Hoeveel blokjes is hij lang? Tel samen en tik op het getal.",
        verder:"Een dag later is hij gegroeid. Hoeveel blokjes is hij nu?",
        slot:"Een courgette groeit heel snel. Daarom plukken we hem als hij nog klein is: dan is hij het lekkerst." },
      { type:"volgorde", naam:"Van zaadje tot courgette", titel:"Van zaadje tot courgette",
        stappen:[ {img:"ob-stap-1", naam:"het zaadje"}, {img:"ob-stap-2", naam:"het plantje"},
                  {img:"ob-stap-3", naam:"de gele bloem"}, {img:"ob-stap-4", naam:"de courgette"} ],
        klaar:"Goed zo. Uit de gele bloem groeit de courgette.",
        start:"Wat komt er eerst? Kom maar tikken.",
        verder:"En wat komt daarna?",
        slot:"Wist je dat de courgette uit een bloem groeit? Wie heeft weleens een courgettebloem gezien?" },
      { type:"sorteer", naam:"Wat gaat in je trommel?", titel:"Wat gaat er in je broodtrommel?",
        bakken:[ {id:"dag", naam:"In je trommel", ico:"broodtrommel", kleur:"#4F8F3A"}, {id:"soms", naam:"Af en toe", ico:"afentoe", kleur:"#7650A6"} ],
        items:[ {ico:"courgettestaafjes", naam:"courgette", bak:"dag"}, {ico:"koek", naam:"koek", bak:"soms"}, {ico:"komkommer", naam:"komkommer", bak:"dag"},
                {ico:"snoep", naam:"snoep", bak:"soms"}, {ico:"appel", naam:"appel", bak:"dag"}, {ico:"chips", naam:"chips", bak:"soms"},
                {ico:"boterham", naam:"boterham", bak:"dag"}, {ico:"wittechocola", naam:"chocola", bak:"soms"} ],
        klaar:"Alles staat goed. Wat een gezonde trommel.",
        start:"Wat stop je in je broodtrommel voor school? En wat is voor af en toe? Sleep het naar de goede plek.",
        slot:"Wat zit er vandaag in jouw trommel? Wie heeft er groente of fruit bij?" },
      { type:"goedvoor", naam:"Goed voor je…?", titel:"Waar is courgette goed voor?",
        opties:[ {lijf:"afweer", naam:"niet ziek worden", goed:true, uitleg:"Ja, in courgette zitten vitamientjes. Die helpen je lijf om niet ziek te worden."},
                 {lijf:"haar", naam:"je haar", goed:false, uitleg:"Nee, van courgette krijg je geen lang haar."},
                 {lijf:"oren", naam:"je oren", goed:false, uitleg:"Nee, je oren hebben niks aan courgette."} ],
        start:"Waar is courgette goed voor? Niet ziek worden, je haar of je oren? Tik op het plaatje.",
        slot:"Courgette helpt je lijf om niet ziek te worden. Wat doe jij nog meer om gezond te blijven?" }
    ]
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["groen","#4F8F3A","-5deg"],["hartig","#6B7F1F","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["mild","#4F8F3A","-3deg"],["romig","#6B7F1F","5deg"],["zacht","#7650A6","-5deg"],["zout","#3B2B22","4deg"]],
      g78:[["groen","#4F8F3A","-5deg"],["hartig","#6B7F1F","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["mild","#4F8F3A","-3deg"],["romig","#6B7F1F","5deg"],["zacht","#7650A6","-5deg"],["zout","#3B2B22","4deg"],["kruidig","#B9520F","-4deg"],["fris","#4F8F3A","3deg"],["licht","#6B7F1F","-3deg"],["vol","#7650A6","4deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Proef je de courgette? En de tijm?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop. Er zit ook een gekke knol in.", g78:"Acht zitten erin, vijf niet. Let op: er zit een knol in die bijna niemand kent. Sleep of tik." },
    opgelost:"Opgelost: in de soep zitten courgette, aardappel, koolrabi, ui, knoflook, tijm, water en een snufje zout.",
    goed:["courgette","aardappel","koolrabi","ui","knoflook","tijm","water","zout"],
    fout:["broccoli","banaan","tomaat","wortel","pompoen"] },
  kennis:{   // "Maak kennis": komt vanzelf na "Wat zit erin?". Echte foto (img/foto.webp) + 4 kaartjes: voorkant vraag, achterkant antwoord.
    titel:"Maak kennis met de courgette", fotoAlt:"Verse groene en gele courgettes",
    kaarten:[
      {v:"Waar komt de courgette vandaan?", a:"De courgette is ruim 100 jaar geleden in Italië gekweekt. Zijn familie komt uit Amerika."},
      {v:"Wanneer oogsten we courgettes in Nederland?", a:"In de zomer, van juni tot oktober."},
      {v:"Kun je de bloem eten?", a:"Ja! Courgettebloemen kun je vullen en bakken. En de schil eet je gewoon mee."},
      {v:"Hoeveel courgettes geeft één plant?", a:"Heel veel! Een goede plant geeft er in één zomer wel meer dan tien."}
    ]
  },
  kern:{
    titel:"Hoeveel groeit een courgette in één dag?",
    beeldAlt:"De detective-courgette meet met een liniaal een courgette aan de plant",
    opties:["Bijna niks","Een paar centimeter","Wel een meter"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["Een courgette groeit heel snel: op een warme zomerdag wel een paar centimeter.",
              "Daarom moet een boer elke dag kijken. Ben je een paar dagen weg, dan hangt er opeens een reuzencourgette aan de plant.",
              "Jonge, kleine courgettes zijn het lekkerst. Grote worden taai en hebben dikke pitten."]
  },
  lichaam:{
    plaatje:"feitfabel",
    titel:{ g56:"Courgette helpt je lichaam", g78:"Courgette en je lichaam: feit of fabel?" },
    onthoud:"Courgette is een groente vol water en vitamientjes. Eet hem met schil: die kun je gewoon meeeten.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpt courgette? Tik een plaatje aan.", opties:[
        {key:"afweer", naam:"Niet ziek worden", goed:true,  uitleg:"Ja, in courgette zit vitamine C. Die helpt je lichaam om ziektes buiten de deur te houden."},
        {key:"huid",   naam:"Wondjes genezen",  goed:true,  uitleg:"Ja, vitamine C helpt je lichaam ook om een wondje weer dicht te maken."},
        {key:"haar",   naam:"Lang haar",        goed:false, uitleg:"Nee, van courgette krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",      goed:false, uitleg:"Nee, je oren hebben niks aan extra courgette."},
        {key:"spieren",naam:"Sterke spieren",   goed:false, uitleg:"Niet echt. Voor spieren heb je vooral eiwit nodig, uit bonen, ei, vis of vlees."},
        {key:"rennen", naam:"Harder rennen",    goed:false, uitleg:"Nee, je wordt er niet sneller van. Wel gezonder."}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"Een courgette is familie van de pompoen.", bak:"feit"},
          {naam:"Een courgette bestaat voor het grootste deel uit water.", bak:"feit", uitleg:"Ongeveer 95 van de 100 delen is water."},
          {naam:"Een courgette kan in een paar dagen veel groter worden.", bak:"feit"},
          {naam:"Hoe groter de courgette, hoe lekkerder.", bak:"fabel", uitleg:"Juist niet: kleine, jonge courgettes zijn het lekkerst."},
          {naam:"Een courgette groeit onder de grond.", bak:"fabel", uitleg:"Hij hangt aan een plant, boven de grond."},
          {naam:"Een courgette moet je altijd schillen.", bak:"fabel", uitleg:"De schil kun je gewoon meeeten."}
        ]}
    }
  },
  koppel:{
    titel:"Ken jij deze courgettes?",
    v:{ g56:"Lees de hint, tik op het plaatje en daarna op de naam. Of sleep het plaatje naar de naam.",
        g78:"Zes soorten courgette. Lees de hints goed: vorm en kleur verraden welke het is." },
    lijst:[
      {key:"groen", naam:"Groene courgette", hint:"De bekendste: lang en donkergroen."},
      {key:"geel", naam:"Gele courgette", hint:"Net zo lang, maar knalgeel als een banaan."},
      {key:"rond", naam:"Ronde courgette", hint:"Rond als een bal. Je kunt hem vullen."},
      {key:"gestreept", naam:"Gestreepte courgette", hint:"Groen met lichte strepen in de lengte."},
      {key:"licht", naam:"Lichtgroene courgette", hint:"Kort en dik, lichtgroen, bijna wit."},
      {key:"bloem", naam:"Courgettebloem", hint:"Geel en groot. Geen courgette, maar je kunt hem wel eten."}
    ],
    g56:["groen","geel","rond","gestreept"],   // alleen deze bij de middenbouw
    goedZo:"Ja, dat is de {naam}.",
    mis:"Nee, die past niet. Kijk nog eens naar de vorm en de kleur.",
    slot:"Super. Groen, geel, rond of gestreept: allemaal courgette."
  },
  quiz:{
    g56:[
      { v:"Waaruit groeit een courgette?", a:["Uit een gele bloem","Uit een blad","Uit de wortel"], goed:0, img:"bloem",
        weetje:"Aan de plant zitten grote gele bloemen. Achter zo'n bloem groeit een courgette." },
      { v:"Wat gebeurt er als je een courgette te lang laat hangen?", a:["Hij wordt een reuzencourgette","Hij valt om","Hij wordt rood"], goed:0, img:"reus",
        weetje:"Hij groeit maar door, tot hij zo groot is als je arm. Dan is hij taai en vol dikke pitten." },
      { v:"Welke kleur kan een courgette hebben?", a:["Alleen groen","Groen en geel","Paars"], goed:1, img:"soorten",
        weetje:"De meeste courgettes zijn groen, maar er zijn ook gele en gestreepte." }
    ],
    g78:[
      { v:"Een courgette is eigenlijk een vrucht. Waarom?", a:["Hij groeit uit een bloem en heeft zaadjes","Hij smaakt zoet","Hij groeit aan een boom"], goed:0, img:"bloem",
        weetje:"Alles wat uit een bloem groeit en zaadjes heeft, is voor een plantenkenner een vrucht. Net als de tomaat." },
      { v:"Waarom plukken boeren courgettes als ze nog klein zijn?", a:["Jonge courgettes zijn zachter en lekkerder","Grote passen niet in de winkel","Grote zijn giftig"], goed:0, img:"reus",
        weetje:"Een jonge courgette is zacht en heeft kleine pitjes. Een grote wordt taai, met dikke pitten." },
      { v:"Het woord courgette komt uit het Frans. Wat betekent het?", a:["Klein pompoentje","Groene stok","Zomerkomkommer"], goed:0, img:"soorten",
        weetje:"In het Frans is 'courge' een pompoen. Een courgette is dus een klein pompoentje." }
    ]
  },
  galgje:{   // midden- en bovenbouw: komt vanzelf vóór Kijk-kunst. Lang woord uit de les, met tip en uitleg.
    g56:{ woord:"ZOMERGROENTE", tip:"Een groente die vooral in de warme maanden groeit, zoals de courgette.", uitleg:"Courgettes oogsten we van juni tot oktober." },
    g78:{ woord:"GROEISPURT", tip:"Zo noem je het als iets in korte tijd heel hard groeit. Een courgette kan dat goed.", uitleg:"Een courgette kan op één warme dag een paar centimeter groeien." }
  },
  kunst:{
    // Sarah Lucas (geb. 1962): auteursrecht. Daarom tonen we het werk niet zelf, maar openen we een pagina met foto's.
    titel:"Kijk-kunst: een courgette van goud", werk:"Kevin", maker:"Sarah Lucas", jaar:"2013", plek:"stond bij het Centraal Museum, Utrecht",
    link:"https://www.duic.nl/cultuur/gigantische-gouden-courgette-geplaatst-op-sokkel-in-utrecht/",
    linkUitleg:"Opent een nieuwsbericht met foto's van het beeld in Utrecht.",
    intro:"Sarah Lucas is een kunstenaar uit Engeland. Ze maakte een reusachtige courgette van glimmend brons en noemde hem Kevin. Hij stond op een plein bij het Centraal Museum in Utrecht.",
    vragen:(()=>{ const v=[
        {v:"Wat zie je? Hoe groot zou hij zijn?", uitleg:"Een courgette van brons, een metaal. Hij is ongeveer vier meter lang: zo lang als een auto."},
        {v:"Waarom zou de kunstenaar hem van goudkleurig brons maken?", uitleg:"Goud laat zien dat iets bijzonder en kostbaar is. Zo wordt een gewone groente een schat. En hij glimt: je ziet de lucht en de huizen erin."},
        {v:"De kunstenaar noemde hem Kevin. Waarom zou je een groente een naam geven?", uitleg:"Met een naam wordt hij een beetje een persoon. Hoe zou jij hem noemen?"},
        {v:"Hij stond op een plein in de stad. Wat doet zo'n beeld met een plein?", uitleg:"Mensen blijven staan, kijken, lachen en praten erover. Een gewoon plein wordt opeens bijzonder."}
      ]; return { g56:v.slice(0,3), g78:v }; })()
  },
  maak:{
    titel:"Aan de slag: een beeld voor jouw plein!",
    stappen:{
      g56:["Kies een groente en maak er een standbeeld van. Teken hem groot op een sokkel.","Kies het materiaal: goud, zilver, steen of glas. Kleur hem zo dat je dat ziet: laat witte plekjes over waar hij glimt.","Geef je beeld een naam, net als Kevin, en schrijf die op de sokkel."],
      g78:["Kies een groente en bedenk een plek die je kent: het schoolplein, je straat of een plein in de stad.","Teken die plek en zet je groente er heel groot op, op een sokkel.","Kies het materiaal: goud, zilver, steen of glas. Laat zien hoe het glimt of hoe ruw het is.","Geef je beeld een naam en bedenk één zin: waarom staat jouw groente juist daar?"]
    },
    nodig:["Wit tekenpapier","Potlood","Kleurpotlood of oliepastel (geel, oranje en bruin voor goud)"],
    zeg:"Ik ben benieuwd welke groente jij op een sokkel zet, en hoe hij heet.",
    voorbeeldAlt:"Voorbeeld: een gouden wortel als standbeeld op een sokkel op een schoolplein, met de naam op de sokkel"
  }
};
