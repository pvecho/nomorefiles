import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  hello: Scalars['String'];
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>;
};

export type TestQueryVariables = {};


export type TestQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const TestDocument = gql`
    query Test {
  hello
}
    `;
export type TestComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TestQuery, TestQueryVariables>, 'query'>;

    export const TestComponent = (props: TestComponentProps) => (
      <ApolloReactComponents.Query<TestQuery, TestQueryVariables> query={TestDocument} {...props} />
    );
    
export type TestProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TestQuery, TestQueryVariables>
    } & TChildProps;
export function withTest<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TestQuery,
  TestQueryVariables,
  TestProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TestQuery, TestQueryVariables, TestProps<TChildProps, TDataName>>(TestDocument, {
      alias: 'test',
      ...operationOptions
    });
};
export type TestQueryResult = ApolloReactCommon.QueryResult<TestQuery, TestQueryVariables>;