const $ = (selector) => document.querySelector(selector);

const source = $("[data-source]");
const intent = $("[data-intent]");
const voice = $("[data-voice]");
const scores = $("[data-scores]");
const issues = $("[data-issues]");
const output = $("[data-output]");
const wordCount = $("[data-word-count]");
const outputCount = $("[data-output-count]");
const checks = $("[data-checks]");
const checkCount = $("[data-check-count]");

let latest = null;

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function renderScores(scoreMap) {
  scores.innerHTML = Object.entries(scoreMap).map(([label, value]) => `
    <article class="score-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <meter min="0" max="100" value="${value}">${value}</meter>
    </article>
  `).join("");
}

function renderIssues(items) {
  if (!items.length) {
    issues.innerHTML = `<article class="issue empty"><strong>Clean enough for a first pass.</strong><span>No obvious AI snack patterns found. Still give it a human read, because computers are little goblins with confidence.</span></article>`;
    return;
  }

  issues.innerHTML = items.map((item) => `
    <article class="issue">
      <div>
        <span class="issue-type">${item.type}</span>
        <strong>${item.label}</strong>
      </div>
      <p>${item.suggestion}</p>
      <small>${item.count} hit${item.count === 1 ? "" : "s"}: ${item.examples.map(escapeHtml).join(", ")}</small>
    </article>
  `).join("");
}

function renderChecklist(items) {
  checks.innerHTML = items.map((item, index) => `
    <label class="check-item">
      <input type="checkbox" data-check="${index}" />
      <span>${escapeHtml(item)}</span>
    </label>
  `).join("");
  updateCheckCount();
}

function updateCheckCount() {
  const boxes = [...document.querySelectorAll("[data-check]")];
  const complete = boxes.filter((box) => box.checked).length;
  checkCount.textContent = `${complete} / ${boxes.length}`;
}

function render(result) {
  latest = result;
  renderScores(result.scores);
  renderIssues(result.issues);
  renderChecklist(result.checklist);
  output.innerHTML = result.rewritten ? `<pre>${escapeHtml(result.rewritten)}</pre>` : `<p class="muted">Run an analysis to generate a cleaned draft.</p>`;
  outputCount.textContent = `${result.outputWords} words after cleanup`;
  wordCount.textContent = `${result.inputWords} words`;
}

function analyze() {
  const text = source.value.trim();
  if (!text) {
    source.value = HumanPassAnalyzer.sample;
  }
  render(HumanPassAnalyzer.analyzeContent(source.value, { intent: intent.value, voice: voice.value }));
}

source.addEventListener("input", () => {
  wordCount.textContent = `${HumanPassAnalyzer.words(source.value).length} words`;
});

$("[data-analyze]").addEventListener("click", analyze);
$("[data-load-sample]").addEventListener("click", () => {
  source.value = HumanPassAnalyzer.sample;
  analyze();
});
$("[data-clear]").addEventListener("click", () => {
  source.value = "";
  latest = null;
  wordCount.textContent = "0 words";
  outputCount.textContent = "0 words";
  scores.innerHTML = "";
  issues.innerHTML = `<article class="issue empty"><strong>Waiting for content.</strong><span>Paste copy, choose intent, then analyze.</span></article>`;
  output.innerHTML = `<p class="muted">Run an analysis to generate a cleaned draft.</p>`;
  renderChecklist(HumanPassAnalyzer.analyzeContent("", {}).checklist);
});
$("[data-copy]").addEventListener("click", async () => {
  if (!latest?.rewritten) return;
  await navigator.clipboard.writeText(latest.rewritten);
  $("[data-copy]").textContent = "Copied";
  setTimeout(() => ($("[data-copy]").textContent = "Copy"), 1200);
});
$("[data-download]").addEventListener("click", () => {
  if (!latest?.rewritten) return;
  const blob = new Blob([`# Human Pass Cleanup\n\n${latest.rewritten}\n`], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "human-pass-cleanup.md";
  link.click();
  URL.revokeObjectURL(url);
});
checks.addEventListener("change", updateCheckCount);

source.value = HumanPassAnalyzer.sample;
analyze();
