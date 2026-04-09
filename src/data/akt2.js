// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — AKT II: KOMPILIERUNG
// Kapitel 5–11: Kind-Phase, Alter 3–7
// ─── ENTSCHEIDUNGS-KATEGORISIERUNG ────────────────────
// [SC] = STORY-CRITICAL → verändert Kapitel/Plot-Verlauf
// [AF] = AFFINITY → verändert Beziehungswerte 0-100
// [AL] = ALIGNMENT → verschiebt Licht/Schatten + Ordnung/Chaos
// ═══════════════════════════════════════════════════════

export const AKT_II = {

  // ════ KAPITEL 5: COMPILE.CHILDHOOD() ════════════════════════════════════

  a2k1_morgenroutine: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Morgenroutine in Millheim",
    scene: "Millheim — Alter: 3–5 Jahre",
    bg: "cottage",
    music: "theme_family",
    text: `Es gibt Tage, an denen vergesse ich, dass ich einmal jemand anderes war.

Nicht oft. Nicht lange. Aber manchmal — wenn die Morgensonne durch unser Küchenfenster fällt, der Duft von Elenas Brot das Haus füllt und Mira an meinem Ärmel zieht und »Buda! Buda!« ruft, weil sie meinen Namen noch immer falsch ausspricht — manchmal fühle ich mich einfach wie ein Kind.

Vier Jahre alt. Fünf. Die Zeit vergeht anders, wenn man sie zum zweiten Mal lebt. Langsamer. Dichter. Jeder Tag hat Gewicht.

Ich bin Kaito Ashford.
In dieser Welt.
In diesem Leben.
Und Millheim — dieses kleine Dorf am Rand des Reichs — ist mein Zuhause.`,

    systemBox: {
      title: "VOID-TERMINAL — SYSTEM.UPDATE",
      lines: [
        "> Mentale Reife (Alter 4) erreicht",
        "> Gehirnstruktur stabil genug",
        ">",
        "> [Code.Analyze] — ENTSPERRT",
        "> → System-Strukturen nicht nur lesen,",
        "> sondern ihre Funktion verstehen",
        ">",
        "> Hinweis:",
        "> Bitte sparsam benutzen.",
        "> Der Träger ist immer noch ein Kind.",
      ]
    },

    text2: `05:30 — Roland steht auf. Kaito hört ihn. Immer. Seine Schritte sind zu leise für einen Bauern. Perfekt für einen ehemaligen Ritter. Das rechte Bein schleift leicht — der Systemfluch erinnert uns jeden Morgen daran, dass manche Strafen nicht verblassen.

06:00 — Elena beginnt zu kochen. Brot. Kräutertee. Summen. Manchmal Common. Manchmal die alten Lieder.
Mein Terminal registriert inzwischen nicht nur Wilde Magie, sondern deren Dichte. Sie wächst mit jedem Jahr.

06:30 — Mira wacht auf. Laut. Immer laut.
»BUDA! BUDA AUFSTEHEN!«

Sie springt auf mein Bett und landet mit der Präzision eines Meteors auf meinem Magen.
»Ich bin wach, Mira. Definitiv wach.«
»BUDA SPIELEN!«`,

    text3: `07:00 — Frühstück. Roland isst schweigend, aber sein Blick prüft ständig seine Kinder. Elena sieht müde aus, aber auf die Art müde, die Liebe nicht schwächt.

»Du warst wieder vor Mira wach«, sagt Roland.
»Sie ist laut.«
Roland lächelt halb. »Ein Mann, der gut hört, lebt länger.«
Elena wirft ihm einen Blick zu. »Er ist VIER.«

Meine Familie war nicht perfekt.
Roland trug Geheimnisse wie Rüstung.
Elena wich bestimmten Fragen aus.
Mira war ein chaotisches Naturereignis mit Schleifen im Haar.

Aber sie waren echt.
Warm.
Da.

In meinem ersten Leben hatte ich das nie gehabt.
Hier wurde ich geliebt.
Und wer liebt, hat etwas zu verlieren.`,

    choices: [{ text: "→ Finn — Die erste Freundschaft", next: "a2k1_finn", narrativeFeedback: "Finn wartet am Brunnen. Mit einem Kochtopf als Helm." }],
    skillUnlock: ["codeAnalyze"]
  },

  a2k1_finn: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Finn — Die erste Freundschaft",
    scene: "Dorfbrunnen, Millheim — Alter: 4 Jahre",
    bg: "village",
    music: "theme_friendship",
    text: `Ich begegnete Finn zum ersten Mal am Dorfbrunnen.

Er war rund. Nicht unfreundlich rund — sondern auf die Art, wie Kinder rund sind, die von einer Mutter aufgezogen werden, die überzeugt ist, dass jede Krise mit einer zweiten Portion Eintopf lösbar ist.

Rotblondes Haar, Sommersprossen, ein Lächeln so breit wie sein Gesicht. Er trug einen Kochtopf als Helm und prügelte mit einem Stock auf einen Heuballen ein.

»NIMM DAS, GOBLIN! ICH BIN FINN DER GROSSE!«

Finn der Große war vier Jahre alt.

»Was machst du?«, fragte ich.
»ABENTEURER SEIN! Ich trainiere! Mein Papa war Soldat! Wenn ich groß bin, werde ich der STÄRKSTE KRIEGER DER WELT!«

Er hob den Topfhelm leicht an und sah mich aus aufrichtigen blauen Augen an.
»Willst du auch trainieren?«`,

    choices: [
      {
        text: "A) »Okay.« Du nimmst einen Stock und machst mit.",
        desc: "[AF+Finn] Sofortige Freundschaft. Ihr prügelt gemeinsam auf Heuballen ein.",
        next: "a2k1_finn_konvergenz",
        affinityEffect: { finn: 20 },
        flagEffect: { finnErstbegegnung: "mitmachen" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn strahlt, als hättest du ihm gerade die Mitgliedschaft in einem legendären Orden bestätigt.",
      },
      {
        text: "B) »Du hältst den Stock falsch.« Du korrigierst seine Haltung.",
        desc: "[AF+Finn] Finn ist verblüfft — und sofort begeistert.",
        next: "a2k1_finn_konvergenz",
        affinityEffect: { finn: 15 },
        flagEffect: { finnErstbegegnung: "korrigieren" },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Finn versucht es sofort neu. Schlechter Held, exzellenter Schüler.",
      },
      {
        text: "C) »Goblins greifen nicht frontal an. Du musst die Flanke schützen.«",
        desc: "[AL-Verborgenheit] Zu erwachsen. Finn findet dich großartig. Erwachsene finden dich merkwürdig.",
        next: "a2k1_finn_konvergenz",
        affinityEffect: { finn: 10, roland: -5 },
        flagEffect: { finnErstbegegnung: "taktisch" },
        alignEffect: { verborgenheit: -2 },
        narrativeFeedback: "Finns Augen leuchten auf. »Das ist TAKTIK!« Das Problem mit Taktik ist, dass Kinder sie weitererzählen.",
      },
    ]
  },

  a2k1_finn_konvergenz: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Bester Freund für immer",
    scene: "Dorfbrunnen, Millheim",
    bg: "village",
    music: "theme_friendship",
    conditionalFlag: "finnErstbegegnung",
    textConditional: {
      mitmachen: `Der Heuballen verlor. Deutlich.`,
      korrigieren: `Finn hielt den Stock exakt so, wie ich es ihm gezeigt hatte. Stolz wie ein Ritter vor der Weihe.`,
      taktisch: `Finn wiederholte »Flanke sichern« den ganzen Nachmittag, ohne zu wissen, wie absurd das aus dem Mund eines Vierjährigen klang.`,
      default: ``,
    },
    text: `Wir verbrachten den Nachmittag zusammen. Finn redete genug für drei Personen. Ich hörte zu — eine Fähigkeit, die Finn mit Begeisterung als persönliche Tugend interpretierte.

»Du bist mein bester Freund«, erklärte er irgendwann.
»...Wir kennen uns seit zwei Stunden.«
»BESTER. FREUND. FÜR. IMMER.«

In meinem alten Leben hätte ich so etwas naiv genannt.

Hier sagte ich:
»...Okay. Für immer.«

Finns Grinsen wurde noch breiter — ein medizinisches Wunder. Er schlug mir auf die Schulter, fast zu fest für einen Vierjährigen, und rannte dann nach Hause, um seiner Mutter von seinem neuen »besten Freund für immer« zu erzählen.

Ich blieb am Brunnen stehen.
Allein.
Und lächelte.

Vielleicht war es das erste echte Lächeln seit meinem Tod.`,

    choices: [{ text: "→ Sera — Die Außenseiterin", next: "a2k1_sera", narrativeFeedback: "Sera sitzt allein auf einem Felsen. Das ist kein Zufall." }],
    affinityEffect: { finn: 5 }
  },

  a2k1_sera: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Sera — Die Außenseiterin",
    scene: "Fluss am Waldrand, Millheim — Alter: 4,5 Jahre",
    bg: "village",
    music: "theme_mystery",
    text: `Drei Monate später sahen Finn und ich sie zum ersten Mal.

Sera saß auf einem Felsen am Fluss. Pechschwarzes Haar, eine rote Strähne, bernsteinfarbene Augen. Sie war allein — nicht auf die zufällige Art, wie Kinder manchmal allein sind. Sondern auf die trainierte Art.

Finn flüsterte:
»Das ist Sera. Die Seltsame.«

»Seltsam?«
»Wenn sie wütend wird, werden Sachen HEISS. Letztes Jahr hat Leon sie geärgert und ihre Jacke hat gebrannt. Alle sagen, sie ist verflucht.«

Mein Terminal kribbelte.

Ich sah, wie der Stein, den Sera ins Wasser warf, beim Eintauchen Dampf aufsteigen ließ.

Ich aktivierte [Code.Read].`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: SERA BLACKWOOD",
      lines: [
        "> NAME: Sera Blackwood",
        "> Rasse: Mensch",
        ">",
        "> [RASSENINTEGRITÄT KOMPROMITTIERT]",
        "> [Versteckter Code: 0xDE_DEMON_50%]",
        ">",
        "> Versteckte Attribute:",
        "> [Dämonisches Erbe: UNTERDRÜCKT]",
        "> [Feueraffinität: LATENT]",
        "> [Wahre Klassifikation: HALBDÄMONIN]",
        ">",
        "> Systemkommentar:",
        "> »Mischling. Beobachten.",
        "> Falls Unterdrückung versagt:",
        "> ELIMINIERUNGSPROTOKOLL einleiten.«",
      ]
    },

    text2: `Halbdämonin.

Fünf Jahre alt, allein auf einem Felsen, und das System hatte bereits ein Löschprotokoll für sie vorbereitet.

Ich kannte dieses Gefühl.
Nicht den Dämonenteil.
Den Rest.

Fehler.
Anomalie.
Etwas, das gelöscht werden sollte, wenn es unbequem wurde.

»Ich gehe zu ihr rüber«, sagte ich.
Finn starrte mich an.
»Was? Aber sie ist—«
»Komm mit. Oder warte hier.«`,

    choices: [
      {
        text: "A) Du gehst allein zu ihr.",
        desc: "[AF+Sera] Ruhiger, intimerer erster Kontakt.",
        next: "a2k1_sera_begegnung",
        affinityEffect: { sera: 10 },
        flagEffect: { seraErstbegegnung: "allein" },
        narrativeFeedback: "Sera sieht dich kommen und läuft nicht weg. Bei ihr ist das bereits ein Zeichen von Vertrauen.",
      },
      {
        text: "B) Du überzeugst Finn mitzukommen.",
        desc: "[AF+Sera/Finn] Dreiecksdynamik von Anfang an.",
        next: "a2k1_sera_begegnung",
        affinityEffect: { sera: 5, finn: 5 },
        flagEffect: { seraErstbegegnung: "mit_finn" },
        narrativeFeedback: "Sera verschränkt die Arme. Finn winkt zu enthusiastisch. Es funktioniert trotzdem irgendwie.",
      },
      {
        text: "C) Du bringst ihr ein Stück von Elenas Brot.",
        desc: "[AF+Sera] Misstrauen trifft Fürsorge. Sie merkt sich das.",
        next: "a2k1_sera_begegnung",
        affinityEffect: { sera: 15 },
        flagEffect: { seraErstbegegnung: "brot" },
        narrativeFeedback: "Sera sieht erst das Brot an, dann dich. Sie nimmt es kommentarlos. Isst es langsam. Bleibt sitzen.",
      },
    ]
  },

  a2k1_sera_begegnung: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Die erste Begegnung",
    scene: "Felsen am Fluss",
    bg: "village",
    music: "theme_friendship",
    conditionalFlag: "seraErstbegegnung",
    textConditional: {
      brot: `Sie hielt das Brot, als wäre es gleichzeitig ein Geschenk und eine Falle.`,
      allein: `Kein Finn. Keine Ablenkung. Nur ein stilles Mädchen und ein stiller Junge auf Kollisionskurs.`,
      mit_finn: `Finn machte alles lauter. Vielleicht war genau das nützlich.`,
      default: ``,
    },
    text: `Sera sah mich kommen. Misstrauisch. Bereit zur Flucht. Bereit zum Kampf.

»Geh weg«, sagte sie.
»Warum?«
»Weil alle weggehen.«
»Ich bin nicht alle.«
»Doch. Sobald du merkst, dass ich komisch bin. Dass Sachen brennen, wenn ich wütend bin.«

Ich setzte mich nicht sofort.
Ich blieb in ihrer Reichweite stehen.
»Du hast eine starke Feueraffinität«, sagte ich ruhig. »Deshalb brennen Sachen.«

Stille.

»...Woher weißt du das?«
»Ich sehe Dinge, die andere nicht sehen.«
»Was für Dinge?«
»Dass du nicht komisch bist. Nur anders. So wie ich.«

Sera sah mich lange an.
Dann rückte sie auf dem Felsen zur Seite.

Das war keine Einladung.
Das war Erlaubnis.

Ich setzte mich neben sie.
Wir warfen Steine ins Wasser.
Und sagten für eine Weile nichts mehr.

Es war genug.`,

    choices: [{ text: "→ Die Drei vom Fluss", next: "a2k1_gruppe", narrativeFeedback: "Finn. Sera. Du. Etwas formt sich." }],
    affinityEffect: { sera: 10 }
  },

  a2k1_gruppe: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Die Drei vom Fluss",
    scene: "Fluss und Waldrand — Alter: 5 Jahre",
    bg: "village",
    music: "theme_friendship",
    text: `In den nächsten Monaten formte sich etwas, das ich in meinem ersten Leben nie wirklich gehabt hatte:
eine Gruppe.

Finn.
Sera.
Ich.

Finn akzeptierte Sera, weil ich sie akzeptierte. Seine Logik war brutal simpel und damit moralisch den meisten Erwachsenen überlegen.
Sera brauchte länger. Wochen. Vielleicht Monate. Aber Finn gab nicht auf. Er bot ihr Essen an, erzählte ihr absurde Heldenpläne und fiel einmal beim Versuch, einen »Riesenfisch« mit bloßen Händen zu fangen, rückwärts in den Fluss.

Als Sera zum ersten Mal wirklich lachte, wusste ich: Das war es.

Nicht Zufall.
Nicht Zweckgemeinschaft.
Freundschaft.`,

    choices: [{ text: "→ Gregors Geschichten", next: "a2k1_gregor_geschichten", narrativeFeedback: "Gregor erzählt Märchen, die keine sind." }]
  },

  a2k1_gregor_geschichten: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Gregors Geschichten",
    scene: "Kaminfeuer, Millheim — Winter, Alter: 5 Jahre",
    bg: "cottage",
    music: "theme_gregor",
    conditionalFlag: "gregorAufmerksam",
    textConditional: {
      true: `Gregor sprach zu allen, aber er erzählte für mich.`,
      default: ``,
    },
    text: `Gregor kam jeden Abend. Aber seine Geschichten veränderten sich.

»Vor langer Zeit«, sagte er, »bevor das System da war, waren die Sterne frei. Dann kamen die Sieben. Sie gaben jedem Stern einen Platz, eine Aufgabe, eine Regel.«

Mira klatschte.
Finn verstand nur die Hälfte.
Sera tat so, als hörte sie nicht zu.

Ich hörte jedes Wort.

»Die meisten Sterne akzeptierten es«, fuhr Gregor fort. »Aber einer nicht. Der kleinste Stern. Der siebte. Er sagte: Ich leuchte, wie ich will.«

Gregor sah direkt zu mir.

»Und dann hörte er auf zu leuchten. Nicht weil er schwach war. Sondern weil man etwas nicht fangen kann, das man nicht mehr sieht.«`,

    text2: `Es war kein Märchen.
Nicht wirklich.

Gregor erzählte Geschichte in Kinderform.

Die Siebte.
Septima.
Der Stern, den das System nicht greifen konnte.

Er wusste nicht alles.
Aber genug, um es zu verstecken.`,

    choices: [
      {
        text: "A) Du fragst Gregor später allein: »Wer ist der siebte Stern wirklich?«",
        desc: "[AF+Gregor] Direkter Wissenspfad.",
        next: "a2k1_gregor_stern_reaktion",
        affinityEffect: { gregor: 15 },
        wissenEffect: ["septimaIdentitaet"],
        flagEffect: { gregorGespraech: "direkt" },
        narrativeFeedback: "Gregor schaut dich lange an, bevor er antwortet. Nicht überrascht. Eher bestätigt.",
      },
      {
        text: "B) Du sagst nichts und merkst dir alles.",
        desc: "[AL+Verborgenheit] Du sammelst Puzzleteile statt Antworten.",
        next: "a2k2_rolands_training",
        alignEffect: { verborgenheit: 2, ordnung: 1 },
        flagEffect: { gregorGespraech: "passiv" },
        narrativeFeedback: "Nicht jede Frage wird besser, wenn man sie sofort stellt. Manche müssen erst schwer genug werden.",
      },
      {
        text: "C) Du erzählst Gregor vom Void-Terminal. Alles.",
        desc: "[SC] Höchstes Vertrauen. Höchstes Risiko.",
        next: "a2k2_rolands_training",
        affinityEffect: { gregor: 30 },
        wissenEffect: ["septimaIdentitaet", "architektenExistenz"],
        alignEffect: { verborgenheit: -4, licht: 1 },
        flagEffect: { gregorGespraech: "voll", gregorWeissAlles: true },
        narrativeFeedback: "Gregor hört zu, ohne dich ein einziges Mal zu unterbrechen. Danach sieht er älter aus. Und ruhiger.",
      },
    ]
  },

  a2k1_gregor_stern_reaktion: {
    act: "AKT II",
    chapter: "Kapitel 5 — Compile.Childhood()",
    title: "Der siebte Stern",
    scene: "Gregors Haus",
    bg: "cottage",
    music: "theme_gregor",
    text: `Gregor stellte die Tasse langsam ab.

»Es gibt ein Wort«, sagte er schließlich. »Alt-Aetherisch. Sehr alt. Älter als das Reich. Älter als das System.«

Er sah aus dem Fenster, als müsste er es aus der Dunkelheit holen.

»Septima.«

Das Wort fiel zwischen uns und blieb dort.

»Ich weiß nicht, ob es ein Name ist oder ein Titel«, sagte Gregor. »Ich weiß nur, dass es wichtig genug war, um in Geschichten versteckt zu werden.«

Ich nickte.
Gregor nickte zurück.

Mehr brauchten wir in diesem Moment nicht.`,

    choices: [{ text: "→ Rolands Training", next: "a2k2_rolands_training", narrativeFeedback: "Roland nimmt einen Stock. Das Training beginnt." }]
  },

  // ════ KAPITEL 6: RUNTIME.TRAINING() ═════════════════════════════════════

  a2k2_rolands_training: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Rolands Schwert",
    scene: "Waldrand, Millheim — Alter: 5 Jahre",
    bg: "village",
    music: "theme_training",
    text: `Roland begann mein Training mit einem Stock.

Nicht mit einem Schwert. Nicht mit Heldensprüchen. Mit einem Stück Haselnussholz und der nüchternen Feststellung:
»Ich bringe dir nicht bei, wie man gewinnt. Ich bringe dir bei, wie man überlebt.«

Er hatte recht. Gewinnen war eine Luxusfrage. Überleben war Basisarchitektur.

Wir trainierten im Wald, nie auf offenem Feld. Balance. Timing. Umgebung. Rückzüge. Schutz.

Und irgendwann zeigte mir [Code.Analyze] etwas Neues:
Rolands Bewegungen waren nicht nur Körpertraining.
Sie waren strukturierte Muster.
Extrahierbar.`,

    systemBox: {
      title: "VOID-TERMINAL — SKILL-FRAGMENTE ERKANNT",
      lines: [
        "> Verfügbare Trainingsfragmente:",
        "> 1. [Parade LV1]",
        "> 2. [Beinarbeit LV1]",
        ">",
        "> Warnung:",
        "> Void-Memory bleibt begrenzt",
        "> Fragmente verbrauchen Slots",
      ]
    },

    text2: `Nach dem Training stand Roland still da, als hätte der Schmerz in seinem Bein beschlossen, erst dann laut zu werden, wenn niemand mehr zusah.

»Papa«, fragte ich, »warst du Soldat?«

Er sagte nicht sofort ja.
Aber sein Schweigen tat es.`,

    choices: [
      {
        text: "A) [Parade] extrahieren — »Ich weiß, dass du einen falschen Namen trägst.«",
        desc: "[SC] Direkte Konfrontation. Mehr Nähe. Mehr Risiko.",
        next: "a2k2_roland_reaktion_a",
        skillUnlock: ["paradeLv1"],
        flagEffect: { rolandGeheimnis: "direkt", trainingFokus: "parade" },
        narrativeFeedback: "Roland erstarrt. Sein Holzstock bleibt in der Luft stehen. Er sieht dich an — nicht wie einen Sohn. Wie eine Frage, die er sich selbst nie laut gestellt hatte.",
      },
      {
        text: "B) [Beinarbeit] extrahieren — »Ich werde stärker, damit du nicht allein beschützen musst.«",
        desc: "[AF+Roland] Emotional stärkerer, sanfterer Pfad.",
        next: "a2k2_aldwin_unterricht",
        skillUnlock: ["beinarbeitLv1"],
        affinityEffect: { roland: 20 },
        flagEffect: { rolandGeheimnis: "indirekt", trainingFokus: "beinarbeit" },
        narrativeFeedback: "Roland schaut dich lange an. Dann nickt er nur. Mehr braucht er nicht.",
      },
      {
        text: "C) »Es ist okay. Du musst es mir noch nicht sagen.«",
        desc: "[AF+Roland] Geduld als Nähe.",
        next: "a2k2_aldwin_unterricht",
        affinityEffect: { roland: 10 },
        flagEffect: { rolandGeheimnis: "verschwiegen" },
        narrativeFeedback: "Roland atmet aus, als hätte er unbemerkt seit Jahren Luft angehalten.",
      },
    ]
  },

  a2k2_roland_reaktion_a: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Rolands Geheimnis",
    scene: "Waldrand",
    bg: "village",
    music: "theme_family",
    text: `Roland erstarrte.

»...Woher weißt du das?«

Ich hätte lügen können.
Ich tat es nicht.

»Ich kann Dinge sehen, die andere nicht sehen. Status. Flüche. Versteckte Felder. Deinen Namen.«

Er sagte lange nichts.
Dann:
»Roland von Eisenhardt. Ritter. Rang B. Elfte Klinge.«

Der Wind ging durch die Bäume.

»Ich habe etwas gesehen, das ich nicht hätte sehen dürfen«, sagte er.
»Und das System hat entschieden, dass ich dafür den Rest meines Lebens hinken soll.«

Er sah mich an.
Nicht wie einen Fünfjährigen.
Wie etwas Schwierigeres.

Dann legte er die Hand auf meinen Kopf.
Unbeholfen. Schwer.

»Du bist mein Sohn«, sagte er.
»Das ist das Einzige, das ich nicht in Frage stelle.«`,

    choices: [{ text: "→ Aldwins Unterricht", next: "a2k2_aldwin_unterricht", narrativeFeedback: "Aldwin bleibt diesmal. Das bedeutet etwas." }],
    affinityEffect: { roland: 30 },
    wissenEffect: ["rolandEchterName", "rolandFluch"]
  },

  a2k2_aldwin_unterricht: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Aldwins Rückkehr",
    scene: "Aldwins Hütte, Millheim — Alter: 6 Jahre",
    bg: "cottage",
    music: "theme_mystery",
    text: `Aldwin kehrte zurück.
Diesmal nicht als flüchtiger Händler.
Diesmal blieb er.

»Du bist kein Händler«, sagte ich.
»Und du bist kein normales Kind«, antwortete er.

Er nahm den Hut ab. Für einen Moment flackerte die Illusion. Violette Augen. Halbelfische Züge. Müdigkeit, die viel älter war als seine Haut.

»Mein Name ist Aldwin. Ich bin ein Chronist. Einer der letzten.«

Er lehrte mich in den folgenden Monaten drei Dinge:
die wahre Geschichte Aethermeres,
die Grundlagen Wilder Magie,
und wie das System nicht als Religion, sondern als Architektur gedacht werden musste.

Als ich ihm erklärte, dass das System im Kern ein Programm war, sah er mich an, als hätte ich ihm in drei Sätzen gegeben, wonach er zweihundert Jahre gesucht hatte.`,

    choices: [{ text: "→ Die erste Wilde Magie", next: "a2k2_wilde_magie", narrativeFeedback: "Keine Systemmagie. Etwas Älteres antwortet." }],
    affinityEffect: { aldwin: 20 },
    wissenEffect: ["systemIstProgramm", "architektenExistenz"]
  },

  a2k2_wilde_magie: {
    act: "AKT II",
    chapter: "Kapitel 6 — Runtime.Training()",
    title: "Die erste Wilde Magie",
    scene: "Aldwins Hütte",
    bg: "cottage",
    music: "theme_void_terminal",
    text: `Aldwin stellte eine Kerze auf den Tisch.

»Zünde sie an«, sagte er.
»Ich kann keine System-Feuermagie.«
»Gut«, sagte er. »Dann benutze keine.«

Ich dachte an Elenas Lieder. Nicht an Kontrolle, sondern an Verbindung.
Nicht an Befehl, sondern an Bitte.

Ich summte.
Ein Funke.
Dann noch einer.
Und schließlich eine kleine, zittrige Flamme auf dem Docht.`,

    systemBox: {
      title: "VOID-TERMINAL — NEUE FÄHIGKEIT ERKANNT",
      lines: [
        "> [Wilde Magie — Funke] (Rudimentär)",
        "> → Nicht systemregistriert",
        "> → Nutzt Aether direkt",
        ">",
        "> P.S.: Gut gemacht.",
        "> — S.",
      ]
    },

    text2: `Es war keine Systemmagie.
Kein Interface.
Kein MP-Kostenfeld.
Keine Genehmigung.

Nur ich.
Und die Welt.
Und etwas dazwischen, das antwortete.

Zum ersten Mal fühlte sich Macht lebendig an.`,

    choices: [{ text: "→ Kapitel 7: Sera und das Feuer", next: "a2k3_sera_feuer", narrativeFeedback: "Sera ist älter geworden. Das Feuer nicht weniger." }],
    skillUnlock: ["wildeMagie"]
  },

  // ════ KAPITEL 7: DEBUG.LIFE() ═══════════════════════════════════════════

  a2k3_sera_feuer: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Sera und das Feuer",
    scene: "Flussfelsen, Millheim — Alter: 7 Jahre",
    bg: "village",
    music: "theme_friendship",
    text: `Wir waren älter geworden.
Nicht viel. Genug.

Finn redete jetzt mit einem Holzschwert wie mit einer religiösen Autorität.
Sera lächelte etwas häufiger, aber nur wenn sie es vergaß.
Ich wurde immer schlechter darin, so zu tun, als wäre nichts von dem, was ich wusste, schwer.

An diesem Abend zeigte Sera mir ihre Hände.
Die Fingerspitzen waren gerötet.

»Es ist wieder passiert«, sagte sie. »Die Decke hat letzte Nacht geschwelt. Ich hab geschlafen, Kaito. Ich war nicht mal wütend.«

Dann sah sie mich an.
Direkt.
Ohne jeden Schutz.

»Was stimmt nicht mit mir?«`,

    choices: [
      {
        text: "A) DIE HALBE WAHRHEIT — »Du hast eine extrem starke Feueraffinität.«",
        desc: "[AF+Sera] Wahrheit, aber nicht alles. Schutz durch Dosierung.",
        next: "a2k3_sera_halbwahrheit",
        affinityEffect: { sera: 25 },
        flagEffect: { seraWahrheitPfad: "halbe" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Sera atmet aus. Ein Name ist manchmal schon fast eine Rettung.",
      },
      {
        text: "B) DIE VOLLE WAHRHEIT — »Du bist halb Dämonin.«",
        desc: "[SC] Der ehrlichste und explosivste Pfad.",
        next: "a2k3_sera_explosion",
        affinityEffect: { sera: 30 },
        flagEffect: { seraWahrheitPfad: "voll" },
        alignEffect: { licht: 1, verborgenheit: -3 },
        narrativeFeedback: "Sera erstarrt. Dann fängt die Luft um sie herum an zu zittern.",
      },
      {
        text: "C) LÜGE — »Ich weiß es noch nicht. Aber ich finde es heraus.«",
        desc: "[SC] Zeitgewinn jetzt, Risiko später.",
        next: "a2k3_sera_luege",
        affinityEffect: { sera: 5 },
        flagEffect: { seraWahrheitPfad: "luege", seraLuegeAusstehend: true },
        narrativeFeedback: "Sera glaubt dir. Gerade das macht die Lüge schwerer.",
      },
      {
        text: "D) UMLEITUNG — »Was mit dir stimmt? Du bist stark. Lass uns lernen, wie man das führt.«",
        desc: "[AF+Sera] Emotionale Validierung ohne Offenlegung.",
        next: "a2k3_sera_training",
        affinityEffect: { sera: 15 },
        flagEffect: { seraWahrheitPfad: "staerkung" },
        narrativeFeedback: "Sera sieht auf ihre Hände. Dann nickt sie. Nicht weil sie zufrieden ist — weil es ein Anfang ist.",
      },
    ]
  },

  a2k3_sera_halbwahrheit: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Affinität",
    scene: "Waldlichtung",
    bg: "village",
    music: "theme_family",
    text: `»Du hast eine Feueraffinität«, sagte ich. »Eine sehr starke.«

Sera starrte auf ihre Hände.
»Ist das normal?«
»Nein.«
»Aber ich bin kein Monster.«
»Nein.«

Sie atmete aus. Lang.
Dann schloss sie die Finger zu Fäusten.
Nicht aus Wut.
Aus Entschlossenheit.

»Dann will ich lernen, wie man das kontrolliert.«

Das war mutiger als die meisten Heldensätze, die ich in meinem ersten Leben gehört hatte.`,

    choices: [{ text: "→ Das Kontrolltraining", next: "a2k3_sera_training", narrativeFeedback: "Feuer hat keinen Namen — bis du ihm einen gibst." }]
  },

  a2k3_sera_explosion: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Die Explosion",
    scene: "Flussfelsen",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Sera erstarrte.

