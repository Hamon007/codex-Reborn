// AKT III — English Translation
// Login.Academy() — the years at the Imperial Academy
// Voice: Kaito's voice gets drier, more guarded. He's learning to perform normalcy.
// New voices: Leon (entitled, brittler than he sounds), Meridia (four hundred years of patience),
//             Akira (genuine where you don't expect it), Marcus (warm. Too warm).

export const AKT_III_EN = {

  a3k0_zeitsprung: {
    act: "ACT III", chapter: "Time Jump — Five Years", title: "Five Years",
    scene: "Kreuzweg → Aetheria Prime — Ages 7–12",
    text: `Five years.

Kreuzweg was the first stop.

Thirty people, three carts, one stubborn donkey. Roland found work as a guard. Elena healed market-customers for copper coins. Mira terrorized the neighboring children with unfounded enthusiasm.

Aldwin's contact, Frau Voss — a surly alchemist who disliked questions — arranged everything: papers, housing, identities, a cover story sturdy enough to survive casual inspection.

We had a new name on the registry. A new history. A family from the eastern provinces, nothing interesting, nothing worth scanning twice.

I got good at forgettable.

Years two and three: Kreuzweg. Training with Aldwin's contact network. Learning to use [Code.Spoof] with enough precision that even a Rank-A scanner would get a false positive. Learning to be invisible in a city.

Year four: the letter.

Imperial Academy of System Arts, Aetheria Prime. Scholarship for exceptional students. Based on anonymous recommendation.

I knew who had recommended me.

Year five: Aetheria Prime.`,
    text2: `Aldwin's contact was named Frau Voss — a surly old alchemist with a cellar full of uncatalogued things and a particular dislike of questions.

She liked Kaito.

"You don't ask why," she said, once. "You ask *how* and then you work it out yourself."

"Is that better?"

"In my experience," she said, "people who need to know why first spend all their time being surprised. People who start with *how* get things done."

She taught him three things Aldwin hadn't:
How to forge System-registry documents.
How to read the Church's internal communication codes.
And how to disappear from a room so gradually that people don't notice you've gone.

"Three skills," she said. "For three situations. Running, hiding, and making yourself not worth looking at."

"What if I need to fight?"

"Then you've failed at all three," she said. "Start over."`,
    choices: [{ text: "→ Aetheria Prime", next: "a3k1_aetheria" }],
  },

  a3k1_aetheria: {
    act: "ACT III", chapter: "Chapter 12 — Login.Academy()", title: "Aetheria Prime",
    scene: "Imperial Capital — first day",
    text: `Aetheria Prime was overwhelming.

In Millheim, five hundred people. In Kreuzweg, ten thousand. In Aetheria Prime: half a million, all moving with the particular energy of a city that considers itself the center of the world.

The Academy occupied the northern quarter — five towers of pale stone, System-runed at every corner, the whole complex radiating the particular kind of impressive that exists specifically to make newcomers feel small.

I scanned the city on the way in.

Average level: 31. The lowest I saw: a child of about four, Level 2, Class: Student (Preliminary). The highest, moving through the crowd in Imperial uniform, surrounded by a small system-corona: Level 74. General Kross.

The same General Kross who had been copied on Vex's report five years ago.

He didn't notice me.

[Code.Spoof] working at full capacity: Level 9, Class: Scholarship Student (Provincial). Nothing interesting. Nothing worth looking at twice.

I watched Kross move through the crowd and filed his face under: *will matter later.*

Then I went to find my dormitory.`,
    choices: [{ text: "→ Leon", next: "a3k1_leon" }],
  },

  a3k1_leon: {
    act: "ACT III", chapter: "Chapter 12 — Login.Academy()", title: "Leon von Adlerstein",
    scene: "Academy dormitory corridor",
    conditionalFlag: "leonBeziehung",
    textConditional: {
      ignoriert: `I turned away. Not from shyness — from efficiency. Leon von Adlerstein was not a variable I needed to account for. That would wound him more than any argument could have. He'd feel it until the end.`,
      antagonist: `I recognized it immediately: someone who needs power to exist. Interesting to me, not as a person — as a variable. Someone actively trying to cause harm is easier to predict than someone doing it passively.`,
      rivale: `In his face, for a fraction of a second: respect. He hadn't expected someone who didn't step back. That made him something other than an enemy.`,
      default: ``,
    },
    text: `Leon von Adlerstein blocked the corridor before Kaito reached his room.

Blond, arrogant, Level 12, golden uniform. House Adlerstein crest.

"Ashford? Never heard of it. Which house?"

"No house. Village. Millheim."

Leon looked at him the way people look at something they've already decided isn't worth their time.

"A provincial. On scholarship." He said it with the inflection of someone presenting evidence.

"Yes."

"The Academy lets in anyone these days."

I could have answered many things. I selected on the basis of efficiency.

What would you do?`,
    choices: [
      { text: "A) \"Through the door. Like everyone else.\" [Neutral]",
        next: "a3k1_meridia",
        flagEffect: { leonBeziehung: "ignoriert" },
        alignEffect: { verborgenheit: 1 },
        narrativeFeedback: "Leon snorts. His gaze slides over Kaito like he's already been forgotten. Good. Exactly right.",
      },
      { text: "B) \"Level is just a number. Like your IQ — low and irrelevant.\"",
        next: "a3k1_meridia",
        flagEffect: { leonBeziehung: "antagonist" },
        alignEffect: { schatten: 2 },
        narrativeFeedback: "Leon goes RED. His mouth opens and closes. Someone behind him suppresses a laugh.",
      },
      { text: "C) [Code.Read] — scan quietly, then quietly: \"Your sword-skill has a 0.3-second gap on the recovery. Might want to fix that.\"",
        next: "a3k1_meridia",
        flagEffect: { leonBeziehung: "rivale" },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Leon goes white. \"H-How—\" Kaito walks past. Behind him, he hears Leon whisper rapidly to his friends.",
      },
    ],
  },

  a3k1_meridia: {
    act: "ACT III", chapter: "Chapter 12 — Login.Academy()", title: "Meridia",
    scene: "Classroom — first lecture",
    text: `The professor entered, and the room's feeling *changed*.

Not dramatically. She was a tall elven woman in a grey coat, moving with the particular efficiency of someone who hasn't wasted a motion in centuries. She set down her papers. Looked at the room.

Level 67. Class: Chronicler — System-Archivist. Age: approximately four hundred years, which, for an elf, was somewhere around middle age.

"System History," she said. "I am Meridia. I have studied the Genesis-System for four hundred years. You have approximately four years to learn the basics. We will use the time well."

She looked at the class.

"The System is three thousand years old. Three thousand years ago, it was *built*. By people. With intentions. The question that interests me — the question that should interest you — is not *what* the System does. It is: *what did the people who built it want?* And: *did they get it?*"

She looked directly at Kaito.

Or appeared to. The look lasted a quarter of a second.

But Meridia was four hundred years old, and a quarter-second look from someone four hundred years old carries information that a longer look from someone younger couldn't.

She knew something.

After class, she stopped him at the door.

"I was sent by Aldwin," she said, quietly. "I've been here waiting for you."`,
    choices: [
      { text: "A) \"Agreed. But I decide *when* and *how*.\"",
        next: "a3k2_akademiealltag",
        affinityEffect: { meridia: 20 },
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Meridia's mouth corners lift minimally. Four hundred years of elven restraint recognize independence when they see it.",
      },
      { text: "B) \"Thank you. For the first time since Millheim, I feel like I'm not alone.\"",
        next: "a3k2_akademiealltag",
        affinityEffect: { meridia: 25, aldwin: 10 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "For a moment, four hundred years of elven composure melt slightly. \"You're not,\" she says. \"You never were.\"",
      },
      { text: "C) \"And if the truth destroys the world?\"",
        next: "a3k2_akademiealltag",
        affinityEffect: { meridia: 15 },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Meridia is quiet for a long time. \"Then the world wasn't worth saving. But I don't believe that. And I don't think you do either.\"",
      },
    ],
  },

  a3k2_akademiealltag: {
    act: "ACT III", chapter: "Chapter 13 — Runtime.Academy()", title: "Academy Life",
    scene: "Imperial Academy — four years",
    text: `Four years at the Academy. Four years that shaped me — not through the System, but *despite* it.

Official curriculum: Elemental magic (I imitated System-spells with Wild Magic — looks the same, works differently), Combat training (I was "average" — deliberately), History (I paid attention here), System Theory (I had opinions I didn't share).

Meridia's private sessions: what the official history didn't say. The gap between the Genesis-System's original design and what it had become. The six Architects. The seventh.

Aldwin's contact network: intelligence, cover identities, three new skills I wasn't supposed to have.

My [Code.Spoof] profile: Level 14, Class: Combat Student (Average). Below notice. Above suspicion.

The Academy had eight hundred students. One of them would become important for reasons that had nothing to do with their level.`,
    choices: [{ text: "→ Marcus", next: "a3k2_marcus" }],
  },

  a3k2_marcus: {
    act: "ACT III", chapter: "Chapter 13 — Runtime.Academy()", title: "Marcus",
    scene: "Academy — second year",
    text: `Marcus Hale found me in the library.

Not accidentally. He'd been positioning himself for a week — I'd watched him do it, the gradual approach of someone who had learned to make coincidences look like coincidences.

Level 34. Class: Ranger. He presented as: cheerful, open, easy to trust.

He was one of those.

"Ashford, right? I've heard about you." He sat across the table, uninvited, with the confidence of someone who expects to be welcomed. "You're the provincial who doesn't have a patron."

"Yes."

"That's brave. Or stupid." He smiled. "I haven't decided which."

"Let me know when you figure it out."

He laughed — genuinely, I thought. The Terminal didn't flag deception. But the Terminal also wasn't omniscient.

Over the following weeks: study sessions, meals, careful shared information. Marcus was useful. Knew people. Had access to parts of the Academy library that required connections.

And he was too friendly.

People who intend irreversible things become friendlier beforehand. I knew this from Millheim.

I hadn't decided yet what Marcus intended.`,
    choices: [
      { text: "A) ACCEPT — let Marcus carefully close in.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 15 },
        flagEffect: { marcusVertrauen: true },
        narrativeFeedback: "Marcus smiles — the warm, real smile that Kaito can't quite categorize yet. He moves closer. The Terminal doesn't flag it. That's the problem.",
      },
      { text: "B) DISTRUST — polite, but never open.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 5 },
        flagEffect: { marcusVertrauen: false },
        narrativeFeedback: "Marcus notices. His smile stays, but his eyes calculate. They'll become acquaintances, not friends. He files that.",
      },
      { text: "C) COUNTER-INTELLIGENCE — accept, but feed him false information.",
        next: "a3k3_summoning_vorbereitung",
        affinityEffect: { marcus: 10 },
        alignEffect: { schatten: 3 },
        flagEffect: { marcusWissen: "false", verratPfad: "alpha_vorsicht" },
        narrativeFeedback: "You accept his friendship the way a programmer accepts an input: with validation. He smiles. You smile back. Both of you are playing something.",
      },
    ],
  },

  a3k3_summoning_vorbereitung: {
    act: "ACT III", chapter: "Chapter 14 — Event.Summoning()", title: "The Summoning",
    scene: "Academy — third year, preparation",
    text: `The Church's Summoning Ritual happened every twenty years.

This time, it would happen at the Academy. Seven young people from another world, selected by the System, brought here to become Heroes — assigned a quest, given equipment, pointed at the problem.

I had opinions about this.

The System selected heroes the same way it selected everything: by the numbers. Highest potential, most optimized stat-distribution, maximum projected impact per resource-unit. It didn't ask anyone if they wanted to come. It didn't ask anyone here if they wanted heroes.

It just pulled seven people from their lives and made them an assignment.

I knew, from Meridia's records, that three of the previous Summonings had produced Heroes who eventually died in their assigned quest. Two had refused and been classified as System-failures. Two had succeeded, whatever that meant.

The Summoning was in six days.

The Heroes would arrive.

And one of them would change everything about the next four years.`,
    choices: [{ text: "→ The Heroes", next: "a3k4_helden_kontakt" }],
  },

  a3k4_helden_kontakt: {
    act: "ACT III", chapter: "Chapter 14 — Event.Summoning()", title: "First Contact",
    scene: "Academy — the day after the Summoning",
    conditionalFlag: "heldenErsterKontakt",
    textConditional: {
      akira: `"You've been the only person I haven't been able to read since day one," Akira said. "I've tried every day." He held out his hand. "That's reason enough."`,
      yuki: `"Yuki told me about you," Akira said. "First day. She said: 'There's someone who listens.' " He looked at me. "That's harder than fighting."`,
      emma: `"Emma's made notes on you," Akira said. "Three pages. I don't take notes on anyone — but I respect her assessments." He held out his hand.`,
      dmitri: `"Dmitri said you work without needing orders," Akira said. "That's rare. Even among heroes."`,
      default: ``,
    },
    text: `Seven people arrived through a System-gate on a Tuesday morning.

I watched from the library window as they emerged into the Academy courtyard, disoriented, surrounded by officials and Priests and a welcoming committee that had clearly rehearsed this.

Seven different people, from what appeared to be the same world — Japan, from the clothing and language profile. Young. None older than their early twenties.

The Terminal catalogued them automatically:

*Akira Hayashi. Level 1 (Post-Summoning). Class: [HERO — SYSTEM ASSIGNED]. Potential: EXCEPTIONAL.*

*Yuki Nakamura. Level 1. Class: [HERO — SYSTEM ASSIGNED]. Status: [TIMER — SYSTEM DRAIN ACTIVE].*

I stopped on Yuki's entry.

*Timer — System Drain Active.*

The System was actively pulling power from her. Gradually. Like a slow leak.

The Terminal noted it as a System parameter.

I noted it as: *this will need fixing.*

Who would you approach first?`,
    choices: [
      { text: "A) AKIRA — in the arena during training.",
        next: "a3k4_akira",
        flagEffect: { heldenErsterKontakt: "akira" },
        affinityEffect: { akira: 10 },
        narrativeFeedback: "Akira looks up — he hadn't expected anyone. Then he grins, wide and real. \"Finally. Someone interesting.\"",
      },
      { text: "B) EMMA — in the library doing research.",
        next: "a3k4_emma",
        flagEffect: { heldenErsterKontakt: "emma" },
        affinityEffect: { emma: 10 },
        narrativeFeedback: "Emma looks up. Studies him with no warmth. Then: \"Sit down. But don't comment on my system.\"",
      },
      { text: "C) DMITRI — in the yard, helping with something.",
        next: "a3k4_dmitri",
        flagEffect: { heldenErsterKontakt: "dmitri" },
        affinityEffect: { dmitri: 10 },
        narrativeFeedback: "Dmitri nods. Hands him a bucket. No words. After a while: \"You work without being told.\" Silence. \"Good.\"",
      },
      { text: "D) YUKI — alone at the edge of the arena.",
        next: "a3k4_yuki",
        flagEffect: { heldenErsterKontakt: "yuki" },
        affinityEffect: { yuki: 15 },
        narrativeFeedback: "Yuki looks up — startled. Then, when he just sits next to her without asking anything: something in her settles.",
      },
    ],
  },

  a3k4_akira: {
    act: "ACT III", chapter: "Chapter 15 — Party.Formation()", title: "Akira Hayashi",
    scene: "Academy arena",
    text: `Akira trained alone. Sword-strikes against a practice post — fast, strong, with the form of someone who trained before the System gave him a skill for it.

Level 1 in name only. Whatever he was, he wasn't a beginner.

"You're not from here," he said, without turning around.

"Neither are you."

"From another world, technically." He stopped. Turned. Looked at me with the evaluating look of someone who categorizes quickly and is usually right. "You have a weird status. My [Observe] skill can't get a clean read."

"[NULL]."

"...That's a thing?"

"Apparently."

He looked at me for another second. Then: "Akira." He held out his hand. Japanese custom — the handshake, not the bow. Interesting adaptation.

"Kaito Ashford."

"Kaito." He tried the name. "That's a Japanese name."

"My mother liked it."

He looked at me. Filed something away. "Right." He picked up his sword again. "You want to spar? I need someone who won't let me win on purpose."`,
    choices: [
      { text: "\"Yes. I won't let you win on purpose.\"",
        next: "a3k5_akiras_angebot",
        affinityEffect: { akira: 15 },
        narrativeFeedback: "Akira grins. \"Finally.\" He's good. Better than his level suggests. So is Kaito.",
      },
    ],
  },

  a3k4_emma: {
    act: "ACT III", chapter: "Chapter 15 — Party.Formation()", title: "Emma Sato",
    scene: "Academy library",
    text: `Emma sat surrounded by stacked books, cross-referencing three texts simultaneously with the focus of someone who finds the world's noise deeply personally offensive.

Level 1. Class: Scholar-Hero. Her [All-Seeing Eye] was active — a passive skill that catalogued everything in her field of vision, organized it, and stored it.

She was compiling a database of the System's organizational structure from library records.

In three days.

"Ashford," she said, without looking up.

"You know my name."

"I know everyone in this building's name, level, class, and social network." She turned a page. "Sit down if you're going to stay. I don't like hovering."

I sat.

We worked in parallel for two hours. She catalogued. I read Meridia's history text and made marginal notes that occasionally matched her database.

At the end of two hours, she set down her pen and looked at me properly for the first time.

"You cross-reference the same way I do," she said.

"Yes."

"That's unusual."

"I know."

She picked up her pen again.

"Come back tomorrow," she said. "I may have questions."`,
    choices: [
      { text: "\"What time?\"",
        next: "a3k5_akiras_angebot",
        affinityEffect: { emma: 15 },
        narrativeFeedback: "\"Sixth hour.\" She doesn't look up. But she's already making a space in her notes.",
      },
    ],
  },

  a3k4_dmitri: {
    act: "ACT III", chapter: "Chapter 15 — Party.Formation()", title: "Dmitri Volkov",
    scene: "Academy yard",
    text: `Dmitri Volkov was carrying a sack of flour for the kitchen. Alone. The servants had apparently stopped trying to help him after he'd declined three times.

Level 1. Class: Paladin-Hero. He moved like someone who had done physical labor his whole life and had opinions about doing it properly.

I picked up one end of the sack.

He looked at me.

I looked back.

We carried it to the kitchen without speaking. Set it down. He reached into his pocket and pulled out a stone — smooth, split evenly in two halves. He held one half out to me.

I took it.

"Where I'm from," he said, "this means something." His German was good. Slightly formal. "Two people who carry something together without being asked."

"What does it mean?"

"That you're someone worth carrying things with."

He put his half of the stone back in his pocket. I looked at mine.

"Dmitri," he said.

"Kaito."

He nodded. Once. Went back to work.

I kept the stone.`,
    choices: [
      { text: "Keep the stone half. Say nothing.",
        next: "a3k5_akiras_angebot",
        affinityEffect: { dmitri: 20 },
        flagEffect: { yukiToken: "stein" },
        narrativeFeedback: "Dmitri notices him keep it. Nods once more. That's a conversation.",
      },
    ],
  },

  a3k4_yuki: {
    act: "ACT III", chapter: "Chapter 15 — Party.Formation()", title: "Yuki Nakamura",
    scene: "Academy arena — edge of the stands",
    text: `Yuki sat with her knees pulled to her chest, watching the arena below, her staff beside her with a cloth over it like she was hiding it from herself.

Level 1. Class: Mage-Hero.

And above her head, in the System-layer that most people couldn't see:

\`\`\`
> YUKI NAKAMURA — ACTIVE SYSTEM DRAIN
>
> Drain rate: 0.3% vital capacity / day
> Estimated depletion: 2.9 years
> Source: SUMMONING PROTOCOL — classified
> Reversal: [CLASSIFIED — Level 7+ required]
\`\`\`

The System was slowly killing her, and she didn't know it.

I sat down next to her. Said nothing.

She startled. Then, when I just sat there and watched the arena, she settled.

After several minutes: "You're not going to ask me how I'm doing?"

"No."

"...Everyone else asks."

"I assume you're doing as well as someone can, in circumstances you didn't choose."

A pause. "That's the most accurate thing anyone's said to me since I arrived."

"The countdown above your head," I said, carefully. "Can you see it?"

Her head turned very fast.

"...You can see that?"

"Yes."

Silence.

"I can fix it," I said. "Not today. But I can."

A longer silence.

She held out a small wooden rabbit, painted in chipped red and white. An omen-charm from what I recognized as a Japanese shrine tradition.

"Hold onto this," she said. "Until you can."`,
    choices: [
      { text: "Take the rabbit. \"Until I can.\"",
        next: "a3k5_akiras_angebot",
        affinityEffect: { yuki: 30 },
        flagEffect: { yukiToken: "hase", yukiRomance: "moeglich" },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Yuki's shoulders drop by exactly one centimeter. That's significant.",
      },
    ],
  },

  a3k5_akiras_angebot: {
    act: "ACT III", chapter: "Chapter 15 — Party.Formation()", title: "Akira's Offer",
    scene: "Academy cafeteria",
    conditionalFlag: "heldenErsterKontakt",
    textConditional: {
      akira: `"You've been the only person I can't read since day one," Akira said. "I've tried every day." He held out his hand. "That's reason enough."`,
      yuki: `"Yuki told me about you. Already, day one. She said: 'There's someone who actually listens.' " He looked at me. "That's harder than it sounds."`,
      emma: `"Emma made three pages of notes on you. I don't take notes on anyone — but I respect her assessments." He held out his hand.`,
      dmitri: `"Dmitri said you work without needing to be directed. That's rare. Even among heroes."`,
      default: ``,
    },
    text: `Akira found me at breakfast.

"Party," he said, without preamble. "You, me, Emma, Dmitri, Yuki. Maybe more." He put his tray down. "I've been watching everyone in this Academy for two weeks. You're the one I can't categorize."

"That's intentional."

"I know. That's what makes it interesting." He sat. "The Heroes are supposed to form a party and complete a System-assigned quest. The System wants us to pick from the ranked Academy students." He looked at me. "The System's rankings are based on level and class-compatibility scores. You rank forty-third."

"I know."

"I don't care about the System's rankings."

A pause.

"Why me?" I asked.

"Because the System can't see you. And I'm starting to think that's the most important thing about you."

He held out his hand.`,
    choices: [
      { text: "A) ACCEPT — publicly. Take the hand.",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 20 },
        flagEffect: { heldenparteiStatus: "oeffentlich" },
        alignEffect: { licht: 2 },
        narrativeFeedback: "The cafeteria notices. Murmurs. The Terminal registers: [Visibility: increased]. Akira's grin is sunrise-wide.",
      },
      { text: "B) DECLINE — politely. \"I fight better alone.\"",
        next: "a3k6_marcus_verrat_setup",
        alignEffect: { schatten: 2 },
        flagEffect: { heldenparteiStatus: "aussen" },
        narrativeFeedback: "Akira's hand stays out a moment too long. Then withdraws. \"The offer stays open.\" He means it.",
      },
      { text: "C) WITH CONDITIONS — \"I'm not a hero. I'm the shadow.\"",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 10 },
        flagEffect: { heldenparteiStatus: "schatten_bestaetigt" },
        alignEffect: { schatten: 3, verborgenheit: 2 },
        narrativeFeedback: "Akira processes this. Then slowly grins. \"The mysterious fifth member.\" He likes it.",
      },
      { text: "D) COUNTER: \"Why *really*, Akira? The Church has already assigned you a quest.\"",
        next: "a3k6_marcus_verrat_setup",
        affinityEffect: { akira: 15 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Akira's grin disappears. What's underneath is more real: a man who asks questions he doesn't have answers to. \"Because I think the Church's quest is wrong,\" he says quietly.",
      },
      { text: "D) IN THE SHADOW — \"I'll help. But my name stays out of your reports.\"",
        next: "a3k6_marcus_verrat_setup",
        requires: { flag: { heldenparteiStatus: "schatten" } },
        affinityEffect: { akira: 15 },
        alignEffect: { schatten: 3, verborgenheit: 2 },
        flagEffect: { heldenparteiStatus: "schatten_bestaetigt" },
        narrativeFeedback: "Akira looks at him for a long time. \"Why?\" — \"Because a blade no one can see can't be parried.\" Akira nods. He doesn't understand everything. But he accepts it.",
      },
    ],
  },

  a3k6_marcus_verrat_setup: {
    act: "ACT III", chapter: "Chapter 16 — Debug.Trust()", title: "Marcus",
    scene: "Academy — two months later",
    text: `Two months with the Heroes. I'd become more visible than I'd intended.

My [Code.Spoof] held: Level 16, Class: Combat Student. Below notice. But visibility isn't just about numbers — it's about patterns. I was pattern-adjacent to a party that Inquisitor Vex had flagged in a report that General Kross had filed under *monitor*.

Marcus, meanwhile, had been finding reasons to talk to me.

The calibration was off. His approach had shifted from *building trust* to *extracting information*. Subtle — he was good. But I'd watched Aldwin be subtle for five years, and Aldwin was better.

One evening, Marcus arrived at my room earlier than usual.

"I found something," he said. "In the Restricted Library." He set down a folder. "About [NULL] entities. There are records. Old ones."

He looked at me with exactly the right amount of concern.

I looked at the folder.

And made a choice about what Marcus Hale was.`,
    choices: [
      { text: "A) TRUST — \"Thank you, Marcus.\"",
        next: "a3k7_verrat_alpha",
        affinityEffect: { marcus: 15 },
        flagEffect: { marcusVertrauen: true },
        narrativeFeedback: "Marcus relaxes visibly. Too visibly. Your Terminal notes it — but you've already nodded.",
      },
      { text: "B) DISTRUST — \"How does Mordecai know about me? *Who* told him?\"",
        next: "a3k7_verrat_alpha",
        alignEffect: { ordnung: 1 },
        narrativeFeedback: "Marcus's smile flickers — one millisecond. You caught it. The Terminal updates: *ALL TRUST — REVOKED.*",
      },
      { text: "C) [Code.Read] DEEP — full scan of Marcus. Now. While he's distracted.",
        next: "a3k7_verrat_beta",
        alignEffect: { schatten: 3 },
        flagEffect: { verratPfad: "beta", marcusWissen: "true" },
        narrativeFeedback: "The Terminal floods with data. Level 34. Class: Assassin. Iris Hale — sick, Church hostage. Marcus. The whole shape of it, at once.",
      },
    ],
  },

  a3k7_verrat_alpha: {
    act: "ACT III", chapter: "Chapter 17 — Betrayal.Alpha()", title: "The Betrayal",
    scene: "Academy — High Inquisitor's chambers",
    text: `It was going to happen TODAY. I knew it.

Not from a scan. I knew it because Marcus had been *different* yesterday. His smile one shade too wide, his handshake one second too long, his "good night, Kaito" one note too warm.

People about to do irrevocable things become friendlier first.

Midnight. Marcus appeared at the door. "I found something. In the Restricted Library—"

I was already dressed.

"I know," I said.

Marcus stopped.

"You're going to take me to Mordecai," I said. "High Archbishop Mordecai, who has been investigating System-anomalies for a decade and who has a classified file on [NULL] entities going back forty years. You're going to hand me over, and in exchange he'll do something for someone you love."

Marcus said nothing for a long time.

"His sister," I said. "Iris Hale. Sick. The Church has the healer who can fix it."

"...How long have you known?"

"Long enough."

He sat down on the floor. Just — sat down. The folder still in his hand.

"I'm sorry," he said. The kind of sorry that doesn't ask for forgiveness.

Then he stood up and took me to Mordecai anyway.

Because he had no other choice.

Neither did I.`,
    choices: [
      { text: "A) FULL TRUTH to Mordecai — \"I'm an anomaly. Created by a power older than the System.\"",
        next: "a3k7_kerker",
        alignEffect: { licht: 2 },
        flagEffect: { mordecaiWissen: "septima" },
        narrativeFeedback: "Mordecai freezes. \"The... Seventh? Impossible.\" Then: fury. But his hands are shaking. He already knew, somewhere. Something.",
      },
      { text: "B) HALF TRUTH — \"I'm a System glitch. Nothing dangerous.\"",
        next: "a3k7_kerker",
        alignEffect: { ordnung: 1 },
        flagEffect: { mordecaiWissen: "update" },
        narrativeFeedback: "Mordecai's eyes narrow. \"Harmless?\" He doesn't believe it. But he has no evidence for more.",
      },
      { text: "C) SILENCE — say nothing. Just stare at Mordecai.",
        next: "a3k7_kerker",
        alignEffect: { schatten: 3 },
        flagEffect: { mordecaiWissen: "nichts" },
        narrativeFeedback: "The silence stretches. Mordecai's fingers drum once on the desk. He doesn't break eye contact first. Neither does Kaito.",
      },
      { text: "D) COUNTERATTACK — \"I know what happens in three years. The System Update. Does the Archbishop?\"",
        next: "a3k7_kerker",
        alignEffect: { schatten: 2, verborgenheit: 1 },
        flagEffect: { mordecaiWissen: "update" },
        affinityEffect: { mordecai: 10 },
        narrativeFeedback: "Mordecai *freezes*. \"...How do you know about the Update?\" He wants Kaito imprisoned. Now he wants answers more.",
      },
    ],
  },

  a3k7_verrat_beta: {
    act: "ACT III", chapter: "Chapter 17 — Betrayal.Beta()", title: "The Controlled Betrayal",
    scene: "Academy — knowing in advance",
    text: `Marcus knocked at midnight. "I found something. In the Restricted Library."

I had read his full file six hours ago.

Level 34, Class: Assassin (Church-contracted). Iris Hale, his sister, twenty-three years old, sick with System-Drain — the same condition affecting Yuki, but faster. The Church healer who could fix it: locked behind Mordecai's personal approval.

Marcus was a good man in an impossible position.

That didn't change what he was about to do.

"Okay," I said. "Lead the way."

He blinked. He'd expected resistance.

I followed him to Mordecai's chambers. I'd had six hours to prepare for Mordecai's chambers. I used them well.

Mordecai looked at me across the desk with the expression of a man who had waited a long time for this meeting.

I looked back with the expression of a man who had arranged to be here on his own terms.`,
    choices: [
      { text: "A) \"I need something from *you*. Everything you know about Mordecai's investigation.\"",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 20 },
        flagEffect: { marcusStatus: "doppelspion_kontrolliert" },
        alignEffect: { schatten: 3, verborgenheit: 1 },
        narrativeFeedback: "Something in Marcus collapses — not defeat, but relief. \"...Everything.\" He means it.",
      },
      { text: "B) \"Go. Tell Mordecai what he wants to hear. When the time comes, I'll call you.\"",
        next: "a3k8_exil_vorbereitung",
        affinityEffect: { marcus: 15 },
        flagEffect: { marcusStatus: "doppelspion_passiv" },
        alignEffect: { schatten: 2 },
        narrativeFeedback: "Marcus nods. Slowly. He turns to go. At the door he stops — says nothing — then goes. He'll hold.",
      },
      { text: "C) \"If you betray me again — *really* betray me — then we'll see what I can do.\"",
        next: "a3k8_exil_vorbereitung",
        flagEffect: { marcusStatus: "gewarnt" },
        alignEffect: { schatten: 3 },
        narrativeFeedback: "Marcus swallows. \"...Understood.\" Two words. He means them.",
      },
    ],
  },

  a3k7_kerker: {
    act: "ACT III", chapter: "Chapter 18 — Prison.Break()", title: "The Cell",
    scene: "Academy basement — the cell",
    text: `The cell was three meters by three. Stone floor, stone walls, a wooden cot, a narrow window slit too high to reach.

Standard Inquisitor holding cell. System-sealed at the door — any skill-use inside would be logged and trigger an alarm.

Any System skill-use.

My first night, I mapped the cell by touch. Documented every stone, every gap, every potential. Found, on the second pass: the chains had been anchored to the wall with System-security runes — but the runes had been applied to the *floor*, not the *wall*. A small error. Someone had done this in a hurry.

Aldwin had once told me: *most security is designed for the person they expect. Not the person who actually shows up.*

I spent the first night in the cell doing nothing.

Planning.`,
    choices: [{ text: "→ Aldwin's letter", next: "a3k7_aldwin_brief" }],
  },

  a3k7_aldwin_brief: {
    act: "ACT III", chapter: "Chapter 18 — Prison.Break()", title: "The Letter",
    scene: "The cell — second night",
    text: `On the second night, I found a message in the cell.

Not under the door. In the System-noise — hidden in the background radiation of the Academy's own infrastructure, encoded in Alt-Aetherisch, fine enough that no scanner would catch it. Only someone who could read the Aether directly would see it.

Only me.

\`\`\`
> MESSAGE FROM: [UNKNOWN — ALT-AETHERISCH ENCODED]
>
> You're in a cell. You know that.
> I'm 400 kilometers away and I know
> you're in a cell.
> That should reassure you. It doesn't.
>
> I can't come back. Not now.
> If I come back, they take not just you —
> they take everyone.
>
> But I can tell you what I know.
>
> Septima gave me a name.
> Not hers. Another.
> TERTIUS. Third Architect. Sleeping.
> Irondeep. Level 33.
>
> You'll know what to do with that.
>
> One more thing:
> I should not have left Millheim.
> That was wrong.
> Not tactically — humanly.
> I've wanted to say that since I left.
>
> — A.
\`\`\`

Aldwin.

Four hundred years old. Rank S. The most powerful guardian I'd ever seen.

Apologizing in encrypted Alt-Aetherisch messages to children in dungeons.

I deleted the message. Saved the content.

Tertius. Irondeep. Level 33.

I had something to do, once I got out of here.`,
    choices: [{ text: "→ Dealing with Mordecai", next: "a3k8_exil_vorbereitung" }],
    affinityEffect_on_arrival: { aldwin: 25 },
  },

  a3k8_exil_vorbereitung: {
    act: "ACT III", chapter: "Chapter 18 — Prison.Break() / Pressure.Build()", title: "Dealing with Mordecai",
    scene: "Academy — free or never imprisoned",
    conditionalFlag: "exilForm",
    textConditional: {
      oeffentlich: `I would leave the Academy loudly. That had consequences — across two continents, people would know the name "NULL." Some would fear it. Some would come looking. That was the price of visibility.`,
      phantom: `I would disappear. No letter, no scene, no trace. They'd be puzzling over whether I'd really been there, weeks later. This was the first time I operated fully in shadow. It would not be the last.`,
      default: ``,
    },
    text: `Free or never imprisoned — Kaito stood before the same question: Mordecai knew about him. The pressure wasn't going to stop.

Options:

One: Negotiate. Mordecai wanted the [NULL] anomaly studied, not eliminated. There was leverage in that. Kaito had information Mordecai wanted. Mordecai had resources Kaito needed.

Two: Leave. Quietly. The Academy, the city, the whole situation. Go to ground. Find Tertius.

Three: Fight. Publicly. The kind of fight that made Mordecai's position untenable — drag his investigation into the light where it became a political liability.

Four: Transform the situation. Make Mordecai an asset instead of a threat.

The deadline was three days. Mordecai's patience had a timeframe.

Kaito chose.`,
    choices: [
      { text: "A) PUBLIC DEPARTURE — leave the Academy with a scene. Akira at his side.",
        next: "a3k9_abschiede",
        flagEffect: { exilForm: "oeffentlich", akademieRuf: "legende" },
        alignEffect: { licht: 1, ordnung: 1 },
        narrativeFeedback: "Akira steps up immediately. Two students vs. an Archbishop — Mordecai blinks twice. That's the most surprised he's been in a decade.",
      },
      { text: "B) NEGOTIATION WITH MORDECAI — use his knowledge of the Update as leverage.",
        next: "a3k9_abschiede",
        flagEffect: { exilForm: "verhandlung", mordecaiRedemptionMoeglich: "true" },
        alignEffect: { ordnung: 2 },
        narrativeFeedback: "Mordecai studies him for a long time. \"You know too much for your age.\" Not a compliment. But he listens.",
      },
      { text: "C) DISAPPEAR IN THE NIGHT — no trace. Empty bed. No explanation.",
        next: "a3k9_abschiede",
        flagEffect: { exilForm: "phantom", akademieRuf: "mythe" },
        alignEffect: { schatten: 4, chaos: 1, verborgenheit: 2 },
        narrativeFeedback: "Morning. Kaito's bed is cold and empty. Mordecai stands before it and says nothing for a long time.",
      },
      { text: "D) USE MARCUS AS AN ASSET — his access to Mordecai's intelligence is more valuable than his betrayal.",
        next: "a3k9_abschiede",
        flagEffect: { exilForm: "marcus_asset", marcusStatus: "doppelspion_kontrolliert" },
        alignEffect: { schatten: 2, verborgenheit: 1 },
        narrativeFeedback: "Kaito writes a letter. Not to the Heroes. To Marcus. What Marcus called a betrayal is now, functionally, a position.",
      },
    ],
  },

  a3k9_abschiede: {
    act: "ACT III", chapter: "Chapter 19 — Exile.Begin()", title: "The Last Night — Farewells",
    scene: "Academy rooftop — night",
    conditionalFlag: "yukiToken",
    textConditional: {
      hase: `Yuki had given me the rabbit. I hadn't given anything back — but that was wrong. You always give something back, even without meaning to. I'd given her trust. That was harder to carry than a charm.`,
      stein: `Dmitri's stone was in my pocket — one half. Dmitri had the other. No words were said when he gave it to me. But we both knew: whoever carries a half comes back for the other one.`,
      default: ``,
    },
    text: `I stood on a rooftop. Above the city. Under the stars.

Five years at the Academy. Five years of learning to be forgettable.

I wasn't forgettable anymore.

Akira found me there. Didn't ask questions. Stood next to me and looked at the same view.

"They'll say you didn't exist," he said. "Officially."

"I know."

"I'll know you existed."

That was Akira. He could have said it a dozen other ways. He said that.

Emma came next — with a notebook. She'd been documenting the Academy's System-infrastructure and had three specific pages she wanted to give me.

"You'll need these," she said. "When you get to Irondeep."

She'd read the name in the background of something Marcus had passed through her database.

I didn't ask how. Emma had a three-page file on everyone in the building. She probably had one on me.

Dmitri came last. Said nothing. Held out his hand.

We shook.

Then he said, very quietly: "Don't die."

"I'll try."

"Try harder than that."

I tried to think of what to say.

"The stone's half in my pocket," I said.

He nodded. That was the whole conversation.`,
    choices: [
      { text: "A) Take the rabbit back. Touch foreheads. No words.",
        next: "a3k9_sprung",
        requires: { affinity: { yuki: 30 } },
        affinityEffect: { yuki: 20 },
        flagEffect: { yukiToken: "hase", finaleBeziehung: "yuki" },
        alignEffect: { licht: 1 },
        narrativeFeedback: "Silence. Warmth. Yuki's breath catches briefly. The ice she's never quite shed — melts, just a little.",
      },
      { text: "B) \"I'm taking it. And I'm bringing it back. With me.\"",
        next: "a3k9_sprung",
        affinityEffect: { yuki: 15 },
        flagEffect: { yukiToken: "hase" },
        narrativeFeedback: "Yuki nods. A smile — small, fragile, real. She presses it into his hand.",
      },
      { text: "C) Split Dmitri's stone in two. One half for Yuki. One to keep.",
        next: "a3k9_sprung",
        affinityEffect: { dmitri: 10, yuki: 15 },
        flagEffect: { yukiToken: "stein" },
        narrativeFeedback: "Dmitri sees from across the roof. He nods once — slowly, heavily. That's, for him, the highest form of approval.",
      },
    ],
  },

  a3k9_sprung: {
    act: "ACT III", chapter: "Chapter 19 — Exile.Begin()", title: "The Jump",
    scene: "Academy rooftop — departure",
    text: `"If you meet someone who calls themselves 'NULL'... you'll know who it is."

He looked at them — Akira, Emma, Dmitri, Yuki. The Heroes that the System had summoned and that Kaito had found useful in ways the System hadn't planned for.

"Take care of yourselves," he said. "The quest the Church assigned you — be careful with it. It's real. The threat is real. But the Church's solution has a cost they haven't told you about."

Akira: "What cost?"

"I don't know yet. Find out before you commit."

He turned.

"Kaito."

Yuki.

She was looking at him with the particular look she had when she was deciding something was important and worth saying.

"Come back," she said. Not as a plea. As a fact she was establishing.

"I plan to," he said.

Then he went over the wall and disappeared into the city below.

\`\`\`
> [NULL] — EXILE BEGIN
> Academy record: [STUDENT — STATUS: WITHDRAWN/ABSENT]
> Church record: [ANOMALY — STATUS: UNCONFIRMED/AT LARGE]
> Terminal record: [TERTIUS. IRONDEEP. LEVEL 33.]
\`\`\``,
    choices: [{ text: "→ Chapter 20: Solo Leveling begins", next: "a3k10_reboot" }],
  },

  a3k10_reboot: {
    act: "ACT III", chapter: "Chapter 20 — Reboot()", title: "Solo Leveling Begins",
    scene: "Wilderness — solo",
    conditionalFlag: "gregorBuch",
    textConditional: {
      true: `Between fights, I sat against a cave wall and opened Gregor's journal. Page 47. Gregor had marked it with a small dog-ear in the corner. I read it. Once. Twice. The third time I understood: Gregor had known about Septima. Not who she was. That she existed. "The Seventh," he had written, "waits for the one who can read what no System can read." I stared at the page. Then closed the journal. Stood up. Kept walking.`,
      default: ``,
    },
    text: `Six months.

Alone.

The wilderness between the Academy and Irondeep — four provinces, two mountain ranges, one desert stretch the System had categorized as "Impassable (Level 40+ recommended)" and that Kaito crossed at Level 16 (Spoofed) using [Code.Read] to find the path the System hadn't documented because no one at Level 16 was supposed to be there.

He got good at things he'd been bad at.

Foraging: Beeren, mushrooms — Aldwin's voice in his head from year two: *serrated edge, always.* Once a rabbit he caught with a Wild-Magic trap. It tasted like winning.

Navigation: [Code.Read] on terrain gave him System-layer information that no map showed — where water ran underground, where monsters patrolled, where the System had flagged areas as anomalous and therefore where it was paying less attention.

Combat: He still wasn't a fighter. He was becoming something else. Someone who never needed to fight because he understood what would happen before it started.

He hit Level 22 at month four. Level 27 at month six.

The System thought he was a scholarship student who had dropped out.

He was becoming something the System had never catalogued.`,
    choices: [{ text: "→ Act IV: Null.Operativ()", next: "a4k1_intro" }],
  },

};
