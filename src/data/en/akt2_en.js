// AKT II — English Translation
// ~9,200 words / 46 min read
// Voice notes:
//   Kaito: dry, analytical interior monologue. Never melodramatic. Dark humor is his armor.
//   Elena: warm but never saccharine. Old-fashioned cadence. Calls him "sweetheart" exactly once and it destroys.
//   Roland: fewest words, most weight. Soldier's economy.
//   Finn: always slightly too loud, always exactly right.
//   Sera: speaks last, means most. Fire in every sentence.
//   Gregor: storyteller's pauses. Every silence is intentional.
//   Terminal boxes: keep code aesthetic. English is native to code.

export const AKT_II_EN = {

  a2k1_gruppe: {
    act: "ACT II", chapter: "Chapter 5 — Compile.Childhood()", title: "The Three from the River",
    scene: "Millheim — the following months",
    text: `In the months that followed, something formed that I'd never had in my old life: a group.

Finn, Sera, and me. We weren't officially friends — that label implied a social contract none of us had signed. But we were there. Consistently. At the rock by the river. At Gregor's Tuesday evenings, where Finn now came along and Sera sometimes stayed in the doorway, never quite entering, never quite leaving.

Finn talked for three. Sera said what mattered, when it mattered. I analyzed.

It worked, somehow.

The Terminal registered it: \`SOCIAL CLUSTER DETECTED. SIZE: 3. CLASSIFICATION: [UNABLE TO CATEGORIZE — RELATIONSHIP TYPE: UNCLEAR]\`

That seemed about right.`,
    choices: [{ text: "→ Morning routine", next: "a2k1_morgenroutine" }],
  },

  a2k1_morgenroutine: {
    act: "ACT II", chapter: "Chapter 5 — Compile.Childhood()", title: "Morning Routine",
    scene: "Millheim — Age: 4 years",
    text: `Four years old. The age at which children discover that the world has rules.

I discovered it had code.

Morning in Millheim had a texture to it — smoke from the bakery, the sound of Boris hammering before sunrise, mud in specific places at specific times of year. I had it catalogued. I catalogued everything.

My Terminal had updated overnight:

\`\`\`
> [Code.Read] — EXPANDED
> New range: 45 meters
> New depth: System layer 2 accessible
>
> NOTE: Carrier development is non-standard.
> Projected adult capability: [CALCULATING]
> ETA to projection: 14 years
>
> Recommendation: Stay low-profile.
> Carrier's current low-profile score: 2/10
\`\`\`

The Terminal had opinions about my social skills.

It was not wrong.`,
    choices: [{ text: "→ Finn", next: "a2k1_finn" }],
  },

  a2k1_finn: {
    act: "ACT II", chapter: "Chapter 5 — Compile.Childhood()", title: "Best Friend",
    scene: "Village square, Millheim",
    conditionalFlag: "finnErstbegegnung",
    textConditional: {
      taktisch: `"You explained how goblins fight — the very first time," Finn said one day, completely unprompted. "You had a stick and you showed me." He grinned. "I thought: this kid is either very smart or very strange." Pause. "Both, I think."`,
      korrigieren: `There was a moment, shortly after we met, when Finn held his stick exactly the way I'd shown him. Perfect. I said nothing. He just did it. Because someone had shown him how.`,
      default: ``,
    },
    text: `Finn Harker was four years old, loud, and absolutely convinced that goblins existed in the forest behind the mill.

He was wrong about the goblins. (The forest behind the mill had a family of foxes, two species of poisonous mushroom, and a forgotten System-node that had been cataloguing local wildlife for three hundred years. No goblins.)

He was the first child in Millheim who didn't look at me like I was strange.

He just looked at me like I was interesting.

"Do you want to fight goblins?" he asked. He had a stick.

I considered the question with the seriousness it deserved.

"Goblins attack from the left side," I said. "Their right side. You're holding the stick wrong."

Finn looked at the stick. Looked at me. Adjusted his grip.

"Better," I said.

That was how we became friends.`,
    choices: [
      { text: "A) \"Okay.\" You grab a stick and play along.",
        next: "a2k1_finn_konvergenz",
        flagEffect: { finnErstbegegnung: "taktisch" },
        affinityEffect: { finn: 15 },
        narrativeFeedback: "Finn beams. He stumbles, falls, gets up — grinning the whole time like it's not physically possible to stop.",
      },
      { text: "B) \"You're holding the stick wrong.\" You correct his grip.",
        next: "a2k1_finn_konvergenz",
        flagEffect: { finnErstbegegnung: "korrigieren" },
        affinityEffect: { finn: 10, roland: 5 },
        narrativeFeedback: "Finn stops. Looks at the stick. \"...You're right.\" He corrects it. And does it better.",
      },
      { text: "C) \"Goblins don't attack from the front. You have to cover the flank.\"",
        next: "a2k1_finn_konvergenz",
        flagEffect: { finnErstbegegnung: "taktisch" },
        affinityEffect: { finn: 20 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Finn's eyes light up. \"That's TACTICS!\" Roland, who was listening, nods once. The highest praise.",
      },
    ],
  },

  a2k1_finn_konvergenz: {
    act: "ACT II", chapter: "Chapter 5 — Compile.Childhood()", title: "Best Friend Forever",
    scene: "Millheim — the following months",
    conditionalFlag: "finnErstbegegnung",
    textConditional: {
      taktisch: `"You explained how goblins fight at the very first meeting. With a stick. You demonstrated." He grinned. "I thought: this kid is either very smart or very strange." Pause. "Both, I think."`,
      korrigieren: `There was a moment when Finn held his stick exactly the way I'd shown him. Perfect form. I'd said nothing. He just did it. Because someone had shown him how.`,
      default: ``,
    },
    text: `The two boys spent the afternoon together. Finn talked enough for three people and fought enough imaginary goblins for a small army.

I mostly listened, analyzed, and occasionally corrected his grip.

By the end of the afternoon, Finn had decided we were best friends. He announced this to Elena when she came to collect me for dinner.

"We're best friends now," he said, with the complete certainty of a four-year-old.

Elena looked at me.

I considered denying it.

"Yes," I said instead.

Finn looked like he'd won something important. He had, probably.

I filed him under: *relevant variable. Possibly critical. Handle carefully.*

Years later, I'd realize that was the closest I'd ever come to writing: *important person. Don't lose.*`,
    choices: [{ text: "→ Sera", next: "a2k1_sera" }],
  },

  a2k1_sera: {
    act: "ACT II", chapter: "Chapter 5 — Compile.Childhood()", title: "The Girl on the Rock",
    scene: "River, edge of Millheim",
    text: `Sera Blackwood sat on a rock by the river.

She sat there every afternoon. Alone. Knees pulled to her chest, watching the water, not in the way children watch water — with the focused stillness of someone waiting for something to make sense.

She didn't have friends. This wasn't because the other children were cruel to her — they mostly just avoided her, the way you avoid something you can't categorize.

I could categorize her.

[Code.Read]:

*Sera Blackwood. Level —. Class: —. System affinity: ACTIVE (Wild Magic — Fire). Status: [SUPPRESSED].*

Wild Magic. Active, but suppressed — which meant she knew it was there, and she was fighting it. Alone. With no one having told her what it was, why it was there, or that it wasn't a flaw.

She was seven years old and she was fighting her own nature by herself.

I sat down on the rock next to her.

She didn't tell me to leave.`,
    choices: [
      { text: "A) Go to her alone. Quiet, direct.",
        next: "a2k1_sera_begegnung",
        flagEffect: { seraErstbegegnung: "allein" },
        affinityEffect: { sera: 15 },
        narrativeFeedback: "Sera watches him approach. No greeting. But she doesn't leave. At Sera, that's an invitation.",
      },
      { text: "B) Bring Finn along.",
        next: "a2k1_sera_begegnung",
        flagEffect: { seraErstbegegnung: "allein" },
        affinityEffect: { sera: 5, finn: 5 },
        narrativeFeedback: "Sera sees Finn coming and crosses her arms. But when Finn shouts \"Hello!\" like a small cannon, something in her relaxes, just slightly.",
      },
      { text: "C) Bring her a piece of Elena's bread.",
        next: "a2k1_sera_begegnung",
        flagEffect: { seraErstbegegnung: "brot" },
        affinityEffect: { sera: 20, elena: 5 },
        narrativeFeedback: "Sera looks at the bread. Looks at him. Takes it. Says nothing. But she eats slowly — like someone making sure it's real.",
      },
    ],
  },

  a2k1_sera_begegnung: {
    act: "ACT II", chapter: "Chapter 5 — Compile.Childhood()", title: "The First Meeting",
    scene: "The rock by the river",
    conditionalFlag: "seraErstbegegnung",
    textConditional: {
      brot: `I'd brought her bread. No explanation. She'd looked at the bread, then at me, then eaten it slowly — as if she had to convince herself it was real. Later she'd never tell me what she'd thought in that moment. I'd know anyway.`,
      allein: `I'd gone to her alone. No Finn, no distraction. She'd seen me coming and hadn't run. At Sera, that was an invitation. I treated it as one.`,
      default: ``,
    },
    text: `"You're looking at me differently," Sera said, without looking at me.

I had been, apparently, obvious.

"I'm analyzing," I said. No point in lying.

"What do you see?"

I could have said: *Wild Magic, fire affinity, active and suppressed, frightening and beautiful and completely untrained.* I could have said: *the System doesn't know what to do with you, which means you're more interesting than anything the System has categorized.*

I said: "Strength."

Sera finally looked at me.

It was the first time she'd really looked at anyone in months.

"That's a strange thing to say."

"You're a strange thing to be," I said. "In the good way."

She was quiet for a long time. The river moved. A bird called somewhere in the reed.

"I set fire to my mother's kitchen," she said finally. "Three weeks ago. I didn't mean to."

"I know."

"How do you know?"

"Because if you'd meant to, you would have aimed better."

Sera stared at me. Then, very quietly, she laughed. One short sound, immediately suppressed, like she'd forgotten she was allowed.

I filed her under: *critical. Handle with honesty, not comfort.*

Years later she'd tell me that was the day she decided I was someone she could trust. Not because I'd been kind. Because I'd been accurate.`,
    choices: [{ text: "→ Gregor's stories", next: "a2k1_gregor_geschichten" }],
  },

  a2k1_gregor_geschichten: {
    act: "ACT II", chapter: "Chapter 5 — Compile.Childhood()", title: "The Stories Continue",
    scene: "Gregor's house — Tuesday evenings",
    conditionalFlag: "gregorWeissAlles",
    textConditional: {
      true: `"I knew," said Gregor, before Kaito could open the door. "Since the evening you told me everything. About the other world. About the System. About her." He tapped the journal. "Page 47. Read it first. Before anything else."`,
      default: ``,
    },
    text: `Gregor's Tuesday evenings continued.

They changed, gradually, as I grew older. What had begun as stories told to a baby became something else — a mutual conversation that neither of us named, because naming it would have meant acknowledging what it was.

He was teaching me to read between the lines of history.

I was teaching him that someone was listening.

"The old histories," Gregor said one evening, "record everything that happened. The good histories record why." He looked at me. "What's the difference?"

"One is a ledger. The other is a reason."

Gregor set down his cup. Looked at me with the expression he had when something confirmed a theory he'd been working on for years.

"Yes," he said. "Exactly that."

Elena, from the other room: "Are you two being philosophical again?"

Gregor: "We are always being philosophical."

Elena: "Then I'm having a second cup of tea."`,
    choices: [
      { text: "A) Ask Gregor privately later: \"The seventh star in your story — what does it mean?\"",
        next: "a2k2_rolands_training",
        affinityEffect: { gregor: 15 },
        flagEffect: { gregorGespraech: "septima" },
        narrativeFeedback: "Gregor looks out the window for a long time. \"The seventh star... yes. I remember that story.\" He says nothing more. But he remembers.",
      },
      { text: "B) Listen without asking. Some answers are earned, not requested.",
        next: "a2k2_rolands_training",
        affinityEffect: { gregor: 10 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Gregor notices. He always notices. He looks at Kaito with something like respect. \"You have patience,\" he says. \"That's rarer than cleverness.\"",
      },
      { text: "C) Tell Gregor everything. The other world. The Terminal. Septima.",
        next: "a2k2_rolands_training",
        affinityEffect: { gregor: 20, elena: 5 },
        flagEffect: { gregorWeissAlles: true },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Gregor listens. Everything. Without interruption. When Kaito finishes, he nods slowly. \"I knew,\" he says. \"Not all of it. But enough.\" He doesn't seem surprised. That's the most surprising thing.",
      },
    ],
  },

  a2k2_rolands_training: {
    act: "ACT II", chapter: "Chapter 6 — Runtime.Training()", title: "Roland's Training",
    scene: "Ashford yard — dawn",
    conditionalFlag: "rolandGeheimnis",
    textConditional: {
      direkt: `Roland swung the sword. Once. Twice. On the third stroke he stopped and looked at his son — not the child he was training. The man who had called him by his real name. "You know more than you should," said Roland. "That doesn't make me angry." Pause. "It makes me afraid."`,
      verschwiegen: `Roland trained easily. No hesitation, no testing. He believed his secret was safe — and that gave him something back he hadn't felt in years. Peace. Borrowed, but real.`,
      default: ``,
    },
    text: `Roland trained every morning before sunrise. I had known this since infancy. Now, at five years old, he started taking me with him.

Not to train me. To show me something he couldn't say in words.

He ran through forms in the predawn dark, his breath visible in the cold air. Level 34, Class: Warrior, System-cursed since before I was born. His technique was flawless — the kind of flawless that comes from ten thousand repetitions, from muscle memory deeper than the System's reach.

And every morning, after the forms, he sat down by the fence and looked at nothing for exactly seven minutes.

I sat with him. Said nothing.

After three weeks of this, Roland spoke.

"Your grandfather was a soldier," he said. "His grandfather was a soldier. In this family, we learn to carry things quietly."

He looked at me.

"That's not a good lesson," he said. "But it's the one I know how to teach."

He stood up, picked up his sword, and went inside.

I stayed by the fence and thought about what it meant to be taught the wrong lesson by the right person.`,
    choices: [
      { text: "A) \"I'll get stronger. So you don't have to carry it alone.\"",
        next: "a2k2_aldwin_unterricht",
        affinityEffect: { roland: 20 },
        alignEffect: { licht: 2 },
        flagEffect: { rolandGeheimnis: "direkt" },
        narrativeFeedback: "Roland stops. Looks at his son — really looks. \"...That's not your job.\" But he says it quietly. Almost like a question.",
      },
      { text: "B) Say nothing. Sit with him until he's ready to go in.",
        next: "a2k2_aldwin_unterricht",
        affinityEffect: { roland: 15, elena: 5 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Roland's sword-grip loosens. A long moment. Then he turns back, for just a second, and his shoulders — always tense — ease slightly.",
      },
      { text: "C) \"It's okay. You don't have to tell me.\"",
        next: "a2k2_aldwin_unterricht",
        affinityEffect: { roland: 10 },
        flagEffect: { rolandGeheimnis: "verschwiegen" },
        narrativeFeedback: "Roland turns away. But his grip on the sword loosens. A long moment. Then he turns back and walks inside. He trusts the silence is safe.",
      },
    ],
  },

  a2k2_aldwin_unterricht: {
    act: "ACT II", chapter: "Chapter 6 — Runtime.Training()", title: "The Wandering Merchant",
    scene: "Millheim — the Ashford house, evening",
    text: `The wandering merchant came back.

He always came back. But this time he stayed longer. He started appearing on Thursday evenings, at Elena's table, eating her food and asking me questions while she was in the other room.

The friendly face, the warm laugh, the perfectly calibrated normalcy — all of it designed, I now understood, to be exactly as memorable as it needed to be and no more.

Level 89. Rang S. Concealed class.

"You've been reading the System," he said, without preamble.

"You've been watching me read the System," I said.

A slight pause. The first genuine expression I'd seen on his face in two years of Tuesday dinners.

"Aldwin," he said. Not the merchant's name. The real one. "My name is Aldwin. I'm older than I look, and I've been in this village longer than you know, and I have been trying to decide what to do about you for approximately three years."

"And?"

"And," he said, "I've decided to teach you."

He set a candle on the table. Unlit.

"Light it. Without the System."`,
    choices: [
      { text: "A) Try immediately. Focus, reach for something beneath the System.",
        next: "a2k2_wilde_magie",
        affinityEffect: { aldwin: 10 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "A warmth in the chest. Not System magic — something older. The candle flickers. One flame, small, wrong color. Real.",
      },
      { text: "B) \"Why? What's the difference between System magic and wild magic?\"",
        next: "a2k2_wilde_magie",
        affinityEffect: { aldwin: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Aldwin smiles — the real smile, not the merchant one. \"Finally. Someone who asks why before they try.\" He explains for an hour. It's the best hour of Kaito's life so far.",
      },
      { text: "C) \"You've been here three years watching me. That means Septima sent you.\"",
        next: "a2k2_wilde_magie",
        affinityEffect: { aldwin: 20 },
        flagEffect: { aldwinGeflohen: true },
        narrativeFeedback: "Aldwin goes very still. A long silence. \"...You're going to be a problem,\" he says finally. \"In the best possible way.\"",
      },
    ],
  },

  a2k2_wilde_magie: {
    act: "ACT II", chapter: "Chapter 6 — Runtime.Training()", title: "Wild Magic",
    scene: "Ashford house — three months of lessons",
    text: `Wild Magic was not the System's magic.

The System's magic was clean. Categorized. You had a skill, you used it, the System measured the output, logged the experience, adjusted your level, and moved on. Predictable. Efficient. Like compiled code running on approved hardware.

Wild Magic was like writing directly to the metal.

Faster. More dangerous. No safety checks.

Aldwin taught me to read the Aether — not the System's interpretation of it, but the raw substance beneath. The way the world breathed before the System was built to organize its breathing.

It took three months before I lit the candle.

Aldwin watched the flame.

"Correct color," he said. "Wrong temperature. You're pushing too hard with the left side of your technique."

"My technique is two months old."

"Yes," he said. "That's why I said 'wrong temperature' instead of 'terrible.'"

The candle stayed lit for four seconds. Then went out.

I lit it again.

This time it lasted eleven.`,
    choices: [{ text: "→ Roland's secret", next: "a2k2_roland_reaktion_a" }],
    affinityEffect: { aldwin: 10 },
  },

  a2k2_roland_reaktion_a: {
    act: "ACT II", chapter: "Chapter 6 — Runtime.Training()", title: "Roland's Secret",
    scene: "Ashford yard — morning",
    text: `I scanned Roland's curse properly for the first time at age six.

Not the surface read I'd done as an infant — a full [Code.Read], layer three, the kind Aldwin had spent two months teaching me to do without triggering System detection.

[Code.Read] — ROLAND ASHFORD:

\`\`\`
> Class: Warrior
> Level: 34 [LOCKED — System Authority: Imperial Church]
>
> Curse: BROKEN BLADE PROTOCOL
> Applied by: High Inquisitor Vex, Order of the Seventh Gate
> Applied: 18 years ago
> Reason: [CLASSIFIED — Level 7 Clearance Required]
>
> Effect: Level progression: SUSPENDED
>         Combat potential: CAPPED at 34
>         Duration: PERMANENT (until death or dissolution)
\`\`\`

Eighteen years.

Roland had been level 34 for eighteen years. He trained every single morning — perfect technique, tireless repetition — and every morning the System ignored it. Wrote nothing down. Changed nothing.

I closed the Terminal and looked at my father, who was running sword forms in the early light and would never know I'd just read the name of the man who had done this to him.

Vex.

High Inquisitor Vex, Order of the Seventh Gate.

I filed that name somewhere very specific. Very permanent.`,
    choices: [
      { text: "A) Don't mention it. Carry this alone for now.",
        next: "a2k3_sera_feuer",
        alignEffect: { schatten: 2, verborgenheit: 1 },
        flagEffect: { rolandGeheimnis: "verschwiegen" },
        narrativeFeedback: "Roland keeps training. He doesn't know his son now knows his name. The weight of that is strange. Not wrong. Just heavy.",
      },
      { text: "B) Tell Roland directly — calmly, with facts.",
        next: "a2k3_sera_feuer",
        affinityEffect: { roland: 25 },
        alignEffect: { licht: 2 },
        flagEffect: { rolandGeheimnis: "direkt" },
        narrativeFeedback: "Roland's sword stops mid-arc. He doesn't turn around for a long time. When he does, his face is unreadable. \"Thank you for telling me,\" he says. That's all. But his grip is different now. Like he's decided something.",
      },
    ],
  },

  a2k3_sera_feuer: {
    act: "ACT II", chapter: "Chapter 7 — Debug.Life()", title: "Sera's Fire",
    scene: "Forest clearing, behind Millheim — afternoon",
    text: `The fire happened on a Tuesday.

Not Gregor's Tuesday. Sera's Tuesday — the day she came to find me at the river, which meant something was wrong, because Sera never came to find anyone.

"It happened again," she said.

She held out her hand. Palm up. The skin was unburned. The grass around her feet was scorched in a six-inch radius.

"It didn't touch me," she said. "It never touches me. It just—" She stopped.

"Comes out," I said.

"Yes."

I scanned her. Properly, this time — all three layers. What I saw made the Terminal update three separate entries simultaneously.

\`\`\`
> SERA BLACKWOOD — ANOMALY DETECTED
>
> Affinity: Daemonic-Wild Fire [ACTIVE]
> Source: Paternal bloodline
> System classification: [SUPPRESSED — Level 6 Authority]
> Suppression success rate: 62% (declining)
>
> NOTE: This individual presents as fully human.
> NOTE: The System is lying.
\`\`\`

The System was lying about Sera the same way it lied about me. The difference was that I knew what I was. Sera didn't.

I looked at the scorched grass. At Sera's unburned hand. At the girl who had been fighting her own nature for years by herself, winning less often each month.

I had to make a choice about what to tell her.`,
    choices: [
      { text: "A) HALF TRUTH: \"You have a fire affinity, Sera. Extremely strong. You're not broken. You're powerful.\"",
        next: "a2k3_sera_halbwahrheit",
        affinityEffect: { sera: 25 },
        flagEffect: { seraKenntWahrheit: true, seraKenntVoll: false, seraLuegeAusstehend: false },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Sera looks at her hands. \"An affinity... is that normal?\" — \"No.\" — \"But I'm not a monster?\" — \"No.\" She exhales.",
      },
      { text: "B) FULL TRUTH: \"Sera... you're half daemonic. Your father was a daemon.\"",
        next: "a2k3_sera_explosion",
        flagEffect: { seraKenntWahrheit: true, seraKenntVoll: true, seraLuegeAusstehend: false },
        alignEffect: { licht: 1, verborgenheit: -3 },
        narrativeFeedback: "The temperature in the clearing rises three degrees in one second.",
      },
      { text: "C) \"I don't know, Sera. But I'll find out. Promise me you won't do anything.\"",
        next: "a2k3_sera_luege",
        affinityEffect: { sera: 5 },
        flagEffect: { seraKenntWahrheit: false, seraLuegeAusstehend: true },
        narrativeFeedback: "Sera holds his gaze for a long time. She doesn't fully believe him — you can see that. But she nods.",
      },
      { text: "D) REDIRECT: \"What matters isn't what it is. What matters is that you control it.\"",
        next: "a2k3_sera_halbwahrheit",
        affinityEffect: { sera: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Sera extends one hand — palm up. A small flame ignites. She stares at it. \"...Show me how.\"",
      },
    ],
  },

  a2k3_sera_halbwahrheit: {
    act: "ACT II", chapter: "Chapter 7 — Debug.Life()", title: "Affinity",
    scene: "Forest clearing",
    text: `Sera looked at her hands.

Not for the first time — but for the first time with a word for what she was looking at.

"An affinity."

"Yes."

"Is that normal?"

"No."

She exhaled. Once, long, with the sound of someone setting down something heavy.

"But I'm not a monster."

"No."

Sera looked at her hands for one more moment. Then, slowly, deliberately, she closed them into fists.

Not in anger. In resolve.

"I want to learn to control it."

That was the bravest thing I heard that day. Not a fight, not a rebellion — just: *I want to understand the thing that scares me, so it stops scaring me.*

"Good," I said. "Then we start now."`,
    choices: [{ text: "→ The training begins", next: "a2k3_sera_training" }],
  },

  a2k3_sera_luege: {
    act: "ACT II", chapter: "Chapter 7 — Debug.Life()", title: "I Don't Know",
    scene: "Forest clearing",
    text: `Sera listened.

That was the problem.

She looked at me with the eyes of someone who had learned to read faces because faces were more honest than words — and she nodded.

"Okay."

Just that. Okay.

She believed me.

I knew the answer. I had it in the Terminal, clear and unambiguous. Half daemonic. Father: Varkos, Warlord of Drak'Moor.

I had told her: I don't know.

The Terminal showed nothing. It didn't comment on my lies.

But I registered it — the weight of it. The way Sera trusted me because I'd asked her to, and what that meant now.

I turned away and said: "Let's start with the training."

And filed, under pending: *this will need to be corrected. Not when it's convenient. When she's ready to hear it.*`,
    choices: [{ text: "→ The training begins", next: "a2k3_sera_training" }],
    flagEffect: { seraLuegeAusstehend: true },
  },

  a2k3_sera_explosion: {
    act: "ACT II", chapter: "Chapter 7 — Debug.Life()", title: "Explosion",
    scene: "Forest clearing — immediate aftermath",
    text: `The clearing lit up.

Not fire — the air itself heated. Three degrees in one second, four in two. The grass around Sera's feet didn't just scorch this time. It ignited.

"No," she said. Not to me. To the fire. "No. No no NO—"

The flames climbed. Six inches. A foot. The trees at the edge of the clearing trembled.

I stepped forward. Into the heat.

"Sera."

She couldn't hear me.

"SERA."

She looked at me. Through the fire. Her eyes were — something I didn't have a word for. Not rage. Not fear. The place where they overlap and become something else entirely.

I reached through the flame — it didn't burn me; I didn't know why yet, but I filed it — and put my hand on her shoulder.

"You're not a monster," I said. "I told you the true thing. That's all. The rest is just information."

The clearing temperature dropped by one degree.

"Information," she repeated. Flat.

"Yes."

"My father is a daemon warlord and you're calling it information."

"The information doesn't change what you are. It explains where part of you comes from. Those aren't the same thing."

The fire went out.

Sera stood in the scorched clearing and said nothing for a very long time.

"Teach me," she said finally.

Not please. Not: I need help. Just: teach me.

That was Sera.`,
    choices: [{ text: "→ The training", next: "a2k3_sera_training" }],
    affinityEffect: { sera: 30 },
    flagEffect: { seraKenntVoll: true },
  },

  a2k3_sera_training: {
    act: "ACT II", chapter: "Chapter 7 — Debug.Life()", title: "Fire Control",
    scene: "Forest clearing — the following weeks",
    text: `"Picture your power as a fire," I said. "Not a System fireball — an actual fire. It needs three things: fuel, oxygen, and heat. You are the heat. The fuel is the Aether. The oxygen is control."

Sera looked at me. "You sound like you're explaining code."

"I'm explaining fire the only way I know how."

"...Keep going."

Three weeks. Every afternoon. Sera learned to feel the Aether instead of fighting it. To direct rather than suppress. To let it be what it was without letting it be more than she wanted.

The first controlled flame lasted twelve seconds.

Sera stared at it for the whole twelve seconds. Like she'd never seen fire before.

She hadn't. Not hers.

"Again," she said.

Forty-seven seconds the next day. Two minutes the week after.

The fire stopped appearing without permission.

What appeared instead: Sera, at the river, sitting differently than she had before. With the stillness of someone who has stopped fighting themselves and is learning, slowly, what peace feels like.

She didn't thank me.

That was fine. She didn't need to.`,
    choices: [{ text: "→ Gregor's gift", next: "a2k3_gregor_geschenk" }],
    affinityEffect: { sera: 15 },
  },

  a2k3_gregor_geschenk: {
    act: "ACT II", chapter: "Chapter 7 — Debug.Life()", title: "Gregor's Gift",
    scene: "Gregor's house — Tuesday",
    conditionalFlag: "gregorWeissAlles",
    textConditional: {
      true: `"I've known," said Gregor, before Kaito could open the door. "Since the evening you told me everything. About the other world. About the System. About her." He tapped the journal. "Page 47. Read it first. Before anything else."`,
      default: ``,
    },
    text: `On Kaito's seventh birthday, Gregor gave him a journal.

Not a blank journal. One with writing already in it — in Gregor's cramped, deliberate hand, covering the first forty-six pages. Page 47 was blank.

"What is this?"

"Things I've learned," said Gregor. "Things I should have written down earlier. Things that might matter to someone with your particular way of seeing."

He looked at him over his cup.

"Don't read page 47 first."

I opened to page one.

*The System calls itself eternal, Gregor had written. Nothing that calls itself eternal is. The question is not whether it will end — everything ends. The question is what it becomes on its way there.*

I looked up. Gregor was watching me with the expression he had when something confirmed a theory.

"You've been writing this for me," I said.

"I've been writing it for someone," he said. "I suspected it was you."`,
    choices: [
      { text: "A) Embrace Gregor. No words. Just that.",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 20 },
        alignEffect: { licht: 2 },
        flagEffect: { gregorBuch: true },
        narrativeFeedback: "Gregor holds the embrace. He's thinner than he was. \"Take care of yourself, boy. You carry more than you know.\"",
      },
      { text: "B) \"Opa... this book could change everything. Everything.\"",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 15 },
        flagEffect: { gregorBuch: true },
        narrativeFeedback: "Gregor's eyes light — then go serious. \"Then make sure it changes the right things.\"",
      },
      { text: "C) \"Why now? Why not wait until I'm older?\"",
        next: "a2k3_warnung",
        affinityEffect: { gregor: 10 },
        flagEffect: { gregorBuch: true },
        narrativeFeedback: "Gregor smiles. \"Because time doesn't wait. And because you need it now — even if you don't know that yet.\"",
      },
    ],
  },

  a2k3_warnung: {
    act: "ACT II", chapter: "Chapter 7 — Debug.Life()", title: "Warning",
    scene: "Millheim — evening",
    text: `Aldwin came to dinner.

He smiled — but Kaito knew his real smile, and this wasn't it.

After Elena cleared the plates and Mira fell asleep in her chair, Aldwin leaned forward.

"There's a census coming," he said. Quiet. "The Church is documenting every settlement in this region. Standard procedure." He looked at Kaito. "For most people, standard procedure."

He didn't need to finish.

[Code.Read]: No-ID. No registration. No System entry. The Church's census would find a family with two unregistered children — one [NULL], one with a suppressed daemon bloodline.

"Timeline?" I said.

"Three months. Maybe less."

Elena, from the doorway: "Three months for what?"

Aldwin and I looked at each other.

Sometimes the people you love most are the last ones you can protect through honesty.

But sometimes they're the first ones who deserve it.`,
    choices: [{ text: "→ The war council", next: "a2k4_kriegsrat" }],
    affinityEffect: { aldwin: 5 },
  },

  a2k4_kriegsrat: {
    act: "ACT II", chapter: "Chapter 8 — Conflict.Init()", title: "War Council",
    scene: "Ashford house — night",
    conditionalFlag: "familieWeissAlles",
    textConditional: {
      true: `Elena held his hand at the gate longer than necessary. Then quietly: "I don't know what you are. But I know who you are." That was all. That was enough.`,
      default: ``,
    },
    text: `They sat at the table: Roland, Elena, Aldwin, Gregor (coughing, but stubbornly present), and Kaito — seven years old and technically the one who had caused the problem.

"The Church's Inquisitors will scan everyone," Aldwin said. "Kaito shows as NULL. Sera shows as..." He glanced at me.

"Daemon bloodline," I said. "Suppressed."

Silence.

Elena set down her cup very carefully.

"How long have you known?" she asked. She was asking Kaito.

"About Sera? Since I was five."

Another silence. Different quality.

Roland, very quietly: "And about yourself?"

"Birth."

Elena made a small sound. Not a word. Just: the sound of a person learning that their infant knew something they were still discovering.

Roland put his hand flat on the table. "Options."`,
    choices: [
      { text: "A) EVERYTHING — old life, Septima, the Terminal, the System. Full disclosure.",
        next: "a2k4_plan",
        affinityEffect: { elena: 20, roland: 15, gregor: 10 },
        flagEffect: { familieWeissAlles: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Elena looks at Roland — then at Kaito. Her hands tremble for a moment, then go steady. \"Good. Then we plan.\"",
      },
      { text: "B) PARTIAL — the anomaly, the System-sight. Not the other world.",
        next: "a2k4_plan",
        affinityEffect: { elena: 10, roland: 10 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Roland nods slowly. \"That's enough.\" No more questions. He starts moving the table to the side immediately.",
      },
      { text: "C) MINIMAL — \"I can see the System. Let me help plan.\"",
        next: "a2k4_plan",
        affinityEffect: { elena: 5 },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Elena breathes sharply. Then: \"Show us.\" No hesitation. No doubt. Just trust.",
      },
    ],
  },

  a2k4_plan: {
    act: "ACT II", chapter: "Chapter 8 — Conflict.Init()", title: "The Plan",
    scene: "Ashford house — continued",
    text: `The family and Aldwin made a plan.

Kaito contributed the part no one else could: exact System-layer analysis of every Inquisitor detection method, their range, their cooldown windows, their failure conditions.

It was the first time his particular way of seeing had a tactical application.

Roland listened without comment. When Kaito finished, Roland stood and drew a rough map of Millheim on the kitchen floor with a piece of chalk.

"The census will enter from the north road," he said. "If we clear the house of anomalies before they arrive—"

"Kaito is the anomaly," Elena said.

"Kaito," Roland said, "is our son. The census is the anomaly."

Aldwin, from the corner: "That is, technically, not how this works."

Roland looked at him. "I know."

He looked back at the map.

"This is how we're going to make it work anyway."`,
    choices: [{ text: "→ Sera discovered", next: "a2k4_sera_entdeckt" }],
    affinityEffect: { roland: 10, elena: 10 },
  },

  a2k4_inquisitor: {
    act: "ACT II", chapter: "Chapter 8 — Conflict.Init()", title: "Inquisitor Vex",
    scene: "Millheim village square — the census day",
    text: `High Inquisitor Vex arrived on a cold morning in the sixth month.

I recognized the name from Roland's curse file before I saw his face.

He was tall. Efficient. He moved through the village like someone who had done this many times and expected to do it many more. His scan-skill swept the crowd in waves — level-checks, class-verification, bloodline-purity. Standard Imperial Church procedure.

Roland's hand was on his sword.

I put my hand on Roland's arm. He stopped.

Vex's scan reached me.

[Code.Spoof] active. Roland Ashford: Level 12, Class: Farmer. Elena: Level 8, Class: Householder. Kaito: [NULL — no System entry — SCAN INCOMPLETE].

Vex paused.

His scanner had never returned INCOMPLETE before.

He looked at the boy who had returned the incomplete scan.

The boy looked back.

Vex made a note.

Aldwin had disappeared. Of course he had.

Sera stood at the edge of the crowd, alone, as she always was.`,
    choices: [
      { text: "A) Watch. Don't move. Let Vex decide what an incomplete scan means.",
        next: "a2k5_kampf",
        alignEffect: { ordnung: 1 },
        flagEffect: { krossKommt: true },
        narrativeFeedback: "Vex writes something in his ledger. Looks up. His eyes find Kaito one more time before he moves on.",
      },
      { text: "B) [Code.Spoof] — reinforce the false readings before Vex can reinitiate.",
        next: "a2k5_hack_versuch",
        alignEffect: { schatten: 2 },
        affinityEffect: { aldwin: 10 },
        narrativeFeedback: "The Terminal: COOLDOWN 4:23 remaining. Not enough. But [Code.Analyze] is available.",
      },
      { text: "C) Create a distraction. Knock something over. Be visibly, memorably normal.",
        next: "a2k5_kampf",
        alignEffect: { licht: 1 },
        affinityEffect: { finn: 10 },
        narrativeFeedback: "Finn, who has been standing nearby: immediately helps create the most spectacular accidental market-stall incident Millheim has ever seen. Vex is distracted. The moment passes.",
      },
    ],
  },

  a2k4_sera_entdeckt: {
    act: "ACT II", chapter: "Chapter 8 — Conflict.Init()", title: "Sera Discovered",
    scene: "Millheim — the census, later",
    text: `Vex found Sera twenty minutes after he'd passed me.

Her suppression wasn't perfect — it had been failing for months, and with an Inquisitor's active scan cutting through the village like a searchlight, something slipped.

[ANOMALY DETECTED: DAEMONIC BLOODLINE — ACTIVE. CLASSIFICATION: IMPURE. SYSTEM AUTHORITY: DETAIN FOR EVALUATION.]

Vex moved toward her with two soldiers.

Sera saw them coming.

She didn't run. She stood very still, in the way that people stand when they have been afraid of this exact moment for so long that when it arrives it almost feels like a relief.

I moved.`,
    choices: [
      { text: "A) PUBLICLY intervene. Step between Vex and Sera.",
        next: "a2k5_kampf",
        affinityEffect: { sera: 20, roland: 10 },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Sera looks at Kaito — briefly, directly. Something in her relaxes, something that had been tense for a long time.",
      },
      { text: "B) [Code.Spoof] — forge Sera's scan as normal human.",
        next: "a2k5_hack_versuch",
        affinityEffect: { sera: 15 },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Sera watches him do something she can't see, and watches Vex's scanner flicker. She files that away.",
      },
      { text: "C) Let Roland intervene. Stay back and cover the exit.",
        next: "a2k5_kampf",
        affinityEffect: { roland: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Roland steps forward. He says nothing. He places himself between Vex and Sera. His hand is not on his sword. It doesn't need to be.",
      },
      { text: "D) Give Sera a silent signal. The word: \"BURN.\"",
        next: "a2k5_kampf",
        affinityEffect: { sera: 25 },
        alignEffect: { schatten: 3, chaos: 1 },
        narrativeFeedback: "Sera's eyes find his. She understands. In that moment she decides something — you can see it happen.",
      },
    ],
  },

  a2k5_hack_versuch: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "The Hack",
    scene: "Village square — during the census",
    text: `[Code.Analyze] on Vex's scan-skill.

Not an attack — an analysis. Read the structure. Find the gap.

The scan was a dialogue, not a broadcast. The System sent a query. The target responded with their status. Vex's Inquisitor-skill amplified the query and logged the response.

If Kaito stepped between the query and the response —

[Code.Spoof] was still on cooldown. But [Code.Intercept] wasn't a listed skill. It wasn't a listed anything. It was an application of [Code.Read] in reverse — reading what the System sent, then answering for the target.

The Terminal:

\`\`\`
> WARNING: [Code.Intercept] is not a catalogued skill.
> You are improvising on System infrastructure.
> Success probability: 71%
> Detection probability: 34%
> Carrier risk: MODERATE
\`\`\`

Seventy-one percent.

I've worked with worse odds.

I stepped in.

Vex's scanner asked: *what are you?*

I answered for Sera: *human. Normal. Nothing interesting here.*

The scanner accepted it.

Vex moved on.

The Terminal: \`[Code.Intercept] — LOGGED. This capability does not officially exist.\`

I closed the Terminal and didn't respond to that.`,
    choices: [{ text: "→ The confrontation", next: "a2k5_kampf" }],
    affinityEffect: { sera: 10 },
    skillUnlock: ["codeIntercept"],
  },

  a2k5_kampf: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "The Fight",
    scene: "Village square, Millheim",
    text: `Vex wasn't done.

Whatever had glitched in his scanner — my NULL reading, Sera's brief flicker, something that didn't resolve cleanly — he'd noted it. Reported it through his signal-rune before anyone could stop him. He was thorough, Vex. That was his worst quality.

The soldiers moved to detain Roland for "obstructing an Imperial census."

That was the wrong move.

Roland at level 34 was still Roland. System-cursed didn't mean System-broken.

He broke the first soldier's grip in three seconds.

Vex activated his combat skill: System-Freeze. Roland stopped mid-motion, locked in place, caught in the System's interpretation of reality.

Kaito looked at his father, frozen. Looked at Vex.

Then looked at Elena, who had returned from the forest with Mira. Who had stopped at the edge of the square. Whose face showed exactly what she understood about what was happening.

"Mira," Elena said, very calmly. "Come to me."

Mira came.

Elena looked at Kaito.

One look. Everything in it.`,
    choices: [
      { text: "A) \"I'll come back. Exactly like Father did.\" — You don't know if that's true.",
        next: "a2k5_finn_entscheidung",
        affinityEffect: { elena: 10 },
        flagEffect: { elenaAbschied: "versprechen" },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Elena presses his hand once, firmly. Then lets go. \"Then keep your promise.\" She believes him. That's the hardest thing.",
      },
      { text: "B) \"Take Mira. Protect HER. That's your job. Mine is here.\"",
        next: "a2k5_finn_entscheidung",
        affinityEffect: { roland: 10 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Roland hears this — even frozen. His eyes move. One millimeter. That's all he can manage. It's enough.",
      },
      { text: "C) Say nothing. Turn toward Roland. Shoulder to shoulder.",
        next: "a2k5_finn_entscheidung",
        flagEffect: { elenaAbschied: "schweigen" },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Elena understands. She takes Mira. Doesn't turn back. Kaito knows: that's her way of saying she trusts him to come back.",
      },
    ],
  },

  a2k5_finn_entscheidung: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "Best Friend Forever",
    scene: "Village square — seconds before",
    text: `Finn appeared from nowhere.

He had a wooden sword. His face was pale but set.

"I'm not leaving," he said. "You stay, I stay. Best friend. Forever. Remember?"

Twelve Church soldiers. A Rank-B Inquisitor.

And Finn, whose hands were shaking on the grip — and who wasn't moving anyway.`,
    choices: [
      { text: "A) \"Then stay. But behind me.\"",
        next: "a2k5_finn_bleibt",
        affinityEffect: { finn: 20, roland: 5 },
        flagEffect: { finnImKampf: "geblieben" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn grins — wide, unbreakable. \"Promise!\" He stays behind Kaito. And holds the whole time.",
      },
      { text: "B) \"Finn. Your mother needs you. GO.\"",
        next: "a2k5_finn_geht",
        affinityEffect: { finn: 15 },
        flagEffect: { finnImKampf: "gegangen" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn swallows. Looks at Roland for a second. Nods — short, sharp. He goes. That costs him more than he shows.",
      },
      { text: "C) \"You have a wooden sword, Finn. They have real ones.\"",
        next: "a2k5_finn_schwert",
        affinityEffect: { finn: 10 },
        flagEffect: { finnImKampf: "echtes_schwert" },
        narrativeFeedback: "Finn looks at his wooden sword. Nods. \"...Call me if you need me.\" He goes quickly, before he can stop himself.",
      },
    ],
  },

  a2k5_finn_bleibt: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "\"Behind me.\"",
    scene: "Village square",
    text: `Finn stayed.

Behind Kaito — exactly there, where he'd been told — wooden sword in both hands, grip too tight, knuckles white.

Twelve soldiers. One Inquisitor.

And Finn, whose hands were shaking, who didn't move back anyway.

I didn't have time to tell him what that meant.

I didn't need to. I registered it and filed it somewhere permanent:

*Finn, with shaking hands, who didn't move. That's braver than anything I've ever seen with a status window.*`,
    choices: [{ text: "→ The decision", next: "a2k5_taktik" }],
  },

  a2k5_finn_geht: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "\"Go.\"",
    scene: "Village square",
    text: `Finn went.

That cost him more than he showed — I could see it in the way he turned too fast. Forcing himself before he could change his mind.

He didn't look back.

That was the right thing. People who look back sometimes stop.

I turned toward the soldiers. Twelve of them. One Inquisitor. Roland, frozen.

The Terminal: \`SITUATION: CRITICAL. OPTIONS: 4.\`

Somewhere behind me, Finn was running. Fast. Already far enough that no soldier would waste time on a fleeing village boy.

He'd trusted me to handle this.

That, unexpectedly, was what I needed.`,
    choices: [{ text: "→ The decision", next: "a2k5_taktik" }],
  },

  a2k5_finn_schwert: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "The Wooden Sword",
    scene: "Village square",
    text: `Finn looked at the wooden sword.

Long. Like it owed him an answer.

Then he nodded. "...Call me when you need me." He left quickly, before he could slow down.

I looked at the image of the wooden sword in my mind. Level 0. No class. No rune. A child who had carved a piece of wood into a shape and practiced with it against imaginary goblins.

And Finn was the only one here who had asked if he could help before he volunteered.

The wooden sword meant nothing.

Finn meant everything.

The Terminal: \`SITUATION: CRITICAL. OPTIONS: 4.\`

I opened it. I knew my options.`,
    choices: [{ text: "→ The decision", next: "a2k5_taktik" }],
  },

  a2k5_taktik: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "The Plan",
    scene: "Village square — split second",
    text: `I was a programmer. Programmers solve problems not with force, but with architecture.

The problem: Roland frozen. Twelve soldiers. One Inquisitor.

The components: one [NULL] anomaly with partial wild magic control, a candle's worth of Aether training, and four tactical options in the next three seconds.

\`\`\`
> VOID-TERMINAL — RAPID ANALYSIS
>
> Vex system-skill: FREEZE
>   Duration: 12 sec (5 remaining)
>   Weakness: Requires System connection
>
> Soldier formation: Standard arrest pattern
>   Left flank: WEAK (terrain obstruction)
>
> Roland: Level 34 combat, frozen but aware
>
> Window to act: 5 seconds.
>
> OPTIONS:
>   A) Aether Resonance [UNCHARTED]
>   B) Aldwin contact [COST: cover]
>   C) Gregor intervention [COST: 74-year-old body]
>   D) Force [Code.Modify] [COST: you]
>
> All options carry costs.
> Choose.
\`\`\``,
    choices: [{ text: "→ The rescue", next: "a2k5_rettung" }],
  },

  a2k5_rettung: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "The Rescue",
    scene: "Village square — the moment",
    text: `Vex's sword hung in the air.

Ten centimeters between the blade and Roland's throat. Five seconds left on the Freeze. Twelve soldiers, Roland frozen, Vex watching the boy who had returned an INCOMPLETE scan.

I was seven years old. No sword. No class. No status.

The System didn't exist for me.

That was usually a disadvantage.

In this moment, it was the only thing that mattered.

My Terminal opened. Four options. Less than a second.

\`\`\`
> All options carry real costs.
> The choice belongs to the carrier.
\`\`\``,
    choices: [
      { text: "A) THE AETHER RESPONDS. Kaito asks — and reality protects him.",
        next: "a2k5_rettung_aether",
        alignEffect: { licht: 1 },
        flagEffect: { inquisitorVex: "aether", krossKommt: true },
      },
      { text: "B) ALDWIN APPEARS. His real face: Level 89, Rank S.",
        next: "a2k5_rettung_aldwin",
        flagEffect: { inquisitorVex: "aldwin", aldwinGeflohen: true },
        affinityEffect: { aldwin: 10 },
        narrativeFeedback: "Aldwin raises a hand. The friendly teacher's face is gone. Underneath: four hundred years of exhaustion. And resolve.",
      },
      { text: "C) GREGOR. The old man steps between Vex and Kaito — unarmed.",
        next: "a2k5_rettung_gregor",
        affinityEffect: { gregor: -50, roland: 20 },
        flagEffect: { inquisitorVex: "gregor", gregorVerletzt: true },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Gregor steps forward. A 74-year-old body. A straight back. The look of a man who has made peace with himself.",
      },
      { text: "D) VOID-TERMINAL EMERGENCY. Force [Code.Modify] — the locked command.",
        next: "a2k5_rettung_void",
        flagEffect: { inquisitorVex: "void", kaitoBewusstlos: true },
        alignEffect: { schatten: 5, chaos: 2 },
      },
    ],
  },

  a2k5_rettung_aether: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "The Aether Responds",
    scene: "Village square — the moment",
    text: `I didn't pray.

I had no language for it. No words, no gesture, no formula. I was seven years old and I stood between a blade and my father and the only thing I had was the Terminal — and I opened it and wrote nothing into it. Just: *no.*

The Aether listened.

Not the System. The Aether itself. The raw, pre-System substrate beneath everything. The material Aethermere was made of before anyone started writing rules about how it should behave.

Vex's sword deflected.

Not blocked — *refused*. As if the air had decided this blade had no business existing here. A warmth, brief, already gone.

Vex flew backward. Three meters. Landed on his back and lay there.

A light — not magic, something older than magic — and then: nothing.

Roland's Freeze broke. Roland moved.

The fight was brief.

When it was over, I stood looking at my own hands.

The Terminal:

\`\`\`
> WARNING: AETHER DIRECT-ACCESS EVENT
>
> This capability is not in the database.
> No further documentation possible.
> Recommend: do not attempt to explain this.
\`\`\`

I closed it.

That would need explaining. Someday.

Not today.`,
    choices: [{ text: "→ Aftermath", next: "a2k5_nachwirkungen" }],
  },

  a2k5_rettung_aldwin: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "Aldwin",
    scene: "Village square — the moment",
    text: `Aldwin raised a hand.

That was all. One hand, extended, palm toward Vex.

Vex flew. Not fell — *flew*, like something thrown by someone for whom gravity is a suggestion. He landed at the far end of the square, stood unsteadily, looked at Aldwin, and went completely still.

Not from pain.

From recognition.

"You—"

"Yes," said Aldwin. Calm. With the calm of a man who has stopped finding most things surprising because he has lived long enough to have seen most things.

The friendly teacher's face was gone.

Underneath: four hundred years. Exhaustion that had learned patience. Power that had learned to be quiet.

Level 89.

Vex, Level 58, turned and ran.

Aldwin watched him go. Then looked at Kaito.

"That was expensive," he said.

"I know."

"My cover—"

"I know."

He nodded once. Then turned to the crowd and began explaining, calmly, what it felt like to discover that the friendly village teacher was something else entirely.

He was very good at it.

He'd had practice.`,
    choices: [{ text: "→ Aftermath", next: "a2k5_nachwirkungen" }],
  },

  a2k5_rettung_gregor: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "Gregor",
    scene: "Village square — the moment",
    text: `Gregor stepped forward.

Not quickly. Not heroically. With the pace of a 74-year-old man who knows what he's doing and has no particular need to make it look dramatic.

He placed himself between Vex and Kaito.

No weapon. No skill. Just an old man in a worn coat, facing a drawn sword.

"You want to hurt a child, Inquisitor?"

Vex hesitated.

"In front of the whole village?"

That was the moment. Not power, not magic — *visibility*. Vex had a mission. He hadn't been given authorization to create witnesses.

Five seconds of hesitation.

Then he struck Gregor aside.

Not carefully. The way you move something in the way. With one arm, hard.

Gregor fell. A sound I would never unhear — not loud. That was the worst part.

Roland broke through the Freeze on pure will. A locked Level 34, and he broke a System skill on nothing but the decision that something was not happening today.

Roland won.

I was standing and looking at Gregor on the ground, who was looking at me and saying: "Don't worry. I fell."

As if that was what mattered.

The Terminal: \`GREGOR SYLVAINE — STATUS: INJURED. SEVERITY: CRITICAL.\`

I closed it. I didn't want numbers for this.`,
    choices: [{ text: "→ Aftermath", next: "a2k5_nachwirkungen" }],
  },

  a2k5_rettung_void: {
    act: "ACT II", chapter: "Chapter 9 — System.Crash()", title: "Code.Modify",
    scene: "Village square — the moment",
    text: `The Terminal exploded with warnings.

\`\`\`
> [Code.Modify] — ACCESS DENIED
> Skill locked: System Security Protocol Level 7
> Forced access: POSSIBLE
> WARNING: Organ damage probable
> WARNING: System detection: CERTAIN
> WARNING: Carrier may become: UNCONSCIOUS
>
> Confirm?
\`\`\`

I confirmed.

What followed was one second.

One second in which the System *saw* me — really saw me, for the first time, a gaze that felt like hot metal — and I reached into it anyway and pulled.

Vex's magic collapsed. Not weakened. *Cut*. Like someone pulled a plug. His Freeze on Roland: gone. His scan-skills: gone. His System-connection: severed for exactly 4.3 seconds.

Roland was free. Roland was fast.

I was neither.

The last thing I remember: the ground. Then Mira's voice somewhere above me. Then nothing.

I woke up in my bed. Mira was sitting on the floor beside me, both hands holding mine.

"Buda's sleeping," she was whispering to someone who wasn't there. "Buda will be okay."

My left arm didn't work properly for two days. My head hurt for a week.

The Terminal: \`System detection: ACTIVE. A report exists.\`

I had made Vex run.

I had also done the first thing I'd promised never to do: made myself visible.`,
    choices: [{ text: "→ Aftermath", next: "a2k5_nachwirkungen" }],
  },

  a2k5_nachwirkungen: {
    act: "ACT II", chapter: "Chapters 9–10 — Aftermath", title: "The Morning After",
    scene: "Millheim — after the fight",
    conditionalFlag: "inquisitorVex",
    textConditional: {
      aether: `Somewhere, Vex was writing a report. In it: "System anomaly confirmed. NULL-entity. Forwarding to General Kross, requested." I didn't know that yet. But the report existed. And Kross read it.`,
      aldwin: `Boris found me on the road and said only: "Your teacher is gone." — "I know." I had known from the moment I'd last seen him. Some departures announce themselves ahead of time.`,
      gregor: `Gregor was in bed. Elena had done everything she could. His body was 74 years old, and the Inquisitor's blow had broken something that no healing could reach. He knew it. We all did.`,
      void: `Mira sat next to me, both her hands around mine. "Buda's sleeping," she was whispering to no one. "Buda will be okay."`,
      default: ``,
    },
    text: `The fight was over. Vex, defeated. The soldiers, dispersed. Millheim still standing.

But the quiet was wrong.

"His signal-rune worked. The Church now knows what happened here. They'll come back." I looked at the faces around me. "With an army."

Boris — blood on his face, but upright — "Then we FIGHT—"

"Boris. You can't fight an army with hunters and wolf-traps. They'll burn the village to the ground."

Silence. The kind that settles over rooms when the worst option is the only one left.

Elena, who had returned from the forest with Mira, said it:

"Then we leave."

Everyone looked at her.

"The village is wood and stone. We aren't things. We go. All of us. Now."`,
    text2: `One night. We had one night before we had to go.

I stood in the middle of the village and looked around.

The house where I was born. The well where I met Finn. The rock by the river where Sera first smiled. Aldwin's cottage where I lit my first flame.

Seven years. My entire second life. Here.`,
    choices: [{ text: "→ Gregor's farewell", next: "a2k6_gregor_abschied" }],
  },

  a2k6_gregor_abschied: {
    act: "ACT II", chapter: "Chapter 10 — Memory.Save()", title: "Farewell from Millheim",
    scene: "Millheim — the last night",
    conditionalFlag: "gregorTod",
    textConditional: {
      gregor_verletzt: `Gregor lay in bed. The same room. But with a different quality of silence around it.

The Inquisitor's blow had broken something Elena couldn't heal. Not from lack of skill — because some things can't be healed in a 74-year-old body that has already decided it's done.

He knew it. We all knew it.

Gregor looked at me — direct, clear — and there was no fear in it. Just exhaustion. The kind that says: enough. I've been here long enough.

"The journal." First words. Practical as always.

"Yes."

"Page 47. Only when you're alone."

"Yes."

"Good." He closed his eyes. Opened them again. "One last story, boy. Listen."

"...Yes, Opa."

"There was once a small star..."

I knew how this story ended. I had always known.

But I let him tell it. Until his hand went loose on Mira's arm. Until Mira asked: "Opa, the story isn't finished yet."

Until the answer didn't come.`,
      default: ``,
    },
    text: `Gregor was in bed.

He had looked at me when I came through the door, and I knew immediately that he knew. Not that he was dying. *When.*

"Come here, boy. Sit. Time's short, so listen."

Mira sat on the other side of the bed, her small hand on his arm. She didn't understand what was happening. Her face was open, curious — a child trying to wake a sleeping grandfather.

I sat down.

"The journal. Do you still have it?"

"Yes."

"Page 47 again. When you're alone. When you think you know what you're doing. Read it again."

I nodded. Gregor's eyes were clear. Clearer than usual — as if the body had stopped trying and handed everything to the mind.

"In my first life," he said, "I was a soldier. I've done things I can't forget. Then I was a grandfather. That was better."

He coughed. Elena's hand on his shoulder — light, like touching something fragile.

"I was afraid of you, at the beginning." He said it simply. "A child who doesn't cry. Who analyzes the world like an old man. That frightened me."

He looked at me.

"But then I watched how you looked at Mira. And how you looked at Sera. And how you looked at your father when he trained and thought no one was watching."

He closed his eyes briefly.

"You love them. In your way. That stopped my fear."

Mira pulled at his sleeve. "Opa. Tell a story. Please."

Gregor smiled — the smile he saved only for her. Warm, real, slightly foolish.

"Good. A story." He breathed. Thin. But there. "There was once a small star. The smallest. Who shone brighter than all the others. The big stars asked: 'How do you do that?' And the small star said..."

He waited. Like always. Mira leaned forward.

"What did it say, Opa?"

Gregor looked at me. Not Mira.

*Me.*

"It said: 'I don't shine for myself. I shine for the ones who stand in the dark.'"

His hand went loose on Mira's arm.

"Opa?"

Silence.

"Opa, the story isn't finished."

I stood and went to the window. Not because I wasn't crying. Because I didn't want Mira to see me. Mira, who didn't yet understand that some stories end without resolution.

Elena wept quietly. Roland stood against the wall, hands in fists. Soldiers know what silence means.

Outside: snow. The first snow of the year, falling on Millheim, which we would leave tomorrow.

I opened the Terminal. Not to do anything. Because I didn't know what else to do.

It was empty.

And stayed empty.

Then, once, a single line appeared:`,
    text2: `Gregor Sylvaine. The man who hadn't told fairy tales — but told *history*, encrypted in a child's language.

In my Terminal, once only:`,
    systemBox: {
      title: "VOID-TERMINAL — INCOMING MESSAGE",
      lines: [
        "> ...",
        "> He was a good man.",
        ">",
        "> — S.",
      ]
    },
    choices: [{ text: "→ Boris's farewell", next: "a2k6_boris_abschied" }],
  },

  a2k6_boris_abschied: {
    act: "ACT II", chapter: "Chapters 10–11 — Farewell / Execute.Departure()", title: "Boris's Farewell",
    scene: "Village gate, Millheim — morning",
    conditionalFlag: "familieWeissAlles",
    textConditional: {
      true: `Elena held his hand at the gate longer than necessary. Then quietly, only for him: "I don't know what you are. But I know who you are." That was all. That was enough.`,
      default: ``,
    },
    text: `Boris stood at the village gate. He'd freshly combed his enormous mustache — his way of showing dignity.

"Keep them safe, Eisenhardt."

Roland, a nod: "It was an honor, Boris."

"The honor was mine. You were the worst farmer Millheim ever had. But the best man."

They shook hands. Firm. Long.

Then Boris knelt in front of Kaito.

"Boy. I don't understand what you are. But I've seen what you *do*. You saved this village — with your head, not a sword. That's rarer than gold."

He pressed something into Kaito's hand. A coin — old, from before the System's currency standardization. No level-requirement on the back. Just a face that was worn smooth.

"Something from before all this," Boris said. "To remember that things were different once. And can be again."

He stood. Cleared his throat.

"Now go. Before I say something embarrassing."`,
    choices: [
      { text: "A) \"I'll come back.\" — You don't know if that's true. You say it anyway.",
        next: "a2k7_wegscheide",
        affinityEffect: { boris: 20 },
        flagEffect: { borisVersprechen: true },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Boris clears his throat. \"...Good.\" He turns away. But Kaito sees him pause — the broad shoulders still for a moment.",
      },
      { text: "B) Shake his hand properly. No promises you can't keep.",
        next: "a2k7_wegscheide",
        affinityEffect: { boris: 15 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Boris grips his hand firmly. Holds it a moment longer than is strictly necessary. Then lets go.",
      },
      { text: "C) \"Thank you for the kitchen table. Every Tuesday.\"",
        next: "a2k7_wegscheide",
        affinityEffect: { boris: 25, gregor: 5 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Boris is quiet for a moment. Then, gruffly: \"It was a good table.\" He turns away quickly.",
      },
    ],
  },

  a2k7_wegscheide: {
    act: "ACT II", chapter: "Chapter 11 — Execute.Departure()", title: "The Crossroads",
    scene: "Road from Millheim — three days out",
    conditionalFlag: "elenaAbschied",
    textConditional: {
      versprechen: `Elena had made him promise to come back. Sitting by the fire, I asked myself for the first time whether that was a promise I could keep. The answer I gave myself: I'll try.`,
      schweigen: `Between Elena and me, no words at the departure. No embrace, no promise. Just her look. Some things are too large for language — I had never understood that in my first life.`,
      default: ``,
    },
    text: `Three days on the road. Thirty people, three carts, one bad-tempered donkey named Herr Grummel. Roland found work as a road-guard. Elena healed market-customers for copper coins. Mira terrorized the neighboring children with unfounded enthusiasm.

I walked and thought.

Aldwin's contact in Kreuzweg was a woman named Frau Voss — a surly alchemist with a cellar full of things the System hadn't catalogued and a particular dislike of questions. She would arrange housing, papers, new identities if needed.

Kreuzweg was a city. Real size. Real System infrastructure. Real Inquisitors.

A different world from Millheim.

The fire settled into its normal configuration. The two moons rose. Finn walked next to me for a while without speaking — which, for Finn, was an act of extraordinary restraint.

Finally: "Is it going to be okay?"

I considered the question.

"Yes," I said.

"You always say things like you know them."

"I always say things I've decided."

Finn was quiet for a moment.

"That's different from knowing."

"Yes," I said. "It is."`,
    choices: [
      { text: "A) Walk ahead. Let the fire-quiet be enough for tonight.",
        next: "a2k7_letzter_blick",
        alignEffect: { verborgenheit: 1 },
        flagEffect: { reiseziel: "kreuzweg" },
        narrativeFeedback: "Finn falls into step beside him. Says nothing more. Somehow that's exactly right.",
      },
      { text: "B) Sit with Finn. Tell him something true — about what's coming.",
        next: "a2k7_letzter_blick",
        affinityEffect: { finn: 15 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Finn listens with the focus he only shows for things that actually matter. Then: \"Okay. I'm not scared.\" He's lying. But he believes the lie hard enough to make it useful.",
      },
      { text: "C) \"What if I go a different way? Alone.\"",
        next: "a2k7_letzter_blick",
        flagEffect: { reiseziel: "allein" },
        alignEffect: { schatten: 3, verborgenheit: 1 },
        narrativeFeedback: "A long silence. Finn doesn't argue. That's how you know he understands. \"...The offer stands,\" he says. \"Forever.\"",
      },
      { text: "D) ALONE: \"I take my own path.\"",
        next: "a2k7_letzter_blick",
        flagEffect: { reiseziel: "allein" },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Elena looks at him for a long time. Then nods. \"I know.\" She doesn't say: stay. She doesn't say: go carefully. Just: I know.",
      },
    ],
  },

  a2k7_letzter_blick: {
    act: "ACT II", chapter: "Chapter 11 — Execute.Departure()", title: "One Last Look",
    scene: "Hilltop — looking back at Millheim",
    text: `I stopped at the top of the first hill and looked back.

Millheim was a collection of lights in the dark. Small from here. Smaller than it had been when I was born in it.

Seven years.

The house. The well. The river. The rock. The clearing where Sera first held fire steady. The shed where Aldwin left chalk marks on the floor that I still sometimes saw in my sleep.

Gregor's Tuesday evenings.

I stood there for exactly the time it took to memorize it properly. To commit it to the kind of memory that doesn't fade — not System-logged, not Terminal-saved. The human kind.

Then I turned around.

Kreuzweg waited. The Academy waited. The System waited, with its updates and its Inquisitors and its classified files and its General Kross, who was now reading Vex's report somewhere in a room I hadn't seen yet.

And somewhere — deep, pre-System, in the Aether itself — Septima was watching. Patient. The way she had always been patient.

*Not as a hero,* she had said. *As yourself.*

I turned my back on Millheim and walked toward what came next.`,
    choices: [{ text: "→ Act III: Login.Academy()", next: "a3k0_zeitsprung" }],
  },

};
