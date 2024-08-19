declare module "dashboard/Charts" {
    const BarChart: React.FC<{ data: Order[] }>;
    const AreaChart: React.FC<{ data: Order[] }>;
    const GaugeChart: React.FC<{ data: Order[] }>;
    const MapChart: React.FC<{ data: Order[] }>;
    export { BarChart, AreaChart, GaugeChart, MapChart};
}

