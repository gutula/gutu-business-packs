import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "sector-ecommerce",
  "kind": "sector-pack",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-business-packs",
  "displayName": "Sector Pack E-Commerce",
  "domainGroup": "Business Packs",
  "defaultCategory": {
    "id": "content_experience",
    "label": "Content & Experience",
    "subcategoryId": "templates",
    "subcategoryLabel": "Templates"
  },
  "description": "E-commerce overlays for web or marketplace orders, payment timeout handling, RMA posture, and self-service returns.",
  "dependsOn": [
    "sales-core",
    "inventory-core",
    "accounting-core",
    "crm-core",
    "support-service-core",
    "business-portals-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Required for Sector Pack E-Commerce to keep its boundary governed and explicit."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Required for Sector Pack E-Commerce to keep its boundary governed and explicit."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Required for Sector Pack E-Commerce to keep its boundary governed and explicit."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for Sector Pack E-Commerce to keep its boundary governed and explicit."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Required for Sector Pack E-Commerce to keep its boundary governed and explicit."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Required for Sector Pack E-Commerce to keep its boundary governed and explicit."
    },
    {
      "packageId": "subscriptions-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack E-Commerce for smoother production adoption and operator experience."
    },
    {
      "packageId": "analytics-bi-core",
      "class": "optional",
      "rationale": "Recommended with Sector Pack E-Commerce for smoother production adoption and operator experience."
    },
    {
      "packageId": "ai-assist-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack E-Commerce with deeper downstream automation, visibility, or workflow coverage."
    },
    {
      "packageId": "e-invoicing-core",
      "class": "capability-enhancing",
      "rationale": "Improves Sector Pack E-Commerce with deeper downstream automation, visibility, or workflow coverage."
    }
  ],
  "recommendedPlugins": [
    "subscriptions-core",
    "analytics-bi-core"
  ],
  "capabilityEnhancingPlugins": [
    "ai-assist-core",
    "e-invoicing-core"
  ],
  "integrationOnlyPlugins": [],
  "suggestedPacks": [
    "localization-global-base@^0.1.0"
  ],
  "standaloneSupported": false,
  "installNotes": [
    "Sector Pack E-Commerce is a pack artifact and should be installed into an already-bootstrapped Business OS tenant or workspace."
  ],
  "providesCapabilities": [
    "packs.sector-ecommerce"
  ],
  "requestedCapabilities": [],
  "ownsData": [
    "packs.sector-ecommerce.objects"
  ],
  "extendsData": [],
  "publicCommands": [
    "packs.sector-ecommerce.install-preview"
  ],
  "publicQueries": [
    "packs.sector-ecommerce.summary"
  ],
  "publicEvents": [
    "packs.sector-ecommerce.applied.v1"
  ]
});