Dann explodierte die Welt um sie herum in Hitze.

Steine glühten.
Wasser dampfte.
Finn stolperte rückwärts ins Gras.
Seras Augen brannten bernsteinfarben wie aufgerissene Wunden.

»ICH BIN EIN MONSTER!«

Ich griff nach ihr, obwohl ich wusste, dass es wehtun würde.
Meine Hände verbrannten sofort.

»SERA!«
»LASS MICH LOS!«
»NEIN.«

Sie sah die Verbrennungen.
Und die Flammen sanken.`,

    text2: `Sie weinte.
Zum ersten Mal, seit ich sie kannte.

»Du bist kein Monster«, sagte ich. »Du bist Sera. Das ist mehr als genug.«

Die Dorfhälfte würde die Hitze bemerkt haben.
Die Zeit wurde kürzer.

Aber in diesem Moment zählte nur, dass sie meine Hand nicht losließ.`,

    choices: [{ text: "→ Das Kontrolltraining", next: "a2k3_sera_training", narrativeFeedback: "Feuer hat keinen Namen — bis du ihm einen gibst." }],
    affinityEffect: { sera: 20 }
  },

  a2k3_sera_luege: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Ich weiß es nicht",
    scene: "Waldlichtung",
    bg: "village",
    music: "theme_family",
    text: `»Ich weiß es noch nicht«, log ich.

