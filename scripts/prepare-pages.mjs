import fs from 'node:fs';
import path from 'node:path';

const output = path.resolve('dist/client');
const basePath = process.env.PAGES_BASE_PATH || '';
if (basePath && !/^\/[a-zA-Z0-9_-]+$/.test(basePath)) {
  throw new Error('Expected an empty Pages base path or a single repository path.');
}

// Vinext stores path-prefixed assets in a matching subdirectory. GitHub Pages
// already mounts this whole artifact at /repository/, so remove that extra level.
if (basePath) {
  const nestedAssets = path.join(output, basePath.slice(1), '_next');
  if (fs.existsSync(nestedAssets)) {
    fs.renameSync(nestedAssets, path.join(output, '_next'));
  }
}

const html = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url = match[1];
  if (!url.startsWith('/') || url.startsWith('//')) continue;
  if (basePath && !url.startsWith(`${basePath}/`)) {
    throw new Error(`Asset URL is missing the Pages base path: ${url}`);
  }
  const relative = url.slice(basePath.length + 1).split(/[?#]/)[0];
  if (relative && !fs.existsSync(path.join(output, relative))) {
    throw new Error(`Missing exported asset: ${url}`);
  }
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
console.log('GitHub Pages homepage and asset paths verified.');
