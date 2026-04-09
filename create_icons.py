#!/usr/bin/env python3
"""
Erstellt Placeholder-Icons für die PWA.
Führe aus: python3 create_icons.py
Benötigt: pip install Pillow
"""
try:
    from PIL import Image, ImageDraw, ImageFont
    import os

    os.makedirs('icons', exist_ok=True)

    for size in [192, 512]:
        img = Image.new('RGB', (size, size), color='#06060a')
        draw = ImageDraw.Draw(img)

        # Äußerer Rahmen
        margin = size // 12
        draw.rectangle(
            [margin, margin, size - margin, size - margin],
            outline='#2dff8a', width=max(1, size // 96)
        )

        # Symbol
        font_size = size // 3
        try:
            font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', font_size)
        except:
            font = ImageFont.load_default()

        symbol = '∅'
        bbox = draw.textbbox((0, 0), symbol, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        x = (size - tw) // 2
        y = (size - th) // 2 - size // 20
        draw.text((x, y), symbol, fill='#2dff8a', font=font)

        # Untertitel
        try:
            small_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', size // 14)
        except:
            small_font = ImageFont.load_default()

        subtitle = 'NULL'
        sbbox = draw.textbbox((0, 0), subtitle, font=small_font)
        sw = sbbox[2] - sbbox[0]
        draw.text(((size - sw) // 2, y + th + size // 20), subtitle, fill='#9b6fe8', font=small_font)

        img.save(f'icons/icon-{size}.png')
        print(f'✓ icons/icon-{size}.png erstellt')

    print('\nIcons erfolgreich erstellt!')
    print('Tipp: Ersetze sie durch eigene Icons für ein besseres Aussehen.')

except ImportError:
    print('Pillow nicht installiert. Installiere mit: pip install Pillow')
    print('Oder erstelle die Icons manuell: icons/icon-192.png und icons/icon-512.png')
    # Einfache Fallback: leere SVG-Datei als Platzhalter
    import os
    os.makedirs('icons', exist_ok=True)
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <rect width="192" height="192" fill="#06060a"/>
  <rect x="10" y="10" width="172" height="172" fill="none" stroke="#2dff8a" stroke-width="2"/>
  <text x="96" y="115" font-family="monospace" font-size="72" fill="#2dff8a" text-anchor="middle">∅</text>
  <text x="96" y="150" font-family="monospace" font-size="18" fill="#9b6fe8" text-anchor="middle">NULL</text>
</svg>'''
    with open('icons/icon.svg', 'w') as f:
        f.write(svg)
    print('Fallback: icons/icon.svg erstellt (kein PNG)')