Sera sah mich an.
Lange.
Aufmerksam.
Zu aufmerksam.

Dann nickte sie.
»Okay.«

Nur ein Wort.
Aber Vertrauen hat Gewicht, selbst wenn es aus vier Buchstaben besteht.

Ich wusste die Antwort.
Ich sagte sie nicht.

Das Terminal kommentierte nichts.
Es musste nicht.`,

    choices: [{ text: "→ Das Kontrolltraining", next: "a2k3_sera_training", narrativeFeedback: "Feuer hat keinen Namen — bis du ihm einen gibst." }]
  },

  a2k3_sera_training: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Das Kontrolltraining",
    scene: "Flussufer bei Nacht",
    bg: "night",
    music: "theme_training",
    conditionalFlag: "seraWahrheitPfad",
    textConditional: {
      halbe: `Jetzt, da das Feuer einen Namen hatte, konnte Sera anfangen, es nicht mehr nur zu fürchten.`,
      voll: `Nach der Explosion war Kontrolle keine Option mehr. Sie war überlebensnotwendig.`,
      luege: `Ich konnte ihr die Wahrheit nicht geben. Also gab ich ihr Werkzeuge. Für den Moment musste das reichen.`,
      staerkung: `Sera brauchte keine Theorie zuerst. Sie brauchte einen ersten Sieg über die Angst.`,
      default: ``,
    },
    text: `Ich begann, Sera heimlich zu trainieren.

