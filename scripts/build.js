const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const sourceFile = path.join(projectRoot, "index.html");
const outputDirectory = path.join(projectRoot, "dist");
const outputFile = path.join(outputDirectory, "index.html");

if (!fs.existsSync(sourceFile)) {
  console.error("Build failed: index.html was not found.");
  process.exit(1);
}

fs.mkdirSync(outputDirectory, { recursive: true });
fs.copyFileSync(sourceFile, outputFile);

console.log("Build successful: dist/index.html was created.");
