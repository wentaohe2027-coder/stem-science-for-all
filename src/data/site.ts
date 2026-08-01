/* ============================================================================
   ALL SITE CONTENT LIVES HERE.

   You should almost never need to touch the .astro files. To change what the
   site says, edit this file, save, and the browser reloads instantly.

   Anything marked  // TODO  is something only you know. Fill those in first.
   ============================================================================ */

export const org = {
  name: "STEM & Science for All",
  shortName: "STEM & Science for All",
  tagline: "Reimagining science through hands-on discovery",

  email: "wentao.he.2027@gmail.com",
  venue: "Mount Vernon Public Library",
  address: "195 N Columbus Ave, Mount Vernon, NY",
  dates: "July 6 – August 14, 2026",

  // TODO: replace with your real domain once you buy one (see README step 6).
  url: "https://stemscienceforall.org",

  fiscalSponsor: "A student-led nonprofit, fiscally sponsored by Hack Club, a 501(c)(3).",
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
  eyebrow: "July 6 – August 14, 2026 · Mount Vernon, NY",
  headline: "Build it. Test it. Make it fly farther.",
  body:
    "A free six-week summer camp for elementary and middle school students. " +
    "Aircraft, gear-powered racers, working circuits, and the living world — " +
    "built with real materials, tested by the students who made them, and " +
    "rebuilt when they don't work the first time.",
  primaryCta: { label: "How to register", href: "/join" },
  secondaryCta: { label: "See the curriculum", href: "/program" },
};

export const stats = [
  { value: "6", unit: "weeks", note: "July 6 – Aug 14, 2026" },
  { value: "12", unit: "sessions", note: "Two per week" },
  { value: "100", unit: "free seats", note: "For local students" },
  { value: "$0", unit: "cost", note: "Materials included" },
];

/* ---------------------------------------------------------------------------
   HOME — the two flagship builds
   --------------------------------------------------------------------------- */
export const projects = [
  {
    code: "Flagship build 01",
    title: "The Plane Challenge",
    body:
      "Students start with paper gliders and end with aircraft they designed " +
      "themselves. Along the way they work out why a long thin wing glides farther " +
      "than a short fat one, and what happens when you move the center of mass.",
    points: [
      "Lift, drag, thrust, and stability",
      "Wing geometry and aspect ratio",
      "Control surfaces — pitch, roll, and yaw",
      "A launch-and-measure competition to finish",
    ],
    // Drop a photo at public/images/plane.jpg and change this to "/images/plane.jpg"
    image: null as string | null,
    imageHint: "Students launching gliders",
  },
  {
    code: "Flagship build 02",
    title: "The Car Challenge",
    body:
      "A rubber band stores energy. A gear train decides whether that energy becomes " +
      "speed or climbing power. Students build a chassis, pick their ratios, and find " +
      "out on the test track that they cannot have both.",
    points: [
      "Levers, pulleys, and mechanical advantage",
      "Gear ratios: trading speed against torque",
      "Chassis design, energy, and friction",
      "A speed run and a hill climb, same car",
    ],
    image: null as string | null,
    imageHint: "A student's gear-powered racer mid-test",
  },
];

/* ---------------------------------------------------------------------------
   HOME — how a session actually runs
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
   HOME — what sets this apart
   --------------------------------------------------------------------------- */
export const differentiators = {
  title: "What sets this apart",
  items: [
    "A self-designed curriculum built and tested specifically for young students, not adapted down from adult material.",
    "Real materials and a physical result in every session. Nothing is a simulation.",
    "Failed attempts are part of the plan — a design that doesn't work is where the actual learning starts.",
    "Run in partnership with the Mount Vernon Public Library and YCOP, so it reaches the whole community.",
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
      grades: "Elementary school",
      body:
        "Shorter builds, more hands-on time, and a heavier emphasis on testing and " +
        "iterating than on the underlying math.",
    },
    {
      name: "Older band",
      grades: "Middle school",
      body:
        "The same projects with the science made explicit — ratios, forces, and " +
        "trade-offs students reason through before they cut anything.",
    },
  ],
  note:
    "No prior experience required, and nothing to bring. Every material is provided.",
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
    "the Mount Vernon Public Library's Youth Community Outreach Program, three times " +
    "longer and five times bigger.",
  facts: [
    { k: "Founded", v: "2025, Scarsdale NY" },
    { k: "2026 host", v: "Mount Vernon Public Library & YCOP" },
    { k: "Raised to date", v: "$6,000+ for Westchester STEM & arts" },
    { k: "Status", v: "Nonprofit, fiscally sponsored by Hack Club" },
  ],
};

/* ---------------------------------------------------------------------------
   PROGRAM PAGE — the curriculum.

   Four units across six weeks. I've split the twelve sessions evenly, three per
   unit — TODO: adjust if your real pacing differs. To move a session, cut and
   paste its object into a different unit's `days` array. Session numbers
   renumber themselves automatically.
   --------------------------------------------------------------------------- */
