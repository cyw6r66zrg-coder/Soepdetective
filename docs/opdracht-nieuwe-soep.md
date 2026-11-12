# Opdracht voor Claude-chat: nieuwe soep voor Soepdetective

Plak deze tekst in de chat, samen met twee bijlagen:
1. `soepen/tomaat/les.js`: het voorbeeld van het formaat (de nieuwste versie)
2. een paar bestaande plaatjes als stijlvoorbeeld (bijv. `img/ingredienten/wortel.webp`, `ui.webp`, `soepen/wortel/img/cover.webp`)

Vul hieronder `<SOEP>`, `<id>` en de ingrediënten in.

---

Maak voor mijn website Soepdetective (interactieve les bij de soepen van Good Soup, groep 5 t/m 8) de les voor de **<SOEP>** (`id`: `<id>`, kleine letters, geen spaties of accenten).
Ingrediënten volgens het etiket van Good Soup: <LIJST>.

**Harde regel: staat hierboven geen ingrediëntenlijst, maak dan géén les maar vraag er eerst om. Verzin nooit ingrediënten.**

## Wat ik terug wil

Eén zip met precies deze mappen:

```
soepen/<id>/les.js
soepen/<id>/img/…          (zie lijst hieronder)
img/ingredienten/…         alleen NIEUWE ingrediënten die nog niet bestaan
nieuwe-ingredienten.txt    per regel: sleutel = Naam   (bijv. tomaat = Tomaat)
```

Bestaande ingrediënten (niet opnieuw maken): wortel, ui, bleekselderij, zoeteaardappel, knoflook, zout, water, banaan, broccoli, aardbei, gember, aardappel, tomaat, basilicum, paprika.

## les.js

- Precies dezelfde opbouw als het voorbeeld `les.js` van de tomatensoep, maar het begint met `LESSEN.<id> = {`.
- Alle blokken: `naam`, `mascotte`, `speurvraag`, `stappen`, `onderbouw`, `proef`, `lekker`, `speur`, `kern`, `lichaam`, `koppel`, `quiz`, `kunst`, `maak`.
- Tekst die per niveau verschilt: `{ g56:"…", g78:"…" }`.
- `mascotte` = de sleutel van het hoofdingrediënt (bijv. `"tomaat"`).
- `speur.goed` = echte ingrediënten, `speur.fout` = afleiders. Alle sleutels moeten bestaan of nieuw meegeleverd worden.
- `lichaam.plaatje`: altijd `"feitfabel"`: een losse, volledige illustratie van het hoofdingrediënt (een bos, tros of mand), geen quizplaatje.
- Volgorde van `stappen`: zoals bij de tomatensoep, met `lichaam` ná `quiz` (feit of fabel als overhoring).
- Quizvragen moeten zonder voorkennis te snappen zijn: geef context in de vraag zelf.
- `lichaam`, kaartjes voor groep 5-6: kies uit de bestaande lichaamsplaatjes `ogen, afweer, haar, oren, spieren, rennen`. Een ander lichaamsdeel? Lever dan `img/lichaam/<sleutel>.png` mee.
- `koppel`: 4 tot 8 rassen of soorten van het hoofdingrediënt, met hints over vorm en kleur. `g56` = de 4 makkelijkste.
- `kunst`: een **bestaand** kunstwerk, met maker, jaartal en museum. Controleer die gegevens bij het museum zelf en geef de bron.
- Feiten moeten kloppen. Lever `BRONNEN.md` mee met elk feit en je bron. Regels:
  - Niet overdrijven ("bijna niemand", "altijd", "nooit"): schrijf wat de bron zegt.
  - Precies formuleren: een kleurstofje is niet "de kleur".
  - Gezondheidsclaims alleen met het Voedingscentrum als bron.
  - Kijkvragen bij het kunstwerk: benoem alleen wat je op het werk echt ziet.

### Maximale lengtes (anders past de dia niet op het digibord)

| tekst | maximaal |
|---|---|
| titel van een dia | 45 tekens |
| quizvraag | 95 tekens |
| quizantwoord | 40 tekens |
| weetje bij de quiz | 170 tekens |
| kaartje feit of fabel (6 stuks) | 70 tekens, uitleg 60 tekens |
| hint bij koppelen | 70 tekens |
| naam van een ingrediënt | 16 tekens |

### Kleuterles (`onderbouw`, groep 1-2)

- `kleur`: de kleur van de soep (oranje, groen, paars → mengspel; rood, geel → kleurenjacht met `kleurspel`, zie de tomatensoep).
- `spel`: één spel dat alleen bij deze groente past. Bestaande spelvormen:
  - `volgorde`: 4 plaatjes in de goede volgorde tikken (wortel: zaadje → wortel).
  - `pluk`: alleen de goede plaatjes aantikken (tomaat: alleen de rijpe).
  Past geen van beide? Beschrijf dan het spel dat je voorstelt; Claude Code bouwt de spelvorm.
- Plaatjes voor het spel: `soepen/<id>/img/ob-<naam>-<nr>.png`, 640×640, **transparant**, zonder tekst.

## Plaatjes (PNG of WEBP, deze namen, deze maten)

| bestand | maat (minimaal) | achtergrond |
|---|---|---|
| `soepen/<id>/img/cover.png` | 1024×576 (16:9) | vol; links leeg/licht voor de titel, mascotte-detective rechts |
| `soepen/<id>/img/detective.png` | 1024×576 (16:9) | vol |
| `soepen/<id>/img/soep.png` | 700×700 | crème `#FDF4E3`, kom soep (Claude Code haalt de achtergrond weg) |
| `soepen/<id>/img/pan.png` | 500×460 | **transparant**, pan met de soep |
| `soepen/<id>/img/koppel-<key>.png` | 300×300 | crème `#FDF4E3`, één per item in `koppel.lijst` |
| `soepen/<id>/img/<quiz-img>.png` | 1000×750 (4:3) | vol; namen zoals in `quiz[…].img` |
| `soepen/<id>/img/feitfabel.png` | 640×640 | crème `#FDF4E3`, het hoofdingrediënt volledig in beeld (bos, tros, mand) |
| `soepen/<id>/img/kunst.png` | ≥1600 breed, **niet opgeschaald** | het kunstwerk (publiek domein). Lukt downloaden niet: lever het niet mee en geef de link |
| `soepen/<id>/img/voorbeeld.png` | 1100×820 (4:3) | voorbeeld van de opdracht bij "Aan de slag" |
| `img/ingredienten/<sleutel>.png` | ±360 hoog | **transparant**, zonder lege randen, alleen nieuwe ingrediënten |

**Stijl** (voor alles behalve het kunstwerk): getekend met zachte kleurpotlood-/aquareltextuur, warme kleuren, crème achtergrond `#FDF4E3`.
Ingrediënten en mascotte: vrolijk gezichtje met grote glimmende ogen, roze blosjes en een open lachende mond. Geen tekst in de plaatjes.
Houd de stijl gelijk aan de meegestuurde voorbeeldplaatjes.

---

## Daarna (in Claude Code)

Upload de zip in Claude Code met: *"Zet de <SOEP> erin."* Claude Code zet de plaatjes om naar webp, maakt achtergronden transparant waar nodig, voegt de ingrediëntnamen toe, zet de soep op `klaar:true`, draait `node tools/controleer.js`, werkt het voorbeeld bij en zet alles op GitHub.
