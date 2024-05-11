"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWsSdk = void 0;
var graphql_ws_1 = require("graphql-ws");
var subscriptions_1 = require("@apollo/client/link/subscriptions");
var client_1 = require("@apollo/client");
var link_error_1 = require("@apollo/link-error");
var link_context_1 = require("@apollo/link-context");
var core_1 = require("@apollo/client/core");
var omitVariableTypenameLink_1 = require("./omitVariableTypenameLink");
var getWsSdk = function (wsEndpoint, errorHandler, token) {
    var cliHeaders = {
        authorization: token,
        accept: "application/json",
    };
    var wsClient = (0, graphql_ws_1.createClient)({
        url: wsEndpoint,
        lazy: true,
        retryAttempts: 128,
        keepAlive: 25000,
        connectionParams: {
            authorization: cliHeaders.authorization,
        },
    });
    var errorLink = (0, link_error_1.onError)(errorHandler);
    // Set Auth context
    // https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-context
    var authLink = (0, link_context_1.setContext)(function (_, _a) {
        var headers = _a.headers;
        return ({
            headers: __assign(__assign({}, headers), cliHeaders),
        });
    });
    var wsLink = new subscriptions_1.GraphQLWsLink(wsClient);
    var rawSdk = new client_1.ApolloClient({
        ssrMode: false,
        link: core_1.ApolloLink.from([
            omitVariableTypenameLink_1.omitTypenameLink,
            // @ts-ignore
            errorLink,
            // @ts-ignore
            authLink,
            wsLink,
        ]),
        cache: new client_1.InMemoryCache({
            typePolicies: {},
        }),
    });
    rawSdk.setToken = function (token) {
        cliHeaders.authorization = token;
    };
    rawSdk.close = function () {
        return wsClient.dispose();
    };
    return rawSdk;
};
exports.getWsSdk = getWsSdk;
