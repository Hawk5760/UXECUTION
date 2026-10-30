import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let PORT = parseInt(process.env.PORT || '8080', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.bin': 'application/octet-stream',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Security: prevent directory traversal
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(__dirname, safePath);

  // If path is a directory, check index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      filePath = indexPath;
    }
  }

  // Handle clean URLs like /explore, /about, /faq, etc.
  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (pathname.startsWith('/explore')) {
      filePath = path.join(__dirname, 'explore.html');
    } else if (pathname.startsWith('/about')) {
      filePath = path.join(__dirname, 'about.html');
    } else if (pathname.startsWith('/faq')) {
      filePath = path.join(__dirname, 'faq.html');
    } else if (pathname.startsWith('/contact')) {
      filePath = path.join(__dirname, 'contact.html');
    } else if (pathname.startsWith('/privacy')) {
      filePath = path.join(__dirname, 'privacy.html');
    } else {
      // Fallback for SPA subroutes like /es/explorar, /pl/przeloty, etc.
      if (pathname.includes('/explor') || pathname.includes('/przelot') || pathname.includes('/erkund')) {
        filePath = path.join(__dirname, 'explore.html');
      } else {
        filePath = path.join(__dirname, 'index.html');
      }
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

function startServer(portToTry) {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${portToTry} in use, trying ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(portToTry, '0.0.0.0', () => {
    let localIp = '127.0.0.1';
    try {
      const nets = os.networkInterfaces();
      for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
          if (net.family === 'IPv4' && !net.internal) {
            localIp = net.address;
            break;
          }
        }
      }
    } catch {}

    console.log(`\n======================================================`);
    console.log(`🚀 CosmoAtlas server is running!`);
    console.log(`🌌 Local:       http://localhost:${portToTry}`);
    console.log(`🌐 Wi-Fi / LAN: http://${localIp}:${portToTry}`);
    console.log(`🪐 3D Cosmos:   http://localhost:${portToTry}/explore`);
    console.log(`======================================================\n`);
  });
}

startServer(PORT);