export const curriculum = {
  intro:
    "Twelve sessions across six weeks, in four units. Each unit ends with something " +
    "the students built and tested themselves. Materials are provided and every " +
    "student keeps what they make.",
  weeks: [
    {
      n: 1,
      title: "Aerodynamics & Flight",
      summary: "Design, build, and fly your own aircraft — then tune it through real testing.",
      days: [
        { title: "The four forces of flight", body: "Lift, drag, thrust, and stability, introduced through paper gliders built to test each one." },
        { title: "Wing geometry", body: "How aspect ratio and wing shape change glide distance, measured across custom designs." },
        { title: "The Plane Challenge", body: "Control surfaces added for pitch, roll, and yaw, then a launch-and-measure competition." },
      ],
    },
    {
      n: 2,
      title: "Machines & Motion",
      summary: "How gears, ratios, energy, and friction turn force into motion.",
      days: [
        { title: "Levers and pulleys", body: "Mechanical advantage found by experiment rather than formula." },
        { title: "Gear ratios", body: "Gear trains built to see how diameter ratios trade speed against torque." },
        { title: "The Car Challenge", body: "A gear-powered racer built for both a flat-out speed run and a hill climb." },
      ],
    },
    {
      n: 3,
      title: "Circuits & Electronics",
      summary: "Making abstract electricity concrete enough to hold.",
      days: [
        { title: "Closing the loop", body: "Batteries, switches, and bulbs wired into a first working circuit." },
        { title: "Series and parallel", body: "Two ways to wire the same components, and why the difference is visible." },
        { title: "Troubleshooting", body: "Students are handed broken circuits and have to find the fault themselves." },
      ],
    },
    {
      n: 4,
      title: "Biology & Life Science",
      summary: "The living world, up close.",
      days: [
        { title: "Cells under the microscope", body: "Prepared and live samples, drawn and compared by the students." },
        { title: "DNA, extracted", body: "Pulling real DNA out of everyday material with household chemistry." },
        { title: "How the body works", body: "Systems of the human body, plus a final showcase of everything built over six weeks." },
      ],
    },
  ],
};

/* ---------------------------------------------------------------------------
   ABOUT PAGE
   --------------------------------------------------------------------------- */
export const about = {
  lead:
    "We swap textbook memorization for hands-on engineering and experimental discovery, " +
    "turning community spaces into collaborative labs where mistakes become the starting " +
    "point for problem-solving.",
  paragraphs: [
    "STEM & Science for All exists because hands-on science is expensive, and the " +
      "students who would love it most are usually the ones who never get offered it. The " +
      "program runs free of charge at the Mount Vernon Public Library, as part of the " +
      "library's Youth Community Outreach Program. Every material — balsa, gears, wire, " +
      "microscope slides — is covered by the program, not by families.",
    "It runs on a materials budget in the low hundreds of dollars. That constraint shaped " +
      "the curriculum more than anything else: every project had to be interesting, " +
      "durable, and cheap enough that a student could ruin one and start again. Rubber " +
      "bands and balsa turn out to be excellent teachers.",
  ],
  instructor: {
    name: "Wentao He",
    role: "Founder and lead instructor",
    body:
      "Wentao founded the program in 2025 and writes the curriculum, teaches the sessions, " +
      "and prepares the materials, supported by a team of assistant instructors. He " +
      "competes in Science Olympiad and does transcriptomics research in a molecular " +
      "biology lab, and built this program to give younger students the kind of hands-on " +
      "science he had to go looking for himself.",
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
        "Sign up in person at the front desk of the Mount Vernon Public Library, or email " +
        "to reserve a spot. 100 free seats, open to all elementary and middle school " +
        "students. No prior experience required.",
      cta: { label: "Email to register", href: "mailto:wentao.he.2027@gmail.com" },
    },
    {
      code: "For students & teachers",
      title: "Volunteer as an instructor",
      body:
        "Assistant instructors run small groups during builds. High schoolers who are " +
        "comfortable with the material and patient with nine-year-olds are the right fit.",
      cta: { label: "Get in touch", href: "mailto:wentao.he.2027@gmail.com" },
    },
    {
      code: "For supporters",
      title: "Fund materials",
      body:
        "The whole program runs on a few hundred dollars of balsa, gears, and wire. " +
        "Small amounts go a long way and every dollar goes into a student's hands.",
      // TODO: link your Hack Club (HCB) donation page here.
      cta: { label: "Support the program", href: "mailto:wentao.he.2027@gmail.com" },
    },
  ],
  contacts: [
    { name: "Wentao He", role: "Founder", contact: "wentao.he.2027@gmail.com" },
    { name: "Ms. Webb", role: "Mount Vernon Public Library", contact: "cwebb@mvplibrary.org" },
    // TODO: add Mr. Henry's email or phone if he's happy to be listed publicly.
    { name: "Mr. Henry", role: "YCOP", contact: null as string | null },
  ],
  details: [
    { k: "Where", v: "Mount Vernon Public Library, 195 N Columbus Ave, Mount Vernon, NY" },
    { k: "When", v: "July 6 – August 14, 2026. Six weeks, two sessions per week." },
    { k: "Cost", v: "Free. All materials included." },
    { k: "Who", v: "Elementary and middle school students, two separate bands" },
    { k: "How", v: "In person at the library front desk, or by email" },
  ],
};
