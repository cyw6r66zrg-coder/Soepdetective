"""Haalt de achtergrond weg van een plaatje (bv. de kom soep) en maakt het vierkant met doorzichtige achtergrond.
Gebruik (in de hoofdmap):  python3 tools/vrijstaand.py soepen/<id>/img/soep.webp
Eenmalig nodig:            pip install "rembg[cpu]"   (downloadt de eerste keer een model van ±180 MB)
Halfdoorzichtige resten (stoom, grijze waas) worden verwijderd; de rand blijft zacht.
Controleer het resultaat altijd even: dunne lijntjes (lepelsteel, stoom) kunnen rafelig worden."""
import sys
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove, new_session

sessie = new_session("isnet-general-use")
for f in sys.argv[1:]:
    im = remove(Image.open(f).convert("RGB"), session=sessie).convert("RGBA")
    a = np.asarray(im.getchannel("A")).astype(float)
    a = np.clip((a - 110) * 255 / 90, 0, 255)
    im.putalpha(Image.fromarray(a.astype("uint8")).filter(ImageFilter.GaussianBlur(0.6)))
    bb = im.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    m = 12
    im = im.crop((max(0, bb[0]-m), max(0, bb[1]-m), min(im.width, bb[2]+m), min(im.height, bb[3]+m)))
    z = max(im.size)
    vk = Image.new("RGBA", (z, z), (0, 0, 0, 0)); vk.paste(im, ((z-im.width)//2, (z-im.height)//2))
    vk.resize((640, 640), Image.LANCZOS).save(f, "WEBP", quality=88, method=6)
    print(f"{f}: achtergrond weg, 640×640")