Nicht Kampftraining.
Kontrolltraining.

»Stell dir deine Kraft wie ein echtes Feuer vor«, sagte ich. »Nicht wie einen Zauber. Einen Kamin. Etwas, das Wärme geben oder ein Haus niederbrennen kann. Der Unterschied ist nicht das Feuer. Der Unterschied bist du.«

Ich konnte die System-Unterdrückung sehen — wie eine Kette aus Code um ihr dämonisches Erbe.
Ich konnte sie noch nicht entfernen.
Aber ich konnte ihr zeigen, wie man innerhalb der Ketten atmet, statt an ihnen zu reißen.

Sera hob die Hand.
Eine kleine Flamme erschien auf ihrer Handfläche.
Ruhig.
Kontrolliert.

Sie starrte sie an, als hätte sie gerade zum ersten Mal einen Teil von sich gesehen, der nicht schrecklich war.

»...Danke«, sagte sie.

Es war das erste Mal, dass Sera sich bei jemandem bedankte.`,

    choices: [{ text: "→ Gregors Geschenk", next: "a2k3_gregor_geschenk", narrativeFeedback: "Gregor hat lange auf den richtigen Moment gewartet." }],
    affinityEffect: { sera: 15 }
  },

  a2k3_gregor_geschenk: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Gregors Geschenk",
    scene: "Gregors Haus — Herbst, Alter: 7 Jahre",
    bg: "cottage",
    music: "theme_gregor",
    text: `Gregor war krank geworden. Kein dramatischer Zusammenbruch — eher die langsame, unerbittliche Müdigkeit eines Körpers, der schon lange mehr getragen hatte, als gut für ihn war.

Eines Abends rief er mich zu sich.
Allein.

Er zog eine alte Holzbox unter dem Bett hervor. Darin lag ein Tagebuch aus Leder. Daneben eine handgezeichnete Karte.

»Alt-Aetherisch«, sagte ich sofort.

Gregor hob eine Augenbraue. »Natürlich kannst du das lesen.«

Das Tagebuch war älter als alles, was ich je in der Hand gehalten hatte. Prä-systemische Aufzeichnungen. Wilde Magie. Chroniken einer Blutlinie. Hinweise auf die Siebte. Auf einen systemfreien Ort.`,

    systemBox: {
      title: "VOID-TERMINAL — OBJEKT-ANALYSE",
      lines: [
        "> OBJEKT: Prä-systemisches Tagebuch",
        "> Sprache: Alt-Aetherisch",
        ">",
        "> Enthält:",
        "> • Welt vor dem System",
        "> • Wilde-Magie-Notizen",
        "> • Hinweise auf »Die Siebte«",
        "> • Karte zu einem systemfreien Ort",
        ">",
        "> Bewertung:",
        "> Unbezahlbar",
      ]
    },

    choices: [
      {
        text: "A) Du umarmst Gregor wortlos.",
        desc: "[AF+Gregor] Zärtlichkeit statt Analyse.",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 25 },
        flagEffect: { gregorBuch: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Gregor versteift sich kurz — dann legt er die Arme um dich. »Mach was Gutes draus, Junge.«",
      },
      {
        text: "B) »Opa... dieses Buch könnte alles verändern.«",
        desc: "[AF+Gregor] Der analytische, aber ehrliche Pfad.",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 20 },
        flagEffect: { gregorBuch: true },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Gregor nickt ernst. »Dann sorg dafür, dass es das Richtige verändert.«",
      },
      {
        text: "C) »Warum gibst du es mir jetzt?«",
        desc: "[AF+Gregor] Er antwortet nicht mit Theorie, sondern mit Zeitlichkeit.",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 15 },
        flagEffect: { gregorBuch: true },
        narrativeFeedback: "Gregor lächelt müde. »Weil ich nicht sicher bin, wie viel später ich noch habe.«",
      },
    ]
  },

  a2k3_warnung: {
    act: "AKT II",
    chapter: "Kapitel 7 — Debug.Life()",
    title: "Aldwins Warnung",
    scene: "Küche der Familie Ashford",
    bg: "night",
    music: "theme_mystery",
    text: `Aldwin kam zum Abendessen. Er lächelte nicht.

»Roland«, sagte er. »Wir haben ein Problem.«

Roland legte das Messer weg.
Elena hob Mira aus dem Hochstuhl, ohne ein Wort zu sagen.
Gregor hustete nur und blieb sitzen.

»Die Systemkirche schickt Inquisitoren in diese Region«, sagte Aldwin. »Sie suchen nach einer Anomalie.«

Elena sah zuerst Roland an.
Dann mich.

»Wie viel Zeit haben wir?« fragte sie.

