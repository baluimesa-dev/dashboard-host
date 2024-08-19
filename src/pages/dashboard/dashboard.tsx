import { CircularProgress, Skeleton } from '@mui/material';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Order, useListOrdersQuery } from '../../../bff/generated/graphql';
import { Layout } from '../../components/layout/layout';
import { ChartContainer, Copyright } from './components';
import { useSnackbar } from '../../contexts';

export const Dashboard = () => {

  const { showSnackbar } = useSnackbar();
  const { data, error } = useListOrdersQuery();
  const [queryData, setQueryData] = React.useState<Order[]>([] as Order[]);

  React.useEffect(() => {
    if (error) {
      showSnackbar('Failed to load orders', 'error');
      return;
    }
    if (data) {
      setQueryData(data.listOrders);
      showSnackbar('Orders loaded successfully', 'success');
    }
  }, [data]);

  const [BarChart, setBarChart] = React.useState<React.FC<{ data: Order[] }> | null>(null);
  const [GaugeChart, setGaugeChart] = React.useState<React.FC<{ data: Order[] }> | null>(null);
  const [AreaChart, setAreaChart] = React.useState<React.FC<{ data: Order[] }> | null>(null);
  const [MapChart, setMapChart] = React.useState<React.FC<{ data: Order[] }> | null>(null);

  React.useEffect(() => {
    (async () => {
      try {
        const charts = await import('dashboard/Charts');
        setBarChart(() => charts?.BarChart);
        setGaugeChart(() => charts?.GaugeChart);
        setAreaChart(() => charts?.AreaChart);
        setMapChart(() => charts?.MapChart);
      } catch (error) {
        showSnackbar('Failed to load charts', 'error');
        console.error("Failed to load BarChart component", error);
      }
    })();
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <ChartContainer title='Orders by cost'
        >
          <React.Suspense fallback={<div><Skeleton /></div>}>
            {BarChart && queryData?.length ? <BarChart data={queryData} /> : <CircularProgress />}
          </React.Suspense>
        </ChartContainer>

        <ChartContainer title='Orders Approved'
        >
          <React.Suspense fallback={<div><Skeleton /> </div>}>
            {GaugeChart && queryData?.length ? <GaugeChart data={queryData} /> : <CircularProgress />}
          </React.Suspense>
        </ChartContainer>
        <ChartContainer title='Orders by date'
        >
          {AreaChart && queryData?.length ? <AreaChart data={queryData} /> : <CircularProgress />}
        </ChartContainer>

        <ChartContainer title='Orders around the world'>
          {MapChart && queryData?.length ? <MapChart data={queryData} /> : <CircularProgress />}
        </ChartContainer>
        <Copyright />
      </Container>
    </Layout>
  );
}