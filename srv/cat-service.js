const { entitySerializer } = require('@sap-cloud-sdk/odata-common');
module.exports = (srv) => {
    srv.on('readInvoiceNumber', async (req)=> {
        try{
            const salesOrderID = req.data.salesOrderID || 0;
            const { apiSalesOrderSrv } = require('../srv/generated/API_SALES_ORDER_SRV');
            const { salesOrderItemApi } = apiSalesOrderSrv();
            const sdkDest = {
                url:'https://sandbox.api.sap.com/s4hanacloud',
                headers: {
                    'APIKey' : 'rCb35clmlROkCrNkO00HSZrEvnPfvDxp'
                }
            };

            const salesOrderData = await salesOrderItemApi
                .requestBuilder()
                .getAll()
                .select(
                    salesOrderItemApi.schema.SALES_ORDER,
                    salesOrderItemApi.schema.SALES_ORDER_ITEM,
                    salesOrderItemApi.schema.REQUESTED_QUANTITY,
                    salesOrderItemApi.schema.REQUESTED_QUANTITY_UNIT
                )
                .filter(salesOrderItemApi.schema.SALES_ORDER.equals(salesOrderID))
                .execute(sdkDest)
                .catch(err => {
                    console.log('Root cause:',err.rootCause?.message);
                    console.log('Response body:',err.rootCause?.response?.data);
                    return {};
                });

                console.log('Reading Invoice Successful');

                var salesOrderArray = [];
                if(salesOrderData.length !== 0){
                    for(let i = 0; i<salesOrderData.length;i++){
                        const serializedData = entitySerializer(salesOrderItemApi.deSerializers)
                        .serializeEntity(salesOrderData[i], salesOrderItemApi);
                        salesOrderArray.push(serializedData);
                    }
                } 
                return salesOrderArray;
        }catch (err){
            return err;
        }
    });
};