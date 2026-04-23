import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "localization-india",
  "kind": "localization-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Localization India",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "India-focused GST, withholding, statutory numbering, and e-invoicing overlays for Gutu business deployments.",
  "dependsOn": [
    "pricing-tax-core",
    "accounting-core",
    "e-invoicing-core",
    "hr-payroll-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "pricing-tax-core",
      "class": "required",
      "rationale": "Localization India depends on pricing-tax-core for governed pack installation."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Localization India depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "e-invoicing-core",
      "class": "required",
      "rationale": "Localization India depends on e-invoicing-core for governed pack installation."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Localization India depends on hr-payroll-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.localization-india"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.localization-india.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.localization-india.install-preview"
  ],
  "publicQueries": [
    "packs.localization-india.summary"
  ],
  "publicEvents": [
    "packs.localization-india.applied.v1"
  ]
});
