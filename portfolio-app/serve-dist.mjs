import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(here, 'dist');
const portArgIndex = process.argv.indexOf('--port');
const port = portArgIndex >= 0 ? Number(process.argv[portArgIndex + 1]) : 5174;

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const readStaticFile = async (pathname) => {
  const requested = pathname === '/' ? '/index.html' : pathname;
  const filePath = normalize(join(root, decodeURIComponent(requested)));

  if (!filePath.startsWith(root)) {
    return { status: 403, body: 'Forbidden', type: 'text/plain; charset=utf-8' };
  }

  try {
    return {
      status: 200,
      body: await readFile(filePath),
      type: types[extname(filePath).toLowerCase()] || 'application/octet-stream',
    };
  } catch {
    return {
      status: 200,
      body: await readFile(join(root, 'index.html')),
      type: types['.html'],
    };
  }
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const file = await readStaticFile(url.pathname);

  response.writeHead(file.status, { 'Content-Type': file.type });
  response.end(file.body);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving portfolio_codex/dist at http://127.0.0.1:${port}/`);
});
