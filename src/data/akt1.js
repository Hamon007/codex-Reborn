// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT I: ERSTE BYTES
// Kapitel 1–6: Baby-Phase, Alter 0–3
// Bereinigte Endfassung — konsistent mit AKT II–IV
// ═══════════════════════════════════════════════════════

export const AKT_I = {

  // ════ KAPITEL 1: NULL.INIT() ═══════════════════════════════════════════

  a1_geburt: {
    act: "AKT I",
    chapter: "Kapitel 1 — Null.Init()",
    title: "Die Geburt",
    scene: "Dorf Millheim, Valtheris — Jahr 897 des Systems",
    conditionalFlag: "letzterGedanke",
    textConditional: {
      reue: `Das Erste: Erleichterung. Als hätte ein Teil von mir gewusst, dass er eine zweite Chance bekam.`,
      hingabe: `Das Erste: Entschlossenheit. Dieselbe wie beim letzten Bug. Nur mit mehr Zeit.`,
      einsamkeit: `Das Erste: Elenas Stimme. So hatte noch niemand für mich gesungen.`,
      akzeptanz: `Das Erste: Stille — die gute Art. Du bist angekommen.`,
      default: ``,
    },
    bg: "light",
    music: "theme_family",
    text: `Licht.

Zu viel davon. Meine Augen — neu, unbenutzt, nicht an diese Welt gewöhnt — konnten es nicht verarbeiten. Alles war ein verschwommener Strudel aus Formen und Farben.

Ich versuchte zu schreien. Nicht aus Angst — aus Frustration. Mein Körper gehorchte mir nicht. Meine Arme waren winzig, nutzlos, flatterten wie nasse Handtücher. Mein Kopf wackelte. Meine Beine—

Moment.
Ich hatte Beine.

Kleine, absurde Beine.

Ich war ein Baby.

Ich, Kaito Wake, neunundzwanzig Jahre alt — mental — war ein verdammtes BABY.

Dann hörte ich eine Stimme. Warm, erschöpft, voller Liebe.

»Er ist da… Roland, er ist da… Sieh ihn dir an…«

»…Er ist perfekt. Elena, er ist perfekt.«`,

    text2: `Ich verstand kein Wort. Buchstäblich — die Sprache war fremd, melodisch, mit Lauten, die in keiner irdischen Sprache existierten. Aber den Ton verstand ich.

Liebe.
Erleichterung.
Freude.

Jemand hielt mich. Große, warme Hände, die zitterten. Ein Gesicht — verschwommen, aber mit einem kantigen Kinn, einer Narbe und Augen, die feucht glänzten.

Mein Vater.

In dieser Welt hatte ich einen Vater.

Und er weinte.

Ich auch, wenn wir ehrlich sind. Aber das war biologisch.`,

    systemBox: {
      title: "GENESIS-SYSTEM — REGISTRIERUNGSVERSUCH",
      lines: [
        "Neue Seele erkannt.",
        "Registrierung wird durchgeführt...",
        "",
        "Registrierung: ████████████████░ 97%",
        "",
        "FEHLER.",
        "REGISTRIERUNG FEHLGESCHLAGEN.",
        "",
        "Seelensignatur: NICHT ERKANNT",
        "Systemkompatibilität: 0%",
        "",
        "Maßnahme: IGNORIEREN.",
        "[Entität wird als NICHT EXISTENT vermerkt]",
        "Nächste Überprüfung: NIE",
      ]
    },

    text3: `Das System versuchte, mich zu registrieren. Und scheiterte.

Ich beobachtete — soweit ein Neugeborenes überhaupt etwas beobachten konnte — wie das Licht flackerte, sich verzerrte und dann einfach verschwand.

Bei mir: nichts. Kein Status-Fenster. Keine Registrierung.

Die Hebamme Gerda runzelte die Stirn.
»Hm... Das ist seltsam. Normalerweise zeigt das System...«

Elena war sofort wachsam.
»Was? Was ist seltsam?«

»Sein Status. Ich... kann ihn nicht sehen. Das passiert manchmal bei Frühgeburten. Das System braucht ein paar Stunden. Macht euch keine Sorgen.«

Aber Gerda machte sich Sorgen.
Ich sah es an ihrem Gesicht.

Willkommen in der Welt, Null.`,

    choices: [{ text: "→ Die erste Nacht", next: "a1_erste_nacht", narrativeFeedback: "Die Welt ist neu. Dein Körper ist klein. Dein Verstand nicht." }]
  },

  a1_erste_nacht: {
    act: "AKT I",
    chapter: "Kapitel 1 — Null.Init()",
    title: "Die erste Nacht",
    scene: "Haus der Familie Ashford — Nacht",
    bg: "cottage",
    music: "theme_family",
    text: `Nacht. Das Haus war still. Elena schlief, erschöpft von der Geburt. Roland saß wach neben dem Bett, die Hand auf dem Schwertgriff unter dem Kissen.

Ich konnte nicht schlafen.

Nicht, weil ich nicht müde war — mein Körper war erschöpft. Aber mein Geist... neunundzwanzig Jahre an Erinnerungen, Wissen und Erfahrungen in einen Schädel gepresst, der kleiner war als eine Grapefruit.

Ich lag da, in einem Wollbündel, und dachte nach.

Punkt eins: Ich war tot. Definitiv tot.
Punkt zwei: Ich war wiedergeboren. In einer anderen Welt. Als Baby.
Punkt drei: Es gab ein System. Und das System konnte mich nicht sehen.
Punkt vier: Mein Körper war absolut nutzlos.

Ich konzentrierte mich. Schloss die Augen. Dachte an ein Terminal.`,

    systemBox: {
      title: "VOID-TERMINAL v0.01",
      lines: [
        "> Hallo.",
        ">",
        "> Körperstatus: Neugeborenes (2,8 kg)",
        "> Motorik: MINIMAL",
        "> Sehkraft: 14% (wird sich verbessern)",
        "> Sprachfähigkeit: 0% (wird sich verbessern)",
        "> Blase: VOLL (empfehle Maßnahme)",
        ">",
        "> Verfügbare Befehle:",
        "> [Code.Read] — VERFÜGBAR",
        "> [Code.Analyze] — GESPERRT",
        ">",
        "> Hinweis:",
        "> Weitere Funktionen werden freigeschaltet,",
        "> wenn der Träger physisch und mental reift.",
        ">",
        "> Empfohlene Maßnahme:",
        "> Schlafen. Essen. Wachsen. Nicht sterben.",
        ">",
        "> Viel Erfolg, Anomalie.",
      ]
    },

    text2: `»Blase: VOLL«?
Ernsthaft?

...Verdammt.
Es hatte recht.

Ich hasste diese Welt bereits.`,

    choices: [{ text: "→ Elenas Schlaflied", next: "a1_schlaflied", narrativeFeedback: "Elena singt. Etwas in dir, das schon lange nicht mehr ruhig war, hört zu." }]
  },

  a1_schlaflied: {
    act: "AKT I",
    chapter: "Kapitel 1 — Null.Init()",
    title: "Elenas Schlaflied",
    scene: "Haus der Familie Ashford — tiefe Nacht",
    bg: "cottage",
    music: "theme_elena_song",
    text: `Kurz darauf machte ich mich unvermeidlich bemerkbar. Elena wachte auf, wechselte mich mit schlaftrunkener Routine und nahm mich dann an ihre Brust.

Und sang.

♪ Schlaf, mein Kind, im Mondenschein,
Die Sterne wachen über dein.
Die Welt ist weit, die Nacht ist still,
Du bist genau, wo ich dich will. ♪

♪ Ael'thira, ael'thira, shan...
Ael'thira, ael'thira, kaan... ♪

Und dann passierte etwas Seltsames.

Das Schlaflied änderte sich. Die ersten Zeilen waren in Common. Dann glitt Elena in eine ältere Sprache — weich, seltsam, voller Rhythmen, die nicht ganz menschlich wirkten.

Ich hörte es nicht nur.
Ich spürte es.`,

    systemBox: {
      title: "VOID-TERMINAL — EXTERNE ENERGIE ERKANNT",
      lines: [
        "> Typ: Unklassifiziert (NICHT System-Magie)",
        "> Quelle: Akustisch / Vokal",
        "> [Code.Analyze] — NICHT VERFÜGBAR",
        ">",
        "> Vorläufige Einschätzung:",
        "> WILDE MAGIE — Fragment",
        "> Trägerin ist sich nicht bewusst",
        ">",
        "> Wirkung auf Anomalie:",
        "> ...beruhigend",
        "> ...wirklich beruhigend",
        ">",
        "> Systemempfehlung: Schlafen",
      ]
    },

    text2: `Wilde Magie.
Meine Mutter sang Wilde Magie, ohne es zu wissen.

Das war wichtig. Ich wusste nicht warum. Noch nicht. Aber irgendwo in meinem übermüdeten, zusammengequetschten Erwachsenengehirn leuchtete ein stilles Warnlicht auf.

Dann schlief ich ein.

Zum ersten Mal in meinem neuen Leben.
Zum ersten Mal seit langer Zeit friedlich.`,

    choices: [{ text: "→ Die ersten Monate", next: "a2_familie_montage", narrativeFeedback: "Demut ist eine Fähigkeit. Du lernst sie gerade — ob du willst oder nicht." }],
    wissenEffect: ["elenaElfenblut"]
  },

  // ════ KAPITEL 2: FAMILIE.LOAD() ════════════════════════════════════════

  a2_familie_montage: {
    act: "AKT I",
    chapter: "Kapitel 2 — Familie.Load()",
    title: "Das Familienleben",
    scene: "Haus der Familie Ashford — Alter: 0–6 Monate",
    bg: "cottage",
    music: "theme_family",
    text: `Die ersten Monate meines neuen Lebens waren eine Übung in Demut.

Stellt euch vor: Ihr habt das Bewusstsein eines Erwachsenen, das Wissen eines Ingenieurs, die Erinnerungen von neunundzwanzig Jahren — und euer größtes tägliches Accomplishment ist, den Kopf gerade zu halten.

Ich konnte nicht sprechen. Nicht laufen. Kaum sehen.

Aber ich war nicht untätig.

Ich beobachtete.

Roland stand jeden Tag vor Sonnenaufgang auf. Felder. Ziegen. Hühner. Reparaturen. Dann Frühstück. Immer müde. Immer mit einem kleineren Lächeln, wenn er mich ansah.

Dieser Mann — groß, stark, vernarbt — hielt mich mit einer Zartheit, die an Angst grenzte.`,

    text2: `Elena arbeitete als Dorfheilerin. Kleine Wunden. Schürfwunden. Bauchschmerzen. Fieber. System-Heilmagie auf niedrigem Rang.

Aber manchmal summte sie die alten Lieder.
Und dann leuchteten ihre Hände anders.
Wärmer.
Tiefer.
Nicht systemisch.

Mein Terminal registrierte es jedes Mal.

Wilde Magie.

Gregor kam jeden Abend zum Essen. Pfeife, abgewetzter Mantel, Geschichten.
Keine echten Kindermärchen.
Verschlüsselte Lebenslektionen in der Form von Märchen.
Und manchmal, wenn er dachte, niemand bemerke es, sah er mich an, als prüfe er, ob ich wirklich zuhörte.`,

    text3: `»Du verstehst mich, oder, Kleiner?«, murmelte Gregor eines Abends.
»Nicht wie andere Babys. Anders.«

Er hatte recht.
Und schlimm genug: er wusste es auch.`,

    choices: [{ text: "→ Das erste Wort", next: "a1_erstes_wort", narrativeFeedback: "Sechs Monate Zuhören. Jetzt bist du bereit." }],
    affinityEffect: { gregor: 10 }
  },

  a1_erstes_wort: {
    act: "AKT I",
    chapter: "Kapitel 2 — Familie.Load()",
    title: "Das erste Wort",
    scene: "Küche der Familie Ashford — Alter: 6 Monate",
    bg: "cottage",
    music: "theme_family",
    text: `Sechs Monate intensives Zuhören hatten gereicht.

Common war logisch. Konstruierter, als es natürliche Sprache sein sollte. Natürlich war sie das: ein Systemstandard für eine kontrollierbare Welt.

Ich verstand genug.
Und mein Mund war gerade koordiniert genug.

Es war ein Dienstag. Elena kochte. Roland reparierte draußen einen Zaun. Ich lag in der Wiege.

Dann sagte ich:
»...Ma...ma.«

Elena ließ den Löffel fallen.

Roland kam hereingestürzt.

Ich sah ihn an und sagte:
»...Pa...pa.«`,

    text2: `Rolands Ausdruck war unbezahlbar. Dieser massive, vernarbte Ex-Ritter sah aus, als würde ihn das Wort eines Babys emotional vernichten.

Elena weinte vor Freude.
»Sechs Monate! Das ist viel zu früh!«

Ja.
Ich wusste das.
Aber ich hatte Fragen. Und Sprache war nützlicher als Stillhalten.

Natürlich hielt ich mich danach zurück.

Grundvokabular.
Keine vollen Sätze.
Kein unnötiges Genie.`,

    choices: [
      {
        text: "A) VORSICHTIG — Du spielst das normale Baby.",
        desc: "Sicherheit zuerst. Niemand soll mehr sehen als nötig.",
        next: "a1_wanderhaendler",
        alignEffect: { verborgenheit: 4 },
        flagEffect: { kindheitsVerhalten: "vorsichtig", ersteUnterdrueckung: true },
        narrativeFeedback: "Du lernst zum ersten Mal, wie sich Selbstverkleinerung anfühlt.",
      },
      {
        text: "B) NEUGIERIG — Bücher, Gespräche, Gesichter statt Spielzeug.",
        desc: "Subtil auffällig. Vor allem für Gregor.",
        next: "a1_wanderhaendler",
        alignEffect: { ordnung: 2 },
        affinityEffect: { gregor: 15, elena: 5 },
        flagEffect: { kindheitsVerhalten: "neugierig", gregorAufmerksam: true },
        narrativeFeedback: "Gregor sagt nichts. Aber sein Blick bleibt länger auf dir ruhen als vorher.",
      },
      {
        text: "C) OFFEN — Zu früh, zu klar, zu deutlich.",
        desc: "Deine Familie erschrickt. Das lässt sich nicht ganz zurücknehmen.",
        next: "a1_wanderhaendler",
        alignEffect: { verborgenheit: -4, chaos: 2 },
        affinityEffect: { elena: -10, roland: -10, gregor: 10 },
        flagEffect: { kindheitsVerhalten: "offen", familieErschrocken: true },
        narrativeFeedback: "Rolands Gesicht zeigt für einen Augenblick echte Angst. Nicht vor dir — für dich.",
      },
    ]
  },

  a1_wanderhaendler: {
    act: "AKT I",
    chapter: "Kapitel 2 — Familie.Load()",
    title: "Der Wanderhändler",
    scene: "Haus der Familie Ashford — Alter: 8 Monate",
    bg: "cottage",
    music: "theme_mystery",
    conditionalFlag: "kindheitsVerhalten",
    textConditional: {
      vorsichtig: `Ein ruhiger Nachmittag. Ich spielte das brave Baby und tat so, als wäre die Welt klein und harmlos.`,
      neugierig: `Gregor hatte mir gerade ein altes Buch gebracht, das ich offiziell nicht lesen konnte. Dann klopfte es.`,
      offen: `Elena war nach meinen »zu klugen« Momenten vorsichtiger geworden. Aber Besucher kamen trotzdem.`,
      default: ``,
    },
    text: `Ein regnerischer Nachmittag. Es klopfte an der Tür.

Ein Mann trat ein, der nach Regen und Tee roch. Reisemantel. Zerbeulter Hut. Freundliches Lächeln.
Zu freundlich.

»Aldwin, Wanderhändler, zu Ihren Diensten«, sagte er.
»Ich habe Gewürze, Stoffe, Tee und allerlei nützliche Dinge.«

Elena bat ihn herein.

Ich hörte zu.
Sah hin.
Und mein Terminal meldete Alarm.`,

    systemBox: {
      title: "VOID-TERMINAL — WARNUNG",
      lines: [
        "> Entität erkannt",
        "> Angezeigter Systemstatus: MANIPULIERT",
        ">",
        "> Sichtbare Werte:",
        "> Level 22 | Klasse: Händler",
        ">",
        "> Geschätzte reale Diskrepanz: MASSIV",
        ">",
        "> Empfehlung:",
        "> Beobachten",
        "> Nicht konfrontieren",
        ">",
        "> Hinweis:",
        "> Der Träger ist ein Säugling",
      ]
    },

    text2: `Der Wanderhändler war kein Wanderhändler.

Als er ging, blieb er kurz an meiner Wiege stehen.
Seine Augen flackerten.
Braun.
Dann für einen Moment violett.

»Da bist du ja«, flüsterte er so leise, dass nur ich es hören konnte.

Dann setzte er den Hut auf und ging hinaus in den Regen.

Mein Herz raste.
Wer zum Teufel war dieser Mann?`,

    choices: [{ text: "→ Der Lachende Riese", next: "a2_lachender_riese", narrativeFeedback: "Du gehst. Laufen ist noch Übungssache." }],
    affinityEffect: { aldwin: 5 }
  },

  a2_lachender_riese: {
    act: "AKT I",
    chapter: "Kapitel 2 — Familie.Load()",
    title: "Der Lachende Riese",
    scene: "Vor dem Haus der Ashfords — Alter: 11 Monate",
    bg: "village",
    music: "theme_family",
    text: `Ein klarer Herbstnachmittag. Die Ernte war eingebracht. Roland hatte ausnahmsweise früh Feierabend gemacht.

Er übte mit mir das Laufen.

Oder genauer:
Ich übte das Laufen.
Roland übte das Nicht-Eingreifen.

Elf Monate alt. Ich konnte stehen. Wackelig. Wie ein betrunkener Seiltänzer. Roland kniete fünf Schritte entfernt im Gras und hielt die Arme offen.

»Komm, Kleiner. Du schaffst das.«`,

    text2: `Ich machte einen Schritt.
Dann noch einen.
Der dritte war... optimistisch.

Mein linkes Bein entschied spontan, dass Zusammenarbeit überbewertet sei.

Ich fiel.

Roland fing mich auf, bevor ich den Boden traf.

Und dann lachte er.

Nicht das kleine kontrollierte Lächeln, das ich schon kannte.
Ein echtes Lachen.
Tief, rau, aus dem Bauch.
Das Lachen eines Mannes, der vergessen hatte, dass er noch lachen konnte.

Elena sah vom Fenster aus zu.
Und lächelte mit.`,

    systemBox: {
      title: "VOID-TERMINAL — STATUS UPDATE",
      lines: [
        "> Emotionale Bindung festgestellt",
        "> Betroffene Entitäten:",
        "> Roland Ashford",
        "> Elena Ashford",
        ">",
        "> Systemempfehlung:",
        "> Distanz wahren",
        "> Bindungen schaffen Schwachstellen",
        ">",
        "> Trägerantwort:",
        "> [Abgelehnt]",
        ">",
        "> Neue Priorität registriert:",
        "> Schutz gebundener Entitäten",
      ]
    },

    text3: `Ich hatte mir vorgenommen, ein Beobachter zu bleiben. Jemand, der diese Welt versteht, ohne sich von ihr verwunden zu lassen.

In diesem Moment wusste ich:
Diesen Kampf hatte ich bereits verloren.

Ich liebte sie.

Und das war wahrscheinlich das Gefährlichste, was mir in dieser Welt passieren konnte.`,

    choices: [{ text: "→ Kapitel 3: System.Scan()", next: "a3_code_read", narrativeFeedback: "Die Welt hat einen Code. Du kannst ihn lesen." }],
    affinityEffect: { roland: 20, elena: 15 },
    alignEffect: { licht: 2 }
  },

  // ════ KAPITEL 3: SYSTEM.SCAN() ══════════════════════════════════════════

  a3_code_read: {
    act: "AKT I",
    chapter: "Kapitel 3 — System.Scan()",
    title: "Code.Read — Erste Anwendung",
    scene: "Garten der Ashfords — Alter: 14 Monate",
    bg: "village",
    music: "theme_void_terminal",
    text: `Vierzehn Monate. Ich konnte laufen — schlecht, aber ausreichend. Ich konnte einfache Worte sprechen. Und ich konnte [Code.Read] endlich wirklich benutzen.

Ein sonniger Tag. Ich saß im Garten und konzentrierte mich auf ein Gänseblümchen.`,

    systemBox: {
      title: "VOID-TERMINAL — [Code.Read] AKTIV",
      lines: [
        "> Ziel: Organismus (Gänseblümchen)",
        ">",
        "> ERGEBNIS:",
        "> Objekt: Gänseblümchen",
        "> Klassifikation: Flora",
        "> Level: 0 | HP: 3/3",
        "> Eigenschaften:",
        "> - Photosynthese",
        "> - Wachstum",
        "> - Samenverteilung",
        ">",
        "> System-Code: 0x4F2A_FLORA_BASIC",
      ]
    },

    text2: `Code.

Echter, lesbarer, strukturierter Code.

Nicht JavaScript. Nicht C. Nicht Python.
Aber Logik. Variablen. Eigenschaften. Referenzen.
Verständlich.

Die Welt war ein Programm.
Und ich konnte den Quellcode lesen.

Ich war ein Programmierer in einer programmierten Welt.

Das änderte alles.`,

    choices: [{ text: "→ Die Familie im Code", next: "a3_familie_scan", narrativeFeedback: "Was du siehst, lässt sich nicht mehr unsehen." }],
    skillUnlock: ["codeRead"],
    wissenEffect: ["systemIstProgramm"]
  },

  a3_familie_scan: {
    act: "AKT I",
    chapter: "Kapitel 3 — System.Scan()",
    title: "Die Familie im Code",
    scene: "Haus der Ashfords — Alter: 14–16 Monate",
    bg: "cottage",
    music: "theme_void_terminal",
    text: `Ich richtete [Code.Read] auf meinen Vater.`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: ROLAND ASHFORD",
      lines: [
        "> Name: Roland Ashford",
        "> [Alias. Echter Name versiegelt]",
        ">",
        "> Rasse: Mensch | Alter: 39",
        "> Level: 34 | Klasse: Krieger (inaktiv)",
        "> [Vorherige Klasse: Ritter, Rang B]",
        "> [Level-Verlust: -18]",
        ">",
        "> STATUS:",
        "> [Systemfluch: Gebrochener Krieger]",
        "> STR -30%",
        "> AGI -50%",
        "> Level-Cap: 40",
        "> Quelle: System-Administrator",
      ]
    },

    text2: `Mein Vater war nicht von einem Monster verflucht worden.
Nicht von schwarzer Magie.
Vom System selbst.

Ein Architekt hatte Roland persönlich bestraft.

Sein Hinken war keine alte Kampfverletzung.
Es war eine Sanktion.

Tage später richtete ich [Code.Read] auf Elena.`,

    systemBox2: {
      title: "VOID-TERMINAL — SCAN: ELENA ASHFORD",
      lines: [
        "> Name: Elena Ashford (geb. Sylvaine)",
        ">",
        "> Rasse: Mensch",
        "> [Rassendaten-Anomalie]",
        "> [Fragment: 0x7E_ELF_12.5%]",
        ">",
        "> Alter: 36 | Level: 14",
        "> Klasse: Heilerin",
        ">",
        "> Versteckte Fähigkeiten:",
        "> [Wilde Magie — Stimme] (latent)",
        "> Nicht systemregistriert",
      ]
    },

    text3: `Elfenblut. 12,5 Prozent.
Zu wenig für das System.
Genug für Wilde Magie.

Meine Mutter hatte keine Ahnung, wie besonders sie war.

Ich sah zu ihr auf.
Sie lächelte mich an.
»Ja, mein Schatz?«

Ich wollte sagen:
Du bist mehr als du weißt.

Mein Mund sagte:
»...hübsch.«

Nah genug.`,

    choices: [
      {
        text: "A) SCHWEIGEN — Du sagst nichts.",
        desc: "Wissen als Last. Schutz durch Verschweigen.",
        next: "a4_mira_geburt",
        alignEffect: { schatten: 2, verborgenheit: 2 },
        flagEffect: { rolandFluchWissen: "verschwiegen", erstesGeheimnis: true },
        narrativeFeedback: "Das erste echte Geheimnis in einem neuen Leben fühlt sich schwerer an, als es sollte.",
      },
      {
        text: "B) BERÜHRUNG — Du sagst nichts, aber nimmst Rolands Hand.",
        desc: "Nähe ohne Offenbarung.",
        next: "a4_mira_geburt",
        alignEffect: { licht: 2 },
        affinityEffect: { roland: 15 },
        flagEffect: { rolandFluchWissen: "beruehrung" },
        narrativeFeedback: "Roland weiß nicht, was du weißt. Aber er spürt, dass du da bist.",
      },
      {
        text: "C) BESCHLUSS — Kein Wort. Nur eine Signatur in deinem Kopf: der Architekt hinter Rolands Fluch.",
        desc: "Feinddefinition vor Sprachreife, ohne falsche Gewissheit.",
        next: "a4_mira_geburt",
        alignEffect: { schatten: 3, ordnung: 1 },
        flagEffect: { rolandFluchWissen: "rache" },
        narrativeFeedback: "Manche Dinge sind keine Quests. Sie sind Schulden.",
      },
    ],
    wissenEffect: ["rolandFluch", "rolandEchterName", "elenaElfenblut"]
  },

  // ════ KAPITEL 4: ERROR.LOG() ════════════════════════════════════════════

  a4_mira_geburt: {
    act: "AKT I",
    chapter: "Kapitel 4 — Error.Log()",
    title: "Geschwister",
    scene: "Millheim — Alter: 2 Jahre 9 Monate",
    bg: "cottage",
    music: "theme_family",
    text: `Mira Ashford wurde an einem Sturmabend geboren. Laut, fordernd und mit einer Lunge, die aussah, als hätte irgendein Gott beim Design überkompensiert.

Ich mochte sie sofort.

Als Gerda sie hereinbrachte, erschien über Mira sofort ein klares, blaues Statusfenster.

Bei ihr funktionierte alles.

Das System erkannte sie.
Registrierte sie.
Speicherte sie.

Bei mir hatte es versagt.`,

    systemBox: {
      title: "GENESIS-SYSTEM — NEUE SEELE REGISTRIERT",
      lines: [
        "> Name: _____ Ashford",
        "> Rasse: Mensch",
        "> Level: 1",
        "> HP: 15/15",
        "> Status: GESUND",
        "> Klasse: wird bei LV 10 zugewiesen",
      ]
    },

    text2: `Ich log nicht: Es stach.

Nicht aus Neid.
Sondern weil es mich daran erinnerte, dass ich in dieser Welt ein Fremdkörper war.

Dann sah Mira mich an.
Und hörte auf zu weinen.

Einfach so.

Elena starrte.
Roland lächelte leicht.
Und ich verstand:
Mira fühlte etwas.

Bei allen anderen fühlte sie Status.
Bei mir:
Stille.`,

    choices: [
      {
        text: "A) Du berührst ihre Wange. Sanft. Beschützend.",
        desc: "[AF+Mira] Starker Geschwisterbond von Anfang an.",
        next: "a4_beobachter",
        affinityEffect: { mira: 30, elena: 10, roland: 10 },
        alignEffect: { licht: 2 },
        flagEffect: { miraErstbegegnung: "beruehrung" },
        narrativeFeedback: "Mira greift nach deinem Finger, als hätte sie nie etwas anderes gewollt.",
      },
      {
        text: "B) Du beobachtest sie analytisch. [Code.Read] auf ein Neugeborenes.",
        desc: "[Wissen] Du erfährst mehr über ihre Anomalie.",
        next: "a4_mira_scan",
        affinityEffect: { mira: 10 },
        alignEffect: { ordnung: 2 },
        flagEffect: { miraErstbegegnung: "scan" },
        wissenEffect: ["miraAnomalie"],
        narrativeFeedback: "Das Terminal kommentiert trocken, dass Babys keine Analyseobjekte sein sollten. Du ignorierst es halbherzig.",
      },
      {
        text: "C) »Schwester.«",
        desc: "[AF+Familie] Dein erstes bewusstes Bekenntnis zu dieser Familie.",
        next: "a4_beobachter",
        affinityEffect: { mira: 20, roland: 15, elena: 15 },
        alignEffect: { licht: 1 },
        flagEffect: { miraErstbegegnung: "schwester" },
        narrativeFeedback: "Roland dreht sich kurz zur Wand. Seine Schultern verraten ihn.",
      },
    ]
  },

  a4_mira_scan: {
    act: "AKT I",
    chapter: "Kapitel 4 — Error.Log()",
    title: "Miras Code",
    scene: "Geburtszimmer",
    bg: "cottage",
    music: "theme_void_terminal",
    text: `Ich richtete [Code.Read] auf Mira.

Das fühlte sich fast ein bisschen unfair an.
Aber auch wichtig.`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: MIRA ASHFORD",
      lines: [
        "> Name: Mira Ashford",
        "> Rasse: Mensch | Level: 1",
        ">",
        "> [ANOMALIE ERKANNT]",
        "> Versteckte Eigenschaft:",
        "> [System-Empathie] — latent",
        ">",
        "> Wirkung:",
        "> Kann Systemstatus anderer FÜHLEN",
        "> Besondere Reaktion auf [NULL]-Entitäten:",
        "> Beruhigung statt Angst",
      ]
    },

    text2: `Interessant.

Mira konnte Status fühlen.
Nicht lesen.
Nicht analysieren.
Fühlen.

Und bei mir fühlte sie keine Bedrohung.
Nur Stille.

Ich streckte die Hand aus und berührte ihre Wange.
Sie schlief ein.`,

    choices: [{ text: "→ Die Beobachter", next: "a4_beobachter", narrativeFeedback: "Jemand sucht das Loch, das du im System hinterlässt." }],
    affinityEffect: { mira: 15 }
  },

  a4_beobachter: {
    act: "AKT I",
    chapter: "Kapitel 4 — Error.Log()",
    title: "Die Beobachter",
    scene: "Millheim — Alter: 3 Jahre",
    bg: "village",
    music: "theme_mystery",
    text: `Drei Jahre. Ich konnte laufen, rennen (stolpern), sprechen (mit dem Vokabular eines etwas fortgeschrittenen Dreijährigen) und meine Umgebung besser lesen als jedes andere Kind im Dorf.

Aber etwas beunruhigte mich.

Ich wurde beobachtet.

Nicht von meinen Eltern. Nicht von Gregor. Von außen.

Es begann subtil. Ein Rabe auf dem Dach. Immer derselbe. Ein Reisender, der zu lange in unsere Richtung blickte. Und einmal, nachts, ein Leuchten am Waldrand. Kein Feuer. Kein Lager. Ein Scan.`,

    systemBox: {
      title: "VOID-TERMINAL — WARNUNG: AETHER-ANOMALIE",
      lines: [
        "> EXTERNE SCANS ERKANNT",
        "> Häufigkeit: steigend",
        "> Entfernung: ~500m",
        "> Typ: Hochrangige System-Überwachung",
        ">",
        "> STATUS DES TRÄGERS:",
        "> Keine direkte Systemerfassung möglich",
        "> [NULL] bleibt unsichtbar für Standard-UI",
        ">",
        "> NEBENWIRKUNG:",
        "> Lokale Aether-Leerstelle erkannt",
        "> Mikro-Vakua im Umraum messbar",
        ">",
        "> Schlussfolgerung:",
        "> Sie suchen nicht NACH dir.",
        "> Sie suchen nach dem FEHLEN eines Status.",
        "> Nach dem Loch in der Welt.",
      ]
    },

    text2: `Am selben Abend kam Gregor zum Essen. Diesmal ohne Drachenlächeln und ohne Pfeifenrauch-Ironie.

»Soldaten an der Oststraße«, sagte er. »Kaiserliche. Fragen nach Anomalien. Ungewöhnlichen Geburten. Kindern ohne Status.«

Roland wurde still.
Elena auch.

»Niemand berührt meine Kinder«, sagte sie.

Roland antwortete sofort:
»Niemand wird das.«`,

    text3: `Ich lag im Dunkeln und hörte ihnen zu.

Das System hatte mich bei der Geburt nicht registrieren können. Aber meine Nichtexistenz war nicht neutral. Sie verzog den Aether um mich herum. Eine Leerstelle. Eine unsichtbare Wunde im Muster.

Das bedeutete:
Das System sah mich nicht.
Aber kluge Menschen konnten lernen, den Abdruck meiner Unsichtbarkeit zu lesen.`,

    systemBox2: {
      title: "VOID-TERMINAL — SYSTEM.UPDATE VORBEREITUNG",
      lines: [
        "> Mentale Reife nähert sich Schwellenwert",
        "> Akute Bedrohung erkannt",
        ">",
        "> [Code.Analyze] — STATUS: VORBEREITUNG",
        "> Nicht stabil nutzbar bei aktuellem Alter",
        ">",
        "> Voraussetzung für Vollzugriff:",
        "> Weitere kognitive Reifung",
        ">",
        "> Prognose:",
        "> Stabiler Zugriff in der nächsten Lebensphase",
      ]
    },

    text4: `Code.Analyze war nahe. Aber noch nicht da.

Das war frustrierend.
Und wahrscheinlich gut so.

Mit drei Jahren hätte ich versucht, den Himmel auseinanderzunehmen, wenn man mir das richtige Werkzeug in die Hand gegeben hätte.`,

    choices: [
      {
        text: "A) WARTEN — Du bleibst still und sammelst Informationen.",
        desc: "Geduld. Nicht aus Schwäche — aus Kalkül.",
        next: "a5_eber_angriff",
        alignEffect: { ordnung: 2, verborgenheit: 2 },
        flagEffect: { beobachterReaktion: "warten" },
        narrativeFeedback: "Der Scan zieht weiter. Es fühlt sich an wie Ohnmacht. Vielleicht ist Geduld nur Ohnmacht mit Strategie.",
      },
      {
        text: "B) TARNEN — Du versuchst, mental kleiner zu werden, stiller, unauffälliger.",
        desc: "Frühes Tarninstinkt-Training. Kein Skill, aber ein Muster entsteht.",
        next: "a5_eber_angriff",
        alignEffect: { verborgenheit: 3, schatten: 1 },
        flagEffect: { beobachterReaktion: "tarnung", tarnungFrueh: true },
        narrativeFeedback: "Der Scan gleitet über dich hinweg. Vielleicht war das Glück. Vielleicht Lernen. Wahrscheinlich beides.",
      },
    ]
  },

  // ════ KAPITEL 5: TRAUMA.LOG() ═══════════════════════════════════════════

  a5_eber_angriff: {
    act: "AKT I",
    chapter: "Kapitel 5 — Trauma.Log()",
    title: "Der Eisenhauer-Eber",
    scene: "Haus der Ashfords — Alter: 3 Jahre, 2 Monate",
    bg: "cottage",
    music: "theme_tension",
    text: `Der Morgen begann normal.

Ich lag wach und scannte mit [Code.Read] die Maserung eines Deckenbalkens. Analytische Beschäftigung war die würdevollste Form von Hilflosigkeit, die ich als Dreijähriger gefunden hatte.

Dann hörte ich Schritte.
Falsch gesetzte Schritte.
Zu schnell. Zu schwer. Zu ungleich.

Roland kam durch die Tür und taumelte herein.

Seine rechte Seite war aufgerissen. Jacke in Fetzen. Darunter eine tiefe, gerissene Wunde vom Hüftknochen bis hoch zur Rippe.

Kein Videospielblut.
Echtes Blut.`,

    systemBox: {
      title: "VOID-TERMINAL — WARNUNG",
      lines: [
        "> Bewegungsmuster erkannt",
        "> Entität: Roland Ashford",
        ">",
        "> Standard-Gangprofil: asymmetrisch, kontrolliert",
        "> Aktuelles Profil: instabil, beschleunigt",
        ">",
        "> Mögliche Ursachen:",
        "> Verletzung",
        "> Flucht",
        "> Erschöpfung",
      ]
    },

    text2: `Elena fing ihn auf, als er fast zusammenbrach.
Sie war klein neben ihm.
Und in diesem Moment größer als jeder Ritter.

Sie brachte ihn zur Tischbank und legte die Hände an die Wunde.
Blaue System-Heilmagie leuchtete auf.

Ich blieb nicht da, wo ich bleiben sollte.
Ich kroch zur Bank und klammerte mich an sein Bein.

Die Wunde schloss sich.
Langsam.
Schmerzhaft.
Sichtbar.

Roland keuchte. Nicht schreiend. Nicht jammernd. Nur diese eine tiefe, unterdrückte Art von Laut, die verriet, dass Heilung und Gnade nicht dasselbe waren.`,

    systemBox2: {
      title: "VOID-TERMINAL — MEDIZINISCHE ANALYSE",
      lines: [
        "> Entität: Roland Ashford",
        "> Verletzung: schwere Reißwunde (Tier)",
        "> Heilung aktiv: Elena Ashford",
        ">",
        "> Schmerzkomponente der System-Heilung:",
        "> HOCH",
        ">",
        "> Betäubung verfügbar durch:",
        "> Heiltrank Klasse III",
        "> Kosten: ~12 Silbermünzen",
      ]
    },

    text3: `Zwölf Silber.

Ein halbes Jahr Arbeit für eine Bauernfamilie.

Und mein Vater lag da und biss die Zähne zusammen, weil wir uns Betäubung nicht leisten konnten.

Das war der Moment, in dem ich begriff, dass Stärke in dieser Welt kein Luxus war.
Sie war Versicherung.`,

    choices: [{ text: "→ Das Gespräch in der Nacht", next: "a5_nachtgespraech", narrativeFeedback: "Zwölf Silber. Eine Wunde. Das bleibt." }]
  },

  a5_nachtgespraech: {
    act: "AKT I",
    chapter: "Kapitel 5 — Trauma.Log()",
    title: "Der Preis des Blutes",
    scene: "Haus der Ashfords — Nacht",
    bg: "cottage",
    music: "theme_elena_song",
    text: `In der Nacht saßen Elena und Gregor in der Küche.

Roland schlief endlich. Mira atmete ruhig. Ich nicht.

»Wie viel habt ihr?«, fragte Gregor.
»Vier Silber und sieben Kupfer«, sagte Elena.
»Bis zur Ernte.«

Stille.

»Ein Trank der dritten Klasse—«, begann Gregor.
»Ich weiß«, unterbrach Elena ihn. Ihre Stimme war ruhig. Zu ruhig. »Zwölf Silber. Ich kenne die Zahl. Ich habe sie heute Abend jedes Mal gedacht, wenn ich seine Rippe zusammengezogen habe.«

Gregor schwieg.
Dann sagte er leise:
»Ich habe noch zwanzig Silber. Für Notfälle.«

Elena brach fast an diesem Satz.`,

    text2: `Ich lag im Dunkeln und verstand plötzlich etwas, das kein Spiel einem je richtig beibrachte:

Hier bedeutete »Heiltrank benutzen« nicht ein Item zu klicken.
Hier bedeutete es Monate von Arbeit.
Ernte.
Schweiß.
Verzicht.

Ich ballte meine kleinen Hände unter der Decke.

Ich würde stärker werden.

Nicht für mich.

Damit niemand in diesem Haus noch einmal so dalag, weil wir uns Schmerzfreiheit nicht leisten konnten.`,

    systemBox: {
      title: "VOID-TERMINAL — MOTIVATIONSPROFIL",
      lines: [
        "> Vorher:",
        "> Überleben. Beobachten. Verstehen.",
        ">",
        "> Jetzt:",
        "> Überleben. Beobachten. Verstehen.",
        "> SCHÜTZEN.",
        ">",
        "> Neue Variable erkannt:",
        "> Extrinsische Motivation",
        "> (Familie als Schutzauftrag)",
      ]
    },

    choices: [{ text: "→ Einige Wochen später", next: "a6_goblin_encounter", narrativeFeedback: "Du trainierst. Heimlich. Zielstrebig." }],
    flagEffect: { schutzSchwur: true },
    affinityEffect: { roland: 10, elena: 10, gregor: 10 }
  },

  // ════ KAPITEL 6: FIRST.CONTACT() ════════════════════════════════════════

  a6_goblin_encounter: {
    act: "AKT I",
    chapter: "Kapitel 6 — First.Contact()",
    title: "Am Waldesrand",
    scene: "Hinter dem Haus — Alter: 3 Jahre, 3 Monate",
    bg: "village",
    music: "theme_tension",
    text: `Ich hatte begonnen zu trainieren.

Nicht wie ein normales Kind trainierte. Sondern still. Mit Dehnübungen. Balance. Koordination. So weit mein Körper es eben zuließ.

An diesem Morgen durfte ich unter Elenas Aufsicht am Waldrand spielen.
Zehn Meter Unterholz.
Sichtlinie zum Küchenfenster.

Dann meldete sich das Terminal.`,

    systemBox: {
      title: "VOID-TERMINAL — UMGEBUNGSSCAN",
      lines: [
        "> Aether-Muster im Unterholz: INSTABIL",
        "> Annäherung: Nordost, ~25m",
        ">",
        "> Entität erkannt:",
        "> Goblin-Typ (Kundschafter)",
        "> Level: 4",
        ">",
        "> Distanz bis Entdeckung: ~15 Sekunden",
        ">",
        "> Roland Ashford: ~200m entfernt",
        ">",
        "> Analyse:",
        "> LV 4 Goblin ist für Roland KEINE Bedrohung",
        "> Problem ist nicht Stärke",
        "> Problem ist Entfernung",
      ]
    },

    text2: `Für Roland war ein einzelner Goblin ein Witz.
Für mich war er eine mathematisch sehr schlechte Nachricht.

Das Unterholz bewegte sich.
Gelbe Augen.
Knochenschwert.
Jagdblick.

Er sah mich.
Und sprang.`,

    choices: [{ text: "→ 5 Sekunden", next: "a6_goblin_entscheidung", narrativeFeedback: "Der Goblin springt. Entscheide." }]
  },

  a6_goblin_entscheidung: {
    act: "AKT I",
    chapter: "Kapitel 6 — First.Contact()",
    title: "Die erste Entscheidung",
    scene: "Unterholz",
    bg: "forest",
    music: "theme_tension",
    timedDecision: true,
    timedSeconds: 8,
    timedDefault: 0,
    text: `Der Goblin springt.
Ich habe Sekunden.

Keine Waffe.
Keine Klasse.
Kein Status.
Nur eine Entscheidung.`,

    systemBox: {
      title: "VOID-TERMINAL — KRISENENTSCHEIDUNG",
      lines: [
        "> Reaktionszeit: 8 Sekunden",
        ">",
        "> A) In die Schatten",
        "> B) Den Schmerz akzeptieren",
      ]
    },

    choices: [
      {
        text: "A) IN DIE SCHATTEN — Wurzeln, Dunkelheit, Atem anhalten.",
        next: "a6_goblin_schatten",
        alignEffect: { schatten: 2, verborgenheit: 2 },
        narrativeFeedback: "Du lässt dich fallen, rollst unter einen Wurzelvorhang und drückst dich in die Dunkelheit. Der Goblin landet genau dort, wo du eben noch standest.",
      },
      {
        text: "B) DEN SCHMERZ AKZEPTIEREN — Improvisieren, blockieren, aushalten.",
        next: "a6_goblin_schmerz",
        alignEffect: { chaos: 2, licht: 1 },
        narrativeFeedback: "Deine Hand schließt sich um einen abgebrochenen Ast. Der Goblin springt. Du hältst dagegen — und bezahlst dafür.",
      }
    ]
  },

  a6_goblin_schatten: {
    act: "AKT I",
    chapter: "Kapitel 6 — First.Contact()",
    title: "In die Schatten",
    scene: "Unterholz",
    bg: "forest",
    music: "theme_mystery",
    text: `Ich ließ mich seitlich fallen, rollte unter einen Wurzelvorhang und drückte mich in die feuchte Dunkelheit.

Nicht kämpfen.
Nicht rennen.
Verschwinden.

Der Goblin landete dort, wo ich eben noch gestanden hatte.
Er schnüffelte.
Suchte.
Fand nichts.

Ich hielt den Atem an, bis mein Brustkorb weh tat.

Dann hörte ich Rolands Schritte.
Schnell. Hart. Wütend.

Der Goblin drehte sich zu spät um.

Es dauerte keine vier Sekunden.
Dann war nur noch Roland da.
Und seine Stimme, rau vor Panik:

»Kaito.«

»...Hier.«`,

    systemBox: {
      title: "VOID-TERMINAL — SKILL-EXTRAKTION",
      lines: [
        "> Handlungsmuster erkannt:",
        "> — Instinktive Schattennutzung",
        "> — Atemsuppression",
        ">",
        "> ERSTES VOID-FRAGMENT EXTRAHIERT:",
        "> ┌─────────────────────────────────┐",
        "> │ [NACHTSICHT LV1]                │",
        "> │ Passive Fähigkeit               │",
        "> │ Verbesserte Wahrnehmung         │",
        "> │ in Dunkelheit und Schatten.     │",
        "> └─────────────────────────────────┘",
        ">",
        "> VOID-MEMORY INITIALISIERT",
        "> Aktive Kernslots: 1/5 belegt",
        "> Archivfunktion: noch instabil",
        ">",
        "> Wähle zukünftige Fragmente weise.",
      ]
    },

    choices: [{ text: "→ Danach", next: "a6_nachgespraech", narrativeFeedback: "Es ist vorbei. Du lebst. Das zählt." }],
    skillUnlock: ["nachtsichtLv1"],
    flagEffect: { ersterKampfPfad: "schatten" }
  },

  a6_goblin_schmerz: {
    act: "AKT I",
    chapter: "Kapitel 6 — First.Contact()",
    title: "Den Schmerz akzeptieren",
    scene: "Unterholz",
    bg: "forest",
    music: "theme_mystery",
    text: `Meine Hand schloss sich um einen abgebrochenen Ast.

Der Goblin sprang.
Ich hielt den Ast nach unten.
Der Aufprall riss mich fast von den Füßen und schleuderte mich zurück, aber der Ast bohrte sich durch den Fuß des Goblins in den Boden.

Er kreischte.
Schlug blind nach mir.
Sein Knochenschwert riss meinen Arm auf.

Ich sah Blut.
Dann Schmerz.
Dann Roland.

Roland brauchte keine vier Sekunden.

Der Goblin starb.
Mein Arm blutete.
Und mein Vater kniete neben mir, als hätte man ihm gerade das Herz in die Kehle geschoben.

»Zeig mir«, sagte er. Sehr ruhig.
Sehr gefährlich.`,

    systemBox: {
      title: "VOID-TERMINAL — SKILL-EXTRAKTION",
      lines: [
        "> Handlungsmuster erkannt:",
        "> — Schmerz als Mittel akzeptiert",
        "> — Improvisation unter Zeitdruck",
        ">",
        "> ERSTES VOID-FRAGMENT EXTRAHIERT:",
        "> ┌─────────────────────────────────┐",
        "> │ [SCHMERZTOLERANZ LV1]           │",
        "> │ Passive Fähigkeit               │",
        "> │ Reduzierte Panik-Reaktion       │",
        "> │ auf körperlichen Schmerz.       │",
        "> └─────────────────────────────────┘",
        ">",
        "> VOID-MEMORY INITIALISIERT",
        "> Aktive Kernslots: 1/5 belegt",
        "> Archivfunktion: noch instabil",
        ">",
        "> Wähle zukünftige Fragmente weise.",
      ]
    },

    text2: `Die Wunde würde heilen.
Die Narbe wahrscheinlich nicht.

Ich sah auf den roten Strich an meinem Arm und dachte nur:
Das ist der Preis des Widerstands.

Nicht Sieg.
Aber auch keine Hilflosigkeit mehr.`,

    choices: [{ text: "→ Danach", next: "a6_nachgespraech", narrativeFeedback: "Es ist vorbei. Du lebst. Das zählt." }],
    skillUnlock: ["schmerztoleranzLv1"],
    flagEffect: { ersterKampfPfad: "schmerz", goblinNarbe: true }
  },

  a6_nachgespraech: {
    act: "AKT I",
    chapter: "Kapitel 6 — First.Contact()",
    title: "Das Gespräch danach",
    scene: "Haus der Ashfords — Abend",
    bg: "cottage",
    music: "theme_family",
    conditionalFlag: "ersterKampfPfad",
    textConditional: {
      schatten: `Rolands Hände zitterten noch leicht, als er mich ins Bett brachte. Nicht vor Erschöpfung. Vor dem Nachhall dessen, was fast passiert wäre.`,
      schmerz: `Mein Arm war verbunden. Die Narbe würde bleiben. Roland sah sie an, als sei sie seine eigene Schuld.`,
      default: ``,
    },
    text: `Am Abend setzte Roland sich auf den Rand meines Bettes.

Er schwieg lange.

Dann sagte er:
»Du hast nicht geschrien.«

Ich sah ihn an.
Er sah auf seine Hände.

»Die meisten Kinder würden schreien. Rennen. Weinen. Und du... hattest Angst und hast trotzdem gehandelt.«

Er rang mit etwas, das er nicht gut aussprach.

»Ich werde dir beibringen, wie man kämpft«, sagte er schließlich. »Nicht jetzt. Du bist drei. Aber bald.«

Ich nickte.

»Okay.«

Roland lächelte ganz klein.
»Okay«, wiederholte er.`,

    choices: [{ text: "→ Gregors Archiv", next: "a6_gregor_archiv", narrativeFeedback: "Gregor lässt seinen Rucksack liegen. Das war kein Versehen." }],
    affinityEffect: { roland: 10 }
  },

  a6_gregor_archiv: {
    act: "AKT I",
    chapter: "Kapitel 6 — First.Contact()",
    title: "Gregors Archiv",
    scene: "Haus der Ashfords — Drei Tage später, Nacht",
    bg: "cottage",
    music: "theme_void_terminal",
    text: `Drei Tage später ließ Gregor seinen alten Lederrucksack am Tisch stehen.

Vergessen, würde er morgen sagen.

Natürlich vergaß er ihn nicht wirklich.

Als alle schliefen, kletterte ich auf einen Stuhl, öffnete die Schnallen und zog Karten, Notizen und vergilbte Aufzeichnungen heraus.

Fünf Kontinente.
Namen, die ich kaum kannte.
Grenzen, die älter waren als die meisten Mythen, die das Dorf sich erzählte.`,

    systemBox: {
      title: "VOID-TERMINAL — LERNMODUS AKTIV",
      lines: [
        "> Erkannte Inhalte:",
        "> Drak'Moor — Dämonengebiet",
        "> Sylvanthos — Elfenwälder",
        "> Irondeep — Zwergenreich / Tiefenlabyrinthe",
        "> Null-Zone — offiziell unbewohnbar",
        ">",
        "> Gregors Randnotiz:",
        "> »Lüge. Ich war dort.«",
        ">",
        "> Zusatzvermerk:",
        "> Kaiserliche Akademie nimmt nicht nur Adlige",
        "> Kirche und Militär finanzieren Talente",
        "> Armut ist kein Hindernis, wenn du nützlich bist",
      ]
    },

    text2: `Das war die erste echte Antwort auf die Frage, wie eine Bauernfamilie jemals einen Sohn an die Akademie bringen sollte.

Nicht durch Geld.
Durch Nützlichkeit.

Das Reich kaufte Talente, wenn sie wertvoll genug waren.

Ich saß im Dunkeln, drei Jahre alt, und las die Weltkarte eines Krieges, den ich noch nicht verstand und trotzdem bereits betrat.

Die Akademie lag weit entfernt.

Ich begann trotzdem zu lernen.`,

    choices: [{ text: "→ AKT II: KOMPILIERUNG", next: "a2k1_morgenroutine", narrativeFeedback: "Millheim. Eine Familie. Ein zweites Leben beginnt." }],
    wissenEffect: ["weltkarte", "akademieStipendium", "nullZoneExistiert"]
  },
};
