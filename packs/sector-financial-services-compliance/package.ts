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
      "rationale": "Required for Sector Pack Financial Services Compliance to keep its boundary governed and explicit."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Financial Services Compliance to keep its boundary governed and explicit."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Required for Sector Pack Financial Services Compliance to keep its boundary governed and explicit."
    },
    {
      "packageId": "contracts-core",
      "class": "required",
      "rationale": "Required for Sector Pack Financial Services Compliance to keep its boundary governed and explicit."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Required for Sector Pack Financial Services Compliance to keep its boundary governed and explicit."
    },
    {
      "packageId": "treasury-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Financial Services Compliance for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Financial Services Compliance for smoother production adoption and operator experience."
    },
    {
      "packageId": "ai-assist-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Financial Services Compliance with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "treasury-core",
    "analytics-bi-core"
  ],
  "capabilityEnhancingPlugins": [
    "ai-assist-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base@^0.1.0"
  ],
  "standaloneSupported": false,
  "installNotes": [
    "Sector Pack Financial Services Compliance is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
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
