#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "..");
const channelId = process.argv[2] ?? "stable";
if (channelId !== "stable") {
  throw new Error("Only stable promotion is supported by this script.");
}

const catalog = JSON.parse(readFileSync(join(repoRoot, "catalog/index.json"), "utf8"));
const nextChannel = JSON.parse(readFileSync(join(repoRoot, "channels/next.json"), "utf8"));
const promoted = [];

for (const entry of nextChannel.packages) {
  const signatures = JSON.parse(readFileSync(join(repoRoot, "packs", entry.id, "signatures.json"), "utf8"));
  if (!signatures.signed || signatures.trustTier !== "first-party-signed") {
    continue;
  }
  promoted.push({
    ...entry,
    channel: "stable",
    signatureStatus: "signed"
  });
}

const stableChannel = {
  schemaVersion: 1,
  id: "stable",
  packages: promoted.sort((left, right) => left.id.localeCompare(right.id))
};

writeFileSync(join(repoRoot, "channels/stable.json"), JSON.stringify(stableChannel, null, 2) + "\n", "utf8");

const nextPackageMap = new Map(nextChannel.packages.map((entry) => [entry.id, entry]));
const catalogPackages = catalog.packages.map((entry) =>
  promoted.some((promotedEntry) => promotedEntry.id === entry.id)
    ? {
        ...entry,
        promotedChannel: "stable",
        signatureStatus: "signed"
      }
    : {
        ...entry,
        promotedChannel: nextPackageMap.has(entry.id) ? "next" : entry.promotedChannel ?? "next",
        signatureStatus: entry.signatureStatus ?? "unsigned"
      }
);

writeFileSync(
  join(repoRoot, "catalog/index.json"),
  JSON.stringify(
    {
      ...catalog,
      packages: catalogPackages
    },
    null,
    2
  ) + "\n",
  "utf8"
);

console.log(`Promoted ${promoted.length} signed pack(s) into stable.`);
