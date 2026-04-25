const assert = require("node:assert/strict");
const { analyzeContent, sample } = require("../src/analyzer.js");

const result = analyzeContent(sample, { intent: "conversion", voice: "plain" });

assert.ok(result.inputWords > 20, "counts input words");
assert.ok(result.outputWords > 20, "counts output words");
assert.ok(result.issues.some((issue) => issue.type === "AI snack"), "flags AI snack phrasing");
assert.ok(result.issues.some((issue) => issue.label === "Repeated words"), "flags repeated words");
assert.ok(!result.rewritten.includes("maintaining and and updating"), "removes repeated conjunction typo");
assert.ok(result.rewritten.includes("data-driven"), "hyphenates data-driven");
assert.ok(result.scores.snack >= 0 && result.scores.snack <= 100, "snack score is bounded");

console.log("Analyzer tests passed");
