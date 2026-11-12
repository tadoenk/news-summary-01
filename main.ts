import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const summaryPath = path.join(__dirname, 'summary.txt');

if (!fs.existsSync(summaryPath)) {
  console.error(`Error: summary.txt not found at ${summaryPath}`);
  process.exit(1);
}

const content = fs.readFileSync(summaryPath, 'utf8');

const codePointCount = Array.from(content).length;

if (codePointCount < 1 || codePointCount > 2000) {
  console.error(`Error: Content length (${codePointCount}) is outside the allowed range of 1 to 2000 Unicode code points.`);
  process.exit(1);
}

if (content.trim().length === 0) {
  console.error(`Error: Content consists solely of whitespace.`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, content, 'utf8');

const writtenContent = fs.readFileSync(outputPath, 'utf8');
if (writtenContent !== content) {
  console.error(`Error: Written content does not match in-memory content.`);
  process.exit(1);
}

console.log(`Successfully wrote ${codePointCount} code points to ${outputPath}`);
