import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-nonprofit",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Nonprofit",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Nonprofit overlays for donor, grant, fund, program, and impact-oriented accounting and case workflows.",
  "dependsOn": [
    "accounting-core",
    "crm-core",
    "projects-core",
    "support-service-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Nonprofit to keep its boundary governed and explicit."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for Sector Pack Nonprofit to keep its boundary governed and explicit."
    },
    {
      "packageId": "projects-core",
      "class": "required",
      "rationale": "Required for Sector Pack Nonprofit to keep its boundary governed and explicit."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Required for Sector Pack Nonprofit to keep its boundary governed and explicit."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Required for Sector Pack Nonprofit to keep its boundary governed and explicit."
    },
    {
      "packageId": "contracts-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Nonprofit for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Nonprofit for smoother production adoption and operator experience."
    },
    {
      "packageId": "ai-assist-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Nonprofit with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "contracts-core",
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
    "Sector Pack Nonprofit is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-nonprofit"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-nonprofit.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-nonprofit.install-preview"
  ],
  "publicQueries": [
    "packs.sector-nonprofit.summary"
  ],
  "publicEvents": [
    "packs.sector-nonprofit.applied.v1"
  ]
});
