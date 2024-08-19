import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AdditionalInformation = {
  __typename?: 'AdditionalInformation';
  certificationRequirements?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  comments?: Maybe<Scalars['String']['output']>;
  inspectionRequirements?: Maybe<Scalars['String']['output']>;
  warrantyInformation?: Maybe<Scalars['String']['output']>;
};

export type Approval = {
  __typename?: 'Approval';
  buyerApprovalDate: Scalars['String']['output'];
  buyerSignature: Scalars['String']['output'];
  supplierApprovalDate: Scalars['String']['output'];
  supplierSignature: Scalars['String']['output'];
};

export type BuyerInformation = {
  __typename?: 'BuyerInformation';
  address: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  contactName: Scalars['String']['output'];
  coordinates: Coordinates;
  emailAddress: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type ItemDetail = {
  __typename?: 'ItemDetail';
  countryOfOrigin?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  itemNumber: Scalars['String']['output'];
  leadTime?: Maybe<Scalars['String']['output']>;
  manufacturerPartNumber: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type Order = {
  __typename?: 'Order';
  additionalInformation?: Maybe<AdditionalInformation>;
  approval: Approval;
  buyerInformation: BuyerInformation;
  itemDetails: Array<ItemDetail>;
  orderInformation: OrderInformation;
  paymentInformation: PaymentInformation;
  shippingInformation: ShippingInformation;
  supplierInformation: SupplierInformation;
};

export type OrderInformation = {
  __typename?: 'OrderInformation';
  deliveryDate?: Maybe<Scalars['String']['output']>;
  orderDate: Scalars['String']['output'];
  orderNumber: Scalars['String']['output'];
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
};

export type PaymentInformation = {
  __typename?: 'PaymentInformation';
  dueDate: Scalars['String']['output'];
  paymentTerms: Scalars['String']['output'];
  totalOrderCost: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getOrder?: Maybe<Order>;
  listOrders: Array<Order>;
};


export type QueryGetOrderArgs = {
  orderNumber: Scalars['String']['input'];
};

export type ShippingInformation = {
  __typename?: 'ShippingInformation';
  deliveryAddress: Scalars['String']['output'];
  shippingMethod: Scalars['String']['output'];
  specialInstructions?: Maybe<Scalars['String']['output']>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
};

export type SupplierInformation = {
  __typename?: 'SupplierInformation';
  address: Scalars['String']['output'];
  contactName: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  supplierName: Scalars['String']['output'];
};

export type ListOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListOrdersQuery = { __typename?: 'Query', listOrders: Array<{ __typename?: 'Order', orderInformation: { __typename?: 'OrderInformation', orderNumber: string, orderDate: string, deliveryDate?: string | null, purchaseOrderNumber?: string | null }, buyerInformation: { __typename?: 'BuyerInformation', companyName: string, contactName: string, address: string, phoneNumber: string, emailAddress: string, coordinates: { __typename?: 'Coordinates', latitude: number, longitude: number } }, supplierInformation: { __typename?: 'SupplierInformation', supplierName: string, contactName: string, address: string, phoneNumber: string, emailAddress: string }, itemDetails: Array<{ __typename?: 'ItemDetail', itemNumber: string, description: string, quantity: number, unitPrice: number, totalPrice: number, manufacturerPartNumber: string, leadTime?: string | null, countryOfOrigin?: string | null }>, paymentInformation: { __typename?: 'PaymentInformation', paymentTerms: string, totalOrderCost: number, dueDate: string }, shippingInformation: { __typename?: 'ShippingInformation', shippingMethod: string, deliveryAddress: string, specialInstructions?: string | null, trackingNumber?: string | null }, additionalInformation?: { __typename?: 'AdditionalInformation', comments?: string | null, certificationRequirements?: Array<string | null> | null, warrantyInformation?: string | null, inspectionRequirements?: string | null } | null, approval: { __typename?: 'Approval', buyerSignature: string, buyerApprovalDate: string, supplierSignature: string, supplierApprovalDate: string } }> };


export const ListOrdersDocument = gql`
    query ListOrders {
  listOrders {
    orderInformation {
      orderNumber
      orderDate
      deliveryDate
      purchaseOrderNumber
    }
    buyerInformation {
      companyName
      contactName
      address
      coordinates {
        latitude
        longitude
      }
      phoneNumber
      emailAddress
    }
    supplierInformation {
      supplierName
      contactName
      address
      phoneNumber
      emailAddress
    }
    itemDetails {
      itemNumber
      description
      quantity
      unitPrice
      totalPrice
      manufacturerPartNumber
      leadTime
      countryOfOrigin
    }
    paymentInformation {
      paymentTerms
      totalOrderCost
      dueDate
    }
    shippingInformation {
      shippingMethod
      deliveryAddress
      specialInstructions
      trackingNumber
    }
    additionalInformation {
      comments
      certificationRequirements
      warrantyInformation
      inspectionRequirements
    }
    approval {
      buyerSignature
      buyerApprovalDate
      supplierSignature
      supplierApprovalDate
    }
  }
}
    `;

/**
 * __useListOrdersQuery__
 *
 * To run a query within a React component, call `useListOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListOrdersQuery(baseOptions?: Apollo.QueryHookOptions<ListOrdersQuery, ListOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListOrdersQuery, ListOrdersQueryVariables>(ListOrdersDocument, options);
      }
export function useListOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListOrdersQuery, ListOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListOrdersQuery, ListOrdersQueryVariables>(ListOrdersDocument, options);
        }
export function useListOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListOrdersQuery, ListOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListOrdersQuery, ListOrdersQueryVariables>(ListOrdersDocument, options);
        }
export type ListOrdersQueryHookResult = ReturnType<typeof useListOrdersQuery>;
export type ListOrdersLazyQueryHookResult = ReturnType<typeof useListOrdersLazyQuery>;
export type ListOrdersSuspenseQueryHookResult = ReturnType<typeof useListOrdersSuspenseQuery>;
export type ListOrdersQueryResult = Apollo.QueryResult<ListOrdersQuery, ListOrdersQueryVariables>;