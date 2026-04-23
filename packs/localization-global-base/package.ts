import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "localization-global-base",
  "kind": "localization-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Localization Global Base",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Baseline numbering, currency, translation, and common fiscal-policy overlays shared by localized business deployments.",
  "dependsOn": [
    "party-relationships-core",
    "product-catalog-core",
    "pricing-tax-core",
    "traceability-core",
    "accounting-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "party-relationships-core",
      "class": "required",
      "rationale": "Localization Global Base depends on party-relationships-core for governed pack installation."
    },
    {
      "packageId": "product-catalog-core",
      "class": "required",
      "rationale": "Localization Global Base depends on product-catalog-core for governed pack installation."
    },
    {
      "packageId": "pricing-tax-core",
      "class": "required",
      "rationale": "Localization Global Base depends on pricing-tax-core for governed pack installation."
    },
    {
      "packageId": "traceability-core",
      "class": "required",
      "rationale": "Localization Global Base depends on traceability-core for governed pack installation."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Localization Global Base depends on accounting-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.localization-global-base"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.localization-global-base.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.localization-global-base.install-preview"
  ],
  "publicQueries": [
    "packs.localization-global-base.summary"
  ],
  "publicEvents": [
    "packs.localization-global-base.applied.v1"
  ]
});
