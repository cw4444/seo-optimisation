(function (global) {
  const aiSnackPatterns = [
    { label: "Generic opener", pattern: /\b(in today's fast[- ]paced|ever[- ]evolving|digital landscape|dynamic and technically minded)\b/gi, suggestion: "Start with the specific user need instead." },
    { label: "Vague excellence", pattern: /\b(seamless|robust|cutting[- ]edge|innovative|state[- ]of[- ]the[- ]art|best[- ]in[- ]class)\b/gi, suggestion: "Swap for a measurable benefit or concrete detail." },
    { label: "Filler verb", pattern: /\b(leverage|utili[sz]e|empower|unlock|enhance|streamline)\b/gi, suggestion: "Use simpler verbs like use, improve, speed up, or reduce." },
    { label: "Corporate glue", pattern: /\b(proactive|passion for|staying ahead|drive traffic and conversions|test and learn)\b/gi, suggestion: "Make the behaviour observable and practical." },
    { label: "Unjoined compound", pattern: /\b(data driven|hands on|day to day|front end|conversionfocused)\b/gi, suggestion: "Fix spelling or hyphenation before publishing." }
  ];

  const replacements = [
    [/\bin today's fast[- ]paced digital landscape,?\s*/gi, ""],
    [/\bever[- ]evolving\b/gi, "changing"],
    [/\bdynamic and technically minded\b/gi, "technical"],
    [/\bseamless\b/gi, "clear"],
    [/\brobust\b/gi, "reliable"],
    [/\bcutting[- ]edge\b/gi, "current"],
    [/\binnovative\b/gi, "useful"],
    [/\bstate[- ]of[- ]the[- ]art\b/gi, "modern"],
    [/\bbest[- ]in[- ]class\b/gi, "effective"],
    [/\bleverage\b/gi, "use"],
    [/\butili[sz]e\b/gi, "use"],
    [/\bempower\b/gi, "help"],
    [/\bunlock\b/gi, "create"],
    [/\benhance\b/gi, "improve"],
    [/\bstreamline\b/gi, "simplify"],
    [/\bdata driven\b/gi, "data-driven"],
    [/\bhands on\b/gi, "hands-on"],
    [/\bday to day\b/gi, "day-to-day"],
    [/\bfront end\b/gi, "front-end"],
    [/\bconversionfocused\b/gi, "conversion-focused"],
    [/\bmaintaining and\s+and\s+updating\b/gi, "maintaining and updating"],
    [/\s{2,}/g, " "]
  ];

  const checklist = [
    "Does every claim name a real product, audience, result, or action?",
    "Would a customer say this phrase out loud without sounding possessed by LinkedIn?",
    "Are title, meta description, H1, and first paragraph aligned to one search intent?",
    "Is the CTA specific enough to reduce hesitation?",
    "Did we keep any useful brand personality instead of sanding everything flat?",
    "Has a human checked facts, links, legal claims, and product naming?"
  ];

  const sample = `We are seeking a dynamic and technically minded Website SEO Optimisation Executive to support the development, optimisation, and performance of our websites and customer portals. This role involves maintaining and and updating our digital platforms, while optimising onsite performance through a data driven, test and learn approach.\n\nThis is a hands on role for someone who enjoys working on front end website updates, CMS development, technical optimisation, and UX improvements. You will help improve conversion rates, fix technical issues, enhance user journeys, and ensure our digital platforms run smoothly and efficiently.`;

  function stripHtml(text) {
    return text.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ");
  }

  function words(text) {
    return (stripHtml(text).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g) || []);
  }

  function countSyllableLike(word) {
    return Math.max(1, (word.toLowerCase().match(/[aeiouy]+/g) || []).length);
  }

  function readabilityScore(text) {
    const cleanWords = words(text);
    const sentences = Math.max(1, (stripHtml(text).match(/[.!?]+/g) || []).length);
    const syllables = cleanWords.reduce((sum, word) => sum + countSyllableLike(word), 0);
    if (!cleanWords.length) return 0;
    return Math.round(206.835 - 1.015 * (cleanWords.length / sentences) - 84.6 * (syllables / cleanWords.length));
  }

  function findIssues(text, intent) {
    const issues = [];
    aiSnackPatterns.forEach((item) => {
      const matches = [...text.matchAll(item.pattern)].map((match) => match[0]);
      if (matches.length) {
        issues.push({ type: "AI snack", label: item.label, count: matches.length, examples: [...new Set(matches)].slice(0, 4), suggestion: item.suggestion });
      }
    });

    const duplicateWords = [...text.matchAll(/\b([A-Za-z]+)\s+\1\b/gi)].map((match) => match[0]);
    if (duplicateWords.length) issues.push({ type: "Quality", label: "Repeated words", count: duplicateWords.length, examples: duplicateWords, suggestion: "Remove accidental repeats before CMS upload." });

    const clean = stripHtml(text);
    if (!/<h1[\s>]/i.test(text) && clean.length > 300) issues.push({ type: "SEO", label: "Missing H1 signal", count: 1, examples: ["No <h1> found"], suggestion: "Add one clear H1 matching the page intent." });
    if (!/meta\s+name=["']description/i.test(text) && intent === "seo") issues.push({ type: "SEO", label: "Missing meta description", count: 1, examples: ["SEO article intent"], suggestion: "Draft a 140-160 character meta description." });
    if (!/\b(book|try|get|start|contact|download|compare|request)\b/i.test(clean) && intent === "conversion") issues.push({ type: "CRO", label: "Weak CTA signal", count: 1, examples: ["No direct action verb"], suggestion: "Add a concrete next step near the main CTA." });

    return issues;
  }

  function rewrite(text, voice) {
    let next = text.trim();
    replacements.forEach(([pattern, value]) => {
      next = next.replace(pattern, value);
    });
    next = next.replace(/\bThis role involves\b/gi, "You will")
      .replace(/\bYou will help improve\b/gi, "You will improve")
      .replace(/\bensure our digital platforms run smoothly and efficiently\b/gi, "keep pages fast, accurate, and easy to use")
      .replace(/\bwith strong communication skills, with\b/gi, "with strong communication skills and");

    if (voice === "confident") next = next.replace(/\bhelp\b/gi, "support").replace(/\bimprove\b/gi, "raise");
    if (voice === "warm") next = next.replace(/\bfix\b/gi, "resolve").replace(/\buse\b/gi, "work with");
    return next.replace(/\n{3,}/g, "\n\n").trim();
  }

  function score(text, issues) {
    const totalWords = words(text).length;
    const snackHits = issues.filter((issue) => issue.type === "AI snack").reduce((sum, issue) => sum + issue.count, 0);
    const clarity = Math.max(0, Math.min(100, readabilityScore(text)));
    const snack = Math.max(0, Math.round(100 - (snackHits / Math.max(1, totalWords)) * 900));
    const seo = Math.max(20, 100 - issues.filter((issue) => issue.type === "SEO").length * 22);
    const cro = Math.max(25, 100 - issues.filter((issue) => issue.type === "CRO").length * 30);
    return { snack, clarity, seo, cro };
  }

  function analyzeContent(text, options = {}) {
    const intent = options.intent || "general";
    const voice = options.voice || "plain";
    const issues = findIssues(text, intent);
    const rewritten = rewrite(text, voice);
    return {
      inputWords: words(text).length,
      outputWords: words(rewritten).length,
      scores: score(text, issues),
      issues,
      rewritten,
      checklist,
      sample
    };
  }

  global.HumanPassAnalyzer = { analyzeContent, sample, words };
  if (typeof module !== "undefined") module.exports = { analyzeContent, sample, words };
})(typeof window !== "undefined" ? window : globalThis);
