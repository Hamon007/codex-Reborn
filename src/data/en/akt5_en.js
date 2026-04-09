// AKT V — English Translation
// War.Init() — the war, Tertius, the Prophet, the choice before the final descent
// Voice note: Kaito is 18. The dry humor has edges now. The analysis is faster.
// New voices: Tertius (three thousand years compressed into patient sentences),
//             Martin Ashvale (the Prophet: three voices, all of them exhausted)

export const AKT_V_EN = {

  a5k1_intro: {
    act: "ACT V", chapter: "Time Jump — One Year of Fire", title: "18",
    scene: "Aethermere — one year before the Update",
    text: `Eighteen.

I was eighteen.

In my first life I'd moved into my first apartment at eighteen — one room, one desk, one coffee machine that was too loud. I'd thought that was freedom.

In this life I was eighteen and leading a shadow organization trying to topple a three-thousand-year-old divine order. I had Rex, who no longer fit into rooms. I had Gorrick, who forged anti-System weapons in the basement and hummed while doing it. I had Veyra, who was now showing her real face — sometimes, in certain lighting, when she thought no one was looking. I had Ren, who was getting more solid every day, as if the world was finally starting to believe in him.

And I had a Terminal that reminded me daily:

\`\`\`
> COUNTDOWN: 398 DAYS
> STATUS: CRITICAL
> The System-Update will permanently eliminate
> all possibility of change.
> Carrier: You know what's at stake.
\`\`\`

I knew.

Three hundred ninety-eight days to make the impossible possible.

I'd never learned to listen to impossibility.`,
    text2: `What happened in that year happened quickly.

Too quickly to tell in words — so not in words, but in moments.

The moment when General Kross stood before us for the first time, not as an enemy.

The moment when Yuki threw the rabbit charm through the air and said: "Hold it until you come back."

The moment when Aria sang the melody — Elena's melody — and Kaito froze, because he suddenly understood how old this story was.

The moment when Mira sent him a letter — handwritten, with a drawing of Rex — and wrote: "I'm training every day now. When this is over, I'll fight next to you. That's not a suggestion."

He'd written back: "I know."

Three hundred ninety-eight days.

Then three hundred.

Then one hundred.

Then three.`,
    choices: [{ text: "→ Operation Cleanse", next: "a5k1_kriegsplan" }],
  },

  a5k1_kriegsplan: {
    act: "ACT V", chapter: "Chapter 31 — War.Init()", title: "Operation Cleanse",
    scene: "Forbidden Tower — 398 days to Update",
    conditionalFlag: "kriegsPrioritaet",
    textConditional: {
      militaerisch: `Akira's public refusal had already happened before Veyra's report arrived. "The Heroes refuse deployment." Mordecai had no spearhead anymore. Sometimes the best thing you can do is to have started early enough.`,
      diplomatisch: `Lilithia had slowed Varkos's mobilization — three weeks. Mordecai's "growing daemon threat" had lost its foundation.`,
      alle: `Three fronts simultaneously. The Terminal: "No pressure." Me: "Thank you, Terminal."`,
      default: ``,
    },
    text: `The war didn't begin with a battle cry.

It began with a letter. Veyra's informant. Three pages, no signature. "Operation Cleanse — begin in 30 days. Target: preemptive strike against Drak'Moor."

I read it three times.

"If Operation Cleanse happens," I said, "tens of thousands die. Lilithia's peace offer falls. The war begins. And Mordecai has exactly what he needs: a wartime emergency that makes the System-Update a non-issue."

Veyra: "Thirty days."

Gorrick: "That's not much."

"No."

Ren, flickering then solid: "What's the plan?"

I looked at the map. Three fronts, three problems, one window. Thirty days.

"We separate Mordecai's power from his supporters. For that we need three things simultaneously: Celeste free. The Heroes on our side. And Varkos — silent."

The Terminal: \`CALCULATING SUCCESS PROBABILITY...\` Pause. \`NO DATA. TOO MANY VARIABLES.\`

"The Terminal can't calculate a success probability."

Gorrick: "The Terminal is scared."

"The Terminal is scared." I closed it. "That's actually reassuring."`,
    text2: `Three hours. We planned.

Gorrick mapped every entrance to the Imperial Palace. Veyra listed all the identities she hadn't yet used. Ren sketched the System-networks between the Imperial Knights. Rex slept — because Rex always slept during planning sessions — but his ears moved. He was listening.

Sometime in the night, Aria put a hand on the map.

"We're saving the world," she said. No question mark.

"Yes."

"Good." She pulled her hand back. "Then let's not spend the whole night talking."

That was, in its brevity, the best thing anyone said that evening.`,
    choices: [
      { text: "A) POLITICALLY — Celeste first. No Empress, no Council.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "politisch" },
        alignEffect: { ordnung: 2 },
        narrativeFeedback: "Veyra nods immediately. This is her territory. \"Three weeks. I'll prepare the way.\" She disappears into the night before anyone can respond.",
      },
      { text: "B) DIPLOMATICALLY — Lilithia and Varkos must stay silent. No war without a pretext.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "diplomatisch" },
        alignEffect: { licht: 1, ordnung: 1 },
        narrativeFeedback: "Aria looks at the map. \"That means Sera speaks with her father.\" Silence. Everyone knows what that means.",
      },
      { text: "C) MILITARILY — The Heroes. Publicly. Akira refuses deployment before the people.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "militaerisch" },
        alignEffect: { chaos: 1 },
        narrativeFeedback: "Gorrick: \"Risky.\" — \"Yes.\" — \"I like it.\" He says it with the tone of someone who appreciates risk on principle.",
      },
      { text: "D) ALL THREE — Thirty days. Three fronts. The Nulls split up.",
        next: "a5k2_sera_varkos",
        flagEffect: { kriegsPrioritaet: "alle" },
        alignEffect: { chaos: 2, verborgenheit: 1 },
        narrativeFeedback: "The Terminal: \"PROBABILITY: UNCALCULATED.\" Gorrick: \"I love that.\" Rex opens one eye. Closes it again. He's in.",
      },
    ],
  },

  a5k2_sera_varkos: {
    act: "ACT V", chapter: "Chapter 32 — Sera.Varkos()", title: "Sera and Varkos",
    scene: "Drak'Moor border",
    text: `Sera rode on Rex's back as we crossed the border. The red streak in her hair glowed like a thread of fire.

She knew. I'd told her two weeks ago — at the old riverbank.

"Who is he?"

"General Varkos. Leader of the war faction in Drak'Moor."

"...The WAR CHIEF? The 'Devastator'? My father is a MONSTER—"

"He's also the man who hid you to protect you from his own faction. Who sent a daemon woman to ensure you'd grow up safely in a human village." I waited. "He's both things. Like most people."

Sera had said nothing for a long time.

"Does he want to meet me?"

"Yes."

"Does he deserve to?"

"I don't know," I said. "But you deserve the choice."

Now, on Rex's back, she looked at the daemon territory below. Her face unreadable — or, readable if you knew how: resolved. Not at peace. *Resolved*. Those were different things.`,
    choices: [
      { text: "A) \"And one more thing — the Void-Prophet. Who is he?\"",
        next: "a5k3_tertius",
        affinityEffect: { varkos: 20 },
        narrativeFeedback: "\"...He's dangerous. He wants to BURN the System.\" He gives the coordinates.",
      },
      { text: "B) \"I want a public statement from you: 'The daemons were never the enemy.'\"",
        next: "a5k3_tertius",
        affinityEffect: { varkos: 25 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Varkos laughs — bitter. Then looks at Sera. \"...For her.\" He nods.",
      },
      { text: "C) \"When the System falls — I need someone who will rebuild *after*.\"",
        next: "a5k3_tertius",
        affinityEffect: { varkos: 15 },
        narrativeFeedback: "\"I don't know if I CAN.\" Sera: \"Then learn. Like I did.\" Varkos looks at his daughter with an expression no one had seen on his face before.",
      },
      { text: "D) \"I lied to you back then, Sera.\" — Now. Here. After all of it.",
        next: "a5k3_tertius",
        requires: { flag: { seraLuegeAusstehend: "true" } },
        alignEffect: { licht: 2 },
        affinityEffect: { sera: 25 },
        flagEffect: { seraLuegeAusstehend: "false", seraKenntVoll: "true" },
        narrativeFeedback: "Sera looks at him. For a long time. Then: \"I know.\" — \"You already knew?\" — \"Since the control training. Your face is different when you're lying.\" Pause. \"Thank you for saying it anyway.\"",
      },
    ],
  },

  a5k3_tertius: {
    act: "ACT V", chapter: "Chapter 33 — Descent.Final()", title: "Tertius — The Sleeping Smith",
    scene: "Irondeep Labyrinth, Levels 31–33",
    text: `Finn had insisted on coming.

"Best. Friend. Forever."

"Finn, this is Level 31. The dungeon-rank is—"

"I. AM. COMING."

There are arguments you can't win. That was one.

So they went together. Kaito and Finn. The Terminal flickered with every step deeper — on Level 32, the System failed almost completely. No status window. No level. No class. Only man and stone and the faint glow of ancient runes.

Finn looked at his hands. "My level is... gone?"

"Down here the System doesn't exist. Just be Finn."

"I'm always Finn."

"I know. I meant—"

"I know what you meant." He grinned — the wide, indestructible grin. "Come on."

Level 33 was not a dungeon level. It was a workshop.

An anvil the size of a house. Walls covered in blueprints — the Genesis-System architecture, spread out like the innards of a god, every line in a script Kaito placed somewhere between Old-Aetherisch and machine code. Tools so massive no human could lift them.

And in the middle — standing upright, eyes closed, breathing: something that looked like a man.

Three meters. Bronze skin, polished to a mirror. Silver hair that floated slowly — very slowly — in the Aether.

The Terminal: \`[PRE-SYSTEM ENTITY. TERTIUS. THIRD ARCHITECT. STATUS: SLEEPING — FOR 2847 YEARS]\`

Finn, whispering: "...Is that a god?"

"One of the ones who built the world. Yes."

"Should we... wake him?"

"Yes."

"How?"

Kaito opened the Terminal. Found a rune in Old-Aetherisch — the basic rune for *waking*. Wrote it in the air, with his finger, slowly. He had never done this. He didn't know if it would work.

It worked.

The light changed. The bronze skin began to glow — soft, warm, like metal just from the forge. Eyes opened.

Gold. Completely gold. No pupils. Just light.

"...Someone wrote the waking-sign." The voice — deep — resonated not through ears but through the structure of the room. "In poor Old-Aetherisch."

"Still learning."

"You're learning." Tertius looked at him. For a long time. "A human carrying [NULL]. I didn't expect that." Pause. "I've waited 2847 years. I should have stopped sleeping sooner. What happened?"

"The System is almost done. Primus is driving an Update that—"

"I know what the Update does." His voice was so calm it was frightening. "I designed it."

Silence.

"*You* designed it?"

"Two thousand years ago. As a safety system. To prevent misuse of the Genesis-System. Primus... adapted the original plan. Developed it further." Tertius closed the golden eyes briefly. "What Primus made of it is no longer what I designed. It's become something else. Something I wouldn't have wanted."

He looked at his hands. The hands that had forged the System.

"I slept for 2847 years because I thought it was good enough. That was a mistake."`,
    text2: `"I need your help," said Kaito.

Tertius looked at him. The human from another world. The NULL-carrier. The programmer.

"You want to rewrite the System."

"Yes."

"Do you know what that means? Not theoretically. Concretely. How much power that requires. How much knowledge. How much..." He searched for the word. "...Humility. The System isn't a tool. It's a living thing. If you rewrite it without *understanding* it — it dies."

"I understand it."

"You know the code."

"I know the code. And I know what it does. And I know what it does to the people who live inside it. I've lived inside it for seventeen years."

Tertius was silent for a long time.

Then: "Finn."

Finn, who had been standing quietly behind Kaito — quietly, for Finn, which wasn't very quiet, but for this moment: "Yes?"

"You are his friend."

"Best friend."

"Why?"

Finn frowned. "Because he was the first person who showed me how to fight properly. Because he stayed with Sera when everyone else was afraid. Because—" He stopped. Shrug. "Because he's Kaito. That's enough."

Tertius nodded once.

"A human others would die for." He looked at Kaito. "That's the qualification I was looking for. Not power. Not knowledge." Pause. "Show me your plan."`,
    systemBox: {
      title: "VOID-TERMINAL — TERTIUS ANALYSIS",
      lines: [
        "> Tertius. Third Architect.",
        "> Level: [NOT MEASURABLE]",
        "> Age: 3,247 years",
        ">",
        "> Role in Genesis-System: SMITH",
        "> → Forged the physical structure of the System",
        "> → Knows every code-element from the inside",
        "> → Only Architect still EXISTING",
        ">    (Primus: Avatar. Secunda: Spirit.)",
        ">    (Sextus: Echo. Septima: Fragment.)",
        ">",
        "> Status: COOPERATIVE",
        "> Condition: 'Do it right.'",
        ">",
        "> Terminal note: 'He waited 2847 years",
        ">   for someone who asks the right question.",
        ">   You asked it.'",
      ]
    },
    choices: [{ text: "→ Chapter 34: Yuki's Timer", next: "a5k4_yuki" }],
  },

  a5k4_yuki: {
    act: "ACT V", chapter: "Chapter 34 — Shield.Break()", title: "Yuki's Timer",
    scene: "Eiswall Border Fortress — 11 months to Update",
    text: `She looked bad.

Thinner than two years ago. Pale. Grey streaks in her hair that hadn't been there before — not many, but visible, and on an eighteen-year-old you see them immediately. The countdown above her head: 847 days, 14 hours, 33 minutes.

Dropping by the second. Always.

"You're looking at me like a problem to be solved," she said.

"You're not a problem. You're my friend."

She laughed — briefly, real, the laugh she had when she didn't know she was laughing. "That's the kindest thing you've ever said to me."

"I'm not a kind person."

"No." She looked at the countdown above her head. Kaito saw it. She knew he saw it. "Can you really do it?"

"[Code.Modify] is partially unlocked now. I've practiced three times — on smaller System-constructs. It worked."

"Three times."

"Three times."

"That's not much."

"No."

Silence. Yuki looked at her hands. The hands of a mage who hadn't had a single normal day since the Summoning. No normal school, no normal home, no normal day without System-obligations.

And above all of it: the countdown.

"If it goes wrong," she said, "you won't die from it?"

"Probably not."

"Probably."

"I'll be honest: it might hurt. Possible organ damage. The Terminal warns me every time."

"And still."

"I made a promise."

Yuki looked at him — long, with the gaze of someone who has learned not to trust promises because too many were broken. Then:

"When?"

"Now. If you're ready."

She nodded. Once. No big gesture — that was Yuki. No big gestures. Just decisions.`,
    choices: [
      { text: "A) \"Because I promised.\" — Just that.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Yuki looks at him for a long time. Then: \"That's enough.\" No smile. But her shoulders ease — barely, but real. She closes her eyes.",
      },
      { text: "B) \"Because you gave me the rabbit.\" — He holds the charm up.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 30 },
        flagEffect: { yukiRomanceVertieft: true },
        narrativeFeedback: "Yuki looks at the rabbit. Looks at Kaito. Her eyes go very briefly very wide — then narrow. \"...Idiot,\" she says quietly. Not as an insult. As the warmest thing she has.",
      },
      { text: "C) \"Because the world needs you. Not as a hero — as yourself.\"",
        next: "a5k4_drain",
        affinityEffect: { yuki: 25 },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Yuki says nothing. But her hand finds his — briefly, firm, then released. As if checking something. As if it's real.",
      },
      { text: "D) \"Because you'd do the same for me.\" — Silence. Both know that's true.",
        next: "a5k4_drain",
        affinityEffect: { yuki: 20 },
        narrativeFeedback: "Yuki: \"Yes.\" Just that. The simplest and most complete yes Kaito has ever heard.",
      },
    ],
  },

  a5k4_drain: {
    act: "ACT V", chapter: "Chapter 34 — The Transfer", title: "The Promise Kept",
    scene: "Eiswall — the procedure",
    conditionalFlag: "yukiToken",
    textConditional: {
      hase: `The rabbit charm lay on the floor between us while I worked. Yuki saw it. Said nothing. But her trembling hand stopped trembling.`,
      stein: `Dmitri's stone in my pocket pressed heavy against my leg while I manipulated the code. Somewhere, Dmitri had the other half. I worked faster.`,
      default: ``,
    },
    text: `It wasn't like programming.

It was like surgery. On code that was *alive*.

Yuki's life force — warm, blue, fragile — flowed through the code like blood through veins. The System-Drain was attached like a leech: a constant pull, extracting 0.3% of her vital capacity daily, redirecting it into... Kaito had to look twice. Into the Summoning-Protocol itself. The System was using the Heroes to power its own infrastructure.

That was the most cynical thing he'd read in three years of reading the System.

He severed the Drain. And redirected it — onto himself. Onto the infinite void between System and Void.

It hurt.

Not physically — the body wasn't present here, not really. Mentally. The experience of cutting something living, even if that something was parasitic.

But the countdown above Yuki's head stopped.

\`\`\`
> YUKI NAKAMURA — SYSTEM-DRAIN:
> SEVERED
>
> Vital capacity: STABLE
> Timer: DEACTIVATED
> Status: FREE
\`\`\`

The Terminal: \`[Code.Modify] OVERLOADED. RECOVERY TIME: 72 HOURS.\`

Yuki opened her eyes.

The space above her head: empty. Clear. No countdown.

She looked at it for a long time.

"Is it really gone?" she asked.

"Yes."

She looked at the empty space above her head for another long moment.

Then: very quietly, in Japanese — something she only spoke when she thought no one who understood could hear her — she said something I didn't translate. Some things aren't for translation.`,
    choices: [{ text: "→ The Princess", next: "a5k5_celeste" }],
  },

  a5k5_celeste: {
    act: "ACT V", chapter: "Chapter 35 — Celeste.Free()", title: "The Princess",
    scene: "Imperial Palace, Aetheria Prime",
    text: `Veyra had spent three months laying the groundwork.

Twenty-three false identities. Nine separate informants. A package hidden in a cake that passed three palace guards without any of them finding the letter inside.

Kaito infiltrated the palace as a night patrol, Spoof-Level 9, Class: Imperial Guard. The System logged him as confirmed. The palace had so many guards no one knew everyone. That was the weakness. Veyra had found it.

Celeste's room: Fourth floor, west wing. Four bolts, a System-seal, a guard who changed every two hours.

He opened the door. Soundless. [Code.Spoof] on the seal — three seconds.

Celeste was at the desk.

Not sleeping. Not crying. *Writing*. Feverishly, with the concentration of someone who has had months of waiting and turned them into something useful.

She heard the door. Looked up. Saw him.

No surprise in her eyes.

"I've been wondering when," she said.

"You knew someone was coming?"

"Veyra's package. The message in the third layer of the cake." A small smile. "I'm a princess. I've had time to learn that."

Kaito looked at the desk. Stacks of documents. Dense writing.

"What is that?"

"Evidence." She stood. Placed the papers in a bag that was clearly already packed and ready — had been for weeks. "Every decision Mordecai made in my name. Every order. Every lie." She looked at him. "I had four months to collect evidence. Mordecai gave me the time by locking me up."

"He did you a favor."

"He doesn't know that." She looked at the bag. "Shall we go?"`,
    text2: `They went.

Not in panic, not running — Celeste walked with the bearing of a woman leaving a palace that was hers, not someone fleeing. That was, Kaito realized, smarter than it looked.

A fleeing princess attracts attention.

A princess who strolls through the west wing as if she's always gone strolling at night: not so much.

Three guard posts. Three Spoofed status windows. Three nods.

In the courtyard: Veyra. In the uniform of an Imperial courier. A horse.

"I thought you'd never come," Veyra said.

"Ten minutes."

"Ten minutes is late."

"Celeste had baggage."

"Evidence," Celeste corrected. "Not baggage." She mounted the horse with the naturalness of someone who'd done this more than palace ceremonies. "Where are we going?"

"Somewhere Mordecai won't look immediately."

"Do you have a specific plan?"

A pause.

"...We're working on it."

Celeste looked between Kaito and Veyra. Then, very quietly: "I've been under house arrest for four months and I'm going with a group that considers the Imperial Palace their headquarters but has no plan."

"We have a plan. It's just not... finished."

"My God," said Celeste. But she rode on.`,
    choices: [
      { text: "A) \"You're brave. For a princess.\"",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 15 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Celeste: \"You say that as if princesses are normally cowardly.\" — \"Statistically speaking...\" — \"Don't. Don't finish that.\" She rides faster.",
      },
      { text: "B) \"Your Time-Weaver skill — how far ahead can you see?\"",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 20 },
        narrativeFeedback: "Celeste looks at him with the expression of someone who just realized this is the first relevant question he's asked. \"Three to five seconds. In combat. Longer with preparation.\" — \"That's enough.\" — \"For what?\" — \"I'll explain.\"",
      },
      { text: "C) \"Four months collecting evidence — you planned this.\"",
        next: "a5k6_kaiserrat",
        affinityEffect: { celeste: 25 },
        narrativeFeedback: "Celeste looks straight ahead. \"From the beginning. Mordecai gave me the time I needed by thinking he was punishing me.\" Pause. \"That was his biggest mistake.\"",
      },
    ],
  },

  a5k6_kaiserrat: {
    act: "ACT V", chapter: "Chapter 36 — Council.Override()", title: "The Showdown",
    scene: "Imperial Throne Room, Aetheria Prime",
    conditionalFlag: "mordecaiWissen",
    textConditional: {
      septima: `When the golden connection-line became visible, Mordecai whispered a name. "Septima." Just that. As if he'd heard it once before — in a different context, a different life — and now finally understood what he'd heard. The collapse was deeper. More real.`,
      update: `When the line became visible, I saw something in Mordecai's eyes: no surprise. He already knew. Had perhaps always known. And had driven the Update forward anyway. That was worse than ignorance. That was a choice.`,
      default: ``,
    },
    text: `Celeste entered. Alone. Imperial brooch glowing.

Mordecai's eyes narrowed.

"Princess. You are under HOUSE ARREST—"

"I am under the CROWN'S protection."

The evidence. Emma's analyses. Veyra's material. Lilithia's peace offer.

Murmurs. Count Alderson read carefully.

And then — Kaito stepped forward. From behind the evidence table. [Code.Spoof] dropped. Level 27, Class: System Anomaly, NULL.

Mordecai's eyes fixed on him.

"...The boy from the Academy report."

"High Archbishop." Kaito looked at him across the table. "You've been running an investigation into [NULL] entities for ten years. You found exactly one. I'd like to show you what you're actually dealing with."

He opened the Terminal. Publicly. The display was visible to everyone in the room.

\`\`\`
> SYSTEM-UPDATE STATUS:
> Time remaining: [CLASSIFIED — Level 7+ required]
>
> Update purpose: Eliminate all pathways
> to System modification — PERMANENTLY
>
> Authorization: PRIMUS (via Secunda)
>
> Effect on human population:
> Every person with System-affinity:
> LOCKED IN CURRENT CONFIGURATION
> FOREVER
\`\`\`

Then: a golden connection-line appeared in the Aether above the room. From Mordecai — directly to Secunda's System-avatar. The line every Councilman could suddenly see.

The Throne Room went very quiet.`,
    choices: [
      { text: "A) \"The Council judges. I am not his judge.\" — Pass the weight on.",
        next: "a5k7_kross",
        flagEffect: { mordecaiSchicksal: "verhaftet" },
        alignEffect: { ordnung: 2 },
        affinityEffect: { celeste: 10 },
        narrativeFeedback: "Mordecai looks at him. Maybe waiting for rage. Kaito doesn't give him any. That's harder than rage. Mordecai knows that.",
      },
      { text: "B) \"He believed he was doing the right thing. That changes nothing — and everything.\"",
        next: "a5k7_kross",
        flagEffect: { mordecaiSchicksal: "barmherzig" },
        alignEffect: { licht: 2 },
        affinityEffect: { mordecai: 20 },
        narrativeFeedback: "Celeste looks at him — surprised, then thoughtful. The Council murmurs. Mordecai says nothing. But his hands, for the first time, open.",
      },
      { text: "C) \"He resigns. Quietly. Today. That's the offer — not the request.\"",
        next: "a5k7_kross",
        flagEffect: { mordecaiSchicksal: "politisch" },
        alignEffect: { schatten: 2, verborgenheit: 1 },
        narrativeFeedback: "Mordecai hears the difference. Between mercy and calculation. He stands. Slowly. Without dignity. But he stands.",
      },
      { text: "D) \"Mordecai.\" — Just his name. Then: \"Listen to me. Once. What Secunda really told you.\"",
        next: "a5k7_kross",
        requires: { flag: { mordecaiRedemptionMoeglich: "true" } },
        flagEffect: { mordecaiSchicksal: "redemption", mordecaiRiss: "true" },
        alignEffect: { licht: 2 },
        affinityEffect: { mordecai: 25 },
        narrativeFeedback: "The room goes still. Not because Kaito speaks loudly. Because no one expected this silence — this offer, to be heard. Mordecai sits. Like a man who has stopped fighting because he's understood what he was fighting against.",
      },
    ],
  },

  a5k7_kross: {
    act: "ACT V", chapter: "Chapter 37 — Boss.Kross()", title: "The Iron Fist",
    scene: "Kreuzweg — the battle",
    conditionalFlag: "borisVersprechen",
    textConditional: {
      true: `We rode into Kreuzweg and I saw it immediately: Boris's bakery. The light was on — in the middle of the night, while Purists surrounded the city. The light was on. He had waited. I had promised to come back. He had believed me.`,
      default: ``,
    },
    text: `General Kross ignored the Imperial order.

Veyra's emergency report: he'd mobilized three hundred Purists and was marching on Kreuzweg — where the Nulls had established a base, where Finn's guild operated, where Lilithia's courier route ran.

He wasn't coming for the System-Update. He was coming because in his world, anomalies got neutralized. It was clean thinking. Wrong, but clean.

We met him at the city gate.

Kross looked at the boy who had once been a name on Vex's report.

"You," he said.

"Me."

"You've been running for five years."

"I've been building for five years."

A pause.

"You know what I have to do," Kross said.

"Yes."

"And you're going to try to stop me."

"No," I said. "I'm going to show you what you're actually defending."

I opened the Terminal again.

And showed him Roland's curse file.

The authorization: *High Inquisitor Vex, by order of High Archbishop Mordecai. Reason: The soldier knew too much.*

Kross stared at the file for a long time.

"...Vex," he said finally.

"Was following Mordecai's orders. As were you, for twenty years. As were the three hundred men behind you." I waited. "The question is what you do now that you know."`,
    choices: [
      { text: "A) Remove Roland's curse now. Kross: \"Stand up. Fight FOR something.\"",
        next: "a5k7_roland_fluch",
        affinityEffect: { kross: 20, roland: 30 },
        flagEffect: { rolandFluchGebrochen: true, krossSchicksal: "redemption" },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Roland stands STRAIGHT. For the first time in twenty years. One tear. Then: \"Give me my sword.\" Kross has never been more correct about anything.",
      },
      { text: "B) Roland's curse after the fight. Kross: \"Roland has earned it.\"",
        next: "a5k7_roland_fluch",
        affinityEffect: { kross: 15 },
        flagEffect: { krossSchicksal: "berater" },
        narrativeFeedback: "Kross takes his sword. Goes. Roland watches until he disappears in the dark.",
      },
      { text: "C) Partial curse — Kross: \"Tertius needs someone who understands both sides.\"",
        next: "a5k8_prophet",
        affinityEffect: { kross: 10, tertius: 15 },
        flagEffect: { krossSchicksal: "berater" },
        narrativeFeedback: "\"A soldier... as a scholar.\" Kross laughs — briefly, dry. \"Maybe that's the penance.\"",
      },
    ],
  },

  a5k7_roland_fluch: {
    act: "ACT V", chapter: "Chapter 37 — Curse.Break()", title: "Level 34",
    scene: "Kreuzweg — after the fight",
    text: `Kross knelt in front of Roland.

That was the strangest thing Kaito had ever seen — General Kross, the Iron Fist, kneeling before a man who had been Level 34 his whole life.

"I gave the order," said Kross. "The curse. Twenty years ago." He looked at the ground. "You were a soldier who had seen too much and spoken too little. That was my mistake. Not yours."

Roland said nothing.

"I can undo it. If you want."

Silence. Long.

Roland looked at his hands. The hands that had swung a sword every morning for twenty years. Twenty years, Level 34, while everyone around him grew.

"Yes," he said finally. "I want that."

Kross placed his hand on Roland's shoulder. A brief glow — System-code being dissolved, a chain falling. Not dramatic. Just: *gone*.

Roland stood.

Looked at his hands.

"What does it feel like?" I asked.

He thought for a long time.

"Light," he said finally.

That was all. But it was the first time in twenty years that Roland had used that word.

The Terminal: \`ROLAND ASHFORD — CURSE: LIFTED. PROGRESSION: ACTIVE. CURRENT LEVEL: 34. POTENTIAL: UNLIMITED.\`

I showed it to him. He read it. Nodded once.

"Then I start again tomorrow."`,
    choices: [{ text: "→ The Void Prophet", next: "a5k8_prophet" }],
    flagEffect: { rolandFluchGebrochen: true },
    affinityEffect: { roland: 30, kross: 20 },
  },

  a5k8_prophet: {
    act: "ACT V", chapter: "Chapter 38 — Prophet.Contact()", title: "Martin Ashvale",
    scene: "The Ruins — half real, half Void",
    text: `The Void-Prophet contacted my VOID-TERMINAL. From *outside*.

"Hello, successor. Meet me. Alone."

The ruins: half in reality, half in the Void.

Under a torn cloak: a body that couldn't decide whether to exist. Skin between flesh and code. A triple voice.

"My name was Martin. Martin Ashvale. Five hundred years ago. I was a librarian."

"A librarian?"

"In the Academy Library. I was twenty-three. I found a gap in the System's architecture — a place where the code could be read differently. I wanted to improve it." A long pause. "Primus found me first."

I looked at what Martin Ashvale had become in five hundred years of involuntary Void-exposure.

"I can rewrite the System," I said. "The way you wanted to but couldn't."

All three voices, for the first time in alignment: "...You."

"Me."

"You're like me."

"I'm what you would have been," I said. "If you'd had time and the right tools."

A very long silence.

"Why should I believe you?"

"Because if I wanted to destroy the System, I'd have done it already. I have everything I need. I'm choosing not to."

The triple voice went quiet.

"What do you want from me?"

"Your coordinates. The Void-pathways you've mapped. The access points that don't appear in any System-record."

"And in exchange?"

"An end to five hundred years. However you want that to end."`,
    choices: [
      { text: "A) \"There's a THIRD path, Martin — REWRITING.\"",
        next: "a5k9_convergence",
        alignEffect: { licht: 2 },
        flagEffect: { prophetErgebnis: "heilung_moeglich" },
        narrativeFeedback: "All three voices, for the first time in unison: \"Rewriting...\" He hopes. And hope, for him, is the most terrifying feeling in the world.",
      },
      { text: "B) \"You're not my enemy. You're my PREDECESSOR.\"",
        next: "a5k9_convergence",
        alignEffect: { licht: 1 },
        flagEffect: { prophetErgebnis: "heilung_moeglich" },
        narrativeFeedback: "\"I was ALSO that certain.\" Bitterness. Then: \"Take care of yourself, successor.\" He dissolves. Goes forward, not back.",
      },
      { text: "C) \"If you're in my way, I'll HEAL you.\"",
        next: "a5k9_convergence",
        alignEffect: { licht: 2 },
        flagEffect: { prophetErgebnis: "heilung_moeglich" },
        narrativeFeedback: "\"Heal? ME?\" He flickers — not from rage, from SHOCK. Disappears. Hope is the most frightening thing there is.",
      },
      { text: "D) FIGHT — The Prophet leaves no other choice.",
        next: "a5k8_prophet_kampf",
        alignEffect: { schatten: 3, chaos: 2 },
        flagEffect: { prophetErgebnis: "besiegt_befreit" },
        narrativeFeedback: "He doesn't fight you — he fights himself. When the code is stabilized: a young man on the floor. Five hundred years of pain. Done.",
      },
    ],
  },

  a5k8_prophet_kampf: {
    act: "ACT V", chapter: "Chapter 38 — Prophet.Fight()", title: "500 Years",
    scene: "The Ruins — half real, half Void",
    text: `He didn't attack me.

That was the first thing I understood.

Martin Ashvale — what was left of him after five hundred years of Void-exposure — didn't attack *me*. He attacked the System. Always. Every movement, every Void-discharge, every flickering manifestation of his body between flesh and code: an assault on the construct that had made him this.

I was in the way.

That was the problem.

He couldn't see me. He saw the System. And the System was everywhere — in me too, in the air between us, in the ground.

"Martin."

No response. The triple voice, dissonant.

"MARTIN ASHVALE."

A flicker. The librarian's face — young, confused, five hundred years old and for a moment twenty again — surfaced through the Void-body.

That was my window.

[Code.Modify] on his Void-connection. Not breaking it — *stabilizing* it. The code that was pulling him apart, trying to hold it together. Like trying to hold water in your hands.

He screamed. Not from pain — from relief. As if someone had interrupted the pain for the first time in five hundred years.

Three minutes. I held it for three minutes.

Then: a young man on the floor. Exhausted. Real.

My left arm shook. The Terminal: \`[Code.Modify] OVERLOADED. RECOVERY TIME: 72 HOURS.\`

I knelt beside him. 

"Martin."

He opened his eyes.

"Is it over?"

"No," I said honestly. "But you're here."

That was enough for him. He closed his eyes again. Slept — really slept, for the first time in centuries.`,
    choices: [{ text: "→ Convergence", next: "a5k9_convergence" }],
  },

  a5k9_convergence: {
    act: "ACT V", chapter: "Chapter 39 — Convergence()", title: "Yuki's Idea",
    scene: "Forbidden Tower — the great meeting",
    conditionalFlag: "varkosErgebnis",
    textConditional: {
      frieden_erklaerung: `Lilithia entered the room. The first daemon in a human war-council. Nobody spoke. She placed Varkos's signed peace offer on the table. "He signed it," she said. "For his daughter." Everyone looked at Sera. Sera looked at the table.`,
      prophet_info: `I had the Void-Prophet's coordinates. I shared nothing yet — but while the others planned, a second plan was forming in my head. One that had no name yet.`,
      default: ``,
    },
    text: `Three months. All pieces on the table.

Everyone assembled. Nulls, Heroes, allies.

The key question: what do you WRITE?

Aria: "The world without System — then everyone who depends on skills dies."

Gorrick: "Who writes the new rules? That would be a new dictatorship."

And then — Yuki. Quiet, but clear:

"What if the System... ASKED? Instead of ORDERING? If it gave people OPTIONS instead of DICTATES?"

Silence. Kaito looked up.

"An asking System. 'Do you want a level?' 'Do you want a class?' 'Do you want to be free?' No compulsion. CHOICE."

Kaito — slowly, as if a program were compiling:

"An optional System. Not abolished — *voluntary*. Levels as TOOLS, not IDENTITY. Classes as OFFER, not DESTINY."

Tertius, whispering: "...No one has ever proposed that."

"Because no one has ever understood the System from the inside AND learned to feel from the outside. I am a programmer who learned to love. That's the only qualification that matters."

He reached for the pen. And began to WRITE.`,
    choices: [
      { text: "→ The last evening begins",
        next: "a5k10_abschied",
        affinityEffect: { veyra: 20, gorrick: 10, ren: 10 },
        narrativeFeedback: "Veyra says something — quietly, to no one in particular, but Kaito hears it: her real name. Not the mask. The name she'd stopped using fifteen years ago. He says nothing. But he doesn't forget it.",
      },
    ],
  },

  a5k10_abschied: {
    act: "ACT V", chapter: "Chapter 40 — Launch.Sequence()", title: "The Last Evening",
    scene: "Forbidden Tower — the night before the endgame",
    conditionalFlag: "ariaZugang",
    textConditional: {
      familie: `Aria was humming. Elena's melody — without knowing it, without explanation, while Rex's fire burned blue. Kaito froze. The melody had an origin. Older than Aria. Older than anything he understood.`,
      default: ``,
    },
    text: `Fire.

Rex had drawn a blue fire circle in the middle of the camp — not an attack, just light, warm and dragonish. Everyone sat around it. Kaito counted.

Gorrick. Ren. Veyra. Aria. Roland. Elena. Finn. Sera. Mira — who had somehow managed to be here, as she always somehow managed.

Eleven people and a dragon.

Gorrick raised his beer. "If the world ends tomorrow — at least with the best beer from Kreuzweg!"

Aria: "The world isn't ending. It's being renewed."

Ren — more solid than ever before, barely flickering, with eyes that were more alive every day: "If the System falls... will I really exist? Properly? Without flickering?"

"Yes, Ren."

He looked at his hand. The hand of a boy who was three hundred years old and had never really been young. "I never knew how that feels. To really exist."

"You'll learn."

"Yes." He closed his hand. "I will."`,
    text2: `Veyra sat apart. Not far — but characteristically for her, at the edge, where she could see everyone without being in the middle of anything.

Kaito sat next to her.

"You said your real name today," he said.

"Did I?"

"Yes. During the planning. Very quietly. You didn't notice."

Veyra was silent. Looked at the fire. Then: "Do you say it?"

"No."

She nodded. Once. That was a thank-you.

Finn was already asleep. The grin was there even in sleep — the wide, indestructible one. Roland sat next to him, one large hand loose on Finn's shoulder. The warrior and the knight. Almost like father and son, if you didn't know.

Elena sang quietly. Not for anyone — for the evening. For the fire.

Mira slept with her head on Rex's flank, which rose and fell with every breath of the dragon.

Kaito watched.

He noticed he wasn't analyzing. Wasn't counting. Wasn't opening the Terminal.

He just watched.

That was, he thought, the rarest thing that had ever happened to him.`,
    choices: [
      { text: "A) This night belongs to Sera.",
        next: "a5k10_nacht_sera",
        requires: { affinity: { sera: 40 } },
        affinityEffect: { sera: 20 },
        flagEffect: { finaleBeziehung: "sera" },
        narrativeFeedback: "They sit on the rock — their rock. No words first. Then Sera throws a stone. It lands far. \"Still better than you.\" — \"Yes.\" A pause. \"Kaito.\" — \"Yes.\" — \"Come back.\" Not as a plea. As a fact she's establishing.",
      },
      { text: "B) This night belongs to Yuki.",
        next: "a5k10_nacht_yuki",
        requires: { affinity: { yuki: 40 } },
        affinityEffect: { yuki: 20 },
        flagEffect: { finaleBeziehung: "yuki" },
        narrativeFeedback: "They sit under the stars, Yuki without a countdown above her head for the first time in years. She holds the rabbit charm. Kaito holds the other side. Nobody says anything. That's enough.",
      },
      { text: "C) This night belongs to family.",
        next: "a5k10_nacht_familie",
        affinityEffect: { elena: 15, roland: 15, mira: 15 },
        flagEffect: { finaleBeziehung: "familie" },
        narrativeFeedback: "Elena sings the lullaby. Roland says nothing. Mira is already asleep. Kaito sits between his parents like at four years old and thinks: this is the reason. Not the System. This.",
      },
      { text: "D) This night is for the Nulls — all of them together.",
        next: "a5k10_nacht_nullen",
        affinityEffect: { gorrick: 15, ren: 15, veyra: 15, rex: 10, aria: 10 },
        flagEffect: { finaleBeziehung: "familie" },
        narrativeFeedback: "Gorrick tells the story of the first time he wrote a rune wrong — thirty years of his best work, ruined. Everyone laughs. Rex accidentally puffs blue fire. Ren smiles with the face of someone experiencing laughter as a physical sensation for the first time.",
      },
      { text: "E) This night belongs to you alone.",
        next: "a5k10_nacht_allein",
        alignEffect: { verborgenheit: 2 },
        flagEffect: { finaleBeziehung: "allein" },
        narrativeFeedback: "The roof. Alone. The Terminal shows: 1 day, 4 hours, 22 minutes. He closes it. Opens Gregor's journal instead. Page 47. One last time. He's ready.",
      },
    ],
  },

  a5k10_nacht_sera: {
    act: "ACT V", chapter: "Chapter 40 — The Last Night", title: "Sera",
    scene: "The rock — the river, Millheim",
    text: `The rock was still there.

Of course it was still there. Stones don't leave. But it looked smaller than he remembered — or he was larger, which meant the same thing.

Sera was already sitting there when he arrived. That didn't surprise him.

No words first. That was Sera's way. She sat and watched the water and let the silence work until it was finished.

Then she threw a stone.

It landed far — farther than he'd ever manage.

"Still better than you."

"Yes."

He sat beside her. The water moved. Somewhere a bird called.

"Kaito."

"Yes."

"If tomorrow goes wrong—"

"It won't go wrong."

"If it goes wrong," she said, without interruption, "I want you to know: this rock. This night. That was enough."

He didn't understand immediately what she meant.

Then he did.

She meant: *you are enough. This is enough. Even if tomorrow is the end.*

He threw a stone. It landed considerably shorter than hers.

"You'll learn," said Sera.

"No, I won't."

She laughed — real, brief, the laugh she only had when she thought no one was watching.

They stayed until the stars moved.`,
    choices: [{ text: "→ Departure", next: "a5k10_aufbruch" }],
  },

  a5k10_nacht_yuki: {
    act: "ACT V", chapter: "Chapter 40 — The Last Night", title: "Yuki",
    scene: "Forbidden Tower — roof",
    text: `No countdown.

That was the first thing you noticed when you stood next to Yuki now — the absence. For three years that timer had hung above her like a blade. Now: air. Clear sky.

She noticed him looking at the spot where it had been.

"Strange," she said. "I almost miss it. The countdown."

"Really?"

"It told me how much time I had. Now I don't know anymore." She looked at the stars. "Just like everyone else."

He gave her the rabbit charm back.

She took it. Looked at it. Then placed it in his hand.

"Hold it one more day."

"Until tomorrow?"

"Until tomorrow."

They sat on the roof and the night was warm in a way that didn't fit the season. Yuki had pulled her knees to her chest like someone who wants to be very small to see if the world finds them anyway.

The world finds Yuki. Always, I think.

"Thank you," she said sometime. No specification. No context.

I knew what for anyway.

"Gladly."`,
    choices: [{ text: "→ Departure", next: "a5k10_aufbruch" }],
  },

  a5k10_nacht_familie: {
    act: "ACT V", chapter: "Chapter 40 — The Last Night", title: "Family",
    scene: "Camp of the Allies",
    text: `Elena sang.

Not for anyone — for the night. For the fire. For the habit that had settled into her over twenty years like roots in stone.

I sat between her and Roland.

Not as a leader. Not as the person who would rewrite the System tomorrow.

Like a child between his parents.

That was, I realized, what I needed.

Roland said nothing. He was the type who didn't need words when he meant what he meant. He placed his hand on my shoulder once — once, two seconds, then back.

That was, for Roland, a speech.

Elena stopped singing. Looked at me. Placed her hand on my cheek the way she had when I was a baby and couldn't sleep.

"You have Gregor's eyes," she said. "Not in how they look. In how they see."

Mira was already asleep with her head on Rex's flank.

I looked at my family.

Gregor was gone. But he was somehow there — in the way we talked and didn't talk to each other, in the stories Elena sometimes told, in the journal in my pocket.

Some people don't stop being present just because they die.`,
    choices: [{ text: "→ Departure", next: "a5k10_aufbruch" }],
  },

  a5k10_nacht_nullen: {
    act: "ACT V", chapter: "Chapter 40 — The Last Night", title: "The Nulls",
    scene: "Forbidden Tower — basement, Gorrick's Forge",
    text: `Gorrick told the story of the first time he'd written a rune wrong.

Thirty years of his best work. One wrong rune and the sword had shattered on the first test-strike and thrown Gorrick across the forge.

He told it with the joy of a man who has learned to treat catastrophes as anecdotes.

Everyone laughed.

Rex accidentally puffed blue fire — not intentionally, just because he was laughing and dragons sometimes breathe fire when they laugh.

Ren sat more solidly than I'd ever seen him. Almost completely real. He didn't laugh loudly — he hadn't yet learned how to laugh loudly — but he smiled with the face of someone experiencing laughter as a physical sensation for the first time.

Veyra had stopped controlling her face.

That was the rarest thing. Veyra without a mask was someone who was surprisingly often happy about small things — a good phrasing, an unexpected argument, Gorrick's timing when he told stories.

Aria hummed the melody.

I sat there and thought: this is what I'm protecting.

Not the System. Not the world.

This.`,
    choices: [{ text: "→ Departure", next: "a5k10_aufbruch" }],
  },

  a5k10_nacht_allein: {
    act: "ACT V", chapter: "Chapter 40 — The Last Night", title: "Alone",
    scene: "Forbidden Tower — roof",
    text: `The roof.

Silence. Two moons. One Terminal.

I opened Gregor's journal. Page 47. One last time. I'd read it so often I could read it without light.

*The Seventh waits for the one who can read what no System can read.*

I'd read that and waited for it to feel like a fulfillment.

It felt like a sentence in a book.

That was okay. Some things mean more than they feel.

The Terminal opened. I hadn't opened it.

\`\`\`
> Automatic message
> Delivery time: when you need it
>
> From: S.
>
> Tomorrow will be hard.
> You know that.
>
> I'm telling you anyway:
> You are not alone.
> You never were.
>
> Even now.
> Even here.
\`\`\`

I read the message twice.

Then I closed the Terminal, the journal, and watched the moons until the night became brighter.`,
    choices: [{ text: "→ Departure", next: "a5k10_aufbruch" }],
  },

  a5k10_aufbruch: {
    act: "ACT V", chapter: "Chapter 40 — Launch.Sequence()", title: "\"Then go.\"",
    scene: "Irondeep Labyrinth entrance — last light of the moon, then dawn",
    text: `Last moonlight. Then dawn.

Kaito stood at the Irondeep Labyrinth entrance. For the third and last time. Behind him: Ren. Rex. Roland. Sera. Finn.

At the surface: the distraction had begun. Akira stepped before the public. Celeste released all the evidence. Lilithia declared the ceasefire.

The Terminal: \`COUNTDOWN: 14 DAYS.\`

He was eighteen. He had lived two lives. He had lost a family and found a new one. He had watched Gregor die and read Aldwin's letter three times and watched Sera during her first fire-control training and thought: that's strength.

He opened the Terminal.

Wrote a single line into it. Not a function, not an analysis. Just:

\`FOR WHOM. NOT AGAINST WHAT.\`

Gregor's words. The only ones that counted.

Then he descended.`,
    choices: [{ text: "→ Act VI: System.Exit()", next: "a6k1_intro" }],
  },

};
