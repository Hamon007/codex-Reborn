// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT III: RUNTIME
// Kapitel 12–20: Jugend-Phase, Alter 10–15
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] = STORY-CRITICAL → verändert Kapitel/Plot-Verlauf
// [AF] = AFFINITY → verändert Beziehungswerte 0-100
// [AL] = ALIGNMENT → verschiebt Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_III = {

  // ════ ZEITSPRUNG: DREI JAHRE IN KREUZWEG ════════════════════════════════

  a3k0_zeitsprung: {
    act: "AKT III",
    chapter: "Zeitsprung — Drei Jahre in Kreuzweg",
    title: "Die verlorenen Jahre",
    scene: "Kreuzweg, Valtheris — Alter: 7–10 Jahre",
    bg: "city",
    music: "theme_family",
    text: `Kreuzweg war die erste Station nach Millheim.

Dreißig Menschen, drei Karren, ein mürrischer Esel namens Herr Grummel. Roland fand Arbeit als Wachmann. Elena heilte Marktkunden für Kupfer und Dankbarkeit. Mira wurde größer, lauter und gefährlicher für jede Inneneinrichtung im Umkreis von zehn Metern.

Finn trainierte täglich mit Roland. Sera zog sich oft zurück und trainierte allein im Wald. Wenn ich sie abends auf einem Dach oder am Rand des Viertels fand, sagten wir manchmal stundenlang nichts — und das Schweigen war nicht leer.

Aldwins Kontaktin hieß Frau Voss — eine alte Alchemistin mit einem Keller voller verbotener Bücher und der festen Überzeugung, dass jeder Mensch unter sechzig Jahren prinzipiell zu laut sei. Sie ließ mich lesen. Alles.

In drei Jahren las ich jedes Buch, das sie besaß. Dann fing ich an, eigene zu schreiben:
»Reverse-Engineering des Genesis-Systems.«
Version 0.1.

Nebenbei arbeitete ich anonym für die Abenteurer-Gilde. Dungeon-Analysen. Monsterverhalten. Kartenkorrekturen. Niemand wusste, wer die »Quellenlose Analyse« schrieb.

Ich war acht Jahre alt.`,

    systemBox: {
      title: "VOID-TERMINAL — STATUS (ALTER 10)",
      lines: [
        "> [Code.Read] — Fortgeschritten",
        "> [Code.Analyze] — Fortgeschritten",
        "> [Code.Spoof] — Stabil (Rang B-)",
        "> [Aether.Resonance] — Kontrolle verbessert",
        ">",
        "> Handbuch:",
        "> »Reverse-Engineering des Genesis-Systems« v0.3",
        ">",
        "> Nächstes Ziel:",
        "> Kaiserliche Akademie für Helden",
        "> Aetheria Prime",
        ">",
        "> Aldwin: »In den Bauch der Bestie.«",
      ]
    },

    text2: `Dann, an einem Dienstag im dritten Jahr: ein Brief. Versiegelt mit dem kaiserlichen Wappen. Adressiert an »Kaito Ashford, potenzieller Student«.

Die Kaiserliche Akademie akzeptierte meine Bewerbung.

Elena weinte.
Roland nickte.
Mira schrie: »ICH AUCH!«
Und Aldwin erschien aus dem Nichts, wie er es immer tat, wenn Informationen dramatischer wirkten, wenn sie aus der Luft fielen.

»Ich habe dafür gesorgt, dass die richtigen Leute deine Analysen gelesen haben«, sagte er.
Elena sah ihn an. »Das ist nicht gefährlich?«
Aldwin hob eine Augenbraue. »Alles ist gefährlich. Die Frage ist: Wo lernt er am meisten?«

Ich schwieg einen Moment.
Dann:
»Im Herzen des Systems.«`,

    choices: [
      {
        text: "A) Über die Akademie — mit dem Empfehlungsbrief, dem offiziellen Weg.",
        next: "a3k0_weg_akademie",
        affinityEffect: { aldwin: 5 },
        alignEffect: { ordnung: 2 },
        flagEffect: { zugangsWeg: "akademie" },
        narrativeFeedback: "Aldwins Netzwerk sorgt für genau genug Legitimität, um auffällig kompetent, aber nicht verdächtig göttlich zu wirken.",
      },
      {
        text: "B) Über das Elfennetz — Meridia kennt einen anderen Eingang.",
        next: "a3k0_weg_elfen",
        affinityEffect: { aldwin: 10 },
        alignEffect: { licht: 1 },
        flagEffect: { zugangsWeg: "elfen" },
        narrativeFeedback: "Aldwin erwähnt Meridia mit dem Tonfall eines Mannes, der seit zweihundert Jahren weiß, dass manche Türen nur für die Richtigen offen stehen.",
      },
      {
        text: "C) Auf eigene Faust — kein Netzwerk. Nur du und dein Terminal.",
        next: "a3k0_weg_solo",
        alignEffect: { schatten: 3, verborgenheit: 1 },
        flagEffect: { zugangsWeg: "solo" },
        narrativeFeedback: "Frau Voss sagt dazu nur: »Gut. Wenn du scheiterst, war es wenigstens interessant.«",
      },
    ]
  },

  a3k0_weg_akademie: {
    act: "AKT III",
    chapter: "Drei Jahre — Kreuzweg",
    title: "Der offizielle Weg",
    scene: "Kreuzweg — Rückblick",
    bg: "city",
    music: "theme_family",
    text: `Frau Voss arrangierte die Empfehlung mit der gereizten Effizienz einer Frau, die längst akzeptiert hatte, dass sie ständig geniale Probleme für unangenehm talentierte Jugendliche lösen musste.

Der Empfehlungsbrief war echt genug, um jede Prüfung zu bestehen, und anonym genug, um keine nützliche Spur zurückzulassen.

Als die Bestätigung kam, war ich zehn Jahre alt und konnte einen Rang-B-Scanner in 0,3 Sekunden täuschen.

Das reichte.`,

    choices: [{ text: "→ Aetheria Prime", next: "a3k1_ankunft_akademie", narrativeFeedback: "Die Akademie. Das Herz des Systems. Du gehst hinein." }]
  },

  a3k0_weg_elfen: {
    act: "AKT III",
    chapter: "Drei Jahre — Kreuzweg",
    title: "Das Elfennetz",
    scene: "Kreuzweg — Rückblick",
    bg: "city",
    music: "theme_elena_song",
    text: `Meridia.

Der Name tauchte in Aldwins Unterlagen auf wie etwas, das schon die ganze Zeit gewusst hatte, dass ich kommen würde.

Über elfische Kontakte wurde mein Lebenslauf aufgebaut. Nicht gefälscht — kuratiert. Prüfbare Leistungen. Kein Adel. Kein Wunderkind-Alarm. Nur ein auffallend präziser, auffallend stiller Stipendiat mit hoher intellektueller Eignung.

Als die Einladung kam, war ich zehn Jahre alt.
Offiziell unauffällig.
Inoffiziell längst gefährlicher als die meisten Erwachsenen, die sie an dieser Akademie unterrichteten.`,

    choices: [{ text: "→ Aetheria Prime", next: "a3k1_ankunft_akademie", narrativeFeedback: "Die Akademie. Das Herz des Systems. Du gehst hinein." }],
    affinityEffect: { meridia: 10 }
  },

  a3k0_weg_solo: {
    act: "AKT III",
    chapter: "Drei Jahre — Kreuzweg",
    title: "Auf eigene Faust",
    scene: "Kreuzweg — Rückblick",
    bg: "void",
    music: "theme_void_terminal",
    text: `Kein Empfehlungsbrief. Kein Netzwerk.

Nur ich, das Terminal und drei Jahre Zeit.

Ich absolvierte den Aufnahmeprozess anonym, manipulierte die Bewertungslogik an genau den richtigen Stellen und ließ ein Prüfprofil entstehen, das gut genug war, um nicht ignoriert werden zu können, aber harmlos genug, um keinen Inquisitor neugierig zu machen.

Ich ließ mich einladen, weil ich zu gut war, um abgelehnt zu werden.

Das war eleganter als Betteln.
Und gefährlicher.`,

    choices: [{ text: "→ Aetheria Prime", next: "a3k1_ankunft_akademie", narrativeFeedback: "Die Akademie. Das Herz des Systems. Du gehst hinein." }]
  },

  // ════ KAPITEL 12: LOGIN.ACADEMY() ═══════════════════════════════════════

  a3k1_ankunft_akademie: {
    act: "AKT III",
    chapter: "Kapitel 12 — Login.Academy()",
    title: "Die Tore von Aetheria",
    scene: "Haupteingang der Kaiserlichen Akademie — Alter: 10 Jahre",
    bg: "city",
    music: "theme_academy",
    text: `Die Mauern der Akademie waren nicht einfach aus Stein. Sie waren aus verfestigtem System-Willen gebaut. Goldene Linien liefen durch die Architektur wie Nervenbahnen. Über allem lag das Aegis-Protokoll der Kirche — ein Schirm aus Überwachung, Autorität und ritualisierter Ordnung.

Ich stand in einer Schlange aus hunderten Kindern.
Adlige in Seide.
Bürgerliche in Leinen.
Ein paar Bettlerkinder, deren Gesichter aussahen, als hätten sie sich ihren Platz hier aus den Zähnen eines Monsters herausgeschnitten.

Allein.

Finn und Sera waren in Kreuzweg. Zu ihrer eigenen Sicherheit. Das hier war mein Schlachtfeld.

Vor uns stand ein Prüfstein. Wer ihn berührte, dessen Status wurde auf einen Projektionsschirm übertragen.`,

    systemBox: {
      title: "VOID-TERMINAL — STATUS-FÄLSCHUNG",
      lines: [
        "> Ziel: Harmlose Begabung vortäuschen",
        "> Gefahr: Zu hoch = Genie-Überwachung",
        "> Gefahr: Zu niedrig = Ablehnung",
        ">",
        "> Wähle dein vorgetäuschtes Profil:",
      ]
    },

    text2: `Wenn ich den Stein berührte, würde das System versuchen, meine [NULL]-Existenz zu lesen. Wenn es daran scheiterte, löste es Alarm aus.
Wenn es zu tief las, starb meine Tarnung hier und jetzt.

Ich musste [Code.Spoof] nutzen, um dem Prüfstein im richtigen Moment eine Antwort zu geben, die gut genug war, um geglaubt zu werden.`,

    choices: [
      {
        text: "A) [PROFIL: KRIEGSTALENT] — Stärke 35, Magie 12",
        desc: "Fokus auf Kampfklassen. Solider Frontkämpfer, nicht brillant genug für Sonderaufsicht.",
        next: "a3k1_leon",
        flagEffect: { akademiePfad: "krieger", auffaelligkeit: 15 },
        narrativeFeedback: "Der Prüfstein leuchtet rot auf. Der Beamte nickt. »Ein brauchbarer Nahkämpfer. Weiter.«",
      },
      {
        text: "B) [PROFIL: MAGIE-THEORETIKER] — Stärke 08, Magie 42",
        desc: "Fokus auf Forschung und Theorie. Nützlicher Zugang zur Bibliothek, aber mehr Blicke.",
        next: "a3k1_leon",
        flagEffect: { akademiePfad: "magier", auffaelligkeit: 25 },
        narrativeFeedback: "Ein paar Magister heben die Köpfe. »Interessant«, murmelt jemand. Nicht ideal. Aber handhabbar.",
      },
      {
        text: "C) [PROFIL: DER DURCHSCHNITT] — Alle Werte auf 15, Level 4",
        desc: "Die eleganteste Tarnung. Niemand beobachtet den Durchschnitt.",
        next: "a3k1_leon",
        flagEffect: { akademiePfad: "stealth", auffaelligkeit: 0 },
        alignEffect: { verborgenheit: 2 },
        narrativeFeedback: "Der Beamte gähnt. »Standard. Geh weiter.« Perfekt.",
      },
    ]
  },

  a3k1_leon: {
    act: "AKT III",
    chapter: "Kapitel 12 — Login.Academy()",
    title: "Leon von Adlerstein",
    scene: "Innenhof der Akademie",
    bg: "city",
    music: "theme_mystery",
    text: `Kaum im Innenhof angekommen, stellte sich mir jemand in den Weg.

Platinblondes Haar. Goldene Uniform. Das selbstverständliche Grinsen von jemandem, der nie gelernt hatte, dass Räume nicht automatisch ihm gehörten.

Leon von Adlerstein.
Level 12.
Wahrscheinlich gekauft.

»Ashford? Nie gehört. Welches Haus?«
»Kein Haus. Dorf. Millheim.«
»Ein BAUER? An der Akademie? Was kommt als nächstes — Schweine in der Bibliothek?«

Er musterte mich von oben bis unten.
»Wie bist du überhaupt REINGEKOMMEN?«`,

    choices: [
      {
        text: "A) »Durch die Tür, wie alle anderen.«",
        desc: "[AL+Ordnung] Unauffällig. Leon verliert das Interesse.",
        next: "a3k1_meridia",
        alignEffect: { ordnung: 1, verborgenheit: 1 },
        flagEffect: { leonBeziehung: "ignoriert" },
        narrativeFeedback: "Leon schnaubt, als sei die Langeweile deiner Antwort eine persönliche Beleidigung. Dann zieht er weiter. Gut.",
      },
      {
        text: "B) »Level ist nur eine Zahl. Wie dein IQ — niedrig und überschätzt.«",
        desc: "[AL+Chaos] Leon wird Feind. Die halbe Hofseite hört zu.",
        next: "a3k1_meridia",
        alignEffect: { chaos: 3, verborgenheit: -2 },
        flagEffect: { leonBeziehung: "antagonist" },
        narrativeFeedback: "Jemand lacht. Leon wird rot. Das war dumm. Es war auch befriedigend.",
      },
      {
        text: "C) [Code.Read] — »Dein Schwertskill ist nur LV 2. Für Level 12 ist das peinlich.«",
        desc: "[AL+Schatten] Erschreckt Leon nachhaltig. Sehr schlecht für Tarnung.",
        next: "a3k1_meridia",
        alignEffect: { schatten: 1, verborgenheit: -4 },
        flagEffect: { leonBeziehung: "rivalitaet" },
        narrativeFeedback: "Leon wird weiß. »Woher—« Du gehst einfach an ihm vorbei. Hinter dir beginnt sofort das Flüstern.",
      },
    ]
  },

  a3k1_meridia: {
    act: "AKT III",
    chapter: "Kapitel 12 — Login.Academy()",
    title: "Professor Meridia",
    scene: "Meridias Büro, Akademie",
    bg: "city",
    music: "theme_gregor",

    conditionalFlag: "zugangsWeg",
    textConditional: {
      akademie: `Als Meridia mich ansah, war da kein echtes Erstaunen. Nur Bestätigung. Also hatte Aldwins Empfehlung ihr mehr gesagt, als auf dem Papier stand.`,
      elfen: `Meridias Blick ruhte auf mir wie auf etwas, das sie nicht finden musste, weil sie längst wusste, wo es sein würde.`,
      solo: `Meridias Blick war nicht der einer Verbündeten, die gewarnt worden war. Es war der Blick einer Gelehrten, die etwas Unmögliches selbst entdeckt hatte — und jetzt genauer hinsah.`,
      default: ``,
    },

    text: `Die Professorin betrat den Vorlesungssaal — und der Raum veränderte sich.

Nicht laut.
Nicht dramatisch.
Einfach so, wie Luft sich anders verhält, wenn jemand eintritt, der seit vier Jahrhunderten nicht mehr auf Menschen Eindruck machen muss.

Professor Meridia.
Hochelfe.
423 Jahre alt.

Mitten in der Vorlesung sah sie plötzlich direkt zu mir.

»Du«, sagte sie.
»Der Junge in der dritten Reihe.
Du hast mich gerade gescannt.«`,

    systemBox: {
      title: "VOID-TERMINAL — WARNUNG",
      lines: [
        "> Scan bemerkt",
        "> Ziel: Professor Meridia",
        "> Level: 74",
        "> Klasse: Erzmagierin (Rang A)",
        ">",
        "> Empfehlung:",
        "> Nicht lügen. Nicht panisch werden.",
      ]
    },

    conditionalFlag2: "zugangsWeg",
    textConditional2: {
      akademie: `»Aldwin hat mich vor Jahren gebeten, auf einen Jungen zu achten, der nicht in das Raster passt«, sagte sie. »Ich hatte nicht erwartet, dass du so jung bist.«`,
      elfen: `»Aldwin schrieb mir von dir«, sagte sie. »Und ich habe deinen Lebenslauf mit aufgebaut. Ich wollte sehen, ob du dem Papier entsprichst.«`,
      solo: `»Niemand hat mich vor dir gewarnt«, sagte sie. »Du hast dich selbst verraten. Nicht durch einen Fehler — durch Präzision. Zu viele richtige Fragen für einen Zehnjährigen.«`,
      default: ``,
    },

    text2: `Nach dem Unterricht saß ich in ihrem Büro.

»Ich werde direkt sein«, sagte Meridia. »Dein Status ist eine Fälschung. Dein wahrer Status ist... leer.«

Ich erstarrte.

Sie hob eine Hand.
»Beruhige dich. Ich werde dich nicht melden. Ich bin alt genug, um zu wissen, dass Raster für Archive nützlich sind. Nicht für Menschen.«

Sie bot mir an:
Zugang zur verbotenen Bibliothek.
Privaten Unterricht.
Schutz innerhalb ihrer Reichweite.

»Was willst du dafür?«, fragte ich.

»Wenn du eines Tages die Wahrheit findest«, sagte sie, »erzähl sie weiter. Nicht mir. ALLEN.«`,

    choices: [
      {
        text: "A) »Abgemacht. Aber ich entscheide, wann und wie.«",
        desc: "[AF+Meridia] Partnerschaft auf Augenhöhe.",
        next: "a3k3_stundenplan",
        affinityEffect: { meridia: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Meridia nickt anerkennend. »Klug. Misstrauen ist bei Institutionen selten ein Fehler.«",
      },
      {
        text: "B) »Danke. Zum ersten Mal seit Millheim fühle ich mich nicht allein.«",
        desc: "[AF+Meridia] Wärmerer Mentor-Bond.",
        next: "a3k3_stundenplan",
        affinityEffect: { meridia: 20 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Etwas in Meridias Blick wird weich. »Du warst es wahrscheinlich nie«, sagt sie leise.",
      },
    ]
  },

  // ════ KAPITEL 13: CLASS.UNDEFINED() ═════════════════════════════════════

  a3k3_stundenplan: {
    act: "AKT III",
    chapter: "Kapitel 13 — Class.Undefined()",
    title: "Der Preis des Wissens",
    scene: "Schlafsaal der Akademie",
    bg: "city",
    music: "theme_void_terminal",
    text: `Die Akademie war ein Hamsterrad mit Marmorsäulen.

Wer gute Leistungen brachte, bekam Aether-Punkte. Wer Aether-Punkte hatte, bekam besseren Zugang. Besseres Essen. Bessere Trainingsräume. Bessere Bücher. Bessere Chancen.

Das System behauptete, Leistung sei neutral.
Wie immer log es mit professioneller Höflichkeit.

Ich musste meine Zeit einteilen. Auffallen durfte ich nur dort, wo es nützlich war.`,

    systemBox: {
      title: "WOCHENPLANUNG — HAUPTFOKUS DER AKADEMIEJAHRE",
      lines: [
        "> 1. Verbotene Bibliothek",
        "> Fokus: Lore & System-Wissen",
        ">",
        "> 2. Training & Arena",
        "> Fokus: Physische Entwicklung",
        ">",
        "> 3. Briefe & Kontakte",
        "> Fokus: Bindungen und Netzwerk",
      ]
    },

    choices: [
      {
        text: "A) Fokus auf WISSEN",
        desc: "Mehr Tiefe im Systemverständnis. Weniger körperliche Präsenz.",
        next: "a3k4_arena_duell",
        wissenEffect: ["systemArchitektur_Stufe1"],
        flagEffect: { akademieFokus: "wissen" },
        narrativeFeedback: "Meridias Bibliothek verschluckt Nächte, Wochen, Jahre. Das System beginnt, sich in deinem Kopf wie eine Maschine statt wie ein Mythos anzufühlen.",
      },
      {
        text: "B) Fokus auf KAMPF",
        desc: "Rolands Lektionen verschmelzen mit Akademietechnik.",
        next: "a3k4_arena_duell",
        skillUnlock: ["combatFlow_LV2"],
        flagEffect: { akademieFokus: "kampf" },
        narrativeFeedback: "Du wirst nie der Lauteste in der Arena. Aber immer öfter der Letzte, der noch steht.",
      },
      {
        text: "C) Fokus auf GEFÄHRTEN",
        desc: "Briefe, Kontakte, Abstand über Distanz hinweg überbrücken.",
        next: "a3k4_arena_duell",
        affinityEffect: { finn: 15, sera: 15, roland: 10, elena: 10, mira: 10 },
        flagEffect: { akademieFokus: "freunde" },
        narrativeFeedback: "Kryptische Briefe werden zu Ankern. Distanz ist nicht dasselbe wie Verlust — wenn man Arbeit hineinsteckt.",
      },
    ]
  },

  a3k4_arena_duell: {
    act: "AKT III",
    chapter: "Kapitel 13 — Class.Undefined()",
    title: "Das Ranking-Duell",
    scene: "Die Akademie-Arena — Alter: 11 Jahre",
    bg: "city",
    music: "theme_battle",
    text: `Ein Jahr an der Akademie. Das erste offizielle Ranking-Duell.

Mein Gegner: Leon von Adlerstein.

Natürlich.

Die Zuschauer wollten System-Magie sehen. Glühende Schwerter. Offizielle Effekte. Saubere Macht.
Ich hatte so etwas nicht.
Was ich hatte, war schlimmer.

Leon stürmte vor. Seine Klinge glühte hellblau — [Mana-Klinge LV 3]. Er grinste schon, bevor er traf.`,

    systemBox: {
      title: "KAMPF-MODUS — TAKTISCHE AUSWAHL",
      lines: [
        "> Wähle zwischen:",
        "> Technik",
        "> oder Manipulation",
      ]
    },

    choices: [
      {
        text: "A) [PHYSISCH] — Parade, Beinarbeit, Timing. Keine Tricks.",
        desc: "Sauberer, unauffälliger Sieg.",
        next: "a3k4_duell_ergebnis",
        flagEffect: { kampfStil: "krieger", auffaelligkeit: 5 },
        narrativeFeedback: "Du weichst aus, leitest um, brichst Rhythmus. Leon verliert sein Schwert an dein Timing, nicht an dein Level.",
      },
      {
        text: "B) [HACK] — Dem Systemschwert ein falsches 'Ziel erreicht' senden.",
        desc: "Sehr effektiv. Sehr verdächtig.",
        next: "a3k4_duell_ergebnis",
        flagEffect: { kampfStil: "hacker", auffaelligkeit: 30 },
        alignEffect: { schatten: 2 },
        narrativeFeedback: "Leons Schwert erlischt mitten im Schlag. Er stolpert, die Arena lacht, und niemand versteht, was gerade passiert ist.",
      },
    ]
  },

  a3k4_duell_ergebnis: {
    act: "AKT III",
    chapter: "Kapitel 13 — Class.Undefined()",
    title: "Nachwirkungen des Duells",
    scene: "Die Akademie-Arena — Nachher",
    bg: "city",
    music: "theme_mystery",
    conditionalFlag: "kampfStil",
    textConditional: {
      krieger: `Leon lag auf dem Boden. Nicht verletzt — nur besiegt. Sein Schwert drei Meter entfernt, seine Würde deutlich weiter weg.

Die Arena war still. Dann begann jemand zu klatschen. Langsam. Dann mehr.

Ich hatte nicht gewonnen, weil ich stärker war.
Ich hatte gewonnen, weil ich ihn gelesen hatte wie Code.

Leon stand auf, ohne sich umzudrehen, und verließ die Arena. Hinter mir hörte ich Gemurmel:
»Wer ist der Kerl?«

Das war die falsche Frage.
Die richtige war: Was noch?`,
      hacker: `Leons Systemschwert erlosch in dem Moment, in dem er zuschlug. Er stolperte ins Leere, prallte auf dem Sandboden auf und blieb liegen — nicht verletzt, nur fassungslos.

Die Arena lachte. Jemand rief: »System-Fehler!«

Ich stand da und tat nichts.
Das war das Beste daran: Ich musste nichts tun.

Drei Lehrer tauschten Blicke aus. Meridia sah mich von der Tribüne aus an — lange, ruhig, ohne Überraschung.

Hinter mir hörte ich Leon flüstern:
»Wie hat er das gemacht?«

Niemand wusste es.
Das war Absicht.`,
      default: `Leon lag auf dem Boden. Besiegt. Die Arena wartete.

Ich trat zurück und gab ihm Raum aufzustehen.

Gewinnen war das Einfachste gewesen.
Unauffällig bleiben würde die eigentliche Arbeit sein.`,
    },
    text: `Leon lag auf dem Boden. Besiegt. Die Arena wartete.

Ich trat zurück und gab ihm Raum aufzustehen.

Gewinnen war das Einfachste gewesen.
Unauffällig bleiben würde die eigentliche Arbeit sein.`,

    choices: [{ text: "→ Vier Jahre später", next: "a3k2_akademiealltag", narrativeFeedback: "Der Kampf ist vorbei. Was er hinterlässt, bleibt." }],
  },

  a3k2_akademiealltag: {
    act: "AKT III",
    chapter: "Kapitel 13 — Class.Undefined()",
    title: "Vier Jahre unter dem System",
    scene: "Akademie — Alter: 10–14 Jahre",
    bg: "city",
    music: "theme_mystery",
    text: `Die Jahre an der Akademie vergingen wie ein sauber getakteter Betrug.

Offiziell war ich ein solider Student.
Inoffiziell las ich verbotene Bücher, zerlegte Systemlogik, schrieb an meinem Handbuch und lernte, wie man zwischen den Regeln lebt, ohne von ihnen gefressen zu werden.

Meridia unterrichtete mich heimlich in wahrer Elementartheorie. Nicht Systemzauber — Grundlagen. Struktur. Bedeutung. Die Welt unter der Benutzeroberfläche.

Und dann, in der verbotenen Bibliothek, fiel alles an seinen Platz.

Vier Entdeckungen veränderten mein Leben.`,

    systemBox: {
      title: "DIE VIER ENTDECKUNGEN",
      lines: [
        "> ENTDECKUNG 1: DAS SYSTEM-UPDATE",
        "> → In 5 Jahren verschärft das System alles",
        "> → Wilde Magie und Anomalien werden gelöscht",
        "> → DEADLINE erkannt",
        ">",
        "> ENTDECKUNG 2: DER HELDEN-TIMER",
        "> → [Mana-Overflow] kostet Lebensspanne",
        "> → 5 Jahre Lebenszeit pro Jahr Aufenthalt",
        ">",
        "> ENTDECKUNG 3: DIE VOID-WALKER-KLASSE",
        "> → Im Code vorhanden, aber GELÖSCHT markiert",
        "> → Reaktivierung theoretisch möglich",
        ">",
        "> ENTDECKUNG 4: SEPTIMAS BRIEF",
        "> → »Sei mehr als eine Anomalie.",
        "> Sei ein Mensch.«",
      ]
    },

    text2: `Ich wusste nun, was auf dem Spiel stand.

Die Kirche nutzte Helden.
Das Summoning war Diebstahl.
Das Update war keine Verbesserung, sondern eine Säuberung.
Und die Menschen, die ich liebte, würden von diesem System nie verschont werden, wenn es so blieb, wie es war.

Briefe von Zuhause hielten mich geerdet.
Roland schrieb kurz, Elena lang, Mira chaotisch.
Finns Briefe klangen, als hätte man ein Schwert zum Schreiben gebracht.
Seras waren selten. Aber wenn sie kamen, war jeder Satz wie ein Nagel: knapp, präzise, dauerhaft.`,

    choices: [{ text: "→ Marcus Hale", next: "a3k2_marcus", narrativeFeedback: "Ein neues Gesicht. Zu freundlich. Zu perfekt dosiert." }],
    wissenEffect: ["systemUpdate", "heldenTimer", "voidWalkerKlasse"]
  },

  a3k2_marcus: {
    act: "AKT III",
    chapter: "Kapitel 13 — Class.Undefined()",
    title: "Marcus Hale",
    scene: "Mensa, Akademie — Alter: 14 Jahre",
    bg: "city",
    music: "theme_mystery",
    text: `Marcus Hale war der Typ Mensch, bei dem man instinktiv misstrauisch sein musste, weil einem die eigenen Instinkte sofort sagten, wie vertrauenswürdig er wirkte.

Braune Augen. Ruhige Stimme. Präzise dosierte Offenheit.

Er setzte sich zu mir, als wäre das die natürlichste Sache der Welt.

»Mein Vater war Schuster«, sagte er. »Meine Schwester ist krank. Das Stipendium ist die einzige Chance, ihre Medizin zu finanzieren.«

Es war plausibel. Menschlich. Perfekt dosiert.

Und Perfektion war fast immer gelogen.`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: MARCUS HALE",
      lines: [
        "> Marcus Hale | Level: 14",
        "> Alter: 14",
        ">",
        "> Skills:",
        "> [Schleichen LV 3]",
        "> [Dolchkampf LV 2]",
        "> [Überzeugung LV 4]",
        ">",
        "> [Überzeugung LV 4]:",
        "> Passiver Vertrauensbonus",
        ">",
        "> HINWEIS:",
        "> Das Fehlen verdächtiger Marker",
        "> ist bei diesem Profil selbst verdächtig",
      ]
    },

    choices: [
      {
        text: "A) AKZEPTIEREN — Du lässt Marcus vorsichtig näher.",
        desc: "[AF+Marcus] Echte Nähe oder besserer Verrat. Noch unklar.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 20 },
        alignEffect: { licht: 1 },
        flagEffect: { marcusVertrauen: "hoch" },
        narrativeFeedback: "Marcus wird Teil deines Alltags. Gerade genug, dass es später weh tun könnte.",
      },
      {
        text: "B) GEGENSPIONAGE — Du akzeptierst ihn, fütterst ihn aber mit Falschinformationen.",
        desc: "[AL+Schatten] Du spielst mit. Marcus merkt nicht, wie sehr.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 5 },
        alignEffect: { schatten: 1, ordnung: 1 },
        flagEffect: { marcusVertrauen: "gegenspionage" },
        narrativeFeedback: "Du lässt ihn näher, aber nie tief genug, um etwas Unersetzliches zu finden. Noch nicht.",
      },
    ]
  },

  // ════ KAPITEL 14: IMPORT.HEROES() ═══════════════════════════════════════

  a3k3_summoning_vorbereitung: {
    act: "AKT III",
    chapter: "Kapitel 14 — Import.Heroes()",
    title: "Das Summoning-Ritual",
    scene: "Großes Amphitheater — Alter: 15 Jahre",
    bg: "city",
    music: "theme_mystery",
    text: `Das Summoning-Ritual der Systemkirche fand alle zwanzig Jahre statt.
Und diesmal war ich alt genug, es zu sehen.

Erzbischof Mordecai stand im Zentrum des Ritualkreises.
Die Stadt jubelte.
Die Kirche betete.
Und ich aktivierte [Code.Read].

Was ich sah, ließ mich aufhören zu atmen.

Das Ritual war kein göttlicher Akt.
Es war ein Programm.

Eine Subroutine des Genesis-Systems, die Seelen aus benachbarten Dimensionen extrahierte und sie in neue Körper überführte.

Jemand stahl Leben.
Und nannte es Rettung.`,

    text2: `Vier Lichtsäulen.

Akira Tanaka — laut, sofort kämpferisch.
Emma Wright — analysiert schon beim Materialisieren die Umgebung.
Dmitri Volkov — ruhig, methodisch, schweigend.
Yuki Sakamoto — verloren. Ihre Magie unkontrolliert. Zu viel Kraft, zu wenig Welt.

Wie Sera am Fluss.

Die Wiederholung traf mich stärker, als ich zugeben wollte.`,

    choices: [{ text: "→ Die Heldenpartei formiert sich", next: "a3k4_helden_kontakt", narrativeFeedback: "Vier Fremde aus einer anderen Welt. Du kennst das Gefühl." }],
    wissenEffect: ["ritualIstDiebstahl", "heldenTimer"]
  },

  // ════ KAPITEL 15: PARTY.FORMATION() ═════════════════════════════════════

  a3k4_helden_kontakt: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Der erste Kontakt",
    scene: "Akademie — Wochen nach dem Summoning",
    bg: "city",
    music: "theme_friendship",
    text: `In den Wochen nach dem Summoning beobachtete ich die vier.

Akira trainierte, als wollte er die Welt mit bloßer Sturheit erschlagen.
Emma las, als gäbe es eine Lösung, wenn man nur genug Seiten umblätterte.
Dmitri half dort, wo niemand hinsah.
Und Yuki saß oft allein da, als sei ihr eigener Körper ein Raum, in dem sie sich nicht sicher fühlte.

Ich musste entscheiden, wen ich zuerst ansprach.
Erster Kontakt formt Dynamik.
Und Dynamik formt Geschichte.`,

    choices: [
      {
        text: "A) AKIRA — Beim Kampftraining",
        next: "a3k4_akira",
        affinityEffect: { akira: 15 },
        flagEffect: { heldenErsterKontakt: "akira" },
        narrativeFeedback: "Akira bemerkt dich sofort. Nicht mit Misstrauen — mit Neugier. Gefährlich auf seine sonnige Art.",
      },
      {
        text: "B) EMMA — In der Bibliothek",
        next: "a3k4_emma",
        affinityEffect: { emma: 15 },
        flagEffect: { heldenErsterKontakt: "emma" },
        narrativeFeedback: "Emma hebt nur eine Augenbraue. Aber sie räumt den Platz gegenüber frei. Das ist bei ihr fast Zuneigung.",
      },
      {
        text: "C) DMITRI — Beim Helfen in der Küche",
        next: "a3k4_dmitri",
        affinityEffect: { dmitri: 15 },
        flagEffect: { heldenErsterKontakt: "dmitri" },
        narrativeFeedback: "Dmitri reicht dir wortlos ein Messer zum Kartoffelschälen. Das ist seine Version von »Hallo«.",
      },
      {
        text: "D) YUKI — Am Rand der Arena",
        next: "a3k4_yuki",
        affinityEffect: { yuki: 20 },
        alignEffect: { licht: 1 },
        flagEffect: { heldenErsterKontakt: "yuki" },
        narrativeFeedback: "Yuki erschrickt, als du dich zu ihr setzt. Dann merkt sie, dass du nichts von ihr willst — außer da zu sein.",
      },
    ]
  },

  a3k4_akira: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Akira",
    scene: "Arena",
    bg: "city",
    music: "theme_training",
    text: `Akiras Schläge waren stark, schnell und vorhersehbar.

»Dein dritter Hieb ist immer diagonal«, sagte ich.

Akira hielt mitten in der Bewegung inne. Dann grinste er.
»Und du bist entweder mutig oder dumm.«

»Ich bin präzise.«

Er lachte.
»Gut. Dann zeig's mir.«

Wir trainierten bis zum Abend.`,

    choices: [{ text: "→ Wochen später", next: "a3k4_helden_bruecke", narrativeFeedback: "Wochen vergehen. Verbindungen entstehen langsam." }]
  },

  a3k4_emma: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Emma",
    scene: "Bibliothek",
    bg: "city",
    music: "theme_void_terminal",
    text: `»Kapitel 3, Seite 47 ist erfunden«, sagte ich.

Emma hob langsam den Blick.

»Das ist entweder eine sehr mutige Aussage oder eine, die du gleich belegen wirst.«

Ich setzte mich.
Sie schlug das Buch auf.
Und zehn Minuten später diskutierten wir über prä-systemische Geschichtsfälschung, als wären wir nie etwas anderes gewesen.`,

    choices: [{ text: "→ Wochen später", next: "a3k4_helden_bruecke", narrativeFeedback: "Wochen vergehen. Verbindungen entstehen langsam." }]
  },

  a3k4_dmitri: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Dmitri",
    scene: "Küche",
    bg: "village",
    music: "theme_training",
    text: `Wir schälten Kartoffeln.

Dmitri sprach nicht viel. Das machte ihn sofort angenehmer als die Hälfte der Akademie.

»Du hältst das Messer sauber«, sagte er irgendwann.
»Danke.«
»Das war keine Höflichkeit. Das war eine Feststellung.«

Ich mochte ihn sofort.`,

    choices: [{ text: "→ Wochen später", next: "a3k4_helden_bruecke", narrativeFeedback: "Wochen vergehen. Verbindungen entstehen langsam." }]
  },

  a3k4_yuki: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Begegnung mit Yuki",
    scene: "Arena-Rand",
    bg: "village",
    music: "theme_friendship",
    text: `Yuki hatte die Arena teilweise eingefroren. Wieder.

»Es tut mir leid«, sagte sie zu niemandem im Besonderen.

Ich setzte mich neben sie.
»Deine Magie ist nicht kaputt«, sagte ich.
Sie sah mich an, als hätte noch nie jemand diesen Satz ernst gemeint.

»Sie ist nur stärker als das System, das sie führen soll.«
Yukis Mund zuckte.
Fast ein Lächeln.
Fast Hoffnung.`,

    choices: [{ text: "→ Wochen später", next: "a3k4_helden_bruecke", narrativeFeedback: "Wochen vergehen. Verbindungen entstehen langsam." }]
  },

  a3k4_helden_bruecke: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Die folgenden Wochen",
    scene: "Akademie — die folgenden Wochen",
    bg: "city",
    music: "theme_friendship",
    conditionalFlag: "heldenErsterKontakt",
    textConditional: {
      akira: `Akira redete weiter mit mir. Nicht höflich — er redete wirklich. Fragte nach Taktik. Hörte zu, wenn ich antwortete. Das war selten genug, um aufzufallen.

In den folgenden Wochen traf ich die anderen über ihn: Emma, die im Gespräch über Kampftheorie aufblühte. Dmitri, der schwieg, aber blieb. Yuki, die mich ansah, als wäre es neu, dass jemand zurücksah, ohne sofort etwas zu wollen.

Vier Wochen. Dann kam Akira zur Mensa.`,
      emma: `Emma teilte Bücher nicht. Sie gab sie aus, wenn jemand die richtige Frage stellte. Ich stellte sie.

In den folgenden Wochen traf ich die anderen über sie: Akira, lauter als erwartet, aber auch präziser. Dmitri, ruhig wie ein Anker. Yuki, die immer am Rand saß und so tat, als höre sie nicht zu.

Vier Wochen. Dann kam Akira zur Mensa.`,
      dmitri: `Dmitri half, ohne zu fragen, wer man war. Das war ungewöhnlich genug, um aufzufallen.

In den folgenden Wochen traf ich die anderen über ihn: Akira, wach und direkt. Emma, präzise und ungeduldig. Yuki, die meistens schwieg, aber einmal sagte: »Du hörst wirklich zu, oder?«

Vier Wochen. Dann kam Akira zur Mensa.`,
      yuki: `Yuki sprach nach dem ersten Abend nicht mehr über ihre Magie. Aber sie saß öfter in meiner Nähe.

In den folgenden Wochen kamen die anderen von selbst: Akira, weil er jeden kannte. Emma, weil sie in der Bibliothek saß. Dmitri, weil er Yuki kannte.

Vier Wochen. Dann kam Akira zur Mensa.`,
      default: `In den folgenden Wochen traf ich sie alle: Akira, Emma, Dmitri, Yuki. Jeder auf seine Art. Jeder mit einer anderen Form von Einsamkeit, die sie nicht so nannten.

Vier Wochen. Dann kam Akira zur Mensa.`,
    },
    text: `In den folgenden Wochen traf ich sie alle: Akira, Emma, Dmitri, Yuki. Jeder auf seine Art. Jeder mit einer anderen Form von Einsamkeit, die sie nicht so nannten.

Vier Wochen. Dann kam Akira zur Mensa.`,

    choices: [{ text: "→ Das Angebot", next: "a3k5_akiras_angebot", narrativeFeedback: "Akira kommt zur Mensa. Direkt. Vor allen Leuten." }],
  },

  a3k5_akiras_angebot: {
    act: "AKT III",
    chapter: "Kapitel 15 — Party.Formation()",
    title: "Das Angebot",
    scene: "Mensa",
    bg: "city",
    music: "theme_family",
    text: `Akira kam in der Mensa direkt auf meinen Tisch zu.
Vor allen Leuten.

»Kaito«, sagte er.
»Ich brauche einen Taktiker. Wir wollen dich in der Partei.«

Das Geflüster begann sofort.

Der Level-4-Junge?
Der stille Stipendiat?
Der Bauernsohn?

Akira hielt mir die Hand hin, als gäbe es keine Welt, in der ich sie nicht nehmen würde.`,

    choices: [
      {
        text: "A) DU NIMMST AN — öffentlich",
        desc: "[AL-Verborgenheit] Du wirst sichtbar. Sehr sichtbar.",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 20, emma: 10, dmitri: 10, yuki: 10 },
        alignEffect: { licht: 2, verborgenheit: -5 },
        flagEffect: { heldenparteiStatus: "offen" },
        narrativeFeedback: "Die Mensa explodiert in Gerüchten. Akiras Grinsen ist so breit, als hätte er gerade die Sonne adoptiert.",
      },
      {
        text: "B) IM SCHATTEN — »Ich helfe. Aber mein Name bleibt aus den Berichten.«",
        desc: "[AL+Verborgenheit] Stratege im Hintergrund. Einfluss ohne Titel.",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 10, emma: 5, dmitri: 5, yuki: 10 },
        alignEffect: { verborgenheit: 3, schatten: 1 },
        flagEffect: { heldenparteiStatus: "schatten" },
        narrativeFeedback: "Akira blinzelt. Dann grinst er schief. »Der mysteriöse fünfte Mann also. Gefällt mir.«",
      },
    ]
  },

  // ════ KAPITEL 16: TROJAN.HORSE() ════════════════════════════════════════

  a3k6_marcus_verrat_setup: {
    act: "AKT III",
    chapter: "Kapitel 16 — Trojan.Horse()",
    title: "Die Stille vor dem Sturm",
    scene: "Bibliothek — spät abends",
    bg: "night",
    music: "theme_mystery",
    timedDecision: true,
    timedSeconds: 8,
    timedDefault: 1,
    text: `Marcus setzte sich neben mich, als wäre es ein Abend wie jeder andere.

»Kaito... Erzbischof Mordecai hat nach dir gefragt.«

Ich sagte nichts.

»Vielleicht«, fuhr Marcus fort, »solltest du dich von den Helden zurückziehen. Weniger sichtbar werden. Ich sage das als Freund.«

Menschen, die unwiderrufliche Dinge taten, wurden vorher oft freundlicher.

Das war keine Regel.
Aber eine gute Statistik.`,

    choices: [
      {
        text: "A) VERTRAUEN — »Du hast recht. Danke, Marcus.«",
        desc: "[SC] Du tappst tiefer in die Falle.",
        next: "a3k7_verrat_alpha",
        affinityEffect: { marcus: 10 },
        flagEffect: { marcusWissen: false, verratPfad: "alpha" },
        narrativeFeedback: "Marcus entspannt sich sichtbar. Zu sichtbar. Das ist dein letztes Warnsignal — und du gehst trotzdem weiter.",
      },
      {
        text: "B) MISSTRAUEN — »Warum weiß Mordecai überhaupt von mir?«",
        desc: "[SC] Marcus' Maske flackert.",
        next: "a3k7_verrat_alpha",
        affinityEffect: { marcus: 5 },
        alignEffect: { ordnung: 1 },
        flagEffect: { marcusWissen: false, verratPfad: "alpha_vorsicht" },
        narrativeFeedback: "Für weniger als eine Sekunde verschiebt sich Marcus' Gesicht. Das reicht. Du weißt jetzt, dass etwas nicht stimmt.",
      },
      {
        text: "C) [Code.Read] TIEF — Vollscan. Jetzt.",
        desc: "[SC] Du siehst ALLES. Und kommst dem Verrat zuvor.",
        next: "a3k7_verrat_beta",
        alignEffect: { ordnung: 2, schatten: 1 },
        flagEffect: { marcusWissen: true, verratPfad: "beta" },
        narrativeFeedback: "Das Terminal explodiert mit Daten. Kirchen-Agent. Assassinenklasse. Schwester Iris: reale Geisel. Nichts davon ist leicht.",
      },
    ]
  },

  // ════ KAPITEL 17: BETRAYAL.EXECUTE() ════════════════════════════════════

  a3k7_verrat_alpha: {
    act: "AKT III",
    chapter: "Kapitel 17 — Betrayal.Execute()",
    title: "Der Verrat",
    scene: "Katakomben unter der Akademie",
    bg: "night",
    music: "theme_mystery",
    text: `Mitternacht.
Katakomben.
Eine Tür, die sich hinter uns schloss.

Sechs Inquisitoren warteten.
Und Erzbischof Mordecai.

Marcus stand neben mir.
Sein Gesicht war leer, aber nicht kalt. Eher... ausgeräumt.

»Wenn ich das hier nicht tue«, sagte er leise, »stirbt meine Schwester Iris.«

Mordecai trat vor. Sein Scan zerschmetterte meinen [Code.Spoof], als wäre er aus Glas.

»Kein Level«, sagte er ruhig.
»Keine Klasse.
Keine Systemregistrierung.
Was BIST du, Kind?«`,

    choices: [
      {
        text: "A) DIE VOLLE WAHRHEIT — »Erschaffen von der Siebten Architektin.«",
        desc: "[SC] Maximale Erschütterung für Mordecai. Maximale Gefahr für dich.",
        next: "a3k7_kerker",
        alignEffect: { licht: 2, verborgenheit: -5 },
        flagEffect: { mordecaiWissen: "septima", mordecaiRiss: true },
        narrativeFeedback: "Mordecai erstarrt. Für einen Moment sieht er nicht aus wie ein Erzbischof, sondern wie ein Mann, der etwas wiedererkannt hat, das nicht existieren dürfte.",
      },
      {
        text: "B) GEGENANGRIFF — »Ich weiß, was beim System-Update passiert.«",
        desc: "[SC] Du triffst einen Nerv, den du nicht sehen kannst — aber spürst.",
        next: "a3k7_kerker",
        alignEffect: { chaos: 2, licht: 1 },
        flagEffect: { mordecaiWissen: "update", mordecaiRedemptionMoeglich: true, mordecaiRiss: true },
        narrativeFeedback: "Mordecais Gesicht wird zur Maske. »Woher weißt du davon?« Das ist keine Frage, die ein ruhiger Mann stellt.",
      },
      {
        text: "C) SCHWEIGEN — kein Wort. Nur Blickkontakt.",
        desc: "[AL+Schatten] Du gibst nichts preis. Mordecai hasst offene Variablen.",
        next: "a3k7_kerker",
        alignEffect: { schatten: 1, ordnung: 1 },
        flagEffect: { mordecaiWissen: "nichts", mordecaiRiss: false },
        narrativeFeedback: "Die Stille wird zu einer zweiten Waffe im Raum. Mordecai antwortet ihr nicht gut.",
      },
    ]
  },

  a3k7_verrat_beta: {
    act: "AKT III",
    chapter: "Kapitel 17 — Betrayal.Execute()",
    title: "Der verhinderte Verrat",
    scene: "Schlafsaal",
    bg: "night",
    music: "theme_friendship",
    systemBox: {
      title: "VOID-TERMINAL — SCAN: MARCUS HALE (TIEF)",
      lines: [
        "> [Code.Read] — VOLLSTÄNDIGER SCAN",
        ">",
        "> WAHRE KLASSE: Assassine (Rang C)",
        "> AUFTRAGGEBER: Erzbischöfliches Büro",
        ">",
        "> MISSION: Kaito Ashford zur Übergabe bringen",
        "> ZEITFENSTER: Diese Nacht. Mitternacht.",
        "> ORT: Katakomben, Nordflügel",
        ">",
        "> PERSÖNLICHE MOTIVATION:",
        "> Schwester: Iris Hale",
        "> Status: Geisel — Kirche, Untergeschoss 3",
        ">",
        "> Systemkommentar:",
        "> Er lügt nicht.",
        "> Er hat keine andere Wahl.",
      ]
    },
    text: `Marcus klopfte.
Ich war vorbereitet.

»Lass mich raten«, sagte ich, bevor er ein Wort sagen konnte. »Katakomben. Mitternacht. Sechs Inquisitoren. Mordecai.«

Marcus erstarrte.

»Ich weiß es«, sagte ich. »Ich weiß auch, warum du es tust. Iris.«

Sein Arm zuckte in Richtung Dolch. Dann sackte er leicht zusammen.

»Ich biete dir einen Deal an«, sagte ich. »Du kaufst mir Zeit. Ich finde einen Weg, Iris zu befreien. Aber ab jetzt entscheidest du, was du bist: Werkzeug oder Mensch.«`,

    choices: [
      {
        text: "A) »Erzähl mir alles über Mordecais Pläne. Ab sofort arbeitest du für mich.«",
        desc: "[SC] Marcus wird echter Doppelspion.",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 30 },
        alignEffect: { ordnung: 2 },
        flagEffect: { marcusStatus: "doppelspion" },
        narrativeFeedback: "Marcus schließt die Augen. Als er sie wieder öffnet, ist da zum ersten Mal seit Langem etwas wie Erleichterung.",
      },
      {
        text: "B) »Geh zurück. Sag ihnen, was sie hören wollen. Und wenn die Zeit kommt, wähle richtig.«",
        desc: "[SC] Unsicherer Verbündeter. Vielleicht wertvoll, vielleicht nicht.",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 15 },
        flagEffect: { marcusStatus: "unsicher" },
        narrativeFeedback: "Marcus nickt langsam. Er sieht aus wie jemand, der seit Jahren nur zwischen schlechten Optionen wählen durfte.",
      },
      {
        text: "C) »Wenn du mich nochmal verrätst, kann ich dich nicht mehr retten.«",
        desc: "[SC] Härterer Pfad. Loyalität durch Warnung, nicht Hoffnung.",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 20 },
        alignEffect: { schatten: 2 },
        flagEffect: { marcusStatus: "warnung" },
        narrativeFeedback: "Marcus schluckt sichtbar. »...Verstanden.« Zwei Worte. Ehrlicher als die meisten, die er bisher gesprochen hat.",
      },
    ]
  },

  // ════ KAPITEL 18: PRISON.BREAK() ════════════════════════════════════════

  a3k7_kerker: {
    act: "AKT III",
    chapter: "Kapitel 18 — Prison.Break()",
    title: "Die Zelle",
    scene: "Katakomben der Akademie",
    bg: "void",
    music: "theme_void_terminal",
    text: `Drei Tage Zelle.

Die System-Siegel an den Wänden blockierten Aether, dämpften das Terminal und machten den Raum klein auf eine Weise, die mit Quadratmetern nichts zu tun hatte.

Am dritten Tag hörte ich ein Geräusch.
Nicht an der Tür.
Unter dem Boden.

Dann brach der Stein auf.

Und aus dem Loch schaute Sera Blackwood.

Sechzehn.
Dreck im Gesicht.
Bernsteinaugen, die in der Dunkelheit glühten.
Und ein Ausdruck, der so aussah, als hätte Wut irgendwann beschlossen, sich in Entschlossenheit weiterzuentwickeln.`,

    text2: `»Überraschung«, sagte sie.

»Sera?! Wie—«
»Tunnel«, sagte sie.
»Du hast...«
»Ja.«

Sie deutete hinter sich in die Dunkelheit. »Finn lenkt oben ab. Er ist schlecht darin. Aber laut.«

Irgendwo über uns hörte ich gedämpft:
»HALT! IM NAMEN DER— äh— GERECHTIGKEIT!«

Ich hätte fast gelacht.

Sera hatte sich durch Stein gebrannt, um mich zu holen.

Manche Menschen sagen »Ich hab dich vermisst«.
Sera schmilzt Tunnel.`,

    choices: [{ text: "→ Flucht und Exil", next: "a3k8_exil_vorbereitung", narrativeFeedback: "Sera hat dich gefunden. Finn hat laut abgelenkt. Es hat funktioniert." }],
    affinityEffect: { sera: 25, finn: 10 },
    narrativeFeedback: "Sera reicht dir die Hand. Du nimmst sie sofort. Sie zieht dich hoch, als hätte sie nie etwas anderes vorgehabt.",
  },

  // ════ KAPITEL 19: EXILE.BEGIN() ═════════════════════════════════════════

  a3k8_exil_vorbereitung: {
    act: "AKT III",
    chapter: "Kapitel 19 — Exile.Begin()",
    title: "Die Entscheidung",
    scene: "Dächer der Akademie",
    bg: "night",
    music: "theme_mystery",
    text: `Frei oder nie eingesperrt — das Ergebnis war dasselbe: Mordecai wusste von mir.

Ich konnte nicht an der Akademie bleiben. Nicht mehr.

Die Frage war nicht OB ich ging.
Nur WIE.`,

    choices: [
      {
        text: "A) ÖFFENTLICHER ABGANG — Du gehst sichtbar. Absichtlich.",
        desc: "[SC] Du wirst zur Legende unter den Studenten. Schlechter für Tarnung, gut für Mythos.",
        next: "a3k9_abschiede",
        alignEffect: { licht: 1, verborgenheit: -3 },
        flagEffect: { exilForm: "oeffentlich" },
        narrativeFeedback: "Gerüchte fressen sich schneller durch eine Akademie als Feuer durch trockenes Stroh. Du gibst ihnen etwas, das sie nie wieder vergessen.",
      },
      {
        text: "B) VERSCHWINDEN IN DER NACHT — Keine Erklärung. Kein letzter offizieller Blick.",
        desc: "[SC] Du wirst zum Phantom. Schmerzhafter für die, die dich mochten. Effektiver gegen die, die dich jagen.",
        next: "a3k9_abschiede",
        alignEffect: { schatten: 2, verborgenheit: 2 },
        flagEffect: { exilForm: "phantom" },
        narrativeFeedback: "Mordecai findet am Morgen nur ein leeres Bett und zu viele offene Fragen. Gute Arbeit.",
      },
      {
        text: "C) VERHANDLUNG — Du gehst zu Mordecai zurück, bevor er wieder zu dir kommt.",
        desc: "[SC] Nur möglich, wenn du seinen Zweifel getroffen hast. Geordnetes Exil gegen Schweigen.",
        requires: { flag: { mordecaiRedemptionMoeglich: true } },
        next: "a3k8_mordecai_verhandlung",
        alignEffect: { ordnung: 2 },
        flagEffect: { exilForm: "verhandlung" },
        narrativeFeedback: "Du gehst freiwillig zur gefährlichsten Tür der Akademie zurück. Mut und Wahnsinn sehen aus der Nähe oft ähnlich aus.",
      },
    ]
  },

  a3k8_mordecai_verhandlung: {
    act: "AKT III",
    chapter: "Kapitel 19 — Exile.Begin()",
    title: "Die Verhandlung",
    scene: "Arbeitszimmer des Erzbischofs",
    bg: "city",
    music: "theme_void_terminal",
    text: `Mordecais Arbeitszimmer war stiller als eine Zelle.
Das machte es gefährlicher.

Er saß hinter einem Schreibtisch aus dunklem Holz und sah mich an, als sei ich gleichzeitig eine Bedrohung, eine Blasphemie und eine Frage, die ihn seit Jahren nicht schlafen ließ.

»Du kommst freiwillig«, sagte er.
»Ja.«
»Warum?«
»Weil wir beide zu viel wissen, um noch so zu tun, als ginge es hier um Gehorsam.«

Mordecai schwieg.

Dann sagte ich:
»Ich gehe. Freiwillig. Kein öffentlicher Skandal. Keine Märtyrer-Geschichte. Keine Jagd durch die Akademie. Sie verlieren einen unbedeutenden Stipendiaten. Mehr nicht.«

»Und was bekomme ich dafür?«, fragte Mordecai.

»Zeit«, sagte ich.
»Und die Chance, sich irgendwann zu erinnern, dass Zweifel nicht Sünde sind.«

Das traf ihn. Nicht sichtbar. Aber tief genug.`,

    text2: `Er stand auf, ging zum Fenster und sah auf die Stadt hinab.

»Du bist fünfzehn«, sagte er.
»Ja.«
»Und du klingst wie jemand, der seit Jahrzehnten mit Institutionen verhandelt.«
»Ich bin aufmerksam aufgewachsen.«

Ein langer Moment.

Dann:
»Geh«, sagte Mordecai.
»Jetzt. Bevor ich mir eine offizielle Begründung ausdenken muss.«

Ich drehte mich zur Tür.

»Kaito«, sagte er hinter mir.

Ich blieb stehen.

»Wenn du wirklich weißt, was das Update ist... dann stirb nicht, bevor ich die Antwort höre.«

Ich ging.
Nicht als Sieger.
Aber auch nicht als Gefangener.`,

    choices: [{ text: "→ Die Abschiede", next: "a3k9_abschiede", narrativeFeedback: "Vier Menschen auf einem Dach. Der letzte Abend an der Akademie." }],
    affinityEffect: { mordecai: 15 },
    flagEffect: { mordecaiVerhandelt: true, mordecaiRiss: true },
  },

  a3k9_abschiede: {
    act: "AKT III",
    chapter: "Kapitel 19 — Exile.Begin()",
    title: "Die Abschiede",
    scene: "Dach der Akademie",
    bg: "night",
    music: "theme_family",
    text: `Sie warteten auf dem Dach.

Akira zuerst, natürlich.
»Das ist Mist«, sagte er.
»Eloquent«, sagte ich.
»Ich bin Schwertheld, kein Dichter.«

Emma reichte mir ein handgebundenes Heft. Karten. Notizen. Dungeon-Routen.
»Sag nicht danke«, sagte sie. »Sag: Ich komme zurück.«
»Ich komme zurück.«
»Gut.«

Dmitri zog einen kleinen grauen Stein aus der Tasche.
»In meiner Heimat gibt man so etwas einem Kameraden vor einem Krieg. Man trägt ihn, bis man sich wiedersieht.«

Er legte ihn in meine Hand.
»Gib ihn mir zurück.«

Dann Yuki.`,

    text2: `Yuki stand etwas abseits. Ihre Hände zitterten leicht.

»Ich muss dir etwas sagen«, sagte ich.
Sie sah mich an und wusste sofort, dass es schlimm war.

Ich erzählte ihr die Wahrheit über [Mana-Overflow]. Die verlorenen Jahre. Die Lüge der Kirche.

Yuki sackte nicht vor Schock zusammen.
Sie sackte zusammen wie jemand, der etwas immer schon geahnt hatte und nun endlich die Form dieser Angst hörte.

»Ich werde einen Weg finden«, sagte ich. »Aber ich brauche, dass du lebst. So lange, bis ich zurück bin.«

Yuki nickte.
Sehr klein.
Sehr tapfer.`,

    choices: [
      {
        text: "A) Stirn gegen Stirn. Kein Wort. Du nimmst ihren Hasen-Anhänger.",
        desc: "[AF+Yuki MAX] Tiefster emotionaler Pfad.",
        next: "a3k9_sprung",
        affinityEffect: { yuki: 30 },
        alignEffect: { licht: 2 },
        flagEffect: { yukiRomance: true, yukiToken: "hase" },
        narrativeFeedback: "Yukis Atem stockt. Der kleine Hase wechselt die Besitzer. Das Versprechen nicht.",
      },
      {
        text: "B) »Ich bringe ihn dir zurück. Zusammen mit einer Lösung.«",
        desc: "[AF+Yuki] Stark, aber kontrollierter. Hoffnung statt Berührung.",
        next: "a3k9_sprung",
        affinityEffect: { yuki: 25 },
        alignEffect: { licht: 1 },
        flagEffect: { yukiRomance: false, yukiToken: "hase" },
        narrativeFeedback: "Yuki legt dir den Anhänger in die Hand, als würde sie damit auch einen Teil ihres Mutes auslagern.",
      },
      {
        text: "C) Du brichst Dmitris Stein entzwei. Eine Hälfte für Yuki, eine für dich.",
        desc: "[AF+Yuki] [AF+Dmitri] Geteiltes Versprechen. Schwerer, stiller, dauerhafter.",
        next: "a3k9_sprung",
        affinityEffect: { yuki: 20, dmitri: 5 },
        flagEffect: { yukiRomance: false, yukiToken: "stein" },
        narrativeFeedback: "Dmitri sieht es von der Seite und nickt. Einmal. Langsam. Bei ihm ist das beinahe eine Umarmung.",
      },
    ]
  },

  a3k9_sprung: {
    act: "AKT III",
    chapter: "Kapitel 19 — Exile.Begin()",
    title: "»Null.«",
    scene: "Dächer von Aetheria Prime",
    bg: "night",
    music: "theme_void_terminal",
    text: `»Wenn ihr jemanden trefft, der sich Null nennt«, sagte ich, »dann wisst ihr, wer es ist.«

Ich sprang.
Nicht nach unten.
Nach vorn.

Dach zu Dach.
Schatten zu Schatten.
Weg von der Akademie, weg von der Rolle, die diese Stadt für mich vorgesehen hatte.

Draußen, außerhalb der Mauern, stand ich im Regen.
Fünfzehn Jahre alt.
Ohne Level.
Ohne Klasse.
Mit zu vielen Versprechen und zu wenig Zeit.

Zum ersten Mal seit meiner Geburt in dieser Welt gab ich mir selbst einen Namen.`,

    systemBox: {
      title: "VOID-TERMINAL — IDENTITÄTS-UPDATE",
      lines: [
        "> Identitäts-Update akzeptiert",
        ">",
        "> Name: NULL",
        ">",
        "> Phase IV initialisiert",
        ">",
        "> — S.: »Endlich.«",
      ]
    },

    choices: [{ text: "→ Kapitel 20: Reboot()", next: "a3k10_reboot", narrativeFeedback: "Du bist frei. Zum ersten Mal. Das ist nicht dasselbe wie sicher." }]
  },

  // ════ KAPITEL 20: REBOOT() ══════════════════════════════════════════════

  a3k10_reboot: {
    act: "AKT III",
    chapter: "Kapitel 20 — Reboot()",
    title: "Solo-Leveling beginnt",
    scene: "Goblin-Höhle »Grünschimmel« — Rang E",
    bg: "void",
    music: "theme_training",
    conditionalFlag: "gregorBuch",
    textConditional: {
      true: `Seite 47 aus Gregors Buch hatte es angedeutet: Verstehen reicht nicht, wenn man nicht auch entscheidet, was man mit dem Verstand anfängt. Im Regen vor dem Dungeon dachte ich daran. Dann ging ich hinein.`,
      default: ``,
    },
    text: `Drei Tage nach meiner Flucht betrat ich einen Rang-E-Dungeon am Straßenrand.

Goblin-Höhle. Grünschimmel. Nichts Heroisches. Nichts Episches.
Perfekt.

Ich kämpfte nicht wie ein Held.
Ich kämpfte wie ein Hacker.

Analyse vor Bewegung.
Schwachstelle vor Kraft.
Licht in die Augen.
Dolch in den Hals.
Weiter.

Der Boss hieß Gurk. Viel Gebrüll. Wenig Substanz.

Als er fiel, tat das Terminal etwas Neues.`,

    systemBox: {
      title: "VOID-TERMINAL — NEUE FÄHIGKEIT",
      lines: [
        "> [Code.Copy] — FREIGESCHALTET",
        ">",
        "> Kann System-Skills besiegter Gegner",
        "> als Fragmente extrahieren",
        "> und rekonstruierbar machen",
        ">",
        "> VOID-MEMORY-MODELL AKTUALISIERT:",
        "> → 5 AKTIVE Kernslots gleichzeitig",
        "> → Archivierte Fragmente: unbegrenzt speicherbar",
        "> → Rekonstruktion / Slot-Wechsel nur in Ruhe",
        ">",
        "> Anmerkung:",
        "> Nicht kopieren.",
        "> Dekompilieren.",
      ]
    },

    text2: `Ich sah auf meine Hände.
Dann auf den toten Goblin.
Dann auf die Dunkelheit vor mir.

Nicht leer.
Nicht wertlos.
Frei.

Gregors letztes Wort dafür kam zurück:
AELTHAR.
Der, der zwischen den Dingen steht.

Und genau dort würde ich jetzt leben.
Zwischen den Dingen.
Zwischen den Regeln.
Zwischen dem, was das System glaubte, und dem, was wirklich war.`,

    choices: [{ text: "→ AKT IV: ELEVATION", next: "a4k1_intro", narrativeFeedback: "Null. Allein. Draußen. Los." }],
    skillUnlock: ["codeCopy"],
    wissenEffect: ["aeltharBedeutung"],
    flagEffect: { voidMemoryModel: "active5_archive" },
  },
};
