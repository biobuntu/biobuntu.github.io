#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function usage() {
  console.log('Usage: node scripts/validate-jsonld.js <path-to-html>');
  process.exit(1);
}

const filePath = process.argv[2];
if (!filePath) usage();
if (!fs.existsSync(filePath)) {
  console.error('File not found:', filePath);
  process.exit(2);
}

const html = fs.readFileSync(filePath, 'utf8');
const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
let m;
const blocks = [];
while ((m = re.exec(html)) !== null) {
  blocks.push(m[1].trim());
}

console.log('File:', filePath);
console.log('Found JSON-LD script blocks:', blocks.length);
if (blocks.length === 0) process.exit(0);

blocks.forEach((raw, i) => {
  console.log('\n--- Block', i + 1, '---');
  try {
    const parsed = JSON.parse(raw);
    // Determine type info
    const summary = extractTypeSummary(parsed);
    console.log('Parsed JSON-LD OK. Summary:', summary);
  } catch (err) {
    // Try to recover if the JSON-LD is double-encoded (a quoted JSON string)
    try {
      const unquoted = JSON.parse('"' + raw.replace(/"/g, '\\"') + '"');
      const reparsed = JSON.parse(unquoted);
      const summary = extractTypeSummary(reparsed);
      console.log('Recovered by double-parse. Summary:', summary);
    } catch (err2) {
      console.error('JSON parse error:', err.message);
      console.error('First 200 chars of raw block:\n', raw.slice(0, 200));
    }
  }
});

function extractTypeSummary(obj) {
  try {
    if (Array.isArray(obj)) {
      return obj.map(el => typeOf(el)).slice(0, 5);
    }
    if (typeof obj === 'object' && obj !== null) {
      if (obj['@graph']) return ['@graph:' + obj['@graph'].map(typeOf).slice(0,5).join(',')];
      return [typeOf(obj)];
    }
    return [typeof obj];
  } catch (e) {
    return ['unknown'];
  }
}

function typeOf(o) {
  if (!o) return String(o);
  if (typeof o === 'string') return 'string';
  if (Array.isArray(o)) return 'Array';
  if (o['@type']) return o['@type'];
  if (o['type']) return o['type'];
  return Object.prototype.toString.call(o);
}
