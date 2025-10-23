/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItemApi } from './SalesOrderItemApi';
import {
  SalesOrderItemBillingPlan,
  SalesOrderItemBillingPlanType
} from './SalesOrderItemBillingPlan';
import {
  SalesOrderItemPartner,
  SalesOrderItemPartnerType
} from './SalesOrderItemPartner';
import {
  SalesOrderItmPrecdgProcFlow,
  SalesOrderItmPrecdgProcFlowType
} from './SalesOrderItmPrecdgProcFlow';
import {
  SalesOrderItemPrElement,
  SalesOrderItemPrElementType
} from './SalesOrderItemPrElement';
import {
  SalesOrderItemRelatedObject,
  SalesOrderItemRelatedObjectType
} from './SalesOrderItemRelatedObject';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import {
  SalesOrderScheduleLine,
  SalesOrderScheduleLineType
} from './SalesOrderScheduleLine';
import {
  SalesOrderItmSubsqntProcFlow,
  SalesOrderItmSubsqntProcFlowType
} from './SalesOrderItmSubsqntProcFlow';
import {
  SalesOrderItemText,
  SalesOrderItemTextType
} from './SalesOrderItemText';

/**
 * This class represents the entity "A_SalesOrderItem" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderItem<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderItemType<T>
{
  /**
   * Technical entity name for SalesOrderItem.
   */
  static override _entityName = 'A_SalesOrderItem';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderItem entity.
   */
  static _keys = ['SalesOrder', 'SalesOrderItem'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Item.
   * Maximum length: 6.
   */
  declare salesOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Higher-Level Item in Bill of Material Structures.
   * Maximum length: 6.
   * @nullable
   */
  declare higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID for higher-level item usage.
   * Maximum length: 1.
   * @nullable
   */
  declare higherLevelItemUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Document Item Category.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOrderItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Text for Sales Order Item.
   * Maximum length: 40.
   * @nullable
   */
  declare salesOrderItemText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Reference.
   * Maximum length: 35.
   * @nullable
   */
  declare purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship-to Party's Customer Reference.
   * Maximum length: 35.
   * @nullable
   */
  declare purchaseOrderByShipToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number of the Underlying Purchase Order.
   * Maximum length: 6.
   * @nullable
   */
  declare underlyingPurchaseOrderItem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Item ID.
   * Maximum length: 40.
   * @nullable
   */
  declare externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Number.
   * Maximum length: 40.
   * @nullable
   */
  declare material?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Number Used by Customer.
   * Maximum length: 35.
   * @nullable
   */
  declare materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date for Pricing and Exchange Rate.
   * @nullable
   */
  declare pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Pricing Reference Material.
   * Maximum length: 40.
   * @nullable
   */
  declare pricingReferenceMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  declare billingPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Quantity.
   * @nullable
   */
  declare requestedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of the Requested Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare requestedQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Requested Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare requestedQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Requested Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare requestedQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Order Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Order Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cumulative Confirmed Quantity in Sales Unit.
   * @nullable
   */
  declare confdDelivQtyInOrderQtyUnit?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Gross Weight of the Item.
   * @nullable
   */
  declare itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Weight of the Item.
   * @nullable
   */
  declare itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  declare itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Item Weight.
   * Maximum length: 3.
   * @nullable
   */
  declare itemWeightSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Item Weight.
   * Maximum length: 3.
   * @nullable
   */
  declare itemWeightIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume of the item.
   * @nullable
   */
  declare itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Item Volume.
   * Maximum length: 3.
   * @nullable
   */
  declare itemVolumeSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Item Volume.
   * Maximum length: 3.
   * @nullable
   */
  declare itemVolumeIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Entered.
   * Maximum length: 40.
   * @nullable
   */
  declare originallyRequestedMaterial?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * SD Document Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Value of the Document Item in Document Currency.
   * @nullable
   */
  declare netAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Overall Reference Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  declare totalSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  declare sdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for Material Substitution.
   * Maximum length: 4.
   * @nullable
   */
  declare materialSubstitutionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group.
   * Maximum length: 9.
   * @nullable
   */
  declare materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Price Group.
   * Maximum length: 2.
   * @nullable
   */
  declare materialPricingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 1.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 2.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 3.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 4.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group 5.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  declare billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Contract Account Number.
   * Maximum length: 12.
   * @nullable
   */
  declare contractAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Value Days.
   * Maximum length: 2.
   * @nullable
   */
  declare additionalValueDays?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date on which services are rendered.
   * @nullable
   */
  declare servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Batch Number.
   * Maximum length: 10.
   * @nullable
   */
  declare batch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant (Own or External).
   * Maximum length: 4.
   * @nullable
   */
  declare productionPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Plant in Plant Substitution.
   * Maximum length: 4.
   * @nullable
   */
  declare originalPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Substitution Status for Alternative-Based Confirmation (ABC).
   * Maximum length: 1.
   * @nullable
   */
  declare altvBsdConfSubstitutionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Storage Location.
   * Maximum length: 4.
   * @nullable
   */
  declare storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Group (Items are delivered together).
   * Maximum length: 3.
   * @nullable
   */
  declare deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Point / Receiving Point.
   * Maximum length: 4.
   * @nullable
   */
  declare shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Type.
   * Maximum length: 2.
   * @nullable
   */
  declare shippingType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Priority.
   * Maximum length: 2.
   * @nullable
   */
  declare deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date and Quantity Fixed.
   * @nullable
   */
  declare deliveryDateQuantityIsFixed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Delivery Date Rule.
   * Maximum length: 1.
   * @nullable
   */
  declare deliveryDateTypeRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms (Part 1).
   * Maximum length: 3.
   * @nullable
   */
  declare incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms (Part 2).
   * Maximum length: 28.
   * @nullable
   */
  declare incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Location 1.
   * Maximum length: 70.
   * @nullable
   */
  declare incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Location 2.
   * Maximum length: 70.
   * @nullable
   */
  declare incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount in Document Currency.
   * @nullable
   */
  declare taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification for Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Assignment Group for Material.
   * Maximum length: 2.
   * @nullable
   */
  declare matlAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost in Document Currency.
   * @nullable
   */
  declare costAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Key for Terms of Payment.
   * Maximum length: 4.
   * @nullable
   */
  declare customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Value Date.
   * @nullable
   */
  declare fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  declare customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for Rejection of Sales Documents.
   * Maximum length: 2.
   * @nullable
   */
  declare salesDocumentRjcnReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Block for Item.
   * Maximum length: 2.
   * @nullable
   */
  declare itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relevant for POD processing.
   * @nullable
   */
  declare slsDocIsRlvtForProofOfDeliv?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Work Breakdown Structure Element (WBS Element).
   * Maximum length: 24.
   * @nullable
   */
  declare wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  declare profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate for Postings to Financial Accounting.
   * @nullable
   */
  declare accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Document Number of Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number of the Reference Item.
   * Maximum length: 6.
   * @nullable
   */
  declare referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Processing Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  declare sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  declare deliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order-Related Billing Status (Item).
   * Maximum length: 1.
   * @nullable
   */
  declare orderRelatedBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subtotal 1 from Pricing Procedure for Price Element.
   * @nullable
   */
  declare subtotal1Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Subtotal 2 from Pricing Procedure for Price Element.
   * @nullable
   */
  declare subtotal2Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Subtotal 3 from Pricing Procedure for Price Element.
   * @nullable
   */
  declare subtotal3Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Subtotal 4 from Pricing Procedure for Price Element.
   * @nullable
   */
  declare subtotal4Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Subtotal 5 from Pricing Procedure for Price Element.
   * @nullable
   */
  declare subtotal5Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Subtotal 6 from Pricing Procedure for Price Element.
   * @nullable
   */
  declare subtotal6Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderItemBillingPlan} entity.
   */
  declare toBillingPlan?: SalesOrderItemBillingPlan<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderItemPartner} entity.
   */
  declare toPartner: SalesOrderItemPartner<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItmPrecdgProcFlow} entity.
   */
  declare toPrecedingProcFlowDocItem: SalesOrderItmPrecdgProcFlow<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItemPrElement} entity.
   */
  declare toPricingElement: SalesOrderItemPrElement<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItemRelatedObject} entity.
   */
  declare toRelatedObject: SalesOrderItemRelatedObject<T>[];
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  declare toSalesOrder?: SalesOrder<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderScheduleLine} entity.
   */
  declare toScheduleLine: SalesOrderScheduleLine<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItmSubsqntProcFlow} entity.
   */
  declare toSubsequentProcFlowDocItem: SalesOrderItmSubsqntProcFlow<T>[];
  /**
   * One-to-many navigation property to the {@link SalesOrderItemText} entity.
   */
  declare toText: SalesOrderItemText<T>[];

  constructor(_entityApi: SalesOrderItemApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  higherLevelItemUsage?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderItemText?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderByShipToParty?: DeserializedType<T, 'Edm.String'> | null;
  underlyingPurchaseOrderItem?: DeserializedType<T, 'Edm.String'> | null;
  externalItemId?: DeserializedType<T, 'Edm.String'> | null;
  material?: DeserializedType<T, 'Edm.String'> | null;
  materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  pricingReferenceMaterial?: DeserializedType<T, 'Edm.String'> | null;
  billingPlan?: DeserializedType<T, 'Edm.String'> | null;
  requestedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  requestedQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  requestedQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  requestedQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  confdDelivQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemWeightSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemWeightIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemVolumeSapUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemVolumeIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  originallyRequestedMaterial?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  netAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  totalSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  sdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
  materialSubstitutionReason?: DeserializedType<T, 'Edm.String'> | null;
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  materialPricingGroup?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
  billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  contractAccount?: DeserializedType<T, 'Edm.String'> | null;
  additionalValueDays?: DeserializedType<T, 'Edm.String'> | null;
  servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  batch?: DeserializedType<T, 'Edm.String'> | null;
  productionPlant?: DeserializedType<T, 'Edm.String'> | null;
  originalPlant?: DeserializedType<T, 'Edm.String'> | null;
  altvBsdConfSubstitutionStatus?: DeserializedType<T, 'Edm.String'> | null;
  storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDateQuantityIsFixed?: DeserializedType<T, 'Edm.Boolean'> | null;
  deliveryDateTypeRule?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  productTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
  productTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
  matlAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  costAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesDocumentRjcnReason?: DeserializedType<T, 'Edm.String'> | null;
  itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
  wbsElement?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  orderRelatedBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  subtotal1Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  subtotal2Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  subtotal3Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  subtotal4Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  subtotal5Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  subtotal6Amount?: DeserializedType<T, 'Edm.Decimal'> | null;
  toBillingPlan?: SalesOrderItemBillingPlanType<T> | null;
  toPartner: SalesOrderItemPartnerType<T>[];
  toPrecedingProcFlowDocItem: SalesOrderItmPrecdgProcFlowType<T>[];
  toPricingElement: SalesOrderItemPrElementType<T>[];
  toRelatedObject: SalesOrderItemRelatedObjectType<T>[];
  toSalesOrder?: SalesOrderType<T> | null;
  toScheduleLine: SalesOrderScheduleLineType<T>[];
  toSubsequentProcFlowDocItem: SalesOrderItmSubsqntProcFlowType<T>[];
  toText: SalesOrderItemTextType<T>[];
}
