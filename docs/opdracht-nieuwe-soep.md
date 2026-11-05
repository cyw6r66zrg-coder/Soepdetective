# Opdracht voor Claude-chat: nieuwe soep voor Soepdetective

Plak deze tekst in de chat, samen met twee bijlagen:
1. `soepen/wortel/les.js`: het voorbeeld van het formaat
2. een paar bestaande plaatjes als stijlvoorbeeld (bijv. `img/ingredienten/wortel.webp`, `ui.webp`, `soepen/wortel/img/cover.webp`)

Vul hieronder `<SOEP>`, `<id>` en de ingrediënten in.

---

Maak voor mijn website Soepdetective (interactieve les bij de soepen van Good Soup, groep 5 t/m 8) de les voor de **<SOEP>** (`id`: `<id>`, kleine letters, geen spaties of accenten).
Ingrediënten volgens Good Soup: <LIJST>.

## Wat ik terug wil

Eén zip met precies deze mappen:

```
soepen/<id>/les.js
soepen/<id>/img/…          (zie lijst hieronder)
img/ingredienten/…         alleen NIEUWE ingrediënten die nog niet bestaan
nieuwe-ingredienten.txt    per regel: sleutel = Naam   (bijv. tomaat = Tomaat)
```

Bestaande ingrediënten (niet opnieuw maken): wortel, ui, bleekselderij, zoeteaardappel, knoflook, zout, water, banaan, broccoli, aardbei, gember, aardappel.

## les.js

- Precies dezelfde opbouw als het voorbeeld `les.js` van de wortelsoep, maar het begint met `LESSEN.<id> = {`.
- Alle blokken: `naam`, `mascotte`, `speurvraag`, `stappen`, `proef`, `lekker`, `speur`, `kern`, `lichaam`, `koppel`, `quiz`, `kunst`, `maak`.
- Tekst die per niveau verschilt: `{ g56:"…", g78:"…" }`.
- `mascotte` = de sleutel van het hoofdingrediënt (bijv. `"tomaat"`).
- `speur.goed` = echte ingrediënten, `speur.fout` = afleiders. Alle sleutels moeten bestaan of nieuw meegeleverd worden.
- `lichaam.plaatje`: naam van een plaatje uit deze soep (bijv. een quizplaatje) als illustratie bij feit of fabel.
- Volgorde van `stappen`: zoals bij de wortelsoep, met `lichaam` ná `quiz` (feit of fabel als overhoring).
- Quizvragen moeten zonder voorkennis te snappen zijn: geef context in de vraag zelf.
- `lichaam`, kaartjes voor groep 5-6: kies uit de bestaande lichaamsplaatjes `ogen, afweer, haar, oren, spieren, rennen`. Een ander lichaamsdeel? Lever dan `img/lichaam/<sleutel>.png` mee.
- `koppel`: 4 tot 8 rassen of soorten van het hoofdingrediënt, met hints over vorm en kleur. `g56` = de 4 makkelijkste.
- `kunst`: een **bestaand** kunstwerk, met maker, jaartal en museum. Controleer die gegevens bij het museum zelf en geef de bron.
- Feiten moeten kloppen. Zet onder de zip een lijstje met elk feit en je bron.

## Plaatjes (PNG of WEBP, deze namen, deze maten)

| bestand | maat (minimaal) | achtergrond |
|---|---|---|
| `soepen/<id>/img/cover.png` | 1024×576 (16:9) | vol; links leeg/licht voor de titel, mascotte-detective rechts |
| `soepen/<id>/img/detective.png` | 1024×576 (16:9) | vol |
| `soepen/<id>/img/soep.png` | 700×700 | crème `#FDF4E3`, kom soep (Claude Code haalt de achtergrond weg) |
| `soepen/<id>/img/pan.png` | 500×460 | **transparant**, pan met de soep |
| `soepen/<id>/img/koppel-<key>.png` | 300×300 | crème `#FDF4E3`, één per item in `koppel.lijst` |
| `soepen/<id>/img/<quiz-img>.png` | 1000×750 (4:3) | vol; namen zoals in `quiz[…].img` |
| `soepen/<id>/img/kunst.png` | ≥1600 breed | het kunstwerk (publiek domein, bijv. Rijksmuseum) |
| `soepen/<id>/img/voorbeeld.png` | 1100×820 (4:3) | voorbeeld van de opdracht bij "Aan de slag" |
| `img/ingredienten/<sleutel>.png` | ±360 hoog | **transparant**, alleen nieuwe ingrediënten |

**Stijl** (voor alles behalve het kunstwerk): getekend met zachte kleurpotlood-/aquareltextuur, warme kleuren, crème achtergrond `#FDF4E3`.
Ingrediënten en mascotte: vrolijk gezichtje met grote glimmende ogen, roze blosjes en een open lachende mond. Geen tekst in de plaatjes.
Houd de stijl gelijk aan de meegestuurde voorbeeldplaatjes.

---

## Daarna (in Claude Code)

Upload de zip in Claude Code met: *"Zet de <SOEP> erin."* Claude Code zet de plaatjes om naar webp, maakt achtergronden transparant waar nodig, voegt de ingrediëntnamen toe, zet de soep op `klaar:true`, draait `node tools/controleer.js`, werkt het voorbeeld bij en zet alles op GitHub.
