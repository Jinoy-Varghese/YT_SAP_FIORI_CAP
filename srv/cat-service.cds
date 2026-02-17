using my.bookshop as my from '../db/schema';
using {sap.common} from '@sap/cds/common';
service CatalogService {
    entity Books as projection on my.Books;
    function readInvoiceNumber(salesOrderID: String) returns String;
}
service DocumentService {
    action uploadPDF(file: LargeString) returns String;
}
