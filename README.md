# Soepdetective

Interactieve lessen bij de soepen van Good Soup, voor de onderbouw (groep 1-2), middenbouw (groep 5-6) en bovenbouw (groep 7-8) (OBSH).
Klaar: **Wortelsoep**. Andere soepen volgen.

## Opbouw

```
index.html                 de motor: opmaak, schermen en spelletjes (geen lesinhoud!)
soepen/soepen.js           lijst van alle soepen + gedeelde ingrediëntennamen
soepen/<soep>/les.js       alle teksten van één soep
soepen/<soep>/img/         plaatjes die alleen bij die soep horen
img/ingredienten/          ingrediënten, gedeeld door alle soepen (ui.webp, knoflook.webp …)
img/lichaam/               lichaamskaartjes (ogen.webp, spieren.webp …)
img/algemeen/              smileys
tools/controleer.js        controleert of elke soep compleet is
tools/vrijstaand.py        haalt de achtergrond van een plaatje weg (bv. de kom soep)
tools/bijsnijden.py        snijdt lege randen van ingrediënt- en lichaamsplaatjes weg (zelfde grootte)
docs/opdracht-nieuwe-soep.md  opdracht om in Claude-chat een nieuwe soep te laten maken
fonts/                     lettertypes Baloo 2 en Nunito (zelf gehost, SIL Open Font License)
```

Een soep open je direct met `#<id>` achter het adres, bijvoorbeeld `…/index.html#wortel`.

## Een nieuwe soep toevoegen

1. Kopieer `soepen/wortel/` naar `soepen/<id>/` (bijv. `soepen/tomaat/`).
2. Begin `les.js` met `LESSEN.<id> = {` en vervang alle teksten.
   Tekst die per niveau verschilt schrijf je als `{ g56:"…", g78:"…" }`.
3. Zet in `soepen/<id>/img/` deze plaatjes (vaste namen, `.webp`):
   - `soep`: kom soep (ook op de keuzepagina)
   - `cover`: voorblad
   - `pan`: pan voor "Wat zit erin?"
   - `detective`: plaat bij de speurvraag
   - `koppel-<key>`: één per item in `koppel.lijst`
   - de quizplaatjes: de namen in `quiz[…].img`
   - `kunst`: het kunstwerk
   - `voorbeeld`: voorbeeld van de opdracht
4. Nieuwe ingrediënten krijgen een naam in `INGREDIENTEN` (in `soepen/soepen.js`)
   en een plaatje `img/ingredienten/<sleutel>.webp`. Bestaande (ui, zout, water …) hergebruik je.
5. Zet de soep in `soepen/soepen.js` op `klaar:true` en geef hem een lichte `kleur` voor het kaartje op de beginpagina.
   Haal de achtergrond van de kom weg: `python3 tools/vrijstaand.py soepen/<id>/img/soep.webp`.
6. Controleer: `node tools/controleer.js`. Dat moet "Alles in orde." geven.

Een scherm overslaan? Haal het weg uit `stappen` in `les.js`.
Het scherm `koppel` (bij wortel: de wortelrassen) kan voor elke soep iets anders zijn: tomatenrassen, erwten in de peul, enz.

## Lokaal bekijken

`index.html` werkt gewoon door te dubbelklikken. Of start een server in deze map:

```bash
python3 -m http.server 8000
```

en open daarna http://localhost:8000.

## Bronnen kunstwerken (publiek domein)

- Wortelsoep: Hendrick Sorgh, *De groentemarkt*, 1664. Rijksmuseum, Amsterdam (SK-A-717).
- Tomatensoep: Luis Egidio Meléndez, *Bodegón: pepinos, tomates y recipientes*, 1774. Museo del Prado, Madrid (P000930).
  Afbeelding: Wikimedia Commons, `Bodegón_con_pepinos_y_tomates-Meléndez.jpg`.
