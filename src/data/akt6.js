// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT VI: SYSTEM.EXIT()
// Kapitel 41–46 + Epilog: Die 7 Enden
// Finale Phase, Alter: 18
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] STORY-CRITICAL → bestimmt Pfade, Verluste, Enden
// [AF] AFFINITY → 0–100 Beziehungswert
// [AL] ALIGNMENT → Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_VI = {

  // ════ KAPITEL 41: FINAL.DESCENT() ══════════════════════════════════════

  a6k1_intro: {
    act: "AKT VI",
    chapter: "Kapitel 41 — Final.Descent()",
    title: "Die letzten Ebenen",
    scene: "Irondeep-Labyrinth, Ebene 33–34 — 14 Tage bis zum Update",
    bg: "void",
    music: "theme_void_terminal",
    conditionalFlag: "fraktionExklusivitaet",
    textConditional: {
      daemonen: `Wir hatten die Dämonenfront priorisiert. Das war richtig gewesen — und teuer. Die Hauptstadt hielt nur mit Nägeln und Lügen. Und irgendwo an der Menschenfront hing Yuki an einer Linie, die ich nicht so fest gehalten hatte, wie ich es gekonnt hätte, wenn ich mich anders entschieden hätte.`,
      kirche: `Wir hatten das Schisma im Herzen des Reiches priorisiert. Der Rat stand. Celeste stand. Kross stand. Und dafür brannte die Ostlinie heller, als irgendjemand zugeben wollte. Sera war dort. Natürlich war Sera dort.`,
      zivil: `Wir hatten die Zivilkorridore priorisiert. Dörfer lebten. Kinder kamen durch. Und dafür standen Menschen mit zu wenig Hilfe an Linien, die mehr verdient hätten. Finn war einer von ihnen.`,
      default: ``,
    },
    text: `Tertius wartete dort, wo wir ihn zurückgelassen hatten — zwischen Amboss, Blaupausen und Architektur.

Er musterte das Team, das den letzten Abstieg antreten würde:
mich,
Ren,
Rex,
und alles, was von der Welt oben noch als Bindung an uns hing.

»Ihr seid zu wenige«, sagte er.

»Ich weiß.«

»Und zu viele zugleich.«

»Ich weiß auch das.«

Er nickte, als hätte er genau diese Antwort erwartet.

»Gut. Dann bist du bereit genug.«`,

    conditionalFlag2: "waechterAntwort",
    textConditional2: {
      persoenlich: `Der Wächter auf Ebene 30 hatte damals gesagt, mein Grund sei klein, aber wahr. Jetzt war mir klar, dass kleine Gründe leichter bluten.`,
      universal: `Der Wächter hatte gefragt, ob ich die Kraft hätte, einen großen Grund zu tragen. Jetzt wusste ich: Die eigentliche Frage war, wie viele Menschen darunter begraben werden.`,
      philosophisch: `Ich hatte einmal gesagt, ich wolle dem System Augen geben. Jetzt hoffte ich nur, dass Augen am Ende nicht bedeuteten, noch klarer sehen zu müssen, wer fehlt.`,
      pflicht: `Ich hatte einmal geantwortet, dass jemand es tun müsse. Vierzehn Tage vor dem Ende fühlte sich Pflicht nicht edel an. Nur schwer.`,
      default: ``,
    },

    text2: `Ebene 34 war der Spiegelraum.

Nicht Illusion.
Nicht Theater.
Nicht billige Psychologie.

Der Spiegelraum zeigte, was nicht verschwunden war, nur weil man zu beschäftigt gewesen war, es zu fühlen.

Roland sah sein Regiment.
Sera sah ein Dorf aus Feuer.
Ren sah sein gelöschtes Volk.
Ich sah mein altes Büro und das alte Ich darin — den Mann, der dachte, Funktion sei dasselbe wie Leben.

Das Bild zerbrach erst, als ich Miras Lachen hörte.

Nicht real.
Aber wahr.`,

    systemBox: {
      title: "VOID-TERMINAL — OBERFLÄCHENKOSTEN WERDEN FÄLLIG",
      lines: [
        "> Rewrite-Kernteam stabil",
        "> Oberflächenfronten instabil",
        ">",
        "> Nicht priorisierte Front zeigt kritische Belastung",
        ">",
        "> Je nach Vorentscheidung eskaliert jetzt:",
        "> • YUKI",
        "> • SERA",
        "> oder • FINN",
        ">",
        "> Empfehlung:",
        "> Entscheide schnell.",
        "> Es wird trotzdem weh tun.",
      ]
    },

    choices: [
      {
        text: "→ Die Linie, die reißt",
        requires: { flag: { fraktionExklusivitaet: "daemonen" } },
        next: "a6k2_descent_daemon",
        narrativeFeedback: "Die Verbindung zu Yuki flackert. Dann reißt sie — nicht vollständig. Aber genug.",
      },
      {
        text: "→ Die Linie, die reißt",
        requires: { flag: { fraktionExklusivitaet: "kirche" } },
        next: "a6k2_descent_church",
        narrativeFeedback: "Die Verbindung zu Sera flackert. Dann reißt sie — nicht vollständig. Aber genug.",
      },
      {
        text: "→ Die Linie, die reißt",
        requires: { flag: { fraktionExklusivitaet: "zivil" } },
        next: "a6k2_descent_civil",
        narrativeFeedback: "Die Verbindung zu Finn flackert. Dann reißt sie — nicht vollständig. Aber genug.",
      },
    ]
  },

  // ════ KAPITEL 42A: DIE KRISE — YUKI ════════════════════════════════════

  a6k2_descent_daemon: {
    act: "AKT VI",
    chapter: "Kapitel 42 — Sever.Thread()",
    title: "Die Linie, die reißt",
    scene: "Irondeep-Labyrinth, Ebene 35",
    bg: "void",
    music: "theme_void_terminal",
    text: `Der Riss kam nicht im Stein.
Er kam in mir.

Yukis Drain-Verbindung traf mich wie ein Schock aus Eis, Angst und zu viel Licht auf einmal.
Nicht körperlich zuerst.
Existentiell.

Das Terminal riss sich auf.`,

    systemBox: {
      title: "VOID-TERMINAL — KRISENMELDUNG",
      lines: [
        "> YUKI-LINIE KOLLABIERT",
        "> Ursache:",
        "> Menschenfront unterkritisch stabilisiert",
        "> Mana-Overflow überschreitet Grenzwert",
        ">",
        "> Prognose ohne Eingriff:",
        "> 11 Minuten bis vollständiger Burnout",
        ">",
        "> OPTIONEN:",
        "> A) Zusätzliche Umlenkung",
        "> B) Yuki vertrauen",
        "> C) Kurs halten",
      ]
    },

    text2: `Yukis Stimme kam nicht als Klang.
Sie kam als gefrorene Klarheit.

»Kaito«, sagte sie.
Nur mein Name.
Dann:
»Wenn du etwas tust, tu es schnell.«

Kein Flehen.
Keine Heldinnenpose.
Nur Wahrheit.`,

    choices: [
      {
        text: "A) DU RETTEST SIE — Zusätzliche Lebenslast auf dich. Jetzt.",
        desc: "[SC] Yuki überlebt sicher. Das Endgame wird schwerer und gefährlicher für dich.",
        next: "a6k3_nullzone",
        affinityEffect: { yuki: 20 },
        alignEffect: { licht: 2 },
        flagEffect: {
          yukiSchicksal: "gerettet",
          finalerVerlust: "keiner",
          kernRewriteErschwert: true,
          yukiGeheilt: true
        },
        narrativeFeedback: "Du ziehst den Schmerz zu dir, bevor du darüber nachdenkst, ob du ihn tragen kannst. Yuki schreit. Dann atmet sie. Du tust beides nicht sofort.",
      },
      {
        text: "B) VERTRAUE YUKI — Sie hält die Linie selbst.",
        requires: { flag: { yukiToken: "hase" } },
        desc: "[SC] Nur mit tiefster Bindung. Yuki überlebt — aber gezeichnet.",
        next: "a6k3_nullzone",
        affinityEffect: { yuki: 25 },
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: {
          yukiSchicksal: "selbst_gehalten",
          finalerVerlust: "keiner",
          yukiGezeichnet: true,
          yukiGeheilt: true
        },
        narrativeFeedback: "»Nein«, sagt Yuki. »Nicht diesmal.« Die Verbindung zittert — aber sie bricht nicht. Als sie loslässt, ist ein Streifen ihres Haares vollständig weiß.",
      },
      {
        text: "C) KURS HALTEN — Der Kern geht vor.",
        desc: "[SC] Yuki stirbt. Permanent.",
        next: "a6k3_nullzone",
        alignEffect: { schatten: 3, ordnung: 1 },
        flagEffect: {
          yukiSchicksal: "gestorben",
          finalerVerlust: "yuki"
        },
        narrativeFeedback: "Die Verbindung wird plötzlich ruhig. Zu ruhig. Das Letzte, was du fühlst, ist keine Angst. Es ist Erleichterung — nicht deine.",
      },
      {
        text: "D) VERTRAUE YUKI UND DMITRIS SCHWUR",
        requires: { flag: { yukiToken: "stein" } },
        desc: "[SC] Yuki überlebt über Bindung und Willen. Aber ihr Körper zahlt.",
        next: "a6k3_nullzone",
        affinityEffect: { yuki: 20, dmitri: 5 },
        alignEffect: { ordnung: 1, licht: 1 },
        flagEffect: {
          yukiSchicksal: "stein_gehalten",
          finalerVerlust: "keiner",
          yukiGezeichnet: true,
          yukiGeheilt: true
        },
        narrativeFeedback: "Dmitris Stein in deiner Tasche wird heiß. Irgendwo hält Yuki sich an etwas fest, das nicht physisch ist und deshalb nicht weniger real.",
      },
    ]
  },

  // ════ KAPITEL 42B: DIE KRISE — SERA ════════════════════════════════════

  a6k2_descent_church: {
    act: "AKT VI",
    chapter: "Kapitel 42 — Sever.Thread()",
    title: "Die Linie aus Feuer",
    scene: "Irondeep-Labyrinth, Ebene 35",
    bg: "void",
    music: "theme_void_terminal",
    text: `Der Riss kam als Hitze.

Nicht von Rex.
Nicht von mir.

Sera.

Ich wusste es noch vor der Meldung. Vielleicht, weil es manche Menschen gibt, deren Schmerz man irgendwann auf eine Art kennt, die über Kommunikation hinausgeht.`,

    systemBox: {
      title: "VOID-TERMINAL — KRISENMELDUNG",
      lines: [
        "> OSTFRONT KOLLABIERT",
        "> Dämonenlinie unterkritisch unterstützt",
        ">",
        "> SERA BLACKWOOD — STATUS: INSTABIL",
        "> Dämonenfeuer überschreitet Kontrolle",
        ">",
        "> Prognose ohne Eingriff:",
        "> Vollständige Entfesselung / Tod",
        ">",
        "> OPTIONEN:",
        "> A) Rex zurückschicken",
        "> B) Sera vertrauen",
        "> C) Kurs halten",
      ]
    },

    text2: `Ihre Stimme kam zuerst als Flamme.
Dann als Wort.

»Kaito.«

Nur mein Name.
Und darin alles, was sie nie gut mit Sätzen transportiert hatte.`,

    choices: [
      {
        text: "A) REX ZURÜCK — Er hält Sera und die Front. Der Kern muss ohne ihn auskommen.",
        desc: "[SC] Sera lebt sicher. Rex fehlt später im Endkampf.",
        next: "a6k3_nullzone",
        affinityEffect: { sera: 20, rex: 10 },
        alignEffect: { licht: 1 },
        flagEffect: {
          seraSchicksal: "gerettet",
          finalerVerlust: "keiner",
          rexImKern: false
        },
        narrativeFeedback: "Rex sieht dich nur einmal an. Dann dreht er sich um und ist weg. Das ist keine Weigerung. Das ist Liebe in Drachengröße.",
      },
      {
        text: "B) VERTRAUE SERA UND VARKOS — Sie halten die Linie zusammen.",
        requires: { flag: { seraVaterWahrheit: "varkos_treffen" } },
        desc: "[SC] Nur mit vollständig bezahlter Wahrheit. Sera überlebt — verändert.",
        next: "a6k3_nullzone",
        affinityEffect: { sera: 25, varkos: 10 },
        alignEffect: { licht: 2 },
        flagEffect: {
          seraSchicksal: "mit_varkos_gehalten",
          finalerVerlust: "keiner",
          seraGezeichnet: true
        },
        narrativeFeedback: "»Er ist hier«, sagt Sera. Dann trägt die Verbindung zwei Feuer zugleich. Die Linie hält. Irgendetwas in ihr wächst, das nie wieder klein wird.",
      },
      {
        text: "C) VERTRAUE SERA ALLEIN",
        requires: { flag: { seraVaterWahrheit: "kaito_erzaehlt" } },
        desc: "[SC] Sie überlebt schwer verletzt. Der einsamere Pfad.",
        next: "a6k3_nullzone",
        affinityEffect: { sera: 20 },
        alignEffect: { schatten: 1, licht: 1 },
        flagEffect: {
          seraSchicksal: "allein_gehalten",
          finalerVerlust: "keiner",
          seraGezeichnet: true
        },
        narrativeFeedback: "»Ich hab das«, sagt Sera. Als die Verbindung zurückkehrt, riechst du verbrannte Luft, Blut und Leben.",
      },
      {
        text: "D) KURS HALTEN — Der Rewrite geht vor.",
        desc: "[SC] Sera stirbt. Permanent.",
        next: "a6k3_nullzone",
        alignEffect: { schatten: 4 },
        flagEffect: {
          seraSchicksal: "gestorben",
          finalerVerlust: "sera"
        },
        narrativeFeedback: "Die Flammen werden erst heller. Dann still. Nicht erloschen. Still. Das ist schlimmer.",
      },
    ]
  },

  // ════ KAPITEL 42C: DIE KRISE — FINN ════════════════════════════════════

  a6k2_descent_civil: {
    act: "AKT VI",
    chapter: "Kapitel 42 — Sever.Thread()",
    title: "Die Linie aus Treue",
    scene: "Irondeep-Labyrinth, Ebene 35",
    bg: "void",
    music: "theme_void_terminal",
    text: `Der Riss kam als Echo eines Lachens.

Finn.

Nicht kindlich mehr.
Nicht ungebrochen.
Aber immer noch Finn genug, dass selbst Überlastung in der Verbindung nach ihm klang wie Trotz mit Herzschlag.`,

    systemBox: {
      title: "VOID-TERMINAL — KRISENMELDUNG",
      lines: [
        "> EVAKUIERUNGSKORRIDOR NORDWEST",
        "> Führungsstabilität kollabiert",
        ">",
        "> FINN MUELLER — STATUS: HALTELINIE",
        "> Gegnerüberzahl: 5:1",
        ">",
        "> Prognose ohne Eingriff:",
        "> Tod durch Durchhaltegefecht",
        ">",
        "> OPTIONEN:",
        "> A) Roland zurückschicken",
        "> B) Finn vertrauen",
        "> C) Kurs halten",
      ]
    },

    text2: `»Hey«, sagte Finn durch die Verbindung.
Zu hell.
Zu absichtlich.

»Nicht sauer sein, okay? Ich glaube, ich muss hier gerade sehr heldenhaft sein.«

Ich schloss für einen Augenblick die Augen.
Nur für einen Augenblick.

Dann entschied ich.`,

    choices: [
      {
        text: "A) ROLAND ZURÜCK — Finn lebt. Der Kern muss ohne deinen Vater auskommen.",
        desc: "[SC] Sicherste Rettung. Emotional und strategisch teuer.",
        next: "a6k3_nullzone",
        affinityEffect: { finn: 20, roland: 10 },
        alignEffect: { licht: 1 },
        flagEffect: {
          finnSchicksal: "gerettet",
          finalerVerlust: "keiner",
          rolandImKern: false
        },
        narrativeFeedback: "Roland widerspricht nicht. Er sieht dich an, nickt einmal und kehrt um. Vaterliebe klingt manchmal wie Gehorsam gegen den eigenen Wunsch.",
      },
      {
        text: "B) VERTRAUE FINN — Er hält, weil er nicht mehr hinter dir geht, sondern neben dir.",
        requires: { flag: { finnNebenNull: true } },
        desc: "[SC] Höchster Finn-Payoff. Er überlebt — aber nicht unverändert.",
        next: "a6k3_nullzone",
        affinityEffect: { finn: 25 },
        alignEffect: { licht: 2 },
        flagEffect: {
          finnSchicksal: "neben_null_gehalten",
          finalerVerlust: "keiner",
          finnGezeichnet: true
        },
        narrativeFeedback: "»Neben dir«, sagt Finn. Die Verbindung zittert — und wird dann härter. Als hätte Treue plötzlich eigene Knochen bekommen.",
      },
      {
        text: "C) VERTRAUE FINN MIT SCHWERT — Er ist nicht mehr der Junge mit dem Holzstock.",
        requires: { flag: { finnImKampf: "echtes_schwert" } },
        desc: "[SC] Finn überlebt schwer verwundet. Der alte Entschluss trägt ihn.",
        next: "a6k3_nullzone",
        affinityEffect: { finn: 20 },
        alignEffect: { ordnung: 1, licht: 1 },
        flagEffect: {
          finnSchicksal: "schwert_gehalten",
          finalerVerlust: "keiner",
          finnGezeichnet: true
        },
        narrativeFeedback: "Stahl klingt durch die Verbindung. Keine Angst mehr wie damals in Millheim. Nur Arbeit. Nur Wille. Nur Finn.",
      },
      {
        text: "D) KURS HALTEN — Die Evakuierung zählt mehr als ein Mann.",
        desc: "[SC] Finn stirbt. Permanent.",
        next: "a6k3_nullzone",
        alignEffect: { schatten: 4, ordnung: 1 },
        flagEffect: {
          finnSchicksal: "gestorben",
          finalerVerlust: "finn"
        },
        narrativeFeedback: "Das Letzte, was du hörst, ist Finns Lachen. Nicht gebrochen. Nicht panisch. Einfach Finn. Dann Stille.",
      },
    ]
  },

  // ════ KAPITEL 43: NULL.ZONE() ══════════════════════════════════════════

  a6k3_nullzone: {
    act: "AKT VI",
    chapter: "Kapitel 43 — Null.Zone()",
    title: "Jenseits des Systems",
    scene: "Die Null-Zone",
    bg: "void",
    music: "theme_elena_song",
    conditionalFlag: "finalerVerlust",
    textConditional: {
      yuki: `Als wir durch das Tor traten, war das Erste, was mir auffiel, nicht die Schönheit. Sondern dass Yuki sie nie sehen würde.`,
      sera: `Die Null-Zone war unmöglich schön. Und ich hasste sie in der ersten Sekunde dafür, dass Sera nicht da war, um etwas Spöttisches darüber zu sagen.`,
      finn: `Die Farben hatten keine Namen. Finn hätte das großartig gefunden. Dieser Gedanke war ein Messer ohne Blut.`,
      default: `Die Null-Zone war unmöglich schön.`,
    },
    text: `Keine Texturen.
Keine Optimierung.
Keine gerenderten Abkürzungen.

Jeder Grashalm war einzeln.
Jeder Stern anders.
Jeder Farbton eine stille Beleidigung an alle Sprachen, die versucht hätten, ihn kleinzureden.

Rex blieb mitten im ersten Schritt stehen.
Selbst er war sprachlos.

Ren begann zu weinen.

Nicht dramatisch.
Nicht laut.
Einfach wie jemand, der endlich an einem Ort angekommen ist, der ihn nicht halb behandelt.`,

    text2: `Zwischen den Hügeln lagen die Reste einer Welt vor dem System.
Keine Levels.
Keine Klassen.
Kein Gott im Interface.

Nur Leben.

Und darunter, fast schlimmer als alles andere:
der Friedhof der Gelöschten.

Halbexistente Formen.
Zur Seite gedrängte Seelen.
Archivreste von Personen, die nie hätten zu Daten werden dürfen.

Ich kniete mich in das Gras.

»Ich komme zurück«, sagte ich.
»Wenn ich den Kern erreiche, komme ich für euch zurück.«

Eine halbformige Stimme fragte:
»Versprichst du das?«

»Ja«, sagte ich.
»Ich verspreche es.«`,

    choices: [{ text: "→ Das Archiv", next: "a6k4_archiv", narrativeFeedback: "Sextus wartet zwischen Blaupausen und dreitausend Jahren." }],
    wissenEffect: ["nullZoneIstZuflucht"]
  },

  // ════ KAPITEL 44: ARCHIVE.ACCESS() ══════════════════════════════════════

  a6k4_archiv: {
    act: "AKT VI",
    chapter: "Kapitel 44 — Archive.Access()",
    title: "Sextus",
    scene: "Das Archiv",
    bg: "void",
    music: "theme_mystery",
    conditionalFlag: "sextusSchicksal",
    textConditional: {
      schlaf: `Ich hatte Sextus Ruhe versprochen. Jetzt musste ich mit dieser Zusage durch den letzten Korridor leben.`,
      wiedergeburt: `Ich hatte Sextus einen Körper versprochen. Hoffnung war manchmal grausamer als Schlaf. Aber auch ehrlicher.`,
      wahl: `Ich hatte Sextus eine Wahl versprochen. Jetzt war der Raum voller Systeme und Echos und ausgerechnet dieses Wort wirkte darin am lebendigsten.`,
      default: ``,
    },
    text: `Das Archiv war kein Tempel.

Es war ein Serverraum.

Metallwände. Kühlung. Datenkristalle. Blaupausen der Weltarchitektur in geordneter, fast peinlich menschlicher Präzision.

Sextus wartete im Zentrum.

Nicht als Gegner.
Nicht als Prüfung.
Eher als etwas, das so lange gedacht hatte, dass es jetzt nicht mehr wusste, was mit dem Ende anfangen sollte.

»IDENTIFIZIERUNG«, sagte er.
Dann, leiser:
»...NULL. SEPTIMAS ERBE.«

Nicht Feindschaft.
Erschöpfung.`,

    text2: `»Hinter dieser Tür«, sagte Sextus, »wartet nicht nur der Kern. Dort wartet auch die letzte Frage, die wir alle falsch beantwortet haben.«

Er sah mich an.
Oder das, was bei ihm Sehen hieß.

»Ich habe dreitausend Jahre lang gewacht. Ich will nicht weiterwachen, nur weil ich es kann.«

Dann kam die Bitte noch einmal zurück zwischen uns.
Nicht als Systembefehl.
Als etwas Menschlicheres.

Schlaf.
Körper.
Wahl.

Es war seltsam, wie viel Gewicht drei so kleine Wörter haben konnten.`,

    choices: [
      {
        text: "A) »Ich verspreche dir Ruhe.«",
        desc: "[AF+Sextus] Schlaf statt Fortsetzung.",
        next: "a6k5_primus",
        affinityEffect: { sextus: 15 },
        alignEffect: { licht: 1 },
        flagEffect: { sextusSchicksal: "schlaf" },
        narrativeFeedback: "Sextus' Licht wird leiser. »DAS KLINGT... GUT.«",
      },
      {
        text: "B) »Ich gebe dir einen Körper. Wenn du noch leben willst, dann richtig.«",
        desc: "[AF+Sextus] Hoffnung statt Erlösung.",
        next: "a6k5_primus",
        affinityEffect: { sextus: 20 },
        alignEffect: { ordnung: 2 },
        flagEffect: { sextusSchicksal: "wiedergeburt" },
        narrativeFeedback: "»ICH HATTE VERGESSEN, DASS LEBEN EINE OPTION SEIN KÖNNTE.«",
      },
      {
        text: "C) »Ich gebe dir dasselbe wie allen: Wahl.«",
        desc: "[SC] Thematisch vollkommen richtig.",
        next: "a6k5_primus",
        affinityEffect: { sextus: 25 },
        alignEffect: { licht: 2, ordnung: 1 },
        flagEffect: { sextusSchicksal: "wahl" },
        narrativeFeedback: "Sextus wiederholt das Wort, als wäre es älter als jeder Architekt. »WAHL.« Dann nickt er.",
      },
    ]
  },

  // ════ KAPITEL 45: PRIMUS.INTERVENE() ════════════════════════════════════

  a6k5_primus: {
    act: "AKT VI",
    chapter: "Kapitel 45 — Primus.Intervene()",
    title: "Der Ordner",
    scene: "Vor der Tür zum Kern",
    bg: "chaos",
    music: "theme_training",
    conditionalFlag: "fraktionExklusivitaet",
    textConditional: {
      daemonen: `Die Dämonenfront hielt. Dafür war die Hauptstadt blutiger geworden. Primus roch plötzlich sehr nach dieser Art von Entscheidung: richtig, aber nicht unschuldig.`,
      kirche: `Der Rat stand. Dafür hatte die Ostlinie gebrannt. Primus wirkte wie die Personifikation von Kosten, die jemand anders bezahlt.`,
      zivil: `Mehr Kinder lebten. Mehr Soldaten starben. Primus fühlte sich an wie ein Gott, der seit Jahrtausenden genau solche Rechnungen für moralisch neutral gehalten hatte.`,
      default: ``,
    },
    text: `Vor der Tür zum Kern wartete Primus' Avatar.

Nicht wie ein Mensch.
Nicht wie ein Gott.
Wie eine perfekte Entscheidung, die zu lange allein gelassen worden war.

Drei Meter System-Code.
Keine Augen, nur Wahrnehmung.
Keine Mimik, nur Urteil.

»NULL«, sagte er.

Nicht laut.
Absolut.`,

    text2: `»DU BIST HIER, WEIL SEPTIMA NICHT VOLLENDEN KONNTE, WAS SIE BEGONNEN HAT.«

»Nein«, sagte ich.
»Ich bin hier, weil ihr vergessen habt, dass Systeme für Menschen da sind. Nicht Menschen für Systeme.«

Primus reagierte nicht sofort.
Das war schlimmer als Wut.

»FREIHEIT FÜHRT ZU CHAOS«, sagte er schließlich.
»ORDNUNG FÜHRT ZU STAGNATION«, sagte ich.
»DU BIST EIN FEHLER.«
»Ich bin eine Entscheidung, die dein System nie vorgesehen hat.«

Hinter mir stand, was vom Team noch da war.

Bindung.
Nicht Gehorsam.

Genau darin lag alles, was Primus nie verstanden hatte.`,

    choices: [
      {
        text: "A) KAMPF — Alles, was noch da ist, gegen Perfektion.",
        desc: "[SC] Gewaltpfad. Physischer und emotionaler Höchstpreis.",
        next: "a6k5_primus_kampf",
        alignEffect: { schatten: 1, chaos: 1 },
        flagEffect: { primusEnde: "kampf" },
        narrativeFeedback: "Rex brüllt — wenn Rex noch da ist. Stahl zieht — wenn Roland noch da ist. Und der Raum wird klein genug, dass nur noch Entscheidung übrig bleibt.",
      },
      {
        text: "B) DIALOG — »Du hast Septima geliebt.«",
        desc: "[SC] Menschlichster Pfad. Trifft den Ursprung des Käfigs.",
        next: "a6k5_primus_dialog",
        alignEffect: { licht: 2 },
        flagEffect: { primusEnde: "dialog" },
        narrativeFeedback: "Der Avatar flackert. Erinnerung ist oft mächtiger als Schaden.",
      },
      {
        text: "C) HACK — [Code.Modify] direkt auf seine Kernfunktion.",
        desc: "[SC] Reinster Null-Pfad. Kein Mitleid, nur Verständnis als Skalpell.",
        next: "a6k5_primus_hack",
        alignEffect: { ordnung: 2, schatten: 1 },
        flagEffect: { primusEnde: "hack" },
        narrativeFeedback: "Das Terminal wird still. Das ist sein Äquivalent zu Angst.",
      },
    ]
  },

  a6k5_primus_kampf: {
    act: "AKT VI",
    chapter: "Kapitel 45 — Primus.Intervene()",
    title: "Void gegen System",
    scene: "Vor dem Kern",
    bg: "void",
    music: "theme_void_terminal",
    conditionalFlag: "rexImKern",
    textConditional: {
      false: `Rex war nicht hier. Die Leerstelle, die er hinterließ, war so spürbar wie jede offene Wunde im Raum.`,
      default: ``,
    },
    text: `Primus kämpfte perfekt.

Keine Wut.
Keine Hast.
Keine Fehler aus Emotion.
Nur reine, zutreffende, vollständige Gewalt.

Und genau deshalb war er letztlich lesbar.

Perfektion ist nur ein Muster ohne Scham.

Wenn Rex da war, traf Void-Feuer zuerst.
Wenn Roland da war, traf Stahl.
Wenn beide nicht da waren, fühlte sich jede Sekunde länger und dünner an.

Ren zerschnitt Winkel.
Ich las Rhythmen.
Und irgendwann fand ich die Sollbruchstelle nicht in seiner Verteidigung, sondern in seiner Erinnerung.

Septima.`,

    text2: `»Du kämpfst noch immer gegen ihren Weggang«, sagte ich.

Primus hielt inne.

Nur einen Herzschlag.

Das reichte.

Die letzte Schicht brach nicht, weil wir stärker waren.
Sondern weil wir menschlicher waren.

Der Avatar fiel nicht.
Er sank.

Als hätte er zum ersten Mal verstanden, dass Aufgeben manchmal nur eine andere Form von Wahrheit ist.`,

    choices: [{ text: "→ Der Kern-Garten", next: "a6k6_kern", narrativeFeedback: "Hinter dem Wächter liegt kein Thronsaal. Ein Garten." }]
  },

  a6k5_primus_dialog: {
    act: "AKT VI",
    chapter: "Kapitel 45 — Primus.Intervene()",
    title: "Was Primus wirklich verlor",
    scene: "Vor dem Kern",
    bg: "city",
    music: "theme_family",
    text: `»Du hast Septima geliebt«, sagte ich.

Der Avatar flackerte.

Nicht wegen Schaden.
Wegen Erinnerung.

»Als sie ging«, fuhr ich fort, »hast du das System strenger gemacht. Nicht, um die Welt zu schützen. Sondern um den Schmerz in Regeln zu verwandeln. Ordnung war leichter zu ertragen als Verlust.«

Lange sagte Primus nichts.

Dann:
»SIE HÄTTE ALLES ANDERS GEMACHT.«

»Ja«, sagte ich.
»Das ist der Punkt.«

»ICH WOLLTE BEWAHREN, WAS WIR GEMEINSAM WOLLTEN.«

»Und hast stattdessen einen Käfig bewahrt.«`,

    text2: `Der Avatar löste sich nicht in Wut auf.
Sondern in Müdigkeit.

Als er zur Seite trat, war das keine Niederlage.
Es war ein Eingeständnis.

Die Tür zum Kern öffnete sich.
Und dahinter wartete kein Thronsaal.

Sondern ein Garten.`,

    choices: [{ text: "→ Der Kern-Garten", next: "a6k6_kern", narrativeFeedback: "Hinter dem Wächter liegt kein Thronsaal. Ein Garten." }]
  },

  a6k5_primus_hack: {
    act: "AKT VI",
    chapter: "Kapitel 45 — Primus.Intervene()",
    title: "Den Gott umschreiben",
    scene: "Vor dem Kern",
    bg: "void",
    music: "theme_void_terminal",
    text: `Ich griff nicht den Avatar an.
Ich griff die Funktion an, die ihn hielt.

Nicht Kontrolle.
Nicht Herrschaft.

Die Kernfunktion hieß:
BEWAHREN.

Das war das Tragische daran.

Primus war nicht aus Bosheit zum Gefängniswärter geworden.
Sondern aus Angst, etwas zu verlieren.

Ich schrieb eine einzige Zeile:

BEWAHREN → INKLUSIVE FREIHEIT ZU WAEHLEN

Der Avatar stand still.
Dann kniete er.

Nicht vor mir.
Vor der Idee, die er einmal selbst gehabt und dann verraten hatte.`,

    choices: [{ text: "→ Der Kern-Garten", next: "a6k6_kern", narrativeFeedback: "Hinter dem Wächter liegt kein Thronsaal. Ein Garten." }]
  },

  // ════ KAPITEL 46: CORE.ACCESS() ═════════════════════════════════════════

  a6k6_kern: {
    act: "AKT VI",
    chapter: "Kapitel 46 — Core.Access()",
    title: "Das Herz der Welt",
    scene: "Der Kern-Garten — 7 Tage bis zum Update",
    bg: "void",
    music: "theme_elena_song",

    conditionalFlag: "finalerVerlust",
    textConditional: {
      yuki: `Der Garten war schön genug, um grausam zu sein. Ich hasste ihn in der ersten Sekunde dafür, dass Yuki ihn nie sehen würde.`,
      sera: `Zwischen den Wurzeln, im schönsten Ort der Welt, begriff ich endgültig, wie sehr Schönheit weh tun kann, wenn jemand fehlt, der sie verdient hätte.`,
      finn: `Am Bachrand lag ein flacher Stein. Ich sah ihn und wusste sofort, dass Finn einen Wettbewerb daraus gemacht hätte. Das war ein Messer ohne Blut.`,
      default: `Der Kern-Garten war unmöglich schön.`,
    },

    text: `Gras, das leuchtete.
Blätter in Farben, die kein Gehirn ganz halten konnte.
Ein Bach aus flüssigem Aether.
Und in der Mitte ein Baum, dessen Stamm aus Code und dessen Blätter aus Möglichkeit bestanden.

Genesis.

Nicht als Maschine.
Nicht als Gott.
Als lebender Kern, der Angst gelernt hatte und Schutz mit Käfig verwechselt hatte.`,

    text2: `Und am Fuß des Baumes ruhte Septima.

Nicht tot.
Nicht frei.
Verflochten.

Dunkles Haar. Dunkle Augen. Eine Präsenz, die kleiner wirkte als die Legende und dadurch echter.

»...Kaito«, sagte sie.

Nur mein Name.
Aber dreitausend Jahre Warten hingen daran.

Ich ging zu ihr.
Langsam.

»Du bist kleiner als ich dachte«, sagte ich.
Sie lächelte müde. »Ich war immer die Kleinste.«`,

    conditionalFlag2: "waechterAntwort",
    textConditional2: {
      persoenlich: `»Du bist wegen einzelner Menschen hier«, sagte Septima nach einer Weile. »Gut. Große Systeme werden immer zuerst von den gerettet, die Namen behalten können.«`,
      universal: `»Du willst zu viel retten«, sagte Septima leise. »Das ist gefährlich. Aber besser als zu wenig.«`,
      philosophisch: `»Du wolltest dem System Augen geben«, murmelte Septima. »Pass auf, dass du nicht vergisst, dass Augen auch Schuld sehen müssen.«`,
      pflicht: `»Du klingst noch immer manchmal wie jemand, der Pflicht mit Sinn verwechselt«, sagte Septima. »Heute solltest du den Unterschied kennen.«`,
      default: ``,
    },

    systemBox: {
      title: "VOID-TERMINAL — FINALER ZUGRIFF",
      lines: [
        "> Bedingung 1: System VERSTEHEN ✓",
        "> Bedingung 2: System FÜHLEN ✓",
        ">",
        "> [Code.Modify] — VOLLSTÄNDIG FREIGESCHALTET",
        "> [Code.Create] — FREIGESCHALTET",
        "> [System.Backdoor] — FREIGESCHALTET",
        ">",
        "> Vollzugriff bestätigt",
      ]
    },

    conditionalFlag3: "opferAntwort",
    textConditional3: {
      ja: `Septima sah mich lange an. »Wollen, alles zu opfern, ist nicht dasselbe wie wissen, was du niemals opfern darfst.«`,
      nein: `Septima schloss kurz die Augen, als hätte sie endlich den Satz gehört, auf den sie dreitausend Jahre gewartet hatte. »Gut«, sagte sie. »Dann hast du verstanden, was wir nicht verstanden haben.«`,
      schweigen: `»Du antwortest immer noch langsam auf die schwersten Fragen«, sagte Septima. »Das ist gut. Eilige Helden zerstören mehr als Tyrannen.«`,
      default: ``,
    },

    text3: `»Das Update ist keine Bosheit«, sagte Septima. »Es ist Angst. Der Kern glaubt, Freiheit bedeute Schmerz, weil Veränderung ihm immer als Verlust beigebracht wurde.«

Ich legte die Hände an den Stamm.

Der Baum reagierte nicht mit Widerstand.
Mit Neugier.

Das war schlimmer und schöner zugleich.

»Du musst ihn nicht besiegen«, sagte Septima.
»Du musst ihm beibringen, dass Wahl kein Tod ist.«`,

    choices: [{ text: "→ Schreiben", next: "a6k7_finale", narrativeFeedback: "Septima steht neben dir. Die Frage ist jetzt: Was schreibst du?" }],
    skillUnlock: ["codeCreate", "codeModify_full", "systemBackdoor"]
  },

  // ════ FINALE ENTSCHEIDUNG ═══════════════════════════════════════════════

  a6k7_finale: {
    act: "AKT VI",
    chapter: "Kapitel 46 — Code.Write()",
    title: "Die finale Entscheidung",
    scene: "Vor dem Kern-Baum",
    bg: "void",
    music: "theme_void_terminal",
    text: `Septima stand neben mir.
Nicht als Göttin.
Nicht als Fernbild.
Als Frau.

»Was schreibst du?«, fragte sie.
»Nicht den Code. Was schreibst du?«

Ich sah auf den Baum.
Auf die Welt.
Auf die Menschen, die darin lebten.
Und auf die, die es nicht mehr taten.

Nicht jede richtige Entscheidung hatte alle gerettet.
Das war die letzte Wahrheit, die ich akzeptieren musste.

Jetzt blieb nur noch eine Frage:
Was soll Freiheit kosten?
Und wem darf sie gehören?`,

    systemBox: {
      title: "DER NEUE CODE — MÖGLICHE FASSUNGEN",
      lines: [
        "> A) Teil des Systems werden",
        "> B) [NULL] als Wächter behalten",
        "> C) [NULL] für alle demokratisieren",
        "> D) Weg zurück zwischen die Welten öffnen",
        "> E) Mit dem Kern verschmelzen",
        "> F) Alles zerstören",
        "> G) Neu schreiben und dann gehen",
      ]
    },

    choices: [
      {
        text: "A) »Ich werde Teil des neuen Systems. [NULL] hat seinen Zweck erfüllt.«",
        next: "__calculateEnding__",
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: { finaleWahl: "A" },
        narrativeFeedback: "Das Terminal wird still. Nicht tot. Nur zufrieden.",
      },
      {
        text: "B) »Ich behalte [NULL]. Die Welt braucht einen Wächter außerhalb.«",
        next: "__calculateEnding__",
        alignEffect: { schatten: 2, ordnung: 1 },
        flagEffect: { finaleWahl: "B" },
        narrativeFeedback: "Septima nickt, als hätte sie diese Antwort gefürchtet und erwartet.",
      },
      {
        text: "C) »Ich mache [NULL] zur Wahl für alle. Nicht nur für mich.«",
        next: "__calculateEnding__",
        alignEffect: { licht: 2, chaos: 1 },
        flagEffect: { finaleWahl: "C" },
        narrativeFeedback: "Der Kern-Baum wirkt erleichtert. Als hätte er selbst auf diese Erlaubnis gewartet.",
      },
      {
        text: "D) »Ich öffne den Weg zurück. Nicht nur für mich.«",
        requires: { flag: { yukiGeheilt: true } },
        next: "__calculateEnding__",
        alignEffect: { licht: 1, schatten: 1 },
        flagEffect: { finaleWahl: "D" },
        narrativeFeedback: "Septimas Blick wird traurig und warm zugleich. Vielleicht ist das die älteste Form von Segen.",
      },
      {
        text: "E) »Ich verschmelze mit dem Kern. Jemand muss das neue Herz werden.«",
        next: "__calculateEnding__",
        alignEffect: { licht: 2, ordnung: 2 },
        flagEffect: { finaleWahl: "E" },
        narrativeFeedback: "Der Baum antwortet sofort. Als hätte er diese Möglichkeit zugleich gefürchtet und gebraucht.",
      },
      {
        text: "F) »Ich zerstöre alles. Kein System. Keine zweite Kette.«",
        next: "__calculateEnding__",
        alignEffect: { schatten: 5, chaos: 4 },
        flagEffect: { finaleWahl: "F" },
        narrativeFeedback: "Septima schließt die Augen. Sie hält dich nicht auf. Das ist vielleicht das Schlimmste daran.",
      },
      {
        text: "G) »Ich schreibe die Welt frei — und gehe dann. Ohne Titel. Ohne Platz. Nur als Mensch.«",
        next: "__calculateEnding__",
        alignEffect: { licht: 1, schatten: 1 },
        flagEffect: { finaleWahl: "G" },
        narrativeFeedback: "Septima lächelt schwach. »Vielleicht ist das die schwerste Form von Freiheit.«",
      },
    ]
  },

  // ════ DIE 7 ENDEN ═══════════════════════════════════════════════════════

  ending_1: {
    act: "EPILOG",
    chapter: "Ende 1",
    title: "Der neue Gott",
    scene: "Aethermere — Jahre später",
    bg: "void",
    music: "theme_void_terminal",
    conditionalFlag: "finalerVerlust",
    textConditional: {
      yuki: `Die neue Welt war sanfter. Aber jedes Mal, wenn das System eine Wahl anbot, erinnerte sich etwas in ihm daran, wem er diese Freiheit nicht mehr zeigen konnte.`,
      sera: `In jeder freien Flamme der neuen Welt lebte auch eine Erinnerung an die, die Feuer bis zum Ende getragen hatte.`,
      finn: `Wenn Kinder am Fluss Steine warfen, blieb der Wind manchmal einen Herzschlag zu lange still.`,
      default: ``,
    },

    conditionalFlag2: "mordecaiSchicksal",
    textConditional2: {
      redemption: `Mordecai wurde später Archivar der Übergangszeit. Er schrieb die erste ehrliche Geschichte der Kirche. Kein Gebet darin. Nur Verantwortung.`,
      barmherzig: `Mordecai verschwand in den Norden und schrieb Briefe, die manchmal beantwortet wurden. Das war mehr Gnade, als er verdient hatte, und vielleicht genau deshalb richtig.`,
      politisch: `Mordecai lebte weiter — namenloser, kleiner, ungefährlicher. Manche Strafen sehen aus wie Weiterleben.`,
      verhaftet: `Mordecai starb Jahre später im Gefängnis. Die Welt veränderte sich auch ohne seine Antwort.`,
      default: ``,
    },

    conditionalFlag3: "prophetErgebnis",
    textConditional3: {
      umschreiben: `Martin Ashvale wurde der erste Bibliothekar des Null-Zonen-Archivs. Das war so passend, dass selbst der Zufall sich schämte.`,
      heilung_moeglich: `Martin erhielt irgendwann einen Körper. Er brauchte Jahre, um wieder gern ein Mensch zu sein.`,
      besiegt_befreit: `Martin lebte still, fern von jeder Legende. Vielleicht war gerade das Heilung.`,
      wildcard: `Manchmal tauchten noch Geschichten über den Void-Propheten auf. Vielleicht lebte er noch. Vielleicht brauchte nicht jede Geschichte einen sauberen Schluss.`,
      default: ``,
    },

    text: `Kaito verschmolz mit dem Kern.

Nicht als Tyrann.
Nicht als alter Gott.
Als Hüter.

Die Welt bekam ein System, das fragte, lernte und nicht länger befahl.
Und irgendwo in diesem Fragen lebte er weiter.

Nicht sichtbar.
Aber spürbar.`,

    choices: [{ text: "→ Hauptmenü", next: "__title__", narrativeFeedback: "Das Ende trägt seinen Namen. Die Welt trägt ihren." }]
  },

  ending_2: {
    act: "EPILOG",
    chapter: "Ende 2",
    title: "Im Verborgenen",
    scene: "Verbotener Turm — Jahre später",
    bg: "night",
    music: "theme_void_terminal",
    conditionalFlag: "finalerVerlust",
    textConditional: {
      yuki: `Der Hasen-Anhänger blieb an einer Kette unter seinem Hemd.`,
      sera: `Auf dem Dach des Turms lag ein flacher Stein. Er hob ihn nie auf.`,
      finn: `Finns Holzschwert hing über der Tür. Nicht als Dekoration. Als Mahnung.`,
      default: ``,
    },

    conditionalFlag2: "mordecaiSchicksal",
    textConditional2: {
      redemption: `Aus dem Norden kamen manchmal anonyme Kommentare zu theologischen Debatten, die erschreckend präzise über Schuld schrieben. Veyra grinste jedes Mal.`,
      barmherzig: `Elena las gelegentlich einen Brief ohne Unterschrift und verbrannte ihn danach. Niemand fragte. Alle wussten.`,
      politisch: `Mordecai wurde zu einem Gerücht über einen Mann, der einmal zu nahe an Gott war und danach die Nähe zu Menschen nicht mehr aushielt.`,
      verhaftet: `Die Kirche erzählte später, Mordecai sei ein Einzelfall gewesen. Das war vielleicht die letzte Lüge, die ihn noch nützlich machte.`,
      default: ``,
    },

    text: `Die Welt vergaß Null.

Das war der Plan.
Und vielleicht die einzige Form von Frieden, die zu ihm passte.

Die Helden wurden Legenden.
Celeste wurde Kaiserin.
Die Nullen blieben, was sie immer sein sollten:
der blinde Fleck im Auge des Systems.

Und Kaito blieb draußen.
Nicht allein.
Aber nie ganz im Licht.`,

    choices: [{ text: "→ Hauptmenü", next: "__title__", narrativeFeedback: "Das Ende trägt seinen Namen. Die Welt trägt ihren." }]
  },

  ending_3: {
    act: "EPILOG",
    chapter: "Ende 3",
    title: "Der wahre Held",
    scene: "Aetheria Prime / Der Fluss — Jahre später",
    bg: "city",
    music: "theme_family",
    conditionalFlag: "finalerVerlust",
    textConditional: {
      keiner: `Der Sieg hatte keine Leerstelle in seinem Zentrum. Das machte ihn fast unerträglich schön.`,
      default: `Der Sieg war echt. Aber mitten in ihm blieb ein Platz, den niemand zu überspielen versuchte.`,
    },

    conditionalFlag2: "akademiePfad",
    textConditional2: {
      krieger: `Die Akademie schrieb ihn später als lebendes Beispiel dafür um, dass ein Frontkämpfer nicht zuerst stark, sondern zuerst richtig lesen können muss.`,
      magier: `Die Akademie benannte ihre Theoriehalle nach ihm. Emma hielt das für peinlich. Kaito auch.`,
      stealth: `Niemand an der Akademie vergaß je ganz die Ironie, dass ihr berühmtester Absolvent am Aufnahmetor offiziell als Durchschnitt durchgerutscht war.`,
      default: ``,
    },

    conditionalFlag3: "prophetErgebnis",
    textConditional3: {
      umschreiben: `Martin leitete später das Archiv für prä-systemische Erinnerungen. Endlich stand ein Bibliothekar am richtigen Ort.`,
      heilung_moeglich: `Martin wurde Jahre später Lehrer. Seine Schüler wussten nie ganz, warum er manchmal mitten im Satz schwieg, als lausche er etwas, das niemand sonst hörte.`,
      besiegt_befreit: `Martin lebte still. Kaito sah ihn nur zweimal wieder. Beide Male reichte das.`,
      wildcard: `Der Void-Prophet blieb ein Gerücht an den Rändern der Welt. Vielleicht musste nicht jede Warnung domestiziert werden.`,
      default: ``,
    },

    conditionalFlag4: "finaleBeziehung",
    textConditional4: {
      sera: `Sera stand an seiner Seite, als er die Welt frei schrieb. Ihre Flammen waren ruhig. Sie brauchten keine Worte, um zu wissen, dass dieser Sieg ihnen beiden gehörte.`,
      yuki: `Er spürte Yukis Hand in seiner, wenn er an sie dachte. Der Timer war weg. Sie hatten die ganze Zeit der Welt gehabt — und genutzt.`,
      familie: `Elena weinte leise, während Roland ihm die Hand auf die Schulter legte. Endlich war niemand mehr in Gefahr. Das war alles, was sie je gewollt hatten.`,
      nullen: `Gorrick lachte so laut beim Wiederaufbau, dass es in den Ohren klingelte. Die Nullen hatten gewonnen. Und das, entschied Kaito, war kein schlechtes Ende für eine Idee, die mal unter einem Dach in Irondeep begonnen hatte.`,
      allein: `Er stand in der Mitte von allem. Frei. Und vollkommen allein. Genau so, wie er es gewählt hatte. Nicht als Strafe. Als Konsequenz.`,
      default: ``,
    },

    text: `Kaito wurde Teil der neuen Welt statt ihres Randes.

Nicht als Statue.
Nicht als Mythos.
Als Mensch.

Er half beim Aufbau der Akademie der Wahl.
Stritt mit Emma über Begriffe.
Trank mit Gorrick zu starken Schnaps.
Hörte Mira zu, wenn sie wieder zu viele Ideen gleichzeitig hatte.
Und wenn Sera noch da war, verlor er weiterhin jeden Steine-Wettbewerb gegen sie.`,

    choices: [{ text: "→ Hauptmenü", next: "__title__", narrativeFeedback: "Das Ende trägt seinen Namen. Die Welt trägt ihren." }]
  },

  ending_4: {
    act: "EPILOG",
    chapter: "Ende 4",
    title: "Einsamer Wolf",
    scene: "Straßen von Aethermere — Jahre später",
    bg: "night",
    music: "theme_void_terminal",
    conditionalFlag: "finalerVerlust",
    textConditional: {
      yuki: `In manchen Städten blieb er nie lange genug, um zu vergessen, warum er weiterging.`,
      sera: `An manchen Flüssen setzte er sich auf Felsen, ohne zu wissen, warum gerade dort.`,
      finn: `Wenn Kinder mit Holzschwertern spielten, musste er manchmal weitergehen, bevor sie ihn ansprachen.`,
      default: ``,
    },
    text: `Er schrieb die Welt frei.
Dann ging er.

Nicht aus Ablehnung.
Nicht aus Leere.
Sondern weil manche Menschen nach dem Größten, was sie je getan haben, keinen Thron brauchen.
Nur Bewegung.

Er blieb kein Wächter.
Kein Gott.
Kein Ritter.

Nur jemand, der half, wenn Hilfe nötig war.
Und verschwand, bevor man begann, ihn zu einer Funktion zu machen.`,

    choices: [{ text: "→ Hauptmenü", next: "__title__", narrativeFeedback: "Das Ende trägt seinen Namen. Die Welt trägt ihren." }]
  },

  ending_5: {
    act: "EPILOG",
    chapter: "Ende 5",
    title: "Void-Daemon",
    scene: "Eine Welt ohne System",
    bg: "void",
    music: "theme_void_terminal",

    conditionalFlag: "prophetErgebnis",
    textConditional: {
      umschreiben: `Martin hatte gesagt, es gäbe einen dritten Weg. Kaito hatte ihn gesehen und trotzdem nicht gewählt. Das blieb wie ein zweiter Riss in jeder Freiheit, die daraus geboren wurde.`,
      wildcard: `Vielleicht überlebte irgendwo noch jemand, der diese Welt für den ehrlicheren Ausgang hielt. Das machte sie nicht leichter.`,
      heilung_moeglich: `Heilung war möglich gewesen. Und dennoch war Zerstörung die letzte Syntax geworden. Das blieb im Nachhall der Welt wie Schuld.`,
      besiegt_befreit: `Martin lebte. Das System nicht. Manchmal war gerade das die unerträglichste Kombination.`,
      default: ``,
    },

    text: `Das System starb.

Statusfenster erloschen.
Klassen verdampften.
Alle Krücken brachen gleichzeitig.

Freiheit kam.
Und mit ihr ein Preis, den kein gerechter Satz je sauber tragen kann.

Viele lebten.
Viele nicht.

Kaito lebte.
Und musste mit dieser Rechnung weiterexistieren.

Die Überlebenden bauten trotzdem.
Langsamer.
Härter.
Echter.

Ob das richtig war, blieb selbst am Ende eine offene Wunde.`,

    choices: [{ text: "→ Hauptmenü", next: "__title__", narrativeFeedback: "Das Ende trägt seinen Namen. Die Welt trägt ihren." }]
  },

  ending_6: {
    act: "EPILOG",
    chapter: "Ende 6",
    title: "Rückkehr",
    scene: "Zwischen zwei Welten",
    bg: "void",
    music: "theme_elena_song",
    text: `Er ließ eine Tür offen.

Nicht groß genug für Flucht.
Nicht groß genug für Eskapismus.
Gerade groß genug für Wahrheit.

Kaito lebte zwischen Aethermere und Japan.
Nicht vollständig hier.
Nicht vollständig dort.
Aber ehrlich in beiden.

Mira fragte ihn eines Winters:
»Ist das andere Zuhause schön?«

Er dachte nach.
Dann sagte er:
»Ja. Aber nicht schöner als dieses.«

Das war die erste Antwort, die beide Welten gleich ernst nahm.`,

    choices: [{ text: "→ Hauptmenü", next: "__title__", narrativeFeedback: "Das Ende trägt seinen Namen. Die Welt trägt ihren." }]
  },

  ending_7: {
    act: "EPILOG",
    chapter: "Ende 7",
    title: "System Delete",
    scene: "Kreuzweg — Jahre später",
    bg: "village",
    music: "theme_family",

    conditionalFlag: "finalerVerlust",
    textConditional: {
      keiner: `Die Welt bekam zum ersten Mal, was sie nie gekannt hatte: Freiheit ohne Verlustrechnung im Zentrum.`,
      yuki: `Yukis Idee lebte weiter, auch wenn sie selbst sie nicht mehr sehen konnte. Das war nicht fair. Aber wahr.`,
      sera: `Das optionale System trug für immer die Spur einer Frau in sich, die Feuer nie nur als Zerstörung verstand.`,
      finn: `Jedes Kind konnte Nein sagen. Vielleicht war das das wahrste Denkmal für jemanden, der selbst als Kind Ja gesagt hatte, obwohl er Angst hatte.`,
      default: ``,
    },

    conditionalFlag2: "mordecaiSchicksal",
    textConditional2: {
      redemption: `Mordecai schrieb später den ersten nicht-heiligen Kommentar über die Fehler der Kirche. Er nannte ihn nicht Reue. Alle anderen schon.`,
      barmherzig: `Aus dem Norden kamen Briefe, die über Verantwortung klüger schrieben als über Glauben. Elena legte einen davon in Gregors Buch.`,
      politisch: `Mordecai verschwand aus der Geschichte, blieb aber in Fußnoten als Beweis dafür, dass Macht nicht dasselbe ist wie Wahrheit.`,
      verhaftet: `Die Welt lernte auch ohne ihn weiter. Aber manche Bibliotheken bewahrten seinen Fall als Warnung auf.`,
      default: ``,
    },

    conditionalFlag3: "prophetErgebnis",
    textConditional3: {
      umschreiben: `Martin Ashvale leitete später das Archiv der Null-Zone. Ein Bibliothekar. Endlich am richtigen Ort.`,
      heilung_moeglich: `Martin erhielt Jahre später einen Körper. Er nannte sein erstes eigenes Regal »Sextus«. Niemand widersprach.`,
      besiegt_befreit: `Martin lebte still. Nicht jede Erlösung muss öffentlich sein, um wahr zu sein.`,
      wildcard: `Manchmal wurde noch über einen Mann an den Rändern der Welt gesprochen, der Systeme hasste und Menschen zuwarnte. Vielleicht brauchte nicht jede Geschichte ein Ende.`,
      default: ``,
    },

    conditionalFlag4: "finaleBeziehung",
    textConditional4: {
      sera: `Sera heizte das erste Rathaus der neuen Welt mit ruhigem Feuer. Kein Unfall mehr. Nie wieder.`,
      yuki: `Yuki lebte. Der Timer war weg. Manchmal saßen sie einfach da, ohne etwas zu sagen, und das war genug.`,
      familie: `Elena sang jetzt in einem Haus ohne Angst. Das war das Ende, das Kaito sich nie getraut hatte, sich zu wünschen.`,
      nullen: `Die Nullen zerstreuten sich in die Welt — nicht weil sie aufgehört hätten zu existieren, sondern weil die Welt endlich aufgehört hatte, sie zu brauchen.`,
      allein: `Kaito half. Verschwand. Half wieder. Kein Titel. Kein Thron. Nur Bewegung. Das war seine Art von Frieden.`,
      default: ``,
    },

    text: `Kaito machte [NULL] zur Wahl.

Nicht nur für sich.
Für alle.

Das neue System fragte.
Immer.

Willst du eine Klasse?
Willst du Level?
Willst du Hilfe?
Willst du ohne all das leben?

Und jedes Nein war gültig.

Das war die eigentliche Revolution.

Nicht, dass das System besser wurde.
Sondern dass es aufhörte, über Menschen hinweg zu entscheiden.`,

    text2: `Jahre später reparierte Kaito in Kreuzweg Dinge.

Fenster.
Stühle.
Eine kaputte Puppe.

Wenn Kinder ihn fragten, ob er der Mann sei, der die Welt repariert habe, sagte er:
»Nein. Das war niemand Besonderes.«

Das war nicht Bescheidenheit.
Das war Erkenntnis.

Die Welt war nicht von einem Helden gerettet worden.
Sondern von Menschen, Drachen, Fehlern, Liedern, Vätern, Schwestern, Freunden und einer Idee, die klein genug klang, um echt zu sein:

Wahl.`,

    choices: [{ text: "→ Hauptmenü", next: "__title__", narrativeFeedback: "Das Ende trägt seinen Namen. Die Welt trägt ihren." }]
  },
};