»Tage«, sagte Aldwin.
»Vielleicht eine Woche.«`,

    text2: `Neben mir schlief Mira mit offener Faust und schmutzigen Knien.
Ich sah sie an.
Dann Roland.
Dann Elena.

Nicht dem System.
Nicht den Architekten.
Nicht einem Gott.

Mir selbst schwor ich:
Ich werde sie beschützen.`,

    choices: [{ text: "→ Kapitel 8: Kriegsrat", next: "a2k4_kriegsrat", narrativeFeedback: "Aldwin lächelt nicht. Das sagt alles." }],
    flagEffect: { schutzSchwur: true }
  },

  // ════ KAPITEL 8: FIREWALL.BREACH() ══════════════════════════════════════

  a2k4_kriegsrat: {
    act: "AKT II",
    chapter: "Kapitel 8 — Firewall.Breach()",
    title: "Kriegsrat am Küchentisch",
    scene: "Küche der Ashfords — Morgen",
    bg: "cottage",
    music: "theme_family",
    text: `Am nächsten Morgen saßen wir alle am Küchentisch.

Roland.
Elena.
Gregor.
Aldwin.
Und ich.

Elena hatte darauf bestanden.
»Wenn mein Sohn der Grund ist, warum die Kirche hierherkommt, dann sitzt er mit am Tisch.«

Aldwin erklärte es nüchtern:
Ich war für das Genesis-System unsichtbar.
Nicht direkt messbar.
Aber dort, wo ein Status hätte sein müssen, entstand im Aether eine Leerstelle.
Hochrangige Scans fanden nicht mich.
Sie fanden das Loch, das ich im System hinterließ.`,

    text2: `Elena wurde blass. Nicht schwach. Nur stiller.

»Mein Sohn ist keine Waffe«, sagte sie.

Ich antwortete, bevor Aldwin es konnte.
»Mama. Ich weiß es. Seit meiner Geburt. Ich bin anders. Das System sieht mich nicht. Aber ich sehe es.«

Roland wurde sehr still.
Gregor sah aus, als würde ihn nichts davon überraschen, nur die Reihenfolge.`,

    choices: [
      {
        text: "A) ALLES erzählen — Terminal, Septima, das alte Leben nur andeuten.",
        desc: "[SC] Maximales Familienvertrauen.",
        next: "a2k4_plan",
        affinityEffect: { elena: 20, roland: 15, gregor: 10 },
        alignEffect: { licht: 2 },
        flagEffect: { familieWeissAlles: true },
        narrativeFeedback: "Elena weint nicht lange. Dann richtet sie sich auf. »Gut. Dann kämpfen wir richtig.«",
      },
      {
        text: "B) TEILWEISE — Du erklärst nur die Anomalie und dein Systemsehen.",
        desc: "[SC] Sicherer Pfad. Weniger Schock, genug Wahrheit.",
        next: "a2k4_plan",
        affinityEffect: { elena: 15, roland: 10, gregor: 5 },
        flagEffect: { familieWeissAlles: false },
        narrativeFeedback: "Roland nickt zuerst. Nicht weil er alles versteht. Weil es reicht.",
      },
      {
        text: "C) MINIMAL — »Lasst mich euch beschützen.«",
        desc: "[AL+Schatten] Kälter. Soldatischer. Effektiv.",
        next: "a2k4_plan",
        affinityEffect: { roland: 10, elena: -5 },
        alignEffect: { schatten: 2 },
        flagEffect: { familieWeissAlles: false },
        narrativeFeedback: "Elena sieht den Erwachsenen in deinen Worten und hasst, dass sie ihn versteht.",
      },
    ]
  },

  a2k4_plan: {
    act: "AKT II",
    chapter: "Kapitel 8 — Firewall.Breach()",
    title: "Der erste Hack — Code.Spoof",
    scene: "Aldwins Hütte — Nacht vor der Ankunft",
    bg: "void",
    music: "theme_void_terminal",
    text: `Die Inquisitoren suchten nach Anomalien.
Also musste ich dafür sorgen, dass ihre Scans eine harmlose Antwort erhielten.

Nicht die Realität ändern.
Nur die Rückmeldung.

In meiner alten Welt hätte man es Spoofing genannt.

Ich arbeitete die ganze Nacht.
Standardstatus zerlegen.
Antwortpakete nachbauen.
Aether-Impulse exakt genug formen, dass ein Scan sie für Systemdaten hielt.

Es war keine elegante Lösung.
Es war zusammengehackter Überlebenscode.

Also wahrscheinlich die richtige.`,

    systemBox: {
      title: "VOID-TERMINAL — NEUER BEFEHL",
      lines: [
        "> [Code.Spoof] — Rang: Rudimentär",
        "> → Erzeugt temporäre Fake-System-Antwort",
        "> → Dauer: ~1 Sekunde",
        "> → Gut gegen: Rang C oder niedriger",
        "> → Grenzwertig gegen: Rang B",
        "> → Cooldown: 5 Minuten",
        ">",
        "> Einschätzung:",
        "> »Beunruhigend vielversprechend«",
      ]
    },

    choices: [{ text: "→ Die Inquisitoren kommen", next: "a2k4_inquisitor", narrativeFeedback: "Schwarze Rüstung. Goldstickerei. Sie sind da." }],
    skillUnlock: ["codeSpoof"]
  },

  a2k4_inquisitor: {
    act: "AKT II",
    chapter: "Kapitel 8 — Firewall.Breach()",
    title: "Inquisitor Vex",
    scene: "Dorfplatz, Millheim — Mittag",
    bg: "village",
    music: "theme_mystery",
    text: `Sie kamen bei Tageslicht.
Zwölf Reiter in schwarzer Rüstung.
Und ein Mann in weißer Robe mit Goldstickerei.

Inquisitor Darius Vex.

Er ließ das Dorf auf dem Platz versammeln. Männer, Frauen, Kinder.
Niemand ausgenommen.

Dann begann er zu scannen.`,

    systemBox: {
      title: "VOID-TERMINAL — SCAN: VEX",
      lines: [
        "> Inquisitor Darius Vex",
        "> Level: 58",
        "> Klasse: System-Inquisitor (Rang B)",
        ">",
        "> Skill:",
        "> [Göttlicher Scan LV 7]",
        ">",
        "> Erfolgswahrscheinlichkeit [Code.Spoof]: 29%",
        ">",
        "> ...Nicht ideal.",
      ]
    },

    text2: `Als er vor mir stand, wurde die Welt sehr klein.

Das goldene Licht seines Scans traf mich.
Ich aktivierte [Code.Spoof].

»Level 1«, sagte Vex langsam.
Dann runzelte er die Stirn.

Er hatte etwas gespürt.
Nicht gesehen.
Gespürt.

Der zweite Scan kam sofort.
Mein Cooldown war noch aktiv.

Also tat ich etwas, das ich nicht geplant hatte:
Ich bat den Aether.

Versteck mich.

Für den Bruchteil einer Sekunde schob sich etwas zwischen mich und den Blick des Systems.
Nicht wie eine Wand.
Wie Mitleid.

»...Keine Anomalien«, sagte Vex schließlich.

Er ging weiter.
Und ich vergaß fast zu atmen.`,

    systemBox2: {
      title: "VOID-TERMINAL — UPDATE",
      lines: [
        "> Zusätzliche Unterstützung erkannt:",
        "> WILDER AETHER",
        ">",
        "> Neuer passiver Befehl:",
        "> [Aether.Resonance]",
        "> → Den Aether um Hilfe BITTEN",
        "> → Erfolg: situativ",
        ">",
        "> Hinweis:",
        "> Aether ist kein Werkzeug.",
        "> Eher... ein Partner mit Laune.",
      ]
    },

    choices: [{ text: "→ Sera wird entdeckt", next: "a2k4_sera_entdeckt", narrativeFeedback: "Vex scannt weiter. Dann steht er vor Sera." }],
    skillUnlock: ["aetherResonance"]
  },

  // ════ KAPITEL 9: SYSTEM.CRASH() ═════════════════════════════════════════

  a2k4_sera_entdeckt: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Sera wird entdeckt",
    scene: "Dorfplatz, Millheim",
    bg: "chaos",
    music: "theme_mystery",
    text: `Vex scannte weiter.
Dann stand er vor Sera.

Eine Sekunde.
Zwei.

Und plötzlich sprang Alarmrot in seiner Hand auf.

»HALTET SIE FEST!«

Sera wich zurück. Ihre Augen begannen zu glühen.
»Ich hab nichts getan!«

»Das ist irrelevant«, sagte Vex kalt.
»Dämonisches Erbe ist Verbrechen genug.«

Nein.

