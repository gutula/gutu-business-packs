#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import crypto from "node:crypto";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "..");
const packIds = process.argv.slice(2);
const expectedPackIds = new Set([
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
]);
const targetPackIds = packIds.length > 0 ? packIds : [...expectedPackIds];
const signingSecret = process.env.GUTU_PACK_SIGNING_SECRET ?? "";
const signer = process.env.GUTU_PACK_SIGNER ?? "local-dev";
const signMode = signingSecret ? "signed" : "digest-only";

for (const packId of targetPackIds) {
  if (!expectedPackIds.has(packId)) {
    throw new Error(`Unknown pack '${packId}'.`);
  }

  const packRoot = join(repoRoot, "packs", packId);
  const trackedPaths = [
    "package.ts",
    "pack.json",
    "dependencies.json",
    "objects/settings/defaults.json",
    "objects/workflows/default.json",
    "objects/dashboards/overview.json",
    "objects/reports/overview.json",
    "objects/automations/default.json",
    "tests/validation.json",
    "README.md"
  ];
  const files = trackedPaths.map((relativePath) => {
    const contents = readFileSync(join(packRoot, relativePath));
    return {
      path: relativePath,
      sha256: crypto.createHash("sha256").update(contents).digest("hex")
    };
  });
  const canonicalPayload = JSON.stringify(
    {
      packId,
      files
    },
    null,
    2
  );

  const signatures = {
    signed: Boolean(signingSecret),
    trustTier: signingSecret ? "first-party-signed" : "unsigned-dev",
    signer,
    signedAt: new Date().toISOString(),
    mode: signMode,
    files,
    signature: signingSecret ? crypto.createHmac("sha256", signingSecret).update(canonicalPayload).digest("hex") : null,
    note: signingSecret
      ? "Signed for promotion into stable channels."
      : "Digest-only metadata; set GUTU_PACK_SIGNING_SECRET for stable-signature generation."
  };

  writeFileSync(join(packRoot, "signatures.json"), JSON.stringify(signatures, null, 2) + "\n", "utf8");
  console.log(`Updated signatures for ${packId} (${signMode}).`);
}
