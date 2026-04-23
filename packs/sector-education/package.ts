import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-education",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Education",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Education overlays for student, guardian, fees, academic exception handling, and institution-focused workflows.",
  "dependsOn": [
    "accounting-core",
    "crm-core",
    "support-service-core",
    "hr-payroll-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Education to keep its boundary governed and explicit."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for Sector Pack Education to keep its boundary governed and explicit."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Required for Sector Pack Education to keep its boundary governed and explicit."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Required for Sector Pack Education to keep its boundary governed and explicit."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Required for Sector Pack Education to keep its boundary governed and explicit."
    },
    {
      "packageId": "projects-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Education for smoother production adoption and operator experience."
    },
    {
      "packageId": "contracts-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Education for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Education with deeper downstream automation, visibility, or workflow coverage."
    },
    {
      "packageId": "ai-assist-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Education with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "projects-core",
    "contracts-core"
  ],
  "capabilityEnhancingPlugins": [
    "analytics-bi-core",
    "ai-assist-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base@^0.1.0"
  ],
  "standaloneSupported": false,
  "installNotes": [
    "Sector Pack Education is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-education"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-education.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-education.install-preview"
  ],
  "publicQueries": [
    "packs.sector-education.summary"
  ],
  "publicEvents": [
    "packs.sector-education.applied.v1"
  ]
});
