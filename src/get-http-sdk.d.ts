import { ApolloClient } from "@apollo/client";
export type Sdk = typeof import("./sdk");
export type HttpSdk = ApolloClient<Sdk> & {
    setToken: (token?: string) => void;
};
export declare const getHttpSdk: (endpoint: string, errorHandler: (apolloError: any) => void, token?: string) => HttpSdk;
