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
      "rationale": "Sector Pack Professional Services depends on crm-core for governed pack installation."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Sector Pack Professional Services depends on sales-core for governed pack installation."
    },
    {
      "packageId": "projects-core",
      "class": "required",
      "rationale": "Sector Pack Professional Services depends on projects-core for governed pack installation."
    },
    {
      "packageId": "accounting-core",
      "class": "required",
      "rationale": "Sector Pack Professional Services depends on accounting-core for governed pack installation."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Sector Pack Professional Services depends on support-service-core for governed pack installation."
    },
    {
      "packageId": "hr-payroll-core",
      "class": "required",
      "rationale": "Sector Pack Professional Services depends on hr-payroll-core for governed pack installation."
    },
    {
      "packageId": "contracts-core",
      "class": "required",
      "rationale": "Sector Pack Professional Services depends on contracts-core for governed pack installation."
    }
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
