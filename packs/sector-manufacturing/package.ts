import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-manufacturing",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Manufacturing",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Discrete manufacturing overlays for production, quality, inventory, and accounting-heavy operational flows.",
  "dependsOn": [
    "accounting-core",
    "procurement-core",
    "sales-core",
    "inventory-core",
    "manufacturing-core",
    "quality-core",
    "assets-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack Manufacturing depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "procurement-core",
      "class": "required",
      "rationale": "Sector Pack Manufacturing depends on procurement-core for governed pack installation."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Sector Pack Manufacturing depends on sales-core for governed pack installation."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Sector Pack Manufacturing depends on inventory-core for governed pack installation."
    },
    {
      "packageId": "manufacturing-core",
      "class": "required",
      "rationale": "Sector Pack Manufacturing depends on manufacturing-core for governed pack installation."
    },
    {
      "packageId": "quality-core",
      "class": "required",
      "rationale": "Sector Pack Manufacturing depends on quality-core for governed pack installation."
    },
    {
      "packageId": "assets-core",
      "class": "required",
      "rationale": "Sector Pack Manufacturing depends on assets-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.sector-manufacturing"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-manufacturing.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-manufacturing.install-preview"
  ],
  "publicQueries": [
    "packs.sector-manufacturing.summary"
  ],
  "publicEvents": [
    "packs.sector-manufacturing.applied.v1"
  ]
});
