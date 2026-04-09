// AKT I English Translation
// Notes:
// - Kaito's inner voice: clinical observations + dry humor
// - Elena: warm, slightly old-fashioned, never saccharine
// - Roland: short sentences, soldier's economy of words
// - Gregor: storyteller's cadence, pauses are part of his voice

export const AKT_I_EN = {

  a1_geburt: {
    title: "Birth",
    chapter: "Chapter 1 — NULL.Init()",
    scene: "Village of Millheim, Valtheris — Year 897 of the System",
    conditionalFlag: "letzterGedanke",
    textConditional: {
      reue: `The first thing I felt in my second life: relief. As if some part of me had known it was getting a second chance to do something right.`,
      hingabe: `The first thing I felt: determination. The same as in the last moment of the bug fix. Just with more time.`,
      einsamkeit: `The first thing I felt: a voice. Warm, close, meant entirely for me. Elena was singing. No one had ever sung for me like that.`,
      akzeptanz: `The first thing I felt: stillness — the good kind. The kind that says: it's okay. You've arrived.`,
      default: ``,
    },
    text: `I was born on a Tuesday.

I know this because my new mother told me, years later, when I asked. She had the date written in a small book she kept under the loose floorboard in the kitchen.

»A Tuesday in the first snow,« she said. »The midwife said it was a good sign. I just remember being very tired.«

My new father stood by the window. I know he cried, because I saw him wipe his eyes with the back of his hand and then look at the wall as if it had personally offended him.

My new name was Kaito Ashford.

I kept the first name. It was mine. The last name came with the family.

The family was: Elena. Roland. And this room, in a village so small it didn't appear on most maps, in a world built on a system I had spent my previous life writing.

The first thing I did in this world was cry.

That seemed appropriate.`,
    text2: `The second thing I did was open a terminal.

Not deliberately. I didn't know what was happening — I was, technically speaking, approximately forty-seven centimeters long and not yet capable of intentional anything.

But something in me reached, and the world answered.

\`\`\`
> VOID-TERMINAL v0.1 — INITIALIZATION
>
> Carrier detected: [KAITO WAKE → KAITO ASHFORD]
> Status: INCARNATED
> System-registration: NONE
> System-visibility: NULL
>
> [Code.Read] — ACTIVE
>
> Welcome.
> You can see what this world is made of.
> What you do with that — that's up to you.
\`\`\`

I stared at the terminal.

The terminal stared back.

Elena sang the old lullaby, the one she always sang, the one she didn't know came from somewhere older than she was.

I fell asleep.`,
    choices: [{ text: "→ The first night", next: "a1_erste_nacht" }]
  },

  a1_erste_nacht: {
    title: "The First Night",
    chapter: "Chapter 1 — NULL.Init()",
    scene: "Ashford House, Millheim — Night",
    text: `The house was small.

Two rooms. A fireplace. A window that let in more cold than it should have. A wooden cradle that Roland had made himself, badly, with the hands of a man better suited to swords than carpentry.

Elena sat by the fire and fed me and sang.

Roland slept in the chair. He had tried to stay awake. He hadn't managed. His sword was propped against the wall. Even in sleep, it was close.

Outside: the first snow of winter. The village of Millheim, all five hundred of it, already dark and quiet.

I lay in the bad cradle in the small house and catalogued everything.

The system: everywhere. Over every person, animal, and object — translucent status windows, invisible to everyone except me. Roland: Level 34, Class: Warrior. Elena: Level 18, Class: Healer. The midwife, leaving now, stamping snow off her boots: Level 7, Class: Midwife.

Me: nothing. No window. No level. No class.

[NULL].

I didn't know yet if that was a gift or a curse.

I suspected: both.`,
    choices: [{ text: "→ Elena's lullaby", next: "a1_schlaflied" }]
  },

  a1_schlaflied: {
    title: "Elena's Lullaby",
    chapter: "Chapter 1 — NULL.Init()",
    scene: "Ashford House — deep night",
    text: `The lullaby had no name.

Elena had learned it from her mother, who had learned it from hers, stretching back into a past no one remembered. It was just *the song* — the one you sang when things were hard and needed to be softer.

She sang it badly. The melody wandered. The words were from a language she didn't recognize and had never learned to understand.

That language was Alt-Aetherisch. The oldest written form of the world's first tongue.

The words, translated, meant roughly: *you are here, you are seen, the dark is only dark until it isn't.*

I know this because I could read them.

I was three weeks old and I was parsing an ancient lullaby in my crib.

That was, in retrospect, a sign.`,
    choices: [{ text: "→ The first Tuesday", next: "a1_gregor_erste_begegnung" }]
  },

  a1_gregor_erste_begegnung: {
    title: "The Man with the Stories",
    chapter: "Chapter 2 — Familie.Load()",
    scene: "Gregor's house, Millheim — Age: 4 months",
    text: `Gregor Sylvaine was sixty-eight years old, coughed too often, and had the eyes of a man who had seen too much and thought carefully about whether that was a good thing.

He came every Tuesday.

Elena opened the door, he came in, sat in the same chair, and told stories — not to the parents. He told them to the baby. That was, he explained to no one, because babies listened best. They couldn't argue.

Kaito listened.

Not the way a baby listens — with that open, empty face that processes novelty. He listened with focus. Attention. Analyzing Gregor's voice the way a program searches for patterns.

He found patterns.

Gregor's stories had no heroes. They had people who made mistakes and lived with them. A king too proud to ask for help. A sorceress who lost her power and discovered she was more without it. A star that was smaller than all the others.

These weren't children's stories. These were... memos. Encoded messages, dressed up as tales.

One evening — Gregor had just finished a long story about a princess who saved the wrong kingdom and forgot the right one — Kaito raised his hand.

Not reflexively. Deliberately. He raised his hand, the way you raise it when you have a question.

Gregor saw it.

No shock. No *that's strange for a baby*. He just looked at the small hand and nodded, as if confirming a suspicion he'd had for a while.

»Yes,« said Gregor. »I know.«

He stayed another hour. And this time told the stories differently — slower, more detailed, as if speaking to someone who understood.

When he left, he said to Elena: »He's an unusual child.«

Elena: »I know.«

»Good.« He put his hat on. »Then you're well matched.«`,
    choices: [{ text: "→ The first year passes", next: "a2_familie_montage" }]
  },

  a2_familie_montage: {
    title: "Family Life",
    chapter: "Chapter 2 — Familie.Load()",
    scene: "Ashford House — Age: 0-6 months",
    text: `The first year.

Roland trained every morning before sunrise. Sword forms in the yard, regardless of season. His left leg gave him trouble — an old injury, he never said from where — but he didn't stop. Not once.

Elena healed. Not professionally — just quietly. Neighbors with headaches. Farmers with pulled muscles. She asked nothing in return. This was who she was.

The village: small, warm, collective in the way that villages are when winters are hard. People knew each other. People watched out for each other. People knew everyone else's business and mostly pretended not to.

And me.

I grew. Faster than anyone around me realized, because the body grew at a normal baby rate and the mind behind it was running at a rather different pace.

By month three I had memorized every face in Millheim.

By month five I had catalogued the System-levels of everyone who came within [Code.Read] range.

By month six I said my first word.`,
    choices: [{ text: "→ The first word", next: "a1_erstes_wort" }]
  },

  a1_erstes_wort: {
    title: "The First Word",
    chapter: "Chapter 2 — Familie.Load()",
    scene: "Ashford Kitchen — Age: 6 months",
    text: `Six months old.

Normal first words, in the village of Millheim, were things like: *mama*, *papa*, *no*, *more*.

I said: »System.«

Clear. Deliberate. Looking at the status window hovering above the wandering merchant who had stopped to sell cloth.

The merchant hadn't heard it. He was haggling.

Elena had heard it. She stood very still with a bowl of porridge in her hands.

Roland, who had been sharpening his sword, stopped.

The word hung in the air.

I realized immediately that this had been an error. The word was too specific. Too correct. A six-month-old didn't say *system*.

I quickly evaluated my options.

Option A: Say it again. Double down. 

Option B: Cry. 

Option C: Look confused, as if I had merely sneezed in a peculiar direction.

I went with C.

Roland and Elena exchanged a look that I would learn to recognize over the years. The look that said: *we know this child is not what we expected, and we are still deciding how we feel about that.*

What would you have done?`,
    choices: [
      { text: "A) CAREFUL: Show subtle signs — reach for books, imitate complex movements.",
        next: "a1_wanderhaendler",
        flagEffect: { kindheitsVerhalten: "vorsichtig" },
        alignEffect: { ordnung: 1 },
        affinityEffect: { gregor: 5, elena: 5 },
        narrativeFeedback: "Gregor leans forward, raises a finger — about to say something. Then just smiles. Elena watches with an expression she hasn't found a name for yet.",
      },
      { text: "B) CURIOUS: Reach for books, process information visibly, react to system windows.",
        next: "a1_wanderhaendler",
        flagEffect: { kindheitsVerhalten: "neugierig" },
        alignEffect: { licht: 1 },
        affinityEffect: { gregor: 10, elena: 5 },
        narrativeFeedback: "Gregor leans forward, raises a finger. Then just smiles. Elena watches with an expression she hasn't found a name for yet.",
      },
      { text: "C) OPEN: Show clearly superhuman intelligence. Speak full sentences at eight months.",
        next: "a1_wanderhaendler",
        flagEffect: { kindheitsVerhalten: "offen" },
        alignEffect: { licht: 1 },
        affinityEffect: { elena: 10, roland: 10 },
        narrativeFeedback: "Roland stops mid-sharpening. Looks at his son — really looks, not the sparring partner. Says nothing. But his shoulders — always tense — ease for a moment.",
      },
    ]
  },

  a1_wanderhaendler: {
    title: "The Travelling Merchant",
    chapter: "Chapter 2 — Familie.Load()",
    scene: "Ashford House — Age: 8 months",
    conditionalFlag: "kindheitsVerhalten",
    textConditional: {
      vorsichtig: `I watched him carefully. Catalogued everything. Said nothing that would alarm anyone. That, I had decided, was the strategy: observe first, act later.`,
      neugierig: `I couldn't help it. The merchant's status window was fascinating — Class: Merchant, but with a hidden secondary skill labeled [Road-Reader]. I had never seen that before.`,
      offen: `I asked Elena what the man sold. Out loud. In a full sentence. Elena's hand tightened on the bowl.`,
      default: ``,
    },
    text: `The merchant came every spring.

A large cart, an old horse, a coat that had seen better weather. He sold cloth, spices, needles, news.

I was watching from Elena's arms when he came through the door.

His status window: Level 12, Class: Merchant. Secondary: [Road-Reader LV 3] — a skill for finding safe routes through dangerous terrain.

I stored this.

Not because it was immediately useful. Because everything was potentially useful. That was the lesson of my previous life — you never knew which data point would matter.

Roland watched the merchant with the professional wariness of a man who had learned not to trust strangers. Elena chatted. The merchant sold a length of blue cloth that Elena couldn't afford and bought anyway.

I watched.

Millheim was small. But it was connected to a larger world. Through merchants. Through news. Through the System that linked everyone to everything.

And somewhere in that larger world was the reason Septima had sent me here.

I didn't know what it was yet.

I was eight months old.

I had time.`,
    choices: [{ text: "→ Code.Read — First use", next: "a3_code_read" }]
  },

  a3_code_read: {
    title: "Code.Read — First Application",
    chapter: "Chapter 3 — System.Scan()",
    scene: "Ashford Garden — Age: 14 months",
    text: `Fourteen months.

I could walk. Badly. With the determined wobble of someone who had decided this was happening regardless of what the physics suggested.

The garden was small. A vegetable patch. A fence. A tree that was slightly too large for its surroundings, as if it had grown here before the fence had opinions about it.

I sat in the grass and opened [Code.Read] deliberately for the first time.

Before this moment, it had been automatic — information arriving whether I wanted it or not. Like a radio you can't turn off, always picking up the world's signal.

Now I chose.

And the world — answered.

Every plant, every stone, every insect: labeled. Not just name and level. *Structure.* The code beneath the surface. The way the System had classified and categorized and organized the fundamental fabric of existence.

The tree: [Age: 47 years. Growth rate: 94% of optimal. Root depth: 3.2m. System classification: Environmental Object, Non-Interactive.]

A butterfly: [Species: Common Blue, Aethermere subspecies. Flight skill: LV2. Status: Calm. System classification: Fauna, Passive.]

Me: [NULL. NULL. NULL.]

I sat in the grass for a long time.

Then I reached out and touched a flower.

The code pulsed — just once, warm, as if acknowledging the contact.

*Hello,* it seemed to say.

*Hello,* I thought back.`,
    choices: [{ text: "→ The family in code", next: "a3_familie_scan" }]
  },

  a3_familie_scan: {
    title: "Family in Code",
    chapter: "Chapter 3 — System.Scan()",
    scene: "Ashford House — Age: 14-16 months",
    text: `After the garden came the house.

After the house came the people.

I scanned my family with [Code.Read] the way a child learns faces — carefully, repeatedly, with a kind of reverent attention.

**Elena Ashford. Level 18. Class: Healer.**
Wild magic affinity: *latent* (unactivated). A healer who didn't know her healing had roots outside the System. The warmth in her touch wasn't just training. It was something older.

**Roland Ashford. Level 34. Class: Warrior.**
Skills: [Iron Will LV 5]. [Sword Mastery LV 7]. [Cursed — ACTIVE].

I stopped.

Cursed.

I read it again.

[Curse of the Broken Blade: Applied by System Authority. Duration: Until death or dissolution. Effect: Level progression halted at 34. Reason: Classified.]

Level 34.

A man who had trained every morning for years, whose technique was flawless, whose dedication was absolute — permanently halted. By the System. For a reason that was marked: *classified.*

I looked at my father across the breakfast table.

He ate his porridge. He watched Roland, straight-backed and unhurried and carrying a weight I now understood he carried alone.

I filed this under: *things that will matter later*.

All of them.`,
    choices: [{ text: "→ Mira's birth", next: "a4_mira_geburt" }]
  },

  a4_mira_geburt: {
    title: "Siblings",
    chapter: "Chapter 4 — Error.Log()",
    scene: "Millheim — Age: 2 years, 9 months",
    text: `Two years and nine months old.

I had learned to walk, talk (carefully, at an appropriate rate), read (Elena's books, when she thought I was sleeping), and pretend to not understand things I understood perfectly.

The pretending was important. It was also exhausting.

On the morning Mira was born, I woke up to a different house.

Louder. Faster. The midwife arriving before dawn, Roland pacing in the kitchen, Elena's voice from the other room in a register I hadn't heard before.

Then: a smaller voice. New. Immediate.

Then Elena, exhausted and glowing: »Come meet your sister.«

I stood at the edge of the bed and looked at Mira Ashford, seven hours old, and completely baffled by the concept of existence.

The terminal opened automatically.

\`\`\`
> [Code.Read] → MIRA ASHFORD
>
> Level: —
> Class: —
> Status: NEWBORN
>
> System affinity: LATENT
> Skill detected: [System-Empathy LV ?]
>   → Ability to *feel* others' status
>   → Unprecedented. Not in database.
>
> Note: This child is an anomaly.
> Note: The carrier is also an anomaly.
> Note: This family is statistically unlikely.
\`\`\`

I looked at the terminal.

Then at Mira.`,
    choices: [
      { text: "A) Reach out and touch her cheek. Gently.",
        next: "a4_mira_scan",
        flagEffect: { miraErstbegegnung: "beruehrung" },
        affinityEffect: { mira: 15, elena: 5, roland: 5 },
        narrativeFeedback: "Mira grabs my finger. Her grip is firm. Startlingly firm. Elena inhales sharply — then laughs, quietly.",
      },
      { text: "B) Observe her analytically. [Code.Read] on a newborn.",
        next: "a4_mira_scan",
        flagEffect: { miraErstbegegnung: "scan" },
        affinityEffect: { mira: 5 },
        narrativeFeedback: "The terminal flickers. Then, small text: »...The terminal recommends not scanning her. She is not an object.« Kaito closes the window.",
      },
      { text: "C) »Sister.« — Your first conscious claim on this life.",
        next: "a4_mira_scan",
        flagEffect: { miraErstbegegnung: "schwester" },
        affinityEffect: { mira: 20, roland: 10, elena: 10 },
        alignEffect: { licht: 2 },
        narrativeFeedback: "Roland turns to the wall. His shoulders move — he's crying, very quietly, so no one sees.",
      },
    ]
  },

  a4_mira_scan: {
    title: "Mira's Code",
    chapter: "Chapter 4 — Error.Log()",
    scene: "Millheim — Ashford House",
    conditionalFlag: "miraErstbegegnung",
    textConditional: {
      beruehrung: `When I scanned her, I understood why my hand had trembled. Her code was different. Warm. As if it breathed.`,
      schwester: `I had said »sister« before I understood why. Now, looking at the code, I saw it: she was part of something I didn't yet comprehend. And I had known it, before knowing it.`,
      default: ``,
    },
    text: `[System-Empathy].

I had never seen that skill.

Not in my previous world's game design. Not in any System-database I had accessed. It wasn't in the standard skill tree. It wasn't in the rare skills list. It wasn't anywhere.

Which meant it was either:

A) A skill that had been removed from the System.

B) A skill the System couldn't categorize.

C) Something that had appeared spontaneously, outside the System's design.

I sat next to the cradle and watched Mira sleep.

She was nine hours old.

She already felt *wrong* in the same way I did — present but unlabeled, real but unregistered.

Two anomalies in the same house.

Gregor, arriving that Tuesday, took one look at the baby and then one look at me and said nothing. He sat in his chair. Told a story about two stars — one invisible, one too bright — who learned to exist in the same sky.

That was the most direct thing Gregor ever said to me.

He just never said it directly.`,
    choices: [{ text: "→ The watchers", next: "a4_beobachter" }]
  },

  a4_beobachter: {
    title: "The Watchers",
    chapter: "Chapter 4 — Error.Log()",
    scene: "Millheim — Age: 3 years",
    text: `Three years old.

I was sitting on the fence at the edge of the property, watching the village wake up, when I saw them.

Two figures. At the edge of the treeline. Standing still in the way that people stand when they don't want to be noticed but aren't quite good enough at it.

[Code.Read]:

Figure One: Level 89. Class: [CONCEALED]. Status: [MONITORING].
Figure Two: Level 34. Class: [UNKNOWN]. Status: [OBSERVED].

Level 89.

In a village where the highest level was Boris the blacksmith at Level 28.

Level 89 was not a normal villager. Level 89 was not a merchant. Level 89 was, statistically speaking, one of the most powerful individuals in a significant radius.

And they were watching my house.

I looked at them.

They looked at me.

The Level 89 figure went very still in the way that very powerful things go still when they realize they've been noticed by something that shouldn't have been able to notice them.

I waved.

A small wave. Polite. The wave of a three-year-old saying hello to strangers at the treeline.

A very long pause.

The figure waved back.

That felt, in retrospect, like the beginning of something.`,
    choices: [{ text: "→ Act II: Compile.Childhood()", next: "a2k1_morgenroutine" }]
  },

};
