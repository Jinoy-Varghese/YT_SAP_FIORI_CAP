/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsOrderItemBillingPlanItem } from './SlsOrderItemBillingPlanItem';
import { SlsOrderItemBillingPlanItemRequestBuilder } from './SlsOrderItemBillingPlanItemRequestBuilder';
import { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
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
export declare class SlsOrderItemBillingPlanItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): SlsOrderItemBillingPlanItemApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      SalesOrderItemBillingPlanApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>,
      SalesOrderItemApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SlsOrderItemBillingPlanItem;
  requestBuilder(): SlsOrderItemBillingPlanItemRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SlsOrderItemBillingPlanItem<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SlsOrderItemBillingPlanItem<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SlsOrderItemBillingPlanItem,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    SALES_ORDER: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_ITEM: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_PLAN_DATE_CATEGORY: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_BILLING_DATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_AMOUNT: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_AMOUNT_PERCENT: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPOSED_BILLING_DOCUMENT_TYPE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_DATE_DESCRIPTION_CODE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_BLOCK_REASON: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_SERVICE_START_DATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_SERVICE_END_DATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILLING_PLAN_RELATED_BILLG_STATUS: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_TYPE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADOPTING_BILLING_DATE_ID: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_BILLING_RULE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN_MILESTONE_USAGE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLG_PLN_DTE_CORRECTION_RFND_TYPE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    POSTPONEMENT_REASON: OrderableEdmTypeField<
      SlsOrderItemBillingPlanItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN: OneToOneLink<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrderItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_ITEM: OneToOneLink<
      SlsOrderItemBillingPlanItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SlsOrderItemBillingPlanItem<DeSerializers>>;
  };
}
