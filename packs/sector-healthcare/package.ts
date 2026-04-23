import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-healthcare",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Healthcare",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Healthcare overlays for patient-facing intake, encounter support, pharmacy or consumable inventory, and regulated billing or consent posture.",
  "dependsOn": [
    "accounting-core",
    "inventory-core",
    "support-service-core",
    "crm-core",
    "hr-payroll-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack Healthcare depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Sector Pack Healthcare depends on inventory-core for governed pack installation."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Sector Pack Healthcare depends on support-service-core for governed pack installation."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Sector Pack Healthcare depends on crm-core for governed pack installation."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Sector Pack Healthcare depends on hr-payroll-core for governed pack installation."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Sector Pack Healthcare depends on business-portals-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.sector-healthcare"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-healthcare.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-healthcare.install-preview"
  ],
  "publicQueries": [
    "packs.sector-healthcare.summary"
  ],
  "publicEvents": [
    "packs.sector-healthcare.applied.v1"
  ]
});
