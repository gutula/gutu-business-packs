import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "localization-global-base",
  "kind": "localization-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Localization Global Base",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Baseline numbering, currency, translation, and common fiscal-policy overlays shared by localized business deployments.",
  "dependsOn": [
    "party-relationships-core",
    "product-catalog-core",
    "pricing-tax-core",
    "traceability-core",
    "accounting-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "party-relationships-core",
      "class": "required",
      "rationale": "Required for Localization Global Base to keep its boundary governed and explicit."
    },
    {
      "packageId": "product-catalog-core",
      "class": "required",
      "rationale": "Required for Localization Global Base to keep its boundary governed and explicit."
    },
    {
      "packageId": "pricing-tax-core",
      "class": "required",
      "rationale": "Required for Localization Global Base to keep its boundary governed and explicit."
    },
    {
      "packageId": "traceability-core",
      "class": "required",
      "rationale": "Required for Localization Global Base to keep its boundary governed and explicit."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Localization Global Base to keep its boundary governed and explicit."
    },
    {
      "packageId": "treasury-core",
      "class": "optional",
      "rationale": "Recommended with Localization Global Base for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Localization Global Base for smoother production adoption and operator experience."
    }
  ],
  "recommendedPlugins": [
    "treasury-core",
    "analytics-bi-core"
  ],
  "capabilityEnhancingPlugins": [],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [],
  "standaloneSupported": false,
  "installNotes": [
    "Localization Global Base is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.localization-global-base"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.localization-global-base.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.localization-global-base.install-preview"
  ],
  "publicQueries": [
    "packs.localization-global-base.summary"
  ],
  "publicEvents": [
    "packs.localization-global-base.applied.v1"
  ]
});
