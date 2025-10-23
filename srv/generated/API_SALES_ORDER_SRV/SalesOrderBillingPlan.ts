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
import type { SalesOrderBillingPlanApi } from './SalesOrderBillingPlanApi';
import {
  SalesOrderBillingPlanItem,
  SalesOrderBillingPlanItemType
} from './SalesOrderBillingPlanItem';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SalesOrderBillingPlan" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderBillingPlan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderBillingPlanType<T>
{
  /**
   * Technical entity name for SalesOrderBillingPlan.
   */
  static override _entityName = 'A_SalesOrderBillingPlan';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderBillingPlan entity.
   */
  static _keys = ['SalesOrder', 'BillingPlan'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing/Invoicing Plan Number.
   * Maximum length: 10.
   */
  declare billingPlan: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date of Billing/Invoicing Plan.
   * @nullable
   */
  declare billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rule for Origin of Start Date of Billing/Invoicing Plan.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing plan category.
   * Maximum length: 1.
   * @nullable
   */
  declare billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing/Invoicing Plan Type.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date of Billing/Invoicing Plan.
   * @nullable
   */
  declare billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rule for Origin of End Date for Billing/Invoicing Plan.
   * Maximum length: 2.
   * @nullable
   */
  declare billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Field.
   * Maximum length: 10.
   * @nullable
   */
  declare billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderBillingPlanItem} entity.
   */
  declare toBillingPlanItem: SalesOrderBillingPlanItem<T>[];
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  declare toSalesOrder?: SalesOrder<T> | null;

  constructor(_entityApi: SalesOrderBillingPlanApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderBillingPlanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  billingPlan: DeserializedType<T, 'Edm.String'>;
  billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
  referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
  billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
  toBillingPlanItem: SalesOrderBillingPlanItemType<T>[];
  toSalesOrder?: SalesOrderType<T> | null;
}
