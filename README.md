# STEM & Science for All — website

Astro 7 + Tailwind 4. Static site, no server, no database, no monthly cost.

---

## 1. Get it running (10 minutes, one time)

You need Node.js 20 or newer. Check what you have:

```bash
node -v
```

If that errors or shows something below v20, install it. On your Mac:

```bash
brew install node
```

(If you don't have Homebrew, get it from brew.sh first, or download Node directly from nodejs.org.)

Then, from inside this folder:

```bash
npm install
npm run dev
```

Open **http://localhost:4321**. Leave that terminal running — every time you save a
file, the browser updates on its own. `Ctrl+C` stops it.

---

## 2. Change what the site says

**Everything you'll want to edit lives in one file: `src/data/site.ts`.**

Open it and you'll find the hero text, the stats, the two projects, the teaching
method, the whole curriculum, the About copy, and the Get Involved cards. Change a
string, save, watch the browser update. You do not need to touch any `.astro` file.

Anything marked `// TODO` in that file is something only you know. Do those first:

- [ ] Your real contact email (appears in ~6 places, all from one line)
- [ ] Your real domain, once you have one
- [ ] The actual grade ranges for each age band
- [ ] Weeks 3, 4, and 5 of the curriculum — I filled these with your old two-week
      material as a structural placeholder. Replace with the real 2026 plan.
- [ ] The registration link or phone number for MVPL's YCOP
- [ ] Your Hack Club donation link

To add a curriculum week, copy one `{ n: …, title: …, days: [...] }` block and
paste it into the `weeks` array. Session numbers renumber themselves.

---

## 3. Add photos

This is the single biggest upgrade available to you. Real photos of students
mid-build will do more than any other change on this list.

1. Put image files in `public/images/` (e.g. `public/images/plane.jpg`)
2. In `src/data/site.ts`, change `image: null` to `image: "/images/plane.jpg"`

Until you do, you'll see a dashed frame labelled "Photo slot" telling you what
belongs there — so nothing looks broken while you gather them.

**Before uploading:** resize to about 1600px wide and export at ~75% JPEG quality.
Aim for under 300KB per file. Preview on your Mac does this: Tools → Adjust Size,
then File → Export.

**Check with Ms. Webb about the library's photo release policy first.** Shots
where faces aren't identifiable (hands on a build, a glider in flight, a group
from behind) are usually the safe default if consent is unclear.

---

## 4. Change how it looks

All colors and fonts are defined once, at the top of `src/styles/global.css`, in the
`@theme` block. Change a hex value there and it updates everywhere.

The current direction, so you know what you'd be undoing:

| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#EDF0F3` | Cool grey-white — a data sheet, deliberately not cream |
| `--color-ink` | `#0F1720` | Near-black with a blue undertone; headings and dark bands |
| `--color-signal` | `#FF5A1F` | High-visibility orange — the color of test-range markings |
| `--color-sky` | `#1B54D8` | Links and the faint plotted flight paths |

Type is **Archivo** (heavy and expanded, for headings), **Public Sans** (body), and
**IBM Plex Mono** (labels, distances, session numbers). The mono face is doing real
work here — it's the voice of a test log, which is what the whole design is built on.

The signature element is the hero graphic in `src/components/GlidePath.astro`: three
plotted glider flights from one launch point, drawn to a 60px-per-metre scale, with
the wing redesigned between each. It's the program's actual argument in one picture —
you don't get it right the first time, so you measure and change one thing. Everything
else on the page stays quiet so that can be the thing people remember.

---

## 5. Put it online (free, ~20 minutes)

**Push to GitHub first:**

```bash
git init
git add -A
git commit -m "Initial site"
```

Create an empty repo on github.com, then follow the two commands it shows you to push.

**Then deploy on Cloudflare Pages:**

1. Go to dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Pick your repo
3. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`
4. Save and Deploy

You'll get a live `*.pages.dev` URL in about two minutes. From then on, every `git
push` redeploys automatically. Hosting is free and stays free at your traffic level.

(Vercel and Netlify work identically if you prefer either.)

---

## 6. Domain

Buy `stemscienceforall.org` — about $15/year at Cloudflare Registrar, which sells at
cost. Then in Cloudflare Pages: your project → Custom domains → Set up a domain.
HTTPS is automatic.

Before you buy, check the **GitHub Student Developer Pack** — it includes a free
domain for a year, and Hack Club members get fast-tracked into it.

Once the domain is live, update **two** places:
- `site:` in `astro.config.mjs`
- `url:` in `src/data/site.ts`
- and the Sitemap line in `public/robots.txt`

---

## 7. Launch checklist

Things that were broken on the Wix site and are already fixed here — just confirm
they survived your edits:

- [x] Real page titles (not "My Site")
- [x] A meta description on every page
- [x] `robots: index, follow` — the Wix site was telling Google to ignore it
- [x] Alt text on images (comes from `imageHint` in `site.ts`, so write those properly)
- [x] Social share card at `public/og.png` — regenerate or replace with a real photo
- [x] `sitemap-index.xml` generated on every build
- [x] Structured data marking you as an EducationalOrganization
- [x] Keyboard focus rings, skip-to-content link, `prefers-reduced-motion` respected

After launch: submit the site to **Google Search Console** (search.google.com/search-console).
Verify with the DNS method through Cloudflare, submit your sitemap, and you'll be
indexed within a few days.

---

## Project structure

```
src/
  data/site.ts          ← 95% of your edits happen here
  styles/global.css     ← colors, fonts, shared classes
  layouts/Base.astro    ← <head>, SEO, header + footer wrapper
  components/
    GlidePath.astro     ← the hero plot
    Header.astro
    Footer.astro
    PhotoSlot.astro     ← dashed frame until a real photo is set
  pages/
    index.astro         ← /
    program.astro       ← /program
    about.astro         ← /about
    join.astro          ← /join
    404.astro
public/                 ← images, favicon, og.png, robots.txt
```

Adding a page is one file: create `src/pages/donate.astro`, copy the shape of
`about.astro`, and add `{ label: "Donate", href: "/donate" }` to the `nav` array in
`site.ts`. The route and the nav link both appear.
