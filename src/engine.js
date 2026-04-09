// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — GAME ENGINE
// Vollständiges State-Management System
// ═══════════════════════════════════════════════════════

// ─── INITIAL STATE ──────────────────────────────────────────────────────────
export function createInitialState() {
  return {
    // Aktueller Knoten
    nodeId: "p0_buero",

    // Navigation
    history: [],
    appliedNodeEffects: {}, // verhindert doppelte On-Arrival-Effekte bei Re-Render/Zurueck

    // ── ALIGNMENT (beeinflusst welches der 7 Enden möglich ist) ──────────────
    alignment: {
      licht: 0,      // vs. Schatten
      schatten: 0,
      ordnung: 0,    // vs. Chaos
      chaos: 0,
      verborgenheit: 5, // startet bei 5 (relativ verborgen)
    },

    // ── AFFINITÄTEN (beeinflusst Szenen, Dialoge, Charakterverhalten) ────────
    affinity: {
      roland: 20,    // Vater — startet nicht bei 0
      elena: 20,     // Mutter
      mira: 0,       // Schwester (noch nicht geboren in Akt I)
      gregor: 10,
      aldwin: 0,
      finn: 0,
      sera: 0,
      hana: 0,
      celeste: 0,
      tertius: 0,
      meridia: 0,
      kross: 0,      // kann positiv werden bei Redemption
      mordecai: 0,
      // Helden (Akt III+)
      akira: 0,
      emma: 0,
      dmitri: 0,
      yuki: 0,
      // Sonstige
      marcus: 0,     // Verräter — beginnt neutral
      veyra: 0,
      aria: 0,
      gorrick: 0,
      lilithia: 0,
      varkos: 0,
      elena_akt: 0,  // alias falls benötigt
      // Weitere Charaktere (Akt IV+)
      martin: 0,
      sextus: 0,
      rex: 0,       // Drache Rex
      ren: 0,       // Geist Ren
    },

    // ── STORY FLAGS (echte Konsequenzen über Akte hinweg) ────────────────────
    flags: {
      // Prolog-Flags
      prologTon: "standard",          // "standard" | "eigenstaendig" | "dunkel" | "vorsichtig"
      letzterGedanke: null,           // "reue" | "hingabe" | "einsamkeit" | "akzeptanz"
      serverReaktion: null,           // "humorvoll" | "analytisch" | "emotional"
      trait_todessehnsucht: false,    // wird zu "lebenswille" wenn Beziehungen aufgebaut

      // Akt I Flags
      kindheitsVerhalten: null,       // "vorsichtig" | "neugierig" | "offen"
      miraErstbegegnung: null,        // "beruehrung" | "scan" | "schwester"
      aldwinErstEindruck: true,       // immer true — er hat ihn gesehen
      serverPfad: null,               // Prolog-Pfad zum Server: "flucht" | "mutig" | "ignoriert"
      ersteUnterdrueckung: false,     // hat Kaito sein Void unterdrückt?
      erstesGeheimnis: false,         // erstes bewusstes Verstecken
      familieErschrocken: false,      // Familie hat Anomalie gesehen
      gregorAufmerksam: false,        // Gregor hat Kaito aufmerksam beobachtet
      goblinNarbe: false,             // Narbe vom Goblin-Kampf
      auffaelligkeit: null,           // Aufmerksamkeits-Level
      tarnungFrueh: false,            // frühe Tarnungs-Entscheidung

      // Akt II Flags
      seraKenntWahrheit: false,       // hat Kaito Sera von Dämonen-Erbe erzählt?
      seraKenntVoll: false,           // volle Wahrheit (nicht nur Feuer-Affinität)
      finnVertraut: false,            // hat Finn Kaitos Geheimnis erfahren?
      rolandGeheimnis: null,          // "direkt" | "indirekt" | "verschwiegen"
      gregorBuch: false,              // hat Kaito Gregors Tagebuch erhalten?
      gregorTod: null,                // "kampf" | "natuerlich" | null
      inquisitorVex: null,            // "aether" | "aldwin" | "gregor"
      seraKontrolle: null,            // Sera-Kontrolle über Feuer
      seraLuegeAusstehend: false,     // Kaito hat Sera angelogen
      seraVaterWahrheit: null,        // "kaito_erzaehlt" | "spaeter" | "varkos_treffen"
      gregorVerletzt: false,          // Gregor verletzt im Kampf
      gregorWeissAlles: false,        // Gregor kennt Kaitos wahre Natur
      trainingFokus: null,            // Training-Schwerpunkt
      aldwinGeflohen: false,          // Aldwin ist geflohen

      // Akt III Flags
      akademieVerhalten: null,        // "neutral" | "provokativ" | "scan"
      leonBeziehung: "neutral",       // "ignoriert" | "antagonist" | "rivale"
      marcusVertrauen: null,          // "hoch" | "gegenspionage"
      meridiaAllianz: false,
      heroesWissen: "keiner",         // "keiner" | "einer" | "alle"
      akademieAbgang: null,           // wie verließ Kaito die Akademie?

      // Akt IV Flags  
      nullenAufbau: null,             // "netzwerk" | "sabotage" | "helden"
      rexBefreit: false,              // Drache Rex befreit?
      renGefunden: false,             // Ren (gelöschter Geist) gefunden?
      gorrickAllianz: false,
      ariaAllianz: false,
      veyraAllianz: false,
      rexMethode: null,               // "disrupt" | "teamwork" | "analyse"
      renBond: null,                  // "fragen" | "vertrauen" | "kampf"
      veyraZugang: null,              // "professionell" | "emotional" | "gleichgestellt"
      ariaZugang: null,               // "heilerin" | "mentor" | "familie"
      kaitoBewusstlos: false,         // Kaito war bewusstlos (Wächter-Prüfung)
      waechterVersagt: false,         // Wächter-Prüfung versagt
      turmStatus: null,               // Status des Turms

      // Akt V Flags
      mordecaiSchicksal: null,        // "verhaftet" | "barmherzig" | "politisch"
      rolandFluchAufgehoben: null,    // "jetzt" | "versprechen" | "teilweise"
      krossSchicksal: null,           // "redemption" | "vertrieben" | "berater"
      voidProphetSchicksal: null,     // "dritter_weg" | "neutral" | "heilung" | "kampf"
      kriegVerhindert: false,
      krossKommt: false,              // Kross kommt zum Finale
      krossWeissVonRex: false,        // Kross weiß von Rex
      mordecaiRedemptionMoeglich: false, // Mordecai-Redemption möglich
      mordecaiRiss: false,            // Riss in Mordecais Loyalität
      varkosVerteidigung: null,       // Varkos-Verteidigungsstatus
      yukiToken: null,                // "hase" | "stein"
      yukiGeheilt: false,              // Yukis Drain geheilt (schaltet Ending 6 frei)
      verratPfad: null,               // Verrat-Pfad in Akt V

      // Akt VI Flags
      sextusSchicksal: null,          // "ruhe" | "leben" | "wahl"
      primusUeberwunden: null,        // "kampf" | "dialog" | "hack"
      secundaBehandlung: null,


      // ── Erweiterte Flags (Akt I) ─────────────────────────────────────────
      rolandFluchWissen: null,        // "verschwiegen" | "beruehrung" | "rache"
      beobachterReaktion: null,       // Reaktion des geheimnisvollen Beobachters
      schutzSchwur: false,            // Schutz-Schwur abgelegt
      ersterKampfPfad: null,          // Pfad im ersten Kampf

      // ── Erweiterte Flags (Akt II) ─────────────────────────────────────────
      finnErstbegegnung: null,        // "freundlich" | "distanziert" | "neugierig"
      seraErstbegegnung: null,        // erste Begegnung mit Sera
      gregorGespraech: null,          // Verlauf des Gregor-Gesprächs
      seraWahrheitPfad: null,         // Welche Wahrheit Sera kennt
      familieWeissAlles: false,       // Familie weiß die ganze Wahrheit
      dorfVerteidigung: null,         // Verteidigungspfad für das Dorf
      elenaAbschied: null,            // Art des Abschieds von Elena
      finnImKampf: null,              // Finns Verhalten im Kampf
      borisVersprechen: null,         // Boris-Versprechen gegeben?
      abschiedsHaltung: null,         // Haltung beim Abschied

      // ── Erweiterte Flags (Akt III) ────────────────────────────────────────
      zugangsWeg: null,               // "akademie" | "elfen" | "solo"
      akademiePfad: null,             // Akademie-Zugangs-Pfad
      akademieFokus: null,            // Akademie-Fokus
      kampfStil: null,                // gewählter Kampfstil
      heldenErsterKontakt: null,      // erstes Helden-Kontakt-Ergebnis
      heldenparteiStatus: null,       // Status der Heldenpartei
      marcusWissen: null,             // Marcus-Wissenslevel
      mordecaiWissen: null,           // Mordecai-Wissenslevel
      marcusStatus: null,             // "verrat_bekannt" | "neutral" | "freund"
      exilForm: null,                 // Form des Exils
      mordecaiVerhandelt: false,      // hat Kaito mit Mordecai verhandelt?
      yukiRomance: null,              // Yuki-Romance-Pfad
      voidMemoryModel: null,          // "active5_archive"

      // ── Erweiterte Flags (Akt IV) ─────────────────────────────────────────
      veyraRomanceStart: false,       // Veyra-Romance gestartet
      nullenGegruendet: false,        // Die Nullen gegründet
      daemonenAllianz: null,          // Dämonen-Allianz-Status
      waechterAntwort: null,          // Antwort auf Wächter-Frage
      opferAntwort: null,             // Antwort auf Opfer-Frage
      opferRichtigeAntwort: false,    // Richtige Antwort gegeben
      puristenKampf: null,            // Pfad im Puristen-Kampf
      finnNebenNull: false,           // Finn kämpft neben Null

      // ── Erweiterte Flags (Akt V) ──────────────────────────────────────────
      kriegsPrioritaet: null,         // Priorisierung im Krieg
      fraktionExklusivitaet: null,    // Fraktion exklusiv gewählt
      kirchenfrontGestuetzt: false,   // Kirchenfront gestützt
      daemonenAllianzBelastet: false, // Dämonen-Allianz belastet
      zivilkorridorBelastet: false,   // Zivilkorridor belastet
      daemonenfrontGestuetzt: false,  // Dämonenfront gestützt
      kirchenSchismaGeschwaecht: false, // Kirchenschisma geschwächt
      zivilkorridorGestuetzt: false,  // Zivilkorridor gestützt
      varkosErgebnis: null,           // Ergebnis des Varkos-Treffens
      yukiRomanceVertieft: false,     // Yuki-Romance vertieft
      yukiDrainUmgeleitet: false,     // Yukis Drain umgeleitet
      rolandFluchGebrochen: null,     // "jetzt" | "versprechen" | "teilweise" | "nicht"
      prophetErgebnis: null,          // Ergebnis der Propheten-Begegnung
      finaleBeziehung: null,          // Finale Beziehungswahl

      // ── Erweiterte Flags (Akt VI) ─────────────────────────────────────────
      yukiSchicksal: null,            // Yukis Schicksal
      yukiGezeichnet: false,          // Yuki ist gezeichnet (Drain-Opfer)
      seraSchicksal: null,            // Seras Schicksal
      seraGezeichnet: false,          // Sera ist gezeichnet
      finnSchicksal: null,            // Finns Schicksal
      finnGezeichnet: false,          // Finn ist gezeichnet
      finalerVerlust: null,           // welchen finalen Verlust Kaito trug
      kernRewriteErschwert: false,    // Kern-Rewrite erschwert
      rexImKern: false,               // Rex ist im Kern
      rolandImKern: false,            // Roland ist im Kern
      primusEnde: null,               // wie Primus besiegt wurde

      // Finale
      finaleWahl: null,               // definiert welches der 7 Enden
    },

    // ── WISSEN (was Kaito weiß — beeinflusst verfügbare Dialogoptionen) ──────
    wissen: {
      rolandFluch: false,
      rolandEchterName: false,
      elenaElfenblut: false,
      miraAnomalie: false,
      aldwinWahreNatur: false,
      systemIstProgramm: false,
      architektenExistenz: false,
      septimaIdentitaet: false,
      nullZoneExistenz: false,
      seraEltern: false,
      // Erweiterte Wissen-Einträge
      nullZoneExistiert: false,
      nullZoneIstZuflucht: false,
      aeltharBedeutung: false,
      heldenTimer: false,
      optionalesSystemKonzept: false,
      ritualIstDiebstahl: false,
      systemUpdate: false,
      tertiusWarntVorUnvermeidbaremVerlust: false,
      voidWalkerKlasse: false,
      weltkarte: false,
      systemArchitektur_Stufe1: false,
      ariaIstUrsprungVonElenasLied: false,
      akademieStipendium: false,
    },

    // ── VOID-SKILLS (freigeschaltet im Laufe der Story) ──────────────────────
    voidSkills: {
      codeRead: true,         // von Anfang an
      codeAnalyze: false,     // Akt I Ende
      codeSpoof: false,       // Akt II
      wildeMagie: false,      // Akt II
      ghostStep: false,       // Akt IV
      voidStrike: false,      // Akt IV
      codeModify: false,      // Akt III (eingeschränkt) → vollständig Akt VI
      codeCreate: false,      // nur Akt VI Kern
      // Erweiterte Skills (Akt III-V)
      aetherResonance: false, // Akt II/III
      codeCopy: false,        // Akt III
      codeDisrupt: false,     // Akt IV
      aetherBlade: false,     // Akt IV
      systemScan: false,      // Akt III
      systemBackdoor: false,  // Akt VI
      codeModify_limited: false,  // Akt III eingeschränkt
      codeModify_full: false,     // Akt VI vollständig
      systemScanPlus: false,      // erweiterter System-Scan
      // Kampf-Skills (Akt I-III)
      nachtsichtLv1: false,       // Nachtsicht Level 1
      schmerztoleranzLv1: false,  // Schmerztoleranz Level 1
      paradeLv1: false,           // Parade Level 1
      beinarbeitLv1: false,       // Beinarbeit Level 1
      combatFlow_LV2: false,      // Kampffluss Level 2
    },

    // UI-State
    textPhase: 1,
    showChoices: false,
    phasesDone: false,
    instant: false,
    transitioning: false,

    // Language
    language: 'en',  // 'de' | 'en'
  };
}

