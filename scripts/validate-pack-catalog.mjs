#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import crypto from "node:crypto";

const repoRoot = resolve(import.meta.dirname, "..");
const requiredPackFiles = [
  "package.ts",
  "pack.json",
  "dependencies.json",
  "signatures.json",
  "objects/settings/defaults.json",
  "objects/workflows/default.json",
  "objects/dashboards/overview.json",
  "objects/reports/overview.json",
  "objects/automations/default.json",
  "tests/validation.json",
  "README.md"
];
const expectedPackIds = [
  "localization-global-base",
  "localization-india",
  "localization-united-states",
  "sector-manufacturing",
  "sector-trading-distribution",
  "sector-retail",
  "sector-epc-professional-delivery",
  "sector-ecommerce",
  "sector-education",
  "sector-healthcare",
  "sector-professional-services",
  "sector-financial-services-compliance",
  "sector-nonprofit"
];
const failures = [];

for (const relativePath of ["README.md", "DEVELOPER.md", "TODO.md", "SECURITY.md", "CONTRIBUTING.md", "catalog/index.json", "channels/next.json", "channels/stable.json"]) {
  if (!existsSync(join(repoRoot, relativePath))) {
    failures.push(`Missing file: ${relativePath}`);
  }
}

const catalog = JSON.parse(readFileSync(join(repoRoot, "catalog/index.json"), "utf8"));
const channelNext = JSON.parse(readFileSync(join(repoRoot, "channels/next.json"), "utf8"));
const channelStable = JSON.parse(readFileSync(join(repoRoot, "channels/stable.json"), "utf8"));

if (catalog.schemaVersion !== 1) {
  failures.push("catalog/index.json must declare schemaVersion 1.");
}
if (channelNext.id !== "next") {
  failures.push("channels/next.json must declare id 'next'.");
}
if (channelStable.id !== "stable") {
  failures.push("channels/stable.json must declare id 'stable'.");
}

const catalogIds = catalog.packages.map((entry) => entry.id);
for (const expected of expectedPackIds) {
  if (!catalogIds.includes(expected)) {
    failures.push(`catalog/index.json is missing ${expected}`);
  }
  const packRoot = join(repoRoot, "packs", expected);
  for (const requiredFile of requiredPackFiles) {
    if (!existsSync(join(packRoot, requiredFile))) {
      failures.push(`packs/${expected} is missing ${requiredFile}`);
    }
  }

  if (existsSync(join(packRoot, "signatures.json"))) {
    const signatures = JSON.parse(readFileSync(join(packRoot, "signatures.json"), "utf8"));
    const trackedFiles = Array.isArray(signatures.files) ? signatures.files : [];
    for (const tracked of trackedFiles) {
      const trackedPath = join(packRoot, tracked.path);
      if (!existsSync(trackedPath)) {
        failures.push(`packs/${expected} signatures.json references missing file ${tracked.path}`);
        continue;
      }

      const actualDigest = crypto.createHash("sha256").update(readFileSync(trackedPath)).digest("hex");
      if (tracked.sha256 !== actualDigest) {
        failures.push(`packs/${expected} digest mismatch for ${tracked.path}`);
      }
    }
  }
}

for (const entry of channelNext.packages) {
  if (!expectedPackIds.includes(entry.id)) {
    failures.push(`channels/next.json references unexpected pack ${entry.id}`);
  }
}
for (const entry of channelStable.packages) {
  const signatures = JSON.parse(readFileSync(join(repoRoot, "packs", entry.id, "signatures.json"), "utf8"));
  if (!signatures.signed || signatures.trustTier !== "first-party-signed") {
    failures.push(`channels/stable.json references unsigned or untrusted pack ${entry.id}`);
  }
}

if (failures.length > 0) {
  console.error("Business pack catalog validation failed:");
  for (const failure of failures) {
    console.error("- " + failure);
  }
  process.exit(1);
}

console.log("Business pack catalog validation passed.");
