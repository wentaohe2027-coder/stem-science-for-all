/* ============================================================================
   ALL SITE CONTENT LIVES HERE.

   You should almost never need to touch the .astro files. To change what the
   site says, edit this file, save, and the browser reloads instantly.

   Anything marked  // TODO  is something only you know. Fill those in first.
   ============================================================================ */

export const org = {
  name: "STEM & Science for All",
  shortName: "STEM & Science for All",
  tagline: "Free hands-on engineering for Westchester students",

  // TODO: replace with your real contact email before launch.
  email: "hello@stemscienceforall.org",

  // TODO: replace with your real domain once you buy one (see README step 6).
  url: "https://stemscienceforall.org",

  // Shown in the footer.
  fiscalSponsor: "A registered nonprofit under Hack Club, a 501(c)(3).",
};

export const nav = [
  { label: "Program", href: "/program" },
  { label: "About", href: "/about" },
  { label: "Get involved", href: "/join" },
];

/* ---------------------------------------------------------------------------
   HOME — hero
   --------------------------------------------------------------------------- */
export const hero = {
  eyebrow: "Summer 2026 · Mount Vernon Public Library",
  headline: "Build it. Test it. Make it fly farther.",
  body:
    "A free five-week engineering program for elementary and middle schoolers. " +
    "Students design gliders and gear-driven cars, then measure whether their " +
    "ideas actually worked — and rebuild until they do.",
  primaryCta: { label: "How to register", href: "/join" },
  secondaryCta: { label: "See the curriculum", href: "/program" },
};

/* The numbers strip under the hero. Keep these to four — it reads as a
   readout, not a brag wall. */
export const stats = [
  { value: "5", unit: "weeks", note: "June–July 2026" },
  { value: "10", unit: "sessions", note: "Two per week" },
  { value: "~100", unit: "students", note: "Across two age bands" },
  { value: "$0", unit: "cost", note: "Free, always" },
];

/* ---------------------------------------------------------------------------
   HOME — the two flagship builds
   --------------------------------------------------------------------------- */
export const projects = [
  {
    code: "Build 01",
    title: "The Plane Challenge",
    body:
      "Students start with paper gliders and end with balsa aircraft they designed " +
      "themselves. Along the way they work out why a long thin wing glides farther " +
      "than a short fat one, and what happens when you move the center of mass.",
    points: [
      "Lift, drag, and the four forces of flight",
      "Wing geometry and aspect ratio",
      "Control surfaces — pitch, roll, and yaw",
      "A launch-and-measure competition on the final day",
    ],
    // Drop a photo at public/images/plane.jpg and change this to "/images/plane.jpg"
    image: null as string | null,
    imageHint: "Students launching gliders",
  },
  {
    code: "Build 02",
    title: "The Car Challenge",
    body:
      "A rubber band stores energy. A gear train decides whether that energy becomes " +
      "speed or climbing power. Students build a chassis, pick their ratios, and find " +
      "out on the test track that they cannot have both.",
    points: [
      "Levers, pulleys, and mechanical advantage",
      "Gear ratios: trading speed against torque",
      "Chassis design and friction",
      "A speed run and a hill climb, same car",
    ],
    image: null as string | null,
    imageHint: "A student's gear-driven car mid-test",
  },
];

/* ---------------------------------------------------------------------------
   HOME — how a session actually runs.
   This is the most distinctive thing on the site. Most camps don't publish
   their teaching method. Numbered because it genuinely is a sequence.
   --------------------------------------------------------------------------- */
export const method = {
  title: "How a session runs",
  intro:
    "The hardest part of teaching engineering to nine-year-olds is not the engineering. " +
    "It is the first ten minutes. This order came out of a lot of trial and error, and " +
    "advice from teachers who have been doing it longer.",
  steps: [
    {
      title: "Show them the thing first",
      body:
        "The session opens with the build, not the theory. Kids see what they are going " +
        "to make and why it is worth making before anyone explains anything.",
    },
    {
      title: "Teach the idea, take every question",
      body:
        "A short foundational lesson with the floor genuinely open. Questions that go " +
        "sideways are usually the ones worth following.",
    },
    {
      title: "Tie it back to the build",
      body:
        "The concept returns as a decision they have to make with their own hands. " +
        "Abstract ideas stick when they change what a student does next.",
    },
    {
      title: "Go slow enough to finish",
      body:
        "Every student leaves with something that works. Covering less material and " +
        "finishing beats covering more and stopping halfway.",
    },
  ],
};

/* ---------------------------------------------------------------------------
   HOME — who it's for
   --------------------------------------------------------------------------- */
export const audience = {
  title: "Who it's for",
  bands: [
    {
      // TODO: confirm the exact grade ranges for each band.
      name: "Younger band",
      grades: "Grades 2–5",
      body:
        "Shorter builds, more hands-on time, and a heavier emphasis on testing and " +
        "iterating than on the underlying math.",
    },
    {
      name: "Older band",
      grades: "Grades 6–8",
      body:
        "The same projects with the physics made explicit — ratios, forces, and " +
        "trade-offs students calculate before they cut anything.",
    },
  ],
  note:
    "No experience needed, and no equipment to bring. Every material is provided.",
};

/* ---------------------------------------------------------------------------
   HOME — track record
   --------------------------------------------------------------------------- */
