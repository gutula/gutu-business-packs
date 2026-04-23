import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-retail",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Retail",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Retail overlays for POS, promotions, cashier control, omnichannel fulfillment, and return-heavy store execution.",
  "dependsOn": [
    "accounting-core",
    "sales-core",
    "inventory-core",
    "pos-core",
    "crm-core",
    "procurement-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Retail to keep its boundary governed and explicit."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Required for Sector Pack Retail to keep its boundary governed and explicit."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Required for Sector Pack Retail to keep its boundary governed and explicit."
    },
    {
      "packageId": "pos-core",
      "class": "required",
      "rationale": "Required for Sector Pack Retail to keep its boundary governed and explicit."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for Sector Pack Retail to keep its boundary governed and explicit."
    },
    {
      "packageId": "procurement-core",
      "class": "required",
      "rationale": "Required for Sector Pack Retail to keep its boundary governed and explicit."
    },
    {
      "packageId": "business-portals-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Retail for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Retail for smoother production adoption and operator experience."
    },
    {
      "packageId": "ai-assist-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Retail with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "business-portals-core",
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
    "Sector Pack Retail is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-retail"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-retail.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-retail.install-preview"
  ],
  "publicQueries": [
    "packs.sector-retail.summary"
  ],
  "publicEvents": [
    "packs.sector-retail.applied.v1"
  ]
});
