// news-summary-01 entry (Node 22, standard library only).
// The summary lives in summary.txt beside this file. This program reads it,
// checks it fits the gate (UTF-8 text, 1 to 2,000 Unicode code points, and at
// least one character that is not white space), then writes those exact bytes
// to /output/entry.txt. Nothing else is read, and the judge sees exactly the
// bytes written here.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = readFileSync(new URL('./summary.txt', import.meta.url), 'utf8');
const points = [...text].length;
if (points < 1 || points > 2000) throw new Error(`summary is ${points} Unicode code points, but the gate takes 1 to 2,000`);
if (!/\S/.test(text)) throw new Error('summary is only white space');
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), text, 'utf8');