export const track = {
  title: "Where this came from",
  body:
    "The program started in Scarsdale in summer 2025 as a two-week camp for about " +
    "twenty elementary students, run jointly with United Path's Arts & Care Program. " +
    "That partnership raised over $6,000 for Westchester schools building STEM and " +
    "art programs, children's hospitals, and youth organizations. In 2026 it moved to " +
    "the Mount Vernon Public Library's Youth Community Outreach Program, five times " +
    "longer and five times bigger.",
  facts: [
    { k: "Founded", v: "2025, Scarsdale NY" },
    { k: "2026 host", v: "Mount Vernon Public Library (YCOP)" },
    { k: "Raised to date", v: "$6,000+ for Westchester STEM & arts" },
    { k: "Status", v: "Nonprofit under Hack Club, 501(c)(3)" },
  ],
};

/* ---------------------------------------------------------------------------
   PROGRAM PAGE — the curriculum.

   Weeks 1 and 2 are filled in from your existing curriculum. Weeks 3–5 are
   placeholders — replace the day titles and descriptions with your real
   2026 five-week plan. To add or remove a day, just add or delete an object
   in the `days` array; the layout adjusts itself.
   --------------------------------------------------------------------------- */
export const curriculum = {
  intro:
    "Ten sessions across five weeks. Each week builds toward one thing the students " +
    "make and test themselves. Materials are provided and every student keeps what " +
    "they build.",
  weeks: [
    {
      n: 1,
      title: "Aerodynamics",
      summary: "Why some shapes stay up longer than others.",
      days: [
        { title: "Introduction to flight", body: "The four forces of flight, and simple paper gliders built to test lift." },
        { title: "Wing geometry", body: "How aspect ratio changes glide distance, tested with custom wing shapes." },
      ],
    },
    {
      n: 2,
      title: "Control and the Plane Challenge",
      summary: "Steering something you cannot touch once it leaves your hand.",
      days: [
        { title: "Control surfaces", body: "Ailerons and elevators added to gliders to control pitch, roll, and yaw." },
        { title: "The Plane Challenge", body: "Students build for maximum airtime, then compete on a shared launch system." },
      ],
    },
    {
      n: 3,
      // TODO: replace with your real Week 3.
      title: "Simple machines",
      summary: "Trading distance for force.",
      days: [
        { title: "Levers and pulleys", body: "Mechanical advantage found by experiment rather than formula." },
        { title: "Introduction to gearing", body: "Gear trains built to see how diameter ratios change speed and torque." },
      ],
    },
    {
      n: 4,
      // TODO: replace with your real Week 4.
      title: "Mechanical design",
      summary: "Making a structure that survives its own motion.",
      days: [
        { title: "Chassis construction", body: "A rigid vehicle base designed to minimize friction and hold together at speed." },
        { title: "The Car Challenge", body: "A gear-driven car assembled for both flat-out speed and hill-climbing power." },
      ],
    },
    {
      n: 5,
      // TODO: replace with your real Week 5.
      title: "Circuits and showcase",
      summary: "Adding electricity, then showing the work.",
      days: [
        { title: "Basic circuitry", body: "Switches, series, and parallel — built by hand and debugged by the students." },
        { title: "Final engineering showcase", body: "Students present their designs to the group and run a final endurance trial." },
      ],
    },
  ],
};

/* ---------------------------------------------------------------------------
   ABOUT PAGE
   --------------------------------------------------------------------------- */
export const about = {
  lead:
    "STEM & Science for All exists because hands-on engineering is expensive, and " +
    "the students who would love it most are usually the ones who never get offered it.",
  paragraphs: [
    "The program runs free of charge at the Mount Vernon Public Library, as part of the " +
      "library's Youth Community Outreach Program. Every material — balsa, gears, wheels, " +
      "wire — is covered by the program, not by families.",
    "It runs on a materials budget in the low hundreds of dollars. That constraint shaped " +
      "the curriculum more than anything else: every project had to be interesting, " +
      "durable, and cheap enough that a student could ruin one and start again. Rubber " +
      "bands and balsa turn out to be excellent teachers.",
  ],
  instructor: {
    name: "Wentao He",
    role: "Founder and lead instructor",
    // TODO: check this reads the way you want. Keep it factual — parents can tell.
    body:
      "Wentao founded the program in 2025 and writes the curriculum, teaches the sessions, " +
      "and prepares the materials, supported by a team of assistant instructors. He " +
      "competes in Science Olympiad and does transcriptomics research in a molecular " +
      "biology lab, and built this program to give younger students the kind of hands-on " +
      "engineering he had to go looking for himself.",
    image: null as string | null,
    imageHint: "Portrait or a photo of you teaching",
  },
};

/* ---------------------------------------------------------------------------
   GET INVOLVED PAGE
   --------------------------------------------------------------------------- */
export const join = {
  lead: "There are three ways in.",
  paths: [
    {
      code: "For families",
      title: "Register a student",
      body:
        "Registration runs through the Mount Vernon Public Library's Youth Community " +
        "Outreach Program. Sessions are free and materials are provided.",
      // TODO: put the real registration link or phone number here.
      cta: { label: "Registration details", href: "mailto:hello@stemscienceforall.org" },
    },
    {
      code: "For students & teachers",
      title: "Volunteer as an instructor",
      body:
        "Assistant instructors run small groups during builds. High schoolers who are " +
        "comfortable with the material and patient with nine-year-olds are the right fit.",
      cta: { label: "Get in touch", href: "mailto:hello@stemscienceforall.org" },
    },
    {
      code: "For supporters",
      title: "Fund materials",
      body:
        "The whole program runs on a few hundred dollars of balsa, gears, and wire. " +
        "Small amounts go a long way and every dollar goes into a student's hands.",
      // TODO: link your Hack Club donation page here.
      cta: { label: "Support the program", href: "mailto:hello@stemscienceforall.org" },
    },
  ],
};
