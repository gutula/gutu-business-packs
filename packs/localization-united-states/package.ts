import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "localization-united-states",
  "kind": "localization-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Localization United States",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "United States fiscal, withholding, sales-tax, and payroll-oriented localization overlays for Gutu business deployments.",
  "dependsOn": [
    "pricing-tax-core",
    "accounting-core",
    "hr-payroll-core",
    "treasury-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "pricing-tax-core",
      "class": "required",
      "rationale": "Required for Localization United States to keep its boundary governed and explicit."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Localization United States to keep its boundary governed and explicit."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Required for Localization United States to keep its boundary governed and explicit."
    },
    {
      "packageId": "treasury-core",
      "class": "required",
      "rationale": "Required for Localization United States to keep its boundary governed and explicit."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Localization United States for smoother production adoption and operator experience."
    },
    {
      "packageId": "business-portals-core",
      "class": "capability-enhancing",
      "rationale": "Improves Localization United States with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "analytics-bi-core"
  ],
  "capabilityEnhancingPlugins": [
    "business-portals-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base@^0.1.0"
  ],
  "standaloneSupported": false,
  "installNotes": [
    "Localization United States is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.localization-united-states"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.localization-united-states.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.localization-united-states.install-preview"
  ],
  "publicQueries": [
    "packs.localization-united-states.summary"
  ],
  "publicEvents": [
    "packs.localization-united-states.applied.v1"
  ]
});
