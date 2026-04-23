# gutu-business-packs

<p align="center">
  <img src="./docs/assets/gutu-mascot.png" alt="Gutu mascot" width="220" />
</p>

First-party localization and sector packs that turn the Business OS scaffold into installable, channel-governed business templates.

## Live Catalog Surface

- `catalog/index.json` tracks the first-party business pack inventory.
- `channels/next.json` is the installable preview channel for packs that are scaffolded and locally verifiable.
- `channels/stable.json` is promotion-driven and only admits signed first-party packs.
- Each pack carries a package manifest, a deployable `pack.json`, dependency metadata, object payloads, and validation fixtures.
- `scripts/sign-pack-catalog.mjs` records digests and optional signatures, while `scripts/promote-pack-channel.mjs` promotes signed packs into `stable`.

## Pack Matrix

| Pack | Group | Kind | Pack Type | Required Plugins |
| --- | --- | --- | --- | --- |
| [Localization Global Base](./packs/localization-global-base/README.md) | Localization | `localization-pack` | `localization-pack` | `party-relationships-core`, `product-catalog-core`, `pricing-tax-core`, `traceability-core`, `accounting-core` |
| [Localization India](./packs/localization-india/README.md) | Localization | `localization-pack` | `localization-pack` | `pricing-tax-core`, `accounting-core`, `e-invoicing-core`, `hr-payroll-core` |
| [Localization United States](./packs/localization-united-states/README.md) | Localization | `localization-pack` | `localization-pack` | `pricing-tax-core`, `accounting-core`, `hr-payroll-core`, `treasury-core` |
| [Sector Pack Manufacturing](./packs/sector-manufacturing/README.md) | Sector | `sector-pack` | `sector-template` | `accounting-core`, `procurement-core`, `sales-core`, `inventory-core`, `manufacturing-core`, `quality-core`, `assets-core` |
| [Sector Pack Trading & Distribution](./packs/sector-trading-distribution/README.md) | Sector | `sector-pack` | `sector-template` | `accounting-core`, `procurement-core`, `sales-core`, `inventory-core`, `crm-core` |
| [Sector Pack Retail](./packs/sector-retail/README.md) | Sector | `sector-pack` | `sector-template` | `accounting-core`, `sales-core`, `inventory-core`, `pos-core`, `crm-core`, `procurement-core` |
| [Sector Pack EPC & Professional Delivery](./packs/sector-epc-professional-delivery/README.md) | Sector | `sector-pack` | `sector-template` | `projects-core`, `procurement-core`, `sales-core`, `accounting-core`, `contracts-core` |
| [Sector Pack E-Commerce](./packs/sector-ecommerce/README.md) | Sector | `sector-pack` | `sector-template` | `sales-core`, `inventory-core`, `accounting-core`, `crm-core`, `support-service-core`, `business-portals-core` |
| [Sector Pack Education](./packs/sector-education/README.md) | Sector | `sector-pack` | `sector-template` | `accounting-core`, `crm-core`, `support-service-core`, `hr-payroll-core`, `business-portals-core` |
| [Sector Pack Healthcare](./packs/sector-healthcare/README.md) | Sector | `sector-pack` | `sector-template` | `accounting-core`, `inventory-core`, `support-service-core`, `crm-core`, `hr-payroll-core`, `business-portals-core` |
| [Sector Pack Professional Services](./packs/sector-professional-services/README.md) | Sector | `sector-pack` | `sector-template` | `crm-core`, `sales-core`, `projects-core`, `accounting-core`, `support-service-core`, `hr-payroll-core`, `contracts-core` |
| [Sector Pack Financial Services Compliance](./packs/sector-financial-services-compliance/README.md) | Sector | `sector-pack` | `sector-template` | `crm-core`, `accounting-core`, `support-service-core`, `contracts-core`, `business-portals-core` |
| [Sector Pack Nonprofit](./packs/sector-nonprofit/README.md) | Sector | `sector-pack` | `sector-template` | `accounting-core`, `crm-core`, `projects-core`, `support-service-core`, `business-portals-core` |

## Current Truth

- This repo furnishes the Stage 5 business pack layer with real localization and sector artifacts instead of leaving them only in roadmap docs.
- Packs are shipped as first-class metadata bundles with versioned manifests, object payloads, dependency declarations, validation fixtures, and channel metadata.
- Promotion now stays signature-gated: `next` is the working channel, while `stable` only admits packs signed through the local promotion scripts.