// ─── LANGUAGE HELPERS ────────────────────────────────────────────────────────
export function applyLanguage(node, lang, translations) {
  if (lang === 'de' || !translations) return node;
  const t = translations[node._id] || translations[Object.keys(node)[0]];
  if (!t) return node;
  const merged = { ...node };
  // Overlay all text fields
  ['text','text2','text3','text4','title','chapter','scene'].forEach(f => {
    if (t[f] !== undefined) merged[f] = t[f];
  });
  // Choices
  if (t.choices && node.choices) {
    merged.choices = node.choices.map((c, i) => {
      const tc = t.choices[i];
      if (!tc) return c;
      return { ...c,
        text: tc.text || c.text,
        narrativeFeedback: tc.narrativeFeedback || c.narrativeFeedback,
      };
    });
  }
  // textConditional
  if (t.textConditional) {
    merged.textConditional = { ...node.textConditional, ...t.textConditional };
  }
  // systemBox
  if (t.systemBox) {
    merged.systemBox = t.systemBox;
  }
  return merged;
}

// ─── STATE REDUCER ──────────────────────────────────────────────────────────
export function applyChoice(state, choice) {
  const newState = deepClone(state);

  // Alignment-Effekte
  if (choice.alignEffect) {
    for (const [key, val] of Object.entries(choice.alignEffect)) {
      const delta = getScaledAlignmentDelta(key, val);
      newState.alignment[key] = (newState.alignment[key] || 0) + delta;
    }
  }

  // Affinitäts-Effekte
  if (choice.affinityEffect) {
    for (const [key, val] of Object.entries(choice.affinityEffect)) {
      newState.affinity[key] = Math.max(0, Math.min(100,
        (newState.affinity[key] || 0) + val
      ));
    }
  }

  // Flag-Effekte
  if (choice.flagEffect) {
    for (const [key, val] of Object.entries(choice.flagEffect)) {
      newState.flags[key] = val;
    }
  }

  // Wissens-Effekte
  if (choice.wissenEffect) {
    for (const key of choice.wissenEffect) {
      newState.wissen[key] = true;
    }
  }

  // Skill-Freischaltungen
  if (choice.skillUnlock) {
    for (const skill of choice.skillUnlock) {
      newState.voidSkills[skill] = true;
    }
  }

  // Navigation
  newState.history = [...state.history, state.nodeId];
  newState.nodeId = choice.next;
  newState.textPhase = 1;
  newState.showChoices = false;
  newState.phasesDone = false;
  newState.instant = false;

  return newState;
}

