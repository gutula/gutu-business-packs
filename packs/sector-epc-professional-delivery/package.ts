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
      "rationale": "Required for Sector Pack EPC & Professional Delivery to keep its boundary governed and explicit."
    },
    {
      "packageId": "procurement-core",
      "class": "required",
      "rationale": "Required for Sector Pack EPC & Professional Delivery to keep its boundary governed and explicit."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Required for Sector Pack EPC & Professional Delivery to keep its boundary governed and explicit."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack EPC & Professional Delivery to keep its boundary governed and explicit."
    },
    {
      "packageId": "contracts-core",
      "class": "required",
      "rationale": "Required for Sector Pack EPC & Professional Delivery to keep its boundary governed and explicit."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack EPC & Professional Delivery for smoother production adoption and operator experience."
    },
    {
      "packageId": "business-portals-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack EPC & Professional Delivery for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack EPC & Professional Delivery with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "hr-payroll-core",
    "business-portals-core"
  ],
  "capabilityEnhancingPlugins": [
    "analytics-bi-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base@^0.1.0"
  ],
  "standaloneSupported": false,
  "installNotes": [
    "Sector Pack EPC & Professional Delivery is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
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
