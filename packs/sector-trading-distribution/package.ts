import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-trading-distribution",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Trading & Distribution",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Trading and distribution overlays for sourcing, multi-warehouse fulfillment, pricing, and channel operations.",
  "dependsOn": [
    "accounting-core",
    "procurement-core",
    "sales-core",
    "inventory-core",
    "crm-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack Trading & Distribution depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "procurement-core",
      "class": "required",
      "rationale": "Sector Pack Trading & Distribution depends on procurement-core for governed pack installation."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Sector Pack Trading & Distribution depends on sales-core for governed pack installation."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Sector Pack Trading & Distribution depends on inventory-core for governed pack installation."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Sector Pack Trading & Distribution depends on crm-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.sector-trading-distribution"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-trading-distribution.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-trading-distribution.install-preview"
  ],
  "publicQueries": [
    "packs.sector-trading-distribution.summary"
  ],
  "publicEvents": [
    "packs.sector-trading-distribution.applied.v1"
  ]
});
