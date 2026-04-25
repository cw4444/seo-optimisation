# Human Pass

Human Pass is a tiny proof-of-concept web app for cleaning up obvious AI-generated marketing copy.

It was built from a LinkedIn job spec for a Website SEO Optimisation Executive. The idea is simple: if a job expects one human to do a suspiciously large pile of SEO, CRO, content QA, CMS updates, accessibility checks, and automation glue, then we may as well build the first little automation goblin for it.

This app does **not** replace a human editor. It removes the easiest nonsense first, then hands the draft back to a person for judgement, taste, facts, and vibes.

## What It Does

Paste in rough page copy, blog copy, landing page text, or HTML. Human Pass will then:

- Flag obvious AI/corporate filler such as "seamless", "leverage", "ever-evolving", and similar LinkedIn smoothie words.
- Spot accidental quality issues such as repeated words and awkward hyphenation.
- Check basic SEO/CRO signals, including missing H1s, missing meta descriptions for SEO-style content, and weak call-to-action language.
- Generate a cleaner first-pass rewrite using simple rules.
- Give you a human review checklist so someone still checks tone, facts, links, claims, and brand personality.
- Let you copy the cleaned text or download it as a Markdown file.

## What It Is Useful For

This is good for quick first-pass cleanup of:

- Landing page copy
- Product page copy
- Blog drafts
- Website update notes
- CMS content before publishing
- Copy that smells like ChatGPT had a Red Bull

It is deliberately small and local. There is no login, no database, no tracking, and no paid AI API.

## What It Is Not

Human Pass is not:

- A full SEO platform
- A replacement for an editor
- A factual accuracy checker
- A guarantee that copy will rank on Google
- A magic button that makes corporate language emotionally survivable forever

A human should still review anything before publishing it.

## How To Run It

You only need a web browser and Python. Most modern computers already have Python, but if yours does not, install it from [python.org](https://www.python.org/downloads/).

### Step 1: Download The Project

If you are on GitHub:

1. Click the green **Code** button.
2. Click **Download ZIP**.
3. Unzip the folder somewhere easy to find, such as your Desktop.

### Step 2: Open Command Prompt Or Terminal

On Windows:

1. Open the project folder.
2. Click the address bar at the top of File Explorer.
3. Type `cmd` and press Enter.

This opens Command Prompt already inside the correct folder. This is the least cursed route.

On Mac:

1. Open Terminal.
2. Type `cd ` with a space after it.
3. Drag the project folder into the Terminal window.
4. Press Enter.

### Step 3: Start The App

In Command Prompt or Terminal, run:

```bash
python -m http.server 4173
```

If that does not work on Windows, try:

```bash
py -m http.server 4173
```

You should see something like:

```text
Serving HTTP on :: port 4173
```

Leave that window open while using the app.

### Step 4: Open The App

Open your browser and go to:

```text
http://localhost:4173
```

You should see the Human Pass interface.

## How To Use It

1. Paste your copy into the big text box.
2. Choose the page intent, such as general audience, conversion page, SEO article, or product page.
3. Choose the brand voice.
4. Click **Analyze content**.
5. Review the scores, flagged issues, and rewritten output.
6. Use the checklist before publishing.
7. Copy the output or download it as Markdown.

## For Developers

This is a static app: plain HTML, CSS, and JavaScript.

Useful files:

- `index.html` is the app page.
- `src/analyzer.js` contains the detection and rewrite logic.
- `src/app.js` connects the analyzer to the interface.
- `src/styles.css` contains the UI design.
- `tests/analyzer.test.js` contains a small smoke test.

If you have Node installed, you can run the tests with:

```bash
npm test
```

## Possible Next Features

- Add a real LLM rewrite mode with a strict brand/style prompt.
- Add Webflow CMS export fields such as title, slug, meta description, and body.
- Add broken-link checks for pasted HTML.
- Add image alt-text checks.
- Add schema markup suggestions.
- Add a Zapier or webhook handoff after the checklist is complete.
- Add a "more human / less LinkedIn" rewrite slider, because apparently society requires this now.

## License

MIT License. Use it, remix it, improve it, or throw it at a suspiciously broad job spec.