// ─── KONDITIONALE CHOICES ────────────────────────────────────────────────────
// Filtert Choices basierend auf State (manche Optionen nur verfügbar wenn Flags gesetzt)
export function getAvailableChoices(node, state) {
  if (!node.choices) return [];
  return node.choices.filter(choice => {
    if (!choice.requires) return true;
    return evaluateCondition(choice.requires, state);
  });
}

function evaluateCondition(condition, state) {
  if (condition.flag) {
    const [key, val] = Object.entries(condition.flag)[0];
    return state.flags[key] === val;
  }
  if (condition.flagSet) {
    return state.flags[condition.flagSet] !== null &&
           state.flags[condition.flagSet] !== false;
  }
  if (condition.wissen) {
    return state.wissen[condition.wissen] === true;
  }
  if (condition.affinity) {
    const [char, minVal] = Object.entries(condition.affinity)[0];
    return (state.affinity[char] || 0) >= minVal;
  }
  if (condition.alignment) {
    const [key, minVal] = Object.entries(condition.alignment)[0];
    return (state.alignment[key] || 0) >= minVal;
  }
  if (condition.skill) {
    return state.voidSkills[condition.skill] === true;
  }
  return true;
}

// ─── ENDING BERECHNUNG ───────────────────────────────────────────────────────
// Finale Ending-Matrix (aktuelle Implementierung):
//
// | Ending | Titel         | Wahl |
// |--------|---------------|------|
// |   1    | Der neue Gott |  E   |
// |   2    | Im Verborgenen|  B   |
// |   3    | Der wahre Held|  A   |
// |   4    | Einsamer Wolf |  G   |
// |   5    | Void-Daemon   |  F   |
// |   6    | Rueckkehr     |  D   |
// |   7    | System Delete |  C   |
//
// Zusatzbedingung: Wahl D ist im Node selbst an yukiGeheilt gebunden.
//
export function calculateEnding(state, pendingChoice = null) {
  const flags = { ...state.flags };

  // Simulate pending choice flags so finaleWahl is always set correctly
  if (pendingChoice?.flagEffect) {
    for (const [key, val] of Object.entries(pendingChoice.flagEffect)) {
      flags[key] = val;
    }
  }

  const w = flags.finaleWahl; // "A"|"B"|"C"|"D"|"E"|"F"|"G"

  // Jedes Ende wird direkt durch die Finale-Wahl ausgelöst.
  // Die Wahl selbst ist die einzige Voraussetzung — Alignment beeinflusst
  // nur den Text innerhalb des Endes (über textConditional), nicht ob es erscheint.

  // Ende 3: Der wahre Held (Wahl A)
  if (w === "A") return "ending_3";

  // Ende 2: Eminence in Shadow (Wahl B)
  if (w === "B") return "ending_2";

  // Ende 7: Aelthar (Wahl C — requires opferRichtigeAntwort, handled in node)
  if (w === "C") return "ending_7";

  // Ende 6: Rückkehr (Wahl D)
  if (w === "D") return "ending_6";

  // Ende 1: Der neue Gott (Wahl E)
  if (w === "E") return "ending_1";

  // Ende 5: Nullpunkt (Wahl F)
  if (w === "F") return "ending_5";

  // Ende 4: Der einsame Wolf (Wahl G)
  if (w === "G") return "ending_4";

  // Fallback — sollte nie erreicht werden
  return "ending_4";
}
// HELPERS
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// ALIGNMENT BALANCING
// Chaos/shadow options are much rarer than order/light in story data.
// Scale these deltas when applied so all ending paths stay reachable.
const ALIGNMENT_WEIGHTS = {
  licht: 1.0,
  schatten: 1.3,
  ordnung: 1.0,
  chaos: 2.4,
  verborgenheit: 1.0,
};

