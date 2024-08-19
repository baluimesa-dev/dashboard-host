

export const FIELD_NAME_ORDER_NUMBER = 'orderInformation.orderNumber';
export const FIELD_NAME_CUSTOMER_NAME = 'buyerInformation.contactName';
export const FIELD_NAME_SUPPLIER_NAME = 'supplierInformation.supplierName';


export const DEFAULT_VALUES = {
  orderInformation: {
    orderNumber: '',
  },
  buyerInformation: {
    contactName: '',
  },
  supplierInformation: {
    supplierName: '',
  },
}


export const FORM_FIELDS = {
  orderInformation: {
     orderNumber: {
      label: 'Order Number',
      placeholder: 'Enter order number',
      error: 'Order Number is required',
    },
    },
  buyerInformation: {
    contactName: {
      label: 'Customer Name',
      placeholder: 'Enter customer name',
      error: 'Customer Name is required',
    },
  },
  supplierInformation: {
    supplierName: {
      label: 'Supplier Name',
      placeholder: 'Enter supplier name',
      error: 'Supplier Name is required',
    },
  },
}