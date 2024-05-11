import { ApolloClient } from "@apollo/client";
export type Sdk = typeof import("./sdk");
export type WsSdk = ApolloClient<Sdk> & {
    setToken: (token?: string) => void;
    close: () => void;
};
export declare const getWsSdk: (wsEndpoint: string, errorHandler: (apolloError: any) => void, token?: string) => WsSdk;