export function getScaledAlignmentDelta(key, value) {
  const weight = ALIGNMENT_WEIGHTS[key] ?? 1.0;
  return Math.round(value * weight);
}

// ─── MULTI-SLOT SAVE SYSTEM ─────────────────────────────────────────────────
const SAVE_PREFIX = "reborn_save_";
const AUTOSAVE_KEY = "reborn_autosave";
const MAX_SLOTS = 5;

export function saveGame(state, slot = 1) {
  try {
    const data = {
      state,
      timestamp: Date.now(),
      nodeTitle: state.nodeTitle || "",
      sceneCount: state.history?.length || 0,
    };
    localStorage.setItem(SAVE_PREFIX + slot, JSON.stringify(data));
    return true;
  } catch(e) { return false; }
}

export function loadGame(slot = 1) {
  try {
    const raw = localStorage.getItem(SAVE_PREFIX + slot);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data.state || data; // backward compat
  } catch(e) { return null; }
}

export function autosave(state) {
  try {
    localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({
      state, timestamp: Date.now(), auto: true,
      nodeTitle: state.nodeTitle || "", sceneCount: state.history?.length || 0,
    }));
  } catch(e) {}
}

export function loadAutosave() {
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    return raw ? JSON.parse(raw).state : null;
  } catch(e) { return null; }
}