Das Wort war schon da, bevor ich es dachte.
Nicht sie.`,

    choices: [
      {
        text: "A) ÖFFENTLICH EINGREIFEN — »Lasst sie los!«",
        desc: "[SC] Maximal mutig. Maximal sichtbar.",
        next: "a2k5_kampf",
        affinityEffect: { sera: 30, finn: 15 },
        alignEffect: { licht: 2, verborgenheit: -5 },
        flagEffect: { dorfVerteidigung: "oeffentlich" },
        narrativeFeedback: "Sera sieht dich an — direkt, glühend, fassungslos. Dann richtet sie sich auf.",
      },
      {
        text: "B) VERDECKT HACKEN — Vex' Scan auf Sera manipulieren.",
        desc: "[SC] Intelligenter Pfad. Funktioniert nur knapp.",
        next: "a2k5_hack_versuch",
        alignEffect: { ordnung: 1, schatten: 1 },
        flagEffect: { dorfVerteidigung: "verborgen" },
        narrativeFeedback: "Dein Herzschlag klingt lauter als alles auf dem Platz. Unsichtbare Eingriffe sind auch Eingriffe.",
      },
      {
        text: "C) ROLAND GREIFT EIN — Du bewegst dich nicht. Er schon.",
        desc: "[SC] Rolands Vergangenheit wird sichtbar.",
        next: "a2k5_kampf",
        affinityEffect: { roland: 15 },
        flagEffect: { dorfVerteidigung: "roland" },
        narrativeFeedback: "Roland schiebt dich mit einer einzigen Bewegung hinter sich. Das sagt alles, was Worte nicht mehr tragen könnten.",
      },
      {
        text: "D) SIGNAL AN SERA — lautlos: »Brenne.«",
        desc: "[SC] Dunkelster Pfad. Sera entfesselt sich.",
        next: "a2k5_kampf",
        affinityEffect: { sera: -5 },
        alignEffect: { schatten: 2, verborgenheit: -3 },
        flagEffect: { dorfVerteidigung: "signal", seraKontrolle: "gebrochen" },
        narrativeFeedback: "Sera versteht. Und in dem Moment, in dem sie versteht, entscheidet sie sich nicht für Sicherheit.",
      },
    ]
  },

  a2k5_hack_versuch: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Der verborgene Eingriff",
    scene: "Dorfplatz",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Ich richtete meinen Fokus nicht auf Sera, sondern auf Vex' Scan.

Nicht das Ergebnis.
Die Übertragung.

Der Scan war kein Monolog.
Er war ein Dialog zwischen Anfrage und Antwort.

Und Dialoge konnte man stören.

Ich bat den Aether um etwas Präziseres als zuvor.
Nicht versteck mich.
Sondern:
Unterbrich das.

Ein unhörbarer Riss ging durch die Luft.

Vex blinzelte.
Sein Alarmstatus flackerte.
Und verschwand.

»...Mensch«, sagte er irritiert. »Keine Anomalie.«

Sera stand da, weiß vor Zorn und Angst.
Vex glaubte dem Ergebnis nicht ganz.
Aber gerade genug.`,

    choices: [{ text: "→ Die Eskalation", next: "a2k5_kampf", narrativeFeedback: "Vex ruft Verstärkung. Ein goldenes Signal steigt in den Himmel." }],
    affinityEffect: { sera: 25 },
    alignEffect: { ordnung: 1, verborgenheit: -2 }
  },

  a2k5_kampf: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Die Verteidigung von Millheim",
    scene: "Dorfplatz und Waldrand",
    bg: "chaos",
    music: "theme_training",
    text: `Wie genau es auch begann — es eskalierte.

Vex rief Verstärkung.
Ein Signalzauber schoss in den Himmel.
Golden. Sichtbar. Unmissverständlich.

Roland übernahm das Kommando in einem Tonfall, den ich bis dahin nur bruchstückhaft gehört hatte.

»Boris! Frauen und Kinder über den Nordpfad! Jäger mit mir in den Wald! Schwere Reiter verlieren im Unterholz!«

Elena packte Mira.
Mira schrie nach mir.
Finn stand neben mir mit einem Holzschwert in beiden Händen und zitterte so sichtbar, dass es fast weh tat.

»Ich gehe nicht«, sagte er. »Du bleibst, ich bleibe. Bester Freund. Für immer.«

Roland sah mich an.
Ich sagte:
»Ich bleibe auch.«`,

    choices: [
      {
        text: "A) »Ich verspreche, dass ich zurückkomme.«",
        desc: "[AF+Elena] Ehrlicher Trost, auch wenn du selbst nicht sicher bist.",
        next: "a2k5_finn_entscheidung",
        affinityEffect: { elena: 10 },
        flagEffect: { elenaAbschied: "versprechen" },
        narrativeFeedback: "Elena presst die Lippen zusammen und nickt. Das ist ihr Glaube — und ihre Angst.",
      },
      {
        text: "B) »Nimm Mira. Beschütze sie. Das hier ist meine Aufgabe.«",
        desc: "[AF+Roland] Soldatisch, hart, klar.",
        next: "a2k5_finn_entscheidung",
        affinityEffect: { roland: 10 },
        flagEffect: { elenaAbschied: "aufgabe" },
        narrativeFeedback: "Roland hört darin etwas von sich selbst. Elena hasst, dass er es auch hört.",
      },
      {
        text: "C) Du sagst nichts und gehst zu Roland.",
        desc: "[AL+Schatten] Kälter. Effektiv. Verletzend.",
        next: "a2k5_finn_entscheidung",
        affinityEffect: { elena: -5 },
        alignEffect: { schatten: 3 },
        flagEffect: { elenaAbschied: "schweigen" },
        narrativeFeedback: "Elena sieht deinen Rücken, nicht dein Gesicht. Das macht es nicht leichter.",
      },
    ]
  },

  a2k5_finn_entscheidung: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Bester Freund für immer",
    scene: "Dorfplatz — Evakuierung",
    bg: "chaos",
    music: "theme_training",
    timedDecision: true,
    timedSeconds: 8,
    timedDefault: 1,
    text: `Finns Hände zitterten am Holzschwert.

»Ich gehe nicht«, sagte er wieder. »Du bleibst, ich bleibe.«

Zwölf Kirchensoldaten.
Ein Inquisitor.
Und Finn.

Was sagst du?`,

    choices: [
      {
        text: "A) »Dann bleib. Aber hinter mir.«",
        desc: "[AF+Finn] Er bleibt. Aus Angst und trotz Angst.",
        next: "a2k5_finn_bleibt",
        affinityEffect: { finn: 20, roland: 5 },
        flagEffect: { finnImKampf: "geblieben" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn grinst zu breit für jemanden, der solche Angst hat. Vielleicht ist das Mut.",
      },
      {
        text: "B) »Finn... deine Mutter braucht dich. Geh.«",
        desc: "[AF-Finn] Sicherer. Schmerzlicher.",
        next: "a2k5_finn_geht",
        affinityEffect: { finn: -5 },
        flagEffect: { finnImKampf: "gegangen" },
        narrativeFeedback: "Finn nickt sofort. Das macht es schlimmer.",
      },
      {
        text: "C) »Mit einem Holzschwert bleibst du nicht. Hol dir ein echtes oder geh.«",
        desc: "[SC] Finn entscheidet über sich selbst — und Roland hilft.",
        next: "a2k5_finn_schwert",
        affinityEffect: { finn: 25, roland: 5 },
        flagEffect: { finnImKampf: "echtes_schwert" },
        narrativeFeedback: "Finn sieht erst dich an, dann das Holzschwert. Etwas in ihm wird plötzlich still.",
      },
    ]
  },

  a2k5_finn_bleibt: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "»Hinter mir.«",
    scene: "Dorfplatz",
    bg: "chaos",
    music: "theme_family",
    text: `Finn blieb.

Mit zitternden Händen.
Mit einem Holzschwert.
Mit mehr Angst, als einem Vierzehnjährigen gutgetan hätte — und er war erst sieben.

Er blieb trotzdem.

Das war vielleicht das Mutigste, was ich bis dahin je gesehen hatte.`,

    choices: [{ text: "→ Der Plan", next: "a2k5_taktik", narrativeFeedback: "Du brauchst keinen Heldenkampf. Du brauchst einen Exploit." }]
  },

  a2k5_finn_geht: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "»Geh.«",
    scene: "Dorfplatz",
    bg: "chaos",
    music: "theme_family",
    text: `Finn ging.
Zu schnell.
Ohne sich umzudrehen.

Das war richtig.
Wer zurückschaut, bleibt manchmal.

Ich sah ihm nicht nach.
Ich zählte Gegner.`,

    choices: [{ text: "→ Der Plan", next: "a2k5_taktik", narrativeFeedback: "Du brauchst keinen Heldenkampf. Du brauchst einen Exploit." }]
  },

  a2k5_finn_schwert: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Ein echtes Schwert",
    scene: "Dorfplatz",
    bg: "chaos",
    music: "theme_family",
    text: `Finn sah erst mich an, dann sein Holzschwert.

Roland zog wortlos ein kurzes Ersatzschwert aus einem Waffenbündel und warf es ihm zu.
Finn fing es mit beiden Händen.

Sein Gesicht wechselte von Schock zu Furcht zu etwas Schwererem.

Jetzt war das hier nicht mehr Spiel.

»...Ich bleibe«, sagte er.

Roland nickte nur einmal.
Das war Weihe genug.`,

    choices: [{ text: "→ Der Plan", next: "a2k5_taktik", narrativeFeedback: "Du brauchst keinen Heldenkampf. Du brauchst einen Exploit." }]
  },

  a2k5_taktik: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Der Bug Exploit",
    scene: "Dorfzentrum",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Ich brauchte keinen heroischen Kampf.
Ich brauchte einen Exploit.

Die Puristen waren noch nicht hier — nur Vex und seine unmittelbare Einheit. Elf normale Soldaten. Ein Inquisitor.

Roland war trotz Fluch ein Rang-B-Ritter.
Einzelne Soldaten waren für ihn keine Bedrohung.
Eine Gruppe war Logistik.

»Boris«, sagte ich, »wie viele Wolfsgruben?«
»Sechs.«
»Schlingen?«
»Drei.«
»Brücke über den Ostbach?«
»Wackelig.«

Ich lächelte.
»Perfekt.«`,

    systemBox: {
      title: "KAITOS PLAN",
      lines: [
        "> PHASE 1: Trennung",
        "> Soldaten in den Wald ziehen",
        ">",
        "> PHASE 2: Fallen",
        "> Wolfsgruben + Schlingen + Unterholz",
        ">",
        "> PHASE 3: Brücke",
        "> Schwere Rüstung + Wasser = Problem",
        ">",
        "> PHASE 4: Roland vs. Vex",
        ">",
        "> PHASE 5: Kaito analysiert in Echtzeit",
      ]
    },

    text2: `Der Plan funktionierte.

Nicht perfekt.
Genug.

