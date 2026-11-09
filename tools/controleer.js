/* Controleert alle soepen die op klaar:true staan.
   Gebruik (in de hoofdmap):  node tools/controleer.js
   Meldt ontbrekende onderdelen, ontbrekende plaatjes en ingrediënten zonder naam. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = vm.createContext({});
const laad = f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8") + "\n;this.SOEPEN=SOEPEN;this.INGREDIENTEN=INGREDIENTEN;this.LESSEN=LESSEN;", ctx, { filename: f });
laad("soepen/soepen.js");
const { SOEPEN, INGREDIENTEN, LESSEN } = ctx;

const SCHERMEN = ["proef", "lekker", "speur", "speurvraag", "lichaam", "koppel", "quiz", "kunst", "maak"];
const DATA = { speurvraag: "kern" };            // scherm "speurvraag" leest LES.kern
const niveaus = x => (x && typeof x === "object" && "g56" in x) ? [x.g56, x.g78] : [x];
let fouten = 0;

for (const soep of SOEPEN.filter(s => s.klaar)) {
  const f = `soepen/${soep.id}/les.js`, fout = t => { fouten++; console.log(`  ✗ ${t}`); };
  console.log(`\n${soep.naam} (${f})`);
  if (!fs.existsSync(path.join(root, f))) { fout("les.js ontbreekt"); continue; }
  try { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }); }
  catch (e) { fout("fout in les.js: " + e.message); continue; }
  const L = LESSEN[soep.id];
  if (!L) { fout(`les.js moet beginnen met LESSEN.${soep.id} = {`); continue; }

  const plaatjes = new Set(["soep", "pan", "cover"]);
  const ing = new Set([L.mascotte]);
  const lijf = new Set();
  for (const k of ["naam", "mascotte", "speurvraag", "stappen"]) if (!L[k]) fout(`"${k}" ontbreekt`);
  for (const st of L.stappen || []) {
    if (!SCHERMEN.includes(st.id)) { fout(`onbekend scherm "${st.id}" (kan: ${SCHERMEN.join(", ")})`); continue; }
    if (!L[DATA[st.id] || st.id]) fout(`scherm "${st.id}" staat in stappen, maar het blok "${DATA[st.id] || st.id}" ontbreekt`);
  }
  if (L.speur) { L.speur.goed.forEach(k => ing.add(k)); niveaus(L.speur.fout).flat().forEach(k => ing.add(k)); }
  if (L.kern) plaatjes.add("detective");
  if (L.lichaam && L.lichaam.plaatje) plaatjes.add(L.lichaam.plaatje);
  if (L.lichaam) niveaus(L.lichaam.act).forEach(a => a && a.type === "kaarten" && a.opties.forEach(o => lijf.add(o.key)));
  if (L.koppel) L.koppel.lijst.forEach(x => plaatjes.add("koppel-" + x.key));
  if (L.quiz) niveaus(L.quiz).flat().forEach(q => plaatjes.add(q.img));
  if (L.kunst) plaatjes.add("kunst");
  const sp = L.onderbouw && L.onderbouw.spel;   // kleuterles: plaatjes van het soepspel
  if (sp) { if (!["volgorde","pluk"].includes(sp.type)) fout(`onderbouw.spel.type "${sp.type}" bestaat niet (kan: volgorde, pluk)`);
    (sp.stappen || sp.items || []).forEach(x => plaatjes.add(x.img)); }
  if (L.maak) plaatjes.add("voorbeeld");

  for (const k of ing) {
    if (!INGREDIENTEN[k]) fout(`ingrediënt "${k}" staat niet in INGREDIENTEN (soepen/soepen.js)`);
    if (!fs.existsSync(path.join(root, `img/ingredienten/${k}.webp`))) fout(`plaatje ontbreekt: img/ingredienten/${k}.webp`);
  }
  for (const k of lijf) if (!fs.existsSync(path.join(root, `img/lichaam/${k}.webp`))) fout(`plaatje ontbreekt: img/lichaam/${k}.webp`);
  for (const n of plaatjes) if (!fs.existsSync(path.join(root, `soepen/${soep.id}/img/${n}.webp`))) fout(`plaatje ontbreekt: soepen/${soep.id}/img/${n}.webp`);
  if (fouten === 0) console.log("  ✓ in orde");
}
console.log(fouten ? `\n${fouten} probleem/problemen gevonden.` : "\nAlles in orde.");
process.exit(fouten ? 1 : 0);
