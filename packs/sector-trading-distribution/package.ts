import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-trading-distribution",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Trading & Distribution",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Trading and distribution overlays for sourcing, multi-warehouse fulfillment, pricing, and channel operations.",
  "dependsOn": [
    "accounting-core",
    "procurement-core",
    "sales-core",
    "inventory-core",
    "crm-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Trading & Distribution to keep its boundary governed and explicit."
    },
    {
      "packageId": "procurement-core",
      "class": "required",
      "rationale": "Required for Sector Pack Trading & Distribution to keep its boundary governed and explicit."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Required for Sector Pack Trading & Distribution to keep its boundary governed and explicit."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Required for Sector Pack Trading & Distribution to keep its boundary governed and explicit."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for Sector Pack Trading & Distribution to keep its boundary governed and explicit."
    },
    {
      "packageId": "quality-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Trading & Distribution for smoother production adoption and operator experience."
    },
    {
      "packageId": "business-portals-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Trading & Distribution for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Trading & Distribution with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "quality-core",
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
    "Sector Pack Trading & Distribution is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-trading-distribution"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-trading-distribution.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-trading-distribution.install-preview"
  ],
  "publicQueries": [
    "packs.sector-trading-distribution.summary"
  ],
  "publicEvents": [
    "packs.sector-trading-distribution.applied.v1"
  ]
});
