import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-education",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Education",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Education overlays for student, guardian, fees, academic exception handling, and institution-focused workflows.",
  "dependsOn": [
    "accounting-core",
    "crm-core",
    "support-service-core",
    "hr-payroll-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack Education depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Sector Pack Education depends on crm-core for governed pack installation."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Sector Pack Education depends on support-service-core for governed pack installation."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Sector Pack Education depends on hr-payroll-core for governed pack installation."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Sector Pack Education depends on business-portals-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.sector-education"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-education.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-education.install-preview"
  ],
  "publicQueries": [
    "packs.sector-education.summary"
  ],
  "publicEvents": [
    "packs.sector-education.applied.v1"
  ]
});
