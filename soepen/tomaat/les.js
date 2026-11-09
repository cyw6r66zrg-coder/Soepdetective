/* ==========================================================================
   Soepdetective · TOMATENSOEP
   Alle lesinhoud van deze soep. De motor staat in /index.html.
   Tekst die per niveau verschilt schrijf je als { g56:"…", g78:"…" }.
   Afbeeldingen van deze soep staan in soepen/tomaat/img/.
   LET OP: de ingrediëntenlijst (speur.goed) is een aanname. Controleer hem
   op het etiket van Good Soup en pas speur.goed + speur.opgelost aan.
   ========================================================================== */
LESSEN.tomaat = {
  naam:"Tomatensoep",
  mascotte:"tomaat",
  speurvraag:"Is een tomaat een groente of een fruit?",
  stappen:[
    {id:"proef",  naam:"Proeven"},
    {id:"lekker", naam:"Hoe lekker?"},
    {id:"speur",  naam:"Wat zit erin?"},
    {id:"speurvraag", naam:"Speurvraag"},
    {id:"koppel", naam:"Tomatensoorten"},
    {id:"quiz",   naam:"Wist je dat…"},
    {id:"lichaam", naam:"Je lichaam"},   // na de quiz: feit of fabel werkt als overhoring
    {id:"kunst",  naam:"Kijk-kunst"},
    {id:"maak",   naam:"Aan de slag"}
  ],
  onderbouw:{   // groep 1-2: korte les op het digibord. Vast: Hoe lekker? en De durfpot. Per soep:
    // raad: groenten voor "Wie ben ik?" (weglaten = automatisch uit speur, false = stap overslaan)
    spel:{ type:"pluk", naam:"Welke tomaten zijn rijp?", titel:"Welke tomaten zijn rijp?",
      items:[ {img:"ob-rijp-1", goed:false}, {img:"ob-rijp-5", goed:true},  {img:"ob-rijp-2", goed:false}, {img:"ob-rijp-3", goed:false},
              {img:"ob-rijp-5", goed:true},  {img:"ob-rijp-1", goed:false}, {img:"ob-rijp-5", goed:true},  {img:"ob-rijp-2", goed:false} ],
      goedZo:"Ja! Die is rood, die is rijp.",
      mis:"Nog niet rijp! Die moet nog even groeien in de zon.",
      klaar:"Goed zo! Alle rode tomaten zitten in de mand.",
      start:"Pluk alleen de rijpe tomaten. Hoe zie je of een tomaat rijp is?",
      slot:"Een tomaat begint groen. In de zon wordt hij geel, dan oranje en dan rood. Rood is rijp: dan is hij zoet en lekker!" },
  },
  proef:{
    titel:"Neem een hapje… wat proef jij?",
    vraag:{ g56:"Tik op de woorden die bij de soep passen.", g78:"Kies drie woorden en maak er samen één zin van." },
    woorden:{
      g56:[["zuur","#D1352B","-5deg"],["zoet","#F47B20","5deg"],["fris","#4F8F3A","-4deg"],["hartig","#3B2B22","4deg"],["glad","#7650A6","-3deg"],["warm","#D1352B","5deg"],["romig","#4F8F3A","-5deg"],["kruidig","#3B2B22","4deg"]],
      g78:[["zuur","#D1352B","-5deg"],["zoet","#F47B20","5deg"],["fris","#4F8F3A","-4deg"],["hartig","#3B2B22","4deg"],["glad","#7650A6","-3deg"],["warm","#D1352B","5deg"],["romig","#4F8F3A","-5deg"],["kruidig","#3B2B22","4deg"],["pittig","#7650A6","3deg"],["zoutig","#B9520F","-4deg"],["dik","#3B2B22","5deg"],["fluweelzacht","#7650A6","-3deg"]]
    }
  },
  lekker:{
    titel:"Hoe lekker vind jij de soep?",
    gezichten:[["bah","smiley-bah"],["niet lekker","smiley-nietlekker"],["gaat wel","smiley-gaatwel"],["lekker","smiley-lekker"],["heerlijk","smiley-heerlijk"]],
    vertel:{ g56:"Vertel het de klas: “Ik vind hem lekker, want…” of “Ik vind hem niet lekker, want…”", g78:"Vertel het de klas: wat maakt dat jij hem wel of niet lekker vindt? Proef je meer zuur of meer zoet? En hoe voelt hij in je mond?" }
  },
  speur:{ titel:"Speur mee: wat zit er in de soep?",
    hint:{ g56:"Wat proef je? Sleep een ingrediënt naar de pan, of tik erop.", g78:"Acht zitten erin, vijf niet. Let op: niet alles wat rood is, zit in de soep! Sleep of tik." },
    opgelost:"Opgelost! In de soep zitten tomaat, ui, knoflook, wortel, bleekselderij, basilicum, water en een snufje zout.",
    goed:["tomaat","ui","knoflook","wortel","bleekselderij","basilicum","water","zout"],
    fout:{ g56:["banaan","broccoli","aardbei"], g78:["banaan","broccoli","aardbei","gember","paprika"] } },
  kern:{
    titel:"Is een tomaat een groente of een fruit?",
    beeldAlt:"De detective-tomaat onderzoekt een vraagteken tussen een fruitschaal en een groentemand",
    opties:["Een groente","Een vrucht","Allebei"],
    wat:"Wat denk jij? Kies samen A, B of C. Tik daarna op het antwoord van de klas.",
    antwoord:["Een tomaat groeit uit de bloem van de tomatenplant en zit vol zaadjes. Voor een plantenkenner is hij daarom een vrucht, net als een appel.",
              "Maar in de keuken doen we alsof hij een groente is. We eten hem in soep, op een pizza of in de sla, en niet als toetje.",
              "Dus: allebei goed! Voor de plant is hij een vrucht, voor de kok een groente."]
  },
  lichaam:{
    plaatje:"feitfabel",   // illustratie bij feit of fabel (een plaatje uit soepen/tomaat/img/)
    titel:{ g56:"Tomaten helpen je lichaam bij twee dingen", g78:"Tomaten en je lichaam: feit of fabel?" },
    onthoud:"In tomaten zit vitamine C. Die helpt je om niet ziek te worden, en helpt wondjes te genezen.",
    act:{
      g56:{ type:"kaarten", v:"Bij welke twee dingen helpen tomaten? Tik een plaatje aan.", opties:[
        {key:"afweer", naam:"Niet ziek worden", goed:true,  uitleg:"Ja! In tomaten zit vitamine C. Die helpt je lichaam om ziektes buiten de deur te houden."},
        {key:"huid",   naam:"Wondjes genezen",  goed:true,  uitleg:"Ja! Vitamine C helpt je lichaam om een wondje weer dicht te maken."},
        {key:"haar",   naam:"Lang haar",        goed:false, uitleg:"Nee, van tomaten krijg je geen langer haar."},
        {key:"oren",   naam:"Beter horen",      goed:false, uitleg:"Nee, je oren hebben niks aan extra tomaten."},
        {key:"spieren",naam:"Sterke spieren",   goed:false, uitleg:"Niet echt. Voor spieren heb je vooral eiwit nodig, uit bonen, ei, vis of vlees."},
        {key:"rennen", naam:"Harder rennen",    goed:false, uitleg:"Nee, je wordt er niet sneller van. Wel gezonder!"}
      ]},
      g78:{ type:"sorteer", v:"Feit of fabel? Sleep elk kaartje naar het goede vak (of tik het kaartje en dan het vak).", bakken:[
        {id:"feit", naam:"Feit", kleur:"#4F8F3A"}, {id:"fabel", naam:"Fabel", kleur:"#7650A6"}],
        items:[
          {naam:"Een tomaat is eigenlijk een vrucht.", bak:"feit"},
          {naam:"In tomaten zit vitamine C.", bak:"feit"},
          {naam:"De rode kleur van een tomaat heet lycopeen.", bak:"feit"},
          {naam:"Tomaten en aardappels zijn familie van elkaar.", bak:"feit", uitleg:"Allebei horen ze bij de nachtschadefamilie."},
          {naam:"Tomaten komen oorspronkelijk uit Italië.", bak:"fabel", uitleg:"Ze komen uit Zuid-Amerika. Italië leerde ze pas later kennen."},
          {naam:"Tomaten groeien onder de grond, net als aardappels.", bak:"fabel", uitleg:"Ze hangen aan de plant, boven de grond."}
        ]}
    }
  },
  koppel:{
    titel:"Ken jij deze tomaten?",
    v:{ g56:"Elke tomaat heeft een eigen naam. Lees de hint, tik op het plaatje en daarna op de naam. Of sleep het plaatje naar de naam.",
        g78:"Acht tomatensoorten! Lees de hints goed: vorm en kleur verraden welke tomaat het is. Tik of sleep het plaatje naar de goede naam." },
    lijst:[
      {key:"cherrytomaat", naam:"Cherrytomaat", hint:"Zo klein als een knikker. In één hap op!"},
      {key:"pruimtomaat", naam:"Pruimtomaat", hint:"Langwerpig, net een ei. Goed voor soep en saus."},
      {key:"vleestomaat", naam:"Vleestomaat", hint:"Groot en plat, met ribbels aan de zijkant."},
      {key:"trostomaat", naam:"Trostomaat", hint:"Ze hangen nog met z'n allen aan een groen steeltje."},
      {key:"greenzebra", naam:"Green Zebra", hint:"Groen met gele strepen. Ook als hij rijp is!"},
      {key:"gelepeer", naam:"Gele peertomaat", hint:"Klein en geel, en gevormd als een peertje."},
      {key:"blackkrim", naam:"Black Krim", hint:"Donkerrood tot paarsbruin. Hij komt van de Krim, aan de Zwarte Zee."},
      {key:"ossenhart", naam:"Ossenhart", hint:"Groot en roze-rood, in de vorm van een hart."}
    ],
    g56:["cherrytomaat","pruimtomaat","greenzebra","gelepeer"],   // alleen deze bij groep 5-6
    goedZo:"Ja! Dat is de {naam}.",
    mis:"Nee, die past niet. Kijk nog eens naar de vorm en de kleur.",
    slot:"Super! Tomaten zijn er in allerlei vormen en kleuren."
  },
  quiz:{
    g56:[
      { v:"Waar komt de tomaat oorspronkelijk vandaan?", a:["Uit Italië","Uit Zuid-Amerika","Uit Nederland"], goed:1, img:"zuidamerika",
        weetje:"De tomaat komt uit Zuid-Amerika, uit de bergen van de Andes. Zo'n 500 jaar geleden namen ontdekkingsreizigers hem mee naar Europa." },
      { v:"Waar groeien de meeste Nederlandse tomaten?", a:["In het bos","In een kas","Op het strand"], goed:1, img:"kas",
        weetje:"Nederlandse tomaten groeien bijna allemaal in grote glazen kassen. Daar is het warm, en met lampen kunnen ze zelfs in de winter groeien." },
      { v:"Waarom wordt een tomaat rood?", a:["Door een rood kleurstofje","Door de zon die erop schijnt","De boer verft hem"], goed:0, img:"rijp",
        weetje:"Een jonge tomaat is groen. Als hij rijp wordt, maakt hij een rood kleurstofje: lycopeen. Hoe rijper, hoe roder!" }
    ],
    g78:[
      { v:"Ontdekkingsreizigers namen de tomaat mee van Zuid-Amerika naar Europa. Hoe lang geleden was dat?", a:["Ongeveer 50 jaar","Ongeveer 500 jaar","Ongeveer 5000 jaar"], goed:1, img:"zuidamerika",
        weetje:"De tomaat komt uit de Andes in Zuid-Amerika. In de 16e eeuw, zo'n 500 jaar geleden, kwam hij naar Europa. Eerst durfde bijna niemand hem te eten!" },
      { v:"Hoe kan een Nederlandse kas ook in de winter tomaten kweken?", a:["De tomaten slapen in de winter","De kweker regelt warmte en licht","Ze komen stiekem uit Spanje"], goed:1, img:"kas",
        weetje:"In een kas kan de kweker de warmte regelen, en met lampen geeft hij extra licht. Zo groeien er het hele jaar tomaten." },
      { v:"Wat is lycopeen?", a:["Een soort tomaat","Het rode kleurstofje in tomaten","Een ziekte van tomatenplanten"], goed:1, img:"rijp",
        weetje:"Lycopeen is het rode kleurstofje in rijpe tomaten. Een groene tomaat heeft het nog bijna niet; hoe rijper, hoe meer lycopeen." }
    ]
  },
  kunst:{
    titel:"Kijk-kunst: Stilleven met komkommers en tomaten", werk:"Stilleven met komkommers, tomaten en schalen", maker:"Luis Egidio Meléndez", jaar:"1774", plek:"Museo del Prado, Madrid",
    intro:"Geschilderd door Luis Egidio Meléndez, een Spaanse schilder, in 1774. Dat is al bijna 250 jaar geleden!",
    vragen:{
      g56:[
        {v:"Wat zie je allemaal? Kun jij de tomaten vinden?", uitleg:"Er liggen tomaten en komkommers, met een kom, borden en flesjes voor olie en azijn."},
        {v:"Welke kleuren zie je? Welke kleur valt het meest op?", uitleg:"Het rood van de tomaten springt eruit, tegen de donkere achtergrond."},
        {v:"Wat zou iemand met deze spullen gaan maken?", uitleg:"Met tomaten, komkommer, olie, azijn en zout maak je… een salade!"}
      ],
      g78:[
        {v:"Wat zie je allemaal? Kun jij de tomaten vinden?", uitleg:"Er liggen tomaten en komkommers, met een kom, borden en flesjes voor olie en azijn."},
        {v:"Hoe laat de schilder zien dat de tomaten glanzen en rond zijn?", uitleg:"Kijk naar de lichte vlekjes en de schaduwen. Zo lijkt het alsof je ze kunt pakken."},
        {v:"Wat zou iemand met deze spullen gaan maken?", uitleg:"Met tomaten, komkommer, olie, azijn en zout maak je… een salade!"},
        {v:"Waarom zou de schilder de achtergrond zo donker hebben gemaakt?", uitleg:"Bedenk het samen: wat gebeurt er met de kleuren vooraan als alles erachter donker is?"}
      ]
    }
  },
  maak:{
    titel:"Aan de slag: tomaten naar het echt!",
    stappen:{
      g56:["Kijk goed naar een paar echte tomaten. Wat is de vorm? Waar zit het steeltje?","Teken de tomaten met een zwarte fineliner. Laat een wit glimplekje open.","Kleur ze in met waterverf: rood, oranje en een beetje groen voor het steeltje."],
      g78:["Kijk goed naar een paar echte tomaten. Wat is de vorm? Waar zit het steeltje?","Teken de tomaten met een zwarte fineliner. Laat een wit glimplekje open.","Kleur ze in met waterverf: rood, oranje en een beetje groen voor het steeltje.","Maak de tomaat rond: verf de kant waar geen licht valt wat donkerder, net als Meléndez."]
    },
    nodig:["Zwarte fineliner","Waterverf","Wit tekenpapier","Een paar echte tomaten"],
    zeg:"Ik ben benieuwd of jouw tomaten zo echt lijken dat je er een hap uit wilt nemen!",
    voorbeeldAlt:"Voorbeeldtekening: drie tomaten met zwarte fineliner getekend en met waterverf ingekleurd"
  }
};
