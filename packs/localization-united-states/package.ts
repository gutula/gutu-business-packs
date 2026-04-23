import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "localization-united-states",
  "kind": "localization-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Localization United States",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "United States fiscal, withholding, sales-tax, and payroll-oriented localization overlays for Gutu business deployments.",
  "dependsOn": [
    "pricing-tax-core",
    "accounting-core",
    "hr-payroll-core",
    "treasury-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "pricing-tax-core",
      "class": "required",
      "rationale": "Localization United States depends on pricing-tax-core for governed pack installation."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Localization United States depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Localization United States depends on hr-payroll-core for governed pack installation."
    },
    {
      "packageId": "treasury-core",
      "class": "required",
      "rationale": "Localization United States depends on treasury-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.localization-united-states"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.localization-united-states.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.localization-united-states.install-preview"
  ],
  "publicQueries": [
    "packs.localization-united-states.summary"
  ],
  "publicEvents": [
    "packs.localization-united-states.applied.v1"
  ]
});
