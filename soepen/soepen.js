/* ==========================================================================
   Soepdetective · OVERZICHT VAN ALLE SOEPEN
   - SOEPEN: de volgorde op de beginpagina. Zet klaar:true zodra soepen/<id>/les.js af is.
     kleur = achtergrond van het kaartje op de beginpagina (licht houden, de kom moet goed zichtbaar zijn).
   - INGREDIENTEN: gedeelde lijst. Elke naam hoort bij een plaatje img/ingredienten/<sleutel>.webp,
     zodat ui, knoflook, zout enz. maar één keer getekend hoeven te worden.
   ========================================================================== */
const SOEPEN = [
  { id:"wortel",    naam:"Wortelsoep",      klaar:true,  kleur:"#FFD8AE" },
  { id:"tomaat",    naam:"Tomatensoep",     klaar:true,  kleur:"#FFC9BF" },
  { id:"doperwt",   naam:"Doperwtensoep",   klaar:false, kleur:"#D6EDB8" },
  { id:"broccoli",  naam:"Broccolisoep",    klaar:false, kleur:"#BFE0C2" },
  { id:"bloemkool", naam:"Bloemkoolsoep",   klaar:false, kleur:"#E9E2F3" },
  { id:"mais",      naam:"Maïssoep",        klaar:false, kleur:"#FFEBA0" },
  { id:"pompoen",   naam:"Pompoensoep",     klaar:false, kleur:"#FFD39A" }
];

const INGREDIENTEN = {
  wortel:"Wortel", ui:"Ui", bleekselderij:"Bleekselderij", zoeteaardappel:"Zoete aardappel", knoflook:"Knoflook", zout:"Zout", water:"Water",
  banaan:"Banaan", broccoli:"Broccoli", aardbei:"Aardbei", gember:"Gember", aardappel:"Aardappel",
  tomaat:"Tomaat", basilicum:"Basilicum", paprika:"Paprika", pompoen:"Pompoen"
};

const LESSEN = {};   // elke soepen/<id>/les.js vult hier LESSEN.<id> = { … }
