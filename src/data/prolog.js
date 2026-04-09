// ═══════════════════════════════════════════════════════
// REBORN IN SHADOW — PROLOG
// Kapitel 0.1: Der letzte Bug
// Kapitel 0.2: Die Leere zwischen den Welten
// Bereinigte Endfassung — konsistent mit AKT I–VI
// ═══════════════════════════════════════════════════════

export const PROLOG = {

  // ════ KAPITEL 0.1: DER LETZTE BUG ═══════════════════════════════════════

  p0_buero: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Freitag, 23:47 Uhr",
    scene: "Tokio, Japan — Büro Nexus Interactive",
    bg: "server",
    music: "ambient_server",
    text: `Freitag. 23:47 Uhr.

Das Büro war leer.

Natürlich war es das.

Normale Menschen gingen um sechs nach Hause. Normale Menschen hatten Freunde, Wochenendpläne, vielleicht sogar jemanden, der fragte, wann sie kommen.

Ich hatte Zeile 14.847 eines Dungeon-Generierungsalgorithmus.

Mein Name ist Kaito Wake. Neunundzwanzig Jahre alt. Game-Designer bei Nexus Interactive — einem Studio so klein, dass das Wort »Interactive« hauptsächlich auf die Mikrowelle in der Teeküche zutraf. Seit drei Jahren arbeitete ich an GENESIS ONLINE, einem MMORPG, das die Welt revolutionieren sollte.

Die Welt hatte davon bisher nichts mitbekommen.`,

    text2: `Das Büro war ein Friedhof halbfertiger Träume.

An den Wänden hingen Konzeptzeichnungen: Landschaften, Monster, Charakterdesigns, fünf Kontinente, die niemals jemand bereisen würde, weil das Spiel, das sie brauchte, wahrscheinlich nie fertig werden würde.

Auf meinem Schreibtisch:
fünf leere Energydrink-Dosen,
ein Foto meiner Mutter — vergilbt, Ecke eingerissen,
und ein Post-it mit den Worten:

»SYSTEM BALANCE FIX — DRINGEND.«

Drei Monitore leuchteten vor mir.
Links: Code.
Mitte: die Weltkarte von GENESIS ONLINE.
Rechts: ein Chatfenster, das ich zu lange ignoriert hatte.`,

    chatBox: {
      title: "CHAT-FENSTER",
      lines: [
        "DIREKTOR_TANABE [18:32]: Kaito, wir müssen reden. Montag, mein Büro.",
        "DIREKTOR_TANABE [18:33]: Es geht um das Projekt. Und um deine Position.",
        "DIREKTOR_TANABE [18:34]: Geh heute mal pünktlich nach Hause.",
        "",
        "[Nachrichten gelesen um 19:15]",
        "[Keine Antwort gesendet]",
      ]
    },

    text3: `»Deine Position.«

Schöne Umschreibung für:
Du bist raus.

Ich kannte die Zeichen. Das Projekt lag sechs Monate hinter dem Zeitplan. Das Budget war aufgebraucht. Und ich — der einzige Idiot im Gebäude, der den gesamten Kerncode wirklich verstand — war zu teuer für ein Spiel, das nie erscheinen würde.

Lustig.

In den Spielen, die ich entwarf, konnte man immer alles retten. Man konnte immer zurückgehen, neu laden, besser entscheiden. New Game Plus. Zweite Chance. Konsequenzen mit Rücktaste.

Im echten Leben gab es kein Speichern.

Und trotzdem war das System... mein System... brillant.

Die Grafik war veraltet.
Der Server im Keller klang wie ein asthmatischer Rasenmäher.
Wir konnten uns nicht einmal halbwegs gute Soundeffekte leisten.

Aber der Kern?
Der Kern war perfekt.

Ich tippte die letzte Zeile:`,

    codeBox: {
      title: "NEXUS_GENESIS_v3.7 — genesis_core.js",
      lines: [
        "// TODO: Add NULL exception handler",
        "// What happens when a player exists outside the system?",
        "// Edge case — probably never happens",
        "// But just in case...",
        "",
        "function handleNull(entity) {",
        "  // Let them be free.",
        "  return UNDEFINED;",
        "}",
        "",
        "// [DATEI GESPEICHERT — 23:58:33]",
      ]
    },

    text4: `Eine Null-Ausnahme.

Der Fall, der nie eintreten sollte.
Ein Spieler, der außerhalb aller Regeln existiert.

Ich speicherte den Code und lehnte mich zurück.

Vielleicht war das immer mein Problem gewesen. Ich konnte Welten bauen, in denen alles Sinn ergab — Regeln, Progression, Systeme, Ordnung. Aber in der echten Welt?

Da war ich die Null-Ausnahme.
Der Edge Case, den niemand behandelt hatte.

23:58 Uhr.
Das Licht im Büro flackerte.

Normalerweise hätte ich mir nichts dabei gedacht.
Das Gebäude war alt. Das Licht flackerte ständig.
Heute hätte ich es tun sollen.

Der Server im Keller begann zu heulen.

Nicht zu summen.
Zu heulen.

Meine Monitore flackerten. Auf dem mittleren Bildschirm erschien eine Fehlermeldung.`,

    systemBox: {
      title: "!! CRITICAL SYSTEM ERROR !!",
      lines: [
        "> Server temperature: CRITICAL",
        "> Power supply: UNSTABLE",
        "> Data integrity: COMPROMISED",
        ">",
        "> Genesis Protocol: ACTIVATING...",
        "> WARNING: This should not be possible.",
        ">",
        "> > Initiating transfer...",
        "> > Target: NULL",
        "> > Destination: ????????",
        ">",
        "> [OK] [Cancel] [???]",
      ]
    },

    choices: [
      {
        text: "A) »Ich renne zum Ausgang.«",
        desc: "Fluchtreflex. Völlig nachvollziehbar.",
        next: "p0_flucht",
        flagEffect: { serverPfad: "flucht" },
        narrativeFeedback: "Deine Beine entscheiden schneller als dein Kopf. Der Korridor. Die Treppe. Der Notausgang. Nur — die Tür führt nach unten.",
      },
      {
        text: "B) »Ich gehe in den Keller, zum Server.«",
        desc: "Wenn das Ding meinen Code spricht, will ich ihm ins Gesicht sehen.",
        next: "p0_keller",
        alignEffect: { ordnung: 1 },
        flagEffect: { serverPfad: "mutig" },
        narrativeFeedback: "Das Summen hat Richtung. Absicht. Als hätte dein eigener Code beschlossen, dich persönlich abzuholen.",
      },
      {
        text: "C) »Ich bleibe sitzen und tippe weiter.«",
        desc: "Programmierer-Reflex: Erst speichern, dann sterben.",
        next: "p0_weitertippen",
        alignEffect: { schatten: 1 },
        flagEffect: { serverPfad: "ignoriert" },
        narrativeFeedback: "Eine Zeile. Noch eine. Dann erlöschen alle Bildschirme gleichzeitig. Nicht langsam. Aus.",
      },
    ]
  },

  p0_flucht: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Zum Ausgang",
    scene: "Büro — Korridor / Treppenhaus",
    bg: "server",
    music: "ambient_server",
    text: `Ich warf den Stuhl zurück und rannte.

Korridor.
Treppenhaus.
Erste Etage.
Notausgang.

Ich stieß die Tür auf.

Und stoppte.

Die Notausgangstür führte nicht zur Straße.

Sie führte nach unten.

In einen Keller, der laut Bauplan nicht existieren dürfte.

Kalte Luft schlug mir entgegen. Unten pulsierte ein blaues Licht. Das Heulen des Servers kam jetzt nicht mehr von irgendwoher. Es kam von dort.

Ich stand vielleicht fünf Sekunden still.
Dann ging ich hinunter.

Wenn die Welt schon kaputtging, konnte ich ihr genauso gut hinterhersehen.`,

    choices: [{ text: "→ Der Keller", next: "p0_keller", narrativeFeedback: "Das Summen kommt von unten. Du gehst hinunter." }]
  },

  p0_weitertippen: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Noch eine Zeile",
    scene: "Büro — Schreibtisch",
    bg: "server",
    music: "ambient_server",
    text: `Ich tippte weiter.

Servercrash.
Feature-Freeze.
Frist gestern.
All das war immer noch weniger bedrohlich als der Gedanke, Code unfertig liegenzulassen.

Eine Zeile.
Noch eine.

Dann erloschen alle Bildschirme gleichzeitig.

Nicht langsam.
Nicht mit Vorwarnung.
Aus.

Nur das Licht aus dem Boden blieb.
Blau. Pulsierend. Warm.

Meine Energydrink-Dosen rutschten vom Tisch.
Der Bürostuhl kippte wie von einer Hand gestoßen um.
Irgendetwas im Gebäude entschied, dass die Schwerkraft ab jetzt eher ein Vorschlag sei.

»Okay«, sagte ich laut in die Dunkelheit.
»Das ist neu.«

Dann stand ich auf.

Nicht, weil ich mutig war.
Sondern weil Sitzen plötzlich wie die absurdeste Option im Raum wirkte.`,

    choices: [{ text: "→ Der Keller", next: "p0_keller", narrativeFeedback: "Das Summen kommt von unten. Du gehst hinunter." }]
  },

  p0_keller: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Der Server",
    scene: "Keller, Nexus Interactive — 23:59 Uhr",
    bg: "void",
    music: "ambient_void",
    conditionalFlag: "serverPfad",
    textConditional: {
      flucht: `Der Weg nach unten fühlte sich nicht an wie Flucht. Eher wie das Eingeständnis, dass es keinen anderen Ausgang mehr gab.`,
      mutig: `Das Summen hatte Richtung. Absicht. Als hätte mein eigener Code beschlossen, mich persönlich abzuholen.`,
      ignoriert: `Ich kam mit einer Mischung aus Neugier und professioneller Kränkung nach unten. Wenn mein Server schon explodieren wollte, dann bitte nicht ohne mich.`,
      default: ``,
    },
    text: `Der Keller war klein, staubig und normalerweise der langweiligste Raum im Gebäude.

Heute leuchtete der Server.

Nicht nur die LEDs.
Der gesamte Schrank.

Ein weiches, pulsierendes Blau lief über das Metall, vibrierte im Rhythmus des Heulens und schrieb dabei Muster an die Oberfläche, die ich kannte.

Das war mein Code.

Nicht exakt.
Nicht im Dateisinn.
Aber die Struktur — die Logik — das Genesis-Protokoll — stand plötzlich in der Luft, im Metall, in der Realität, als hätte jemand mein System aus dem Bildschirm gezogen und direkt in den Raum geschoben.

Das war kein Defekt.
Das war eine neue Kategorie von »Was zur Hölle«.`,

    systemBox: {
      title: "SERVER — DIAGNOSE",
      lines: [
        "> You built a door between worlds.",
        "> You didn't know it.",
        "> But SHE did.",
        ">",
        "> The Seventh saw your code.",
        "> It resonated with something she planted",
        "> 3,000 years ago.",
        ">",
        "> A NULL exception handler.",
        "> A place outside the rules.",
        "> A door for someone who doesn't belong.",
        ">",
        "> That's you, Kaito Wake.",
        ">",
        "> Would you like to try a different world?",
        ">",
        "> [Yes] [No]",
        ">",
        "> (The \"No\" button doesn't work.)",
        "> (Sorry about that.)",
      ]
    },

    text2: `Ich starrte auf den Diagnosebildschirm.

Es gibt Momente im Leben, in denen man weiß, dass man träumt.
Wenn die Realität einen Schritt zu weit geht und alles in einem sagt:
Das kann nicht echt sein.

Dies war kein solcher Moment.

Das hier war real.
Jede Faser meines Körpers wusste es.`,

    choices: [
      {
        text: "A) »...Ist das ein Bewerbungsgespräch?«",
        desc: "Humor als letzte Verteidigung.",
        next: "p0_tod",
        flagEffect: { serverReaktion: "humorvoll" },
        alignEffect: { schatten: 1 },
        narrativeFeedback: "Der Bildschirm antwortet nicht auf Humor. Das Heulen wird lauter. Das Blau heller.",
      },
      {
        text: "B) »Wer ist SIE? Die Siebte?«",
        desc: "Fragen zuerst. Panik später.",
        next: "p0_tod",
        flagEffect: { serverReaktion: "analytisch" },
        alignEffect: { ordnung: 1 },
        wissenEffect: ["architektenExistenz"],
        narrativeFeedback: "Keine Antwort. Nur das Pulsieren des Lichts — als hätte die Frage selbst etwas Altes berührt.",
      },
      {
        text: "C) »...Warum ich?«",
        desc: "Die ehrlichste Frage ist oft die kleinste.",
        next: "p0_tod",
        flagEffect: { serverReaktion: "emotional" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Das Licht schwankt. Fast wie ein Zögern. Dann explodiert der Server.",
      },
    ]
  },

  p0_tod: {
    act: "PROLOG",
    chapter: "Kapitel 0.1 — Der letzte Bug",
    title: "Der Tod",
    scene: "Keller — letzte Sekunden",
    bg: "void",
    music: "ambient_void",
    text: `Bevor ich eine zweite Frage stellen konnte, explodierte der Server.

Nicht metaphorisch.
Nicht elegant.
Einfach physisch, brutal und absolut.

Die Kühlung versagte. Metall riss auf. Eine Hitzewelle traf mich frontal und warf mich gegen die Betonwand. Ich hörte etwas knacken — Rippen, wahrscheinlich. Dann Feuer. An meiner Kleidung. An meinen Händen. In meiner Lunge.

Schmerz.

Nicht Filmschmerz.
Nicht symbolischer Schmerz.
Echter, roher, lückenloser Schmerz, der jeden Gedanken aus dem Kopf riss und trotzdem einen übrig ließ:

Das ist also wirklich der letzte Bug.`,

    text2: `Und mitten im Feuer sah ich den Code.

Nicht auf einem Bildschirm.
In der Luft.
Im Rauch.
Im Licht.
In meinem eigenen Blut.

Mein Genesis-Protokoll war überall. Aber nicht nur meins. Es war älter. Tiefer. Als hätte jemand dieselbe Sprache schon einmal geschrieben, tausende Jahre, bevor ich geboren wurde.

Mein letzter klarer Gedanke, bevor alles wegbrach:`,

    choices: [
      {
        text: "A) »Ich wünschte, ich hätte ein besseres Leben gelebt.«",
        desc: "Reue. Du suchst später eher nach Sinn als nach Sieg.",
        next: "p0_void",
        flagEffect: { letzterGedanke: "reue" },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Reue. Nicht bitter. Nur klar. Wie ein Programm, das seinen letzten Fehler dokumentiert.",
      },
      {
        text: "B) »Ich wünschte, ich hätte mein Spiel fertig gemacht.«",
        desc: "Hingabe. Du suchst später eher nach Vollendung als nach Trost.",
        next: "p0_void",
        flagEffect: { letzterGedanke: "hingabe" },
        alignEffect: { ordnung: 2 },
        narrativeFeedback: "Drei Jahre. Tausende Zeilen. Das System war gut. Es war nie fertig. Das ist der letzte Gedanke.",
      },
      {
        text: "C) »Ich wünschte, ich wäre nicht so allein gewesen.«",
        desc: "Einsamkeit. Du suchst später stärker nach Verbindung.",
        next: "p0_void",
        flagEffect: { letzterGedanke: "einsamkeit" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Das Büro war leer. Es war immer leer. Das war die Entscheidung gewesen — und die Strafe dafür.",
      },
      {
        text: "D) »...Endlich ist es vorbei.«",
        desc: "Akzeptanz. Dunkelster Startpunkt. Nicht endgültig.",
        next: "p0_void",
        flagEffect: { letzterGedanke: "akzeptanz", trait_todessehnsucht: true },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Nicht Trauer. Nur Stille. Der Schmerz hört auf, bevor das Feuer es tut.",
      },
    ]
  },

  // ════ KAPITEL 0.2: DIE LEERE ZWISCHEN DEN WELTEN ═══════════════════════

  p0_void: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "Der Zwischenraum",
    scene: "Nirgendwo. Irgendwo.",
    bg: "void",
    music: "ambient_septima",
    conditionalFlag: "serverReaktion",
    textConditional: {
      humorvoll: `Mein erster Gedanke: Das ist kein normaler Serverabsturz.`,
      analytisch: `Ich inventarisierte Variablen. Keine Schwerkraft. Kein Körper. Kein Ping. Nur Existenz ohne Benutzeroberfläche.`,
      emotional: `Nur Stille. Die erste, die sich seit Jahren nicht gegen mich richtete.`,
      default: ``,
    },
    text: `Ich war nirgendwo.

Nicht tot — obwohl ich tot sein sollte.
Nicht lebendig — obwohl ich dachte.
Ich existierte in einem Raum ohne Eigenschaften. Keine Farbe. Kein Licht. Kein Dunkel. Nur Potenzial. Als stünde ich in einer Datei, bevor der erste Befehl geschrieben wird.

Dann sprach eine Stimme.

Nicht männlich.
Nicht weiblich.
Nicht menschlich.
Und trotzdem... warm.

»Willkommen in der Lücke zwischen den Befehlen, Kaito Wake.«`,

    text2: `»...Bin ich tot?« fragte ich.

»Ja«, sagte die Stimme.
Dann, nach einem winzigen Moment:
»Und nein.«

»Das ist keine hilfreiche Antwort.«

»Du bist zwischen Definitionen. Dein Körper ist verbrannt. Deine Seele ist nicht dort, wo sie sein sollte. Sie ist hier. Bei mir.«

»Wer bist du?«

Eine Pause.

»Ein Fragment«, sagte die Stimme.
»Ein Echo. Eine Sicherungskopie. Der Abdruck einer Entscheidung, die vor sehr langer Zeit getroffen wurde.«

»Das klingt verdächtig poetisch für etwas, das wie ein Betriebssystem spricht.«

Ein sehr leises Lachen.

»Ich nehme das als Kompliment.«`,

    text3: `»Du hast eine Tür gebaut, ohne es zu wissen«, sagte die Stimme. »Dein Null-Handler. Eine Ausnahme für etwas außerhalb aller Regeln. Dein Code hat mit etwas resoniert, das ich vor dreitausend Jahren hinterlassen habe.«

»Ich habe einen Exception Handler geschrieben.«

»Ja.«

»Und das hat jetzt... was genau ausgelöst?«

»Eine Verbindung. Zwischen deiner Welt und meiner.«

»Deiner Welt.«

»Aethermere.«

Das Wort fiel in die Leere, und mit ihm kam zum ersten Mal so etwas wie Richtung.

»Sie war einmal frei«, sagte die Stimme. »Jetzt ist sie in Regeln gefangen, die als Hilfe gedacht waren und zu Ketten wurden.«`,

    choices: [
      {
        text: "A) »Ich nehme die neue Welt. Gib mir eine zweite Chance.«",
        desc: "Entschlossen. Direkt. Du akzeptierst den Sprung.",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "standard" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "»Gut«, sagt die Stimme. Nicht erleichtert. Ruhig. Als hätte sie gewusst, dass du kommen würdest.",
      },
      {
        text: "B) »Ich nehme sie. Aber nicht als Held. Als ich.«",
        desc: "Eigenständig. Früher Schatten-Ton.",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "eigenstaendig" },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Ein kurzes Schweigen. Dann: »Das war nie wirklich verhandelbar.« Es klingt fast wie Respekt.",
      },
      {
        text: "C) »Erzähl mir mehr. Über alles. Bevor ich entscheide.«",
        desc: "Vorsichtig. Wissen zuerst, Schicksal danach.",
        next: "p0_mehr_info",
        flagEffect: { prologTon: "vorsichtig" },
        alignEffect: { ordnung: 1 },
        wissenEffect: ["architektenExistenz"],
        narrativeFeedback: "Die Stimme wird ruhiger. »Dann hör zu. Vor dieser Wahl bekommst du die Wahrheit.«",
      },
      {
        text: "D) »Die Stille klingt auch gut, ehrlich gesagt.«",
        desc: "Dunkelster Pfad. Kein Nein — aber fast.",
        next: "p0_ueberredung",
        flagEffect: { prologTon: "dunkel", trait_todessehnsucht: true },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Die Leere schweigt einen Moment. Dann: »Auch Schweigen ist eine Entscheidung.«",
      },
    ]
  },

  p0_mehr_info: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "Die Wahrheit über Aethermere",
    scene: "Der Zwischenraum",
    bg: "void",
    music: "ambient_septima",
    conditionalFlag: "trait_todessehnsucht",
    textConditional: {
      true: `»Du wolltest nicht wirklich gerettet werden«, sagte die Stimme leise. »Nur, dass endlich etwas anders wird.«`,
      default: ``,
    },
    text: `»Gut«, sagte die Stimme. »Dann hör zu.«

»Die Welt heißt Aethermere. Vor siebentausend Jahren war sie frei. Wilde Magie war ungezähmt, gefährlich, lebendig. Dann kamen wir. Sieben von uns. Wir sahen Chaos und dachten, wir könnten helfen.«

»Ihr habt das System erschaffen.«

»Ja. Das Genesis-System. Level, Klassen, Skills, Strukturen. Für eine Zeit funktionierte es sogar. Es heilte. Es ordnete. Es verlängerte Leben.«

»Und dann?«

Lange Stille.

»Dann merkten wir, dass Ordnung süchtig macht. Sechs von uns fanden das nicht schlimm.«`,

    text2: `»Und du warst die siebte«, sagte ich.

Wieder dieses kleine Schweigen.
Dann:
»Ja.«

»Also bist du...«
»Ein Fragment von ihr. Nicht die ganze Wahrheit. Nicht die ganze Person. Nur genug, um eine Tür offen zu halten.«

»Und [NULL]?«

»Ein Raum außerhalb der Systemzählung. Nicht Macht. Nicht Schutz. Freiheit durch Unsichtbarkeit. In einer Welt, in der alles gezählt wird, ist Unzählbarkeit gefährlich.«

»Für wen?«

»Für alle, die von Ordnung leben.«

»Und die anderen sechs?«

»Nennen sich Götter.
Sind es nicht.
Aber sie haben sehr lange niemanden getroffen, der ihnen widersprochen hätte.«`,

    text3: `»Wenn ich gehe«, sagte ich, »bin ich dann der Einzige außerhalb?«

»Vielleicht der Einzige, der noch lebt und vollständig ist.«

»Und wenn sie mich finden?«

»Dann können sie dich nicht nur töten. Sie können versuchen, dich rückwirkend zu löschen. Als hättest du nie existiert.«

Ich schwieg.

»Danke für die Ehrlichkeit«, sagte ich schließlich.

»Ich schulde dir mindestens das.«`,

    choices: [
      {
        text: "→ »Ich nehme es an. Mit allem, was dazugehört.«",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "vorsichtig" },
        wissenEffect: ["architektenExistenz", "systemIstProgramm", "septimaIdentitaet"],
        narrativeFeedback: "Du weißt jetzt, was auf dem Spiel steht. Das macht es nicht einfacher. Aber ehrlicher.",
      },
    ]
  },

  p0_ueberredung: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "»Ich weiß, wie sich das anfühlt.«",
    scene: "Der Zwischenraum",
    bg: "void",
    music: "ambient_septima",
    text: `Die Stimme schwieg.

Dann, leiser als zuvor:
»...Ich weiß, wie sich das anfühlt.«

»Was?«

»Erschöpfung. Das Gefühl, dass alles, was man tut, zu spät kommt. Dass man selbst der Fehler ist, den niemand patchen kann.«

Ich lachte einmal, trocken.
»Du klingst nicht wie eine Göttin.«

»Gut«, sagte die Stimme.
»Denn ich war nie eine.«`,

    text2: `»Ich kann dir keine Heldengeschichte versprechen«, sagte sie. »Keine Belohnung. Kein Schicksal, das sich fair anfühlt.«

»Was dann?«

»Eine Welt, die auf dich antwortet. Menschen, die dich sehen. Schmerz, ja. Aber nicht diese Art von Leere.«

Lange sagte ich nichts.

Dann verstand ich etwas, das viel kleiner und ehrlicher war als Hoffnung:

Ich wollte nicht aufhören.
Ich wollte nur, dass es anders wird.

Das ist nicht dasselbe.

»...Okay«, sagte ich.
»Eine Chance.«

Die Stimme atmete aus.
Ein Geräusch, das sie ohne Körper nicht hätte machen dürfen.

»Danke.«`,

    choices: [
      {
        text: "→ Weiter",
        next: "p0_erklaerung",
        flagEffect: { prologTon: "dunkel" },
        narrativeFeedback: "Nicht Hoffnung. Nur der Wunsch, dass es anders wird. Das reicht für jetzt.",
      },
    ]
  },

  p0_erklaerung: {
    act: "PROLOG",
    chapter: "Kapitel 0.2 — Die Leere zwischen den Welten",
    title: "Die Übertragung",
    scene: "Der Zwischenraum — letzte Momente",
    bg: "void",
    music: "ambient_septima",
    conditionalFlag: "prologTon",
    textConditional: {
      dunkel: `»Du gehst nicht wegen Hoffnung«, sagte die Stimme. »Du gehst, weil du nicht mehr in die alte Leere zurückwillst.«`,
      eigenstaendig: `»Ich mache das auf meine Art«, sagte ich. Die Stimme lachte leise. »Das war nie wirklich verhandelbar.«`,
      vorsichtig: `»Werde ich mich an alles erinnern?« — »Ja«, sagte sie. »Das ist mein Geschenk und meine Grausamkeit zugleich.«`,
      default: ``,
    },
    text: `»Dann hör zu«, sagte die Stimme. »Deine Seele wird in einen neuen Körper übertragen. Einen Körper, der gerade erst entsteht. Ein ungeborenes Kind in Aethermere.«

»Ein... Baby?«

»Ja.«

»Mit all meinen Erinnerungen?«

»Ja.«

»In einer Fantasy-Welt?«

»Ja.«

Ich schwieg einen Moment.

»Das ist buchstäblich mein Genre«, sagte ich dann.

Wieder dieses leise Lachen.
»Gut. Dann weißt du zumindest ungefähr, wie absurd das alles ist.«`,

    text2: `»Aber ich muss dich warnen«, sagte sie. »Du bekommst keinen göttlichen Segen. Keine Heldenskill-Lawine. Kein sauberes Interface. Du wirst NICHTS haben. Kein Level. Keine Klasse. Keine offizielle Existenz im System.«

»[NULL]«, sagte ich.

»Ja.«

»Das klingt wie der schlechteste Isekai-Start der Literaturgeschichte.«

»Oder wie der beste«, sagte sie ruhig.
»In einer Welt, in der alles vom System kontrolliert wird, ist der Mächtigste vielleicht der, den das System nicht sehen kann.«`,

    text3: `»Du wirst ein Werkzeug haben«, fuhr sie fort. »Das Void-Terminal. Eingeschränkt. Unvollständig. Aber echt. Du wirst Systemcode lesen können. Vielleicht verstehen. Eines Tages vielleicht verändern.«

»Vielleicht?«
»Ich habe gelernt, keine Versprechen über Dinge zu machen, die Menschen selbst verdienen müssen.«

»Fair.«

Die Stimme wurde sehr still.

»Und wenn du kannst... finde mich. Nicht dieses Echo. Mich. Was von mir noch übrig ist.«

»Such nach der Siebten.«`,

    systemBox: {
      title: "VOID-TERMINAL v0.01 — INITIALISIERUNG",
      lines: [
        "> Willkommen, Anomalie.",
        ">",
        "> Körperstatus: Ungeborenes",
        "> System-Sichtbarkeit: 0%",
        "> Architekten-Überwachung: INAKTIV",
        ">",
        "> VERFÜGBARE BEFEHLE:",
        "> [Code.Read] — VERFÜGBAR",
        "> [Code.Analyze] — GESPERRT",
        "> [Code.Modify] — GESPERRT",
        "> [System.Backdoor] — GESPERRT",
        ">",
        "> Empfohlene Maßnahme:",
        "> Schlafen. Essen. Wachsen. Nicht sterben.",
      ]
    },

    text4: `»Es ist Zeit«, sagte die Stimme.
»Die Mutter ist in den Wehen.«

»Warte«, sagte ich.
»Noch eine Frage.«

»Ja?«

»Wie heißt du? Wirklich.«

Lange Stille.
Dann, fast nur noch ein Hauch:

»Septima.«

Und dann fiel ich.

Nicht nach unten.
In ein Leben.`,

    choices: [
      {
        text: "→ AKT I: Erste Bytes",
        next: "a1_geburt",
        wissenEffect: ["nullZoneExistiert"],
        narrativeFeedback: "Du fällst. Nicht nach unten. In ein Leben.",
      },
    ]
  },
};
