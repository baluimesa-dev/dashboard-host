import { render, screen, waitFor } from '@testing-library/react';
import { Dashboard } from './dashboard';
import * as React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { useListOrdersQuery } from '../../../bff/generated/graphql';
import { SnackbarProvider } from '../../contexts';

jest.mock('dashboard/Charts', () => ({
  BarChart: () => <div>BarChart Component</div>,
  GaugeChart: () => <div>GaugeChart Component</div>,
  AreaChart: () => <div>AreaChart Component</div>,
  MapChart: () => <div>MapChart Component</div>,
}));

jest.mock('../../../bff/generated/graphql', () => ({
  useListOrdersQuery: jest.fn(),
}));

const mockOrdersData = {
  listOrders: [
    { orderInformation: { orderNumber: '001', orderDate: '2024-08-10' }, paymentInformation: { totalOrderCost: 100 } },
    { orderInformation: { orderNumber: '002', orderDate: '2024-08-11' }, paymentInformation: { totalOrderCost: 200 } },
  ],
};

describe('Dashboard Component', () => {
  it('renders loading state initially', () => {
    (useListOrdersQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });

    render(
      <MockedProvider>
        <SnackbarProvider>
          <Dashboard />
        </SnackbarProvider>
      </MockedProvider>
    );

    expect(screen.getAllByRole('progressbar')?.[0]).toBeInTheDocument();
  });

  it('renders error state when query fails', async () => {
    (useListOrdersQuery as jest.Mock).mockReturnValue({
      data: null,
      error: new Error('Failed to load orders'),
      loading: false,
    });

    render(
      <MockedProvider>
        <SnackbarProvider>
          <Dashboard />
        </SnackbarProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to load orders/i)).toBeInTheDocument();
    });
  });

  it('renders charts when data is successfully loaded', async () => {
    (useListOrdersQuery as jest.Mock).mockReturnValue({
      data: mockOrdersData,
      error: null,
      loading: false,
    });

    render(
      <MockedProvider>
        <SnackbarProvider>
          <Dashboard />
        </SnackbarProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/barchart component/i)).toBeInTheDocument();
      expect(screen.getByText(/gaugechart component/i)).toBeInTheDocument();
      expect(screen.getByText(/areachart component/i)).toBeInTheDocument();
      expect(screen.getByText(/mapchart component/i)).toBeInTheDocument();
    });
  });
});
