// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT IV: ELEVATION
// Kapitel 21–30: Aufstiegs-Phase, Alter 15–16
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] STORY-CRITICAL → verändert Plot/Kapitel-Routing
// [AF] AFFINITY → 0–100 Beziehungswert, immer mit narrativeFeedback
// [AL] ALIGNMENT → Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_IV = {

  // ════ ZEITSPRUNG: DIE ERSTEN MONATE ALS NULL ═══════════════════════════

  a4k1_intro: {
    act: "AKT IV",
    chapter: "Zeitsprung — Die ersten Monate als Null",
    title: "Tag 1 als Null: Erbärmlich",
    scene: "Straßen und Dungeons von Valtheris — Alter: 15 Jahre",
    bg: "night",
    music: "theme_void_terminal",
    text: `Die ersten Monate allein waren... demütigend.

Keine Akademie-Mensa. Kein warmes Bett. Kein Professorenzimmer mit verbotenen Büchern. Kein Akira, der zu laut war. Keine Emma, die zu viel wusste. Kein Dmitri, der so tat, als wäre Kartoffelschälen kein emotionaler Support. Keine Yuki, deren Blick zu still war, um harmlos zu sein.

Nur Regen. Dreck. Hunger. Und ich.

Ich schlief unter Brücken, in verlassenen Scheunen und einmal in einer hohlen Eiche, die nach nassem Hund roch. Ich aß, was ich finden konnte. Ich kämpfte, was ich besiegen konnte. Und ich lernte, dass Freiheit nicht sauber ist. Freiheit friert. Freiheit blutet. Freiheit stinkt.

Aber Freiheit gehört DIR.`,

    systemBox: {
      title: "VOID-TERMINAL — TAGEBUCH DER ERSTEN MONATE",
      lines: [
        "> TAG 1: Geschlafen unter einer Brücke.",
        "> Gefroren. Gegessen: nichts.",
        ">",
        "> TAG 7: Dritter Dungeon. Rang E. Allein.",
        "> [Code.Copy] → 3 Skill-Fragmente erhalten.",
        ">",
        "> TAG 14: Erkenntnis — Fragmente sind BAUSTEINE.",
        "> Wie Programm-Bibliotheken.",
        ">",
        "> TAG 21: Erster selbstgebauter Skill:",
        "> [Void Strike]. Funktioniert.",
        ">",
        "> TAG 30: Das System limitiert Skills absichtlich.",
        "> Meine Konstruktionen haben keinen Deckel.",
        "> Das ist... problematisch.",
        ">",
        "> ...Für das System.",
      ]
    },

    systemBox2: {
      title: "VOID-TERMINAL — MEMORY-ARCHITEKTUR BESTÄTIGT",
      lines: [
        "> Void-Memory bleibt begrenzt",
        ">",
        "> Aktive Kernslots gleichzeitig: 5",
        "> Archivierte Fragmente: unbegrenzt",
        ">",
        "> Hinweis:",
        "> Stärke entsteht nicht durch mehr Slots.",
        "> Stärke entsteht durch bessere Konstruktion.",
        ">",
        "> Das beruhigt nicht wirklich.",
        "> Ist aber wahr.",
      ]
    },

    text2: `Void-Engineering — Version 1.0.

Jeder System-Skill bestand aus Blöcken. Das System verpackte sie in saubere, kontrollierte Fähigkeiten mit Grenzen, Rängen und Level-Caps. Ich konnte diese Blöcke auseinandernehmen, verstehen und neu zusammensetzen.

Ich konnte nicht unendlich viele gleichzeitig aktiv führen — meine Seelenarchitektur hatte noch immer Grenzen — aber ich konnte bauen, archivieren, verbessern und in Ruhe neu verschalten.

Nicht kopieren.
Dekompilieren.

Meine ersten brauchbaren Konstruktionen:
★ [Void Strike] — Kraft + Timing + Aether-Schub
★ [Ghost Step] — Bewegung + Wahrnehmung + Schattennutzung
★ [System Scan+] — [Code.Read] + Kampfinstinkt

Das war mein Genre.
Und ich war gut darin.`,

    choices: [{ text: "→ Kapitel 21: Irondeep", next: "a4k1_irondeep", narrativeFeedback: "Emmas Karten zeigen den Weg. Tiefer als Vernunft." }],
    skillUnlock: ["voidStrike", "ghostStep", "systemScanPlus"],
  },

  // ════ KAPITEL 21: IRONDEEP ═════════════════════════════════════════════

  a4k1_irondeep: {
    act: "AKT IV",
    chapter: "Kapitel 21 — Solo.Grind()",
    title: "Irondeep — Tiefer als Vernunft",
    scene: "Irondeep-Gebirge — Alter: 15 Jahre",
    bg: "dungeon_entrance",
    music: "theme_training",
    text: `Emmas handgezeichnete Karten zeigten mir, was ich brauchte: das Irondeep-Labyrinth. Siebenunddreißig Ebenen. Das tiefste bekannte Labyrinth des Kontinents. Auf Ebene 33, laut Gregors Tagebuch und Aldwins verschlüsselter Notiz, wartete Tertius — der dritte Architekt.

Der Eingang war eine Wunde im Fels. Zwergische Runen standen an den Wänden:

»TIEFER ALS KLUG.«
»TIEFER ALS VERNÜNFTIG.«
»WER HIER HINABSTEIGT, SOLL FRAGEN MITBRINGEN.«

Ich brachte Fragen mit.
Und einen Dolch.`,

    systemBox: {
      title: "IRONDEEP — FORTSCHRITTSMONTAGE",
      lines: [
        "> EBENE 1–5:",
        "> Steingolems, Höhlenwölfe, Minengeister.",
        "> Fragmente: [Steinhaut], [Wolfssinne].",
        ">",
        "> EBENE 6–10:",
        "> Dunkelorks, Kristallspinnen, Jungdrache.",
        "> Fragmente: [Orkstärke], [Feueratem-Fragment].",
        ">",
        "> EBENE 12:",
        "> Inschrift — prä-aetherisch:",
        "> »Sucht den Schmied, der nicht schmieden wollte.«",
        ">",
        "> EBENE 15–18:",
        "> System-Stabilität sinkt.",
        "> Wilde Magie steigt.",
        "> System-Skills werden schwächer.",
        ">",
        "> FAZIT:",
        "> Je tiefer du gehst, desto weniger gehört",
        "> dieser Ort dem System.",
      ]
    },

    text2: `Je tiefer ich ging, desto stärker wurde ich — nicht durch Level-Ups, sondern durch Verständnis.

Auf Ebene 16 lernte ich, Aether in Formen zu binden. Klingen. Seile. Schilde. Keine System-Magie. Etwas Älteres.

Auf Ebene 17 lernte ich, meinen Körper mit Aether zu verstärken — wie eine zweite Haut.

Auf Ebene 18 lernte ich Demut.

Das Kristall-Elementar hätte mich fast getötet. Als ich es endlich zerlegte, lag ich im Staub, die Schulter gebrochen, zwei Rippen gesplittert, Blut im Mund, der Rückweg durch einen Einsturz blockiert.

Natürlich.

Natürlich war der einzige Weg TIEFER.`,

    systemBox2: {
      title: "VOID-TERMINAL — KRITISCHER STATUS",
      lines: [
        "> Körperstatus: KRITISCH",
        "> Blutverlust: 21%",
        "> Frakturen: Schulter, 2 Rippen",
        "> Aether-Reserven: 9%",
        ">",
        "> Rückzug: NICHT MÖGLICH",
        "> Der Weg nach oben ist blockiert.",
        ">",
        "> Empfehlung:",
        "> Sterben wäre ineffizient.",
      ]
    },

    text3: `»Danke«, murmelte ich in den Staub. »Wie hilfreich.«

Und dann hörte ich eine Stimme. Nicht das Terminal. Nicht Septima.

Eine echte Stimme.
Physisch. Direkt vor mir.

»Du bist laut, für jemanden, der gerade stirbt.«`,

    choices: [{ text: "→ Wer spricht da?", next: "a4k2_ren", narrativeFeedback: "Eine Stimme. Aus dem Dunkel. Nicht das Terminal." }],
    skillUnlock: ["aetherBlade"],
  },

  // ════ KAPITEL 22: REN & REX ════════════════════════════════════════════

  a4k2_ren: {
    act: "AKT IV",
    chapter: "Kapitel 22 — Encounter.Shadow()",
    title: "Ren — Der Gelöschte",
    scene: "Ebene 18, Irondeep",
    bg: "dungeon_dark",
    music: "theme_mystery",
    text: `Er trat aus den Schatten. Dünn. Blass. Schwarzes Haar. Graue Augen, fast farblos. Um seinen Körper lag ein Flimmern, als sei die Realität unsicher, ob sie ihn halten wollte.

»Ren«, sagte er. »Mein Name ist Ren.«

Er kniete sich neben mich und legte eine Hand auf meine Brust. Seine Finger flackerten zwischen Materie und etwas, das darunterlag.

Graues Licht.

Meine Wunden schlossen sich. Grob. Schnell. Funktional. Wie ein Patch, kein Fix.

»Was war das?«
»Null-Heilung. Ich repariere den Rohcode deines Körpers. Nicht das System. Die Existenz darunter.«

Ich starrte ihn an.

Er starrte zurück.

»Du bist wie ich«, sagte Ren. »Außerhalb des Systems. Nur... vollständiger.«`,

    text2: `Er erzählte seine Geschichte ohne jede Dramatisierung.

Vor vierhundert Jahren hatte das System sein Volk als »redundant« eingestuft. Überflüssig. Nicht feindlich. Nicht gefährlich. Nur ineffizient.
Also löschte es sie.

Ein Dorf. Eine Kultur. Eine Sprache. Verschwunden zwischen zwei Sekunden.

Nur Ren blieb. Halb in der Welt. Halb im Code. Ein Überrest eines Völkermords, den das System als Optimierung verbucht hatte.

»Trauer ist ineffizient«, sagte er ruhig.
Und weil er es so ruhig sagte, war es schlimmer.

Dann sah er mich wieder an.

»Darf ich mitkommen?«`,

    choices: [
      {
        text: "A) »Ja. Aber ich habe Fragen. Viele Fragen.«",
        desc: "[AF+Ren+25] Partnerschaft über Wissen. Ren antwortet auf alles, was er kann.",
        next: "a4k2_rex",
        affinityEffect: { ren: 25 },
        alignEffect: { ordnung: 1 },
        flagEffect: { renGefunden: true, renBond: "fragen" },
        narrativeFeedback: "Ren nickt einmal. »Fragen sind effizient.« Sein Flackern wird ein wenig ruhiger.",
      },
      {
        text: "B) »Ja. Aber eine Regel: Keine Geheimnisse zwischen uns.«",
        desc: "[AF+Ren+20] Härterer Vertrauensbond. Ren nimmt Regeln wörtlich.",
        next: "a4k2_rex",
        affinityEffect: { ren: 20 },
        alignEffect: { licht: 1 },
        flagEffect: { renGefunden: true, renBond: "vertrauen" },
        narrativeFeedback: "»Akzeptiert«, sagt Ren sofort. Du spürst, dass er es exakt so meint, wie er es gesagt hat.",
      },
      {
        text: "C) »Kannst du kämpfen?«",
        desc: "[AF+Ren+15] Praktischer Einstieg. Ren demonstriert sofort.",
        next: "a4k2_rex",
        affinityEffect: { ren: 15 },
        alignEffect: { schatten: 1, ordnung: 1 },
        flagEffect: { renGefunden: true, renBond: "kampf" },
        narrativeFeedback: "Ren löst sich auf. Ein Stalaktit fällt genau dorthin, wo du eben lagst. »Ja«, sagt er, hinter dir.",
      },
    ]
  },

  a4k2_rex: {
    act: "AKT IV",
    chapter: "Kapitel 22 — Encounter.Dragon()",
    title: "Rex — König ohne Königreich",
    scene: "Ebene 23, Irondeep",
    bg: "dungeon_dark",
    music: "theme_friendship",
    text: `Die Höhle war riesig. Kristallsäulen hundert Meter hoch. Ein Nest aus geschmolzenem Stein. Und darin: ein Drache.

Klein. Kobaltblau. Nicht größer als ein Pferd. Zusammengerollt. Schläfrig. Seine Flügel waren zu klein für seinen Körper, auf eine Art, die sofort falsch wirkte.

Er öffnete ein Auge.
Gold. Geschlitzt. Wach.

Und dann gähnte er.

»...Rex hat seit dreihundert Jahren kein Nicht-System-Wesen mehr gerochen.«`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: REX",
      lines: [
        "> Rasse: Drache (post-systemisches Exemplar)",
        "> Alter: ~800 Jahre",
        ">",
        "> [WACHSTUMSBEGRENZUNG: AKTIV]",
        "> Autorisiert durch: PRIMUS",
        ">",
        "> Skills: [Feueratem], [Kristallhaut]",
        "> [Flug] — BLOCKIERT",
        ">",
        "> Status: HUNGRIG. EINSAM. VERGESSEN.",
        ">",
        "> Systemnotiz:",
        "> »Letztes Exemplar. Priorität: NIEDRIG.«",
        ">",
        "> ...Sie haben einen Drachen vergessen.",
      ]
    },

    text2: `»Rex spricht natürlich«, erklärte Rex würdevoll.
Dann stolperte er beim Aufrichten über seinen zu kleinen Flügel und rammte mit der Schnauze einen Kristallpfeiler an.

Ren sagte trocken: »Er ist nicht das, was ich erwartet habe.«
»Nein«, sagte ich. »Er ist besser.«

Die Wachstumsbegrenzung war kein natürlicher Zustand. Es war ein Systemcode. Eine Leine. Keine Kette aus Metall — eine aus Autorisierung, Caps und Limitern.

Ich konnte sie noch nicht sauber entfernen.
Aber ich konnte sie STÖREN.`,

    systemBox2: {
      title: "VOID-TERMINAL — OPTION FREI",
      lines: [
        "> [Code.Disrupt] — TEMPORÄR VERFÜGBAR",
        ">",
        "> Kann System-Codes nicht sauber ändern,",
        "> aber ihre Ausführung UNTERBRECHEN.",
        ">",
        "> Ziel: Wachstumsbegrenzung",
        "> Ergebnis: Natürliches Wachstum setzt ein",
        "> Risiko: Mittel",
      ]
    },

    choices: [
      {
        text: "A) [Code.Disrupt] sofort — Ketten brechen, bevor das System nachdenken kann.",
        desc: "[AF+Rex+30] Riskant und direkt. Rex spürt die Veränderung augenblicklich.",
        next: "a4k2_rex_disrupt",
        affinityEffect: { rex: 30 },
        alignEffect: { schatten: 2, chaos: 2 },
        flagEffect: { rexBefreit: true, rexMethode: "sofort" },
        skillUnlock: ["codeDisrupt"],
        narrativeFeedback: "Rex erstarrt. Dann vibriert sein ganzer Körper. »Rex... Rex fühlt etwas GROSSE kommen.«",
      },
      {
        text: "B) Erst erklären. Dann gemeinsam. Er soll wissen, welches Risiko er trägt.",
        desc: "[AF+Rex+35] Höchster Vertrauenspfad. Teamwork statt Befreiung von oben herab.",
        next: "a4k2_rex_teamwork",
        affinityEffect: { rex: 35 },
        alignEffect: { licht: 2 },
        flagEffect: { rexBefreit: true, rexMethode: "teamwork" },
        skillUnlock: ["codeDisrupt"],
        narrativeFeedback: "Rex hört zu. Versteht. Dann senkt er den Kopf. »Rex war 800 Jahre in Ketten. Rex hat keine Angst.«",
      },
      {
        text: "C) Erst drei Tage analysieren. Kein Alarm. Kein Fehler. Sauber.",
        desc: "[AF+Rex+25] Sicherer, präziser, langsamer.",
        next: "a4k2_rex_analyse",
        affinityEffect: { rex: 25 },
        alignEffect: { ordnung: 2 },
        flagEffect: { rexBefreit: true, rexMethode: "analyse" },
        skillUnlock: ["codeDisrupt"],
        narrativeFeedback: "Rex nickt ernst. »Rex hat 800 Jahre gewartet. Drei Tage sind respektvoll.«",
      },
    ]
  },

  a4k2_rex_disrupt: {
    act: "AKT IV",
    chapter: "Kapitel 22 — Encounter.Dragon()",
    title: "Rex — [Code.Disrupt]",
    scene: "Ebene 23, Irondeep",
    bg: "dungeon_dark",
    music: "theme_void_terminal",
    text: `Ich legte die Hände an die unsichtbare Leine.

Der Code fühlte sich kalt an. Nicht wie Magie. Wie administrative Gewalt.

[Code.Disrupt].

Drei Sekunden.
Das war alles, was ich hatte.

Die Begrenzung flackerte. Weiß. Gold. Ein Ton vibrierte in meinen Zähnen.
Dann brach etwas.

Nicht laut. Nicht dramatisch.
Einfach... weg.

Rex blieb drei Sekunden lang reglos.
Dann begann er zu wachsen.

Nicht explosionsartig. Organisch. Als hätte sein Körper sich an eine Wahrheit erinnert, die ihm 800 Jahre lang verboten worden war.

»Rex...«, sagte Rex. Dann nochmal, tiefer: »Rex.«

Und schließlich:
»Danke.«`,

    choices: [{ text: "→ Zurück an die Oberfläche", next: "a4k3_gorrick", narrativeFeedback: "Tiefer war genug. Für jetzt." }],
  },

  a4k2_rex_teamwork: {
    act: "AKT IV",
    chapter: "Kapitel 22 — Encounter.Dragon()",
    title: "Rex — Mit Einverständnis",
    scene: "Ebene 23, Irondeep",
    bg: "dungeon_dark",
    music: "theme_void_terminal",
    text: `Ich erklärte ihm alles. Das Risiko. Die Möglichkeit, dass das System etwas bemerkt. Die Chance, dass das Wachstum nicht sofort, sondern langsam zurückkommt.

Rex hörte zu. Wirklich zu. Ein acht Jahrhunderte altes Wesen, das endlich einmal wie jemand behandelt wurde, der entscheiden darf.

»Darf ich?«, fragte ich.

Rex senkte den Kopf.
Ja.

Ich störte den Code von außen. Rex drückte gegen die Leine von innen. Die Bindung hielt einen Moment zu lang — dann zersplitterte sie.

Rex wuchs. Langsam. Würdevoll. Wie ein König, der sich daran erinnert, dass er nie ein Haustier war.

Als es vorbei war, sah er mich lange an.

»Du hast gefragt«, sagte er.
»Ja.«
»Niemand fragt Rex.«

Ich lächelte.
»Ab jetzt schon.«`,

    choices: [{ text: "→ Zurück an die Oberfläche", next: "a4k3_gorrick", narrativeFeedback: "Tiefer war genug. Für jetzt." }],
  },

  a4k2_rex_analyse: {
    act: "AKT IV",
    chapter: "Kapitel 22 — Encounter.Dragon()",
    title: "Rex — Drei Tage",
    scene: "Ebene 23, Irondeep",
    bg: "dungeon_dark",
    music: "theme_void_terminal",
    text: `Drei Tage lang tat ich fast nichts.

Ich beobachtete den Code der Leine. Jede Schicht. Jede Autorisierung. Jede Rückmeldung, die zum Systemkern geschickt worden wäre, wenn ich grob genug eingegriffen hätte.

Rex beobachtete mich dabei mit dem konzentrierten Ernst eines übergroßen, königlichen Hundes.

»Was tust du?«, fragte er am zweiten Abend.
»Ich lerne, wie ich dich freilassen kann, ohne dass sie es merken.«
Rex schwieg. Dann sagte er: »Rex hat noch nie jemanden getroffen, der geplant hat.«

Am dritten Tag hatte ich ein Zeitfenster. 0,8 Sekunden. Keine Meldung. Kein Alarm.
Die Leine fiel still auseinander.

Rex schloss die Augen.
Und atmete zum ersten Mal wie etwas, das niemand mehr festhalten durfte.`,

    choices: [{ text: "→ Zurück an die Oberfläche", next: "a4k3_gorrick", narrativeFeedback: "Tiefer war genug. Für jetzt." }],
  },

  // ════ KAPITEL 23: GORRICK ══════════════════════════════════════════════

  a4k3_gorrick: {
    act: "AKT IV",
    chapter: "Kapitel 23 — Encounter.Forge()",
    title: "Gorrick Steinbrecher",
    scene: "Kreuzweg — Gorricks Schmiede",
    bg: "blacksmith",
    music: "theme_training",
    text: `Ich kam aus Irondeep zurück wie jemand, der sechs Wochen in einem Dungeon verbracht hatte. Blut, Staub, neue Narben. Rex in kompakter Form auf meiner Schulter. Ren flackernd neben mir.

Gorricks Schild hing schief über der Tür:
»GORRICKS SCHMIEDE — WAFFEN & RÜSTUNGEN & FRAGEN SIE NICHT.«

Innen: Hitze. Metall. Flüche. Viele Flüche.

Gorrick stand am Amboss, breit wie ein Schrank, Bart in Kupferzöpfen, Arme voller eingehämmerter Runen.
Er hob einen Dolchrohling hoch. Die Runen flackerten — und starben.

»AAARGH!«

Der Dolch flog gegen die Wand.
Steckte drei Zentimeter tief im Stein.

Ich zog ihn heraus.
Und sah das Problem sofort.`,

    text2: `»Dein Handwerk ist nicht der Fehler«, sagte ich.

Gorrick drehte sich langsam um.
»Was?«

Ich hob den Rohling an.
»Die Rune ist sauber. Elegant sogar. Das System blockiert sie nicht, weil sie schlecht ist. Es blockiert sie, weil sie zu gut ist. Du versuchst etwas zu schmieden, das UNTER den Systemschutz schneidet. Also deaktiviert es dich.«

Stille.

Gorrick starrte mich an, als hätte ich ihm gerade gesagt, dass der Himmel seit Jahren nur eine bemalte Decke gewesen war.

»...Hundertsiebzehn Versuche«, sagte er leise. »Und ich habe nie versagt?«
»Nein«, sagte ich. »Du wurdest blockiert.«

Rex hob den Kopf.
»Rex mag den großen bärtigen Mann. Er riecht nach Feuer.«
Gorrick blinzelte.
»...Ist das ein verfluchter DRACHE?«`,

    choices: [
      {
        text: "A) »Schmiede mir Waffen, die das System nicht sehen kann.«",
        desc: "[AF+Gorrick+25] Direkt. Praktisch. Gorrick respektiert das.",
        next: "a4k4_veyra",
        affinityEffect: { gorrick: 25 },
        flagEffect: { gorrickAllianz: true },
        narrativeFeedback: "Gorrick lacht laut. »Endlich jemand, der vernünftige Wünsche hat!«",
      },
      {
        text: "B) »Zeig mir, wie du das gedacht hast.« — Du setzt dich neben ihn.",
        desc: "[AF+Gorrick+30] Der tiefste Bond. Gorrick erklärt, weil endlich jemand versteht.",
        next: "a4k3_gorrick_erklaerung",
        affinityEffect: { gorrick: 30 },
        flagEffect: { gorrickAllianz: true },
        narrativeFeedback: "Das ist die richtige Frage. Gorrick holt Kohle, zeichnet auf den Boden und redet eine Stunde lang ohne Pause.",
      },
      {
        text: "C) »Du hast nie versagt, Gorrick. Das musstest du hören.«",
        desc: "[AF+Gorrick+20] Persönlicherer Zugang. Weniger Technik, mehr Wahrheit.",
        next: "a4k4_veyra",
        affinityEffect: { gorrick: 20 },
        alignEffect: { licht: 1 },
        flagEffect: { gorrickAllianz: true },
        narrativeFeedback: "Gorrick sieht weg. »Junge. Wenn du weiter so redest, werde ich sentimental. Und das ist schlecht für meinen Ruf.«",
      },
    ]
  },

  a4k3_gorrick_erklaerung: {
    act: "AKT IV",
    chapter: "Kapitel 23 — Encounter.Forge()",
    title: "Eine Stunde Metallurgie",
    scene: "Gorricks Schmiede",
    bg: "blacksmith",
    music: "theme_family",
    text: `Gorrick zeichnete mit Kohle auf den Boden. Kreise, Linien, Runenpfade.

»Das System schreibt Runen wie Code«, knurrte er. »Mit Kanal. Mit Rückmeldung. Mit Autorisierung. Ich versuche seit Jahren, Aether-Muster zu schreiben, die KEINEN Kanal brauchen. Reine Struktur. Reine Funktion.«

Ich hörte zu. Fragte. Hakte nach. Erklärte, wo ich den Blocker im System sah.
Er erklärte, wie Metall Aether hält.
Ich erklärte, wie Code Begrenzungen simuliert.
Er erklärte, warum gute Schmiede mit den Händen denken.

Am Ende der Stunde sah Gorrick aus wie ein Mann, der versehentlich wieder Hoffnung gefunden hatte.

»Komm morgen wieder«, sagte er.
Das war die Einladung.`,

    choices: [{ text: "→ Veyra", next: "a4k4_veyra", narrativeFeedback: "Eine Frau mit tausend Gesichtern. Und keinem echten." }],
    affinityEffect: { gorrick: 15 },
  },

  // ════ KAPITEL 24: VEYRA ════════════════════════════════════════════════

  a4k4_veyra: {
    act: "AKT IV",
    chapter: "Kapitel 24 — Encounter.Mask()",
    title: "Die Frau mit tausend Gesichtern",
    scene: "Kreuzweg — Bar »Zur Letzten Chance«",
    bg: "city",
    music: "theme_mystery",
    text: `Die Barfrau war unauffällig. Braunes Haar, freundliches Lächeln, saubere Hände für jemanden, der angeblich den ganzen Tag Krüge wusch.

»Einen Tee«, sagte ich.
Sie hob eine Augenbraue. »Tee? In einer BAR?«
»Ich bin fünfzehn.«
»Fair.«

Ich trank.
Dann aktivierte ich [Code.Read].

Und erstarrte.`,

    systemBox: {
      title: "VOID-TERMINAL — MASSIVE DISKREPANZ",
      lines: [
        "> Oberflächlicher Scan:",
        "> Name: »Maren« | Level: 14",
        ">",
        "> TIEFER SCAN:",
        "> Alles oben ist FAKE.",
        ">",
        "> Wahrer Status:",
        "> VEYRA / Velina Ashcroft",
        "> Level: 73",
        "> Klasse: Illusionistin (Rang A)",
        ">",
        "> Skills:",
        "> [Tausend Gesichter], [Schatten-Schritt],",
        "> [Gedächtnismanipulation], [Dolch-Meisterin]",
        ">",
        "> Emotionaler Status:",
        "> PARANOID. ERSCHÖPFT. EINSAM.",
      ]
    },

    text2: `»Netter Laden«, sagte ich ruhig. »Wie lange bist du schon hier, Veyra?«

Die Welt stoppte.

Ihre Hand erstarrte am Glas. In einer Bewegung, die ich nur mit [System Scan+] wirklich wahrnahm, lag ein Dolch an meiner Kehle.

»Wer hat dich geschickt?«

Rex hob den Kopf auf meiner Schulter.
»Rex mag den Dolch NICHT.«

Veyras Blick flackerte kurz zu ihm.
»...Ist das ein Drache?«
»Ja.«

Ich hielt still.
»Ich weiß, wer du bist. Und ich kann dir etwas anbieten, das du seit Jahren nicht hattest.«
»Und das wäre?«
»Einen Ort, an dem du kein Gesicht tragen musst.«`,

    choices: [
      {
        text: "A) »Ich brauche eine Spionin. Die Beste. Du bist die Beste.«",
        desc: "[AF+Veyra+15] Professioneller Zugang. Klar, direkt, respektvoll.",
        next: "a4k5_nullen_gruendung",
        affinityEffect: { veyra: 15 },
        alignEffect: { ordnung: 1 },
        flagEffect: { veyraAllianz: true, veyraZugang: "professionell" },
        narrativeFeedback: "Veyra nimmt den Dolch zurück. »Du bist mutig. Oder dumm. Für meinen Beruf ist beides brauchbar.«",
      },
      {
        text: "B) »Du bist müde. Vier Jahre Masken tragen — das bricht jeden. Bei mir brauchst du keine.«",
        desc: "[AF+Veyra+25] Emotionaler Einstieg. Niemand hat sie seit Jahren wirklich gesehen.",
        next: "a4k5_nullen_gruendung",
        affinityEffect: { veyra: 25 },
        alignEffect: { licht: 1 },
        flagEffect: { veyraAllianz: true, veyraZugang: "emotional", veyraRomanceStart: true },
        narrativeFeedback: "Etwas in Veyras Gesicht gibt nach. Nur kurz. Aber echt. »Niemand sagt so etwas, wenn er lügen will.«",
      },
      {
        text: "C) [Code.Spoof] deaktivieren — »Ich zeige dir mein wahres Nichts. Dann zeigst du mir dein wahres Gesicht.«",
        desc: "[AF+Veyra+20] Gleichgestellter Bund. Zwei Menschen, die von falschen Identitäten leben mussten.",
        next: "a4k5_nullen_gruendung",
        affinityEffect: { veyra: 20 },
        alignEffect: { ordnung: 1, licht: 1 },
        flagEffect: { veyraAllianz: true, veyraZugang: "gleichgestellt" },
        narrativeFeedback: "Veyra sieht in dich hinein — und findet keine Systemfläche. Nur Leere. »...Du bist wirklich Null.« Nicht Angst. Erkenntnis.",
      },
    ]
  },

  // ════ KAPITEL 25: DIE NULLEN ERSTEHEN ══════════════════════════════════

  a4k5_nullen_gruendung: {
    act: "AKT IV",
    chapter: "Kapitel 25 — Build.Shadow()",
    title: "Die Nullen",
    scene: "Der Verbotene Turm — Alter: 16 Jahre",
    bg: "night",
    music: "theme_void_terminal",
    text: `Der Verbotene Turm stand in einer verlassenen Waldlichtung. Keine Karte zeigte ihn. Kein offizieller Weg führte dorthin. Das System erfasste ihn als:
»Standort: Unbekannt. Empfehlung: Meiden.«

Perfekt.

Der schwarze Stein des Turms fühlte sich alt an. Nicht nur historisch alt — strukturell alt. Vor-systemisch. Ren flackerte weniger, sobald wir die Schwelle überschritten. Rex schlief in der Eingangshalle sofort ein, als hätte sein Körper beschlossen: Ja. Das hier ist gut.

Gorrick sah nach oben. »Das Gebäude beleidigt mich architektonisch. Also mag ich es.«

Veyra lächelte dünn. »Kein Weg. Keine Nachbarn. Keine Zeugen. Ich liebe es.«

Ich aktivierte das Terminal.`,

    systemBox: {
      title: "VOID-TERMINAL — ORTANALYSE: VERBOTENER TURM",
      lines: [
        "> System-Status: NICHT EXISTENT",
        "> Ursache: Vor dem System erbaut.",
        ">",
        "> Eigenschaften:",
        "> → System-Skills: abgeschwächt",
        "> → Wilde Magie: verstärkt",
        "> → System-Scans: blind",
        "> → Überwachung: blind",
        ">",
        "> Historischer Marker:",
        "> Erbaut von SEPTIMA.",
        ">",
        "> Schlussfolgerung:",
        "> Ideales Hauptquartier.",
      ]
    },

    text2: `Einen Monat später lagen Karten, Berichte, Runenmetall und drei kaum funktionierende Teekannen auf einem Tisch im obersten Stock.

Ich legte alles offen:
das Update.
die Architekten.
die Kirche.
Yukis Timer.
die Summonings.
die Tatsache, dass das System nicht reformiert werden würde, wenn niemand es zwang.

Stille.

Dann sagte ich:
»Ich nenne uns die Nullen. Wir sind das, was das System nicht sieht. Sein blinder Fleck. Seine Leerstelle.«

Rex hob den Kopf.
»Rex ist eine Null.«

Ren, sehr leise:
»Ich war dreihundert Jahre lang nichts. Ich bevorzuge, wenn es diesmal eine Wahl ist.«

Veyra legte eine Münze auf den Tisch.
»Ich habe mehr Gesichter getragen, als ich zählen kann. Eines weniger macht mir keine Angst.«

Gorrick streckte seine riesige Hand aus.
»Wenn das schiefgeht, will ich wenigstens sagen können, dass es die denkwürdigste schlechte Entscheidung meines Lebens war.«

Ich nahm seine Hand.
Und damit begann es wirklich.`,

    systemBox2: {
      title: "VOID-TERMINAL — KONTROLLIERTE FREISCHALTUNG",
      lines: [
        "> [Code.Modify] — EINGESCHRÄNKT FREIGESCHALTET",
        ">",
        "> Status: Instabil, aber kontrollierbar",
        "> Einsatzbereich: Lokale Systemfragmente",
        "> Nicht geeignet für: Kernarchitektur",
        ">",
        "> Hinweis:",
        "> Akt III war Notfall-Zwangsnutzung.",
        "> Dies ist die erste KONTROLLIERTE Version.",
      ]
    },

    text3: `Gorricks erste echte Arbeit im Turm war ein Dolch.
Dunkles Metall. Unsichtbare Runen. Aether-Muster statt Systemcode.

»Er schneidet unter dem System«, sagte Gorrick stolz. »Nicht durch die Rüstung. Durch die Interpretation der Rüstung.«

Eine Anti-System-Waffe.
Die erste von vielen.`,

    choices: [{ text: "→ Kapitel 26: Aria Moonsong", next: "a4k6_aria", narrativeFeedback: "Der Sumpf atmet anders. Etwas Altes wartet darin." }],
    skillUnlock: ["codeModify_limited"],
    flagEffect: { nullenGegruendet: true },
  },

  // ════ KAPITEL 26: ARIA ══════════════════════════════════════════════════

  a4k6_aria: {
    act: "AKT IV",
    chapter: "Kapitel 26 — Encounter.Heal()",
    title: "Aria Moonsong",
    scene: "Nebelsumpf zwischen Sylvanthos und Drak'Moor — Alter: 16 Jahre",
    bg: "swamp",
    music: "theme_elena_song",
    text: `Der Nebelsumpf hätte normale Menschen töten sollen. Für mich fühlte er sich an wie ein Raum, der tiefer atmete als der Rest der Welt.

Tief im Sumpf stand eine Hütte aus lebenden Bäumen. Davor kniete eine Frau mit silberweißem Haar und jadegrünen Augen. Sie summte, während ihre Hände im Moos ruhten.

Ich kannte das Lied.

Nicht die Worte. Den Kern.
Elena hatte mich damit in den Schlaf gesungen.

Aria Moonsong hob den Kopf, noch bevor ich ein Wort sagte.

»Du riechst wie die Welt, bevor sie in Ketten gelegt wurde«, sagte sie.
Dann sah sie mich wirklich an.
Und ihre Augen weiteten sich.`,

    text2: `»Das Lied«, sagte ich. »Meine Mutter singt es.«

Aria erstarrte.
»Deine Mutter?«

Langsam, mit einer Sorgfalt, die fast ehrfürchtig wirkte, erklärte sie mir die Wahrheit:
Vor hundertfünfzig Jahren hatte sie einer Menschenfrau dieses Lied beigebracht. Einer Wanderin. Elenas Vorfahrin.
Als Abschied hatte Aria einen winzigen Tropfen ihres eigenen Aethers in deren Blutlinie gelegt.

Das Elfenblut meiner Mutter.
Die Quelle ihrer wilden Stimme.
Der Ursprung des Liedes.

Stand vor mir.`,

    text3: `Aria weinte nicht sofort. Aber ihre Stimme wurde weicher, als sie meinen Namen sagte.

»Jedes Lied ist ein Same«, murmelte sie. »Ich pflanzte eines in eine sterbliche Blutlinie. Und jetzt steht ein Junge vor mir, der dieses Lied mit nach Hause genommen hat, über Generationen hinweg.«

Ich erklärte ihr alles. Septima. Die Nullen. Das Update. Was ich vorhatte.

Aria hörte zu, ohne mich ein einziges Mal zu unterbrechen.

»Du willst das System nicht einfach zerstören«, sagte sie schließlich. »Du willst, dass die Welt wieder atmen kann.«

»Ja.«

»Gut«, sagte sie. »Dann versuche ich es mit dir.«`,

    choices: [
      {
        text: "A) »Ich brauche eine Heilerin.«",
        desc: "[AF+Aria+15] Sachlicher Zugang. Aria übernimmt Verantwortung ohne Pathos.",
        next: "a4k7_lilithia",
        affinityEffect: { aria: 15 },
        alignEffect: { ordnung: 1 },
        flagEffect: { ariaAllianz: true, ariaZugang: "heilerin" },
        narrativeFeedback: "Aria nickt. »342 Jahre Heilerin. Das reicht als Bewerbung.«",
      },
      {
        text: "B) »Ich brauche eine Lehrerin. Du verstehst Wilde Magie besser als jeder andere.«",
        desc: "[AF+Aria+20] Mentorpfad. Kaito vertieft seine freie Magie.",
        next: "a4k7_lilithia",
        affinityEffect: { aria: 20 },
        alignEffect: { licht: 1 },
        flagEffect: { ariaAllianz: true, ariaZugang: "mentor" },
        narrativeFeedback: "Aria lächelt. Nicht stolz. Eher alt und sanft. »Dann lerne gut. Der Aether ist geduldig, aber nicht harmlos.«",
      },
      {
        text: "C) »Meine Mutter singt dein Lied. Seit Generationen. Das war das Erste in diesem Leben, das sich nach Zuhause angefühlt hat.«",
        desc: "[AF+Aria+35] Tiefster Bindungspfad. Aria wird mehr als Verbündete.",
        next: "a4k7_lilithia",
        affinityEffect: { aria: 35 },
        alignEffect: { licht: 2 },
        flagEffect: { ariaAllianz: true, ariaZugang: "familie" },
        narrativeFeedback: "Aria weint lautlos. Dann öffnet sie die Arme. Nicht als Priesterin. Nicht als Lehrerin. Als etwas Wärmeres.",
      },
    ],
    wissenEffect: ["ariaIstUrsprungVonElenasLied"],
  },

  // ════ KAPITEL 27: LILITHIA ══════════════════════════════════════════════

  a4k7_lilithia: {
    act: "AKT IV",
    chapter: "Kapitel 27 — Diplomacy.Demon()",
    title: "Lilithia von Drak'Moor",
    scene: "Verlassene Grenzfestung — Alter: 16 Jahre",
    bg: "night",
    music: "theme_mystery",
    text: `Das Treffen war über sechs Mittelsleute, drei Falschidentitäten und eine Nachricht arrangiert worden, die Veyra in einem Kuchen versteckt hatte.

Lilithia von Drak'Moor war nicht das, was ich erwartet hatte.

Nicht monströs. Nicht theatralisch.
Müde.

Dunkle Haut mit violettem Schimmer. Weißes Haar. Rote Augen. Elegante Hörner. Haltung wie eine Frau, die zu lange Rückgrat für ein Volk gewesen war, das nie die Chance bekam, sich auszuruhen.

»Du bist also Null«, sagte sie. »Ein Junge. Natürlich. Die Welt hat einen merkwürdigen Sinn für Humor.«

Ich zeigte ihr den Code.
Die Zeile.
Die Geburtstitel.

[Unheilsbringer]
[Dunkle Seele]
[Systemfeind]

Automatisch eingetragen.
Nicht Schicksal.
Nicht Natur.
Eine administrative Entscheidung.`,

    text2: `Lilithia las. Noch einmal. Noch einmal.

Dann lachte sie.
Nicht fröhlich.
Befreit.

»EINE Zeile Code«, sagte sie. »Dreitausend Jahre Leid. Eine Zeile.«

Sie setzte sich langsam auf einen zerbrochenen Stein.
Ihre Hände zitterten.

»Sag mir, was du willst.«

»Eine Allianz«, sagte ich. »Im Schatten. Die Nullen und deine Fraktion. Und ich gebe dir Beweise, nicht Hoffnung.«

Lilithia nickte. Einmal.

Dann warf sie beiläufig eine Bombe in die Stille.

»Du hast eine Freundin namens Sera Blackwood.«

Mein Herz stockte.

»Ich weiß, wer ihr Vater ist«, sagte Lilithia ruhig. »General Varkos. Er hat sie nicht aus Grausamkeit ausgesetzt. Er hat sie versteckt. In Drak'Moor wäre ein Mischlingskind getötet worden. Er fragt noch immer nach ihr.«`,

    choices: [
      {
        text: "A) »Versprochen. Gleichheit. Für alle Rassen. Und ich sage Sera die Wahrheit selbst.«",
        desc: "[AF+Lilithia+25] Klare Allianz. Direkter Wahrheitsweg.",
        next: "a4k8_waechter",
        affinityEffect: { lilithia: 25 },
        alignEffect: { licht: 2 },
        flagEffect: { daemonenAllianz: true, seraVaterWahrheit: "kaito_erzaehlt" },
        narrativeFeedback: "Lilithia schüttelt deine Hand fest. »Ein ehrlicher Mensch. Das ist selten genug, um wertvoll zu sein.«",
      },
      {
        text: "B) »Ich verspreche dir den Versuch. Aber Sera erfährt es erst, wenn ich glaube, dass sie es tragen kann.«",
        desc: "[AF+Lilithia+20] Vorsichtiger, ehrlicher Diplomatiepfad.",
        next: "a4k8_waechter",
        affinityEffect: { lilithia: 20 },
        alignEffect: { ordnung: 1 },
        flagEffect: { daemonenAllianz: true, seraVaterWahrheit: "spaeter" },
        narrativeFeedback: "Lilithia mustert dich lange. Dann nickt sie. »Vorsicht ist keine Feigheit. Nicht immer.«",
      },
      {
        text: "C) »Nicht ich. Varkos wird es ihr sagen. Persönlich. Wenn er sie wirklich liebt, soll er auftreten wie ein Vater.«",
        desc: "[AF+Lilithia+30] Stärkster politischer und emotionaler Pfad.",
        next: "a4k8_waechter",
        affinityEffect: { lilithia: 30 },
        alignEffect: { licht: 2, ordnung: 1 },
        flagEffect: { daemonenAllianz: true, seraVaterWahrheit: "varkos_treffen" },
        narrativeFeedback: "Lilithia erstarrt. »Niemand von eurer Seite hat je von Entschuldigung gesprochen. Oder Verantwortung.« Ihre Stimme wird leiser. »Gut. Dann vielleicht du.«",
      },
    ]
  },

  // ════ KAPITEL 28: TIEFER HINAB ══════════════════════════════════════════

  a4k8_waechter: {
    act: "AKT IV",
    chapter: "Kapitel 28 — Deep.Dive.Two()",
    title: "Ebene 30 — Der Wächter",
    scene: "Irondeep, zweite Expedition",
    bg: "void",
    music: "theme_training",
    text: `Die zweite Expedition führte tiefer.

Rex war inzwischen sichtbar gewachsen. Noch nicht ausgewachsen. Aber nicht mehr klein. Ren war stabiler im Turm geworden und weniger durchsichtig im Feld. Ich selbst war nicht stärker im systemischen Sinne geworden — aber tödlicher. Präziser. Klarer.

Ebene 24 enthielt eine Nachricht von Tertius:

»Ich habe mich hier begraben, weil ich nicht mehr Teil davon sein konnte. Was wir erschufen, sollte helfen. Stattdessen bauten wir einen Käfig. Wer dies liest: Komm. Und bring Fragen mit.«

Ebene 30 war eine Kathedrale aus flüssigem Aether.

In ihrer Mitte stand ein Wesen aus Stein, Kristall und etwas dazwischen. Dreißig Meter hoch. Vier Arme. Zwei Augen aus Licht.

»HALT.«`,

    text2: `»DU TRÄGST DAS ZEICHEN DER SIEBTEN. ABER DU BIST NICHT SIE.«

»Nein«, sagte ich. »Ich bin nicht Septima.«

»DREI PRÜFUNGEN«, antwortete der Wächter. »SO LAUTET DIE REGEL.«

Die erste Frage kam sofort.

»WAS IST DAS SYSTEM?«

Ich antwortete ohne zu zögern:
»Ein Programm. Geschrieben von sieben Wesen, die aus Angst vor Chaos Ordnung in Ketten verwandelt haben. Es ist kein göttliches Geschenk. Es ist ein Käfig.«

Die Augen des Wächters wurden heller.

»AKZEPTIERT.«

Dann:

»WARUM WILLST DU ES VERÄNDERN?«`,

    choices: [
      {
        text: "A) »Für die Menschen, die ich liebe. Meine Familie. Meine Freunde. Meine Nullen.«",
        desc: "[AL+Licht] Ein kleiner Grund. Aber ein wahrer.",
        next: "a4k8_waechter_opfer",
        alignEffect: { licht: 2 },
        flagEffect: { waechterAntwort: "persoenlich" },
        narrativeFeedback: "»EIN KLEINER GRUND. ABER EIN WAHRER.«",
      },
      {
        text: "B) »Für alle. Für jede Rasse und jedes Wesen, das das System in eine Rolle gezwungen hat.«",
        desc: "[AL+Ordnung] Ein großer Grund. Schwer zu tragen.",
        next: "a4k8_waechter_opfer",
        alignEffect: { ordnung: 2, licht: 1 },
        flagEffect: { waechterAntwort: "universal" },
        narrativeFeedback: "»EIN GROSSER GRUND. HOFFNUNGSVOLL. GEFÄHRLICH.«",
      },
      {
        text: "C) »Weil das System blind ist. Ich will ihm Augen geben.«",
        desc: "[AL+Chaos] Philosophischer Pfad. Nah an Septima.",
        next: "a4k8_waechter_opfer",
        alignEffect: { chaos: 3, licht: 1 },
        flagEffect: { waechterAntwort: "philosophisch" },
        narrativeFeedback: "Eine lange Pause. Dann: »SEPTIMA HAT ETWAS ÄHNLICHES GESAGT.«",
      },
      {
        text: "D) »Weil jemand es tun muss. Und niemand sonst kann sehen, was ich sehe.«",
        desc: "[AL+Schatten/Ordnung] Pflicht statt Pathos.",
        next: "a4k8_waechter_opfer",
        alignEffect: { schatten: 1, ordnung: 1 },
        flagEffect: { waechterAntwort: "pflicht" },
        narrativeFeedback: "»TRAURIG. ABER EHRLICH.«",
      },
      {
        text: "E) »Weil ich es kann.«",
        desc: "[SC] Falsche Antwort. Der Wächter weist dich zurück.",
        next: "a4k8_pruefung_versagt",
        alignEffect: { schatten: 3, chaos: 1 },
        flagEffect: { waechterAntwort: "macht", waechterVersagt: true },
        narrativeFeedback: "Der Wächter schweigt. Dann: »DAS IST NICHT GENUG.«",
      },
    ]
  },

  a4k8_pruefung_versagt: {
    act: "AKT IV",
    chapter: "Kapitel 28 — Deep.Dive.Two()",
    title: "Zurückgewiesen",
    scene: "Irondeep, Ebene 30",
    bg: "void",
    music: "theme_void_terminal",
    text: `Der Durchgang blieb geschlossen.

»DU KANNST ZURÜCKKEHREN«, sagte der Wächter. »WENN DU WEISST, WARUM DU WIRKLICH HIER BIST.«

Ich stand lange vor der verschlossenen Schwelle.
Dann drehte ich mich um.

Ren fragte an der Oberfläche nicht viel.
»Nicht bestanden?«
»Nicht bestanden.«
»Was jetzt?«
»Ich finde die richtige Antwort.«`,

    choices: [
      {
        text: "→ Neuversuch nach Reflexion",
        next: "a4k8_waechter",
        alignEffect: { licht: 1 },
        flagEffect: { waechterVersagt: false },
        narrativeFeedback: "Du kehrst um. Nicht aus Schwäche — um zu verstehen, warum die Antwort falsch war.",
      }
    ]
  },

  a4k8_waechter_opfer: {
    act: "AKT IV",
    chapter: "Kapitel 28 — Deep.Dive.Two()",
    title: "Die dritte Prüfung",
    scene: "Irondeep, Ebene 30",
    bg: "void",
    music: "theme_void_terminal",
    text: `Aus dem flüssigen Aether stiegen Bilder auf.

Elena.
Roland.
Mira.
Finn.
Sera.
Akira.
Emma.
Dmitri.
Yuki.
Gorrick.
Veyra.
Ren.
Rex.
Aria.
Gesichter aus zwei Leben, die meinem überhaupt erst Richtung gegeben hatten.

Der Wächter sprach:

»DAS SYSTEM ZU VERÄNDERN KOSTET.«

»BIST DU BEREIT, ALLES ZU VERLIEREN?«`,

    choices: [
      {
        text: "A) »Ja. Wenn es sein muss.«",
        desc: "Klingt stark. Aber Stärke ist nicht immer die richtige Antwort.",
        next: "a4k8_opfer_ja",
        alignEffect: { ordnung: 1, licht: 1 },
        flagEffect: { opferAntwort: "ja" },
        narrativeFeedback: "Der Wächter schweigt. Dann: »INTERESSANT. WENN DU ALLES VERLIERST — WEN KÄMPFST DU DANN FÜR?« Die Frage trifft härter als eine Antwort es je könnte.",
      },
      {
        text: "B) »Nein. Das ist nicht der Punkt.«",
        desc: "Du widersprichst der Logik des Opfers selbst.",
        next: "a4k8_opfer_nein",
        alignEffect: { licht: 2 },
        flagEffect: { opferAntwort: "nein" },
        narrativeFeedback: "Der Wächter hält inne. Sein Licht flackert. Er hatte diese Antwort nicht erwartet — und gerade deshalb wiegt sie mehr.",
      },
      {
        text: "C) Du schweigst und schaust die Gesichter an.",
        desc: "Keine vorschnelle Antwort. Auch das ist eine Form von Wahrheit.",
        next: "a4k8_opfer_schweigen",
        alignEffect: { ordnung: 1, schatten: 1 },
        flagEffect: { opferAntwort: "schweigen" },
        narrativeFeedback: "Du antwortest nicht. Du siehst die Gesichter an, eines nach dem anderen. Der Wächter lässt dich. Das ist bereits eine Antwort.",
      },
    ]
  },

  a4k8_opfer_ja: {
    act: "AKT IV",
    chapter: "Kapitel 28 — Deep.Dive.Two()",
    title: "»Ja.«",
    scene: "Irondeep, Ebene 30",
    bg: "void",
    music: "theme_void_terminal",
    text: `»INTERESSANT«, sagte der Wächter.

»WENN DU ALLES VERLIERST — WEN KÄMPFST DU DANN FÜR?«

Die Frage traf härter als jede Klinge.

Ich hatte keine sofortige Antwort.

Und genau das war die Antwort.

Der Wächter ließ den Durchgang einen Spalt weit aufgleiten.

»EHRLICHKEIT GENÜGT FÜR JETZT. ABER NICHT FÜR IMMER.«`,

    systemBox: {
      title: "VOID-TERMINAL",
      lines: [
        "> Prüfung 3: BEDINGT BESTANDEN",
        "> Status: Ehrlichkeit anerkannt",
        "> Warnung: Antwort unvollständig",
      ]
    },

    choices: [{ text: "→ Rückzug mit Zugang", next: "a4k8_fortschritt", narrativeFeedback: "Ebene 31 ist offen. Aber nicht heute." }]
  },

  a4k8_opfer_nein: {
    act: "AKT IV",
    chapter: "Kapitel 28 — Deep.Dive.Two()",
    title: "»Nein.«",
    scene: "Irondeep, Ebene 30",
    bg: "void",
    music: "theme_void_terminal",
    text: `»Nein«, sagte ich.

Der Wächter schwieg.

Also erklärte ich:
»Ich kämpfe nicht TROTZ der Menschen, die ich liebe. Ich kämpfe WEGEN ihnen. Wenn ich alles verliere, ist das kein edles Opfer. Dann habe ich versagt. Ich bin nicht hier, um allein als Held übrig zu bleiben. Ich bin hier, damit sie alle eine Welt haben, in der sie leben dürfen.«

Der Wächter sah mich an.

Sehr lange.

Dann öffnete sich der Durchgang vollständig.

»DAS WAR DIE RICHTIGE ANTWORT.«`,

    systemBox: {
      title: "VOID-TERMINAL",
      lines: [
        "> Prüfung 3: BESTANDEN ✓",
        "> Tertius-Zugang: FREIGESCHALTET",
      ]
    },

    flagEffect: { opferRichtigeAntwort: true },
    choices: [{ text: "→ Rückzug mit Zugang", next: "a4k8_fortschritt", narrativeFeedback: "Ebene 31 ist offen. Aber nicht heute." }]
  },

  a4k8_opfer_schweigen: {
    act: "AKT IV",
    chapter: "Kapitel 28 — Deep.Dive.Two()",
    title: "Schweigen",
    scene: "Irondeep, Ebene 30",
    bg: "void",
    music: "theme_void_terminal",
    text: `Ich antwortete nicht.
Noch nicht.

Ich sah Elenas Hände. Rolands Schultern. Mira als Kind und fast junge Frau zugleich. Gregor, obwohl er nicht da war, in jeder Entscheidung, die ich traf. Yuki, die weniger Zeit hatte, als sie wusste. Rex. Ren. Alle.

»DU ANTWORTEST NICHT«, sagte der Wächter.
»Ich denke nach.«
»DENKEN IST KEINE ANTWORT.«
»Noch nicht.«

Eine lange Stille.

Dann öffnete sich der Durchgang schmal.

»JEMAND, DER NICHT SCHNELL ANTWORTET, WENN ES WEHTUT, IST WENIGSTENS EHRLICH.«`,

    systemBox: {
      title: "VOID-TERMINAL",
      lines: [
        "> Prüfung 3: AKZEPTIERT",
        "> Status: Offene Frage",
        "> Tertius-Zugang: BEDINGT FREIGESCHALTET",
      ]
    },

    choices: [{ text: "→ Rückzug mit Zugang", next: "a4k8_fortschritt", narrativeFeedback: "Ebene 31 ist offen. Aber nicht heute." }]
  },

  a4k8_fortschritt: {
    act: "AKT IV",
    chapter: "Kapitel 28 — Deep.Dive.Two()",
    title: "Ebene 31 ist offen",
    scene: "Irondeep, Rückweg",
    bg: "void",
    music: "theme_void_terminal",
    text: `Hinter dem Wächter führte eine Treppe tiefer.

Ebene 31.
32.
33.

Tertius war jetzt erreichbar.

Aber nicht heute.

Der Körper brauchte Ruhe. Der Turm brauchte Struktur. Die Welt da oben bewegte sich weiter, ob ich bereit war oder nicht.

Ich kehrte um.

Nicht aus Angst.
Aus Priorisierung.`,

    systemBox: {
      title: "VOID-TERMINAL — FORTSCHRITT",
      lines: [
        "> Irondeep-Fortschritt: Ebene 30/37",
        "> Zugang zu Ebene 31+: FREIGESCHALTET",
        "> Tertius (Ebene 33): ERREICHBAR",
        ">",
        "> Zeit bis System-Update: 2 Jahre, 2 Monate",
      ]
    },

    choices: [{ text: "→ Kapitel 29: Die Puristen", next: "a4k9_puristen", narrativeFeedback: "Kross sucht. Nicht mit Glauben — mit Logik." }]
  },

  // ════ KAPITEL 29: DIE PURISTEN ══════════════════════════════════════════

  a4k9_puristen: {
    act: "AKT IV",
    chapter: "Kapitel 29 — Alert.Purge()",
    title: "Die Puristen schlagen zu",
    scene: "Verbotener Turm — Alter: 16 Jahre",
    conditionalFlag: "marcusStatus",
    textConditional: {
      doppelspion: `Marcus' Warnung kam zwölf Stunden vorher. Nicht genug Zeit, um entspannt zu sein. Genug Zeit, um vorbereitet zu sein.`,
      warnung: `Ein knapper Hinweis erreichte Veyra über drei tote Briefkästen und ein kaputtes Siegel. Nicht zuverlässig. Aber bedrohlich.`,
      unsicher: `Keine Warnung. Nur Rex' Schrei vom Dach.`,
      default: `Keine Warnung. Nur Rex' Schrei vom Dach.`,
    },
    bg: "chaos",
    music: "theme_training",
    text: `Es war ein Dienstagmorgen.

Gorrick briet Eier.
Veyra sortierte Berichte.
Aria war noch nicht im Turm, aber ihre Kräuter hingen bereits in Bündeln an den Balken.
Ren stand an der Wand und tat das, was Ren tat: still existieren.
Rex lag auf dem Dach und sonnte sich wie etwas, das noch nicht entschieden hatte, ob es ein König oder ein Haustier sein wollte.

Dann kam der Schrei.

»FEINDE! VIELE! MENSCHEN IN SCHWARZER RÜSTUNG!«

Ich rannte ans Fenster.`,

    systemBox: {
      title: "VOID-TERMINAL — ALARM",
      lines: [
        "> 15 Entitäten",
        "> Levelbereich: 35–65",
        "> Anführer: Leutnant Graves — Level 72",
        ">",
        "> Einheit: DIE PURISTEN",
        "> Unterstellt: General Kross",
        ">",
        "> Problem:",
        "> Keine System-Scans.",
        "> Physische Aether-Messgeräte.",
        ">",
        "> Fazit:",
        "> Kross sucht mit SOLDATENLOGIK, nicht mit Glauben.",
      ]
    },

    text2: `Plan Gamma lief an.

Gorrick versiegelte die Schmiede.
Veyra zog eine Illusion über den Turm.
Ren bereitete den Rückzugsweg vor.

Dann hob Graves sein Messgerät.
Das Ding summte.
Und zeigte direkt auf uns.

»Hier«, sagte Graves kalt. »Die Anomalie sitzt HIER.«

Der erste Schlag seines Systemschwerts zerriss Veyras Illusionshaut.
Der Turm stand offen im Morgenlicht.

Rex vom Dach:
»Rex kann sie BRATEN.«`,

    timedDecision: true,
    timedSeconds: 8,
    timedDefault: 1,

    choices: [
      {
        text: "A) »Rex — halte sie auf. Nicht töten. Abschrecken.«",
        desc: "[SC] Rex zeigt sich offen. Das rettet alle sofort, aber Kross erfährt vom Drachen.",
        next: "a4k9_nachwirkungen",
        affinityEffect: { rex: 10 },
        alignEffect: { licht: 1, verborgenheit: -4 },
        flagEffect: { puristenKampf: "rex", turmStatus: "kompromittiert", krossWeissVonRex: true },
        narrativeFeedback: "Rex wächst auf volle Größe. Natürliches Drachenfeuer trifft die Puristen wie ein Urteil. Graves überlebt — und merkt sich alles.",
      },
      {
        text: "B) »Alle raus. Den Turm sprengen.«",
        desc: "[SC] Ihr verliert den Ort, nicht die Menschen.",
        next: "a4k9_nachwirkungen",
        alignEffect: { chaos: 3, licht: 1 },
        flagEffect: { puristenKampf: "flucht", turmStatus: "zerstoert" },
        narrativeFeedback: "Der Turm implodiert lautlos in sich selbst. Als der Staub sich legt, steht nur noch ein Krater. Niemand von euch ist darin.",
      },
      {
        text: "C) »Ich halte Graves auf. Alle anderen verschwinden.«",
        desc: "[SC] Null gegen einen Level-72-Schwertmeister. Kein fairer Kampf. Genau deshalb deiner.",
        next: "a4k9_nachwirkungen",
        alignEffect: { schatten: 2, chaos: 1 },
        flagEffect: { puristenKampf: "solo", turmStatus: "sicher" },
        narrativeFeedback: "Du trittst aus dem Turm. Kein Status. Kein Licht. Nur ein Dolch, den das System nicht lesen kann. Graves lächelt nicht einmal. Das macht es ernster.",
      },
      {
        text: "D) »Veyra. Keine Unsichtbarkeit. Mach aus uns etwas, das niemand für bedrohlich hält.«",
        desc: "[SC] Der Turm wird als harmlose Ruine fehlgelesen. Hoher Anspruch an Veyras Kontrolle.",
        next: "a4k9_nachwirkungen",
        affinityEffect: { veyra: 15 },
        alignEffect: { ordnung: 2, verborgenheit: 1 },
        flagEffect: { puristenKampf: "tarnung", turmStatus: "riskiert" },
        narrativeFeedback: "Veyra atmet ein. Dann verändert sich der Turm. Nicht unsichtbar — alt, stumpf, verlassen. Harmlos. Für einen Moment glaubt Graves seinem eigenen Auge weniger als seinem Gerät.",
      },
    ]
  },

  a4k9_nachwirkungen: {
    act: "AKT IV",
    chapter: "Kapitel 29 — Nachwirkungen",
    title: "Wir reichen nicht mehr als sechs",
    scene: "Verbotener Turm oder Ersatzlager",
    conditionalFlag: "turmStatus",
    textConditional: {
      zerstoert: `Gorrick stand vor dem Krater und schwieg lange. Dann sagte er nur: »Wir bauen einen neuen. Diesmal hässlicher. Dann fällt er weniger auf.«`,
      sicher: `Mein linker Arm funktionierte drei Tage nicht richtig. Gorrick sagte nichts. Er verstand auch ohne Worte, was dieser Kampf gekostet hatte.`,
      riskiert: `Graves glaubte der Illusion nicht ganz. Das war schlimmer als ein Narr, der alles glaubt. Skeptische Männer kommen wieder.`,
      default: `Wir hatten überlebt. Das reichte nicht als Sieg.`,
    },
    bg: "night",
    music: "theme_void_terminal",
    text: `Die Puristen hatten uns nicht durch das System gefunden.
Sie hatten uns durch DENKEN gefunden.

Das war der eigentliche Fehler.

Ich hatte zu lange darauf gesetzt, dass Unsichtbarkeit im System gleich Unsichtbarkeit in der Realität bedeutete. Aber Kross war kein Fanatiker. Er war ein Soldat. Er suchte mit Karten, Wegen, Logistik, Aether-Rückständen und gesundem Misstrauen.

»Wir brauchen mehr als ein Hauptquartier«, sagte ich in die Stille.
»Wir brauchen ein NETZWERK.«

Veyra nickte zuerst.
»Variablen«, sagte sie. »Leute, die für uns arbeiten, ohne zum Kern zu gehören.«

Gorrick ergänzte:
»Konstanten. Werkstätten. Stützpunkte. Leute, die helfen, ohne unseren Namen zu tragen.«

Ren sah an die Wand, als würde er dahinter schon neue Linien erkennen.
»Verteilt. Nicht zentral. Weniger effizient. Schwerer zu löschen.«

Rex hob den Kopf.
»Mehr Leute für Rex?«

»Mehr Leute, die das System vergessen hat«, sagte ich.
»Und diesmal vergessen WIR sie nicht.«`,

    choices: [{ text: "→ Kapitel 30: Vor der Brücke", next: "a4k9_finn_vorbruecke", narrativeFeedback: "Finn wartet. Er ist gewachsen. Das Holzschwert ist weg." }]
  },

  a4k9_finn_vorbruecke: {
    act: "AKT IV",
    chapter: "Kapitel 30 — Return.Hero()",
    title: "Vor der Brücke",
    scene: "Waldpfad am Eisfluss — Nacht, Alter: 16 Jahre",
    bg: "night",
    music: "theme_family",
    conditionalFlag: "finnImKampf",
    textConditional: {
      geblieben: `Finn wartete im Schatten der Fichten, als hätte er genau gewusst, wann ich kommen würde. Damals in Millheim war er geblieben, obwohl seine Hände zitterten. Heute zitterte nichts an ihm.`,
      gegangen: `Finn wartete bereits am Waldrand. Als ich ihn sah, erinnerte ich mich daran, wie schnell er damals gegangen war, weil ich es verlangt hatte. Nicht aus Feigheit. Aus Vertrauen.`,
      echtes_schwert: `Finn lehnte an einem Baum und trug noch immer ein echtes Schwert. Nicht dasselbe wie damals — aber er hielt es mit derselben Ernsthaftigkeit, die in Millheim aus einem Spiel etwas Reales gemacht hatte.`,
      default: `Finn wartete am Waldrand. Breitere Schultern, ruhigere Augen, immer noch zu viel Herz für diese Welt.`,
    },
    text: `Er stieß sich vom Baum ab, als ich näherkam.

»Du bist spät«, sagte Finn.

»Ich hatte einen Drachen einzusammeln.«

Finn nickte sofort. »Klar. Das klingt nach dir.«

Für einen Moment standen wir einfach da und sahen uns an. Kein Pathos. Keine große Umarmung. Nur die stille, fast unbeholfene Erkenntnis, dass zwischen Millheim und hier genug passiert war, um zwei Kinder in Menschen zu verwandeln, die gelernt hatten, Verluste mitzuschleppen, ohne daran sofort zu zerbrechen.

»Akira und die anderen sind schon da«, sagte Finn. »Ich wollte vorher mit dir reden.«

Er sah zur Brücke hinüber. Dann wieder mich an.

»Damals in Millheim...«`,

    conditionalFlag2: "finnImKampf",
    textConditional2: {
      geblieben: `»...hatte ich Angst. Ich hab gezittert wie sonst was. Aber ich bin geblieben. Lange dachte ich, das reicht vielleicht nicht. Heute glaube ich: vielleicht war genau das Mut.«`,
      gegangen: `»...hab ich gehasst, dass du mich weggeschickt hast. Wirklich. Ich dachte, du traust mir nicht. Erst später hab ich verstanden, dass Vertrauen manchmal bedeutet, zu gehen, wenn man lieber bleiben würde.«`,
      echtes_schwert: `»...hat Roland mir gezeigt, wie man ein echtes Schwert trägt, ohne dass es einen auffrisst. Nicht die Klinge. Die Verantwortung.«`,
      default: `»...war ich ein Kind. Jetzt nicht mehr ganz.«`,
    },
    text2: `Ich sah ihn lange an.

Finn war nie kompliziert gewesen. Das war seine größte Stärke. Er fühlte Dinge direkt, litt direkt, liebte direkt. Und in einer Welt voller Masken war das fast schon eine Form von Widerstand.

Hinter uns raschelte es im Unterholz. Rex hob den Kopf auf meiner Schulter, musterte Finn und schnaubte warmen Dampf in die kalte Luft.

»Rex mag diesen Menschen«, erklärte er.

Finn blinzelte nur einmal.
»Okay«, sagte er dann. »Das ist komisch. Aber auf die gute Art.«`,

    choices: [
      {
        text: "A) »Du warst mutig, Finn. Damals. Und jetzt auch.«",
        desc: "[AF+Finn] Direkte Anerkennung. Finn trägt das lange mit sich.",
        next: "a4k10_wiedersehen",
        affinityEffect: { finn: 20 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn schaut kurz weg, als wäre der Wald plötzlich ungeheuer interessant. »...Ja. Gut. Sag sowas nicht so direkt, okay?«",
      },
      {
        text: "B) »Wir waren beide Kinder. Wir haben überlebt. Das zählt.«",
        desc: "[AF+Finn] Nüchterner, erwachsener Bond.",
        next: "a4k10_wiedersehen",
        affinityEffect: { finn: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Finn nickt langsam. »Ja. Das zählt.« Zwei Worte. Schwerer als sie klingen.",
      },
      {
        text: "C) »Heute bleibst du nicht hinter mir. Heute gehst du neben mir.«",
        desc: "[AF+Finn MAX] Stärkster Callback auf Millheim.",
        next: "a4k10_wiedersehen",
        affinityEffect: { finn: 25 },
        alignEffect: { licht: 2 },
        flagEffect: { finnNebenNull: true },
        narrativeFeedback: "Finns Gesicht verändert sich sichtbar — überrascht, fast erschüttert, dann stolz. »...Okay«, sagt er leise. »Neben dir.«",
      },
    ]
  },

  // ════ KAPITEL 30: WIEDERSEHEN ═══════════════════════════════════════════

  a4k10_wiedersehen: {
    act: "AKT IV",
    chapter: "Kapitel 30 — Return.Hero()",
    title: "Die alte Brücke",
    scene: "Brücke über den Eisfluss — Vollmond, Alter: 16 Jahre",
    conditionalFlag: "yukiToken",
    textConditional: {
      hase: `Der kleine Stoffhase hing noch an meinem Gürtel. Abgewetzt, zweimal genäht, nie abgelegt.`,
      stein: `Dmitris halber Stein lag schwer in meiner Tasche. Manche Versprechen haben physikalische Masse.`,
      default: ``,
    },
    bg: "night",
    music: "theme_family",
    text: `Akiras Brief hatte mich über Veyras Netz erreicht.

Emma hatte offizielle Berichte zerlegt und bewiesen, dass die Kirche Dämonenangriffe erfand.
Dmitri hatte Monate an der Grenze verbracht und keinen einzigen echten Vorstoß gesehen.
Und Yuki wurde schwächer.

Nicht plötzlich.
Schleichend.
So, wie Wahrheiten töten, bevor sie ausgesprochen werden.

Vollmond.
Alte Brücke.
Kalter Wind.

Auf der anderen Seite standen vier Gestalten.

Ein Jahr war vergangen seit der Nacht auf dem Dach.
Es fühlte sich an wie drei.`,

    conditionalFlag2: "heldenparteiStatus",
    textConditional2: {
      offen: `Akira musterte die kleine Gruppe hinter mir — Finn, Rex, Schatten, alles was aus meinem Verschwinden gewachsen war — und grinste schief. »Du hast wirklich weitergemacht.«`,
      schatten: `Akira schnaubte leise. »Der mysteriöse fünfte Mann hat sich also nicht versteckt. Nur gearbeitet.«`,
      default: `Akira sah mich an, als wäre die Zeit zwischen damals und jetzt weniger wichtig als die Tatsache, dass ich wirklich gekommen war.`,
    },

    text2: `Akira war größer, härter, heller. Sein Schwert strahlte fast von selbst.
Emma trug jetzt eine Brille, als hätte ihr Gehirn beschlossen, dass ihre Augen gefälligst Schritt halten sollten.
Dmitri war ein Berg.
Und Yuki...

Yuki war dünner.
Blasser.
Ihre Hände zitterten leicht. Nur leicht. Gerade genug, um schlimmer zu sein.

Sie sah mich an.
Nicht Null.
Nicht das Phantom.
Mich.

»Du bist da«, sagte sie.

»Ich bin da.«

»Du hast versprochen—«

»Ich weiß. Und ich habe keine perfekte Lösung. Aber eine echte.«

Akira trat vor.
»Null. Oder Kaito. Wie auch immer du heute heißen willst. Wir müssen reden.«

Dmitri hob wortlos seine Steinhälfte.
Ich zog meine hervor.
Er lächelte. Selten. Echt.

Emma hielt schon ein Notizbuch bereit.
Natürlich.`,

    text3: `Ich erzählte ihnen alles.

Die Nullen.
Ren.
Rex.
Gorrick.
Veyra.
Aria.
Lilithia.
Die Zeile Code, die ein ganzes Volk gebrandmarkt hatte.
Irondeep.
Tertius auf Ebene 33.
Und das Update.

Noch zwei Jahre.

Yuki stand auf, obwohl ihre Knie kurz nachgeben wollten.

»Dann haben wir zwei Jahre«, sagte sie. »Nicht irgendwann. Nicht später. Zwei.«

Ihre Stimme zitterte.
Nicht vor Angst.
Vor Wut.

»Ich sterbe nicht für eine Lüge.«

Akira legte das Schwert auf die Schulter.
»Gut«, sagte er. »Dann brechen wir die Regeln, bevor sie uns brechen.«

Emma schloss das Notizbuch.
»Endlich sprechen alle dieselbe Sprache.«

Dmitri sah erst mich an, dann die anderen.
»Sag, was gebraucht wird.«

Und Yuki nickte.
Klein.
Still.
Ungebrochen.`,

    systemBox: {
      title: "VOID-TERMINAL — ENDE AKT IV",
      lines: [
        "> ALTER: 16 Jahre",
        "> ZEIT BIS SYSTEM-UPDATE: 2 Jahre",
        ">",
        "> NULLEN — KERNMITGLIEDER:",
        "> Ren, Rex, Gorrick, Veyra, Kaito",
        "> + Aria (Verbündete)",
        "> + Lilithia (Allianz)",
        ">",
        "> HELDEN-ALLIANZ: AKTIV",
        "> Akira, Emma, Dmitri, Yuki",
        ">",
        "> Nächster Schritt:",
        "> Ebene 33. Tertius.",
        ">",
        "> Krieg mit dem System",
        "> ist nicht mehr Theorie.",
      ]
    },

    choices: [{ text: "→ AKT V: Overflow", next: "a5k1_intro", narrativeFeedback: "Zwei Jahre. Der Countdown läuft." }],
    affinityEffect: { akira: 15, yuki: 20, emma: 10, dmitri: 10 },
  },

};