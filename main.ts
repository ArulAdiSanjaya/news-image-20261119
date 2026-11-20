// news-image-20261119 entry program (Node 22, standard library only).
// The entry is one image, entry.png beside this file, summing up the world
// news of Thursday 19 November 2026. The program copies it to
// /output/entry.png, which is the file the gate checks and the judge sees.
// Before copying it verifies the image obeys the bounty's limits (PNG or
// JPEG, at most 1 MiB, at most 1024 by 1024), so a bad asset fails loudly
// here instead of scoring a silent zero at the gate.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1_048_576;
const MAX_SIDE = 1024;

function pngSize(buf: Buffer): [number, number] {
  // IHDR width/height are big-endian uint32 at bytes 16..24.
  return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
}

function checkImage(buf: Buffer): void {
  if (buf.length > MAX_BYTES) {
    throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB cap`);
  }
  const isPng = buf.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const isJpeg = buf[0] === 0xff && buf[1] === 0xd8;
  if (!isPng && !isJpeg) {
    throw new Error('entry.png is neither a PNG nor a JPEG');
  }
  if (isPng) {
    const [w, h] = pngSize(buf);
    if (w > MAX_SIDE || h > MAX_SIDE) {
      throw new Error(`entry.png is ${w}x${h}, over the ${MAX_SIDE}px cap`);
    }
    console.log(`entry.png: PNG ${w}x${h}, ${buf.length} bytes`);
  } else {
    console.log(`entry.png: JPEG, ${buf.length} bytes`);
  }
}

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const original = readFileSync(src);
checkImage(original);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
// The grader runs this program twice and both runs must write the same
// bytes: verify the copy that landed is byte-identical to the source.
const landed = readFileSync(join(outDir, 'entry.png'));
if (!landed.equals(original)) {
  throw new Error('copied entry.png differs from the repository image');
}
console.log(`copied entry.png to ${outDir}/entry.png (verified identical)`);
