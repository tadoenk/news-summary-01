import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const summaryPath = path.join(__dirname, 'summary.txt');

if (!fs.existsSync(summaryPath)) {
  console.error(`Error: summary.txt is missing at path: ${summaryPath}`);
  process.exit(1);
}

let sourceBytes: Buffer;
try {
  sourceBytes = fs.readFileSync(summaryPath);
} catch (err: any) {
  console.error(`Error: Failed to read summary.txt: ${err.message}`);
  process.exit(1);
}

// BOM guard: check for UTF-8 BOM (0xEF 0xBB 0xBF)
if (sourceBytes.length >= 3 && sourceBytes[0] === 0xEF && sourceBytes[1] === 0xBB && sourceBytes[2] === 0xBF) {
  console.error('Error: summary.txt starts with a UTF-8 BOM.');
  process.exit(1);
}

let content: string;
try {
  const decoder = new TextDecoder('utf-8', { fatal: true });
  content = decoder.decode(sourceBytes);
} catch (err: any) {
  console.error(`Error: summary.txt is not valid UTF-8: ${err.message}`);
  process.exit(1);
}

// Line-ending guard: check for carriage returns (\r)
if (content.includes('\r')) {
  console.error('Error: summary.txt contains carriage returns / non-LF line endings.');
  process.exit(1);
}

if (content.trim().length === 0) {
  console.error('Error: summary.txt content is empty or contains only whitespace.');
  process.exit(1);
}

const charCount = content.length;
if (charCount < 1 || charCount > 2000) {
  console.error(`Error: summary.txt character count (${charCount}) is outside the permitted 1..2000 range.`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = path.join(outputDir, 'entry.txt');

try {
  fs.mkdirSync(outputDir, { recursive: true });
} catch (err: any) {
  console.error(`Error: Failed to create output directory ${outputDir}: ${err.message}`);
  process.exit(1);
}

try {
  fs.writeFileSync(outputPath, sourceBytes);
} catch (err: any) {
  console.error(`Error: Failed to write entry.txt to ${outputPath}: ${err.message}`);
  process.exit(1);
}

let writtenBytes: Buffer;
try {
  writtenBytes = fs.readFileSync(outputPath);
} catch (err: any) {
  console.error(`Error: Failed to read back entry.txt from ${outputPath}: ${err.message}`);
  process.exit(1);
}

if (!sourceBytes.equals(writtenBytes)) {
  console.error('Error: Byte mismatch between source summary.txt and written entry.txt.');
  process.exit(1);
}

console.log(`Success: entry.txt written successfully. Character count: ${charCount}`);