Boris und die Jäger schluckten sieben Soldaten in den Wald.
Der Bach nahm drei weitere.
Am Ende blieb Vex.

Nur Vex.

Er sah Roland an.
Dann veränderte sich sein Gesicht.

»Roland von Eisenhardt«, sagte er langsam.
»Die Gebrochene Klinge.«`,

    text3: `Während Roland gegen Vex kämpfte, tat ich, was ich am besten konnte:
lesen.

Cooldowns.
Schwachstellen.
Bewegungsmuster.
Timing.

»PAPA! Drei Sekunden nach dem Leuchten! Sein linkes Knie!«

Roland hörte.
Verstand.
Und Vex ging zu Boden.

Für einen Herzschlag dachte ich, es sei vorbei.

Dann hob Vex die Hand.
»HALT.«

Rolands Körper erstarrte.

Ich rannte.`,

    choices: [{ text: "→ Der entscheidende Moment", next: "a2k5_rettung", narrativeFeedback: "Roland liegt auf dem Boden. Vex hebt die Klinge." }]
  },

  a2k5_rettung: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Der entscheidende Moment",
    scene: "Dorfzentrum",
    bg: "chaos",
    music: "theme_family",
    text: `Zwischen Vex' Klinge und Rolands Kehle standen plötzlich nur noch zehn Zentimeter Luft.
Und ich.

Vex scannte mich erneut.
Mein [Code.Spoof] war leer.
Keine Tarnung mehr.

Er sah:
nichts.

»Unmöglich«, flüsterte er.
»Du existierst nicht im System.«

»Ja«, sagte ich.

