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
import type { SlsOrdPaymentPlanItemDetailsApi } from './SlsOrdPaymentPlanItemDetailsApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';

/**
 * This class represents the entity "A_SlsOrdPaymentPlanItemDetails" of service "API_SALES_ORDER_SRV".
 */
export class SlsOrdPaymentPlanItemDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SlsOrdPaymentPlanItemDetailsType<T>
{
  /**
   * Technical entity name for SlsOrdPaymentPlanItemDetails.
   */
  static override _entityName = 'A_SlsOrdPaymentPlanItemDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SlsOrdPaymentPlanItemDetails entity.
   */
  static _keys = ['SalesOrder', 'PaymentPlanItem'];
  /**
   * Sales Order.
   * Maximum length: 10.
   */
  declare salesOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Item for billing plan/invoice plan/payment cards.
   * Maximum length: 6.
   */
  declare paymentPlanItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Plan Number / Invoicing Plan Number.
   * Maximum length: 10.
   * @nullable
   */
  declare paymentPlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Payment Type.
   * Maximum length: 4.
   * @nullable
   */
  declare electronicPaymentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Account Number.
   * Maximum length: 25.
   * @nullable
   */
  declare electronicPayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Valid from.
   * @nullable
   */
  declare ePaytValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Electronic Payment: Valid to.
   * @nullable
   */
  declare ePaytValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Electronic Payment: Name of Account Holder.
   * Maximum length: 40.
   * @nullable
   */
  declare electronicPaymentHolderName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Electronic Payment: Authorized Amount.
   * @nullable
   */
  declare authorizedAmountInAuthznCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare authorizationCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Authorization Number.
   * Maximum length: 10.
   * @nullable
   */
  declare authorizationByDigitalPaytSrvc?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Electronic Payment: Authorization Reference Code.
   * Maximum length: 15.
   * @nullable
   */
  declare authorizationByAcquirer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Authorization Date.
   * @nullable
   */
  declare authorizationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Electronic Payment: Authorization Time.
   * @nullable
   */
  declare authorizationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Payment cards: Result text.
   * Maximum length: 40.
   * @nullable
   */
  declare authorizationStatusName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Token for Digital Payment Integration in SD.
   * Maximum length: 25.
   * @nullable
   */
  declare ePaytByDigitalPaymentSrvc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Call Status.
   * Maximum length: 1.
   * @nullable
   */
  declare electronicPaymentCallStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Electronic Payment: Response to Authorization Checks.
   * Maximum length: 1.
   * @nullable
   */
  declare ePaytAuthorizationResult?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Amount to Be Authorized.
   * @nullable
   */
  declare ePaytToBeAuthorizedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Electronic Payment: Authorization Expired.
   * @nullable
   */
  declare ePaytAuthorizationIsExpired?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Electronic Payment: Amount Changed.
   * @nullable
   */
  declare ePaytAmountIsChanged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Electronic Payment: Preauthorization.
   * @nullable
   */
  declare preauthorizationIsRequested?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Payment Service Provider for Digital Payments.
   * Maximum length: 4.
   * @nullable
   */
  declare paymentServiceProvider?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Digital Payments: Payment ID from Payment Service Provider.
   * Maximum length: 40.
   * @nullable
   */
  declare paymentByPaymentServicePrvdr?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * SAP Digital Payments: Transaction ID of PSP.
   * Maximum length: 40.
   * @nullable
   */
  declare transactionByPaytSrvcPrvdr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment: Merchant ID at Clearing House.
   * Maximum length: 15.
   * @nullable
   */
  declare merchantByClearingHouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique identifier of a previous successful authorization.
   * Maximum length: 44.
   * @nullable
   */
  declare paymentCardAuthznRelationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Value to be billed/calc. on date in billing/invoice plan.
   * @nullable
   */
  declare maximumToBeAuthorizedAmount?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Higher-level payment card plan number for billing.
   * Maximum length: 10.
   * @nullable
   */
  declare paytPlnForAuthorizationItem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Higher-level item in billing plan.
   * Maximum length: 6.
   * @nullable
   */
  declare paytPlnItmForAuthorizationItem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link SalesOrder} entity.
   */
  declare toSalesOrder?: SalesOrder<T> | null;

  constructor(_entityApi: SlsOrdPaymentPlanItemDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface SlsOrdPaymentPlanItemDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  paymentPlanItem: DeserializedType<T, 'Edm.String'>;
  paymentPlan?: DeserializedType<T, 'Edm.String'> | null;
  electronicPaymentType?: DeserializedType<T, 'Edm.String'> | null;
  electronicPayment?: DeserializedType<T, 'Edm.String'> | null;
  ePaytValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  ePaytValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  electronicPaymentHolderName?: DeserializedType<T, 'Edm.String'> | null;
  authorizedAmountInAuthznCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  authorizationCurrency?: DeserializedType<T, 'Edm.String'> | null;
  authorizationByDigitalPaytSrvc?: DeserializedType<T, 'Edm.String'> | null;
  authorizationByAcquirer?: DeserializedType<T, 'Edm.String'> | null;
  authorizationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  authorizationTime?: DeserializedType<T, 'Edm.Time'> | null;
  authorizationStatusName?: DeserializedType<T, 'Edm.String'> | null;
  ePaytByDigitalPaymentSrvc?: DeserializedType<T, 'Edm.String'> | null;
  electronicPaymentCallStatus?: DeserializedType<T, 'Edm.String'> | null;
  ePaytAuthorizationResult?: DeserializedType<T, 'Edm.String'> | null;
  ePaytToBeAuthorizedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  ePaytAuthorizationIsExpired?: DeserializedType<T, 'Edm.Boolean'> | null;
  ePaytAmountIsChanged?: DeserializedType<T, 'Edm.Boolean'> | null;
  preauthorizationIsRequested?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentServiceProvider?: DeserializedType<T, 'Edm.String'> | null;
  paymentByPaymentServicePrvdr?: DeserializedType<T, 'Edm.String'> | null;
  transactionByPaytSrvcPrvdr?: DeserializedType<T, 'Edm.String'> | null;
  merchantByClearingHouse?: DeserializedType<T, 'Edm.String'> | null;
  paymentCardAuthznRelationId?: DeserializedType<T, 'Edm.String'> | null;
  maximumToBeAuthorizedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  paytPlnForAuthorizationItem?: DeserializedType<T, 'Edm.String'> | null;
  paytPlnItmForAuthorizationItem?: DeserializedType<T, 'Edm.String'> | null;
  toSalesOrder?: SalesOrderType<T> | null;
}
