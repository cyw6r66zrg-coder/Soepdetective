/* ==========================================================================
   Soepdetective · OVERZICHT VAN ALLE SOEPEN
   - SOEPEN: de volgorde op de beginpagina. Zet klaar:true zodra soepen/<id>/les.js af is.
     kleur = achtergrond van het kaartje op de beginpagina (licht houden, de kom moet goed zichtbaar zijn).
     accent / accentDonker = eigen kleur van de les (knoppen, titelstreepje, stappen). Donker genoeg voor witte tekst.
   - INGREDIENTEN: gedeelde lijst. Elke naam hoort bij een plaatje img/ingredienten/<sleutel>.webp,
     zodat ui, knoflook, zout enz. maar één keer getekend hoeven te worden.
   ========================================================================== */
const SOEPEN = [
  { id:"wortel",    naam:"Wortelsoep",      klaar:true,  kleur:"#FFD8AE", accent:"#E06A12", accentDonker:"#9E4508" },
  { id:"tomaat",    naam:"Tomatensoep",     klaar:true,  kleur:"#FFC9BF", accent:"#D7402B", accentDonker:"#9C2A1C" },
  { id:"erwt",      naam:"Erwtensoep",      klaar:false, kleur:"#D6EDB8", accent:"#4E8A2E", accentDonker:"#335C1E" },
  { id:"broccoli",  naam:"Broccolisoep",    klaar:true, kleur:"#BFE0C2", accent:"#3E8A3A", accentDonker:"#2A5E27" },
  { id:"bloemkool", naam:"Bloemkoolsoep",   klaar:true, kleur:"#E9E2F3", accent:"#6C4FA0", accentDonker:"#4A3570" },
  { id:"mais",      naam:"Maïssoep",        klaar:true, kleur:"#FFEBA0", accent:"#B07D00", accentDonker:"#7A5600" },
  { id:"courgette", naam:"Courgettesoep",   klaar:true, kleur:"#E3EBC8", accent:"#6B7F1F", accentDonker:"#4A5915" },
  { id:"pompoen",   naam:"Pompoensoep",     klaar:true,  kleur:"#FFD39A", accent:"#BE4F1C", accentDonker:"#843410" }
];

const INGREDIENTEN = {
  wortel:"Wortel", ui:"Ui", bleekselderij:"Bleekselderij", zoeteaardappel:"Zoete aardappel", knoflook:"Knoflook", zout:"Zout", water:"Water",
  banaan:"Banaan", broccoli:"Broccoli", aardbei:"Aardbei", gember:"Gember", aardappel:"Aardappel",
  tomaat:"Tomaat", basilicum:"Basilicum", paprika:"Paprika", pompoen:"Pompoen", mais:"Maïs", bloemkool:"Bloemkool",
  tijm:"Tijm", tomatenpuree:"Tomatenpuree", spinazie:"Spinazie", kerrie:"Kerrie", courgette:"Courgette", koolrabi:"Koolrabi"
};

const LESSEN = {};   // elke soepen/<id>/les.js vult hier LESSEN.<id> = { … }
