#!/usr/bin/env tsx
/**
 * i18n Hardcoded String Scanner
 * 
 * Scans source files for potentially hardcoded user-facing strings
 * that should be internationalized.
 * 
 * Usage: npx tsx scripts/i18n-scan.ts
 */

import * as fs from "fs";
import * as path from "path";

const SCAN_DIRS = ["client/src"];
const EXTENSIONS = [".tsx", ".ts"];

const IGNORE_PATTERNS = [
  /^import\s/,
  /^export\s/,
  /console\.(log|warn|error|info)/,
  /throw new Error/,
  /localStorage\./,
  /data-testid=/,
  /className=/,
  /href=/,
  /target=/,
  /rel=/,
  /type=/,
  /\.tsx?$/,
  /\.css$/,
  /\.json$/,
  /^\s*\/\//,
  /^\s*\*/,
  /^\/\*\*/,
];

const MIN_STRING_LENGTH = 3;

interface HardcodedString {
  file: string;
  line: number;
  content: string;
  context: string;
}

const findings: HardcodedString[] = [];

function shouldIgnoreLine(line: string): boolean {
  return IGNORE_PATTERNS.some((pattern) => pattern.test(line.trim()));
}

function extractStrings(line: string): string[] {
  const strings: string[] = [];
  
  // Match double-quoted strings
  const doubleQuoted = line.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
  // Match single-quoted strings
  const singleQuoted = line.match(/'([^'\\]*(\\.[^'\\]*)*)'/g) || [];
  // Match template literals (simple ones)
  const templateLiterals = line.match(/`([^`\\]*(\\.[^`\\]*)*)`/g) || [];
  
  [...doubleQuoted, ...singleQuoted, ...templateLiterals].forEach((s) => {
    // Remove quotes
    const content = s.slice(1, -1);
    
    // Skip if too short
    if (content.length < MIN_STRING_LENGTH) return;
    
    // Skip if it looks like a technical string
    if (/^[a-z_\-\/\.]+$/i.test(content)) return; // paths, keys
    if (/^#[0-9a-f]{3,8}$/i.test(content)) return; // colors
    if (/^\d+(\.\d+)?$/.test(content)) return; // numbers
    if (/^(true|false|null|undefined)$/i.test(content)) return;
    if (/^(https?|mailto):/.test(content)) return; // URLs
    if (content.startsWith("t.")) return; // Translation keys
    if (content.includes("{{") || content.includes("{count}")) return; // ICU
    
    // Check if it contains letters (likely user-facing text)
    if (/[A-Za-z]/.test(content) && /\s/.test(content)) {
      strings.push(content);
    }
  });
  
  return strings;
}

function scanFile(filePath: string): void {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  
  lines.forEach((line, index) => {
    if (shouldIgnoreLine(line)) return;
    
    const strings = extractStrings(line);
    strings.forEach((str) => {
      findings.push({
        file: filePath,
        line: index + 1,
        content: str,
        context: line.trim().slice(0, 100),
      });
    });
  });
}

function scanDirectory(dir: string): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (!entry.name.startsWith(".") && entry.name !== "node_modules") {
        scanDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      if (EXTENSIONS.some((ext) => entry.name.endsWith(ext))) {
        scanFile(fullPath);
      }
    }
  }
}

// Run scan
console.log("i18n Hardcoded String Scanner\n");
console.log("Scanning for potentially hardcoded user-facing strings...\n");

for (const dir of SCAN_DIRS) {
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
}

// Group by file
const byFile: Record<string, HardcodedString[]> = {};
for (const finding of findings) {
  if (!byFile[finding.file]) {
    byFile[finding.file] = [];
  }
  byFile[finding.file].push(finding);
}

// Print results
if (Object.keys(byFile).length === 0) {
  console.log("No potentially hardcoded strings found!");
} else {
  console.log(`Found ${findings.length} potential hardcoded string(s) in ${Object.keys(byFile).length} file(s):\n`);
  
  for (const [file, items] of Object.entries(byFile)) {
    console.log(`\n=== ${file} ===`);
    for (const item of items) {
      console.log(`  Line ${item.line}: "${item.content}"`);
    }
  }
  
  console.log("\n\nReview these strings and externalize user-facing text to translation files.");
}
