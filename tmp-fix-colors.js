const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'tubemagic-in', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = {
  'var(--accent-green)': 'var(--accent-orange)',
  'var(--brand-teal)': 'var(--brand-red)',
  'var(--brand-teal-dark)': 'var(--brand-red-dark)',
  'var(--text-on-teal)': 'var(--text-on-red)',
  'var(--accent-green-dim)': 'var(--accent-orange-dim)',
  'rgba(57,255,20,0.2)': 'rgba(255, 107, 0, 0.2)'
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.split(key).join(value);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Colors replaced successfully!');
