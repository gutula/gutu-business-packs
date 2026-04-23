import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-healthcare",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Healthcare",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Healthcare overlays for patient-facing intake, encounter support, pharmacy or consumable inventory, and regulated billing or consent posture.",
  "dependsOn": [
    "accounting-core",
    "inventory-core",
    "support-service-core",
    "crm-core",
    "hr-payroll-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Healthcare to keep its boundary governed and explicit."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Required for Sector Pack Healthcare to keep its boundary governed and explicit."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Required for Sector Pack Healthcare to keep its boundary governed and explicit."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for Sector Pack Healthcare to keep its boundary governed and explicit."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Required for Sector Pack Healthcare to keep its boundary governed and explicit."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Required for Sector Pack Healthcare to keep its boundary governed and explicit."
    },
    {
      "packageId": "contracts-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Healthcare for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Healthcare for smoother production adoption and operator experience."
    },
    {
      "packageId": "e-invoicing-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Healthcare with deeper downstream automation, visibility, or workflow coverage."
    },
    {
      "packageId": "ai-assist-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Healthcare with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "contracts-core",
    "analytics-bi-core"
  ],
  "capabilityEnhancingPlugins": [
    "e-invoicing-core",
    "ai-assist-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base@^0.1.0"
  ],
  "standaloneSupported": false,
  "installNotes": [
    "Sector Pack Healthcare is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-healthcare"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-healthcare.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-healthcare.install-preview"
  ],
  "publicQueries": [
    "packs.sector-healthcare.summary"
  ],
  "publicEvents": [
    "packs.sector-healthcare.applied.v1"
  ]
});
