"""Snijdt lege (doorzichtige) randen weg van ingrediëntplaatjes, zodat ze allemaal even groot ogen.
Gebruik (in de hoofdmap):  python3 tools/bijsnijden.py img/ingredienten/*.webp
Laat een marge van 3% over en schaalt naar 360 pixels hoog (kleinere plaatjes worden niet vergroot)."""
import sys
from PIL import Image
for f in sys.argv[1:]:
    im = Image.open(f).convert("RGBA")
    bb = im.getchannel("A").point(lambda a: 255 if a > 20 else 0).getbbox()
    if not bb: print("leeg:", f); continue
    w, h = bb[2]-bb[0], bb[3]-bb[1]; m = round(max(w, h)*0.03)
    bb = (max(0,bb[0]-m), max(0,bb[1]-m), min(im.width,bb[2]+m), min(im.height,bb[3]+m))
    uit = im.crop(bb)
    if uit.height > 360: uit = uit.resize((round(uit.width*360/uit.height), 360), Image.LANCZOS)
    uit.save(f, "WEBP", quality=90, method=6)
    print(f"{f}: {im.size} -> {uit.size}")
