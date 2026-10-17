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
  { value: "6", unit: "weeks", note: "Summer 2026 in Mount Vernon" },
  { value: "18", unit: "sessions", note: "Three per week" },
  { value: "100+", unit: "children", note: "Across three age groups" },
  { value: "$0", unit: "cost", note: "Free in Mount Vernon" },
];

/* ---------------------------------------------------------------------------
   HOME — the two flagship builds
   --------------------------------------------------------------------------- */
export const projects = [
  {
    code: "Flagship build 01",
    title: "The Car Challenge",
    body:
      "A rubber band stores energy. A gear train decides whether that energy becomes " +
      "speed or climbing power. Students build a chassis, pick their ratios, and test " +
      "their designs on the track.",
    points: [
      "Levers, pulleys, and mechanical advantage",
      "Gear ratios: trading speed against torque",
      "Chassis design, energy, and friction",
      "Build, test, adjust, and test again",
    ],

    // PHOTO:
    // Put your car photo at:
    // public/images/car-challenge.jpg
    // Then change null below to "/images/car-challenge.jpg"
    image: "/images/car-challenge.jpg",
    imageHint: "Students testing their car designs",
  },
  {
    code: "Flagship build 02",
    title: "The Magnet Challenge",
    body:
      "Students build an electromagnet from a screw, wire, and a battery, then test " +
      "how changing the coil affects its strength. The project ends with a challenge " +
      "to see how much their switchable magnet can lift.",
    points: [
      "Magnetic fields, poles, and magnetic materials",
      "How electric current creates a magnetic field",
      "Coils, iron cores, and electromagnets",
      "A clip hanger challenge to test strength",
    ],

    // PHOTO:
    // Put your magnet photo at:
    // public/images/magnet-challenge.jpg
    // Then change null below to "/images/magnet-challenge.jpg"
    image: "/images/magnet-challenge.jpg",
    imageHint: "Students testing an electromagnet with paperclips",
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
  title: "Built for three age groups",
  bands: [
    {
      name: "Younger group",
      grades: "Age-based instruction",
      body:
        "More guided builds, shorter explanations, and plenty of time to test ideas " +
        "with their hands.",
    },
    {
      name: "Middle group",
      grades: "Age-based instruction",
      body:
        "The same hands-on approach with more room for design choices, measurement, " +
        "and independent problem-solving.",
    },
    {
      name: "Older group",
      grades: "Age-based instruction",
      body:
        "More independence during the build and greater emphasis on explaining why " +
        "a design succeeds or fails.",
    },
  ],
  note:
    "The Mount Vernon program served more than 100 children across three age groups. " +
    "Weekly sessions continue during the school year.",
};

/* ---------------------------------------------------------------------------
   HOME — track record
   --------------------------------------------------------------------------- */
export const track = {
  title: "How the program grew",
  body:
    "In the summer after 9th grade, Wentao led science lessons through United Paths' " +
    "Arts&Care Program. The following summer, he founded STEM & Science for All under " +
    "Hack Club's fiscal sponsorship and partnered with United Paths to run the two-week " +
    "Arts & Sciences Camp for about 20 children. Tuition from those early programs was " +
    "set aside to help make the program free. In the summer after 11th grade, those funds " +
    "were reinvested to bring the program to Mount Vernon through partnerships with the " +
    "Mount Vernon Public Library and Youth Community Outreach Program. The free program " +
    "ran for six weeks, three sessions per week, and served more than 100 children across " +
    "three age groups. Weekly sessions continue during the school year.",
  facts: [
    { k: "First teaching", v: "Science lessons through United Paths after 9th grade" },
    { k: "Founded", v: "STEM & Science for All after 10th grade" },
    { k: "Mount Vernon", v: "6 weeks · 3 sessions/week · 100+ children" },
    { k: "Age groups", v: "Three separate groups" },
    { k: "Curriculum", v: "Nine units on under $500 in materials" },
    { k: "Impact", v: "$6,000+ directed to Westchester schools" },
    { k: "Now", v: "Weekly sessions continue during the school year" },
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
    "The 2026 Mount Vernon program ran for six weeks, three sessions per week, across " +
    "a nine-unit curriculum. Below are four featured units from the full program, each " +
    "built around explaining an idea, putting it into students' hands, and testing it.",
  weeks: [
    {
      n: 1,
      title: "Aerodynamics & Flight",
      summary:
        "Using aircraft and flight to make forces, stability, and design trade-offs visible.",
      days: [
        {
          title: "The four forces of flight",
          body:
            "Lift, drag, thrust, and stability introduced through hands-on demonstrations and builds.",
        },
        {
          title: "Wing geometry",
          body:
            "How wing shape changes flight, explored through designs students can compare and test.",
        },
        {
          title: "Testing and redesign",
          body:
            "Students change their designs, measure what happens, and use each result to improve the next attempt.",
        },
      ],
    },
    {
      n: 2,
      title: "Machines & Motion",
      summary:
        "How gears, ratios, stored energy, and friction turn force into motion.",
      days: [
        {
          title: "Levers and mechanical advantage",
          body:
            "Students explore how simple machines change the force needed to move an object.",
        },
        {
          title: "Gear ratios",
          body:
            "Gear trains make the trade-off between speed and torque visible.",
        },
        {
          title: "The Car Challenge",
          body:
            "Students build and test their own racers, then refine the design using what happened on the track.",
        },
      ],
    },
    {
      n: 3,
      title: "Electricity & Magnetism",
      summary:
        "Connecting electric current to the magnetic fields it can create.",
      days: [
        {
          title: "Closing the loop",
          body:
            "Batteries, conductors, and switches make current and complete circuits concrete.",
        },
        {
          title: "Current and magnetic fields",
          body:
            "Students connect moving electric charge to the invisible magnetic field around a current-carrying wire.",
        },
        {
          title: "The Magnet Challenge",
          body:
            "Students wrap wire around an iron core to build an electromagnet, test how coil design changes its strength, and finish with a clip hanger challenge.",
        },
      ],
    },
    {
      n: 4,
      title: "Biology & Life Science",
      summary:
        "Hands-on investigations of cells, DNA, organisms, and the living world.",
      days: [
        {
          title: "Cells under the microscope",
          body:
            "Students examine biological samples and compare what they observe.",
        },
        {
          title: "DNA and heredity",
          body:
            "Activities connect visible traits and biological material to the information stored in DNA.",
        },
        {
          title: "Living systems",
          body:
            "Students connect structures and systems to how organisms function and respond to their environment.",
        },
      ],
    },
  ],
};

/* ---------------------------------------------------------------------------
   ABOUT PAGE
   --------------------------------------------------------------------------- */
export const about = {
  lead:
    "STEM & Science for All grew from teaching science in an existing community program " +
    "into a student-founded nonprofit designed to make hands-on STEM accessible without " +
    "making cost the barrier.",
  paragraphs: [
    "In the summer after 9th grade, Wentao taught science lessons through United Paths' " +
      "Arts&Care Program. The following summer, he founded STEM & Science for All under " +
      "Hack Club's fiscal sponsorship and partnered with United Paths to run the two-week " +
      "Arts & Sciences Camp for about 20 children. He designed and taught daily three-hour " +
      "modules while setting aside tuition so a future version of the program could be free.",
    "In the summer after 11th grade, the program expanded to Mount Vernon through the " +
      "Mount Vernon Public Library and Youth Community Outreach Program. Reinvesting funds " +
      "from the earlier summers made the six-week program free. It ran three sessions per " +
      "week, reached more than 100 children across three age groups, and used a nine-unit " +
      "curriculum built on a materials budget under $500. Weekly sessions continue during " +
      "the school year.",
  ],
  instructor: {
    name: "Wentao He",
    role: "Founder and program director",
    body:
      "Wentao writes the curriculum, prepares materials, teaches sessions, and trains " +
      "assistant counselors to lead activities themselves. The program's project-first " +
      "structure came from trial, error, and advice from experienced teachers: show " +
      "students what they will build, teach the idea through open questioning, then return " +
      "to the project and refine it.",

    // YOUR PHOTO SLOT:
    // Put your photo at:
    // public/images/wentao-he-teaching.jpg
    // Then change null below to "/images/wentao-he-teaching.jpg"
    image: "/images/wentao-he-teaching.jpg",
    imageHint: "Wentao teaching a STEM & Science for All session",
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
