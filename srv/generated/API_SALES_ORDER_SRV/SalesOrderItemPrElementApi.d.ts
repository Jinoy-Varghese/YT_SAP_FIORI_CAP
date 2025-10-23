/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItemPrElement } from './SalesOrderItemPrElement';
import { SalesOrderItemPrElementRequestBuilder } from './SalesOrderItemPrElementRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderItemPrElementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderItemPrElement<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SalesOrderItemPrElementApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      SalesOrderApi<DeSerializersT>,
      SalesOrderItemApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SalesOrderItemPrElement;
  requestBuilder(): SalesOrderItemPrElementRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SalesOrderItemPrElement<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SalesOrderItemPrElement<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SalesOrderItemPrElement,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PROCEDURE_STEP: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PROCEDURE_COUNTER: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONDITION_TYPE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICING_DATE_TIME: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_CONDITION_DETERMINATION_DTE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CONDITION_CALCULATION_TYPE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_BASE_VALUE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_RATE_VALUE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_CURRENCY: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_QUANTITY: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_QUANTITY_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_CATEGORY: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_IS_FOR_STATISTICS: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PRICING_SCALE_TYPE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RELEVANT_FOR_ACCRUAL: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CNDN_IS_RELEVANT_FOR_INVOICE_LIST: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_ORIGIN: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_GROUP_CONDITION: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_RECORD: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_SEQUENTIAL_NUMBER: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CODE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNDN_ROUNDING_OFF_DIFF_AMOUNT: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_AMOUNT: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_CONTROL: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_INACTIVE_REASON: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_CLASS: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRCG_PROCEDURE_COUNTER_FOR_HEADER: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTOR_FOR_CONDITION_BASIS_VALUE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STRUCTURE_CONDITION: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_FACTOR_FOR_CNDN_BASIS_VALUE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PRICING_SCALE_BASIS: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_SCALE_BASIS_VALUE: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONDITION_SCALE_BASIS_UNIT: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_SCALE_BASIS_CURRENCY: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CNDN_IS_RELEVANT_FOR_INTCO_BILLING: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CONDITION_IS_MANUALLY_CHANGED: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CONDITION_IS_FOR_CONFIGURATION: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VARIANT_CONDITION: OrderableEdmTypeField<
      SalesOrderItemPrElement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItemPrElement<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SalesOrderItemPrElement<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItemPrElement<DeSerializers>>;
  };
}
