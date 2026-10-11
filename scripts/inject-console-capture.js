const fs = require('fs');
const path = require('path');

const SCRIPT_TAG = '<script src="/dashboard-console-capture.js"></script>';

function findHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('dashboard-console-capture.js')) return;
  if (content.includes('</head>')) {
    content = content.replace('</head>', `  ${SCRIPT_TAG}\n</head>`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function run() {
  const buildDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(buildDir)) {
    console.log('No .next build directory found, skipping console capture injection.');
    return;
  }
  const htmlFiles = findHtmlFiles(buildDir);
  htmlFiles.forEach(injectScript);
  console.log(`Injected console capture script into ${htmlFiles.length} HTML file(s).`);
}

run();