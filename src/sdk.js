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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChatDocument = exports.useUpdateUserMutation = exports.withUpdateUser = exports.UpdateUserDocument = exports.useGetMeLazyQuery = exports.useGetMeQuery = exports.withGetMe = exports.GetMeDocument = exports.useGetAuthInfoLazyQuery = exports.useGetAuthInfoQuery = exports.withGetAuthInfo = exports.GetAuthInfoDocument = exports.useGetAuthTokenLazyQuery = exports.useGetAuthTokenQuery = exports.withGetAuthToken = exports.GetAuthTokenDocument = exports.useGetSessionLazyQuery = exports.useGetSessionQuery = exports.withGetSession = exports.GetSessionDocument = exports.useUpdateAccountProfileMutation = exports.withUpdateAccountProfile = exports.UpdateAccountProfileDocument = exports.useUpdateAccountMutation = exports.withUpdateAccount = exports.UpdateAccountDocument = exports.useGetAccountLazyQuery = exports.useGetAccountQuery = exports.withGetAccount = exports.GetAccountDocument = exports.SystemInfoFragmentDoc = exports.AuthInfoFragmentDoc = exports.ProfileFragmentDoc = exports.PermissionFragmentDoc = exports.PageInfoFragmentDoc = exports.MessageFragmentDoc = exports.ChatFragmentDoc = exports.SessionFragmentDoc = exports.UserWithBasicFieldsFragmentDoc = exports.PublicUserInfoFragmentDoc = exports.UserInfoFragmentDoc = exports.UserFragmentDoc = exports.AccountWithAllFieldsFragmentDoc = exports.AccountFragmentDoc = exports.ProfileTypeEnum = exports.ProfileStatusEnum = exports.ChatTypeEnum = exports.ChatStatusEnum = exports.ChatMessageRoleEnum = exports.AccountStatusEnum = void 0;
exports.withGetSystemTime = exports.GetSystemTimeDocument = exports.useGetSystemInfoLazyQuery = exports.useGetSystemInfoQuery = exports.withGetSystemInfo = exports.GetSystemInfoDocument = exports.useDeleteProfileMutation = exports.withDeleteProfile = exports.DeleteProfileDocument = exports.useCreateProfileMutation = exports.withCreateProfile = exports.CreateProfileDocument = exports.useProfilesLazyQuery = exports.useProfilesQuery = exports.withProfiles = exports.ProfilesDocument = exports.useGetProfileLazyQuery = exports.useGetProfileQuery = exports.withGetProfile = exports.GetProfileDocument = exports.useListPermissionsForResourceLazyQuery = exports.useListPermissionsForResourceQuery = exports.withListPermissionsForResource = exports.ListPermissionsForResourceDocument = exports.useMessageByChatSubscription = exports.withMessageByChat = exports.MessageByChatDocument = exports.useSendMessageMutation = exports.withSendMessage = exports.SendMessageDocument = exports.useDeleteChatMutation = exports.withDeleteChat = exports.DeleteChatDocument = exports.useUpdateChatMutation = exports.withUpdateChat = exports.UpdateChatDocument = exports.useCreateChatMutation = exports.withCreateChat = exports.CreateChatDocument = exports.useMessagesByChatLazyQuery = exports.useMessagesByChatQuery = exports.withMessagesByChat = exports.MessagesByChatDocument = exports.useChatsByAccountLazyQuery = exports.useChatsByAccountQuery = exports.withChatsByAccount = exports.ChatsByAccountDocument = exports.useGetChatLazyQuery = exports.useGetChatQuery = exports.withGetChat = void 0;
exports.useBootstrapLazyQuery = exports.useBootstrapQuery = exports.withBootstrap = exports.BootstrapDocument = exports.useGetSystemTimeLazyQuery = exports.useGetSystemTimeQuery = void 0;
var Apollo = require("@apollo/client");
var ApolloReactHoc = require("@apollo/client/react/hoc");
var defaultOptions = {};
var AccountStatusEnum;
(function (AccountStatusEnum) {
    AccountStatusEnum["Approved"] = "Approved";
    AccountStatusEnum["Default"] = "Default";
    AccountStatusEnum["EmailNotVerified"] = "EmailNotVerified";
    AccountStatusEnum["OfficialDocumentsNeeded"] = "OfficialDocumentsNeeded";
    AccountStatusEnum["Rejected"] = "Rejected";
})(AccountStatusEnum || (exports.AccountStatusEnum = AccountStatusEnum = {}));
var ChatMessageRoleEnum;
(function (ChatMessageRoleEnum) {
    ChatMessageRoleEnum["Assistant"] = "assistant";
    ChatMessageRoleEnum["User"] = "user";
})(ChatMessageRoleEnum || (exports.ChatMessageRoleEnum = ChatMessageRoleEnum = {}));
var ChatStatusEnum;
(function (ChatStatusEnum) {
    ChatStatusEnum["Blocked"] = "Blocked";
    ChatStatusEnum["Default"] = "Default";
    ChatStatusEnum["Suspended"] = "Suspended";
})(ChatStatusEnum || (exports.ChatStatusEnum = ChatStatusEnum = {}));
var ChatTypeEnum;
(function (ChatTypeEnum) {
    ChatTypeEnum["Default"] = "Default";
    ChatTypeEnum["Premium"] = "Premium";
})(ChatTypeEnum || (exports.ChatTypeEnum = ChatTypeEnum = {}));
var ProfileStatusEnum;
(function (ProfileStatusEnum) {
    ProfileStatusEnum["Default"] = "Default";
    ProfileStatusEnum["Unavailable"] = "Unavailable";
})(ProfileStatusEnum || (exports.ProfileStatusEnum = ProfileStatusEnum = {}));
var ProfileTypeEnum;
(function (ProfileTypeEnum) {
    ProfileTypeEnum["Default"] = "Default";
    ProfileTypeEnum["Premium"] = "Premium";
})(ProfileTypeEnum || (exports.ProfileTypeEnum = ProfileTypeEnum = {}));
exports.AccountFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "account" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Account" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "status" } }, { "kind": "Field", "name": { "kind": "Name", "value": "officialName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] };
exports.AccountWithAllFieldsFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "accountWithAllFields" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Account" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "status" } }, { "kind": "Field", "name": { "kind": "Name", "value": "officialName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "officialBirthday" } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] };
exports.UserFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "user" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "User" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "uid" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "status" } }, { "kind": "Field", "name": { "kind": "Name", "value": "disabled" } }, { "kind": "Field", "name": { "kind": "Name", "value": "customClaims" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "groups" } }, { "kind": "Field", "name": { "kind": "Name", "value": "job" } }, { "kind": "Field", "name": { "kind": "Name", "value": "phone" } }] } }] } }] };
exports.UserInfoFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "userInfo" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "User" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "uid" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "disabled" } }, { "kind": "Field", "name": { "kind": "Name", "value": "customClaims" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "groups" } }] } }] } }] };
exports.PublicUserInfoFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "publicUserInfo" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "PublicUserInfo" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "uid" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "birthday" } }] } }] };
exports.UserWithBasicFieldsFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "userWithBasicFields" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "User" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "uid" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "displayName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }] } }] };
exports.SessionFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "session" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Session" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "token_use" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sub" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "groups" } }, { "kind": "Field", "name": { "kind": "Name", "value": "error" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "message" } }] } }] } }] };
exports.ChatFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "chat" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Chat" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "status" } }] } }] };
exports.MessageFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "message" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Message" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "role" } }, { "kind": "Field", "name": { "kind": "Name", "value": "content" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "text" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "createdAt" } }, { "kind": "Field", "name": { "kind": "Name", "value": "updatedAt" } }] } }] };
exports.PageInfoFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "pageInfo" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "PageInfo" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "hasPrev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "prev" } }, { "kind": "Field", "name": { "kind": "Name", "value": "hasNext" } }, { "kind": "Field", "name": { "kind": "Name", "value": "next" } }, { "kind": "Field", "name": { "kind": "Name", "value": "hasCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "count" } }] } }] };
exports.PermissionFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "permission" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Permission" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "resource" } }, { "kind": "Field", "name": { "kind": "Name", "value": "subject" } }, { "kind": "Field", "name": { "kind": "Name", "value": "grant" } }] } }] };
exports.ProfileFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "profile" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Profile" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "status" } }, { "kind": "Field", "name": { "kind": "Name", "value": "officialName" } }, { "kind": "Field", "name": { "kind": "Name", "value": "officialBirthday" } }, { "kind": "Field", "name": { "kind": "Name", "value": "baseImageUrl" } }, { "kind": "Field", "name": { "kind": "Name", "value": "interests" } }, { "kind": "Field", "name": { "kind": "Name", "value": "personalBio" } }, { "kind": "Field", "name": { "kind": "Name", "value": "technicalBio" } }] } }] };
exports.AuthInfoFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "authInfo" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "AuthInfo" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "authenticationEndpoint" } }, { "kind": "Field", "name": { "kind": "Name", "value": "firebaseConfig" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "appId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "apiKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "projectId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authDomain" } }] } }] } }] };
exports.SystemInfoFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "systemInfo" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "SystemInfo" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "region" } }, { "kind": "Field", "name": { "kind": "Name", "value": "stage" } }, { "kind": "Field", "name": { "kind": "Name", "value": "version" } }, { "kind": "Field", "name": { "kind": "Name", "value": "apiEndpoint" } }, { "kind": "Field", "name": { "kind": "Name", "value": "graphqlEndpoint" } }, { "kind": "Field", "name": { "kind": "Name", "value": "realtimeEndpoint" } }, { "kind": "Field", "name": { "kind": "Name", "value": "authInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "authInfo" } }] } }] } }] };
exports.GetAccountDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getAccount" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "accountWithAllFields" } }] } }] } }], exports.AccountWithAllFieldsFragmentDoc.definitions, true) };
function withGetAccount(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetAccountDocument, __assign({ alias: 'getAccount' }, operationOptions));
}
exports.withGetAccount = withGetAccount;
;
function useGetAccountQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetAccountDocument, options);
}
exports.useGetAccountQuery = useGetAccountQuery;
function useGetAccountLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetAccountDocument, options);
}
exports.useGetAccountLazyQuery = useGetAccountLazyQuery;
exports.UpdateAccountDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "updateAccount" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateAccountInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateAccount" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "account" } }] } }] } }], exports.AccountFragmentDoc.definitions, true) };
function withUpdateAccount(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateAccountDocument, __assign({ alias: 'updateAccount' }, operationOptions));
}
exports.withUpdateAccount = withUpdateAccount;
;
function useUpdateAccountMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.UpdateAccountDocument, options);
}
exports.useUpdateAccountMutation = useUpdateAccountMutation;
exports.UpdateAccountProfileDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "updateAccountProfile" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateAccountProfileInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateAccountProfile" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "accountWithAllFields" } }] } }] } }], exports.AccountWithAllFieldsFragmentDoc.definitions, true) };
function withUpdateAccountProfile(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateAccountProfileDocument, __assign({ alias: 'updateAccountProfile' }, operationOptions));
}
exports.withUpdateAccountProfile = withUpdateAccountProfile;
;
function useUpdateAccountProfileMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.UpdateAccountProfileDocument, options);
}
exports.useUpdateAccountProfileMutation = useUpdateAccountProfileMutation;
exports.GetSessionDocument = { "kind": "Document", "definitions": __spreadArray(__spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getSession" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "user" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "session" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "session" } }] } }] } }], exports.UserFragmentDoc.definitions, true), exports.SessionFragmentDoc.definitions, true) };
function withGetSession(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetSessionDocument, __assign({ alias: 'getSession' }, operationOptions));
}
exports.withGetSession = withGetSession;
;
function useGetSessionQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetSessionDocument, options);
}
exports.useGetSessionQuery = useGetSessionQuery;
function useGetSessionLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetSessionDocument, options);
}
exports.useGetSessionLazyQuery = useGetSessionLazyQuery;
exports.GetAuthTokenDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getAuthToken" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "authToken" } }] } }] };
function withGetAuthToken(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetAuthTokenDocument, __assign({ alias: 'getAuthToken' }, operationOptions));
}
exports.withGetAuthToken = withGetAuthToken;
;
function useGetAuthTokenQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetAuthTokenDocument, options);
}
exports.useGetAuthTokenQuery = useGetAuthTokenQuery;
function useGetAuthTokenLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetAuthTokenDocument, options);
}
exports.useGetAuthTokenLazyQuery = useGetAuthTokenLazyQuery;
exports.GetAuthInfoDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getAuthInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "authInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "authInfo" } }] } }] } }], exports.AuthInfoFragmentDoc.definitions, true) };
function withGetAuthInfo(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetAuthInfoDocument, __assign({ alias: 'getAuthInfo' }, operationOptions));
}
exports.withGetAuthInfo = withGetAuthInfo;
;
function useGetAuthInfoQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetAuthInfoDocument, options);
}
exports.useGetAuthInfoQuery = useGetAuthInfoQuery;
function useGetAuthInfoLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetAuthInfoDocument, options);
}
exports.useGetAuthInfoLazyQuery = useGetAuthInfoLazyQuery;
exports.GetMeDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getMe" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "me" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "user" } }] } }] } }], exports.UserFragmentDoc.definitions, true) };
function withGetMe(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetMeDocument, __assign({ alias: 'getMe' }, operationOptions));
}
exports.withGetMe = withGetMe;
;
function useGetMeQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetMeDocument, options);
}
exports.useGetMeQuery = useGetMeQuery;
function useGetMeLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetMeDocument, options);
}
exports.useGetMeLazyQuery = useGetMeLazyQuery;
exports.UpdateUserDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "updateUser" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateUserInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateUser" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "user" } }] } }] } }], exports.UserFragmentDoc.definitions, true) };
function withUpdateUser(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateUserDocument, __assign({ alias: 'updateUser' }, operationOptions));
}
exports.withUpdateUser = withUpdateUser;
;
function useUpdateUserMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.UpdateUserDocument, options);
}
exports.useUpdateUserMutation = useUpdateUserMutation;
exports.GetChatDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getChat" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "chatId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "chat" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "accountId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "chatId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "chatId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "chat" } }] } }] } }], exports.ChatFragmentDoc.definitions, true) };
function withGetChat(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetChatDocument, __assign({ alias: 'getChat' }, operationOptions));
}
exports.withGetChat = withGetChat;
;
function useGetChatQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetChatDocument, options);
}
exports.useGetChatQuery = useGetChatQuery;
function useGetChatLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetChatDocument, options);
}
exports.useGetChatLazyQuery = useGetChatLazyQuery;
exports.ChatsByAccountDocument = { "kind": "Document", "definitions": __spreadArray(__spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "chatsByAccount" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "prev" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "next" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "chatsByAccount" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "accountId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "prev" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "prev" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "next" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "next" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "chat" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "pageInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "pageInfo" } }] } }] } }] } }], exports.ChatFragmentDoc.definitions, true), exports.PageInfoFragmentDoc.definitions, true) };
function withChatsByAccount(operationOptions) {
    return ApolloReactHoc.withQuery(exports.ChatsByAccountDocument, __assign({ alias: 'chatsByAccount' }, operationOptions));
}
exports.withChatsByAccount = withChatsByAccount;
;
function useChatsByAccountQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ChatsByAccountDocument, options);
}
exports.useChatsByAccountQuery = useChatsByAccountQuery;
function useChatsByAccountLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ChatsByAccountDocument, options);
}
exports.useChatsByAccountLazyQuery = useChatsByAccountLazyQuery;
exports.MessagesByChatDocument = { "kind": "Document", "definitions": __spreadArray(__spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "messagesByChat" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "chatId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "prev" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "next" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "messagesByChat" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "accountId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "chatId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "chatId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "prev" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "prev" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "next" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "next" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "message" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "pageInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "pageInfo" } }] } }] } }] } }], exports.MessageFragmentDoc.definitions, true), exports.PageInfoFragmentDoc.definitions, true) };
function withMessagesByChat(operationOptions) {
    return ApolloReactHoc.withQuery(exports.MessagesByChatDocument, __assign({ alias: 'messagesByChat' }, operationOptions));
}
exports.withMessagesByChat = withMessagesByChat;
;
function useMessagesByChatQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.MessagesByChatDocument, options);
}
exports.useMessagesByChatQuery = useMessagesByChatQuery;
function useMessagesByChatLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.MessagesByChatDocument, options);
}
exports.useMessagesByChatLazyQuery = useMessagesByChatLazyQuery;
exports.CreateChatDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "createChat" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateChatInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createChat" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "chat" } }] } }] } }], exports.ChatFragmentDoc.definitions, true) };
function withCreateChat(operationOptions) {
    return ApolloReactHoc.withMutation(exports.CreateChatDocument, __assign({ alias: 'createChat' }, operationOptions));
}
exports.withCreateChat = withCreateChat;
;
function useCreateChatMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.CreateChatDocument, options);
}
exports.useCreateChatMutation = useCreateChatMutation;
exports.UpdateChatDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "updateChat" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "UpdateChatInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "updateChat" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "chat" } }] } }] } }], exports.ChatFragmentDoc.definitions, true) };
function withUpdateChat(operationOptions) {
    return ApolloReactHoc.withMutation(exports.UpdateChatDocument, __assign({ alias: 'updateChat' }, operationOptions));
}
exports.withUpdateChat = withUpdateChat;
;
function useUpdateChatMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.UpdateChatDocument, options);
}
exports.useUpdateChatMutation = useUpdateChatMutation;
exports.DeleteChatDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "deleteChat" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "DeleteChatInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "deleteChat" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }] }] } }] };
function withDeleteChat(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteChatDocument, __assign({ alias: 'deleteChat' }, operationOptions));
}
exports.withDeleteChat = withDeleteChat;
;
function useDeleteChatMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.DeleteChatDocument, options);
}
exports.useDeleteChatMutation = useDeleteChatMutation;
exports.SendMessageDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "sendMessage" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "SendMessageInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "sendMessage" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "message" } }] } }] } }], exports.MessageFragmentDoc.definitions, true) };
function withSendMessage(operationOptions) {
    return ApolloReactHoc.withMutation(exports.SendMessageDocument, __assign({ alias: 'sendMessage' }, operationOptions));
}
exports.withSendMessage = withSendMessage;
;
function useSendMessageMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.SendMessageDocument, options);
}
exports.useSendMessageMutation = useSendMessageMutation;
exports.MessageByChatDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "subscription", "name": { "kind": "Name", "value": "messageByChat" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "chatId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "messageByChat" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "accountId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "chatId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "chatId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "message" } }] } }] } }], exports.MessageFragmentDoc.definitions, true) };
function withMessageByChat(operationOptions) {
    return ApolloReactHoc.withSubscription(exports.MessageByChatDocument, __assign({ alias: 'messageByChat' }, operationOptions));
}
exports.withMessageByChat = withMessageByChat;
;
function useMessageByChatSubscription(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useSubscription(exports.MessageByChatDocument, options);
}
exports.useMessageByChatSubscription = useMessageByChatSubscription;
exports.ListPermissionsForResourceDocument = { "kind": "Document", "definitions": __spreadArray(__spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "listPermissionsForResource" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "resource" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "listPermissionsForResource" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "resource" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "resource" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "permission" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "pageInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "pageInfo" } }] } }] } }] } }], exports.PermissionFragmentDoc.definitions, true), exports.PageInfoFragmentDoc.definitions, true) };
function withListPermissionsForResource(operationOptions) {
    return ApolloReactHoc.withQuery(exports.ListPermissionsForResourceDocument, __assign({ alias: 'listPermissionsForResource' }, operationOptions));
}
exports.withListPermissionsForResource = withListPermissionsForResource;
;
function useListPermissionsForResourceQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ListPermissionsForResourceDocument, options);
}
exports.useListPermissionsForResourceQuery = useListPermissionsForResourceQuery;
function useListPermissionsForResourceLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ListPermissionsForResourceDocument, options);
}
exports.useListPermissionsForResourceLazyQuery = useListPermissionsForResourceLazyQuery;
exports.GetProfileDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getProfile" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "profileId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "profile" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "accountId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "profileId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "profileId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "profile" } }] } }] } }], exports.ProfileFragmentDoc.definitions, true) };
function withGetProfile(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetProfileDocument, __assign({ alias: 'getProfile' }, operationOptions));
}
exports.withGetProfile = withGetProfile;
;
function useGetProfileQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetProfileDocument, options);
}
exports.useGetProfileQuery = useGetProfileQuery;
function useGetProfileLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetProfileDocument, options);
}
exports.useGetProfileLazyQuery = useGetProfileLazyQuery;
exports.ProfilesDocument = { "kind": "Document", "definitions": __spreadArray(__spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "profiles" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "prev" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "next" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "profiles" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "accountId" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "accountId" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "prev" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "prev" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "next" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "next" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "profile" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "pageInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "pageInfo" } }] } }] } }] } }], exports.ProfileFragmentDoc.definitions, true), exports.PageInfoFragmentDoc.definitions, true) };
function withProfiles(operationOptions) {
    return ApolloReactHoc.withQuery(exports.ProfilesDocument, __assign({ alias: 'profiles' }, operationOptions));
}
exports.withProfiles = withProfiles;
;
function useProfilesQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.ProfilesDocument, options);
}
exports.useProfilesQuery = useProfilesQuery;
function useProfilesLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.ProfilesDocument, options);
}
exports.useProfilesLazyQuery = useProfilesLazyQuery;
exports.CreateProfileDocument = { "kind": "Document", "definitions": __spreadArray([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "createProfile" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CreateProfileInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createProfile" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "profile" } }] } }] } }], exports.ProfileFragmentDoc.definitions, true) };
function withCreateProfile(operationOptions) {
    return ApolloReactHoc.withMutation(exports.CreateProfileDocument, __assign({ alias: 'createProfile' }, operationOptions));
}
exports.withCreateProfile = withCreateProfile;
;
function useCreateProfileMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.CreateProfileDocument, options);
}
exports.useCreateProfileMutation = useCreateProfileMutation;
exports.DeleteProfileDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "deleteProfile" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "DeleteProfileInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "deleteProfile" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }] }] } }] };
function withDeleteProfile(operationOptions) {
    return ApolloReactHoc.withMutation(exports.DeleteProfileDocument, __assign({ alias: 'deleteProfile' }, operationOptions));
}
exports.withDeleteProfile = withDeleteProfile;
;
function useDeleteProfileMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(exports.DeleteProfileDocument, options);
}
exports.useDeleteProfileMutation = useDeleteProfileMutation;
exports.GetSystemInfoDocument = { "kind": "Document", "definitions": __spreadArray(__spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getSystemInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "systemInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "systemInfo" } }] } }] } }], exports.SystemInfoFragmentDoc.definitions, true), exports.AuthInfoFragmentDoc.definitions, true) };
function withGetSystemInfo(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetSystemInfoDocument, __assign({ alias: 'getSystemInfo' }, operationOptions));
}
exports.withGetSystemInfo = withGetSystemInfo;
;
function useGetSystemInfoQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetSystemInfoDocument, options);
}
exports.useGetSystemInfoQuery = useGetSystemInfoQuery;
function useGetSystemInfoLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetSystemInfoDocument, options);
}
exports.useGetSystemInfoLazyQuery = useGetSystemInfoLazyQuery;
exports.GetSystemTimeDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getSystemTime" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "systemTime" } }] } }] };
function withGetSystemTime(operationOptions) {
    return ApolloReactHoc.withQuery(exports.GetSystemTimeDocument, __assign({ alias: 'getSystemTime' }, operationOptions));
}
exports.withGetSystemTime = withGetSystemTime;
;
function useGetSystemTimeQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.GetSystemTimeDocument, options);
}
exports.useGetSystemTimeQuery = useGetSystemTimeQuery;
function useGetSystemTimeLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.GetSystemTimeDocument, options);
}
exports.useGetSystemTimeLazyQuery = useGetSystemTimeLazyQuery;
exports.BootstrapDocument = { "kind": "Document", "definitions": __spreadArray(__spreadArray(__spreadArray([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "bootstrap" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "session" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "session" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "systemInfo" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "systemInfo" } }] } }] } }], exports.SessionFragmentDoc.definitions, true), exports.SystemInfoFragmentDoc.definitions, true), exports.AuthInfoFragmentDoc.definitions, true) };
function withBootstrap(operationOptions) {
    return ApolloReactHoc.withQuery(exports.BootstrapDocument, __assign({ alias: 'bootstrap' }, operationOptions));
}
exports.withBootstrap = withBootstrap;
;
function useBootstrapQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(exports.BootstrapDocument, options);
}
exports.useBootstrapQuery = useBootstrapQuery;
function useBootstrapLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(exports.BootstrapDocument, options);
}
exports.useBootstrapLazyQuery = useBootstrapLazyQuery;
