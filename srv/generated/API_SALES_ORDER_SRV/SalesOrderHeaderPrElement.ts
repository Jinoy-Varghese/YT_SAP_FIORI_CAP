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
import type { SalesOrderHeaderPrElementApi } from './SalesOrderHeaderPrElementApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SalesOrderHeaderPrElement" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderHeaderPrElement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderHeaderPrElementType<T>
{
  /**
   * Technical entity name for SalesOrderHeaderPrElement.
   */
  static override _entityName = 'A_SalesOrderHeaderPrElement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderHeaderPrElement entity.
   */
  static _keys = [
    'SalesOrder',
    'PricingProcedureStep',
    'PricingProcedureCounter'
  ];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Step Number.
   * Maximum length: 3.
   */
  declare pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Counter.
   * Maximum length: 3.
   */
  declare pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Type.
   * Maximum length: 4.
   * @nullable
   */
  declare conditionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Timestamp for Pricing.
   * Maximum length: 14.
   * @nullable
   */
  declare pricingDateTime?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Pricing Date.
   * @nullable
   */
  declare priceConditionDeterminationDte?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Calculation Type for Condition.
   * Maximum length: 3.
   * @nullable
   */
  declare conditionCalculationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Basis.
   * @nullable
   */
  declare conditionBaseValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Amount or Percentage.
   * @nullable
   */
  declare conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Pricing Unit.
   * @nullable
   */
  declare conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Unit in the Document.
   * Maximum length: 3.
   * @nullable
   */
  declare conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SAP Unit Code for Condition Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare conditionQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ISO Unit Code for Condition Quantity.
   * Maximum length: 3.
   * @nullable
   */
  declare conditionQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Category (Examples: Tax, Freight, Price, Cost).
   * Maximum length: 1.
   * @nullable
   */
  declare conditionCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition is used for statistics.
   * @nullable
   */
  declare conditionIsForStatistics?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Scale Type.
   * Maximum length: 1.
   * @nullable
   */
  declare pricingScaleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin of the Condition.
   * Maximum length: 1.
   * @nullable
   */
  declare conditionOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Condition.
   * Maximum length: 1.
   * @nullable
   */
  declare isGroupCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number of Condition Record.
   * Maximum length: 10.
   * @nullable
   */
  declare conditionRecord?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequential Number of the Condition.
   * Maximum length: 3.
   * @nullable
   */
  declare conditionSequentialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax on Sales/Purchases Code.
   * Maximum length: 2.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  declare withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding-Off Difference of the Condition.
   * @nullable
   */
  declare cndnRoundingOffDiffAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Value.
   * @nullable
   */
  declare conditionAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * SD Document Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Control.
   * Maximum length: 1.
   * @nullable
   */
  declare conditionControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition is Inactive.
   * Maximum length: 1.
   * @nullable
   */
  declare conditionInactiveReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Class.
   * Maximum length: 1.
   * @nullable
   */
  declare conditionClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Counter (Header).
   * Maximum length: 3.
   * @nullable
   */
  declare prcgProcedureCounterForHeader?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Factor for Condition Base Value.
   * @nullable
   */
  declare factorForConditionBasisValue?: DeserializedType<
    T,
    'Edm.Double'
  > | null;
  /**
   * Structure Condition.
   * Maximum length: 1.
   * @nullable
   */
  declare structureCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Factor for Condition Basis (Period).
   * @nullable
   */
  declare periodFactorForCndnBasisValue?: DeserializedType<
    T,
    'Edm.Double'
  > | null;
  /**
   * Scale Basis Indicator.
   * Maximum length: 3.
   * @nullable
   */
  declare pricingScaleBasis?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scale Base Value.
   * @nullable
   */
  declare conditionScaleBasisValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Condition Scale Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare conditionScaleBasisUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scale Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare conditionScaleBasisCurrency?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Condition for Intercompany Billing.
   * @nullable
   */
  declare cndnIsRelevantForIntcoBilling?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Condition Changed Manually.
   * @nullable
   */
  declare conditionIsManuallyChanged?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Condition Used for Variant Configuration.
   * @nullable
   */
  declare conditionIsForConfiguration?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Variant Condition Key.
   * Maximum length: 26.
   * @nullable
   */
  declare variantCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  declare toSalesOrder?: SalesOrder<T> | null;

  constructor(_entityApi: SalesOrderHeaderPrElementApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderHeaderPrElementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  pricingProcedureStep: DeserializedType<T, 'Edm.String'>;
  pricingProcedureCounter: DeserializedType<T, 'Edm.String'>;
  conditionType?: DeserializedType<T, 'Edm.String'> | null;
  pricingDateTime?: DeserializedType<T, 'Edm.String'> | null;
  priceConditionDeterminationDte?: DeserializedType<T, 'Edm.DateTime'> | null;
  conditionCalculationType?: DeserializedType<T, 'Edm.String'> | null;
  conditionBaseValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionRateValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionCategory?: DeserializedType<T, 'Edm.String'> | null;
  conditionIsForStatistics?: DeserializedType<T, 'Edm.Boolean'> | null;
  pricingScaleType?: DeserializedType<T, 'Edm.String'> | null;
  conditionOrigin?: DeserializedType<T, 'Edm.String'> | null;
  isGroupCondition?: DeserializedType<T, 'Edm.String'> | null;
  conditionRecord?: DeserializedType<T, 'Edm.String'> | null;
  conditionSequentialNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  cndnRoundingOffDiffAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  conditionControl?: DeserializedType<T, 'Edm.String'> | null;
  conditionInactiveReason?: DeserializedType<T, 'Edm.String'> | null;
  conditionClass?: DeserializedType<T, 'Edm.String'> | null;
  prcgProcedureCounterForHeader?: DeserializedType<T, 'Edm.String'> | null;
  factorForConditionBasisValue?: DeserializedType<T, 'Edm.Double'> | null;
  structureCondition?: DeserializedType<T, 'Edm.String'> | null;
  periodFactorForCndnBasisValue?: DeserializedType<T, 'Edm.Double'> | null;
  pricingScaleBasis?: DeserializedType<T, 'Edm.String'> | null;
  conditionScaleBasisValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  conditionScaleBasisUnit?: DeserializedType<T, 'Edm.String'> | null;
  conditionScaleBasisCurrency?: DeserializedType<T, 'Edm.String'> | null;
  cndnIsRelevantForIntcoBilling?: DeserializedType<T, 'Edm.Boolean'> | null;
  conditionIsManuallyChanged?: DeserializedType<T, 'Edm.Boolean'> | null;
  conditionIsForConfiguration?: DeserializedType<T, 'Edm.Boolean'> | null;
  variantCondition?: DeserializedType<T, 'Edm.String'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
