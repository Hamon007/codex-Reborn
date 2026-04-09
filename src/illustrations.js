// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — SCENE ILLUSTRATIONS
// SVG-Illustrationen für Schlüsselszenen
// Inline SVGs, keine externen Abhängigkeiten, PWA-offline-fähig
// ═══════════════════════════════════════════════════════

export const SCENE_ILLUSTRATIONS = {

  // ─── BÜRO / SERVERRAUM ─────────────────────────────────────────────────
  server: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" style="width:100%;max-height:180px">
  <defs>
    <radialGradient id="sg1" cx="50%" cy="60%" r="60%">
      <stop offset="0%" stop-color="#0a0a1f"/>
      <stop offset="100%" stop-color="#06060a"/>
    </radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="400" height="200" fill="url(#sg1)"/>
  <!-- Monitors -->
  <rect x="60" y="60" width="80" height="55" rx="3" fill="#0d1a2e" stroke="#1a3a5c" stroke-width="1.5"/>
  <rect x="63" y="63" width="74" height="46" fill="#030f1f"/>
  <!-- Code on monitor -->
  <line x1="67" y1="70" x2="120" y2="70" stroke="#2dff8a" stroke-width="1" opacity="0.7"/>
  <line x1="67" y1="76" x2="105" y2="76" stroke="#4a9eff" stroke-width="1" opacity="0.5"/>
  <line x1="67" y1="82" x2="115" y2="82" stroke="#2dff8a" stroke-width="1" opacity="0.7"/>
  <line x1="67" y1="88" x2="95" y2="88" stroke="#9b6fe8" stroke-width="1" opacity="0.5"/>
  <line x1="67" y1="94" x2="108" y2="94" stroke="#2dff8a" stroke-width="1" opacity="0.6"/>
  <rect x="60" y="115" width="80" height="5" rx="1" fill="#0a0a14"/>
  <!-- Map monitor -->
  <rect x="155" y="55" width="90" height="65" rx="3" fill="#0d1a2e" stroke="#1a3a5c" stroke-width="1.5"/>
  <rect x="158" y="58" width="84" height="56" fill="#030f1f"/>
  <!-- Map grid -->
  <line x1="158" y1="80" x2="242" y2="80" stroke="#1a3a5c" stroke-width="0.5" opacity="0.5"/>
  <line x1="158" y1="92" x2="242" y2="92" stroke="#1a3a5c" stroke-width="0.5" opacity="0.5"/>
  <line x1="185" y1="58" x2="185" y2="114" stroke="#1a3a5c" stroke-width="0.5" opacity="0.5"/>
  <line x1="214" y1="58" x2="214" y2="114" stroke="#1a3a5c" stroke-width="0.5" opacity="0.5"/>
  <circle cx="200" cy="86" r="8" fill="none" stroke="#4a9eff" stroke-width="1" opacity="0.6"/>
  <circle cx="200" cy="86" r="3" fill="#4a9eff" opacity="0.4"/>
  <!-- Chat monitor -->
  <rect x="260" y="60" width="80" height="55" rx="3" fill="#0d1a2e" stroke="#1a3a5c" stroke-width="1.5"/>
  <rect x="263" y="63" width="74" height="46" fill="#030f1f"/>
  <rect x="266" y="67" width="65" height="8" rx="1" fill="#1a2a3a" opacity="0.8"/>
  <rect x="266" y="79" width="50" height="8" rx="1" fill="#1a2a3a" opacity="0.8"/>
  <rect x="266" y="91" width="60" height="8" rx="1" fill="#1a2a3a" opacity="0.8"/>
  <text x="268" y="74" font-family="monospace" font-size="5" fill="#e05c5c" opacity="0.8">TANABE [18:32]</text>
  <text x="268" y="86" font-family="monospace" font-size="5" fill="#5a5468" opacity="0.7">Wir müssen reden...</text>
  <!-- Desk -->
  <rect x="40" y="128" width="320" height="6" fill="#0a0a14"/>
  <!-- Energy drink cans -->
  <rect x="340" y="110" width="8" height="18" rx="2" fill="#1a3a1a" stroke="#2d5a2d" stroke-width="0.5"/>
  <rect x="352" y="112" width="8" height="16" rx="2" fill="#1a3a1a" stroke="#2d5a2d" stroke-width="0.5"/>
  <!-- Post-it -->
  <rect x="80" y="52" width="30" height="10" fill="#c9a96e" opacity="0.7"/>
  <text x="82" y="60" font-family="monospace" font-size="3.5" fill="#06060a">BALANCE FIX!</text>
  <!-- Error message flash -->
  <rect x="140" y="20" width="120" height="30" rx="2" fill="#1a0404" stroke="#e05c5c" stroke-width="1" opacity="0.9"/>
  <text x="150" y="32" font-family="monospace" font-size="5" fill="#e05c5c">!! CRITICAL ERROR !!</text>
  <text x="148" y="42" font-family="monospace" font-size="4" fill="#9b6fe8">Genesis Protocol: ACTIVATING</text>
  <!-- Glow from server below -->
  <ellipse cx="200" cy="195" rx="60" ry="15" fill="#4a9eff" opacity="0.15"/>
</svg>`,

  // ─── LEUCHTENDER SERVER (KELLER) ───────────────────────────────────────
  server_glowing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <radialGradient id="sg2" cx="50%" cy="70%" r="70%">
      <stop offset="0%" stop-color="#001435"/>
      <stop offset="60%" stop-color="#03091a"/>
      <stop offset="100%" stop-color="#06060a"/>
    </radialGradient>
    <radialGradient id="serverGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4a9eff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#4a9eff" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur2"><feGaussianBlur stdDeviation="4"/></filter>
  </defs>
  <rect width="400" height="200" fill="url(#sg2)"/>
  <!-- Server rack glow -->
  <rect x="155" y="20" width="90" height="160" fill="url(#serverGlow)" filter="url(#blur2)" opacity="0.7"/>
  <!-- Server rack -->
  <rect x="165" y="30" width="70" height="150" rx="4" fill="#0a0d14" stroke="#4a9eff" stroke-width="2" opacity="0.9"/>
  <!-- Server units -->
  <rect x="170" y="38" width="60" height="12" rx="1" fill="#0d1525" stroke="#1a4a7a" stroke-width="0.5"/>
  <rect x="172" y="40" width="3" height="8" rx="1" fill="#2dff8a"/>
  <rect x="177" y="40" width="3" height="8" rx="1" fill="#2dff8a" opacity="0.7"/>
  <rect x="182" y="40" width="3" height="8" rx="1" fill="#4a9eff"/>
  <rect x="170" y="54" width="60" height="12" rx="1" fill="#0d1525" stroke="#1a4a7a" stroke-width="0.5"/>
  <rect x="172" y="56" width="3" height="8" rx="1" fill="#2dff8a"/>
  <rect x="170" y="70" width="60" height="12" rx="1" fill="#0d1525" stroke="#2a5a9a" stroke-width="1"/>
  <!-- Glowing pattern on server surface -->
  <path d="M170 90 Q200 85 230 90 Q200 95 170 90" stroke="#4a9eff" stroke-width="1" fill="none" opacity="0.8"/>
  <path d="M170 100 Q200 95 230 100 Q200 105 170 100" stroke="#9b6fe8" stroke-width="1" fill="none" opacity="0.6"/>
  <circle cx="200" cy="120" r="15" fill="none" stroke="#4a9eff" stroke-width="1" opacity="0.7"/>
  <circle cx="200" cy="120" r="8" fill="none" stroke="#9b6fe8" stroke-width="1" opacity="0.5"/>
  <circle cx="200" cy="120" r="3" fill="#4a9eff" opacity="0.8"/>
  <!-- Terminal text on small screen -->
  <rect x="176" y="140" width="48" height="30" rx="1" fill="#030f1f" stroke="#1a4a7a" stroke-width="0.5"/>
  <text x="178" y="151" font-family="monospace" font-size="4" fill="#2dff8a">&gt; Hello, Anomaly.</text>
  <text x="178" y="158" font-family="monospace" font-size="4" fill="#2dff8a">&gt; You wrote me</text>
  <text x="178" y="165" font-family="monospace" font-size="4" fill="#9b6fe8">&gt; a door.</text>
  <!-- Floating symbols in air -->
  <text x="80" y="80" font-family="monospace" font-size="10" fill="#4a9eff" opacity="0.4">NULL</text>
  <text x="290" y="110" font-family="monospace" font-size="8" fill="#9b6fe8" opacity="0.3">0x00</text>
  <text x="100" y="140" font-family="monospace" font-size="7" fill="#2dff8a" opacity="0.3">ERR</text>
  <text x="310" y="60" font-family="monospace" font-size="9" fill="#4a9eff" opacity="0.3">∅</text>
  <!-- Floor glow -->
  <ellipse cx="200" cy="190" rx="80" ry="12" fill="#4a9eff" opacity="0.2"/>
</svg>`,

  // ─── DIE LEERE / VOID ──────────────────────────────────────────────────
  void: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <radialGradient id="voidGrad" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#1a0535"/>
      <stop offset="50%" stop-color="#08021a"/>
      <stop offset="100%" stop-color="#06060a"/>
    </radialGradient>
  </defs>
  <rect width="400" height="200" fill="url(#voidGrad)"/>
  <!-- Stars / particles -->
  <circle cx="50" cy="30" r="1" fill="white" opacity="0.6"/>
  <circle cx="120" cy="15" r="1.5" fill="white" opacity="0.4"/>
  <circle cx="300" cy="25" r="1" fill="white" opacity="0.7"/>
  <circle cx="350" cy="45" r="1" fill="#9b6fe8" opacity="0.8"/>
  <circle cx="80" cy="70" r="1" fill="white" opacity="0.3"/>
  <circle cx="370" cy="80" r="1.5" fill="#4a9eff" opacity="0.6"/>
  <circle cx="30" cy="100" r="1" fill="white" opacity="0.5"/>
  <circle cx="150" cy="90" r="1" fill="#9b6fe8" opacity="0.4"/>
  <circle cx="250" cy="110" r="1" fill="white" opacity="0.4"/>
  <circle cx="320" cy="130" r="1" fill="#4a9eff" opacity="0.5"/>
  <!-- Central figure silhouette (Kaito floating) -->
  <ellipse cx="200" cy="110" rx="8" ry="16" fill="#06060a" stroke="#9b6fe8" stroke-width="0.5" opacity="0.8"/>
  <circle cx="200" cy="88" r="7" fill="#06060a" stroke="#9b6fe8" stroke-width="0.5" opacity="0.8"/>
  <!-- Aura rings -->
  <ellipse cx="200" cy="105" rx="25" ry="35" fill="none" stroke="#9b6fe8" stroke-width="0.5" opacity="0.4"/>
  <ellipse cx="200" cy="105" rx="40" ry="55" fill="none" stroke="#4a9eff" stroke-width="0.5" opacity="0.2"/>
  <ellipse cx="200" cy="105" rx="60" ry="80" fill="none" stroke="#9b6fe8" stroke-width="0.3" opacity="0.15"/>
  <!-- Code fragments floating -->
  <text x="60" y="50" font-family="monospace" font-size="6" fill="#9b6fe8" opacity="0.5">NULL</text>
  <text x="300" y="70" font-family="monospace" font-size="6" fill="#4a9eff" opacity="0.4">void</text>
  <text x="130" y="160" font-family="monospace" font-size="6" fill="#9b6fe8" opacity="0.3">0x00</text>
  <text x="280" y="150" font-family="monospace" font-size="7" fill="#4a9eff" opacity="0.35">∅</text>
  <!-- Voice wave -->
  <path d="M100 105 Q150 95 200 105 Q250 115 300 105" stroke="#9b6fe8" stroke-width="1" fill="none" opacity="0.5"/>
  <path d="M120 115 Q160 108 200 115 Q240 122 280 115" stroke="#9b6fe8" stroke-width="0.5" fill="none" opacity="0.3"/>
</svg>`,

  // ─── GEBURT / LICHT ────────────────────────────────────────────────────
  light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <radialGradient id="lightGrad" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#2a1a08"/>
      <stop offset="60%" stop-color="#150d04"/>
      <stop offset="100%" stop-color="#06060a"/>
    </radialGradient>
    <radialGradient id="warmLight" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c9a96e" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#c9a96e" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="200" fill="url(#lightGrad)"/>
  <!-- Warm candlelight room -->
  <rect x="50" y="80" width="300" height="100" rx="2" fill="#0a0804" stroke="#2a1a08" stroke-width="1"/>
  <!-- Window -->
  <rect x="160" y="90" width="80" height="60" rx="1" fill="#1a1008" stroke="#3a2a18" stroke-width="1"/>
  <line x1="200" y1="90" x2="200" y2="150" stroke="#3a2a18" stroke-width="1"/>
  <line x1="160" y1="120" x2="240" y2="120" stroke="#3a2a18" stroke-width="1"/>
  <!-- Moonlight through window -->
  <rect x="161" y="91" width="38" height="28" fill="#1a2535" opacity="0.5"/>
  <rect x="201" y="91" width="38" height="28" fill="#1a2535" opacity="0.3"/>
  <!-- Candle -->
  <rect x="310" y="155" width="6" height="20" fill="#e8c97a" opacity="0.7"/>
  <ellipse cx="313" cy="155" rx="3" ry="8" fill="#e8864a" opacity="0.8"/>
  <!-- Warm glow -->
  <ellipse cx="313" cy="155" rx="30" ry="25" fill="url(#warmLight)"/>
  <!-- Bed silhouette -->
  <rect x="70" y="140" width="120" height="35" rx="3" fill="#1a1008" stroke="#2a1a08" stroke-width="1"/>
  <!-- Elena holding baby figure -->
  <ellipse cx="130" cy="145" rx="20" ry="12" fill="#2a1a08" opacity="0.8"/>
  <circle cx="130" cy="133" r="7" fill="#2a1a08" opacity="0.8"/>
  <!-- Tiny baby glow -->
  <ellipse cx="145" cy="150" rx="8" ry="5" fill="#c9a96e" opacity="0.3"/>
  <!-- System error text faint -->
  <text x="260" y="110" font-family="monospace" font-size="5" fill="#e05c5c" opacity="0.3">REGISTRIERUNG</text>
  <text x="262" y="118" font-family="monospace" font-size="5" fill="#e05c5c" opacity="0.3">FEHLGESCHLAGEN</text>
  <!-- Stars outside -->
  <circle cx="170" cy="98" r="1" fill="white" opacity="0.4"/>
  <circle cx="185" cy="95" r="0.8" fill="white" opacity="0.5"/>
  <circle cx="195" cy="100" r="1" fill="white" opacity="0.3"/>
</svg>`,

  // ─── DORF MILLHEIM ─────────────────────────────────────────────────────
  village: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#050810"/>
      <stop offset="100%" stop-color="#0a1020"/>
    </linearGradient>
  </defs>
  <rect width="400" height="200" fill="url(#skyGrad)"/>
  <!-- Stars -->
  <circle cx="40" cy="20" r="1" fill="white" opacity="0.5"/>
  <circle cx="100" cy="10" r="1" fill="white" opacity="0.6"/>
  <circle cx="200" cy="15" r="1.5" fill="white" opacity="0.4"/>
  <circle cx="300" cy="25" r="1" fill="white" opacity="0.5"/>
  <circle cx="360" cy="12" r="1" fill="white" opacity="0.4"/>
  <!-- Moon -->
  <circle cx="350" cy="35" r="18" fill="#1a2535" opacity="0.8"/>
  <circle cx="344" cy="30" r="16" fill="#8a9aaa" opacity="0.3"/>
  <!-- Hills -->
  <path d="M0 140 Q100 100 200 120 Q300 100 400 130 L400 200 L0 200 Z" fill="#060e08"/>
  <!-- Houses -->
  <!-- House 1 -->
  <rect x="30" y="120" width="50" height="40" fill="#0a0e08" stroke="#1a2a18" stroke-width="0.5"/>
  <polygon points="30,120 55,95 80,120" fill="#080c06" stroke="#1a2a18" stroke-width="0.5"/>
  <rect x="42" y="135" width="12" height="25" fill="#0f1a0c"/>
  <!-- Warm light from windows -->
  <rect x="35" y="125" width="10" height="10" fill="#3a2a08" opacity="0.8"/>
  <rect x="60" y="125" width="10" height="10" fill="#3a2a08" opacity="0.6"/>
  <!-- House 2 -->
  <rect x="160" y="115" width="60" height="45" fill="#0a0e08" stroke="#1a2a18" stroke-width="0.5"/>
  <polygon points="160,115 190,88 220,115" fill="#080c06" stroke="#1a2a18" stroke-width="0.5"/>
  <rect x="178" y="132" width="14" height="28" fill="#0f1a0c"/>
  <rect x="164" y="122" width="12" height="10" fill="#c9a96e" opacity="0.3"/>
  <rect x="205" y="122" width="12" height="10" fill="#c9a96e" opacity="0.2"/>
  <!-- House 3 -->
  <rect x="290" y="125" width="55" height="40" fill="#0a0e08" stroke="#1a2a18" stroke-width="0.5"/>
  <polygon points="290,125 317,100 345,125" fill="#080c06" stroke="#1a2a18" stroke-width="0.5"/>
  <rect x="295" y="130" width="10" height="10" fill="#3a2a08" opacity="0.7"/>
  <!-- Well in center -->
  <circle cx="130" cy="160" r="8" fill="none" stroke="#2a3a28" stroke-width="1.5"/>
  <rect x="126" y="148" width="8" height="4" fill="#2a3a28"/>
  <!-- River hint -->
  <path d="M0 175 Q50 170 100 175 Q150 180 200 175 Q250 170 300 175 Q350 180 400 175" stroke="#1a3a5c" stroke-width="2" fill="none" opacity="0.5"/>
  <!-- Felsen (Seras Lieblingsplatz) -->
  <ellipse cx="330" cy="162" rx="15" ry="8" fill="#1a2a18" stroke="#2a3a28" stroke-width="0.5"/>
  <!-- Silhouette of child on rock -->
  <ellipse cx="330" cy="155" rx="4" ry="7" fill="#06060a" opacity="0.7"/>
  <circle cx="330" cy="148" r="3.5" fill="#06060a" opacity="0.7"/>
</svg>`,

  // ─── NACHT / GEFÄHRLICHE SZENE ─────────────────────────────────────────
  night: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <rect width="400" height="200" fill="#02040e"/>
  <!-- Stars dense -->
  <circle cx="30" cy="15" r="1" fill="white" opacity="0.7"/>
  <circle cx="70" cy="8" r="0.8" fill="white" opacity="0.5"/>
  <circle cx="120" cy="20" r="1.2" fill="white" opacity="0.6"/>
  <circle cx="180" cy="12" r="1" fill="white" opacity="0.4"/>
  <circle cx="240" cy="18" r="0.8" fill="white" opacity="0.7"/>
  <circle cx="290" cy="5" r="1" fill="white" opacity="0.5"/>
  <circle cx="340" cy="15" r="1.2" fill="white" opacity="0.6"/>
  <circle cx="380" cy="22" r="0.8" fill="white" opacity="0.4"/>
  <circle cx="55" cy="35" r="0.7" fill="white" opacity="0.3"/>
  <circle cx="155" cy="40" r="0.8" fill="white" opacity="0.4"/>
  <circle cx="255" cy="30" r="0.7" fill="white" opacity="0.5"/>
  <circle cx="355" cy="38" r="0.8" fill="white" opacity="0.3"/>
  <!-- Moon -->
  <circle cx="60" cy="40" r="22" fill="#8a9aaa" opacity="0.25"/>
  <circle cx="55" cy="36" r="20" fill="#c8d8e8" opacity="0.15"/>
  <!-- Forest silhouette -->
  <path d="M0 120 L15 85 L30 120 L45 75 L60 120 L75 80 L90 120 L105 70 L120 120 L135 82 L150 120 L165 78 L180 120 L195 85 L210 120 L225 72 L240 120 L255 80 L270 120 L285 75 L300 120 L315 82 L330 120 L345 78 L360 120 L375 85 L390 120 L400 115 L400 200 L0 200 Z" fill="#030a04"/>
  <!-- Lagerfeuer -->
  <ellipse cx="200" cy="165" rx="20" ry="5" fill="#1a0a04" opacity="0.8"/>
  <path d="M195 165 Q200 145 205 165" stroke="#e8864a" stroke-width="3" fill="none" opacity="0.8"/>
  <path d="M192 165 Q198 150 202 165" stroke="#e8c97a" stroke-width="2" fill="none" opacity="0.9"/>
  <path d="M198 165 Q202 148 208 165" stroke="#e05c5c" stroke-width="2" fill="none" opacity="0.7"/>
  <!-- Glow from fire -->
  <ellipse cx="200" cy="165" rx="35" ry="20" fill="#e8864a" opacity="0.08"/>
  <!-- Sleeping figures around fire -->
  <ellipse cx="160" cy="170" rx="18" ry="6" fill="#06060a" opacity="0.8"/>
  <ellipse cx="240" cy="168" rx="15" ry="5" fill="#06060a" opacity="0.8"/>
  <!-- Standing figure (Kaito on hill) -->
  <ellipse cx="350" cy="115" rx="5" ry="10" fill="#06060a" opacity="0.7"/>
  <circle cx="350" cy="104" r="4" fill="#06060a" opacity="0.7"/>
  <!-- Moon glow on distant smoke -->
  <line x1="196" y1="145" x2="190" y2="115" stroke="#5a4a3a" stroke-width="1" opacity="0.3"/>
</svg>`,

  // ─── CHAOS / KAMPF ─────────────────────────────────────────────────────
  chaos: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <radialGradient id="chaosGrad" cx="40%" cy="60%" r="70%">
      <stop offset="0%" stop-color="#1a0204"/>
      <stop offset="50%" stop-color="#0d0102"/>
      <stop offset="100%" stop-color="#06060a"/>
    </radialGradient>
  </defs>
  <rect width="400" height="200" fill="url(#chaosGrad)"/>
  <!-- Fire and smoke background -->
  <path d="M50 180 Q70 140 90 180" stroke="#e8864a" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M60 180 Q75 135 95 180" stroke="#e8c97a" stroke-width="2" fill="none" opacity="0.7"/>
  <path d="M300 175 Q320 135 340 175" stroke="#e05c5c" stroke-width="3" fill="none" opacity="0.6"/>
  <!-- Smoke pillars -->
  <path d="M80 130 Q75 100 85 70 Q90 50 80 30" stroke="#3a2a2a" stroke-width="8" fill="none" opacity="0.4"/>
  <path d="M320 125 Q325 95 315 65" stroke="#3a2a2a" stroke-width="6" fill="none" opacity="0.3"/>
  <!-- Buildings silhouette -->
  <rect x="20" y="110" width="60" height="70" fill="#0d0102"/>
  <rect x="100" y="100" width="80" height="80" fill="#0d0102"/>
  <rect x="260" y="115" width="60" height="65" fill="#0d0102"/>
  <rect x="330" y="105" width="50" height="75" fill="#0d0102"/>
  <!-- Golden scan light (Vex) -->
  <path d="M200 60 L160 140 L240 140 Z" fill="#c9a96e" opacity="0.15"/>
  <circle cx="200" cy="55" r="8" fill="#c9a96e" opacity="0.4"/>
  <!-- Figures -->
  <!-- Vex (white robe) -->
  <ellipse cx="200" cy="95" rx="8" ry="18" fill="#d4c9b8" opacity="0.6"/>
  <circle cx="200" cy="74" r="7" fill="#d4c9b8" opacity="0.6"/>
  <!-- Roland -->
  <ellipse cx="160" cy="100" rx="7" ry="15" fill="#2a2a3a" opacity="0.8"/>
  <circle cx="160" cy="83" r="6" fill="#2a2a3a" opacity="0.8"/>
  <line x1="163" y1="92" x2="180" y2="80" stroke="#9a8e84" stroke-width="1.5" opacity="0.8"/>
  <!-- Sera fire -->
  <ellipse cx="240" cy="120" rx="5" ry="12" fill="#e8864a" opacity="0.6"/>
  <circle cx="240" cy="107" r="5" fill="#e8864a" opacity="0.6"/>
  <path d="M238 107 Q242 95 248 110" stroke="#e8c97a" stroke-width="2" fill="none" opacity="0.9"/>
  <path d="M235 110 Q240 98 245 112" stroke="#e05c5c" stroke-width="1.5" fill="none" opacity="0.7"/>
  <!-- Small figure (Kaito child) -->
  <ellipse cx="185" cy="125" rx="4" ry="9" fill="#06060a" opacity="0.9" stroke="#9b6fe8" stroke-width="0.5"/>
  <circle cx="185" cy="115" r="3.5" fill="#06060a" opacity="0.9" stroke="#9b6fe8" stroke-width="0.5"/>
  <!-- Golden scan beams -->
  <line x1="200" y1="70" x2="150" y2="150" stroke="#c9a96e" stroke-width="0.5" opacity="0.3"/>
  <line x1="200" y1="70" x2="250" y2="150" stroke="#c9a96e" stroke-width="0.5" opacity="0.3"/>
</svg>`,

  // ─── STADT / AKADEMIE ──────────────────────────────────────────────────
  city: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <linearGradient id="cityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#040810"/>
      <stop offset="100%" stop-color="#020508"/>
    </linearGradient>
  </defs>
  <rect width="400" height="200" fill="url(#cityGrad)"/>
  <!-- Stars -->
  <circle cx="50" cy="15" r="1" fill="white" opacity="0.3"/>
  <circle cx="150" cy="8" r="0.8" fill="white" opacity="0.4"/>
  <circle cx="300" cy="12" r="1" fill="white" opacity="0.3"/>
  <circle cx="380" cy="20" r="0.8" fill="white" opacity="0.4"/>
  <!-- Distant spires -->
  <rect x="170" y="40" width="8" height="80" fill="#060a0d"/>
  <polygon points="170,40 174,25 178,40" fill="#060a0d"/>
  <rect x="220" y="50" width="8" height="70" fill="#060a0d"/>
  <polygon points="220,50 224,32 228,50" fill="#060a0d"/>
  <!-- City buildings varied heights -->
  <rect x="0" y="90" width="25" height="110" fill="#040810"/>
  <rect x="20" y="75" width="30" height="125" fill="#050a10"/>
  <rect x="45" y="95" width="20" height="105" fill="#040810"/>
  <rect x="60" y="70" width="35" height="130" fill="#050a10"/>
  <rect x="90" y="85" width="25" height="115" fill="#040810"/>
  <rect x="280" y="80" width="30" height="120" fill="#040810"/>
  <rect x="305" y="65" width="40" height="135" fill="#050a10"/>
  <rect x="340" y="85" width="25" height="115" fill="#040810"/>
  <rect x="360" y="70" width="40" height="130" fill="#050a10"/>
  <!-- Academy tower center -->
  <rect x="145" y="55" width="110" height="145" fill="#04080d" stroke="#1a3a5c" stroke-width="0.5"/>
  <rect x="165" y="35" width="70" height="20" fill="#04080d" stroke="#1a3a5c" stroke-width="0.5"/>
  <!-- Gate arch -->
  <path d="M180 200 L180 155 Q200 140 220 155 L220 200" fill="#030608" stroke="#1a3a5c" stroke-width="0.5"/>
  <!-- Golden eye emblem -->
  <ellipse cx="200" cy="95" rx="18" ry="10" fill="none" stroke="#c9a96e" stroke-width="1" opacity="0.6"/>
  <circle cx="200" cy="95" r="5" fill="#c9a96e" opacity="0.3"/>
  <circle cx="200" cy="95" r="2" fill="#c9a96e" opacity="0.6"/>
  <!-- Windows with light -->
  <rect x="155" y="70" width="12" height="8" fill="#c9a96e" opacity="0.2"/>
  <rect x="175" y="70" width="12" height="8" fill="#4a9eff" opacity="0.15"/>
  <rect x="215" y="70" width="12" height="8" fill="#c9a96e" opacity="0.2"/>
  <rect x="235" y="70" width="12" height="8" fill="#4a9eff" opacity="0.15"/>
  <rect x="155" y="115" width="12" height="8" fill="#4a9eff" opacity="0.1"/>
  <rect x="235" y="115" width="12" height="8" fill="#4a9eff" opacity="0.1"/>
  <!-- Status windows floating (people's levels) -->
  <rect x="40" y="130" width="35" height="15" rx="1" fill="#0d1525" stroke="#1a3a5c" stroke-width="0.5" opacity="0.7"/>
  <text x="42" y="140" font-family="monospace" font-size="4.5" fill="#4a9eff" opacity="0.8">LV 24 Krieger</text>
  <rect x="320" y="120" width="40" height="15" rx="1" fill="#0d1525" stroke="#1a3a5c" stroke-width="0.5" opacity="0.7"/>
  <text x="322" y="130" font-family="monospace" font-size="4.5" fill="#4a9eff" opacity="0.8">LV 31 Magier</text>
  <!-- Kaito (no status box above him) -->
  <ellipse cx="200" cy="178" rx="5" ry="11" fill="#06060a" stroke="#9b6fe8" stroke-width="0.5" opacity="0.8"/>
  <circle cx="200" cy="165" r="4" fill="#06060a" stroke="#9b6fe8" stroke-width="0.5" opacity="0.8"/>
</svg>`,

  // ─── COTTAGE / HAUS ────────────────────────────────────────────────────
  cottage: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <radialGradient id="cottageGrad" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#1a0e04"/>
      <stop offset="100%" stop-color="#06060a"/>
    </radialGradient>
  </defs>
  <rect width="400" height="200" fill="url(#cottageGrad)"/>
  <!-- Interior of cottage -->
  <!-- Wall -->
  <rect x="0" y="60" width="400" height="140" fill="#0a0804"/>
  <!-- Wooden planks texture -->
  <line x1="0" y1="90" x2="400" y2="90" stroke="#120e08" stroke-width="1" opacity="0.5"/>
  <line x1="0" y1="130" x2="400" y2="130" stroke="#120e08" stroke-width="1" opacity="0.5"/>
  <line x1="0" y1="170" x2="400" y2="170" stroke="#120e08" stroke-width="1" opacity="0.5"/>
  <!-- Fireplace -->
  <rect x="170" y="100" width="60" height="70" fill="#0d0a08" stroke="#2a1a10" stroke-width="1"/>
  <path d="M170 100 L175 85 L225 85 L230 100" fill="#0d0a08" stroke="#2a1a10" stroke-width="1"/>
  <!-- Fire -->
  <path d="M185 165 Q200 135 215 165" stroke="#e8864a" stroke-width="4" fill="none" opacity="0.8"/>
  <path d="M190 165 Q200 140 210 165" stroke="#e8c97a" stroke-width="2.5" fill="none" opacity="0.9"/>
  <path d="M193 165 Q200 143 207 165" stroke="#e05c5c" stroke-width="1.5" fill="none" opacity="0.7"/>
  <!-- Firelight glow -->
  <ellipse cx="200" cy="155" rx="50" ry="30" fill="#e8864a" opacity="0.08"/>
  <!-- Kitchen table -->
  <rect x="60" y="145" width="100" height="5" rx="1" fill="#1a1008"/>
  <rect x="65" y="150" width="5" height="30" fill="#1a1008"/>
  <rect x="150" y="150" width="5" height="30" fill="#1a1008"/>
  <!-- Bread/food on table -->
  <ellipse cx="100" cy="142" rx="18" ry="6" fill="#3a2a10" opacity="0.8"/>
  <!-- Candle -->
  <rect x="90" y="125" width="4" height="15" fill="#c9a96e" opacity="0.7"/>
  <ellipse cx="92" cy="125" rx="2" ry="5" fill="#e8864a" opacity="0.9"/>
  <!-- Window with night outside -->
  <rect x="280" y="80" width="80" height="60" rx="2" fill="#020408" stroke="#2a1a10" stroke-width="1.5"/>
  <line x1="320" y1="80" x2="320" y2="140" stroke="#2a1a10" stroke-width="1"/>
  <line x1="280" y1="110" x2="360" y2="110" stroke="#2a1a10" stroke-width="1"/>
  <!-- Stars through window -->
  <circle cx="295" cy="92" r="0.8" fill="white" opacity="0.5"/>
  <circle cx="310" cy="88" r="1" fill="white" opacity="0.4"/>
  <circle cx="340" cy="95" r="0.8" fill="white" opacity="0.6"/>
  <circle cx="350" cy="88" r="1" fill="white" opacity="0.3"/>
  <!-- Hanging herbs -->
  <line x1="50" y1="60" x2="50" y2="80" stroke="#2a3a20" stroke-width="1"/>
  <ellipse cx="50" cy="85" rx="6" ry="8" fill="#1a2a14" opacity="0.6"/>
  <line x1="80" y1="60" x2="80" y2="75" stroke="#2a3a20" stroke-width="1"/>
  <ellipse cx="80" cy="80" rx="5" ry="7" fill="#1a2a14" opacity="0.5"/>
  <!-- Family silhouettes vague -->
  <ellipse cx="130" cy="155" rx="12" ry="22" fill="#06060a" opacity="0.7"/>
  <circle cx="130" cy="130" r="9" fill="#06060a" opacity="0.7"/>
</svg>`,
};

// Map background types to illustration keys
export const BG_TO_ILLUSTRATION = {
  server: 'server',
  void: 'void',
  light: 'light',
  cottage: 'cottage',
  village: 'village',
  night: 'night',
  chaos: 'chaos',
  city: 'city',
};

// Special illustration overrides for specific nodes
export const NODE_ILLUSTRATION_OVERRIDES = {
  p0_keller: 'server_glowing',
  p0_void: 'void',
  p0_mehr_info: 'void',
  p0_ueberredung: 'void',
};
