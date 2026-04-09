# Reborn in Shadow — Chronicles of the Forgotten One

Eine Isekai-Visual-Novel PWA mit echten Konsequenzen, verzweigten Pfaden und 7 Enden.

## Setup (einmalig, am PC)

### 1. Repository erstellen
1. GitHub öffnen → **New repository**
2. Name: `reborn-in-shadow` (oder nach Wahl)
3. **Public** auswählen (für kostenloses GitHub Pages)
4. **Create repository**

### 2. Dateien hochladen
```bash
# Option A: Git (empfohlen)
git init
git add .
git commit -m "Initial commit — Prolog + Akt I"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/reborn-in-shadow.git
git push -u origin main

# Option B: GitHub Web-Interface
# Alle Dateien per Drag & Drop hochladen
```

### 3. GitHub Pages aktivieren
1. Repository → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Speichern

Nach dem ersten Push deployt GitHub Actions automatisch.
Die URL lautet: `https://DEIN-USERNAME.github.io/reborn-in-shadow/`

### 4. Als PWA auf iPhone installieren
1. URL in Safari öffnen
2. Teilen-Symbol tippen (Viereck mit Pfeil nach oben)
3. **„Zum Home-Bildschirm"** auswählen
4. Name bestätigen → **Hinzufügen**

Die App läuft jetzt offline und sieht aus wie eine native App.

---

## Projektstruktur

```
reborn-in-shadow/
├── index.html              # Haupt-App (Engine + UI)
├── manifest.json           # PWA-Manifest
├── sw.js                   # Service Worker (Offline)
├── src/
│   ├── engine.js           # Game-Engine (State, Flags, Endings)
│   └── data/
│       ├── prolog.js       # Prolog: Kapitel 0.1–0.2
│       ├── akt1.js         # Akt I: Kapitel 1–4
│       ├── akt2.js         # [folgt]
│       ├── akt3.js         # [folgt]
│       ├── akt4.js         # [folgt]
│       ├── akt5.js         # [folgt]
│       └── akt6.js         # [folgt] incl. 7 Enden
├── icons/
│   ├── icon-192.png        # PWA Icon (192×192)
│   └── icon-512.png        # PWA Icon (512×512)
└── .github/
    └── workflows/
        └── deploy.yml      # Auto-Deploy
```

## Icons erstellen (schnell)

Erstelle zwei quadratische Bilder (z.B. schwarzer Hintergrund mit grünem "∅"):
- `icons/icon-192.png` — 192×192 Pixel
- `icons/icon-512.png` — 512×512 Pixel

Online-Tools: [favicon.io](https://favicon.io) oder [realfavicongenerator.net](https://realfavicongenerator.net)

## Fortschritt

- [x] Engine: State, Flags, Affinitäten, Alignment, 7-Enden-Berechnung
- [x] PWA: Manifest, Service Worker, Offline-Fähigkeit
- [x] Auto-Deploy: GitHub Actions
- [x] Prolog: Kapitel 0.1–0.2 (vollständig texttreu, echte Verzweigungen)
- [x] Akt I: Kapitel 1–4 (vollständig texttreu, Affinitäts-Tracking)
- [ ] Akt II: Kapitel 5–11
- [ ] Akt III: Kapitel 12–20
- [ ] Akt IV: Kapitel 21–30
- [ ] Akt V: Kapitel 31–40
- [ ] Akt VI: Kapitel 41–46 + 7 Enden

## Nach Updates (vom iPhone)

Neue Story-Daten können direkt über github.com bearbeitet und committed werden.
Der Service Worker lädt beim nächsten App-Start automatisch die neue Version.
