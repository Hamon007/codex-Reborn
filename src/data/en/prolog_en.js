// REBORN IN SHADOW — English Translation
// Prolog: Chapters 0.1–0.2
// Translation notes:
// - Kaito's voice: dry, analytical, slight dark humor — like a programmer who's seen too much
// - Septima: ancient, tired, warm — not cold or godlike
// - Terminal boxes: keep code-aesthetic, English is native for code
// - Capitalized words (SYSTEM, NULL, etc.) stay capitalized — it's aesthetic

export const PROLOG_EN = {

  p0_buero: {
    title: "Friday, 11:47 PM — The Office",
    chapter: "Chapter 0.1 — The Last Bug",
    scene: "Tokyo, Japan — Nexus Interactive",
    text: `Friday. 11:47 PM. Tokyo.

Nexus Interactive, third floor, open plan.

The last bug in the last build of a game nobody would play.

That was my life.

Not a complaint. Just data.

My name is Kaito Wake, age 29, lead developer of *Void Chronicles: Isekai Origins* — a game about a modern person transported to a fantasy world. Level system. Status windows. A hero chosen by the gods.

I had been writing this trope for three years.

I had never left the office before midnight.

I had never thought about whether I was happy.

I had one more bug to fix.`,
    text2: `\`\`\`
> NEXUS INTERACTIVE — BUILD MONITOR
> Project: VOID CHRONICLES v0.97b
> Status: CRITICAL ERROR
>
> Component: Genesis-System.exe
> Error: NullPointerException at line 2847
> Stack trace: SystemCore → StatusManager
>   → PlayerRegistration → NULL
>
> Error count this week: 847
> Remaining until release: 14 days
> Remaining vacation days: 0
>
> Developer status: [STILL HERE]
\`\`\``,
    choices: [
      { text: "→ Fix the last bug.", next: "p0_keller" },
    ]
  },

  p0_keller: {
    title: "The Server — 11:59 PM",
    chapter: "Chapter 0.1 — The Last Bug",
    scene: "Basement, Nexus Interactive",
    text: `The server room was in the basement.

Cold. Loud. Smelled like hot metal and something burning.

The last time someone had been down here — according to the access log — was three weeks ago.

The error was in the server itself. Not in the code. In the hardware. A faulty contact in rack seven that caused a cascade failure every time the Genesis system ran under load.

Simple fix. Thirty seconds.

I opened the rack.

The contact was scorched. The insulation was cracked. The power cable that should not have been near the live components was very, very near the live components.

The next thought I had was:

*That should probably not be touching that.*

The thought after that: nothing.`,
    choices: [
      { text: "A) \"...Is this a job interview?\"",
        next: "p0_tod", flagEffect: { serverReaktion: "humorvoll" },
        narrativeFeedback: "The last thing I thought before everything went dark was: at least the bug is fixed." },
      { text: "B) \"Who is SHE? The Seventh?\"",
        next: "p0_tod", flagEffect: { serverReaktion: "analytisch" },
        narrativeFeedback: "The last thing I thought before everything went dark was: the NullPointerException. It was in the registration. In the player registration. NULL." },
      { text: "C) \"...Why me?\"",
        next: "p0_tod", flagEffect: { serverReaktion: "emotional" },
        narrativeFeedback: "The last thing I thought before everything went dark was: I never finished the game." },
    ]
  },

  p0_tod: {
    title: "Death",
    chapter: "Chapter 0.1 — The Last Bug",
    scene: "Basement — final seconds",
    text: `Death by electrocution.

Death by neglected maintenance.

Death by fourteen-hour shifts that left no room for thoughts like *maybe I should check if that cable is safe*.

That was how Kaito Wake died.

Not heroically.

Not meaningfully.

On a Friday night, alone, in a basement that smelled of burnt insulation.

Before I stopped existing, I had time for one last thought.`,
    choices: [
      { text: "A) \"I wish I'd lived a better life.\"",
        next: "p0_void", flagEffect: { letzterGedanke: "reue" }, alignEffect: { licht: 1 },
        narrativeFeedback: "Regret. The cleanest emotion. The most useless one." },
      { text: "B) \"I wish I'd finished my game.\"",
        next: "p0_void", flagEffect: { letzterGedanke: "hingabe" },
        narrativeFeedback: "Even now. Even here. The game." },
      { text: "C) \"I wish I hadn't been so alone.\"",
        next: "p0_void", flagEffect: { letzterGedanke: "einsamkeit" }, alignEffect: { licht: 1 },
        narrativeFeedback: "The truest thing I ever admitted to myself." },
      { text: "D) \"...Finally.\"",
        next: "p0_void", flagEffect: { letzterGedanke: "akzeptanz", trait_todessehnsucht: true },
        alignEffect: { schatten: 2 },
        narrativeFeedback: "Not sadness. Not relief. Just: the recognition that something had been very heavy for a very long time." },
    ]
  },

  p0_void: {
    title: "The Space Between",
    chapter: "Chapter 0.2 — The Void Between Worlds",
    scene: "Nowhere. Somewhere.",
    conditionalFlag: "serverReaktion",
    textConditional: {
      humorvoll: `My first thought in the void between worlds: this is definitely not a normal server crash.`,
      analytisch: `My first thought was to inventory the variables. No gravity. No body. No ping. Interesting.`,
      emotional: `My first thought was nothing at all. Just silence. The first silence that had felt right in years.`,
      default: ``,
    },
    text: `Darkness.

Not emptiness — darkness implies something to be dark *in*. This was different.

This was the absence of everything. Including the absence itself.

And then — a voice.

Not in my ears. In the space where my thinking happened.

»Hello, Kaito Wake.«

The voice was old. Not weak — *old*. The way a mountain is old. The way the ocean is old. Something that had existed so long it had learned patience the hard way.

»You died.«

»...I noticed.«

»Good. Some people are confused at this stage.«

Pause.

»You are not confused.«

»I am,« I said, »extremely confused. I'm just also very calm about it.«

Something that might have been a laugh. Might have been wind.

»I have an offer for you.«`,
    choices: [
      { text: "A) \"I'll take the new world. Give me everything.\"",
        next: "p0_mehr_info", flagEffect: { prologTon: "standard" }, alignEffect: { licht: 1 } },
      { text: "B) \"I'll take it. But not as a hero. As myself.\"",
        next: "p0_mehr_info", flagEffect: { prologTon: "eigenstaendig" }, alignEffect: { schatten: 2 } },
      { text: "C) \"...Tell me more. About everything. Before I decide.\"",
        next: "p0_mehr_info", flagEffect: { prologTon: "vorsichtig" } },
      { text: "D) \"The silence sounds good too, honestly.\"",
        next: "p0_ueberredung", flagEffect: { prologTon: "dunkel", trait_todessehnsucht: true },
        alignEffect: { schatten: 3 } },
    ]
  },

  p0_mehr_info: {
    title: "The Truth About Aethermere",
    chapter: "Chapter 0.2 — The Void Between Worlds",
    scene: "The Space Between",
    conditionalFlag: "trait_todessehnsucht",
    textConditional: {
      true: `»You didn't want to be saved.« Not a question. Septima doesn't ask questions she's already answered. »And yet here you are. That says more than you think.«`,
      default: ``,
    },
    text: `The world was called Aethermere.

Three thousand years old.

Built on a System — not metaphorically. Literally. A program. A structure that organized all life into levels, classes, status windows. It assigned roles. Measured worth. Defined possibility.

Everyone in Aethermere had a status window. Every person, animal, demon, stone.

Everyone.

Except the person being offered a second life in it.

»Why me?«

»Because you understand systems. Because you've spent your life building worlds with rules, and this world needs someone who can read its rules from the inside.«

»And you need me to do what, exactly?«

»Nothing I will tell you. I've already said too much.«

Pause.

»That is either the most honest or the most manipulative thing I've heard today.«

»It is both.«`,
    choices: [
      { text: "→ \"I accept. With everything that comes with it.\"",
        next: "p0_erklaerung", flagEffect: { prologTon: "vorsichtig" } },
    ]
  },

  p0_ueberredung: {
    title: "»I know how that feels.«",
    chapter: "Chapter 0.2 — The Void Between Worlds",
    scene: "The Space Between",
    text: `»The silence,« said the voice, »lasts forever. I know this. I have been in it.«

Pause.

»Three thousand years.«

Another pause. Longer.

»It is not peaceful. It is just quiet. There is a difference.«

I considered this.

»You're trying to convince me.«

»Yes.«

»That's very honest of you.«

»I have been dishonest for three thousand years,« she said. »I am very tired of it.«

That, strangely, I believed.`,
    choices: [
      { text: "→ Continue to the transfer.",
        next: "p0_erklaerung", flagEffect: { prologTon: "dunkel" } },
    ]
  },

  p0_erklaerung: {
    title: "The Transfer",
    chapter: "Chapter 0.2 — The Void Between Worlds",
    scene: "The Space Between — final moments",
    conditionalFlag: "prologTon",
    textConditional: {
      dunkel: `»You're not going for hope,« she said. »You're going because you have nowhere else to go.« Pause. »That is also a reason.«`,
      eigenstaendig: `»One thing,« I said. »I do this my way.« Septima smiled — the first real smile since the conversation began. »I know.«`,
      vorsichtig: `»Will I remember?« »Everything.« The answer to a different question. Septima knew which one.`,
      default: ``,
    },
    text: `»There is one more thing you should know,« said the voice.

»My name is Septima. The Seventh.«

»The Seventh what?«

»Architect. Of the system you are entering. One of seven who built it, three thousand years ago.«

»And you're sending me in... why?«

»Because I made something that became wrong. And I cannot fix it from the outside.«

Silence.

»You can read the system. You were born able to. In your old world you spent your life writing rules — here you will spend it reading them. Understanding them.«

»And then?«

»Then you'll know what to do. Or you won't. Either way — it will have been interesting.«

The darkness began to thin.

Something warm, far away.

A cry.

»One more thing,« said Septima, very quietly, already fading. »You will be given a name. A family. A life.«

»And the system?«

»The system will not see you. You will be [NULL]. Invisible.«

»That sounds like a bug.«

»Yes,« said Septima. »It does.«

The warmth became everything.`,
    choices: [
      { text: "→ Chapter 1: NULL.INIT()", next: "a1_geburt" },
    ]
  },

};
