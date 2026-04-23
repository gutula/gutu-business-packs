import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-epc-professional-delivery",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack EPC & Professional Delivery",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Project-heavy EPC and delivery overlays for milestones, BOQ-style structures, procurement packages, and progress billing.",
  "dependsOn": [
    "projects-core",
    "procurement-core",
    "sales-core",
    "accounting-core",
    "contracts-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "projects-core",
      "class": "required",
      "rationale": "Sector Pack EPC & Professional Delivery depends on projects-core for governed pack installation."
    },
    {
      "packageId": "procurement-core",
      "class": "required",
      "rationale": "Sector Pack EPC & Professional Delivery depends on procurement-core for governed pack installation."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Sector Pack EPC & Professional Delivery depends on sales-core for governed pack installation."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack EPC & Professional Delivery depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "contracts-core",
      "class": "required",
      "rationale": "Sector Pack EPC & Professional Delivery depends on contracts-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.sector-epc-professional-delivery"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-epc-professional-delivery.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-epc-professional-delivery.install-preview"
  ],
  "publicQueries": [
    "packs.sector-epc-professional-delivery.summary"
  ],
  "publicEvents": [
    "packs.sector-epc-professional-delivery.applied.v1"
  ]
});
