import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-nonprofit",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Nonprofit",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Nonprofit overlays for donor, grant, fund, program, and impact-oriented accounting and case workflows.",
  "dependsOn": [
    "accounting-core",
    "crm-core",
    "projects-core",
    "support-service-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack Nonprofit depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Sector Pack Nonprofit depends on crm-core for governed pack installation."
    },
    {
      "packageId": "projects-core",
      "class": "required",
      "rationale": "Sector Pack Nonprofit depends on projects-core for governed pack installation."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Sector Pack Nonprofit depends on support-service-core for governed pack installation."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Sector Pack Nonprofit depends on business-portals-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.sector-nonprofit"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-nonprofit.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-nonprofit.install-preview"
  ],
  "publicQueries": [
    "packs.sector-nonprofit.summary"
  ],
  "publicEvents": [
    "packs.sector-nonprofit.applied.v1"
  ]
});
