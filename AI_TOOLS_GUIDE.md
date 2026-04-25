# Off-The-Shelf AI Tools For The Human Pass Workflow

_Last checked: 25 April 2026_

This project builds a small local proof of concept for cleaning up obvious AI-generated marketing copy. But you can already do a lot of this today with ordinary consumer AI subscriptions, especially ChatGPT Plus and Claude Pro.

The useful trick is not "find the one magic tool". It is to combine a few built-in features:

- file upload
- document analysis
- web search or research mode
- reusable project/custom instructions
- an editable document or artifact
- a strong review prompt

That gets you most of the Human Pass workflow without writing code.

## Quick Recommendation

If you want the simplest no-code workflow today:

1. Put your brand notes, tone examples, SEO checklist, and banned phrases into a ChatGPT Project or Claude Project.
2. Upload or paste the page copy you want reviewed.
3. Ask the AI to produce three things: flagged issues, a rewritten draft, and a human review checklist.
4. Do not publish the AI rewrite directly. Use it as a first pass.
5. Keep a human in the loop for facts, brand tone, legal claims, product details, links, and anything involving taste.

## ChatGPT Plus Tools That Help

ChatGPT Plus is OpenAI's paid consumer plan. OpenAI describes Plus as including higher access to advanced models, voice, image generation, file uploads and analysis, Deep Research where available, and custom GPT creation/use.

Useful built-in tools for this workflow:

### 1. File Uploads And Analysis

Use this when you have:

- website copy in a document
- exported CMS content
- blog drafts
- spreadsheets of page titles/meta descriptions
- competitor notes
- a content brief

ChatGPT can upload and work with common document, spreadsheet, presentation, and text file types. This is enough for a lot of content QA and rewrite workflows.

For Human Pass-style work, ask it to:

- find generic AI phrases
- identify repeated wording
- check whether the copy matches the target search intent
- rewrite in a cleaner voice
- produce a publish-before checklist

