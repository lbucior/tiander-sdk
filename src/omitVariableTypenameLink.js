"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitTypenameLink = void 0;
var client_1 = require("@apollo/client");
var omitTypename = function (key, value) {
    return key === "__typename" ? undefined : value;
};
exports.omitTypenameLink = new client_1.ApolloLink(function (operation, forward) {
    if (operation.variables) {
        operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
    }
    return forward ? forward(operation) : null;
});
