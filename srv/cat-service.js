const { entitySerializer } = require('@sap-cloud-sdk/odata-common');
const cds = require('@sap/cds');
const axios = require('axios');
axios.defaults.proxy = false;
const FormData = require('form-data');

module.exports = (srv) => {

    srv.on("uploadPDF", async(req) => {
        const repoId = "3f89ff67-c374-453b-832d-8580cc8aae0b";
        const fileName = `generatedFile_${Date.now()}.pdf`;
        const fileBuffer = Buffer.from(req.data.file, "base64");

        const sdm = cds.env.requires["documentrepository-cs"].credentials;
        const tokenUrl = sdm.uaa ? `${sdm.uaa.url}/oauth/token` : sdm.tokenurl;
        const baseUrl = sdm.endpoints.ecmservice.url.replace(/\/$/,"");

        //Get Access Token
        const tokenResponse = await axios.post(tokenUrl, "grant_type=client_credentials",{
        auth:{
            username: sdm.uaa?.clientid || sdm.clientid,
            password: sdm.uaa?.clientsecret || sdm.clientsecret
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded"}
        });
        const accessToken = tokenResponse.data.access_token;

        const form = new FormData();
        form.append("cmisaction", "createDocument");
        form.append("propertyId[0]", "cmis:objectTypeId");
        form.append("propertyValue[0]", "cmis:document");
        form.append("propertyId[1]", "cmis:name");
        form.append("propertyValue[1]", fileName);    
        form.append("propertyId[2]", "sap:tags");
        form.append("propertyValue[2]", "Claim PDF");
        form.append("major","true");

        form.append("content", fileBuffer, {
            filename: fileName,
            contentType:"application/pdf"
        });

        const uploadUrl = `${baseUrl}/browser/${repoId}/root/`;
        try{
            const uploadResponse = await axios.post(uploadUrl, form, {
                headers: {
                    ...form.getHeaders(),
                    Authorization: `Bearer ${accessToken}`,
                    Accept: "application/json"
                }
            });
            const dmsInfo = uploadResponse.data;
            const objectId = dmsInfo.properties['cmis:objectId'].value;
            const downloadLink = `${baseUrl}/browser/${repoId}/root?cmisselector=content&objectId=${objectId}`;
            console.log("File Uploaded Successfully. Download URL Generated.");

            return {
                success: true,
                objectId: objectId,
                fileName:fileName,
                downloadURL: downloadLink
            }
        }
        catch(error){
            console.error("DMS Error Detail: ", error.response?.data);
            req.error(500,`DMS Upload Failed: ${error.response?.data?.message || error.message}`);
        }

    });

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