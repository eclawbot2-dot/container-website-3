#!/usr/bin/env node
// Post-build sanity checks on the static export in ./out.
// Run after `next build` (output: 'export'). Fails loudly (exit 1) on:
//  - sitemap URLs that don't have a matching out/**/index.html
//  - expected routes missing from the sitemap
//  - JSON-LD blocks that don't parse or lack required MusicEvent fields
//  - referenced /photos/* files missing from the export
//  - robots.txt not pointing at the sitemap
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'out');
const SITE_URL = 'https://container3.jahdev.com';
let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`FAIL: ${msg}`);
};
const ok = (msg) => console.log(`  ok: ${msg}`);

if (!existsSync(OUT)) {
  console.error('FAIL: ./out does not exist — run `next build` first.');
  process.exit(1);
}

// ── sitemap ↔ exported pages ───────────────────────────────────────────────
const sitemap = readFileSync(join(OUT, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length === 0) fail('sitemap.xml has no <loc> entries');
for (const loc of locs) {
  if (!loc.startsWith(SITE_URL)) fail(`sitemap loc not on ${SITE_URL}: ${loc}`);
  const path = loc.slice(SITE_URL.length).replace(/\/$/, '');
  const file = join(OUT, path, 'index.html');
  if (existsSync(file)) ok(`sitemap route exported: ${loc}`);
  else fail(`sitemap lists ${loc} but ${file} is missing`);
}

// Every exported event page must be in the sitemap (no orphan pages).
const eventsDir = join(OUT, 'events');
if (existsSync(eventsDir)) {
  for (const slug of readdirSync(eventsDir)) {
    const url = `${SITE_URL}/events/${slug}/`;
    if (!locs.includes(url)) fail(`exported event page not in sitemap: ${url}`);
  }
}

// ── robots.txt ──────────────────────────────────────────────────────────────
const robots = readFileSync(join(OUT, 'robots.txt'), 'utf8');
if (robots.includes(`${SITE_URL}/sitemap.xml`)) ok('robots.txt references sitemap');
else fail('robots.txt does not reference the sitemap URL');

// ── per-page checks: JSON-LD validity + local asset references ─────────────
const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory() && name.name !== '_next') walk(p);
    else if (name.name === 'index.html') htmlFiles.push(p);
  }
})(OUT);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = file.slice(OUT.length).replace(/\\/g, '/');

  // JSON-LD must parse; MusicEvent blocks need name+startDate+location.
  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];
  for (const [, raw] of blocks) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      fail(`${rel}: JSON-LD does not parse (${e.message})`);
      continue;
    }
    const events =
      data['@type'] === 'MusicEvent'
        ? [data]
        : Array.isArray(data.event)
          ? data.event
          : [];
    for (const ev of events) {
      for (const key of ['name', 'startDate', 'location']) {
        if (!ev[key]) fail(`${rel}: MusicEvent missing ${key}`);
      }
      if (ev.startDate && !/^\d{4}-\d{2}-\d{2}/.test(ev.startDate)) {
        fail(`${rel}: MusicEvent startDate not ISO: ${ev.startDate}`);
      }
    }
  }
  if (blocks.length > 0) ok(`${rel}: ${blocks.length} JSON-LD block(s) valid`);

  // Every referenced local /photos/* asset must exist in the export
  // (quoted attribute refs and CSS url(...) refs).
  const photoRefs = new Set([
    ...[...html.matchAll(/["'](\/photos\/[^"']+\.jpg)["']/g)].map((m) => m[1]),
    ...[...html.matchAll(/url\((\/photos\/[^)"']+\.jpg)\)/g)].map((m) => m[1]),
  ]);
  for (const ref of photoRefs) {
    if (!existsSync(join(OUT, ref))) fail(`${rel}: missing asset ${ref}`);
  }
}

// ── canonical tags ──────────────────────────────────────────────────────────
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = file.slice(OUT.length).replace(/\\/g, '/');
  if (rel === '/404/index.html') continue;
  if (!/rel="canonical"/.test(html)) fail(`${rel}: missing canonical tag`);
}

console.log(
  failures === 0
    ? `\nverify-static: all checks passed (${htmlFiles.length} pages).`
    : `\nverify-static: ${failures} failure(s).`,
);
process.exit(failures === 0 ? 0 : 1);
