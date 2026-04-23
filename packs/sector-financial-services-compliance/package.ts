import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-financial-services-compliance",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Financial Services Compliance",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Financial-services compliance overlays for onboarding, case posture, retention, evidence, and regulated review workflows.",
  "dependsOn": [
    "crm-core",
    "accounting-core",
    "support-service-core",
    "contracts-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Sector Pack Financial Services Compliance depends on crm-core for governed pack installation."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack Financial Services Compliance depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Sector Pack Financial Services Compliance depends on support-service-core for governed pack installation."
    },
    {
      "packageId": "contracts-core",
      "class": "required",
      "rationale": "Sector Pack Financial Services Compliance depends on contracts-core for governed pack installation."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Sector Pack Financial Services Compliance depends on business-portals-core for governed pack installation."
    }
  ],
  "providesCapabilities": [
    "packs.sector-financial-services-compliance"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-financial-services-compliance.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-financial-services-compliance.install-preview"
  ],
  "publicQueries": [
    "packs.sector-financial-services-compliance.summary"
  ],
  "publicEvents": [
    "packs.sector-financial-services-compliance.applied.v1"
  ]
});
