/* ==========================================================================
   Soepdetective · OVERZICHT VAN ALLE SOEPEN
   - SOEPEN: de volgorde op de beginpagina. Zet klaar:true zodra soepen/<id>/les.js af is.
   - INGREDIENTEN: gedeelde lijst. Elke naam hoort bij een plaatje img/ingredienten/<sleutel>.webp,
     zodat ui, knoflook, zout enz. maar één keer getekend hoeven te worden.
   ========================================================================== */
const SOEPEN = [
  { id:"wortel",    naam:"Wortelsoep",      klaar:true  },
  { id:"tomaat",    naam:"Tomatensoep",     klaar:true  },
  { id:"doperwt",   naam:"Doperwtensoep",   klaar:false },
  { id:"broccoli",  naam:"Broccolisoep",    klaar:false },
  { id:"bloemkool", naam:"Bloemkoolsoep",   klaar:false },
  { id:"mais",      naam:"Maïssoep",        klaar:false },
  { id:"pompoen",   naam:"Pompoensoep",     klaar:false }
];

const INGREDIENTEN = {
  wortel:"Wortel", ui:"Ui", bleekselderij:"Bleekselderij", zoeteaardappel:"Zoete aardappel", knoflook:"Knoflook", zout:"Zout", water:"Water",
  banaan:"Banaan", broccoli:"Broccoli", aardbei:"Aardbei", gember:"Gember", aardappel:"Aardappel",
  tomaat:"Tomaat", basilicum:"Basilicum", paprika:"Paprika"
};

const LESSEN = {};   // elke soepen/<id>/les.js vult hier LESSEN.<id> = { … }
