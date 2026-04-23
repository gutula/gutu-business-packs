import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-professional-services",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack Professional Services",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "Professional-services overlays for resource planning, retainers, timesheet billing, and client-service profitability.",
  "dependsOn": [
    "crm-core",
    "sales-core",
    "projects-core",
    "accounting-core",
    "support-service-core",
    "hr-payroll-core",
    "contracts-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for Sector Pack Professional Services to keep its boundary governed and explicit."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Required for Sector Pack Professional Services to keep its boundary governed and explicit."
    },
    {
      "packageId": "projects-core",
      "class": "required",
      "rationale": "Required for Sector Pack Professional Services to keep its boundary governed and explicit."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack Professional Services to keep its boundary governed and explicit."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Required for Sector Pack Professional Services to keep its boundary governed and explicit."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Required for Sector Pack Professional Services to keep its boundary governed and explicit."
    },
    {
      "packageId": "contracts-core",
      "class": "required",
      "rationale": "Required for Sector Pack Professional Services to keep its boundary governed and explicit."
    },
    {
      "packageId": "business-portals-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Professional Services for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack Professional Services for smoother production adoption and operator experience."
    },
    {
      "packageId": "ai-assist-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack Professional Services with deeper downstream automation, visibility, or workflow coverage."
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
    "Sector Pack Professional Services is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-professional-services"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-professional-services.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-professional-services.install-preview"
  ],
  "publicQueries": [
    "packs.sector-professional-services.summary"
  ],
  "publicEvents": [
    "packs.sector-professional-services.applied.v1"
  ]
});