export function getAllSaves() {
  const slots = [];
  for (let i = 1; i <= MAX_SLOTS; i++) {
    try {
      const raw = localStorage.getItem(SAVE_PREFIX + i);
      if (raw) {
        const data = JSON.parse(raw);
        slots.push({ slot: i, timestamp: data.timestamp, nodeTitle: data.nodeTitle || "...",
          sceneCount: data.sceneCount || 0, exists: true });
      } else {
        slots.push({ slot: i, exists: false });
      }
    } catch(e) { slots.push({ slot: i, exists: false }); }
  }
  // Autosave
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      slots.unshift({ slot: 0, timestamp: data.timestamp, nodeTitle: data.nodeTitle || "...",
        sceneCount: data.sceneCount || 0, exists: true, auto: true });
    }
  } catch(e) {}
  return slots;
}

export function deleteSave(slot = null) {
  if (slot === null) {
    for (let i = 1; i <= MAX_SLOTS; i++) localStorage.removeItem(SAVE_PREFIX + i);
    localStorage.removeItem(AUTOSAVE_KEY);
  } else if (slot === 0) {
    localStorage.removeItem(AUTOSAVE_KEY);
  } else {
    localStorage.removeItem(SAVE_PREFIX + slot);
  }
}

export function hasSave() {
  for (let i = 1; i <= MAX_SLOTS; i++) {
    if (localStorage.getItem(SAVE_PREFIX + i)) return true;
  }
  return !!localStorage.getItem(AUTOSAVE_KEY);
}
