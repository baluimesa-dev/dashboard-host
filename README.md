![Screenshot 2024-![Screenshot 2024-08-19 at 11 33 54](https://github.com/user-attachments/assets/b4cbe0ab-88bc-47a5-b6d4-0ec46c1d1178)
08-19 at 11 38 26](https://github.com/user-attachments/assets/c9e3c4ea-49c6-4ab0-ac70-38b30d81bc5a)# Project Overview


This diagram provides an overview of the architecture involving the Dashboard, its components, and data flows.
Remote application for dashboard components can be found in https://github.com/baluimesa-dev/dashboard-remote

```mermaid
flowchart TD
    subgraph Host_Module["Dashboard"]
        UploadOrderPage
        DashboardPage
    end

    subgraph Remote_Federated_Module["Dashboard Components"]
        BarChart
        AreaChart
        MapChart
    end

    UploadOrderPage --> |Parses Document Data| AI_API["Document parsing API"]
    DashboardPage -->|Fetches Orders Data| GraphQL_API["GraphQL API"]
    GraphQL_API --> AWS_Lambda["AWS Lambda Function"]
    AWS_Lambda["AWS Lambda Function"] --> Remote_Federated_Module

    DashboardPage -.-> |Consumes| BarChart
    DashboardPage -.-> |Consumes| AreaChart
    DashboardPage -.-> |Consumes| MapChart


  