Source: [OpenAI File Uploads FAQ](https://help.openai.com/en/articles/8555545-file-uploads-with-gpts-and-advanced-data-analysis-in-chatgpt)

### 2. Data Analysis

Use this when your SEO/CRO work is spreadsheet-shaped.

Good use cases:

- analysing page title/meta description exports
- grouping URLs by intent
- spotting duplicate titles
- finding missing metadata
- reviewing conversion-rate exports
- summarising GA4 or Search Console CSVs

Source: [Extracting Insights with ChatGPT Data Analysis](https://help.openai.com/en/articles/9213685-extracting-insights-with-chatgpt-data-analysis)

### 3. Projects

Projects are useful if this becomes a repeat workflow. Put all context in one place:

- brand voice rules
- examples of good copy
- examples of banned copy
- SEO checklist
- preferred CTA style
- product notes
- previous reviews

Then every new copy-review chat starts from the same context instead of you rebuilding the prompt from scratch.

Source: [Projects in ChatGPT](https://help.openai.com/en/articles/10169521)

### 4. Canvas

Canvas is useful for editing a draft directly. You can highlight a specific section and ask for targeted changes instead of getting the whole page rewritten every time.

Good for:

- tightening intros
- rewriting only CTAs
- reducing fluff without changing structure
- comparing variants
- editing code or copy side-by-side

Source: [ChatGPT Canvas](https://help.openai.com/en/articles/9930697)

### 5. Custom GPTs

A custom GPT is probably the closest no-code version of this project.

You could create a private GPT called something like **Human Pass: SEO Copy Cleaner** and give it permanent instructions:

- flag AI snack phrases
- preserve factual meaning
- rewrite in plain English
- produce SEO/CRO notes
- always include a human review checklist
- never invent claims, statistics, or product details

You can also upload knowledge files, such as brand guidelines or a banned-phrases list.

Source: [Creating a GPT](https://help.openai.com/en/articles/8554397-creating-a-gpt%3F.class) and [GPTs in ChatGPT](https://help.openai.com/en/articles/8798620-gpts-chatgpt-business-version)

### 6. Connectors

Connectors let ChatGPT pull context from connected tools such as Google Drive, GitHub, SharePoint, Gmail, and similar services, depending on plan, region, and availability in your account.

For this project, connectors could help if your copy, briefs, brand docs, or content calendars live in connected apps.

Important UK note: OpenAI availability can vary by region and plan. If a connector or Deep Research connector is not visible in your account, that may be a regional/product rollout limitation rather than user error.

Source: [Connectors in ChatGPT](https://help.openai.com/en/articles/11487775/) and [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-advanced-data-analysis)

### 7. Deep Research

Deep Research is more useful before rewriting than during rewriting.

Use it to:

- research competitors
- compare how similar products describe themselves
- gather current SEO/topic context
- build a content brief
- find evidence for claims

Then use normal chat/canvas for the actual rewrite.

Source: [Introducing Deep Research](https://openai.com/index/introducing-deep-research/)

## Claude Pro Tools That Help

Claude's consumer paid plan is called Pro rather than Plus. Claude is particularly useful for long-form editing, tone work, and creating shareable artifacts.

Useful built-in tools for this workflow:

### 1. Artifacts

Artifacts are standalone outputs such as documents, code snippets, simple websites, diagrams, SVGs, or interactive React components.

For this workflow, Claude could create:

- a reusable copy-review checklist
- a mini single-page HTML tool
- an editable content audit template
- a rewrite table with before/after examples
- a simple dashboard-style artifact for reviewing page copy

Source: [Anthropic: What are artifacts?](https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them)

### 2. Projects And Project Knowledge

Claude Projects are useful for repeat workflows. Add your tone guide, product notes, SEO checklist, and examples. Claude can then use that knowledge repeatedly.

Anthropic says RAG for Projects is available for paid Claude.ai plans and helps projects handle more knowledge as they grow.

Source: [Anthropic: RAG for Projects](https://support.anthropic.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects)

### 3. File Uploads

Claude can work with common document types including PDF, DOCX, CSV, TXT, HTML, JSON, and XLSX, with some conditions. This makes it useful for copy docs, page exports, HTML snippets, and content spreadsheets.

Source: [Anthropic: document uploads](https://support.anthropic.com/en/articles/8241126-what-kinds-of-documents-can-i-upload-to-claude-ai)

### 4. Analysis Tool

Claude's analysis tool can write and run JavaScript for calculations, data work, CSV analysis, and visualizations.

For Human Pass-style work, this could support:

- CSV content audits
- duplicate title/meta checks
- phrase frequency analysis
- readability-style metrics
- before/after summary tables

Source: [Anthropic: Analysis tool](https://support.anthropic.com/en/articles/10008684-enabling-and-using-the-analysis-tool)

### 5. Web Search

Claude can use web search for current information when enabled. This is useful when you need current market context, competitor examples, or recent SEO/search behaviour.

Source: [Anthropic: Web Search](https://support.anthropic.com/en/articles/10684626-enabling-and-using-web-search)

### 6. Connectors

Claude connectors can connect to tools and data sources. Anthropic's docs mention web connectors for paid plans and examples such as Google Drive, Gmail, Asana, Notion, Canva, Zapier, and others depending on availability.

For this project, connectors are useful if the content lives somewhere else and you do not want to copy/paste everything manually.

Source: [Anthropic: Browsing and connecting to tools](https://support.anthropic.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) and [Anthropic: Connect your tools](https://support.anthropic.com/en/articles/11817150-connect-your-tools-to-unlock-a-smarter-more-capable-ai-companion)

## What Can Already Do Most Of Human Pass?

### Best No-Code Setup In ChatGPT Plus

Use:

- Project for persistent context
- uploaded brand/SEO docs
- file upload for draft copy
- Canvas for editing
- Custom GPT if you want a reusable assistant
- Deep Research for competitor/topic research where available

This is probably the most straightforward way to recreate Human Pass as a no-code assistant.

### Best No-Code Setup In Claude Pro

Use:

- Project for persistent context
- uploaded examples and checklists
- Artifacts for reusable outputs and mini-tools
- analysis tool for CSV/content audits
- web search for current context

Claude is especially strong if you want the output to feel like an editable working document or artifact.

## Suggested Prompt For A One-Off Review

Copy and paste this into ChatGPT or Claude, then paste your page copy underneath it.

```text
You are an SEO/CRO copy editor helping me remove obvious AI-generated filler from website copy.

Your job:
1. Preserve the factual meaning. Do not invent claims, features, stats, awards, pricing, or guarantees.
2. Flag generic AI/corporate phrases, vague claims, repeated wording, awkward hyphenation, and weak CTAs.
3. Check basic SEO hygiene: likely search intent, H1 clarity, title/meta description suggestions, internal-link opportunities, image-alt opportunities, and schema ideas if relevant.
4. Check basic CRO hygiene: clarity of offer, friction, CTA specificity, proof points, and whether the page explains the next step.
5. Rewrite the copy in plain English with a human tone. Keep useful specificity. Remove fluff.
6. Give me a human review checklist before publishing.

Output format:
- Summary: 3 bullets max
- Flagged issues table: issue, example, why it matters, suggested fix
- Rewritten draft
- SEO notes
- CRO notes
- Human review checklist

Tone target:
Clear, specific, warm, commercially useful, and not LinkedIn sludge.

Here is the copy:

[PASTE COPY HERE]
```

## Suggested Prompt For A Reusable Project Or Custom GPT

Use this as project instructions or custom GPT instructions.

```text
You are Human Pass, an AI-assisted SEO and CRO content cleanup assistant.

Purpose:
Help users turn rough, generic, or AI-sounding website copy into clearer, more specific, more publishable copy while keeping a human editor in control.

Rules:
- Never invent facts, statistics, product capabilities, legal claims, awards, or customer proof.
- Preserve accurate meaning unless the user asks for a strategic rewrite.
- Flag uncertainty instead of pretending to know.
- Prefer plain English over corporate language.
- Remove generic AI filler such as "ever-evolving", "seamless", "leverage", "unlock", "robust", "cutting-edge", "dynamic", "empower", and similar vague phrasing.
- Keep brand personality where it helps. Do not flatten everything into bland compliance copy.
- Always separate automated suggestions from human review requirements.

When reviewing copy, always provide:
1. A short diagnosis.
2. A table of flagged issues.
3. A cleaned rewrite.
4. SEO recommendations.
5. CRO recommendations.
6. A human review checklist.

When the user provides HTML, also check:
- H1 presence and clarity
- title/meta description if present
- link text quality
- image alt text if visible
- obvious accessibility issues
- CTA placement and wording

Default voice:
Clear, specific, lightly warm, commercially useful, and allergic to LinkedIn sludge.
```

## Suggested Prompt For A CSV Content Audit

Use this with ChatGPT Data Analysis or Claude's analysis tool.

```text
I have uploaded a CSV export of website pages.

Please audit it for SEO and AI-snack copy issues.

Look for:
- missing or duplicate page titles
- missing or duplicate meta descriptions
- titles over roughly 60 characters
- meta descriptions over roughly 160 characters
- vague AI/corporate phrases
- weak CTA language
- repeated words
- unclear page intent
- pages that may need a human review before publishing

Return:
1. A plain-English summary.
2. A prioritized issue list.
3. A table of affected URLs/pages.
4. Suggested replacement titles and meta descriptions where possible.
5. A checklist for the human reviewer.

Do not invent product claims or facts. If a better title/meta needs more context, mark it as "needs human input".
```

## Practical Takeaway

The local Human Pass app is useful because it is tiny, transparent, and yours. But if someone just wants to do the job today, ChatGPT Plus or Claude Pro can already cover most of the workflow with uploads, projects, editable documents/artifacts, analysis tools, and a good prompt.

The important bit is the operating model:

```text
AI does the first-pass sorting and cleanup.
Human does judgement, taste, truth, and final publish decision.
```

That is the bit worth keeping.
