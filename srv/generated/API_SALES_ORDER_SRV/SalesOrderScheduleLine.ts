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
import type { SalesOrderScheduleLineApi } from './SalesOrderScheduleLineApi';

/**
 * This class represents the entity "A_SalesOrderScheduleLine" of service "API_SALES_ORDER_SRV".
 */
export class SalesOrderScheduleLine<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderScheduleLineType<T>
{
  /**
   * Technical entity name for SalesOrderScheduleLine.
   */
  static override _entityName = 'A_SalesOrderScheduleLine';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
  /**
   * All key fields of the SalesOrderScheduleLine entity.
   */
  static _keys = ['SalesOrder', 'SalesOrderItem', 'ScheduleLine'];
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
   * Schedule Line Number.
   * Maximum length: 4.
   */
  declare scheduleLine: DeserializedType<T, 'Edm.String'>;
  /**
   * Requested Delivery Date.
   * @nullable
   */
  declare requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Confirmed Delivery Date.
   * @nullable
   */
  declare confirmedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
   * Order Quantity in Sales Units.
   * @nullable
   */
  declare scheduleLineOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Confirmed Quantity.
   * @nullable
   */
  declare confdOrderQtyByMatlAvailCheck?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Delivered Quantity.
   * @nullable
   */
  declare deliveredQtyInOrderQtyUnit?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Open Confirmed Delivery Quantity.
   * @nullable
   */
  declare openConfdDelivQtyInOrdQtyUnit?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Corrected quantity in sales unit.
   * @nullable
   */
  declare correctedQtyInOrderQtyUnit?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Schedule Line Blocked for Delivery.
   * Maximum length: 2.
   * @nullable
   */
  declare delivBlockReasonForSchedLine?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: SalesOrderScheduleLineApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderScheduleLineType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrder: DeserializedType<T, 'Edm.String'>;
  salesOrderItem: DeserializedType<T, 'Edm.String'>;
  scheduleLine: DeserializedType<T, 'Edm.String'>;
  requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  confirmedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
  orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
  scheduleLineOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  confdOrderQtyByMatlAvailCheck?: DeserializedType<T, 'Edm.Decimal'> | null;
  deliveredQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  openConfdDelivQtyInOrdQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  correctedQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  delivBlockReasonForSchedLine?: DeserializedType<T, 'Edm.String'> | null;
}
