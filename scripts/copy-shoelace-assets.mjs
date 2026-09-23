import { cpSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'node_modules/@shoelace-style/shoelace/cdn/assets');
const dest = resolve(root, 'public/shoelace/assets');

if (existsSync(src)) {
  cpSync(src, dest, { recursive: true });
  console.log('Shoelace-Assets nach public/shoelace kopiert.');
}
