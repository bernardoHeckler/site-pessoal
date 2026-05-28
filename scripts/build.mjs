import { spawnSync } from 'node:child_process';
import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const nodeMajor = Number.parseInt(process.versions.node.split('.')[0], 10);

if (nodeMajor < 20 && process.env.BUILD_WITH_WEBCRYPTO !== '1') {
  const nodeOptions = [
    process.env.NODE_OPTIONS,
    '--experimental-global-webcrypto',
  ].filter(Boolean).join(' ');

  const result = spawnSync(process.execPath, [fileURLToPath(import.meta.url)], {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_OPTIONS: nodeOptions,
      BUILD_WITH_WEBCRYPTO: '1',
    },
  });

  process.exit(result.status ?? 1);
}

const { build } = await import('vite');

await build();
await mkdir('dist', { recursive: true });
await Promise.all([
  copyFile('sitemap.xml', 'dist/sitemap.xml'),
  copyFile('robots.txt', 'dist/robots.txt'),
]);
