# Gutu Business Packs Developer Notes

## Purpose And Architecture Role

This repo is the extracted first-party catalog for Business OS localization and sector packs.

## Repo Map

- `catalog/index.json`: canonical pack inventory
- `channels/*.json`: installable preview and promoted stable channels
- `packs/*`: individual pack artifacts with manifest, payload, and validation fixtures
- `scripts/validate-pack-catalog.mjs`: local integrity validation for the pack catalog
- `scripts/sign-pack-catalog.mjs`: digest and signature generation for pack promotion
- `scripts/promote-pack-channel.mjs`: stable-channel promotion for signed packs

## Pack Contract

- Every pack exports a `package.ts` manifest with package kind metadata.
- Every pack exports a deployable `pack.json`, `dependencies.json`, and `signatures.json`.
- Every pack ships object payloads for settings, workflows, and dashboards plus a validation fixture.
- Packs are dry-run previewable, rollback-aware, and promotion-gated through digest or signature metadata.

## Current Truth

- 13 packs are scaffolded here across localization and sector groups.
- Channels are preview-first, but stable promotion is now scriptable for packs signed with the first-party signing secret.
- The Business OS verification lane validates presence, previewability, and catalog integrity for this repo.
