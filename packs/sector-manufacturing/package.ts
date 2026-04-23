import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-manufacturing",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Manufacturing",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Discrete manufacturing overlays for production, quality, inventory, and accounting-heavy operational flows.",
  "dependsOn": [
    "accounting-core",
    "procurement-core",
    "sales-core",
    "inventory-core",
    "manufacturing-core",
    "quality-core",
    "assets-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Manufacturing to keep its boundary governed and explicit."
    },
    {
      "packageId": "procurement-core",
      "class": "required",
      "rationale": "Required for Sector Pack Manufacturing to keep its boundary governed and explicit."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Required for Sector Pack Manufacturing to keep its boundary governed and explicit."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Required for Sector Pack Manufacturing to keep its boundary governed and explicit."
    },
    {
      "packageId": "manufacturing-core",
      "class": "required",
      "rationale": "Required for Sector Pack Manufacturing to keep its boundary governed and explicit."
    },
    {
      "packageId": "quality-core",
      "class": "required",
      "rationale": "Required for Sector Pack Manufacturing to keep its boundary governed and explicit."
    },
    {
      "packageId": "assets-core",
      "class": "required",
      "rationale": "Required for Sector Pack Manufacturing to keep its boundary governed and explicit."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Manufacturing for smoother production adoption and operator experience."
    },
    {
      "packageId": "maintenance-cmms-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Manufacturing for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Manufacturing with deeper downstream automation, visibility, or workflow coverage."
    },
    {
      "packageId": "business-portals-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Manufacturing with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "hr-payroll-core",
    "maintenance-cmms-core"
  ],
  "capabilityEnhancingPlugins": [
    "analytics-bi-core",
    "business-portals-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base@^0.1.0"
  ],
  "standaloneSupported": false,
  "installNotes": [
    "Sector Pack Manufacturing is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-manufacturing"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-manufacturing.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-manufacturing.install-preview"
  ],
  "publicQueries": [
    "packs.sector-manufacturing.summary"
  ],
  "publicEvents": [
    "packs.sector-manufacturing.applied.v1"
  ]
});