Das Terminal öffnete sich.
Nicht aus Höflichkeit.
Aus Notfall.`,

    systemBox: {
      title: "VOID-TERMINAL — NOTFALL-ANALYSE",
      lines: [
        "> SITUATION: KRITISCH",
        "> Roland: System-Einfrierung aktiv",
        "> Vex: Tödliche Absicht",
        ">",
        "> Optionen:",
        "> A) Aether direkt anrufen",
        "> B) Aldwin eingreifen lassen",
        "> C) Gregor tritt vor",
        "> D) [Code.Modify] erzwingen",
      ]
    },

    choices: [
      {
        text: "A) Der Aether antwortet",
        desc: "[SC] Realität selbst schützt. Mystischer, riskanter, großer Nachhall.",
        next: "a2k5_rettung_aether",
        alignEffect: { licht: 1 },
        flagEffect: { inquisitorVex: "aether", krossKommt: true },
        narrativeFeedback: "Du sagst dem Aether nur: Nein. Die Luft selbst gehorcht Vex nicht mehr. Ein Licht — älter als das System — antwortet.",
      },
      {
        text: "B) Aldwin greift ein",
        desc: "[SC] Aldwins Tarnung bricht. Vex überlebt mit Wissen.",
        next: "a2k5_rettung_aldwin",
        affinityEffect: { aldwin: 10 },
        flagEffect: { inquisitorVex: "aldwin", aldwinGeflohen: true },
        narrativeFeedback: "Aldwin hebt eine Hand. Das genügt. Vex fliegt durch den Platz — und sieht dabei etwas in Aldwins Augen, das ihn sofort die Flucht ergreifen lässt.",
      },
      {
        text: "C) Gregor tritt vor",
        desc: "[SC] Gregor bezahlt körperlich. Roland gewinnt danach.",
        next: "a2k5_rettung_gregor",
        affinityEffect: { roland: 20 },
        flagEffect: { inquisitorVex: "gregor", gregorVerletzt: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Gregor tritt zwischen Vex und dich. Unbewaffnet. Sein Zögern reicht Roland — der in diesem Moment aus der Systemstarre bricht.",
      },
      {
        text: "D) [Code.Modify] erzwingen",
        desc: "[SC] Erste systemische Gewaltnutzung. Hoher Preis.",
        next: "a2k5_rettung_void",
        alignEffect: { schatten: 3, chaos: 1 },
        flagEffect: { inquisitorVex: "void", kaitoBewusstlos: true },
        narrativeFeedback: "Das Terminal warnt. Du bestätigst trotzdem. Für eine Sekunde siehst du das System — und es sieht dich zurück.",
      },
    ]
  },

  a2k5_rettung_aether: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Der Aether antwortet",
    scene: "Dorfzentrum",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Ich schrieb keinen Code.
Ich sagte dem Aether nur:
Nein.

Die Luft selbst verweigerte Vex' Klinge den Gehorsam.
Ein Licht, älter als das System, blitzte auf.
Vex wurde zurückgeschleudert.
Rolands Starre brach.

Das Terminal warf Warnungen aus, die selbst ihm peinlich gewesen wären, wenn es so etwas wie Stolz besessen hätte.

Ich stand da und wusste:
Das würde Folgen haben.`,

    choices: [{ text: "→ Der Morgen danach", next: "a2k5_nachwirkungen", narrativeFeedback: "Vex ist besiegt. Millheim steht. Das Signal ist hinausgegangen." }]
  },

  a2k5_rettung_aldwin: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Aldwin",
    scene: "Dorfzentrum",
    bg: "chaos",
    music: "theme_void_terminal",
    text: `Aldwin hob nur eine Hand.

Das genügte.

Vex flog durch den Platz, prallte auf Stein und kam wieder hoch — nur um in Aldwins Blick etwas zu erkennen, das ihn sofort die Flucht ergreifen ließ.

Aldwins Tarnung war weg.
Sein wahres Alter lag plötzlich im Raum wie Gewicht.

»Das war teuer«, sagte er danach nur.

Ich nickte.
Wir wussten beide, wovon er sprach.`,

    choices: [{ text: "→ Der Morgen danach", next: "a2k5_nachwirkungen", narrativeFeedback: "Vex ist besiegt. Millheim steht. Das Signal ist hinausgegangen." }]
  },

  a2k5_rettung_gregor: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Gregor",
    scene: "Dorfzentrum",
    bg: "chaos",
    music: "theme_gregor",
    text: `Gregor trat zwischen Vex und mich.
Unbewaffnet.

»Du willst ein Kind töten?«, fragte er.
Nicht laut.
Nicht pathetisch.
Schrecklich normal.

Vex zögerte.
Nur einen Augenblick.
Dann schlug er Gregor beiseite.

Roland brach genau in diesem Moment aus der Systemstarre.
Der Rest des Kampfes war kurz.

Gregor lebte.
Aber Elena sah sofort, dass etwas an diesem Schlag tiefer getroffen hatte als Knochen.`,

    choices: [{ text: "→ Der Morgen danach", next: "a2k5_nachwirkungen", narrativeFeedback: "Vex ist besiegt. Millheim steht. Das Signal ist hinausgegangen." }]
  },

  a2k5_rettung_void: {
    act: "AKT II",
    chapter: "Kapitel 9 — System.Crash()",
    title: "Code.Modify",
    scene: "Dorfzentrum",
    bg: "void",
    music: "theme_void_terminal",
    text: `Das Terminal warnte.
Ich bestätigte trotzdem.

Für eine Sekunde sah mich das System wirklich.
Nicht indirekt.
Nicht über Leerräume.
Direkt.

Ich griff in Vex' Verbindung.
Zog.
Und seine Magie brach zusammen.

Roland war frei.
Vex nicht mehr.

Das Letzte, woran ich mich erinnere, war der Boden.
Und Miras Stimme, sehr weit weg.`,

    choices: [{ text: "→ Der Morgen danach", next: "a2k5_nachwirkungen", narrativeFeedback: "Vex ist besiegt. Millheim steht. Das Signal ist hinausgegangen." }]
  },

  a2k5_nachwirkungen: {
    act: "AKT II",
    chapter: "Kapitel 9 — Nachwirkungen",
    title: "Der Morgen danach",
    scene: "Millheim",
    bg: "village",
    music: "theme_family",
    text: `Vex war besiegt.
Millheim stand noch.

Aber das Signal war hinausgegangen.
Die Kirche wusste nun, dass etwas hier war.
Vielleicht ich.
Vielleicht nur ein Fehler in ihren Berichten.
Es spielte keine Rolle mehr.

Elena sagte es zuerst.
Natürlich Elena.

»Wir gehen.«

Niemand widersprach.

Das Dorf war Holz, Stein, Erinnerungen.
Wir waren Menschen.
Menschen konnte man noch retten.`,

    text2: `Wir hatten eine Nacht.
Mehr nicht.

Ich ging durch Millheim und sah jeden Ort doppelt:
wie er war,
und wie er nie wieder sein würde.

Das Haus.
Der Brunnen.
Der Fluss.
Der Felsen.
Die Scheune.
Gregors Fensterlicht.

Sieben Jahre.
Ein ganzes zweites Leben.`,

    choices: [{ text: "→ Gregors Abschied", next: "a2k6_gregor_abschied", narrativeFeedback: "Gregor weiß, dass er nicht mehr viel Zeit hat." }]
  },

  // ════ KAPITEL 10: MEMORY.SAVE() ═════════════════════════════════════════

  a2k6_gregor_abschied: {
    act: "AKT II",
    chapter: "Kapitel 10 — Memory.Save()",
    title: "Gregors letzte Geschichte",
    scene: "Millheim — die letzte Nacht",
    bg: "night",
    music: "theme_gregor",
    conditionalFlag: "inquisitorVex",
    textConditional: {
      gregor: `Ob der Schlag von Vex ihn schneller gebrochen hatte oder ob der Winter und das Alter es ohnehin bald getan hätten, war am Ende nicht wichtig. Wichtig war nur: Er wusste es.`,
      default: ``,
    },
    text: `Gregor lag im Bett.

Der Winter und das Alter hatten ihre Arbeit getan — langsam, unerbittlich, wie sie es immer taten. Er wusste es. Das sah man an seiner Ruhe.

Als ich hereinkam, sah er mich an und lächelte müde.
»Komm her, Junge.«

Mira saß an seiner anderen Seite und hielt seinen Ärmel fest.

»Das Buch«, sagte Gregor. »Hast du es?«
»Ja.«
»Gut. Lies Seite 47 nochmal. Nicht heute. Später. Wenn du denkst, du weißt, was du tust. Dann lies sie nochmal.«

Ich nickte.

Gregor sah mich an — direkt, klar, ohne Angst.
»Ich hatte am Anfang Angst vor dir«, sagte er. »Ein Kind, das so schaut wie ein alter Mann. Das ist nicht normal.«

Er hustete.
Elena legte ihm eine Hand auf die Schulter.

»Dann habe ich gesehen, wie du Mira anschaust. Und deinen Vater. Und Sera. Und Finn. Da wusste ich: Was immer du bist, du liebst auf deine Art. Das reicht mir.«

Mira zog an seinem Ärmel.
»Opa. Geschichte.«

Gregor lächelte. Dieses echte, warme Lächeln, das Mira immer bekam.

»Gut. Eine Geschichte.
Es war einmal ein kleiner Stern... der heller leuchtete als alle anderen... obwohl er der kleinste war...«

Er holte Luft.
Noch einmal.

»Die großen Sterne fragten ihn: Wie machst du das?
Und der kleine Stern sagte...«

Er schaute nicht Mira an.

Mich.

»Ich leuchte nicht für mich.
Ich leuchte für die, die im Dunkeln stehen.«`,

    text2: `Seine Hand wurde locker.

Mira blinzelte.
»Opa?«

Keine Antwort.

»Opa, die Geschichte ist noch nicht fertig.«

Ich ging zum Fenster.
Nicht weil ich nicht weinte.
Sondern weil Mira mich nicht dabei sehen sollte.

Draußen fiel Schnee.
Der erste Schnee des Jahres.
Und morgen würden wir Millheim verlassen.`,

    systemBox: {
      title: "VOID-TERMINAL — EINGEHENDE NACHRICHT",
      lines: [
        "> ...",
        "> Er war ein guter Mensch.",
        ">",
        "> — S.",
      ]
    },

    choices: [{ text: "→ Abschied von Boris", next: "a2k6_boris_abschied", narrativeFeedback: "Boris steht am Tor. Frisch gekämmter Schnurrbart. Gerade Haltung." }],
    flagEffect: { gregorTod: true }
  },

  a2k6_boris_abschied: {
    act: "AKT II",
    chapter: "Kapitel 10 — Execute.Departure()",
    title: "Boris am Tor",
    scene: "Dorftor von Millheim — Morgen",
    bg: "village",
    music: "theme_family",
    text: `Boris stand am Tor.
Frisch gekämmter Schnurrbart. Gerade Haltung. Augen, die schlecht darin waren, Abschiede zu verstecken.

Er schüttelte Roland lange die Hand.
Dann kniete er sich zu mir.

»Junge«, sagte er. »Ich verstehe nicht, was du bist. Aber ich habe gesehen, was du TUST. Du hast dieses Dorf mit dem Kopf gerettet. Das ist seltener als Heldentum.«

Er legte mir die Hand auf die Schulter.
»Mach die Welt da draußen ein bisschen besser, ja?«`,

    choices: [
      {
        text: "A) »Ich komme zurück.«",
        desc: "[AF] Ein Versprechen, das größer ist als Sicherheit.",
        next: "a2k7_wegscheide",
        alignEffect: { licht: 1 },
        flagEffect: { borisVersprechen: true },
        narrativeFeedback: "Boris räuspert sich, als hätte ihn plötzlich der Wind getroffen. »Gut«, sagt er nur.",
      },
      {
        text: "B) »Pass auf die auf, die bleiben.«",
        desc: "[SC] Nüchterner, erwachsener Abschied.",
        next: "a2k7_wegscheide",
        flagEffect: { borisVersprechen: false },
        narrativeFeedback: "Boris nickt. »Immer.« Ein Wort. Mehr braucht es nicht.",
      },
      {
        text: "C) Du verneigst dich tief und sagst nichts.",
        desc: "[AL+Licht] Höchster Respekt, wortlos.",
        next: "a2k7_wegscheide",
        alignEffect: { licht: 1 },
        flagEffect: { borisVersprechen: false },
        narrativeFeedback: "Boris erwidert die Verbeugung. Hinter ihm wischen sich zwei Dorfbewohner gleichzeitig übers Gesicht und tun so, als sei es der Wind.",
      },
    ]
  },

  // ════ KAPITEL 11: EXECUTE.DEPARTURE() ═══════════════════════════════════

  a2k7_wegscheide: {
    act: "AKT II",
    chapter: "Kapitel 11 — Execute.Departure()",
    title: "Die Wegscheide",
    scene: "Lagerfeuer, drei Tage von Millheim entfernt",
    bg: "night",
    music: "theme_mystery",
    text: `Drei Tage auf der Straße.
Dreißig Menschen, weniger Besitz, mehr Müdigkeit.
Am dritten Abend breitete Roland eine Karte aus.

»Kreuzweg ist noch zwei Tage entfernt«, sagte er. »Dort verschwinden wir erst einmal in der Masse.«

Aldwin trat aus den Schatten, als hätte er auf diesen Satz gewartet.

»Und von dort aus«, sagte er, »bereiten wir den Jungen auf die Akademie vor.«

Elena sah ihn an, als überlege sie, ob Mord eine zulässige Erziehungsmaßnahme gegen mysteriöse Halbelfen sei.

Aldwin hob beschwichtigend die Hände.
»Nicht jetzt. Später. Mit zehn. Die Akademie vergibt Stipendien an Talente. Nicht nur an Reiche. Wenn Kaito gut genug ist, zahlen Kirche und Militär selbst für seine Ausbildung.«

Ich sah ins Feuer.
Kreuzweg zuerst.
Dann Aetheria Prime.
Dann das Herz des Käfigs.`,

    choices: [
      {
        text: "A) NACH VORNE — Du schaust nicht zurück.",
        desc: "[AL+Schatten] Härte als Methode.",
        next: "a2k7_letzter_blick",
        alignEffect: { schatten: 2, verborgenheit: 1 },
        flagEffect: { abschiedsHaltung: "voran" },
        narrativeFeedback: "Du zwingst deinen Blick nach vorne. Das tut auch weh. Nur anders.",
      },
      {
        text: "B) DANKBAR — Millheim war echt. Das verdient einen Moment.",
        desc: "[AL+Licht] Anerkennung statt Flucht.",
        next: "a2k7_letzter_blick",
        alignEffect: { licht: 2 },
        flagEffect: { abschiedsHaltung: "dankbar" },
        narrativeFeedback: "Für einen Augenblick ist Trauer nicht Schwäche, sondern Gewicht. Du trägst sie. Das ist alles.",
      },
      {
        text: "C) ANALYTISCH — Sieben Jahre Input. Gespeichert. Nicht gelöscht.",
        desc: "[AL+Ordnung] Distanz als Verarbeitungsform.",
        next: "a2k7_letzter_blick",
        alignEffect: { ordnung: 2 },
        flagEffect: { abschiedsHaltung: "analytisch" },
        narrativeFeedback: "Du versuchst, Millheim wie Daten zu archivieren. Es funktioniert nicht ganz. Vielleicht ist das gut.",
      },
    ]
  },

  a2k7_letzter_blick: {
    act: "AKT II",
    chapter: "Kapitel 11 — Execute.Departure()",
    title: "Der letzte Blick",
    scene: "Hügel über dem Lager — Nacht",
    bg: "night",
    music: "theme_void_terminal",
    text: `In der Nacht stand ich vom Lager auf und ging ein Stück den Hügel hinauf.

Unten schliefen die anderen.
Mira eingerollt wie ein Tier, das im Schlaf immer noch dem Chaos vertraute.
Finn mit den Händen zu fest um irgendetwas, das nicht mehr da war.
Sera wach, obwohl sie die Augen geschlossen hielt.
Roland mit einer Hand am Schwert.
Elena halb im Schlaf noch immer aufmerksam.

Ich öffnete das Terminal.`,

    systemBox: {
      title: "VOID-TERMINAL — STATUS: ENDE AKT II",
      lines: [
        "> ALTER: 7 Jahre",
        ">",
        "> VERFÜGBAR:",
        "> [Code.Read]",
        "> [Code.Analyze]",
        "> [Code.Spoof]",
        "> [Aether.Resonance]",
        "> [Wilde Magie — Funke]",
        ">",
        "> EMOTIONALER STATUS:",
        "> Trauer. Angst. Wut. Entschlossenheit.",
        "> Zugehörigkeit.",
        ">",
        "> Hinweis von S.:",
        "> »Du hast etwas zu verlieren.",
        "> Das macht alles schwieriger.",
        "> Und echter.«",
      ]
    },

    text2: `In meinem ersten Leben hatte ich versucht, ein Spiel zu bauen, das niemand spielte.

In diesem Leben war ich im Spiel.
Und die Regeln waren geschrieben von Wesen, die sich für Götter hielten, weil niemand sie je erfolgreich korrigiert hatte.

Aber ich hatte etwas, das ihr System nicht in Zahlen fassen konnte:
Menschen, die mich liebten.
Und die ich zurückliebte.

Ich ging zurück zum Lager.
Mira griff im Schlaf sofort nach meiner Hand.

Morgen begann Kreuzweg.
Und damit die Vorbereitung auf den nächsten Käfig.`,

    choices: [{ text: "→ AKT III: Drei Jahre in Kreuzweg", next: "a3k0_zeitsprung", narrativeFeedback: "Drei Jahre. Eine neue Stadt. Ein anderes Leben." }]
  },
};