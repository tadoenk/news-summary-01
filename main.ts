import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const summaryPath = path.join(__dirname, 'summary.txt');
if (!fs.existsSync(summaryPath)) {
  console.error(`Error: summary.txt not found at ${summaryPath}`);
  process.exit(1);
}

const content = fs.readFileSync(summaryPath, 'utf8');
const codePoints = Array.from(content).length;

if (codePoints < 1 || codePoints > 2000) {
  console.error(`Error: summary.txt has ${codePoints} code points (must be between 1 and 2000).`);
  process.exit(1);
}

if (/^\s*$/.test(content)) {
  console.error('Error: summary.txt contains only whitespace.');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, 'entry.txt');
fs.writeFileSync(outPath, content, 'utf8');

console.log(`Successfully wrote ${codePoints} code points to ${outPath}`);
