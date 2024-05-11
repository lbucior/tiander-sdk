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
exports.getHttpSdk = void 0;
var client_1 = require("@apollo/client");
var link_error_1 = require("@apollo/link-error");
var link_context_1 = require("@apollo/link-context");
var omitVariableTypenameLink_1 = require("./omitVariableTypenameLink");
var getHttpSdk = function (endpoint, errorHandler, token) {
    var url = endpoint.endsWith("/graphql") ? endpoint : endpoint + "/graphql";
    var cliHeaders = {
        Authorization: token,
        Accept: "application/json",
    };
    var httpLink = new client_1.HttpLink({
        uri: url,
        // credentials: "same-origin",
        fetch: fetch,
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
    var rawSdk = new client_1.ApolloClient({
        ssrMode: false,
        link: client_1.ApolloLink.from([omitVariableTypenameLink_1.omitTypenameLink, errorLink, authLink, httpLink]),
        cache: new client_1.InMemoryCache({
            typePolicies: {},
        }),
    });
    // rawSdk.uploader = getUploader(endpoint, token!);
    rawSdk.setToken = function (token) {
        cliHeaders.Authorization = token;
        // rawSdk.uploader = getUploader(endpoint, token!);
    };
    return rawSdk;
};
exports.getHttpSdk = getHttpSdk;
