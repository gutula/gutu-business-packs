import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "localization-india",
  "kind": "localization-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Localization India",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "India-focused GST, withholding, statutory numbering, and e-invoicing overlays for Gutu business deployments.",
  "dependsOn": [
    "pricing-tax-core",
    "accounting-core",
    "e-invoicing-core",
    "hr-payroll-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "pricing-tax-core",
      "class": "required",
      "rationale": "Required for Localization India to keep its boundary governed and explicit."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Localization India to keep its boundary governed and explicit."
    },
    {
      "packageId": "e-invoicing-core",
      "class": "required",
      "rationale": "Required for Localization India to keep its boundary governed and explicit."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Required for Localization India to keep its boundary governed and explicit."
    },
    {
      "packageId": "treasury-core",
      "class": "optional",
      "rationale": "Recommended with Localization India for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Localization India for smoother production adoption and operator experience."
    },
    {
      "packageId": "business-portals-core",
      "class": "capability-enhancing",
      "rationale": "Improves Localization India with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "treasury-core",
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
    "Localization India is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.localization-india"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.localization-india.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.localization-india.install-preview"
  ],
  "publicQueries": [
    "packs.localization-india.summary"
  ],
  "publicEvents": [
    "packs.localization-india.applied.v1"
  ]
});
