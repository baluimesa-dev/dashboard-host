import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { MOCK_ORDERS } from '../../../__mocks__';
import { UploadOrderForm, handleFileUpload } from './components';
import { FORM_FIELDS } from './components/upload-order-form/upload-order-form.constants';
import { SnackbarProvider } from '../../contexts';

jest.mock('./components/upload-order-form/upload-order-form.utils', () => ({
  handleFileUpload: jest.fn(),
}));
const handleSubmitMock = jest.fn();
const renderComponent = () => {
  return render(
    <SnackbarProvider>
      <UploadOrderForm onSubmit={handleSubmitMock} />
      </SnackbarProvider>);
}

const orderNumber = MOCK_ORDERS[0].orderInformation.orderNumber;
const contactName = MOCK_ORDERS[0].buyerInformation.contactName;
const supplierName = MOCK_ORDERS[0].supplierInformation.supplierName;

describe('UploadForm', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles document upload', async () => {
    const { getByPlaceholderText, getByLabelText } = renderComponent();
    (handleFileUpload as jest.Mock).mockResolvedValue(MOCK_ORDERS[0]);
    const file = new File(['file contents'], 'order.doc', { type: 'application/document' });
    const fileInput = getByLabelText(/upload file input/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(handleFileUpload).toHaveBeenCalledWith(expect.any(Object));
    });
    const inputOrderNumber = getByPlaceholderText(FORM_FIELDS.orderInformation.orderNumber.placeholder);
    const inputContactName = getByPlaceholderText(FORM_FIELDS.buyerInformation.contactName.placeholder);
    const inputSupplierName = getByPlaceholderText(FORM_FIELDS.supplierInformation.supplierName.placeholder);
 
    expect(inputOrderNumber).toHaveValue(MOCK_ORDERS[0].orderInformation.orderNumber);
    expect(inputContactName).toHaveValue(MOCK_ORDERS[0].buyerInformation.contactName);
    expect(inputSupplierName).toHaveValue(MOCK_ORDERS[0].supplierInformation.supplierName);
  });
});

  it('handles form submission', async () => {
    const { getByPlaceholderText, getByRole } = renderComponent();
    fireEvent.change(getByPlaceholderText(FORM_FIELDS.orderInformation.orderNumber.placeholder), {
      target: { value: orderNumber },
    });
    fireEvent.change(getByPlaceholderText(FORM_FIELDS.buyerInformation.contactName.placeholder ), {
      target: { value: contactName },
    });
    fireEvent.change(getByPlaceholderText(FORM_FIELDS.supplierInformation.supplierName.placeholder), {
      target: { value: supplierName },
    });
    await waitFor(() => {
    fireEvent.click(getByRole('button', {name: /submit order/i}));
    })
    expect(handleSubmitMock).toHaveBeenCalledWith({
      orderInformation: { orderNumber },
      buyerInformation: { contactName },
      supplierInformation: { supplierName },
    });
  });
