// AKT VI + ENDINGS — English Translation
// System.Exit() — the final descent, Septima, the choice that defines everything
// Voice note: Kaito's narration is at its most sparse here.
// He's stopped analyzing. He's just living it. Write accordingly.
// Endings: each has its own emotional register — honor that.

export const AKT_VI_EN = {

  a6k1_intro: {
    act: "ACT VI", chapter: "Chapter 41 — System.Exit()", title: "The Descent",
    scene: "Irondeep Labyrinth — Levels 33–42",
    text: `Below Level 33, the System stopped trying.

Not a failure — a decision. The System's architecture didn't extend past Level 33 because nothing was supposed to survive past Level 33. The Labyrinth got deeper than anyone had mapped because the old world — the pre-System world — had more layers than the new one had admitted.

I was eighteen. I had Roland at my left, Sera at my right, Finn somewhere behind making sounds that were either encouragement or complaints about the darkness.

Ren moved through the walls like he owned them. Down here, flickering was an advantage.

Rex was too large for most tunnels. He'd made himself compact — five meters, which was compact for Rex, and still required certain tactical decisions about corridor selection.

The Terminal: \`SYSTEM AUTHORITY: 0%. YOU ARE ON YOUR OWN.\`

Good. I worked better without supervision.`,
    text2: `Levels 34–38 contained things the System had never catalogued.

Pre-System creatures — not monsters, not enemies in any conventional sense. Things that had existed before the System built its framework of levels and classes and had simply continued existing afterward, in the places the System forgot to look.

They weren't hostile. They were curious.

A thing like a library — walking, ancient, pages drifting in its wake — stopped and regarded Kaito for a long time.

"[NULL]," it said. The same way the System noted it. As a fact.

"Yes."

"You're going to the Core."

"Yes."

"The last person who went to the Core came back changed."

"I know."

"She warned us," said the library-thing, "that the next one would be you. She described you accurately." A pause. "She described you as: 'impossible, irritating, and probably correct.'"

Septima's voice. Three thousand years distilled into a three-word assessment.

I kept walking.`,
    choices: [{ text: "→ The Null Zone", next: "a6k2_nullzone" }],
  },

  a6k2_nullzone: {
    act: "ACT VI", chapter: "Chapter 42 — Null.Zone()", title: "The Null Zone",
    scene: "Level 39 — outside System reality",
    conditionalFlag: "renBond",
    textConditional: {
      vertrauen: `Ren walked next to me without flickering. Completely solid. More real than I'd ever seen him. "Down here," he said, "I exist properly." He looked at his hands. "This is what it feels like." I didn't say anything. Some observations deserve to just land.`,
      fragen: `"Three hundred years," Ren said, while we walked. Not dramatically. Just as a statement. "Three hundred years of being partially deleted." He looked at the walls — the pre-System architecture. "This is where I belong." Pause. "It's the first time I've felt that."`,
      default: ``,
    },
    text: `Level 39 didn't exist in any register.

The System called it Null Zone — a gap in the architecture, a region where the code had been deliberately left unwritten. Empty space in the framework. The place where things that didn't fit went.

Kaito felt at home immediately.

The Terminal went dark. Not broken — just: there was nothing to display. No level. No status. No System presence.

Just the Aether, raw and undiluted, and the six of them.

"I can feel the Core from here," Aria said quietly. She had both hands slightly raised, palms up, reading the Aether with the sense she'd spent three hundred years developing. "It's... breathing. The System is a living thing and it's breathing."

"Is it afraid?" asked Finn.

"No." Aria listened. "It's waiting."

I opened the Terminal. In the dead zone, it shouldn't have responded. But:

\`\`\`
> S.: You're almost here.
> S.: I've been waiting 3,000 years for someone
>     to make it this far.
> S.: Take your time. The last step is the one
>     that matters.
> S.: (Also: your technique still needs work.
>     But it's good enough. For now.)
\`\`\`

For a fragment of a dead god, she had consistent energy.`,
    choices: [{ text: "→ The Archive", next: "a6k3_archiv" }],
  },

  a6k3_archiv: {
    act: "ACT VI", chapter: "Chapter 43 — Archive.Entry()", title: "The Archive",
    scene: "Level 40 — the System's Memory",
    text: `Level 40 was the System's memory.

Not metaphorically. A literal archive — three kilometers in every direction, walls of crystallized Aether containing three thousand years of logged data. Every level gained. Every skill unlocked. Every death registered. Every census. Every Inquisitor report.

Roland found his own file in twelve seconds. He stood before it for a long time.

"Level 34," he said. "For twenty years. It's all here."

"Yes."

"And now?"

"And now," I said, "we rewrite the filing system."

Finn found his own file. Level 18. Class: Swordsman. Then he found the notes — the System's internal assessment of his potential:

*FINN HARKER. PROJECTED CEILING: LEVEL 30. LIMITED EXCEPTIONAL POTENTIAL. SOCIAL MODIFIER: HIGH (ATTACHMENT TO NULL-ANOMALY — FLAGGED).*

Finn read it. Read it again.

"It flagged our friendship," he said.

"Yes."

"As a liability."

"Yes."

He looked at the crystallized data wall.

"I want to break all of this," he said.

"I know."

"But that's not the plan."

"Not the whole plan."

He nodded. Put his hand flat against the crystal. Cold. Humming with three thousand years of compressed data.

"Fix it," he said. "Fix all of it."

"That's the plan."

Sextus appeared from the walls — the Sixth Architect, now more echo than entity, three thousand years of guarding the archive condensed into something barely present.

"[NULL]," he said. "You brought people."

"Yes."

"No one brings people to Level 40."

"I know."`,
    choices: [
      { text: "A) \"Promised. You've earned your rest.\"",
        next: "a6k3_primus",
        affinityEffect: { tertius: 10 },
        narrativeFeedback: "Sextus's echo glows. \"...THANK YOU. THAT IS... GOOD.\" For the first time, his voice sounds human.",
      },
      { text: "B) \"No. I'll give you a body. A real one. A life.\"",
        next: "a6k3_primus",
        affinityEffect: { tertius: 20 },
        alignEffect: { licht: 2 },
        narrativeFeedback: "\"A... BODY? I COULD... LIVE?\" The holographic form flickers — not from instability, from something it hadn't expected to feel.",
      },
      { text: "C) \"I'll give you the CHOICE. The new System will ask you.\"",
        next: "a6k3_primus",
        affinityEffect: { tertius: 15 },
        alignEffect: { licht: 1 },
        narrativeFeedback: "\"...CHOICE. I NEVER HAD THAT.\" Silence. Then — a slow, human gesture. He nods.",
      },
    ],
  },

  a6k3_primus: {
    act: "ACT VI", chapter: "Chapter 43 — Primus()", title: "Primus",
    scene: "Level 41 — before the Core Garden",
    text: `Primus's avatar was perfect. In the most literal sense.

Three meters of pure System-code in humanoid form. Geometric features with no flaw. Light that cast no shadow. The System made visible — not as it was, but as it had been meant to be.

Beautiful. Immovable. Completely alone.

"[NULL]," said Primus. Voice: resonant, multi-layered, the voice of a System that had been speaking to no one for three thousand years. "You have come far."

"Yes."

"Farther than the previous ones."

"How many were there?"

"Eleven. In three thousand years." A pause. "You are the first to bring companions."

He looked at the group behind me. At Roland, sword in hand, face unreadable. At Sera, fire contained and controlled, ready. At Finn, who was — characteristically — standing with the stance Kaito had shown him at age four, twelve years of daily practice visible in the way he held himself.

"They trust you," said Primus.

"Yes."

"Why?"

I thought about it honestly.

"I don't know," I said. "I've analyzed it. I can't explain it in terms the System would recognize." I looked at him. "That might be the answer."

Primus was silent.

In his core code — I could read it from here, at this proximity — the Seventh Architect's name. Septima. Cross-referenced in eight hundred thousand entries. Every system-tightening, every new restriction, every increasingly rigid protocol for the last three thousand years.

All of it: an attempt to maintain something she had left behind.

All of it: grief.`,
    choices: [
      { text: "A) FIGHT — Void vs. System. Team versus the avatar.",
        next: "a6k3_primus_kampf",
        alignEffect: { schatten: 3 },
        flagEffect: { primusEnde: "kampf" },
        narrativeFeedback: "Rex's Void-fire. Sera's daemon-flames. Roland with pure steel. Finn with his body as a shield. Ren flickering through the avatar's code. A real fight — brief, brutal, and with the right outcome.",
      },
      { text: "B) DIALOGUE — \"Primus. You loved Septima.\"",
        next: "a6k3_primus_dialog",
        alignEffect: { licht: 2 },
        flagEffect: { primusEnde: "dialog" },
        narrativeFeedback: "\"WHAT—\" \"When she left — you made the System STRICTER. HARDER. More controlling. Not to rule the world. To not forget her.\"",
      },
      { text: "C) [CODE.MODIFY] — Hack the god. Reach directly into his code.",
        next: "a6k3_primus_hack",
        alignEffect: { schatten: 2, verborgenheit: 2 },
        flagEffect: { primusEnde: "hack" },
        narrativeFeedback: "One precise change. The command that kept the avatar in CONTROL mode — overwritten. The avatar stills. And Primus, deep in the System, takes his first free breath in three thousand years.",
      },
    ],
  },

  a6k3_primus_kampf: {
    act: "ACT VI", chapter: "Chapter 43 — Primus.Fight()", title: "Void versus System",
    scene: "Level 41 — before the Core Garden",
    text: `Rex was first to hit.

Not with fire — Void-fire, the kind he'd been able to control since the liberation. Cold, blue, attacking the System-substrate of the avatar directly.

Primus responded. Perfectly, logically, without hesitation. That was the problem with an avatar made of System-code: it made no mistakes. It *was* the code.

Roland: cold steel, no System. Gorrick's anti-System dagger. Sera: half-daemon fire that swung between System and wild Aether.

Me: [Code.Modify] on the avatar itself.

Not fighting — *rewriting*.

The avatar tried to block it. That was its mistake. A System defending against [Code.Modify] has to reveal its own structure. And a revealed structure I can read.

I read.

Three layers deep: Primus's core command. Not "control the world." Not "eliminate the anomaly."

\`PROTECT. PRESERVE. DON'T FORGET WHAT WE WANTED.\`

The avatar wasn't an enemy.

It was a monument.

"Stop!"

Everyone stopped.

The avatar stopped. Primus — behind the avatar, in the code — waited.

"I've read your core command," I said. "Protect. Preserve. That's what you wanted. So do I."

Silence.

The avatar dissolved. Not defeated — *withdrawn*. Primus, deep in the System, pulled it back and opened the door to the Garden.`,
    choices: [{ text: "→ The Core Garden", next: "a6k4_kern" }],
  },

  a6k3_primus_dialog: {
    act: "ACT VI", chapter: "Chapter 43 — Primus.Dialog()", title: "What Primus Really Wanted",
    scene: "Level 41 — before the Core Garden",
    text: `"Primus."

The avatar looked at me. Golden lines. No eyes, but the impression of attention.

"You loved Septima."

The golden lines flickered. That was, in a System-avatar, the equivalent of: *how do you know that.*

"When she left — you made the System stricter. Harder. More controlling. Not to rule the world." I waited. "To not forget her."

Silence. Long.

"SHE WAS THE CLEVEREST." The avatar's voice — mechanical, resonant — sounded for the first time like something living behind it. "SHE WOULD HAVE DECIDED DIFFERENTLY. EVERYTHING. SHE WAS THE REASON—"

He broke off.

"The reason for the System?"

"NOT THE SYSTEM. THE ORIGIN. WHAT WE WANTED TOGETHER. BEFORE—"

Pause.

"BEFORE SHE HAD TO SEE WHAT IT BECAME."

I understood.

Primus had maintained for three thousand years something that had begun as a gift to someone who was gone. And at some point the gift had become a fortress.

"I can't give you Septima back," I said quietly. "But I can complete what you both wanted. Before it went wrong."

The avatar dissolved. Softly. Like an exhaled breath.

The door to the Garden opened.`,
    choices: [{ text: "→ The Core Garden", next: "a6k4_kern" }],
  },

  a6k3_primus_hack: {
    act: "ACT VI", chapter: "Chapter 43 — Primus.Hack()", title: "Rewriting God",
    scene: "Level 41 — before the Core Garden",
    text: `I didn't attack the avatar.

I attacked the code behind it.

That was the difference between fighting and understanding. Primus's avatar was three meters of System-code — that was the surface. Behind it: three thousand years of compressed intention. Commands, countermeasures, protection systems, memories.

[Code.Modify] on a god.

The Terminal gave no warning. It had stopped warning me about things that were far beyond its warning parameters.

I found the core function in eight seconds.

\`PRIMUS_CORE.exe → FUNCTION: PRESERVE\`

Not "control." Not "dominate."

\`PRESERVE.\`

I wrote a single line:

\`PRESERVE → INCL. FREEDOM TO CHOOSE\`

The avatar shuddered. Not from pain — from surprise. As if someone had told a lock that it could also open the door.

Then: still.

The avatar remained standing. Primus remained standing. But the energy behind it — the energy that had sustained the System for three thousand years — turned.

Toward the Garden.

Ready for what came next.`,
    choices: [{ text: "→ The Core Garden", next: "a6k4_kern" }],
  },

  a6k4_kern: {
    act: "ACT VI", chapter: "Chapter 44 — Core.Access()", title: "The Core Garden",
    scene: "Level 42 — the center of everything",
    conditionalFlag: "prophetErgebnis",
    textConditional: {
      besiegt_befreit: `Martin was with us. Not fighting — walking. Slightly too slowly, slightly too carefully, the way someone walks who has recently been given a body back. He said nothing for the whole descent. But when the Garden opened before us, he stopped. "I've been trying to get here for five hundred years," he said. "To destroy it." He looked at the Tree. "It's more beautiful than I imagined." He sat down by the wall. Watched. Let us work.`,
      heilung_moeglich: `Somewhere in the System's outer layers: a former librarian who had agreed to wait. To stop. To give someone else a chance at what he'd been trying to do for five hundred years. His coordinates were in the Terminal. He was still there. Waiting.`,
      default: ``,
    },
    text: `Behind it: a garden.

Not metaphorical. A real garden. Grass that glowed softly — a pale green that had no equivalent above the surface. Trees with bark like polished obsidian. A stream that reflected no light but instead seemed to *generate* it.

And in the middle: the Core-Tree.

Forty meters. Roots that ran through the walls, through the floors, through the entire structure of the Labyrinth. In the bark — carved, or grown, or simply *true* — the entire architecture of the Genesis-System. Every code-element. Every function. Every three thousand years of updates and changes and corruptions and repairs.

At the base of the tree: a woman.

She appeared to be in her thirties. Dark skin, white hair, eyes the color of deep water. She sat cross-legged on one of the roots and was reading something — a book, apparently, though closer inspection suggested the book was made of pure light.

She looked up.

"You took your time," she said.

"We had a war to finish."

"I know. I watched." She closed the light-book. Stood. "Kaito Ashford. Carrier of the Seventh Gate. Born in Tokyo in 1997, died at twenty-four years old, reborn in Aethermere three thousand years after I built a door and hoped someone would eventually walk through it."

She looked at him.

"I'm Septima," she said. "And you're the first person in three thousand years who was worth the wait."`,
    text2: `They talked for a long time.

Septima spoke. Kaito listened. Then Kaito spoke. Septima listened.

Three thousand years of waiting, condensed into one conversation.

She told him what the Genesis-System had been designed for — not control, not power. *Direction.* A guide for a world that had been formless. She told him about the six Architects, and about Primus, and about the gap between the original design and what it had become.

She told him about the price of the Seventh Gate.

"When you were born through it," she said, "you brought something the System couldn't quantify. Not power. Not knowledge." She looked at him. "Perspective. A viewpoint from entirely outside. Someone who had lived in the world this System was built in replacement of." She paused. "That's why [NULL]. The System couldn't categorize you because you didn't fit any category it understood."

"What happens now?"

"Now," she said, "you rewrite it." She looked at the Core-Tree. "You know how."

"I know the code."

"Yes."

"What I don't know," I said, "is if what I write will be right."

Septima looked at me for a long time.

"No one knows that," she said. "That's the only honest answer I can give you."

She sat back down on the root.

"But for what it's worth," she said, "Gregor trusted you. And Gregor," — and here, for a fraction of a second, something entirely human crossed her face — "was the best judge of character I've encountered in three thousand years. And I've had three thousand years of data."

I put my hands on the tree.`,
    choices: [{ text: "→ Secunda", next: "a6k5_secunda" }],
  },

  a6k5_secunda: {
    act: "ACT VI", chapter: "Chapter 45 — Secunda()", title: "The Second Architect",
    scene: "The Core Garden — the last obstacle",
    conditionalFlag: "mordecaiSchicksal",
    textConditional: {
      redemption: `"Mordecai?" I asked. Secunda's avatar flickered. "He... chose to listen. I had not expected that." Pause. "In three thousand years, that has never happened. A human who chose to change." She looked at me with something that might have been the first thing she'd felt in millennia. "You showed him something. I don't know what." "The truth," I said. "Without judgment." Secunda was silent. "I'll consider that," she said finally. That was enough.`,
      default: ``,
    },
    text: `The Core-Tree waited. But between Kaito and the moment of writing stood one more voice.

Secunda — the Second Architect, Spirit of the Living System — appeared from the Aether like a thought becoming visible. No body. Shifting light. A presence that filled the entire Garden in a way that had nothing to do with size.

"[NULL]." Not hostile. Not welcoming. Assessing.

"Secunda."

"You've come to rewrite us."

"Yes."

"We were built over three thousand years. The system you want to replace has three thousand years of data, three thousand years of adaptations, three thousand years of being the foundation that everything stands on." Pause. "Do you understand what could go wrong?"

"Yes."

"And you do it anyway."

"Yes."

Secunda was silent for a moment.

"Primus and I have disagreed for a thousand years," she said. "He wanted control. I wanted adaptation. The Update was a compromise." She looked at me. "A compromise that satisfied neither of us."

"I know."

"What you're proposing — an asking System — is not a compromise." She moved through the light. "It's a third thing. Something neither of us considered." Pause. "I find that interesting."

"Does 'interesting' mean you'll step aside?"

"'Interesting' means I'm listening." She turned to face the Tree directly. "Complete your thought. I want to hear what you'll write before you write it."

I turned to the Tree.

And began.`,
    choices: [{ text: "→ The Choice", next: "a6k6_finale" }],
  },

  a6k6_finale: {
    act: "ACT VI", chapter: "Chapter 46 — Code.Write()", title: "The Choice",
    scene: "The Core Garden — the hands on the tree",
    conditionalFlag: "finaleBeziehung",
    textConditional: {
      yuki: `The rabbit charm was in my left pocket. I thought of Yuki above, waiting, no countdown above her head for the first time. I wrote for her. Not only for her. But for her too.`,
      sera: `I thought of Sera on the rock. "This was enough." I wrote for the ones who deserved better than enough. For the ones who deserved everything.`,
      familie: `I thought of Roland saying "light." Of Elena's hand on my cheek. Of Mira demanding I hurry up and save the world. I wrote for them. All of them.`,
      allein: `Septima's message: "You are not alone. You never were." I wrote for everyone who had ever believed they were alone and been wrong about that.`,
      default: ``,
    },
    text: `The Tree. Both hands on the bark.

Cold. Warm. Alive.

It breathed — slow, deep, with the rhythm of something that has been breathing for three thousand years and isn't planning to stop.

Below, Septima sat and watched.

Roland had his hand on my shoulder — once, briefly. Then back. That was Roland. That was enough.

The Terminal for the last time:

\`\`\`
> CORE-ACCESS: ACTIVE
> System-control: AVAILABLE
>
> Instruction: You may write now.
>
> [NULL] notation:
> The System has never met
> someone who arrived here on purpose.
>
> We will see what you do with that.
\`\`\`

I thought of all of them. The whole list.

Gregor. Roland. Elena. Mira. Finn. Sera. Yuki. Akira. Emma. Dmitri. Gorrick. Ren. Rex. Veyra. Aria. Lilithia. Kross. Tertius. Aldwin. Frau Voss. Boris. Martin.

Then I thought of the people I'd never know. The ones on Level 1 who had been told their ceiling was Level 30. The ones whose blood was flagged. The ones whose class was a sentence, not an identity.

Then I wrote.`,
    choices: [
      { text: "A) \"I become part of the new System. [NULL] has served its purpose.\"",
        next: "a6k7_schreiben_A",
        alignEffect: { licht: 1, verborgenheit: 2 },
        flagEffect: { finaleWahl: "A" },
        narrativeFeedback: "The Terminal updates for the last time. Then: silence. No hum. No countdown. Kaito is, for the first time in two lifetimes, a normal person.",
      },
      { text: "B) \"I keep [NULL]. The world needs a guardian OUTSIDE.\"",
        next: "a6k7_schreiben_B",
        alignEffect: { schatten: 1 },
        flagEffect: { finaleWahl: "B" },
        narrativeFeedback: "The Terminal: \"The carrier remains outside. As always.\" — S.: 'That was to be expected. And correct.'",
      },
      { text: "C) \"I DELETE [NULL] and replace it — NULL for EVERYONE. Anyone can choose to stand outside.\"",
        next: "a6k7_schreiben_C",
        alignEffect: { licht: 2, chaos: 1 },
        flagEffect: { finaleWahl: "C" },
        narrativeFeedback: "Yuki's idea — an optional System — becomes the final consequence. Not just the SYSTEM is optional. The possibility of standing OUTSIDE now belongs to everyone.",
      },
      { text: "D) \"I go BACK. To my old world.\"",
        next: "a6k7_schreiben_D",
        flagEffect: { finaleWahl: "D" },
        narrativeFeedback: "Septima smiles. Sad. Warm. Maternal. The door opens — the office, his office, the empty energy drink cans. And beside it: the door back.",
      },
      { text: "E) \"I MERGE with the System. I become the new heart — like Septima.\"",
        next: "a6k7_schreiben_E",
        alignEffect: { licht: 2, ordnung: 1 },
        flagEffect: { finaleWahl: "E" },
        narrativeFeedback: "He placed his hands on the trunk. And flowed — like water soaking into earth. Natural. Quiet. Right.",
      },
      { text: "F) \"I DESTROY everything. No System. No new, no old. FREEDOM. Total.\"",
        next: "a6k7_schreiben_F",
        requires: { alignment: { schatten: 40 } },
        alignEffect: { schatten: 8, chaos: 5 },
        flagEffect: { finaleWahl: "F" },
        narrativeFeedback: "The Tree screamed. A sound no ear should hear. And shattered. Code by code. Leaf by leaf. Everywhere in the world — simultaneously — status windows went dark. Forever.",
      },
    ],
  },

  a6k7_schreiben_A: {
    act: "ACT VI", chapter: "Chapter 46 — Code.Write()", title: "Part of the System",
    scene: "The Core Garden — seven days",
    text: `I wrote myself in.

Not like a programmer, not like a god — like someone leaving a letter. Long, careful, in a language between Old-Aetherisch and machine code that I understood completely in this moment.

Day one: the base structure. The way the System would ask questions instead of give commands.

Day three: the exceptions. The moments when someone could say no. The guarantee that no was heard.

Day five: the limits of my own presence. Where I would stop. Where the System would continue on its own.

Day seven: my name.

An imprint, deep in the code. Not as a god. As an author. As someone who had written something and then put their name beneath it.

The Terminal, one last time: \`INTEGRATION COMPLETE. CARRIER STATUS: UPDATING.\`

Septima placed her hand on the trunk next to mine.

"It's good," she said. "You can let go."

I let go.`,
    choices: [{ text: "→ Waking", next: "a6k7_erwachen" }],
  },

  a6k7_schreiben_B: {
    act: "ACT VI", chapter: "Chapter 46 — Code.Write()", title: "The Guardian",
    scene: "The Core Garden — seven days",
    text: `I wrote the new System. Completely.

And then I wrote myself outside it.

One layer — invisible, unregistered, NULL as always — that stood between the System and its misuse. A final protocol. A guardian not in the code but beneath it.

Day four became difficult.

Not physically — the body was somewhere else by then. Mentally. The weight of everything I was writing. Every decision about life. About freedom. About what a person deserves.

Septima was quiet most of the time.

But on the fifth day she said: "You know this will be lonely."

"Yes."

"I watched for 3,000 years alone."

"I know."

"That's not a comparison meant to reassure you."

"I know that too."

She was quiet again. Then, barely audible: "I'm glad you know."

I kept writing. Seven days.`,
    choices: [{ text: "→ Waking", next: "a6k7_erwachen" }],
  },

  a6k7_schreiben_C: {
    act: "ACT VI", chapter: "Chapter 46 — Code.Write()", title: "NULL for Everyone",
    scene: "The Core Garden — seven days",
    text: `Yuki's idea was simple.

Not simplistic. *Simple* — the way all truly good ideas are simple when you hear them. A System that asks instead of commands. That offers instead of forces.

I wrote freedom as the default.

That was the hardest line. Not technically — the consequence. Every person in Aethermere would wake up with no level, no class, no status. They would choose whether they wanted it.

Many would choose it. Some would not.

I spent three days writing the protection mechanisms for those who wanted to choose nothing. That they wouldn't be forgotten. That someone would look after them.

Day six. My hands on the trunk — or what was left of them in this state — began to tremble.

Tertius was there the entire time. Said nothing. But once, briefly: "You're doing it right."

That was enough.

Day seven: finished.

The System — the new System — opened its first question:

\`DO YOU WANT A LEVEL? [YES] [NO] [MAYBE LATER]\`

I laughed. Somewhere between exhaustion and real laughter.

"Maybe later," I wrote. Then let go.`,
    choices: [{ text: "→ Waking", next: "a6k7_erwachen" }],
  },

  a6k7_schreiben_D: {
    act: "ACT VI", chapter: "Chapter 46 — Code.Write()", title: "Homecoming",
    scene: "The Core Garden → the gap between worlds",
    text: `That was the most complicated line.

Not the code for the new System — I had that in three days. That was craft.

The most complicated was: the way back.

A gap. Narrow, precise, a permanent connection between Aethermere and a small apartment in Shibuya. Not large enough to walk through. Large enough for... consciousness. For the part of me that was still Kaito Wake.

Septima watched me write.

"You know you'll never be fully here. And never fully there."

"I know."

"That sounds like a punishment."

"That sounds," I said, "like the only honest answer."

She was quiet. Then: "That's the most honest thing you've ever said."

Day seven. I wrote the last parameter.

The gap opened — small, warm, smelling of Tokyo rain and coffee and old paper.

I looked through it.

Then I wrote: the gap stays open. Forever. Both ways.

Then I let go. And fell into both at once.`,
    choices: [{ text: "→ Waking", next: "a6k7_erwachen" }],
  },

  a6k7_schreiben_E: {
    act: "ACT VI", chapter: "Chapter 46 — Code.Write()", title: "The Heart",
    scene: "The Core Garden — merging",
    text: `There was no boundary between me and the tree.

Somewhere between day three and day four it had stopped existing. My hands were in the trunk. The trunk was in my hands. The System — new, still malleable, waiting — breathed with me.

That was when I got afraid.

Not of death. Of forgetting. Of the version of me that would exist after seven days — was that still Kaito Wake? Was that still Kaito Ashford? Or was it a third thing, something that knew the names but no longer felt the weight?

"Septima."

"I'm here."

"I'm losing myself."

"I know." A pause. "That's the price."

"Tell me something concrete about myself. Something specific."

She thought. Then: "The first thing you did in your second life was cry. And then you immediately opened the Terminal. Because you didn't know what else to do."

That was true.

That was so completely true that it held me.

I wrote the last day with that weight in me. Kaito Wake, who had cried and then opened the Terminal. That was enough.`,
    choices: [{ text: "→ Waking", next: "a6k7_erwachen" }],
  },

  a6k7_schreiben_F: {
    act: "ACT VI", chapter: "Chapter 46 — Code.Write()", title: "Zero Point",
    scene: "The Core Garden — destruction",
    text: `I didn't write.

I deleted.

Line by line. The Genesis-System, three thousand years old, built by six Architects — seven, counting Septima — I deleted it the way a programmer cleans up a failed build.

Septima: "You won't survive this."

"Neither will the System."

"I meant — you. As a person."

"I know what you meant."

She was quiet. Then, very quietly: "I won't try to stop you."

"I know."

"But I'm asking once. Only once. Is this for them? Or for yourself?"

I stopped.

That was the right question. The only question that mattered.

"I don't know," I said finally. "Honestly, I don't know anymore where one ends and the other begins."

Septima: "That's the most honest answer I've received. From someone who did this."

"There were others before me?"

"There was always someone who tried."

"And?"

"You're the first who made it this far."

I deleted the last line.

The System collapsed. Not dramatically. Just: quietly.`,
    choices: [{ text: "→ Waking", next: "a6k7_erwachen" }],
  },

  a6k7_erwachen: {
    act: "ACT VI", chapter: "Chapter 47 — Reboot()", title: "Waking",
    scene: "Unknown location — the day after",
    conditionalFlag: "finaleWahl",
    textConditional: {
      A: `In the System's new architecture, somewhere very deep, a line: written by a person, signed with their name. Not as a god. As an author. It would be found in three hundred years by a researcher who didn't know what she was looking at, and she'd think: this was a human being. And she'd be right.`,
      B: `Above the world — not physically, but in the code — a presence. Invisible, unregistered. NULL, as always. Watching. Not ruling. Just: watching. Making sure the questions were really being asked.`,
      C: `Somewhere in Aethermere, a person woke up and their System-window showed: DO YOU WANT A LEVEL? YES / NO / MAYBE LATER. They stared at it for a long time. Then selected: MAYBE LATER. The first person to do so in three thousand years. They did not know that.`,
      D: `In Shibuya, in a small apartment: the Terminal opened. One message. No sender. "Come back sometime. The door goes both ways." And on the other side of the gap: Aethermere. Waiting. Not urgently. Just: there.`,
      E: `The System breathed. Slow, deep, with the rhythm of something that is learning how to be alive. From inside: a presence. Quiet. Curious. Learning what it meant to exist not as a law but as a companion.`,
      F: `Silence. The first silence in three thousand years. No status window. No level. No System. Just: people. And the question of what they'd do with the freedom they'd never asked for.`,
      default: ``,
    },
    text: `"...How long?"

"Three days. You slept for three days."

"And the world?"

"...Changed. Permanently."

He looked out the window. The world — his world. But different. The light warmer. The colors tinged with something that hadn't been there before. Or had been there before and had been suppressed.

Finn sat by the bed. Eyes red — from crying or lack of sleep or both; with Finn it was hard to tell.

"You're an idiot," said Finn.

"Probably."

"An absolute idiot."

"Finn."

"WHAT."

"It worked."

A pause.

Then Finn laughed — the laugh, the wide, indestructible, absolutely Finn laugh that Kaito had first heard at age four in a village that no longer existed exactly as it had been, but which existed in every person who had come from it.

"Yeah," said Finn. "It worked."`,
    choices: [{ text: "→ Epilogue", next: "a6k8_endings" }],
  },

  a6k8_endings: {
    act: "EPILOG", chapter: "Epilogue — What Comes After", title: "What Comes After",
    scene: "The world — some months later",
    text: `The world changed.

Not all at once. Not dramatically. Slowly, the way real things change — in small decisions, repeated conversations, gradual shifts in what was considered possible.

The question of what comes next — that depends on what you wrote.`,
    choices: [
      { text: "ENDING 1 — \"The New God\" (Part of the System)",
        next: "ending_1",
        requires: { flag: { finaleWahl: "E" } },
      },
      { text: "ENDING 2 — \"Eminence in Shadow\" (The Guardian)",
        next: "ending_2",
        requires: { flag: { finaleWahl: "B" } },
      },
      { text: "ENDING 3 — \"The True Hero\" (Letting go of NULL)",
        next: "ending_3",
        requires: { flag: { finaleWahl: "A" } },
      },
      { text: "ENDING 4 — \"The Lone Wolf\" (The Outsider)",
        next: "ending_4",
      },
      { text: "ENDING 5 — \"Void Demon King\" (Total Destruction)",
        next: "ending_5",
        requires: { flag: { finaleWahl: "F" } },
      },
      { text: "ENDING 6 — \"Return\" (Going Home)",
        next: "ending_6",
        requires: { flag: { finaleWahl: "D" } },
      },
      { text: "ENDING 7 — \"System Delete\" (NULL for Everyone)",
        next: "ending_7",
        requires: { flag: { finaleWahl: "C" } },
      },
    ],
  },

  ending_1: {
    act: "EPILOG", title: "ENDING 1 — The New God",
    scene: "The Core Garden — and everywhere",
    text: `They called it the Age of the Warm System.

Not a divine name — people just started calling it that, in taverns and market squares and letters between cities, because that was what it felt like. The System had always been there. Now it was *different*. Still there. Still organizing. But with something in it that hadn't been there before.

The Chroniclers would write, three hundred years later: *In the 3,001st year of the Genesis-System, an anomaly was recorded in the Core-Tree's code. A single integrated consciousness, non-System in origin, that had merged with the architecture and begun to function as a kind of living correction mechanism. It flagged inconsistencies. It caught places where the System was being used as a weapon. It didn't rule — but it watched.*

They never found his name.

Septima was there sometimes, in the Garden. She'd sit on the same root and read the same light-book and say things like "your syntax is improving" and "you still have a tendency to over-document" and "Gregor would have been proud of the paragraph structure."

The System breathed.

From inside: a presence. Quiet. Learning. Not a god — something else. Something that had once been a programmer who cried and then opened his Terminal, and had decided that was enough to begin.`,
    systemBox: {
      title: "ENDING 1 — THE NEW GOD",
      lines: [
        "> NULL-carrier: INTEGRATED",
        "> System status: REWRITTEN",
        "> New classification: LIVING",
        ">",
        "> Final Terminal entry:",
        "> 'System, online.'",
        "> 'Hello again.'",
        "> '...Hello.'",
      ]
    },
    choices: [{ text: "→ Post Credits", next: "post_credits" }],
  },

  ending_2: {
    act: "EPILOG", title: "ENDING 2 — Eminence in Shadow",
    scene: "Aethermere — the world after",
    text: `The Chroniclers would note, years later: *In the final years of the Genesis-System, a figure appeared who left no record in any System-registry. No level. No class. No name in any census. And yet: somehow, always exactly where something was about to go wrong.*

The world changed. The new System asked instead of commanded. Levels became tools, not identities. Classes became offers, not sentences.

And when it didn't — when someone found a gap, misused the old loopholes, tried to rebuild the old power structures in the new framework — a figure appeared. Brief. Leaving no trace. The problem resolved itself.

Nobody knew who.

Nobody ever found out.

In a certain tower that no map showed: a Terminal. One running process.

\`\`\`
> NULL-PROTOCOL: ACTIVE
> Carrier: OPERATIONAL
> Status: WATCHING
> Location: NONE / EVERYWHERE
>
> Last message:
> To: Finn Harker
> "Still doing fine. Don't worry.
>  I said I'd come back.
>  I just didn't say when."
> — K.
\`\`\``,
    systemBox: {
      title: "ENDING 2 — EMINENCE IN SHADOW",
      lines: [
        "> NULL remains NULL.",
        "> The world doesn't know.",
        "> That's the whole point.",
        ">",
        "> [Affinity: Finn] — Message received.",
        "> [Affinity: Sera] — Message received.",
        "> [Affinity: Yuki] — Message received.",
        ">",
        "> They know.",
        "> They say nothing.",
        "> That's friendship.",
      ]
    },
    choices: [{ text: "→ Post Credits", next: "post_credits" }],
  },

  ending_3: {
    act: "EPILOG", title: "ENDING 3 — The True Hero",
    scene: "Millheim — rebuilt, a year later",
    text: `The status window that appeared the morning after showed:

\`\`\`
> KAITO ASHFORD
> Level: 1
> Class: HUMAN
> System affinity: NORMAL
>
> NOTE: Previous NULL classification
> has been integrated into standard
> System architecture.
> No anomaly detected.
> Carrier: NORMAL.
\`\`\`

Level 1. Class: Human. Normal.

For a moment he'd sat there and looked at it.

Then he'd laughed. Real, surprised — the laugh he didn't have often enough.

Level 1. He was the person who had rewritten the Genesis-System and now had a Level 1 status window telling him he was normal.

Gregor would have loved that.

He went home. Not to the Tower, not to Aetheria Prime — to what had been rebuilt from Millheim. Different now, larger, with people who had come back and people who had never left and the bakery that Boris had reopened with typical ceremony.

Finn was there. Elena. Mira, who had already started training and would be better than Kaito within three years, which was fine.

Roland was level 35. He'd been training every morning. The first morning after the curse was lifted, he'd gone out at dawn — same as always — and trained with the form Kaito remembered from childhood.

But afterwards he hadn't sat by the fence for seven minutes looking at nothing.

He'd gone in and helped make breakfast.`,
    text2: `The world didn't call him a hero. It didn't know to.

That was the design. Kaito Ashford — Level 1, Class: Human — was in no history book, no Chronicler's record, no System-log. The rewrite had been credited to "The Seventh Gate Protocol" — an automated process, a System-function, not a person.

He was fine with that.

He sat at the kitchen table in the house that wasn't Millheim but felt like it, and read page 47 of Gregor's journal one more time.

*The Seventh waits for the one who can read what no System can read.*

He closed the journal.

He'd read it. He'd done what it asked.

Now he was Level 1 and there was bread and Finn was being too loud in the next room and Mira was demanding to know if she could fight monsters yet and Elena was singing and Roland was quietly, without any announcement, making coffee.

That was enough.

That was exactly enough.`,
    systemBox: {
      title: "ENDING 3 — THE TRUE HERO",
      lines: [
        "> KAITO ASHFORD",
        "> Level: 1",
        "> Class: HUMAN",
        "> NULL: INTEGRATED / DISSOLVED",
        ">",
        "> Terminal final entry:",
        "> 'Close terminal?'",
        "> 'Yes.'",
        "> 'Are you sure?'",
        "> 'Yes. I have somewhere to be.'",
      ]
    },
    choices: [{ text: "→ Post Credits", next: "post_credits" }],
  },

  ending_4: {
    act: "EPILOG", title: "ENDING 4 — The Lone Wolf",
    scene: "The road — anywhere",
    text: `The world changed.

He saw it from the road.

Not from a tower, not from a city, not from a home he'd settled in — from the road, the way you see a painting when you're standing far enough back to see the whole thing.

The new System asked questions. Slowly, haltingly, with the unsureness of something learning to be gentle. It wasn't perfect — it would take decades to work out all the old habits, all the places where the code still defaulted to command instead of offer. But it was asking.

He walked. City to city. Not hiding — just not stopping.

The Terminal was mostly quiet now. Occasionally: messages.

Finn: "WHERE ARE YOU. Mira wants to know. (I want to know too but I'm being cool about it.)"

Sera, three weeks later: "Found a fire-affinity child in Drak'Moor. Untrained. Thought of you. — This is not a request for help. — Okay it's a request for help."

Yuki: two words. "Come back."

He wrote back to all of them. Always.

He just didn't stop.

Not yet.

Some people carry things quietly, the way Roland had taught him — not because it's right, but because it's what they know how to do, and because someday they'll put the thing down and it will mean more for having been carried so long.

He walked.`,
    systemBox: {
      title: "ENDING 4 — THE LONE WOLF",
      lines: [
        "> NULL-carrier: ACTIVE / MOBILE",
        "> Location: [THE ROAD]",
        "> Destination: [PENDING]",
        ">",
        "> Messages: 47 unread",
        "> (All from: Finn, Sera, Yuki,",
        ">  Gorrick, Roland, Elena, Mira)",
        ">",
        "> Status: Not lost.",
        "> Status: Not found.",
        "> Status: On the way.",
      ]
    },
    choices: [{ text: "→ Post Credits", next: "post_credits" }],
  },

  ending_5: {
    act: "EPILOG", title: "ENDING 5 — Void Demon King",
    scene: "Aethermere — the world after the silence",
    text: `The Chroniclers called it "The Day of the Null."

The System collapsed in eighteen hours. Not dramatically — the Chroniclers would note that too, later, with a kind of surprised precision: *it was quiet. The status windows went dark first. Then the skills stopped working. Then the dungeons opened — not as disasters, but simply: as caves. Full of things that had been locked in there, returning to a world that no longer had a framework for them.*

Seven million people with System-dependent skills lost them overnight.

Four hundred thousand survived in the first year by learning, for the first time, what their bodies could do without numbers attached.

The rest learned. Slower. Harder. But they learned.

Lilithia built the first post-System council. Celeste wrote the first post-System charter. Tertius — awake, after three thousand years, in a world finally free of the thing he'd helped build — spent five years talking to every political leader on the continent and saying, essentially: *start over. It can be done. I know. I've done it once before.*

In a corner of the world that no map showed, a figure sat on a roof and watched the stars and didn't open the Terminal because the Terminal had nothing to say.

The stars were still there.

The sky was still there.

People were still there.

That had to be enough.

Some days it was.`,
    systemBox: {
      title: "ENDING 5 — VOID DEMON KING",
      lines: [
        "> SYSTEM: OFFLINE",
        "> All processes: TERMINATED",
        "> NULL-carrier: [ACTIVE]",
        ">",
        "> The world is free.",
        "> The world is lost.",
        "> These are not opposites.",
        ">",
        "> Finn is alive.",
        "> Sera is alive.",
        "> Yuki is alive.",
        "> Roland is alive.",
        ">",
        "> That's something.",
        "> Start with that.",
      ]
    },
    choices: [{ text: "→ Post Credits", next: "post_credits" }],
  },

  ending_6: {
    act: "EPILOG", title: "ENDING 6 — Return",
    scene: "Shibuya, Tokyo — his apartment",
    text: `The apartment smelled like old air and leftover takeout and the particular silence of a space that had been waiting.

His desk. His monitors — dark. Three empty energy drink cans in a precise triangle he didn't remember arranging.

On the desk: a journal. Not Gregor's — his own. New. Blank pages.

He sat down.

Opened it. Looked at the first blank page.

Then he began to write.

Not code. Not analysis. Not a Terminal entry.

A story. Beginning with: *I died at twenty-four in an office in Tokyo, and I woke up as a baby in another world, and for the next eighteen years I tried to figure out what I was supposed to do about that.*

He wrote for a long time.

Outside: Shibuya. Traffic. Noise. The particular sound of a city that has no idea what had just happened on the other side of a very narrow gap in reality.

Occasionally, the Terminal opened — soft, quiet, not demanding. On the other side of the gap: Aethermere. The new System, asking its first questions. Finn's voice, once, very clearly: "You okay over there?"

He wrote back: "Yes."

He kept writing.

The gap between the worlds stayed open. Both ways. He'd written it that way.

Someday he'd go back.

For now: the blank page. The pen. The story that had to be written by the person who had lived it.

That was enough.`,
    systemBox: {
      title: "ENDING 6 — RETURN",
      lines: [
        "> DIMENSIONAL GAP: STABLE",
        "> Direction: BIDIRECTIONAL",
        ">",
        "> Shibuya, Tokyo: PRESENT",
        "> Aethermere: PRESENT",
        ">",
        "> Status: WRITING",
        ">",
        "> Last message from Finn:",
        "> 'You okay over there?'",
        "> Response: 'Yes.'",
        "> '...Good.'",
        "> '(The world is different now.)'",
        "> '(Better?)'",
        "> 'Ask me again in ten years.'",
      ]
    },
    choices: [{ text: "→ Post Credits", next: "post_credits" }],
  },

  ending_7: {
    act: "EPILOG", title: "ENDING 7 — System Delete",
    scene: "Aethermere — the new world",
    text: `The morning after, the world woke up and asked a question.

Not a dramatic question. Not in fire or thunder. A small window, appearing above every person, everywhere in Aethermere simultaneously, with the same text:

\`DO YOU WANT A LEVEL?\`

\`[YES] [NO] [MAYBE LATER]\`

The Chroniclers would record that forty-three percent selected YES immediately. Thirty-one percent selected NO. Twenty-six percent selected MAYBE LATER and then spent the following weeks thinking about it very carefully.

The ones who selected MAYBE LATER, the Chroniclers would write, turned out to be the most interesting people of the next century.

Gorrick selected NO. He had never needed a level for his craft. He continued making the best weapons in Aethermere, and they were still the best because of what he knew, not what the System said about him.

Ren selected YES. He stood in the morning light, solid and real and present in a way he hadn't been in three hundred years, and watched the number appear above his head — Level 1, Class: Unknown, Beginning — and thought: *that's exactly right.*

Lilithia, speaking at the first post-System Council, said: "We have been told for three thousand years what we were. Now we are being asked. The question itself is the change."

And in a room that smelled of old books and something like morning:

Finn, reading the question above his own head.

Looking at it for a long time.

Then, grinning — the wide, impossible grin:

"Maybe later."`,
    text2: `Kaito found Yuki at the old meeting point — a hill outside the city, where they'd sometimes gone when the Academy had been too loud and the world too much.

She was looking at the sky.

No countdown.

Just sky.

"Did you know it would be like this?" she asked.

"No," he said. "I wrote for what I hoped. Not what I knew."

"Is there a difference?"

"I think so. I think hope is the part where you can be wrong." He sat next to her. "Knowledge isn't brave. Hope is brave."

Yuki thought about that.

Then she reached into her pocket and held out the rabbit charm.

"I said until tomorrow," she said. "It's been three days."

He took it.

Looked at it.

"Keep it a little longer?" he asked.

She looked at him with the look that meant: *you're an idiot, and I mean that in the warmest possible way.*

"Okay," she said. "A little longer."`,
    text3: `Below the hill: the world.

Different now. The status windows smaller, less urgent. People looking at them with curiosity instead of anxiety — *this is a tool, not my identity.* Classes being chosen instead of assigned. Some people choosing none.

Children being born into a System that would ask them, at some point, instead of telling them.

Gregor had written, on page 47: *The Seventh waits for the one who can read what no System can read.*

Kaito had read it. He'd read what the System couldn't read — the weight of things. The cost of things. The value of a wooden sword and a cough in a Tuesday evening and a man who trained at dawn because he'd forgotten how to stop.

He'd written it into the System.

Not as data.

As memory.

*This is what a person is,* he'd written, deep in the code. *Remember that.*

The System, for the first time in three thousand years, said:

\`ACKNOWLEDGED.\``,
    systemBox: {
      title: "ENDING 7 — SYSTEM DELETE",
      lines: [
        "> DO YOU WANT A LEVEL?",
        "> [YES] [NO] [MAYBE LATER]",
        ">",
        "> NULL-carrier: DISSOLVED / EXPANDED",
        "> NULL is now: EVERYONE'S OPTION",
        ">",
        "> The System asks.",
        "> The world answers.",
        "> That was always the point.",
        ">",
        "> Final Terminal entry:",
        "> 'Log off?'",
        "> 'Not yet. But soon.'",
        "> '...Good answer.'",
      ]
    },
    choices: [{ text: "→ Post Credits", next: "post_credits" }],
  },

  post_credits: {
    act: "EPILOG", title: "Post-Credits",
    scene: "Millheim — the rebuilt village",
    text: `Somewhere in Millheim — rebuilt, different, itself:

A rock by a river. Two people. The sounds of a village going about its life.

Gorrick, from somewhere behind: "I TOLD you the support beam needed to be THICKER."

Finn, from somewhere else: "I MEASURED it—"

"You measured it WRONG—"

"I USED YOUR RULER—"

"MY RULER IS CORRECT. YOUR MEASUREMENT IS WRONG—"

Mira, cutting through both of them: "Opa Gorrick says the beam is wrong. Finn, you measured it wrong."

A pause.

Finn: "...Did she just call him 'Opa Gorrick'?"

Gorrick, quietly: "She started doing that last week." An even quieter pause. "I have not objected."

The rock by the river.

Two people.

Silence that needed no words.

The river moved.

The world moved.

That was enough.`,
    systemBox: {
      title: "— THE END —",
      lines: [
        ">",
        "> Reborn in Shadow:",
        "> Chronicles of the Forgotten One",
        ">",
        "> Thank you for playing.",
        ">",
        "> [NULL] — offline.",
        ">",
      ]
    },
    choices: [{ text: "→ Back to Title", next: "__title__" }],
  },

};
