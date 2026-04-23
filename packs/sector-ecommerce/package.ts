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
      "rationale": "Sector Pack E-Commerce depends on sales-core for governed pack installation."
    },
    {
      "packageId": "inventory-core",
      "class": "required",
      "rationale": "Sector Pack E-Commerce depends on inventory-core for governed pack installation."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack E-Commerce depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Sector Pack E-Commerce depends on crm-core for governed pack installation."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Sector Pack E-Commerce depends on support-service-core for governed pack installation."
    },
    {
      "packageId": "business-portals-core",
      "class": "required",
      "rationale": "Sector Pack E-Commerce depends on business-portals-core for governed pack installation."
    }
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
