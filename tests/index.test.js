const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const htmlPath = path.join(__dirname, "..", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

test("HTML page declares English language", () => {
  assert.match(html, /<html lang="en">/);
});

test("HTML page has a responsive viewport", () => {
  assert.match(html, /name="viewport"/);
});

test("HTML page has a meaningful title", () => {
  assert.match(html, /<title>GitHub Actions Learning<\/title>/);
});

test("HTML page contains the main heading", () => {
  assert.match(html, /<h1>GitHub Actions Learning<\/h1>/);
});
