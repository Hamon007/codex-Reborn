// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT V: OVERFLOW
// Kapitel 31–40: Krieg & Enthüllungen, Alter 17–18
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] STORY-CRITICAL → verändert Plot/Kapitel-Routing
// [AF] AFFINITY → 0–100 Beziehungswert, immer mit narrativeFeedback
// [AL] ALIGNMENT → Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_V = {

  // ════ KAPITEL 31: OVERFLOW.INIT() ══════════════════════════════════════

  a5k1_intro: {
    act: "AKT V",
    chapter: "Kapitel 31 — Overflow.Init()",
    title: "Siebzehn",
    scene: "Valtheris — 398 Tage bis zum Update",
    bg: "chaos",
    music: "theme_training",

    conditionalFlag: "akademiePfad",
    textConditional: {
      krieger: `An der Akademie hatten sie mich als brauchbaren Frontkämpfer eingesortiert. Das Ironische daran: Jetzt führte ich tatsächlich Krieg — nur nicht auf die Art, die sie gemeint hatten.`,
      magier: `An der Akademie hatten sie mich als Theoretiker registriert. Sie hatten recht. Nur dass meine Theorie jetzt Armeen verschob.`,
      stealth: `Am Akademietor hatte ich Durchschnitt gewählt. Ich war als Mittelmaß hineingegangen. Jetzt hing der Kontinent an Entscheidungen, die niemand je einem Durchschnittskind zugetraut hätte.`,
      default: ``,
    },

    text: `Siebzehn.

In meinem ersten Leben war siebzehn ein Alter gewesen, in dem man dachte, Entscheidungen hätten Zeit. In diesem Leben war siebzehn eine Zahl mit Countdown darunter.

398 Tage.

Das Terminal zeigte sie mir jeden Morgen. Nicht dramatisch. Nicht rot blinkend. Nüchtern. Fast höflich.
Was schlimmer war.

Ich war siebzehn und Anführer einer Schattenorganisation, die eine dreitausendjährige Weltarchitektur umschreiben wollte. Rex passte nicht mehr durch normale Tore. Gorrick schmiedete im Keller Waffen, die das System nicht lesen konnte. Veyra benutzte ihr echtes Gesicht inzwischen häufiger, wenn sie dachte, niemand sähe hin. Ren wurde fester. Aria machte den Turm lebendiger, als ein Gebäude vernünftigerweise sein sollte.

Und ich hatte 398 Tage, um etwas zu tun, das niemand vor mir geschafft hatte:
nicht das System zu stürzen.
Sondern es zu zwingen, Menschlichkeit zu lernen.`,

    systemBox: {
      title: "VOID-TERMINAL — COUNTDOWN",
      lines: [
        "> COUNTDOWN: 398 TAGE",
        "> STATUS: KRITISCH",
        ">",
        "> Das System-Update wird alle",
        "> Möglichkeiten zur Veränderung",
        "> permanent eliminieren.",
        ">",
        "> Erinnerung:",
        "> Du weißt, was auf dem Spiel steht.",
      ]
    },

    conditionalFlag2: "kampfStil",
    textConditional2: {
      krieger: `Ich hatte mir antrainiert, Probleme zuerst körperlich zu lesen: Winkel, Haltung, Reichweite, Erschöpfung. Das half bei Armeen mehr, als mir lieb war.`,
      hacker: `Ich hatte mir angewöhnt, jede Struktur erst als fehlerhaften Code zu sehen. Auch Krieg. Vor allem Krieg. Das half. Es machte es nicht menschlicher.`,
      default: ``,
    },

    text2: `Was in diesem Jahr geschah, geschah nicht langsam.

Es geschah in Momenten.

Der Moment, in dem Kross zum ersten Mal nicht wie ein Feind wirkte.
Der Moment, in dem Aria Elenas Lied sang und ich begriff, wie alt diese Geschichte wirklich war.
Der Moment, in dem Mira mir einen Brief schrieb, mit einer schiefen Zeichnung von Rex und dem Satz:
»Ich trainiere jeden Tag. Wenn das vorbei ist, kämpfe ich neben dir. Das ist keine Frage.«

Ich hatte zurückgeschrieben:
»Das weiß ich.«

398 Tage wurden 300.
300 wurden 100.
Und plötzlich waren selbst 100 eine kleine Zahl.`,

    choices: [{ text: "→ Operation Reinigung", next: "a5k1_kriegsplan", narrativeFeedback: "Der Krieg hat einen Namen. Er beginnt in dreißig Tagen." }]
  },

  a5k1_kriegsplan: {
    act: "AKT V",
    chapter: "Kapitel 31 — War.Init()",
    title: "Operation Reinigung",
    scene: "Verbotener Turm — 398 Tage bis zum Update",
    bg: "night",
    music: "theme_void_terminal",

    conditionalFlag: "heldenErsterKontakt",
    textConditional: {
      akira: `Akira war der Erste gewesen, den ich damals angesprochen hatte. Jetzt war er auch der Erste, der das Schweigen im Raum nicht aushielt. »Dann verhindern wir das eben«, sagte er. Als wäre Sturheit eine Militärdoktrin.`,
      emma: `Emma war die Erste gewesen, die mich intellektuell ernst genommen hatte. Natürlich hatte sie den Bericht schon zweimal gelesen und drei Schwachstellen im Plan des Gegners markiert, bevor ich den Tisch überhaupt freiräumte.`,
      dmitri: `Dmitri sagte zuerst nichts. Er war der Erste gewesen, bei dem ich gelernt hatte, dass Schweigen nicht Leere ist. Als er schließlich sprach, fragte er nur: »Wen retten wir zuerst?«`,
      yuki: `Yuki war die Erste gewesen, bei der ich nicht Strategie, sondern Verletzlichkeit gesehen hatte. Sie fragte nicht nach Sieg. Sie fragte: »Wie viele Kinder sterben, wenn wir zu langsam sind?«`,
      default: ``,
    },

    text: `Der Krieg begann nicht mit einem Schlachtruf.

Er begann mit einem Brief.

Veyras Informantennetz hatte ihn über drei tote Briefkästen und einen Bäckerjungen geliefert, der nicht wusste, dass er Teil einer historischen Lieferkette war.

Operation Reinigung.
Beginn in 30 Tagen.
Ziel: Präventivschlag gegen Drak'Moor.

Ich las den Bericht dreimal.

Dann breitete ich die Karte aus.

»Wenn Operation Reinigung stattfindet«, sagte ich, »sterben Zehntausende. Lilithias Friedensangebot fällt. Das Imperium bekommt seinen Krieg. Und Mordecai bekommt genau das, was er braucht: einen Ausnahmezustand, in dem niemand mehr über das Update nachdenkt.«

Veyra verschränkte die Arme. »Dreißig Tage.«

Gorrick knurrte. »Nicht viel.«

»Nein«, sagte ich.
»Aber genug. Wenn wir aufhören so zu tun, als könnten wir alles gleichzeitig retten.«`,

    text2: `Stille.

Das war der eigentliche Wendepunkt.

Nicht der Plan.
Die Erkenntnis.

Wir konnten nicht jede Front maximal absichern.
Nicht mit einer Handvoll Nullen, vier Helden, ein paar Verbündeten und einem Drachen, der trotz allem immer noch nur ein Drache war und keine Armee.

Tertius hatte es später härter formuliert:
»Wenn ihr alles halten wollt, verliert ihr alles.«

Also mussten wir priorisieren.
Nicht ideal.
Nicht gerecht.
Echt.`,

    systemBox: {
      title: "KRIEGSRAT — FRAKTIONS-PRIORITÄT",
      lines: [
        "> Du kannst EINE Hauptfront voll absichern",
        ">",
        "> 1. Rat / Kirche / Hauptstadt",
        "> 2. Dämonenfront / Drak'Moor",
        "> 3. Zivilkorridor / Dörfer / Flüchtlinge",
        ">",
        "> Konsequenz:",
        "> Nicht priorisierte Fronten bleiben verwundbar",
        ">",
        "> Diese Wahl hat langfristige Folgen.",
      ]
    },

    choices: [
      {
        text: "A) POLITISCH — Celeste, Kross und der Rat zuerst.",
        desc: "[SC] Kirchen- und Ratsfront wird stabil. Dämonen vertrauen dir weniger. Zivilverluste steigen.",
        next: "a5k2_sera_varkos",
        alignEffect: { ordnung: 2 },
        flagEffect: {
          kriegsPrioritaet: "politisch",
          fraktionExklusivitaet: "kirche",
          kirchenfrontGestuetzt: true,
          daemonenAllianzBelastet: true,
          zivilkorridorBelastet: true
        },
        narrativeFeedback: "Celeste nickt kaum sichtbar. Lilithia sagt nichts. Gerade das ist die Antwort.",
      },
      {
        text: "B) DIPLOMATISCH — Lilithia und Varkos zuerst.",
        desc: "[SC] Dämonenallianz wird maximal stark. Hauptstadt destabilisiert sich weiter. Yuki und die Helden werden politisch exponierter.",
        next: "a5k2_sera_varkos",
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: {
          kriegsPrioritaet: "diplomatisch",
          fraktionExklusivitaet: "daemonen",
          daemonenfrontGestuetzt: true,
          kirchenSchismaGeschwaecht: true,
          zivilkorridorBelastet: true
        },
        narrativeFeedback: "Lilithia senkt den Kopf einen Tick. Kein Lächeln. Aber die Spannung in ihren Schultern löst sich.",
      },
      {
        text: "C) ZIVILKORRIDOR — Familien, Dörfer, Flüchtlinge zuerst.",
        desc: "[SC] Menschlichste Wahl. Politisch teuer. Militärisch brutal. Finn und die äußeren Linien werden später härter getroffen.",
        next: "a5k2_sera_varkos",
        alignEffect: { licht: 2 },
        flagEffect: {
          kriegsPrioritaet: "zivil",
          fraktionExklusivitaet: "zivil",
          zivilkorridorGestuetzt: true,
          kirchenSchismaGeschwaecht: true,
          daemonenAllianzBelastet: true
        },
        narrativeFeedback: "Elena schließt kurz die Augen. Akira sieht aus, als wolle er dir widersprechen und dir gleichzeitig danken.",
      },
    ]
  },

  // ════ KAPITEL 32: CONFRONT.FATHER() ════════════════════════════════════

  a5k2_sera_varkos: {
    act: "AKT V",
    chapter: "Kapitel 32 — Confront.Father()",
    title: "Sera und Varkos",
    scene: "Altes Schlachtfeld an der Grenze zu Drak'Moor",
    bg: "chaos",
    music: "theme_family",
    conditionalFlag: "seraVaterWahrheit",
    textConditional: {
      kaito_erzaehlt: `Sera wusste, wer er war. Das machte es nicht leichter. Es machte nur den Schock sauberer.`,
      spaeter: `Ich hatte die Wahrheit zu lange verschoben. Jetzt gab es keine elegante Version mehr davon.`,
      varkos_treffen: `Ich hatte versprochen, dass Varkos selbst sprechen würde. Das bedeutete: keine Schutzschicht durch Vorwissen. Nur Wahrheit.`,
      default: ``,
    },
    text: `Sera saß auf Rex' Rücken, als wir über die Grenze flogen. Das Schlachtfeld unter uns war alt genug, dass der Wind die Knochen schon fast als Landschaft behandelte.

General Varkos wartete bereits.

Zwei Meter zehn. Vier schwarze Hörner. Augen wie glühender Metallrand. Eine Präsenz, die in jeder anderen Geschichte das Ende einer Armee bedeutet hätte.

Und trotzdem sah ich, noch bevor er sprach, was zuerst da war:
Angst.

Nicht vor mir.
Vor Sera.`,

    text2: `»...Du bist gewachsen«, sagte Varkos.

Sera stand still.
Dann brach es aus ihr heraus.

»ALSO HAST DU MICH WEGGEWORFEN? Achtzehn Jahre lang dachte ich, ich sei so kaputt, dass nicht einmal meine eigene Familie mich wollte!«

Flammen rasten über das Gras.

Varkos trat nicht zurück.

»JA!«, brüllte er. »Ich habe dich weggegeben! Und es war der schlimmste Tag meines Lebens! Wenn ich dich behalten hätte, wärst du tot gewesen!«

Seine Stimme brach.
Der Kriegsherr ging auf die Knie.

»Ich habe dich verloren, damit du leben konntest.«

Seras Feuer starb abrupt.

Sie ging zu ihm.
Schlug ihm mit der Faust ins Gesicht.

»Das ist für achtzehn Jahre.«

Dann legte sie die Hand zwischen seine Hörner.
Ganz vorsichtig.

»Und das ist dafür, dass du mich am Leben gelassen hast.«

Varkos weinte.`,

    choices: [
      {
        text: "A) »Und jetzt brauche ich Frieden. Öffentlich.«",
        desc: "[SC] Varkos bindet sich offen. Größte politische Wirkung.",
        next: "a5k3_tertius",
        affinityEffect: { varkos: 20, lilithia: 10, sera: 10 },
        alignEffect: { licht: 2 },
        flagEffect: { varkosErgebnis: "frieden_erklaerung", varkosVerteidigung: true },
        narrativeFeedback: "Varkos schaut erst Sera an, dann mich. »Für sie«, sagt er. Mehr braucht es nicht.",
      },
      {
        text: "B) »Ich brauche alles über den Void-Propheten und die Null-Zone.«",
        desc: "[SC] Mehr Wissen, weniger Symbolwirkung.",
        next: "a5k3_tertius",
        affinityEffect: { varkos: 15 },
        alignEffect: { ordnung: 2 },
        flagEffect: { varkosErgebnis: "prophet_info", varkosVerteidigung: true },
        wissenEffect: ["nullZoneExistenz"],
        narrativeFeedback: "Schuld macht Männer oft ehrlicher, als Diplomatie es je könnte.",
      },
      {
        text: "C) »Wenn das System fällt, brauche ich keinen Kriegsherrn. Ich brauche einen Beschützer.«",
        desc: "[SC] Redemption statt bloßer Nutzung.",
        next: "a5k3_tertius",
        affinityEffect: { varkos: 20, sera: 15 },
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: { varkosErgebnis: "beschuetzer", varkosVerteidigung: true },
        narrativeFeedback: "Varkos antwortet nicht. Sera tut es für ihn: »Dann lernst du es.«",
      },
      {
        text: "D) »Sera... ich habe dich früher angelogen.«",
        desc: "[SC] Nur bei offener Lüge. Ehrlichkeit vor dem Ende.",
        requires: { flag: { seraLuegeAusstehend: true } },
        next: "a5k3_tertius",
        affinityEffect: { sera: 25 },
        alignEffect: { licht: 2 },
        flagEffect: { seraLuegeAusstehend: false },
        narrativeFeedback: "Sera sieht mich lange an. Dann: »Ich weiß.« Pause. »Aber gut, dass du es trotzdem sagst.«",
      },
    ]
  },

  // ════ KAPITEL 33: DESCENT.FINAL() ══════════════════════════════════════

  a5k3_tertius: {
    act: "AKT V",
    chapter: "Kapitel 33 — Descent.Final()",
    title: "Tertius — Der schlafende Schmied",
    scene: "Irondeep-Labyrinth, Ebene 31–33",
    bg: "void",
    music: "theme_void_terminal",
    conditionalFlag: "finnNebenNull",
    textConditional: {
      true: `Finn ging neben mir. Nicht hinter mir. Nicht mehr.`,
      default: ``,
    },
    text: `Die dritte Expedition nach Irondeep war keine Erkundung mehr.
Sie war Einbruch in ein Gewissen.

Finn kam mit.
Natürlich.

»Bester. Freund. Für. Immer«, sagte er, als wäre das ein juristisch bindendes Dokument.
»Finn, das ist Ebene 31.«
»Ja.«
»Das ist kein Argument.«
»Ich weiß.«

Dagegen kam man schlecht an.`,

    text2: `Ebene 33 war keine Dungeonebene.
Sie war eine Werkstatt.

Tertius wartete dort, wo wir ihn zurückgelassen hatten — zwischen Amboss, Blaupausen und Weltarchitektur.

Ich zeigte ihm den Plan.
Nicht die Strategie der Oberflächenfronten.
Die Idee.

Optionales System.
Wahl.
Keine geborenen Feinde.
Keine verpflichtenden Klassen.
Kein Update als Faust, sondern als Frage.

Tertius hörte zu.
Lange.

Dann sagte er:
»Es könnte funktionieren.«

Niemand im Raum atmete die nächsten zwei Sekunden richtig.`,

    text3: `Dann wurde seine Stimme härter.

»Aber nur, wenn ihr endlich akzeptiert, was ihr bisher verdrängt.«

Ich sah ihn an.
»Was?«

»Dass ihr nicht alle Fronten halten könnt.
Nicht gleichzeitig.
Nicht mit dem Rewrite im Kern und dem Krieg an der Oberfläche.
Jemand wird ohne euch auskommen müssen.
Vielleicht zu teuer.«

Finn hörte auf zu grinsen.

Tertius legte die Hand auf die Blaupause des Kerns.
»Ab jetzt kostet jede richtige Entscheidung jemanden.«

Er sah mich direkt an.

»Das ist keine Warnung, Null.
Das ist Mathematik.«`,

    systemBox: {
      title: "VOID-TERMINAL — TERTIUS PROGNOSTIK",
      lines: [
        "> Rewrite-Kernteam muss klein bleiben",
        ">",
        "> Oberflächenfronten können nicht alle",
        "> maximal stabilisiert werden",
        ">",
        "> Verlustwahrscheinlichkeit im Endgame:",
        "> NICHT VERMEIDBAR",
        ">",
        "> Hinweis:",
        "> Bindung reduziert Schmerz nicht",
        "> Sie macht ihn nur bedeutungsvoll",
      ]
    },

    choices: [{ text: "→ Yukis Timer", next: "a5k4_yuki", narrativeFeedback: "Yuki sieht schlechter aus. Du siehst es sofort." }],
    affinityEffect: { tertius: 15, finn: 10 },
    wissenEffect: ["tertiusWarntVorUnvermeidbaremVerlust"]
  },

  // ════ KAPITEL 34: SHIELD.BREAK() ═══════════════════════════════════════

  a5k4_yuki: {
    act: "AKT V",
    chapter: "Kapitel 34 — Shield.Break()",
    title: "Yukis Timer",
    scene: "Grenzfestung Eiswall — 11 Monate bis zum Update",
    bg: "night",
    music: "theme_elena_song",
    text: `Sie sah schlechter aus.

Nicht dramatisch schlechter. Keine Theatralik. Nur diese langsame, ehrliche Form von Verblassen, die einen Menschen aussehen lässt, als würde die Welt ihn vorsichtig ausradieren, um möglichst wenig Lärm dabei zu machen.

Dünner.
Blasser.
Mehr graue Strähnen im Haar.

Der Countdown über ihrem Kopf lief weiter.

Yuki bemerkte, dass ich hinsah.
»Du siehst mich an wie ein Problem, das gelöst werden muss.«

»Du bist kein Problem«, sagte ich.
»Du bist mein Freund.«

Sie lachte kurz.
»Das ist das Freundlichste, was du je zu mir gesagt hast.«

»Ich bin kein besonders freundlicher Mensch.«
»Nein«, sagte sie. »Deshalb glaube ich dir.«`,

    text2: `Ich erklärte ihr, was ich tun konnte.

Nicht den Helden-Code ganz retten.
Noch nicht.
Dafür brauchten wir den Kern.

Aber ich konnte den Drain umlenken.
Weg von ihr.
Zu mir.
Zu dem Zwischenraum, den mein Körper besser überlebte als ihrer.

Yuki hörte ruhig zu.
Zu ruhig.

»Wenn es schiefgeht«, fragte sie, »stirbst du daran?«
»Wahrscheinlich nicht.«
»Wahrscheinlich.«
»Es könnte wehtun.«

Yuki nickte.
Einmal.

»Wann?«

»Jetzt«, sagte ich.
»Wenn du bereit bist.«`,

    choices: [
      {
        text: "A) »Weil ich es versprochen habe.«",
        desc: "[AF+Yuki] Klarer, gerader Pfad.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Yuki sieht mich lange an. Dann: »Gut. Dann halte dein Versprechen.«",
      },
      {
        text: "B) »Weil du mir den Hasen gegeben hast.«",
        desc: "[AF+Yuki MAX] Tiefster persönlicher Bond.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 30 },
        flagEffect: { yukiRomanceVertieft: true },
        narrativeFeedback: "Yuki sieht erst den Anhänger, dann mich an. »...Idiot«, sagt sie, und es klingt wie Zärtlichkeit mit Frostkante.",
      },
      {
        text: "C) »Weil die Welt dich braucht. Nicht als Heldin. Als dich.«",
        desc: "[AF+Yuki] Mensch vor Funktion.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 25 },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Yuki sagt nichts. Aber ihre Hand findet meine für einen Herzschlag.",
      },
      {
        text: "D) »Weil du dasselbe für mich tun würdest.«",
        desc: "[AF+Yuki] Gegenseitigkeit statt Märtyrertum.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 20 },
        narrativeFeedback: "»Ja«, sagt Yuki sofort. Es ist das klarste Wort dieses Abends.",
      },
    ]
  },

  a5k4_drain: {
    act: "AKT V",
    chapter: "Kapitel 34 — Shield.Break()",
    title: "Die Übertragung",
    scene: "Grenzfestung Eiswall",
    bg: "void",
    music: "theme_void_terminal",
    conditionalFlag: "yukiToken",
    textConditional: {
      hase: `Der kleine Hasen-Anhänger lag zwischen uns auf dem Boden. Yuki sah ihn einmal an. Danach zitterten ihre Hände nicht mehr.`,
      stein: `Dmitris halber Stein drückte gegen meine Tasche, während ich arbeitete. Gewicht half beim Fokus.`,
      default: ``,
    },
    text: `Es war keine Magie.
Es war keine Heilung.
Es war Umleitung.

Ich griff nicht ihre Lebenszeit an.
Ich griff die Leitungslogik an, die das System um ihren Heldencode herumgelegt hatte.

Yukis Lebensspanne floss durch das Muster wie Licht durch eine fehlerhafte Linse.
Ich bog die Linie.
Zu mir.
Zum Null-Raum zwischen Void und Regel.

Für einen Moment fühlte es sich an, als würde jemand nicht mein Blut, sondern meinen Platz in der Existenz anfassen.

Yuki schrie kurz auf.
Dann wurde es still.`,

    text2: `Farbe kehrte in ihre Wangen zurück.

Nicht vollständig.
Aber sichtbar.

»...Es ist leichter«, flüsterte sie. »Als hätte jemand ein Messer aus meinem Rücken gezogen.«

Sie sah mich an.
»Und du?«

Ich hätte lügen können.
Ich tat es nicht.

»Ich kann das tragen«, sagte ich.
»Aber nicht ewig.«

Das war genug Wahrheit für einen Abend.`,

    systemBox: {
      title: "VOID-TERMINAL — DRAIN-UMLENKUNG",
      lines: [
        "> STATUS: ERFOLGREICH",
        ">",
        "> YUKI:",
        "> Lebensspanne vorläufig stabilisiert",
        ">",
        "> TRÄGER:",
        "> Aether-Reserven: -15% permanent",
        "> Regeneration: -20%",
        ">",
        "> Hinweis:",
        "> Umlenkung bleibt aktiv bis zur",
        "> vollständigen Neuschreibung des Helden-Codes",
        ">",
        "> Restzeit bis kritischer Eskalation:",
        "> 11 Monate",
      ]
    },

    choices: [{ text: "→ Celeste", next: "a5k5_celeste", narrativeFeedback: "Drei Monate hat Veyra gebraucht. Jetzt ist der Weg offen." }],
    flagEffect: { yukiDrainUmgeleitet: true }
  },

  // ════ KAPITEL 35: CELESTE.FREE() ═══════════════════════════════════════

  a5k5_celeste: {
    act: "AKT V",
    chapter: "Kapitel 35 — Celeste.Free()",
    title: "Die Prinzessin im Käfig",
    scene: "Kaiserpalast, Aetheria Prime — 10 Monate bis zum Update",
    bg: "city",
    music: "theme_training",
    conditionalFlag: "fraktionExklusivitaet",
    textConditional: {
      daemonen: `Celestes Befreiung war möglich — aber nicht priorisiert gewesen. Das merkte man nicht an den Schlössern. Sondern daran, wie kalt der Hof inzwischen auf ihren Namen reagierte.`,
      kirche: `Der Weg in den Palast war ungewöhnlich sauber vorbereitet. Veyra hatte an dieser Front mehr Fäden, weil wir ihr mehr gegeben hatten.`,
      zivil: `Wir kamen zu Celeste später, als wir es in einer gerechteren Welt getan hätten. Sie sagte das nicht. Sie musste es nicht.`,
      default: ``,
    },
    text: `Veyra brauchte drei Monate, um mir einen Weg in den Palast zu öffnen.

Dreiundzwanzig Falschidentitäten.
Neun Informanten.
Ein Zugangspfad, der so langweilig war, dass ihn niemand ernsthaft kontrollierte.

Ich infiltrierte den Palast als Nachtwache.
Das System bestätigte jeden Schritt.
Der Palast vertraute Uniformen mehr als Personen.

Celestes Zimmer lag im Westflügel.
Vier Riegel.
Ein System-Siegel.
Zu viel Symbolik.`,

    text2: `Als ich die Tür öffnete, saß Celeste am Schreibtisch.

Nicht schlafend.
Nicht weinend.
Schreibend.

Sie blickte auf.
Und war nicht überrascht.

»Ich habe mich gefragt, wann«, sagte sie.

»Du wusstest, dass jemand kommt?«
»Veyras Nachricht im Kuchencode war nicht subtil genug, um sie zu übersehen, wenn man monatelang nichts anderes zu tun hat als zu lesen.«

Sie stand auf und nahm eine gepackte Tasche vom Tisch.
»Was ist da drin?«, fragte ich.
»Beweise«, sagte sie.
»Jede Anweisung, die Mordecai in meinem Namen gegeben hat. Wenn ich schon eingesperrt werde, dann nicht unproduktiv.«`,

    text3: `Wir gingen nicht schleichend.
Wir gingen königlich.

Celeste verließ den Palast mit der Haltung einer Frau, die durch ihr eigenes Haus geht. Das war klüger als jede Fluchtpose.

Veyra wartete im Innenhof in einer Kurieruniform.
»Zehn Minuten«, sagte sie.
»Das ist spät.«

Celeste bestieg das Pferd, als wäre alles hier nur eine besonders lästige Unterbrechung ihres Tagesplans.
»Habt ihr einen Plan?« fragte sie.

Ich schwieg einen Tick zu lange.
Veyra sagte:
»Einen ambitionierten.«

Celeste seufzte.
»Natürlich habe ich mich von Improvisierenden retten lassen.«`,

    choices: [
      {
        text: "A) »Du bist mutig. Für eine Prinzessin.«",
        desc: "[AF+Celeste] Reibung mit Respekt.",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 15 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Celeste sieht mich trocken an. »Und du bist erstaunlich grob für einen Retter.«",
      },
      {
        text: "B) »Dein Zeitweber-Skill — wie weit reicht er in Kampfsituationen?«",
        desc: "[AF+Celeste] Funktion vor Etikette.",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 20 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Celeste blinzelt. Dann lächelt sie schmal. »Drei bis fünf Sekunden. Das ist die erste sinnvolle Frage des Abends.«",
      },
      {
        text: "C) »Vier Monate Beweise sammeln. Du hast das von Anfang an geplant.«",
        desc: "[AF+Celeste] Höchster Respekt.",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 25 },
        alignEffect: { ordnung: 1, licht: 1 },
        narrativeFeedback: "Celeste sieht nach vorne. »Mordecai hat mir Zeit gegeben, weil er dachte, er nimmt sie mir.«",
      },
    ]
  },

  // ════ KAPITEL 36: COUNCIL.OVERRIDE() ════════════════════════════════════

  a5k6_kaiserrat: {
    act: "AKT V",
    chapter: "Kapitel 36 — Council.Override()",
    title: "Der Thronsaal",
    scene: "Kaiserpalast — Sitzung des Hohen Rats",
    bg: "city",
    music: "theme_family",
    conditionalFlag: "mordecaiWissen",
    textConditional: {
      septima: `Als später die goldene Verbindung sichtbar wurde, flüsterte Mordecai ein einziges Wort: »Septima.« Das klang nicht nach Erkenntnis. Eher nach etwas, das er seit Jahren unbewusst mit sich herumgetragen hatte.`,
      update: `Als später die goldene Verbindung sichtbar wurde, zeigte Mordecai keine Überraschung — nur Erschöpfung. Das war schlimmer.`,
      nichts: `Mordecai betrat den Raum mit der Ruhe eines Mannes, der noch glaubte, die Wahrheit sei eine Frage von Zugriffsrechten.`,
      default: ``,
    },
    text: `Celeste trat in den Thronsaal, als gehöre ihr der Raum.

Formal gehörte er ihr tatsächlich näher als fast allen anderen darin.

Mordecai trat einen halben Schritt vor.
»Prinzessin. Sie stehen unter—«
»Unter dem Schutz der Krone«, unterbrach Celeste ihn kalt. »Und im Besitz von Dokumenten, die diesen Rat interessieren werden.«

Die Beweise gingen von Hand zu Hand.

Emma lieferte Analyse.
Veyra die Beschaffung.
Celeste die Legitimation.

Und ich trat aus einer Nische, in der die Architektur mich lange genug übersehen hatte.

Gorricks Aether-Projektor summte.
Dann platzte Mordecais Wahrheit in den Raum.`,

    text2: `Über dem Rat erschien Mordecais Systemstruktur.
Und die goldene Verbindung hinaus in etwas darüber.

»Das«, sagte ich, »ist kein göttlicher Segen. Das ist ein Kommunikationskanal. Zu Secunda. Einer Architektin.«

Stille.

Kaiser Valdric III. stand langsam auf.
Er sah nicht aus wie ein Held. Eher wie ein Mann, der gerade erst begreift, in welchem Haus er wirklich lebt.

»Operation Reinigung«, sagte er, »wird hiermit ausgesetzt.«

Herzogin Valentine antwortete sofort:
»General Kross wird das nicht akzeptieren.«`,

    choices: [
      {
        text: "A) »Der Rat urteilt. Ich bin nicht sein Richter.«",
        desc: "[SC] Institution statt persönlicher Vergeltung.",
        next: "a5k7_kross",
        affinityEffect: { celeste: 10 },
        alignEffect: { ordnung: 2 },
        flagEffect: { mordecaiSchicksal: "verhaftet" },
        narrativeFeedback: "Mordecai hatte vielleicht Wut erwartet. Verfahren ist schlimmer.",
      },
      {
        text: "B) »Er hat geglaubt, das Richtige zu tun. Das ändert nichts — und alles.«",
        desc: "[SC] Die unmögliche Mitte.",
        next: "a5k7_kross",
        affinityEffect: { mordecai: 20, celeste: 10 },
        alignEffect: { licht: 2 },
        flagEffect: { mordecaiSchicksal: "barmherzig", mordecaiRiss: true },
        narrativeFeedback: "Im Rat wird gemurmelt. Nicht aus Mitgefühl. Aus Ungewohntheit.",
      },
      {
        text: "C) »Er tritt zurück. Heute. Still.«",
        desc: "[SC] Politischer Pfad. Kein Heilungsversuch.",
        next: "a5k7_kross",
        affinityEffect: { celeste: 5 },
        alignEffect: { schatten: 2, verborgenheit: 1 },
        flagEffect: { mordecaiSchicksal: "politisch" },
        narrativeFeedback: "Mordecai akzeptiert den Unterschied zwischen Vergebung und Nutzbarkeit schneller, als ihm guttut.",
      },
      {
        text: "D) »Mordecai. Was hat Secunda Ihnen wirklich versprochen?«",
        desc: "[SC] Redemption-Pfad vertiefen.",
        requires: { flag: { mordecaiRedemptionMoeglich: true } },
        next: "a5k7_kross",
        affinityEffect: { mordecai: 25 },
        alignEffect: { licht: 2 },
        flagEffect: { mordecaiSchicksal: "redemption", mordecaiRiss: true },
        narrativeFeedback: "Der ganze Saal wird still. Jemandem zuzuhören ist gefährlicher, als ihn zu verurteilen.",
      },
    ]
  },

  // ════ KAPITEL 37: BOSS.KROSS() ══════════════════════════════════════════

  a5k7_kross: {
    act: "AKT V",
    chapter: "Kapitel 37 — Boss.Kross()",
    title: "Die Eiserne Faust",
    scene: "Kreuzweg — 8 Monate bis zum Update",
    bg: "chaos",
    music: "theme_training",
    conditionalFlag: "borisVersprechen",
    textConditional: {
      true: `Boris' Ladenlicht brannte noch, als wir in die Stadt ritten. Ich hatte versprochen zurückzukommen. Irgendwo in diesem Licht lag die Art Vertrauen, für die man Welten rettet.`,
      default: ``,
    },
    text: `Kross ignorierte den kaiserlichen Befehl.

PURISTEN BEI KREUZWEG.
ZIEL: ASHFORD-FAMILIE.

Die Nachricht war kurz genug, um schlimmer zu sein als jede Ausschmückung.

Wir ritten durch die Nacht.

Als wir ankamen, hatten zwanzig Puristen das Haus umstellt.
Elena im Türrahmen.
Roland mit gezogener Klinge.
Mira mit einer Lanze.
Und Sera auf einem Dach gegenüber, wo sie natürlich längst gewesen war.`,

    text2: `Die Befreiung dauerte sechs Minuten.

Rex aus der Luft.
Sera aus dem Westen.
Finn aus Norden.
Ich im Osten.
Roland in der Mitte.

Als alles vorbei war, lief Elena zuerst zu mir.
Nicht zu Roland.
Zu mir.

»KAITO ASHFORD!«

Dann umarmte sie mich so fest, dass Schmerz wieder Familiensemantik bekam.

Roland kam danach.
Sah mich an.
Dann:
»Ich bin stolz auf dich.«`,

    text3: `Dann trat Kross vor.

Level 81.
Rang S.
Disziplin bis in die Knochen.

»Eisenhardt«, sagte er.

Rolands Antwort war nur:
»Kross.«

Nicht Hass.
Etwas Älteres.`,

    choices: [
      {
        text: "A) Rolands Fluch JETZT brechen — und Kross zurück in die Wahrheit holen.",
        desc: "[SC] Größter emotionaler Umschwung. Höchste Veränderung.",
        next: "a5k8_prophet",
        affinityEffect: { roland: 40, kross: 20 },
        alignEffect: { licht: 2 },
        flagEffect: { rolandFluchGebrochen: true, krossSchicksal: "redemption" },
        narrativeFeedback: "Roland steht zum ersten Mal ohne Kette. Kross sieht, was er einem Leben genommen hatte. Und was gerade zurückkehrt.",
      },
      {
        text: "B) Erst Kross brechen, später Roland heilen.",
        desc: "[SC] Vorsichtiger, kontrollierter. Kross geht ins Exil.",
        next: "a5k7_roland_fluch",
        affinityEffect: { roland: 20 },
        alignEffect: { ordnung: 1 },
        flagEffect: { rolandFluchGebrochen: false, krossSchicksal: "exil" },
        narrativeFeedback: "Roland vergibt. Kross nicht sich selbst. Das reicht für heute.",
      },
      {
        text: "C) Kross als Berater zwingen — seine Schuld wird Funktion.",
        desc: "[SC] Kältester Pfad. Strategisch extrem stark.",
        next: "a5k8_prophet",
        affinityEffect: { roland: 15, kross: 10 },
        alignEffect: { schatten: 2, ordnung: 1 },
        flagEffect: { rolandFluchGebrochen: false, krossSchicksal: "berater" },
        narrativeFeedback: "Es ist keine Vergebung. Aber vielleicht etwas, das später nützlich genug ist, um fast wie Sinn zu wirken.",
      },
    ]
  },

  a5k7_roland_fluch: {
    act: "AKT V",
    chapter: "Kapitel 37 — Curse.Break()",
    title: "Level 34",
    scene: "Kreuzweg — Nacht nach dem Kampf",
    bg: "night",
    music: "theme_family",
    text: `Kross kniete vor Roland.

»Ich habe den Befehl gegeben«, sagte er. »Den Fluch. Aus Angst.«

Roland stand still da und hörte es sich an, als hätte er zwanzig Jahre auf genau diesen Satz gewartet und ihn gleichzeitig nie mehr hören wollen.

»Ich kann es rückgängig machen«, sagte Kross.
»Wenn du willst.«

Roland sah auf seine Hände.
Dann sagte er:
»Ja.«`,

    systemBox: {
      title: "VOID-TERMINAL — STATUS UPDATE",
      lines: [
        "> ROLAND ASHFORD",
        "> Fluchstatus: AUFGEHOBEN",
        ">",
        "> Aktuelles Level: 34",
        "> Progression: WIEDER AKTIV",
        "> Potenzial: offen",
      ]
    },

    text2: `Als der Fluch fiel, geschah nichts Großes.
Kein Himmel.
Kein Donner.
Keine Musik.

Roland stand nur gerade.

»Wie fühlt es sich an?«, fragte ich.

Er dachte nach.
Dann:
»Leicht.«`,

    choices: [{ text: "→ Martin Ashvale", next: "a5k8_prophet", narrativeFeedback: "Der Void-Prophet schreibt ins Terminal. Direkt. Von außen." }],
    flagEffect: { rolandFluchGebrochen: true },
    affinityEffect: { roland: 30, kross: 15 }
  },

  // ════ KAPITEL 38: PROPHET.VOID() ════════════════════════════════════════

  a5k8_prophet: {
    act: "AKT V",
    chapter: "Kapitel 38 — Prophet.Void()",
    title: "Martin Ashvale",
    scene: "Ruinen südlich von Voidspire",
    bg: "void",
    music: "theme_mystery",
    text: `Der Void-Prophet kontaktierte mein Terminal von außen.

Nicht über das System.
Nicht über Aether.
Direkt darunter.

»Hallo, Nachfolger«, schrieb er.
»Triff mich. Allein.«

Die Ruinen lagen halb in der Realität, halb daneben. Ein schlechter Ort für Vertrauen. Ein guter Ort für Wahrheiten, die niemand hören wollte.

Er wartete bereits dort.

Unter dem zerrissenen Mantel war sein Körper nicht stabil. Haut zwischen Fleisch und Code. Konturen, die manchmal zu spät entschieden, ob sie existierten.

»Mein Name war Martin«, sagte die dreifache Stimme.
»Martin Ashvale. Vor fünfhundert Jahren. Ich war Bibliothekar.«`,

    text2: `Er wollte Zerstörung.

Nicht aus Sadismus.
Aus Erschöpfung.

Fünfhundert Jahre Void hatten aus seinem Wunsch nach Freiheit eine Form von absoluter Gewalt gemacht: Wenn kein Käfig mehr existiert, kann ihn auch niemand mehr benutzen.

Ich verstand ihn.
Das machte ihn gefährlicher.

»Meine Mutter hat ein Level«, sagte ich. »Meine Schwester. Meine Freunde. Du willst nicht ein System töten. Du willst eine Welt verbrennen, in der noch Menschen leben.«

Martin schwankte.
Nicht körperlich.
Moralisch.`,

    choices: [
      {
        text: "A) »Es gibt einen dritten Weg: umschreiben, nicht zerstören.«",
        desc: "[SC] Hoffnungspfad.",
        next: "a5k9_convergence",
        alignEffect: { licht: 2 },
        flagEffect: { prophetErgebnis: "umschreiben" },
        narrativeFeedback: "Hoffnung trifft ihn härter als Drohungen es je könnten.",
      },
      {
        text: "B) »Du bist nicht mein Feind. Du bist mein Vorgänger.«",
        desc: "[SC] Martin bleibt Wildcard.",
        next: "a5k9_convergence",
        alignEffect: { ordnung: 1, schatten: 1 },
        flagEffect: { prophetErgebnis: "wildcard" },
        narrativeFeedback: "Martin lacht bitter. »Dann pass auf, nicht zu mir zu werden.«",
      },
      {
        text: "C) »Wenn du mir im Weg stehst, heile ich dich trotzdem.«",
        desc: "[SC] Verstörend menschlicher Pfad.",
        next: "a5k9_convergence",
        alignEffect: { licht: 2 },
        flagEffect: { prophetErgebnis: "heilung_moeglich" },
        narrativeFeedback: "Erstarrung. Fünfhundert Jahre und niemand bot ihm Heilung an. Nicht einmal er selbst.",
      },
      {
        text: "D) KAMPF — Er lässt dir keine Wahl.",
        desc: "[SC] Bosskampf. Stabilisierung als Gewaltform.",
        next: "a5k8_prophet_kampf",
        alignEffect: { schatten: 3, chaos: 2 },
        flagEffect: { prophetErgebnis: "besiegt_befreit" },
        narrativeFeedback: "Er kämpft nicht gegen dich. Er kämpft gegen jedes Gitter, das je über ihn gezogen wurde. Du bist nur zu nah dran.",
      },
    ]
  },

  a5k8_prophet_kampf: {
    act: "AKT V",
    chapter: "Kapitel 38 — Prophet.Void()",
    title: "500 Jahre",
    scene: "Ruinen südlich von Voidspire",
    bg: "void",
    music: "theme_void_terminal",
    text: `Martin griff nicht mich an.
Er griff das System an.

Immer.

Und weil das System überall war, traf er alles.

Also griff ich nicht zurück.
Ich stabilisierte.

[Code.Modify] auf seine Existenzstruktur.
Nicht brechen.
Zusammenhalten.

Es war, als würde ich Wasser zwingen, eine Form zu akzeptieren, die es vor fünf Jahrhunderten verloren hatte.`,

    text2: `Er schrie.
Nicht vor Schmerz.
Vor Erleichterung.

Drei Minuten lang hielt ich ihn zusammen.

Dann fiel Martin auf die Knie.
Und plötzlich lag vor mir kein Prophet mehr.
Nur ein junger Mann, der aussah, als hätte Schlaf ein halbes Jahrtausend Verspätung.`,

    choices: [{ text: "→ Konvergenz", next: "a5k9_convergence", narrativeFeedback: "Alle Puzzleteile liegen endlich auf dem Tisch." }],
    affinityEffect: { martin: 15 }
  },

  // ════ KAPITEL 39: CONVERGENCE() ═════════════════════════════════════════

  a5k9_convergence: {
    act: "AKT V",
    chapter: "Kapitel 39 — Convergence()",
    title: "Yukis Idee",
    scene: "Verbotener Turm — 3 Monate bis zum Update",
    bg: "night",
    music: "theme_family",
    conditionalFlag: "varkosErgebnis",
    textConditional: {
      frieden_erklaerung: `Lilithia legte Varkos' unterzeichnete Friedenserklärung auf den Tisch. Niemand im Raum unterschätzte, wie viel Blut in einer Unterschrift stecken konnte.`,
      prophet_info: `Ich hatte die Koordinaten des Propheten im Kopf. Nicht jede Information musste ausgesprochen werden, um den Raum schwerer zu machen.`,
      beschuetzer: `Varkos hatte keinen Frieden versprochen. Aber Schutz. Vielleicht war das die erwachsenere Form von Hoffnung.`,
      default: ``,
    },
    text: `Drei Monate.

Alle Puzzleteile lagen endlich sichtbar auf dem Tisch.
Die Kirche.
Die Helden.
Die Dämonen.
Der Rat.
Tertius.
Der Prophet.
Die Nullen.

Und die wichtigste Frage von allen:
Was schreiben wir stattdessen?

Aria sagte:
»Eine Welt ganz ohne System würde viele töten, die längst auf seine Krücken angewiesen sind.«

Gorrick knurrte:
»Und wenn nur du die neuen Regeln schreibst, ersetzt du einen Käfig bloß durch einen anderen.«

Niemand widersprach.

Dann sprach Yuki.`,

    text2: `»Was wäre«, sagte sie langsam, »wenn das System fragt, statt zu befehlen?«

Stille.

»Wenn es Klassen anbietet, statt sie aufzuzwingen.
Wenn es Level als Werkzeug gibt, nicht als Wert.
Wenn es Nein akzeptiert.«

Ich sah Tertius an.
Tertius sah mich an.
Und irgendwo im Raum änderte sich die Temperatur von Unmöglichkeit zu Entwurf.

Optionales System.

Nicht Rückkehr zur alten Welt.
Nicht bloße Korrektur.
Ein neues Verhältnis.`,

    systemBox: {
      title: "OPERATION: SYSTEM.REWRITE()",
      lines: [
        "> ZIELMODELL: OPTIONALES SYSTEM",
        ">",
        "> Klassen = Angebot",
        "> Level = Werkzeug",
        "> Fähigkeiten = Wahl",
        "> Rassenmarker = gelöscht",
        "> Zwang = entfernt",
        ">",
        "> TERTIUS-HINWEIS:",
        "> Rewrite erfolgreich",
        "> = Oberflächenfronten unvollständig geschützt",
        ">",
        "> Verlust im Endgame: wahrscheinlich",
      ]
    },

    text3: `»Noch nie«, sagte Tertius, »hat jemand das vorgeschlagen.«

»Weil noch nie jemand das System verstanden und an ihm gelitten hat«, sagte ich.
»Oder geliebt und gehasst gleichzeitig.«

Ich griff zum Stift.
Einem echten, lächerlich kleinen Stift auf einem viel zu großen Tisch.

Und begann, die neue Welt als Satz zu denken.`,

    choices: [
      {
        text: "→ Der letzte Abend",
        next: "a5k10_abschied",
        affinityEffect: { veyra: 10, gorrick: 10, ren: 10, aria: 10, yuki: 10 },
        wissenEffect: ["optionalesSystemKonzept"],
        narrativeFeedback: "Die Hoffnung im Raum fühlt sich nicht gut an. Nur notwendig. Das ist ehrlicher.",
      },
    ]
  },

  // ════ KAPITEL 40: LAUNCH.SEQUENCE() ════════════════════════════════════

  a5k10_abschied: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Der letzte Abend",
    scene: "Verbotener Turm — Nacht vor dem Endgame",
    bg: "night",
    music: "theme_family",

    conditionalFlag: "heldenErsterKontakt",
    textConditional: {
      akira: `Akira war der Erste gewesen, den ich an der Akademie angesprochen hatte. Es war passend, dass er auch jetzt nicht lange warten konnte, bevor er das Schweigen brach.`,
      emma: `Emma war die Erste gewesen. Natürlich war auch jetzt ihre Stille die am besten sortierte im ganzen Raum.`,
      dmitri: `Dmitri war der Erste gewesen, bei dem ich gelernt hatte, dass Hilfe oft ohne Einleitung beginnt. Er saß wie damals ruhig da und schälte diesmal keine Kartoffeln, sondern Zukunft.`,
      yuki: `Yuki war die Erste gewesen, der ich gesagt hatte, dass sie nicht kaputt war. Jetzt war sie diejenige, die am ruhigsten im Feuer sah, als gehöre die Antwort schon halb ihr.`,
      default: ``,
    },

    text: `Rex zog in der Mitte des Hofs einen Kreis aus blauem Feuer.
Nicht als Drohung.
Als Licht.

Darum saßen sie.
Gorrick.
Veyra.
Ren.
Aria.
Roland.
Elena.
Finn.
Sera.
Mira.
Und ich.

Elf Menschen und ein Drache.

Tertius' Satz hing noch über allem:
Nicht alle kommen unversehrt durch den Morgen.

Keiner sprach ihn aus.
Alle trugen ihn.`,

    conditionalFlag2: "akademiePfad",
    textConditional2: {
      krieger: `Vielleicht war es ironisch, dass der Junge, der sich einst als kleines Kriegstalent eingeschrieben hatte, jetzt am Vorabend eines wirklichen Krieges nicht mehr an Siege dachte, sondern nur an Verluste.`,
      magier: `Vielleicht war es passend, dass der Junge, der einst als Magietheoretiker durchgewunken worden war, nun vor einer Welt saß, die von einer Theorie der Freiheit zusammengehalten werden musste.`,
      stealth: `Vielleicht war es die reine Logik des Kosmos, dass der »Durchschnittliche« aus dem Prüfstein jetzt das Zentrum einer Geschichte war, in der Durchschnitt nie das Thema gewesen war.`,
      default: ``,
    },

    text2: `Gorrick hob einen Becher.
»Wenn die Welt morgen endet, dann wenigstens mit vernünftigem Bier.«

Niemand lachte so laut wie sonst.
Aber alle lachten.

Das machte es schlimmer.
Und schöner.

Ren sah auf seine Hände.
»Wenn alles gutgeht«, sagte er, »existiere ich dann richtig?«
»Ja«, sagte ich.
Ren nickte.
»Gut. Das wollte ich einmal hören.«

Yuki sah ins Feuer.
Nicht schwach.
Nicht stark.
Einfach wach.`,

    choices: [
      {
        text: "A) Diese Nacht ist für Sera.",
        requires: { affinity: { sera: 40 } },
        next: "a5k10_nacht_sera",
        affinityEffect: { sera: 20 },
        flagEffect: { finaleBeziehung: "sera" },
        narrativeFeedback: "Sera steht zuerst auf. Natürlich ohne zu fragen, ob du mitkommst. Natürlich erwartet sie trotzdem, dass du es tust.",
      },
      {
        text: "B) Diese Nacht ist für Yuki.",
        requires: { affinity: { yuki: 40 } },
        next: "a5k10_nacht_yuki",
        affinityEffect: { yuki: 20 },
        flagEffect: { finaleBeziehung: "yuki" },
        narrativeFeedback: "Yuki wartet. Das allein sagt genug.",
      },
      {
        text: "C) Diese Nacht ist für die Familie.",
        next: "a5k10_nacht_familie",
        affinityEffect: { elena: 15, roland: 15, mira: 15 },
        flagEffect: { finaleBeziehung: "familie" },
        narrativeFeedback: "Elena macht Platz neben sich. Als wäre der Rest der Welt nie groß genug gewesen, um dich dort nicht trotzdem haben zu wollen.",
      },
      {
        text: "D) Diese Nacht ist für die Nullen.",
        next: "a5k10_nacht_nullen",
        affinityEffect: { gorrick: 15, ren: 15, veyra: 15, rex: 10, aria: 10 },
        flagEffect: { finaleBeziehung: "nullen" },
        narrativeFeedback: "Gorrick klopft auf den leeren Platz neben sich. Das ist bei ihm dasselbe wie Zuneigung.",
      },
      {
        text: "E) Diese Nacht gehört dir allein.",
        next: "a5k10_nacht_allein",
        alignEffect: { schatten: 1, verborgenheit: 2 },
        flagEffect: { finaleBeziehung: "allein" },
        narrativeFeedback: "Niemand hält dich auf. Liebe, die Wahl lässt, ist manchmal die härteste Form von Liebe.",
      },
    ]
  },

  a5k10_nacht_sera: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Sera",
    scene: "Der alte Felsen am Fluss",
    bg: "night",
    music: "theme_family",
    text: `Der Felsen war noch da.

Natürlich war er noch da. Steine gehen nicht weg, nur weil Menschen älter, härter und müder werden.

Sera saß schon dort.
Natürlich.

Sie warf einen Stein, ohne mich anzusehen.
Er sprang viermal.

»Immer noch besser als du«, sagte sie.

»Ja.«

Ich setzte mich neben sie.`,

    text2: `Das Wasser bewegte sich leise.

»Kaito«, sagte Sera.
»Ja.«
»Wenn morgen jemand fehlt...«

Sie sprach den Satz nicht zu Ende.
Musste sie nicht.

Ich verstand ihn vollständig.

Wenn morgen jemand fehlt, dann ist alles danach wahr und trotzdem falsch.

»Dann merke ich es mir«, sagte ich.

Sera nickte.
Das war bei ihr fast schon ein Kuss.`,

    choices: [{ text: "→ Der Aufbruch", next: "a5k10_aufbruch", narrativeFeedback: "Irondeep. Letzte Chance umzukehren. Du kehrst nicht um." }]
  },

  a5k10_nacht_yuki: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Yuki",
    scene: "Dach des Verbotenen Turms",
    bg: "night",
    music: "theme_elena_song",
    text: `Kein Countdown.

Das war das Erste, was auffiel, wenn man neben Yuki stand: die Abwesenheit von etwas, das drei Jahre lang zu ihr gehört hatte wie ein zweiter Schatten.

»Komisch«, sagte sie. »Ich weiß nicht, ob ich mich schon daran gewöhnt habe, dass er weg ist.«

»Musst du auch nicht.«

Sie nickte.

Dann nahm sie den Hasen — oder die Steinhälfte — in die Hand und sah ihn lange an.

»Wenn morgen etwas passiert«, sagte sie, »will ich nicht, dass du mich auf einen guten Gedanken reduzierst.«

Ich sah sie an.
»Das würde ich nie.«

Yuki lächelte.
Sehr klein.
Sehr traurig.
Sehr lebendig.`,

    choices: [{ text: "→ Der Aufbruch", next: "a5k10_aufbruch", narrativeFeedback: "Irondeep. Letzte Chance umzukehren. Du kehrst nicht um." }]
  },

  a5k10_nacht_familie: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Familie",
    scene: "Lagerplatz der Verbündeten",
    bg: "night",
    music: "theme_family",
    text: `Elena sang.

Ich saß zwischen ihr und Roland wie ein Kind, das ich längst nicht mehr war und irgendwie doch noch immer blieb.

Mira war längst eingeschlafen, halb auf Rex gelehnt.
Roland schwieg lange.
Dann legte er die Hand auf meine Schulter.

»Egal was morgen passiert«, sagte Elena leise, »du warst nie unser Fehler.«

Es traf mich härter, als jede Klinge im ganzen verdammten Spiel es je geschafft hatte.

Nicht unser Fehler.

Vielleicht war das der Satz, auf den ich seit meiner Geburt gewartet hatte, ohne zu wissen, dass er fehlte.`,

    choices: [{ text: "→ Der Aufbruch", next: "a5k10_aufbruch", narrativeFeedback: "Irondeep. Letzte Chance umzukehren. Du kehrst nicht um." }]
  },

  a5k10_nacht_nullen: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Die Nullen",
    scene: "Keller des Verbotenen Turms",
    bg: "night",
    music: "theme_family",
    text: `Gorrick erzählte eine Geschichte über eine Rune, die ihm vor Jahren eine Schmiede halb gesprengt hatte.
Rex lachte mit Feuer.
Ren lächelte so offen, dass es beinahe wehtat.
Veyra vergaß für mehrere Minuten, ihr Gesicht zu kontrollieren.
Aria summte im Hintergrund.

Ich sah sie an und begriff etwas, das fast zu simpel für all diese Jahre wirkte:

Wir hatten uns nicht gefunden.
Wir hatten uns entschieden.`,

    choices: [{ text: "→ Der Aufbruch", next: "a5k10_aufbruch", narrativeFeedback: "Irondeep. Letzte Chance umzukehren. Du kehrst nicht um." }]
  },

  a5k10_nacht_allein: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Allein",
    scene: "Dach des Verbotenen Turms",
    bg: "void",
    music: "theme_void_terminal",
    text: `Ich nahm Gregors Tagebuch mit aufs Dach.

Seite 47.
Noch einmal.

Nicht weil ich etwas Neues erwartete.
Sondern weil manche Sätze vor dem Ende noch einmal Gewicht bekommen, das sie mitten im Leben nie tragen konnten.

Das Terminal öffnete sich von selbst.`,

    systemBox: {
      title: "VOID-TERMINAL — AUTOMATISCHE NACHRICHT",
      lines: [
        "> Zustellzeit: Wenn du sie brauchst",
        "> Von: S.",
        ">",
        "> Morgen wird schwer.",
        "> Das weißt du.",
        ">",
        "> Du bist nicht allein.",
        "> Du warst nie allein.",
      ]
    },

    text2: `Ich las die Nachricht zweimal.
Dann schloss ich das Terminal wieder.

Nicht alles, was hilft, muss groß sein.
Manchmal reichen sechs Zeilen und ein klarer Himmel.`,

    choices: [{ text: "→ Der Aufbruch", next: "a5k10_aufbruch", narrativeFeedback: "Irondeep. Letzte Chance umzukehren. Du kehrst nicht um." }]
  },

  a5k10_aufbruch: {
    act: "AKT V",
    chapter: "Kapitel 40 — Launch.Sequence()",
    title: "Dann geh",
    scene: "Eingang von Irondeep — erstes Morgenlicht",
    bg: "void",
    music: "theme_void_terminal",
    text: `Letztes Mondlicht.
Dann Dämmerung.

Ich stand am Eingang von Irondeep. Zum letzten Mal als jemand, der noch umkehren konnte.

Hinter mir:
Ren.
Rex.
Roland.
Sera.
Finn.
Und an der Oberfläche eine Welt, die bereits anfing zu kippen, weil Akira, Celeste und Lilithia genau das taten, was sie versprochen hatten.

Das Terminal zeigte:
14 Tage.`,

    systemBox: {
      title: "VOID-TERMINAL — FINALE PHASE",
      lines: [
        "> COUNTDOWN: 14 TAGE",
        ">",
        "> Oberflächenfronten aktiv:",
        "> • Akira — öffentlicher Bruch",
        "> • Celeste — Beweise im Umlauf",
        "> • Lilithia / Varkos — Grenzreaktion",
        ">",
        "> Warnung:",
        "> Nicht alle Linien werden halten",
        ">",
        "> Primäres Ziel:",
        "> SYSTEMKERN ERREICHEN",
      ]
    },

    text2: `Ich öffnete das Terminal ein letztes Mal und schrieb keinen Befehl, keinen Hack, keine Struktur.

Nur vier Worte:

WOFÜR.
NICHT WOGEGEN.

Gregors Satz.
Mein Satz.
Vielleicht der wichtigste Unterschied zwischen Zerstörung und Neuschreibung.

Dann stieg ich hinab.

»Septima«, sagte ich leise.
»Wenn du mich hören kannst...
ich bin bereit.«`,

    choices: [{ text: "→ AKT VI: System.Exit()", next: "a6k1_intro", narrativeFeedback: "Vierzehn Tage. Der Kern wartet." }]
  },
};