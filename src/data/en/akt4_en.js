// AKT IV — English Translation
// Null.Operativ() — building the team, the tower, the plan
// New voices: Gorrick (loud, technically brilliant, secretly soft), Veyra (masks all the way down),
//             Ren (three hundred years of not existing, carefully becoming), Rex (a dragon who speaks in third person, always correct)

export const AKT_IV_EN = {

  a4k1_intro: {
    act: "ACT IV", chapter: "Time Jump — Two Years", title: "Two Years Alone",
    scene: "Aethermere — wilderness and cities, Age 14",
    text: `Two years.

Alone, mostly.

The System had a file on me now — cross-referenced between Vex's old report, Mordecai's investigation, and a new entry from the Academy's registry. The file was labeled: *ANOMALY — NULL CLASS — AT LARGE. PRIORITY: MODERATE.*

Moderate was manageable. Moderate meant they were watching, not hunting.

I moved through three provinces. Worked jobs that didn't require System-IDs. Traded information with Meridia's network via dead-drops. Mapped the System's blind spots with [Code.Read] until I had a picture of the infrastructure no official map contained.

Aldwin's letter: *Tertius. Irondeep. Level 33.*

The Irondeep Labyrinth was the System's deepest registered dungeon. Forty-two levels. The last twenty had never been cleared. Monsters on Level 30+ were classified as *pre-System entities* — things that had existed before the System and that the System had never successfully catalogued.

At Level 33: a sleeping Architect.

I needed a team.

Not heroes. Not System-warriors with assigned quests.

Something else entirely.`,
    choices: [{ text: "→ The search begins", next: "a4k2_ren" }],
  },

  a4k1_irondeep: {
    act: "ACT IV", chapter: "Chapter 21 — Deep.Dive()", title: "The Irondeep Labyrinth",
    scene: "Wilderness — two years solo, then: the entrance",
    text: `Emma's hand-drawn maps — her farewell gift — showed me what I needed: The Irondeep Labyrinth. 37 levels, the last twelve uncleared. At Level 33, Tertius.

The entrance was unremarkable. A crack in a hillside, barely large enough for a person, with a cool draft and the particular smell of stone that hasn't seen sunlight in centuries.

The Terminal:

\`\`\`
> IRONDEEP LABYRINTH
> Registered depth: Level 37
> Actual depth: [UNKNOWN — SYSTEM DOES NOT ACCESS BELOW L.33]
> Recommended level: 40+
> Carrier level (spoofed): 16
>
> Risk assessment: EXTREMELY HIGH
> Recommendation: DO NOT ENTER
>
> Carrier status: ENTERING
>
> ...terminal declines further comment.
\`\`\`

I'd been operating at "DO NOT ENTER" for two years.

I went in.`,
    choices: [{ text: "→ Ren", next: "a4k2_ren" }],
  },

  a4k2_ren: {
    act: "ACT IV", chapter: "Chapter 21–22 — Encounter", title: "Ren — Shadow",
    scene: "Irondeep Labyrinth, Level 18",
    conditionalFlag: "renBond",
    textConditional: {
      fragen: `"Why do you want me?" Not: what for. Why. As if he were a person instead of an error. I answered: "Because you know how the System thinks. You live in it like a splinter under the skin."`,
      vertrauen: `I gave Ren no conditions. No rules. Just: "You can leave whenever you want." He looked at me for a long time, checking for the trap. Then he stayed. That was his yes.`,
      kampf: `"Can you fight?" He flickered. Then — one second, completely solid, completely present — he was more dangerous than anything I'd ever scanned. "Sometimes," he said. That was enough.`,
      default: ``,
    },
    text: `Out of the shadows stepped a figure.

Thin. Pale. Black hair. Grey eyes, almost colorless. Around his outline — a strange shimmer. As if reality wasn't certain whether he existed.

"[NULL]," said the figure. Not a greeting. An observation.

"Ren," I said, reading his Terminal entry. "[GHOST-TYPE — SYSTEM REMNANT — EXISTENCE STATUS: 34%]."

He looked at me with eyes that had been looking at things for three hundred years and had stopped expecting them to make sense.

"You can see my entry."

"Yes."

"No one else can."

"I'm not like anyone else."

Ren was a System error. An entity that had been created by a corrupted Summoning three hundred years ago, partially deleted, and had existed since in the gap between *registered* and *gone*. Flickering in and out of solid existence. Invisible to System scans. Unknown to any registry.

He had been alone for three hundred years.

I understood something about that.`,
    choices: [
      { text: "A) \"Yes. But I have questions. Many questions.\"",
        next: "a4k2_rex",
        affinityEffect: { ren: 25 },
        flagEffect: { renGefunden: true, renBond: "fragen" },
        narrativeFeedback: "Ren nods once, precisely. \"Questions are efficient.\" He solidifies slightly — as if your presence gives reality something to anchor to.",
      },
      { text: "B) \"Yes. But one rule: no secrets between us.\"",
        next: "a4k2_rex",
        affinityEffect: { ren: 20 },
        flagEffect: { renGefunden: true, renBond: "vertrauen" },
        narrativeFeedback: "\"...Accepted. No secrets.\" He means it literally — and you notice for the first time that he can't actually lie. The shimmer steadies.",
      },
      { text: "C) \"Can you fight?\"",
        next: "a4k2_rex",
        affinityEffect: { ren: 15 },
        flagEffect: { renGefunden: true, renBond: "kampf" },
        narrativeFeedback: "Ren dissolves. Then: a stalactite falls — exactly where you were standing a second ago. \"Sometimes,\" he says. You file that under: *yes.*",
      },
    ],
  },

  a4k2_rex: {
    act: "ACT IV", chapter: "Chapter 22 — Deep.Dive()", title: "Rex — King Without Kingdom",
    scene: "Irondeep Labyrinth, Level 19",
    conditionalFlag: "rexMethode",
    textConditional: {
      sofort: `Rex showed me a small scar on his left wing — from the chains, from the moment I'd cut them without checking the alarm. He showed it weeks later. Not as a reproach. With an expression that, on a dragon, looked like pride. "Rex was freed without questions," he said. "That is rare."`,
      teamwork: `I had asked Rex. Before I touched the chains. He looked at me — golden eyes, oversized, too intelligent for the situation — and gave a sign. No word. A sign. From that moment: not an animal being freed. A partner who had agreed to a liberation plan.`,
      default: ``,
    },
    text: `A massive cave. Crystal columns, a hundred meters high. A nest of melted stone.

And in the middle of it: a dragon.

Compact form — the size of a large horse, scales somewhere between copper and amber in the dim light. Golden eyes that tracked Kaito's entry with the attention of something very old and very bored and very done with being bored.

Chains. System-chains — the kind that suppressed skills, dampened power, prevented growth. Level-lock at an artificial ceiling.

The Terminal:

\`\`\`
> REX — DRAGON, IRON-SCALE VARIANT
> Age: 847 years
> Natural Level: [SUPPRESSED — CHAIN-LOCK ACTIVE]
> Actual capability: [IMMEASURABLE — SYSTEM CANNOT CALCULATE]
> Status: IMPRISONED
> Imprisonment authority: Imperial Crown, 600 years ago
> Reason: [CLASSIFIED]
\`\`\`

Six hundred years in chains.

Because he was too powerful and too old and the System didn't know what to do with things it couldn't quantify, so it locked them away.

I knew something about that too.`,
    choices: [
      { text: "A) [Code.Disrupt] immediately — break Rex's chains now.",
        next: "a4k2_rex_disrupt",
        affinityEffect: { rex: 20 },
        alignEffect: { schatten: 3 },
        flagEffect: { rexBefreit: true, rexMethode: "sofort" },
        narrativeFeedback: "Rex goes still. Then his entire body vibrates — scales shifting, bones realigning. Golden eyes glow. \"Rex... Rex feels something LARGE coming.\"",
      },
      { text: "B) Analyze first — disable the alarm, then disrupt.",
        next: "a4k3_gorrick",
        affinityEffect: { rex: 25 },
        flagEffect: { rexBefreit: true, rexMethode: "analyse" },
        narrativeFeedback: "Rex watches for three days with the curiosity of a very large, very patient dog. On the third day: the trembling. The chains splinter.",
      },
      { text: "C) Tell Rex honestly — let him make the decision.",
        next: "a4k2_rex_teamwork",
        affinityEffect: { rex: 30 },
        flagEffect: { rexBefreit: true, rexMethode: "teamwork" },
        skillUnlock: ["codeDisrupt"],
        narrativeFeedback: "Rex listens. Understands everything. Then: \"Rex has lived 800 years in chains. Rex is not afraid.\" He pushes from inside. You disrupt from outside. The chain shatters.",
      },
    ],
  },

  a4k2_rex_disrupt: {
    act: "ACT IV", chapter: "Chapter 22 — Rex.Free()", title: "Rex — [Code.Disrupt]",
    scene: "Irondeep Labyrinth, Level 19",
    text: `[Code.Disrupt].

I had never applied it to a living being.

The System classified Rex's chains as "Permanent Binding Rune, Class A, System Authority: Imperial." That meant: physically unbreakable, magically undissolvable. But the System-authorization keeping them active could be briefly — very briefly — interrupted.

Three seconds. That was the window.

I put my hands on the chains. Cold. Smooth. Pulsing with System-code that felt like electrical current through gloves.

\`\`\`
> [Code.Disrupt] — INITIATED
> Target: Binding Rune Class A
> Interrupting System authorization...
> WINDOW: 3.0 seconds
\`\`\`

The chains lit up. White, then gold, then a tone too high to hear but that vibrated in the teeth.

Rex went still.

Then — the chains fell.

Not dramatically. They just dropped. Metal on stone, clatter, silence.

Rex stayed completely motionless for three seconds.

Then he began to grow.

Not explosively — continuously, controlled, like someone remembering a shape they'd forgotten. The compact form became something else. Larger. Heavier. Golden eyes that glowed in the dark.

"Rex..."

"Rex." His voice — deep, resonant, the first thing he'd said. Just his name. As if checking it was still there.

Then: "Thank you."

That was all. But that was enough.`,
    choices: [{ text: "→ Gorrick", next: "a4k3_gorrick" }],
  },

  a4k2_rex_teamwork: {
    act: "ACT IV", chapter: "Chapter 22 — Rex.Free()", title: "Rex — Agreement",
    scene: "Irondeep Labyrinth, Level 19",
    text: `I asked.

Not rhetorically, not politely — genuinely: "May I?"

Rex looked at me. Golden eyes. Larger than my head, even in compact form.

He gave no word back. He gave a sign — a slow lowering of his head, once, with the dignity of a being not accustomed to being asked, and therefore particularly careful in his answer.

Yes.

I put my hands on the chains.

[Code.Disrupt] was more precise than I expected — as if knowing Rex had agreed gave the Terminal more room to work. The interruption was clean. The chains fell.

Rex grew.

Slowly, calmly, like someone stretching after a very long time sitting still.

Then he looked at me. For a long time.

"You asked," he said finally.

"Yes."

"No one asks Rex."

"In the future," I said, "they will."

He lowered his head again. Not agreement this time. Something else. Something that, in a dragon, might mean *belonging*.`,
    choices: [{ text: "→ Gorrick", next: "a4k3_gorrick" }],
  },

  a4k3_gorrick: {
    act: "ACT IV", chapter: "Chapter 23 — Gorrick.Recruit()", title: "Gorrick Steinbrecher",
    scene: "Kreuzweg — Gorrick's Forge",
    text: `Rex in compact lizard-form on my shoulder. Ren flickering next to me. Myself: looking like someone who'd spent six weeks in a dungeon.

Gorrick's Forge. The sign: "GORRICK'S FORGE — WEAPONS & ARMOR & DON'T ASK."

The dwarf stood at the anvil — broad as a refrigerator, beard reaching his belt, hammering something with the focused joy of a man who loves exactly what he does.

Level 31, Class: Master Smith (Heretic). The "Heretic" flag was interesting.

"ASHFORD!" He'd been told I was coming, apparently. He set down the hammer. "So. The NULL-anomaly. You look like the dungeon won."

"I won. The dungeon looks worse."

He looked at me. Then at Rex. Then at Ren, who flickered apologetically.

"Right." He picked up a dagger from the anvil. "Look at this first. Then we talk."

The dagger was dark metal that absorbed light. Runes that pulsed — black on black, nearly invisible, but *alive*.

"I wrote the runes not as System-code but as Aether-patterns," Gorrick said. "The System can't read them. So it can't block them."

I understood immediately. "Anti-System weapon."

"GORRICK weapon," he said. "And it's just the beginning."`,
    choices: [
      { text: "A) \"That's impressive, Gorrick. Really.\"",
        next: "a4k4_veyra",
        affinityEffect: { gorrick: 20 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Gorrick eyes him suspiciously. \"You're complimenting me.\" — \"Yes.\" — \"That means you want more from me.\" — \"Yes.\" Gorrick laughs. Longer than expected.",
      },
      { text: "B) \"How long until you make a WEAPON out of it?\"",
        next: "a4k4_veyra",
        affinityEffect: { gorrick: 15 },
        alignEffect: { schatten: 2 },
        narrativeFeedback: "Gorrick looks at him. Then the dagger. Then him. \"You're like me. You see something beautiful and immediately think: how could this be more useful.\" Not accusatory. Almost proud.",
      },
      { text: "C) \"Show me how you thought about this.\" — Sit down next to him.",
        next: "a4k4_veyra",
        affinityEffect: { gorrick: 30 },
        narrativeFeedback: "That was it. That was the right question. Gorrick — who normally explains nothing — explains. For an hour. With sketches and swearing and the enthusiasm of a man who has finally found someone who understands what he's saying.",
      },
    ],
  },

  a4k4_veyra: {
    act: "ACT IV", chapter: "Chapter 24 — Encounter.Mask()", title: "The Woman with a Thousand Faces",
    scene: "Kreuzweg — a bar",
    conditionalFlag: "veyraZugang",
    textConditional: {
      emotional: `"You're tired," I'd said. Not as analysis. As observation. Veyra hadn't let the mask fall — but something in her had gone still. "That's a strange way to recruit someone," she said. "Yes," I said. "I'm a strange employer." She stayed.`,
      gleichgestellt: `I'd shown her my real face. Not the System-Spoofed Level-9, not the silent analyst — the complete picture. In exchange. She showed her real face. Heterochrome eyes. Scars. That was our handshake.`,
      default: ``,
    },
    text: `The barmaid was a woman in her mid-twenties — olive skin, brown hair, friendly eyes, perfect smile.

Level 12. Class: Innkeeper's Assistant.

The Terminal flagged all of it as false.

Actual: Level 29. Class: Illusionist-Assassin. The smile was mask layer four. The eyes: heterochrome underneath — one grey, one amber. The posture: someone who had learned to make themselves exactly as visible as they chose to be.

She noticed me notice.

"Impressive," she said, no longer bothering with the barmaid's cadence. "Most people get through about three layers before they give up."

"I read code," I said. "Not faces."

"And what does my code say?"

"That you've been wearing masks for so long you can't remember which face is yours."

A pause. Long enough to mean something.

"And you're recruiting," she said.

"Yes."

"For what?"

"Something that doesn't exist yet."

She considered. Turned a coin across her knuckles — an old habit, clearly, the motion practiced into pure reflex.

"You'd have to be worth it," she said.

"Probably."`,
    choices: [
      { text: "A) \"I need a spy. The best. You're the best.\"",
        next: "a4k5_nullen_gruendung",
        affinityEffect: { veyra: 15 },
        flagEffect: { veyraAllianz: true, veyraZugang: "direkt" },
        narrativeFeedback: "Veyra studies him. \"You're either very brave or very stupid. Both are... useful.\" The coin disappears.",
      },
      { text: "B) \"You're tired. Four years of masks. That breaks everyone.\"",
        next: "a4k5_nullen_gruendung",
        affinityEffect: { veyra: 25 },
        flagEffect: { veyraAllianz: true, veyraZugang: "emotional" },
        narrativeFeedback: "Silence. Veyra's mask — the perfect mask of four years — develops a crack. \"Nobody ever...\" She stops. \"I'm in,\" she says instead.",
      },
      { text: "C) \"I'll show you my real face. Then you show me yours.\"",
        next: "a4k5_nullen_gruendung",
        affinityEffect: { veyra: 30 },
        flagEffect: { veyraAllianz: true, veyraZugang: "gleichgestellt" },
        narrativeFeedback: "Veyra sees: NOTHING. And understands. \"...You're really the anomaly.\" She's not frightened. She's reassured.",
      },
    ],
  },

  a4k5_nullen_gruendung: {
    act: "ACT IV", chapter: "Chapter 25 — NULL.Foundation()", title: "The Nulls",
    scene: "The Forbidden Tower — Founding",
    text: `The Forbidden Tower stood in an abandoned forest clearing. No path led to it. No map showed it. The System had registered it as "Location: Unknown. Danger: High. Recommendation: Avoid."

No path. No traces. Perfect.

Rex was simply happy. Finally, space. Finally, not having to be small.

We stood at the entrance and looked at each other.

Gorrick: "Looks like a giant's back stuck in the ground."

Veyra: "No paths. No traces. Perfect. I love it."

Ren, more solid than usual here, as if something in the building supported him: "The tower is... warm. In the code. Like it's been waiting."

Rex: "REX LOVES THIS PLACE."

Gorrick and Veyra looked at each other.

Gorrick, quietly: "Since when does the dragon talk?"

Veyra: "Since always. You just weren't listening."`,
    text2: `One month later. Top floor. Crooked table, three candles, a map of the known world.

I put everything on the table. Everything I knew. The System-Update. Primus. Septima. The Core-Tree. What I wanted to do. What I needed for it.

Silence.

Gorrick rubbed his beard. "You want to... rewrite the System."

"Yes."

"The Genesis-System. The one that's controlled the world for three thousand years."

"Yes."

"Which millions of people regard as divine law."

"Yes."

"In three years."

"Yes."

Gorrick looked at Veyra. Veyra looked at Ren. Ren looked at Rex. Rex looked at Kaito.

"And you need us for that."

"I need a network. People — and non-people — who can operate outside the System. Who the System can't see. Who are willing to work for something no one will ever credit them with." Pause. "I'm calling us: The Nulls."

Gorrick: "Nice name. Does that mean we're NOTHING?"

"It means we're what the System can't see. The gap in the code. The gods' blind spot."

Silence. Long enough that I started worrying.

Then, from Rex: "Rex is a Null. Rex was always a Null. Rex is in."

Ren, barely audible: "I... I've been nothing for three hundred years. I'd rather it be a choice." He went briefly more solid than usual. "I'm in."

Veyra produced a coin from nowhere, walked it across her knuckles. "Fifteen years of masks. You know what that means?" — "What?" — "I know every important person in the Empire's face. And none of them know mine." She set the coin down. "I'm in."

Gorrick stood. Extended his enormous hand.

"If this goes wrong," he said, "I want to at least go down as the worst decision of my life. So at least something memorable happened."

I shook his hand. It was larger than my entire forearm.

"That," I said, "I can promise."`,
    choices: [
      { text: "Listen to the Terminal — the first time Rex's Yes changed everything.",
        next: "a4k6_aria",
        affinityEffect: { rex: 15, ren: 15, veyra: 10 },
        narrativeFeedback: "Rex. Ren. Veyra. Gorrick. All four had said yes — each in their own way, at their own moment, for their own reason. Kaito opened the Terminal. No warnings. Just: four new entries under ALLIES.",
      },
    ],
  },

  a4k6_aria: {
    act: "ACT IV", chapter: "Chapter 26 — Encounter.Heal()", title: "Aria Moonsong",
    scene: "Fog Swamp, between Sylvanthos and Drak'Moor",
    conditionalFlag: "ariaZugang",
    textConditional: {
      familie: `"My mother sings your song," I'd said. Aria had stopped humming. The first time since I'd known her. "Which song?" I hummed the melody — the one Elena taught me without knowing what she was singing. Aria's eyes went wide. "That's the Song of the Earth. The oldest one." Pause. "Who taught it to your mother?" Nobody. It was just there. In her family. For generations. Aria looked at me as if she was suddenly seeing something that hadn't been there before.`,
      mentor: `I had asked Aria for lessons — not for a healer. The difference hadn't escaped her. "You want to learn," she said. "Not to be healed. Not to be protected. To learn." I nodded. "That's rare," she said. "In humans."`,
      default: ``,
    },
    text: `The Fog Swamp lay between Sylvanthos and Drak'Moor. Aether-density: 340% of normal. Lethal for ordinary people. For me: like a warm bath.

Deep in the swamp: a hut of living trees. Uncommon. The kind of structure only possible if you understood Wild Magic well enough to ask it for help.

Inside: an elf woman, maybe three hundred years of apparent age — which for elves meant early middle years. She was humming. A melody I recognized.

Elena's melody.

[Code.Read]: *Aria Moonsong. Level 52. Class: Wild-Magic Healer — Earth-Affinity. Age: 342 years.*

"You know that melody," I said.

She stopped.

Looked at me.

"Where did you hear it?"

"My mother sings it. She learned it from her mother. Going back for generations, apparently."

Aria set down what she was working on.

"That melody," she said carefully, "is from the pre-System period. I learned it from a Septima-Shrine, three hundred years ago." She looked at me. "It shouldn't exist in any human family's oral tradition."

"And yet."

"...And yet."

She looked at me for a long time.

"Who are you?" she asked.

"Someone who needs a healer that understands Wild Magic. And someone who has questions about that melody."

"Both things," she said, "are worth my time."`,
    choices: [
      { text: "A) \"I need a healer.\"",
        next: "a4k7_lilithia",
        affinityEffect: { aria: 15 },
        flagEffect: { ariaAllianz: true, ariaZugang: "neutral" },
        narrativeFeedback: "Aria nods. Businesslike. But her eyes smile where her mouth doesn't.",
      },
      { text: "B) \"I need someone who can teach me Wild Magic — really teach me.\"",
        next: "a4k7_lilithia",
        affinityEffect: { aria: 20 },
        flagEffect: { ariaAllianz: true, ariaZugang: "mentor" },
        narrativeFeedback: "Aria smiles — proud but humble. \"I am a student of the Aether. For 342 years. But I can show you what I know.\"",
      },
      { text: "C) \"My mother sings your song. For generations. It has no name in our family — it's just always been there.\"",
        next: "a4k7_lilithia",
        affinityEffect: { aria: 35 },
        flagEffect: { ariaAllianz: true, ariaZugang: "familie" },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Aria weeps silently. \"...My song has put a child to sleep. Across generations.\" She looks at him as if seeing something she hadn't expected. \"I'm coming with you.\"",
      },
    ],
  },

  a4k7_lilithia: {
    act: "ACT IV", chapter: "Chapter 27 — Diplomacy.Demon()", title: "Lilithia of Drak'Moor",
    scene: "Secret meeting place — midnight",
    conditionalFlag: "seraVaterWahrheit",
    textConditional: {
      kaito_erzaehlt: `I'd told Sera the truth about Varkos. Before this meeting. Which meant: she already knew. Lilithia didn't know that — but I did. When Lilithia mentioned Varkos's name, I watched Sera from the corner of my eye. She didn't move. That was more control than I'd expected.`,
      spaeter: `Lilithia spoke of Varkos. Sera had no idea. That was the first and last time the thought crossed my mind: maybe just say nothing. I discarded it immediately. Sera deserved every truth. All of them.`,
      default: ``,
    },
    text: `The secret meeting. Veyra had arranged it — through six intermediaries, three false identities, and a message hidden in a cake that passed three palace guards without any of them finding the letter inside.

Midnight. The fortress. Moonlight.

Lilithia of Drak'Moor was not what the Church's files described.

The files said: "Daemon-Princess, warlike, extremist, currently pushing for open conflict with the human Empire."

What showed up at midnight: a woman in her early hundreds (young, for a daemon), with red eyes that were tired rather than threatening, and the expression of someone who has tried the same argument a hundred times and is considering whether a different approach might work.

"[NULL]," she said, looking at me. "[NULL] is recruiting for something larger than itself."

"The Church would describe it that way."

"The Church describes everything it doesn't control as a threat." She sat. "I'm not the Church." She looked at Sera, who had come with me. "Sera Blackwood. Varkos's daughter."

Sera said nothing.

"Your father wants to meet you," Lilithia said. "He's been wanting to for years. He's afraid to."

Silence.

"He's not a monster," Lilithia said. "He's a man who made the wrong choices and has been living with them for twenty years. That doesn't excuse it. It explains it."

I watched Sera.

This was her moment, not mine.`,
    choices: [
      { text: "A) \"Promised. Equality. For all races.\" + \"I'll say that publicly.\"",
        next: "a4k8_irondeep2",
        affinityEffect: { lilithia: 25 },
        flagEffect: { daemonenAllianz: true },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Lilithia shakes his hand. Firmly. Finally. Her red eyes are wet. \"An honest human. That's rare.\"",
      },
      { text: "B) \"I can't promise EVERYTHING. But I'll work for it.\"",
        next: "a4k8_irondeep2",
        affinityEffect: { lilithia: 20 },
        flagEffect: { daemonenAllianz: true },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Lilithia: \"An honest man. That's rare.\" The alliance is smaller — but more real.",
      },
      { text: "C) \"Equality — and an apology from the entire human Empire. Official.\"",
        next: "a4k8_irondeep2",
        affinityEffect: { lilithia: 30 },
        flagEffect: { daemonenAllianz: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Lilithia *freezes*. In three thousand years — no human has ever offered an apology. \"You mean it,\" she says. It's not a question.",
      },
    ],
  },

  a4k8_irondeep2: {
    act: "ACT IV", chapter: "Chapter 28 — Irondeep.Final()", title: "Second Expedition",
    scene: "Irondeep Labyrinth, Levels 23–32",
    text: `Second expedition. Kaito, Ren, Rex (now 4.5 meters — 50% bigger in four months).

Levels 23–25 — System stability: 30%. Monsters: pre-System beasts. Void-fragments. Living glitches. The walls contained messages from Tertius:

*Level 24: I buried myself here because I could no longer watch. — T.*

*Level 28: If you're reading this: you found a way. I was afraid no one would. — T.*

*Level 31: Thank you for not giving up. I have been waiting a very long time. — T.*

On Level 32: the System failed completely. No status windows. No levels. No classes. Just Kaito, Ren, Rex, and darkness.

And one final question from the Warden — a pre-System guardian entity, thirty meters of crystallized Aether-code, speaking in a frequency that bypassed ears entirely:

**"FIRST QUESTION: WHY DO YOU WANT TO CHANGE THE SYSTEM?"**

I stood in the dark and thought about Millheim. About Gregor's seven-minute silences. About Roland's locked level. About Sera, fighting her own nature alone for years. About Yuki's countdown. About Ren's three hundred years.

And answered.`,
    choices: [
      { text: "A) \"For the people I love. My family. My friends.\"",
        next: "a4k8_wächter_opfer",
        affinityEffect: { tertius: 20 },
        alignEffect: { licht: 2 },
        flagEffect: { waechterAntwort: "persoenlich" },
        narrativeFeedback: "\"A SMALL REASON. BUT A TRUE ONE.\" The Guardian's eyes warm — as far as a thirty-meter crystal construct can warm.",
      },
      { text: "B) \"For EVERYONE. Every race, every being the System has limited.\"",
        next: "a4k8_wächter_opfer",
        alignEffect: { licht: 2 },
        flagEffect: { waechterAntwort: "universal" },
        narrativeFeedback: "\"A LARGE REASON.\" A long pause. \"BUT DO YOU HAVE THE STRENGTH TO CARRY IT?\" Kaito: \"I'll find out.\" Accepted.",
      },
      { text: "C) \"Because the System is BLIND. I want to give it eyes.\"",
        next: "a4k8_wächter_opfer",
        alignEffect: { licht: 1, ordnung: 1 },
        flagEffect: { waechterAntwort: "philosophisch" },
        narrativeFeedback: "A long silence. \"...SEPTIMA SAID THE SAME THING.\" And then, quieter: \"THE CORE HAS A HEART. FIND IT.\"",
      },
      { text: "D) \"Because someone has to. And no one else can SEE it.\"",
        next: "a4k8_wächter_opfer",
        alignEffect: { schatten: 2 },
        flagEffect: { waechterAntwort: "pflicht" },
        narrativeFeedback: "\"DUTY WITHOUT PASSION IS... SAD. BUT HONEST.\" Accepted.",
      },
    ],
  },

  a4k8_wächter_opfer: {
    act: "ACT IV", chapter: "Chapter 28 — The Void-Guardian", title: "The Third Trial",
    scene: "Irondeep Labyrinth, Level 32",
    conditionalFlag: "waechterAntwort",
    textConditional: {
      persoenlich: `I had said "for the people I love." The Guardian hadn't moved. But the space around us became warmer — barely measurable, but real. As if something very old was accepting an answer it hadn't expected.`,
      universal: `"Everyone is abstract. Can you name a face?" I named Mira's. That was enough. Maybe universality is always more concrete than it sounds.`,
      philosophisch: `The Guardian processed my answer — I could almost hear it, like a processor handling unexpected parameters. Then: "Your reasoning has no vulnerability I can attack." That was, I believe, the most complicated compliment a pre-System guardian construct had ever intended.`,
      default: ``,
    },
    text: `The second question came after the first was accepted.

**"SECOND QUESTION: WHAT WILL YOU SACRIFICE?"**

The Void-Guardian showed images — not visions, System-projections in the Aether. What might come. What choosing to fight the System might cost.

Kaito saw: people who wouldn't survive the transition. Systems that would fail before the new ones were ready. A gap — between the old order and the new — in which things would be worse before they were better.

He saw Millheim. Empty.

He saw Yuki's timer, and what would happen if he failed.

He saw Roland, still level 34 forever.

**"WHAT WILL YOU SACRIFICE?"**

I answered.`,
    choices: [
      { text: "\"Time. Safety. The version of myself that could have had a normal life.\"",
        next: "a4k9_puristen",
        affinityEffect: { tertius: 25 },
        alignEffect: { licht: 1 },
        flagEffect: { waechterAntwort: "persoenlich" },
        narrativeFeedback: "The Guardian accepts. The path to Level 33 opens.",
      },
      { text: "\"Whatever it takes. I don't set conditions on that.\"",
        next: "a4k9_puristen",
        alignEffect: { ordnung: 1 },
        flagEffect: { waechterAntwort: "absolut" },
        narrativeFeedback: "A very long silence. \"THAT IS EITHER GREAT WISDOM OR GREAT FOOLISHNESS.\" Pause. \"IN MY EXPERIENCE: BOTH.\" The path opens.",
      },
    ],
  },

  a4k9_puristen: {
    act: "ACT IV", chapter: "Chapter 29 — Puristen.Attack()", title: "The Purists",
    scene: "The Forbidden Tower — attack",
    conditionalFlag: "turmStatus",
    textConditional: {
      zerstoert: `Gorrick stood before the rubble and said nothing. That was, for Gorrick, the equivalent of weeping. I stood next to him and also said nothing. Then: "We'll build a new one." — "Better," said Gorrick. "This time without the broken runes."`,
      solo: `I had held them off alone. My left arm didn't work right for three days. Gorrick looked at me with the look of someone who knows what that means and isn't going to say it. Aria healed the arm. The rest healed with time.`,
      tarnung: `Veyra had disguised the tower as an abandoned warehouse. Thirty Purists searched it and found nothing. That was the first time I saw Veyra work without a mask — calm, methodical, invisible. I understood why she was the best.`,
      default: ``,
    },
    text: `Thirty Church Purists found the tower.

Not through investigation — through a lucky scan from a passing patrol that hit the tower's Aether-signature at exactly the wrong moment.

They came at dawn. Armed. With a System-dampening field that cut off the interior's skill-use.

Gorrick, from downstairs: "WE HAVE COMPANY."

I looked at the tower's occupants. Gorrick. Ren. Veyra. Rex. Aria. Five of us, plus one very large dragon in a building that was now a dampened zone.

"Options," I said.

Options.`,
    choices: [
      { text: "A) \"Rex — hold them off. Don't kill. DETER.\"",
        next: "a4k9_nachwirkungen",
        affinityEffect: { rex: 15 },
        alignEffect: { ordnung: 1 },
        flagEffect: { puristenKampf: "rex", turmStatus: "gehalten" },
        narrativeFeedback: "Rex grows to full size. 4.5 meters of cobalt dragon. Natural fire — not System-fire — hits the ground in front of the Purists. The front ranks break. That buys time.",
      },
      { text: "B) \"Everyone out. Destroy the tower.\"",
        next: "a4k9_nachwirkungen",
        affinityEffect: { gorrick: 15 },
        alignEffect: { chaos: 1 },
        flagEffect: { puristenKampf: "sprengung", turmStatus: "zerstoert" },
        narrativeFeedback: "The tower implodes. Silently. The Purists stand before an empty crater. \"A building can be rebuilt,\" Gorrick says. \"A team can't.\"",
      },
      { text: "C) \"I hold them off. Alone.\"",
        next: "a4k9_nachwirkungen",
        alignEffect: { schatten: 2 },
        flagEffect: { puristenKampf: "solo", turmStatus: "solo" },
        narrativeFeedback: "You step forward. No System-level. No status. Just Void-skills and a dagger the System can't read. It's enough.",
      },
      { text: "D) COMPROMISE — Veyra disguises the tower as a harmless old ruin.",
        next: "a4k9_nachwirkungen",
        affinityEffect: { veyra: 20 },
        alignEffect: { verborgenheit: 2 },
        flagEffect: { puristenKampf: "tarnung", turmStatus: "tarnung" },
        narrativeFeedback: "Veyra takes a deep breath. Then the tower changes. Not invisible — old. Abandoned. Harmless. Thirty Purists search it and find nothing.",
      },
    ],
  },

  a4k9_nachwirkungen: {
    act: "ACT IV", chapter: "Chapter 29 — Aftermath", title: "We Must Change",
    scene: "The Forbidden Tower — after",
    text: `The Purists had found us. That changed the timeline.

Not catastrophically — the Nulls were intact, the tower was intact (or rebuilt, or newly disguised, depending on how it had gone). But the Church now had a data point. They knew something was in this region. They'd look again.

"We need to move faster," I said.

"We always knew this," said Veyra. She was right.

"Three priorities," I said. "First: the Helden-party. We need them on our side before Mordecai can use them. Second: Celeste — the Princess is the only person who can challenge Mordecai's authority from within the system. Third: Irondeep." I looked at them. "Level 33. Tertius. That's the key to everything."

Gorrick: "Which first?"

"All three. Simultaneously. In thirty days."

A pause.

Rex: "Rex is ready."

Ren: "I... yes. Me too."

Gorrick rubbed his beard. "When this goes wrong, I want a good story."

"I promise you a good story."

"Then let's go."`,
    choices: [{ text: "→ The reunion", next: "a4k10_wiedersehen" }],
  },

  a4k10_wiedersehen: {
    act: "ACT IV", chapter: "Chapter 30 — Return.Hero()", title: "The Old Bridge",
    scene: "Kreuzweg — the river bridge",
    conditionalFlag: "finnImKampf",
    textConditional: {
      geblieben: `At the reunion, Finn said: "I stayed, back then." No apology. No explanation. Just the statement. "I was scared and I stayed anyway." Pause. "I wanted to tell you that. For a long time."`,
      gegangen: `Finn said nothing about the night in Millheim. He looked at his sword once — briefly — and then away. There were things between us we'd never say aloud. That was one of them. But: he was here.`,
      echtes_schwert: `Finn drew his sword at the reunion — the real one he'd received the night in Millheim. He held it exactly the way I'd shown him, years ago. Exactly. He'd practiced every day for three years. "Roland helped," he said. He was grinning.`,
      default: ``,
    },
    text: `Two years.

Finn had changed.

Not the grin — the grin was identical, a constant in an inconstant world. But around it: more. The grin of a fourteen-year-old who'd thought everything was an adventure. The grin of a sixteen-year-old who knew the difference between adventure and what actually happened, and had decided to be happy anyway.

He stood on the bridge with his arms crossed and pretended he hadn't been waiting.

He'd clearly been waiting.

"You look terrible," he said.

"Hello, Finn."

"Seriously. Did you fight something large?"

"Multiple large things. In a dungeon. For six months."

"...Cool."

That was Finn.

Sera came around the corner of the bridge. She didn't say hello. She looked at him once — direct, brief — and then looked at the river. That was Sera's hello.

Roland and Elena were further back. Roland was straight, like always. Elena had Mira by the hand — Mira, who was nine now and had somehow gotten louder.

"KAITO!" Mira launched at him before he could say anything.

He caught her.

"Did you save the world?" she demanded, hanging off his neck.

"Not yet."

"Okay. Hurry up."`,
    choices: [{ text: "→ Act V: War.Init()", next: "a5k1_intro" }],
    affinityEffect: { finn: 20, sera: 10, roland: 10, elena: 10, mira: 15 },
  },

};
