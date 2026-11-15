/* ==========================================================================
   Soepdetective · BLOEMKOOLSOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/bloemkool/img/.
   Ingrediënten (speur.goed): volgens het recept van Good Soup (nov 2026).
   Thema: wit en licht. Bewust anders dan broccoli (dat gaat over bloemknoppen).
   Kunstwerk: Margaretha Roosenboom, Stilleven met bloemkool en andijvie (1892 of later), De Mesdag Collectie, Den Haag.
   Publiek domein (Roosenboom overleed in 1896). Afbeelding via De Mesdag Collectie.
   ========================================================================== */
LESSEN.bloemkool = {
  naam:"Bloemkoolsoep",
  mascotte:"bloemkool",
  speurvraag:"Waarom is een bloemkool wit?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"Bloemkoolkleuren"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},   // na de quiz: feit of fabel werkt als overhoring
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // onderbouw: korte les op het digibord, terwijl de soep nog op tafel staat
    kleur:"wit",
    smaak:{ goed:["zout","pittig"], uitleg:"Bloemkoolsoep is hartig: er gaat een snufje zout in. En er zit kerrie in, een geel kruidenpoeder. Dat maakt hem een klein beetje pittig." },
    // spellen: elk spel is een eigen dia, in deze volgorde.
    spellen:[
      { type:"zoekplaat", naam:"Zoek iets wits", titel:"Wat is er wit in de keuken?", plaat:"ob-zoekplaat",
        vraag:"Tik op iets wits!",
        // x, y = midden van het ding in % van de plaat, r = straal in % van de breedte.
        dingen:[ {x:20, y:70, r:15, naam:"De bloemkool"}, {x:48, y:72, r:10, naam:"De soepkom"}, {x:15, y:39, r:9, naam:"Het vergiet"},
                 {x:56, y:38, r:9, naam:"De pan"}, {x:78, y:17, r:8, naam:"De koksmuts"}, {x:90, y:38, r:7, naam:"Het schort"},
                 {x:73, y:56, r:7, naam:"De kan"}, {x:87, y:67, r:5, naam:"De pepermolen"}, {x:62, y:84, r:7, naam:"De lepel"} ],
        mis:"Hier niet. Is dat wel wit? Kijk nog eens goed.",
        klaar:"Goed zo. Je hebt alle witte dingen gevonden.",
        start:"Een bloemkool is wit. Wat is er nog meer wit in deze keuken? Kom maar tikken.",
        slot:"Wat is er in onze klas wit? Wijs maar aan." },
      { type:"volgorde", naam:"Eerst handen wassen", titel:"Wat doe je eerst?",
        stappen:[ {img:"ob-stap-1", naam:"handen wassen"}, {img:"ob-stap-2", naam:"bloemkool wassen"},
                  {img:"ob-stap-3", naam:"soep koken"}, {img:"ob-stap-4", naam:"lekker eten"} ],
        klaar:"Goed zo. Eerst je handen wassen, dan de bloemkool, dan koken en dan smullen.",
        start:"We gaan bloemkoolsoep maken. Wat doe je als allereerste? Kom maar tikken.",
        verder:"Goed. En wat doe je daarna?",
        slot:"Waarom was je eerst je handen? (Zo komen er geen vieze bacteriën in je eten.) Wanneer was jij vandaag je handen?" },
      { type:"sorteer", naam:"Elke dag of af en toe?", titel:"Wit: elke dag of af en toe?",
        bakken:[ {id:"dag", naam:"Elke dag", ico:"elkedag", kleur:"#4F8F3A"}, {id:"soms", naam:"Af en toe", ico:"afentoe", kleur:"#7650A6"} ],
        items:[ {ico:"bloemkool", naam:"bloemkool", bak:"dag"}, {ico:"slagroom", naam:"slagroom", bak:"soms"}, {ico:"melk", naam:"melk", bak:"dag"},
                {ico:"wittechocola", naam:"witte chocola", bak:"soms"}, {ico:"ei", naam:"ei", bak:"dag"}, {ico:"spekjes", naam:"spekjes", bak:"soms"},
                {ico:"yoghurt", naam:"yoghurt", bak:"dag"}, {ico:"suikerspin", naam:"suikerspin", bak:"soms"} ],
        klaar:"Goed zo. Alles staat in de goede mand.",
        start:"Allemaal witte dingen. Sleep ze naar de goede mand. Iets voor elke dag, of iets voor af en toe, zoals op een feestje?",
        slot:"Zie je? Wit kan gezond zijn, maar ook snoep. De kleur zegt het niet. Wat eet jij elke dag?" },
      { type:"goedvoor", naam:"Goed voor je…?", titel:"Waar is bloemkool goed voor?",
        opties:[ {lijf:"huid", naam:"wondjes genezen", goed:true, uitleg:"Ja, in bloemkool zitten vitamientjes. Die helpen je lijf om een wondje weer dicht te maken."},
                 {lijf:"haar", naam:"je haar", goed:false, uitleg:"Nee, van bloemkool krijg je geen lang haar."},
                 {lijf:"oren", naam:"je oren", goed:false, uitleg:"Nee, je oren hebben niks aan bloemkool."} ],
        start:"Waar is bloemkool goed voor? Wondjes genezen, je haar of je oren? Tik op het plaatje.",
        slot:"Bloemkool helpt je lijf om wondjes te genezen. Wie heeft er weleens een pleister gehad?" }
    ]
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["wit","#7A6555","-5deg"],["hartig","#D7402B","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["mild","#4F8F3A","-3deg"],["romig","#D7402B","5deg"],["zacht","#7650A6","-5deg"],["zout","#3B2B22","4deg"]],
      g78:[["wit","#7A6555","-5deg"],["hartig","#D7402B","5deg"],["warm","#7650A6","-4deg"],["glad","#3B2B22","4deg"],["mild","#4F8F3A","-3deg"],["romig","#D7402B","5deg"],["zacht","#7650A6","-5deg"],["zout","#3B2B22","4deg"],["kruidig","#B9520F","-4deg"],["fluweelzacht","#7650A6","3deg"],["licht","#4F8F3A","-3deg"],["vol","#D7402B","4deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Proef je de bloemkool? Is de smaak mild of juist sterk?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop.", g78:"Zes zitten erin, vijf niet. Let op: niet alles wat op bloemkool lijkt, zit erin. Sleep of tik." },
    opgelost:"Opgelost: in de soep zitten bloemkool, ui, knoflook, kerrie, water en een snufje zout.",
    goed:["bloemkool","ui","knoflook","kerrie","water","zout"],
    fout:["broccoli","banaan","aardappel","tomaat","wortel"] },   // middenbouw en bovenbouw kiezen uit evenveel ingrediënten
  kennis:{   // "Maak kennis": komt vanzelf na "Wat zit erin?". Echte foto (img/foto.webp) + 4 kaartjes: voorkant vraag, achterkant antwoord.
    titel:"Maak kennis met de bloemkool", fotoAlt:"Een kraam vol witte bloemkolen met groene bladeren",
    kaarten:[
      {v:"Hoe zwaar is een bloemkool?", a:"Vaak ongeveer een kilo. Zo zwaar als een pak melk."},
      {v:"Wanneer oogsten we bloemkool in Nederland?", a:"Van juni tot in november. In de winter komen ze vaak uit Frankrijk of Spanje."},
      {v:"Kun je de bladeren eten?", a:"Ja! De groene bladeren en de steel kun je gewoon koken of roosteren."},
      {v:"Waar lijkt één roosje op als je goed kijkt?", a:"Op een kleine bloemkool! Elk roosje bestaat weer uit kleinere roosjes."}
    ]
  },
  kern:{
    titel:"Waarom is een bloemkool wit?",
    beeldAlt:"De detective-bloemkool tuurt onder een dak van grote groene bladeren omhoog naar de zon",
    opties:["Hij krijgt geen zon","Hij is ziek","Hij is geverfd"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["De bloemkool groeit midden in de plant. Grote groene bladeren groeien eromheen, net een paraplu.",
              "Daardoor komt er bijna geen zonlicht bij. En zonder zonlicht maakt een plant geen groen kleurstofje: geen bladgroen.",
              "Soms binden boeren de bladeren zelfs dicht boven de bloemkool. Zo blijft hij mooi wit."]
  },
  lichaam:{
    plaatje:"feitfabel",
    titel:{ g56:"Bloemkool helpt je lichaam bij twee dingen", g78:"Bloemkool en je lichaam: feit of fabel?" },
    onthoud:"In bloemkool zit veel vitamine C. Die helpt je om niet ziek te worden en om wondjes te genezen. Kook hem kort, dan blijven de vitamines erin.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpt bloemkool? Tik een plaatje aan.", opties:[
        {key:"afweer", naam:"Niet ziek worden", goed:true,  uitleg:"Ja, in bloemkool zit veel vitamine C. Die helpt je lichaam om ziektes buiten de deur te houden."},
        {key:"huid",   naam:"Wondjes genezen",  goed:true,  uitleg:"Ja, vitamine C helpt je lichaam om een wondje weer dicht te maken."},
        {key:"haar",   naam:"Lang haar",        goed:false, uitleg:"Nee, van bloemkool krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",      goed:false, uitleg:"Nee, je oren hebben niks aan extra bloemkool."},
        {key:"spieren",naam:"Sterke spieren",   goed:false, uitleg:"Niet echt. Voor spieren heb je vooral eiwit nodig, uit bonen, ei, vis of vlees."},
        {key:"rennen", naam:"Harder rennen",    goed:false, uitleg:"Nee, je wordt er niet sneller van. Wel gezonder."}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"Bloemkool blijft wit omdat de bladeren de zon tegenhouden.", bak:"feit"},
          {naam:"Er bestaat ook paarse en oranje bloemkool.", bak:"feit"},
          {naam:"In bloemkool zit veel vitamine C.", bak:"feit"},
          {naam:"Bloemkool bestaat voor het grootste deel uit water.", bak:"feit", uitleg:"Ruim 9 van de 10 delen is water."},
          {naam:"Witte groente is minder gezond dan groene groente.", bak:"fabel", uitleg:"De kleur zegt niet of iets gezond is."},
          {naam:"Bloemkool groeit onder de grond.", bak:"fabel", uitleg:"Hij groeit boven de grond, midden in de plant."}
        ]}
    }
  },
  koppel:{
    titel:"Bloemkool in alle kleuren",
    v:{ g56:"Bloemkool is niet altijd wit. Elke soort heeft een eigen naam. Lees de hint goed, tik op het plaatje en daarna op de naam.",
        g78:"Zes soorten bloemkool. Lees de hints goed: kleur en vorm verraden welke het is." },
    lijst:[   // rasnamen verklappen de kleur niet: de hint helpt
      {key:"wit", naam:"Snowball", hint:"Heet naar iets wat je in de winter naar elkaar gooit. Welke kleur heeft dat?"},
      {key:"paars", naam:"Graffiti", hint:"Heeft de kleur van druiven of een aubergine. Bij het koken wordt hij een beetje blauw."},
      {key:"oranje", naam:"Cheddar", hint:"Heet naar een kaas, maar heeft de kleur van een wortel."},
      {key:"groen", naam:"Vitaverde", hint:"'Verde' is Italiaans voor de kleur van gras."},
      {key:"romanesco", naam:"Romanesco", hint:"Puntige torentjes, en elk torentje bestaat weer uit torentjes."},
      {key:"fioretto", naam:"Fioretto", hint:"Losse roosjes op lange, dunne steeltjes. De steel eet je ook op."}
    ],
    g56:["wit","paars","oranje","groen"],   // alleen deze bij de middenbouw
    goedZo:"Ja, dat is de {naam}.",
    mis:"Nee, die past niet. Kijk nog eens naar de kleur en de vorm.",
    slot:"Mooi. Wit, paars, oranje of groen: het blijft allemaal bloemkool. Welke zou jij willen proeven?"
  },
  quiz:{
    g56:[
      { v:"Een boer bindt soms de bladeren dicht boven een bloemkool. Waarom?", a:["Zodat de zon er niet bij komt","Tegen de regen","Zodat vogels hem niet zien"], goed:0, img:"bladeren",
        weetje:"Zonder zonlicht maakt de bloemkool geen groen kleurstofje. Zo blijft hij mooi wit." },
      { v:"Bloemkool is meestal wit. Welke kleuren bestaan er nog meer?", a:["Geen: alleen wit","Paars, oranje en groen","Zwart en blauw"], goed:1, img:"kleuren",
        weetje:"Er is ook paarse, oranje en groene bloemkool. Ze smaken bijna hetzelfde als de witte." },
      { v:"Hoeveel water zit er in een bloemkool?", a:["Bijna niks","Ongeveer de helft","Bijna alles"], goed:2, img:"veld",
        weetje:"Ruim 9 van de 10 delen van een bloemkool is water. Daarom is hij zo sappig." }
    ],
    g78:[
      { v:"Waarom wordt een bloemkool wit en niet groen?", a:["Hij krijgt weinig zonlicht, dus maakt hij geen bladgroen","Er zit kalk in de grond","Hij is nog niet rijp"], goed:0, img:"bladeren",
        weetje:"Planten maken bladgroen met zonlicht. De bladeren van de bloemkool houden het licht tegen. Boeren binden ze soms extra dicht." },
      { v:"Oranje bloemkool is oranje door hetzelfde stofje als in wortels. Welk stofje?", a:["Bètacaroteen","IJzer","Suiker"], goed:0, img:"bladeren",
        weetje:"Oranje bloemkool heeft extra bètacaroteen. Van dat stofje maakt je lichaam vitamine A, net als bij wortels." },
      { v:"Hoe kook je bloemkool zo dat de meeste vitamines erin blijven?", a:["Kort koken of stomen","Een uur lang koken","Een nacht in water laten liggen"], goed:0, img:"veld",
        weetje:"Vitamine C lost op in kookwater en gaat kapot door lang verhitten. Kort koken of stomen is het beste." }
    ]
  },
  galgje:{   // midden- en bovenbouw: komt vanzelf vóór Kijk-kunst. Lang woord uit de les, met tip en uitleg.
    g56:{ woord:"PARAPLU", tip:"De bladeren van een bloemkool werken als een … tegen de zon.", uitleg:"De bladeren houden de zon tegen. Zo blijft de bloemkool wit." },
    g78:{ woord:"BLADGROEN", tip:"Het groene kleurstofje dat planten maken met zonlicht. Een bloemkool heeft het bijna niet.", uitleg:"Zonder zon geen bladgroen. Daarom is een bloemkool wit." }
  },
  kunst:{
    // Publiek domein (Roosenboom overleed in 1896). Afbeelding: De Mesdag Collectie, Den Haag (hwm0298, olieverf op doek, 70,5 × 110,2 cm). Herkomst: in 1898 gekocht door H.W. Mesdag op de tentoonstelling in Kunstzaal Biesing; in 1903 geschonken aan de Staat.
    titel:"Kijk-kunst: een stilleven met bloemkool", werk:"Stilleven met bloemkool en andijvie", maker:"Margaretha Roosenboom", jaar:"1892 of later", plek:"De Mesdag Collectie, Den Haag",
    intro:"Margaretha Roosenboom (1843–1896) was een Nederlandse schilder uit Den Haag. Ze schilderde vooral bloemen en groenten. Dit schilderij is 110 centimeter breed: de bloemkool is bijna net zo groot als in het echt.",
    vragen:(()=>{ const v=[   // midden- en bovenbouw dezelfde vragen
        {v:"Wat zie je allemaal op het schilderij?", uitleg:"In het midden een bloemkool op zijn eigen grote bladeren. Rechts andijvie, achter de bloemkool een bruine kan, links een schaal en een takje dat naar beneden hangt."},
        {v:"Waarom schilderde iemand ruim 130 jaar geleden gewone groente?", uitleg:"Om vakmanschap te laten zien: hoe echt kun je licht, vorm en kleur maken? En om te verkopen: mensen hingen zulke stillevens thuis op."},
        {v:"Vrouwen mochten toen meestal niet naar de kunstacademie en niet tekenen naar levende modellen. Waarom kozen veel schilderessen voor stillevens?", uitleg:"Een stilleven kun je thuis maken. Je hebt geen model nodig en de groente blijft stil liggen. Zo kon Margaretha Roosenboom toch een bekende schilder worden."},
        {v:"Kijk naar de bladeren: sommige worden al bruin. Waarom zou ze dat óók schilderen?", uitleg:"Het maakt het echter. In oudere stillevens betekende verwelkende groente ook: niets blijft voor altijd vers. Wat denk jij dat zij wilde laten zien?"}
      ]; return { g56:v, g78:v }; })()
  },
  maak:{
    titel:"Aan de slag: wit op wit!",
    stappen:{
      g56:["Teken met wit waskrijt een grote bloemkool op wit papier. Druk stevig. Je ziet nog bijna niks.","Teken er ook bladeren omheen, net een paraplu.","Verf er met waterverf of ecoline overheen. Kijk: je bloemkool komt tevoorschijn."],
      g78:["Teken met wit waskrijt een grote bloemkool op wit papier. Druk stevig: het krijt moet dik op het papier zitten.","Teken de bolletjes van de bloemkool en de bladeren eromheen. Je ziet nog bijna niks, dus onthoud waar alles zit.","Verf met ecoline of waterverf over je hele papier. Gebruik groen voor de bladeren en een andere kleur voor de achtergrond.","Het krijt stoot de verf af: je witte tekening komt tevoorschijn. Waar heb je te zacht gedrukt?"]
    },
    nodig:["Wit tekenpapier (stevig)","Wit waskrijt","Waterverf of ecoline","Dikke kwast"],
    zeg:"Wit op wit: ik ben benieuwd wat er bij jou tevoorschijn komt.",
    voorbeeldAlt:"Voorbeeld: een witte bloemkool met bladeren, getekend met wit waskrijt, die zichtbaar wordt onder groene en blauwe ecoline"
  }
};
