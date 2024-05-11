/// <reference types="react" />
import type { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: Date;
    DateTime: Date;
    JSON: {
        [key: string]: any;
    };
    JSONObject: any;
    Time: any;
    Void: void;
};
export type Account = {
    address?: Maybe<Address>;
    createdAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    officialBirthday?: Maybe<Scalars['String']>;
    officialName?: Maybe<Scalars['String']>;
    personalBio?: Maybe<Scalars['String']>;
    status: AccountStatusEnum;
    technicalBio?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    user: UserInfo;
};
export type AccountConnection = {
    nodes?: Maybe<Array<Account>>;
    pageInfo?: Maybe<PageInfo>;
};
export declare enum AccountStatusEnum {
    Approved = "Approved",
    Default = "Default",
    EmailNotVerified = "EmailNotVerified",
    OfficialDocumentsNeeded = "OfficialDocumentsNeeded",
    Rejected = "Rejected"
}
export type Address = {
    address?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    complement?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    district?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
};
export type AddressInput = {
    address: Scalars['String'];
    city: Scalars['String'];
    complement?: InputMaybe<Scalars['String']>;
    country: Scalars['String'];
    district: Scalars['String'];
    number: Scalars['String'];
    postalCode: Scalars['String'];
    state: Scalars['String'];
};
export type AuthInfo = {
    authenticationEndpoint: Scalars['String'];
    firebaseConfig: AuthInfoFirebaseConfig;
};
export type AuthInfoFirebaseConfig = {
    apiKey?: Maybe<Scalars['String']>;
    appId?: Maybe<Scalars['String']>;
    authDomain?: Maybe<Scalars['String']>;
    projectId?: Maybe<Scalars['String']>;
};
export type Chat = {
    createdAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    status: ChatStatusEnum;
    type: ChatTypeEnum;
    updatedAt?: Maybe<Scalars['DateTime']>;
};
export type ChatConnection = {
    nodes?: Maybe<Array<Chat>>;
    pageInfo?: Maybe<PageInfo>;
};
export declare enum ChatMessageRoleEnum {
    Assistant = "assistant",
    User = "user"
}
export declare enum ChatStatusEnum {
    Blocked = "Blocked",
    Default = "Default",
    Suspended = "Suspended"
}
export declare enum ChatTypeEnum {
    Default = "Default",
    Premium = "Premium"
}
export type CreateChatInput = {
    accountId: Scalars['ID'];
    profileId: Scalars['ID'];
};
export type CreateProfileInput = {
    accountId: Scalars['ID'];
};
export type CustomClaims = {
    groups?: Maybe<Array<Maybe<Scalars['String']>>>;
    job?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
};
export type DeleteChatInput = {
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
};
export type DeleteProfileInput = {
    accountId: Scalars['ID'];
    profileId: Scalars['ID'];
};
export type Error = {
    code?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
};
export type Message = {
    content?: Maybe<Array<MessageContent>>;
    createdAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    role?: Maybe<ChatMessageRoleEnum>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};
export type MessageConnection = {
    nodes?: Maybe<Array<Message>>;
    pageInfo?: Maybe<PageInfo>;
};
export type MessageContent = {
    likeness?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
};
export type Mutation = {
    _?: Maybe<Scalars['String']>;
    createChat?: Maybe<Chat>;
    createProfile?: Maybe<Profile>;
    deleteChat?: Maybe<Scalars['Void']>;
    deleteProfile?: Maybe<Scalars['Void']>;
    sendMessage?: Maybe<Message>;
    updateAccount?: Maybe<Account>;
    updateAccountProfile?: Maybe<Account>;
    updateChat?: Maybe<Chat>;
    updateUser?: Maybe<User>;
};
export type Mutation_Args = {
    message?: InputMaybe<Scalars['ID']>;
};
export type MutationCreateChatArgs = {
    input: CreateChatInput;
};
export type MutationCreateProfileArgs = {
    input: CreateProfileInput;
};
export type MutationDeleteChatArgs = {
    input: DeleteChatInput;
};
export type MutationDeleteProfileArgs = {
    input: DeleteProfileInput;
};
export type MutationSendMessageArgs = {
    input: SendMessageInput;
};
export type MutationUpdateAccountArgs = {
    input: UpdateAccountInput;
};
export type MutationUpdateAccountProfileArgs = {
    input: UpdateAccountProfileInput;
};
export type MutationUpdateChatArgs = {
    input: UpdateChatInput;
};
export type MutationUpdateUserArgs = {
    input: UpdateUserInput;
};
export type OfficialDocument = {
    code: Scalars['String'];
    type: Scalars['String'];
};
export type OfficialDocumentInput = {
    code: Scalars['String'];
    type: Scalars['String'];
};
export type PageInfo = {
    count?: Maybe<Scalars['Int']>;
    hasCount?: Maybe<Scalars['Boolean']>;
    hasNext?: Maybe<Scalars['Boolean']>;
    hasPrev?: Maybe<Scalars['Boolean']>;
    next?: Maybe<Scalars['String']>;
    prev?: Maybe<Scalars['String']>;
};
export type Permission = {
    createdAt?: Maybe<Scalars['DateTime']>;
    grant: Scalars['String'];
    id: Scalars['ID'];
    resource: Scalars['ID'];
    subject: Scalars['ID'];
    typename: Scalars['String'];
    updatedAt?: Maybe<Scalars['DateTime']>;
};
export type PermissionConnection = {
    nodes?: Maybe<Array<Permission>>;
    pageInfo?: Maybe<PageInfo>;
};
export type Profile = {
    baseImageUrl: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    interests?: Maybe<Array<Scalars['String']>>;
    officialBirthday: Scalars['String'];
    officialName: Scalars['String'];
    personalBio?: Maybe<Scalars['String']>;
    status: ProfileStatusEnum;
    technicalBio?: Maybe<Scalars['String']>;
    type: ProfileTypeEnum;
    updatedAt?: Maybe<Scalars['DateTime']>;
};
export type ProfileConnection = {
    nodes?: Maybe<Array<Profile>>;
    pageInfo?: Maybe<PageInfo>;
};
export declare enum ProfileStatusEnum {
    Default = "Default",
    Unavailable = "Unavailable"
}
export declare enum ProfileTypeEnum {
    Default = "Default",
    Premium = "Premium"
}
export type PublicUserInfo = {
    birthday?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};
export type Query = {
    _?: Maybe<Scalars['String']>;
    account?: Maybe<Account>;
    authInfo?: Maybe<AuthInfo>;
    authToken?: Maybe<Scalars['String']>;
    chat?: Maybe<Chat>;
    chatsByAccount: ChatConnection;
    listPermissionsForResource: PermissionConnection;
    me?: Maybe<User>;
    messagesByChat: MessageConnection;
    profile?: Maybe<Profile>;
    profiles: ProfileConnection;
    session?: Maybe<Session>;
    systemInfo?: Maybe<SystemInfo>;
    systemTime?: Maybe<Scalars['Float']>;
};
export type QueryAccountArgs = {
    id: Scalars['ID'];
};
export type QueryChatArgs = {
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
};
export type QueryChatsByAccountArgs = {
    accountId: Scalars['ID'];
    limit?: InputMaybe<Scalars['Int']>;
    next?: InputMaybe<Scalars['String']>;
    prev?: InputMaybe<Scalars['String']>;
};
export type QueryListPermissionsForResourceArgs = {
    resource: Scalars['ID'];
};
export type QueryMessagesByChatArgs = {
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
    limit?: InputMaybe<Scalars['Int']>;
    next?: InputMaybe<Scalars['String']>;
    prev?: InputMaybe<Scalars['String']>;
};
export type QueryProfileArgs = {
    accountId: Scalars['ID'];
    profileId: Scalars['ID'];
};
export type QueryProfilesArgs = {
    accountId: Scalars['ID'];
    limit?: InputMaybe<Scalars['Int']>;
    next?: InputMaybe<Scalars['String']>;
    prev?: InputMaybe<Scalars['String']>;
};
export type SendMessageInput = {
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
    content: Scalars['String'];
};
export type Session = {
    anonymousId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    error?: Maybe<Error>;
    groups?: Maybe<Array<Maybe<Scalars['String']>>>;
    name?: Maybe<Scalars['String']>;
    sub?: Maybe<Scalars['String']>;
    token_use?: Maybe<Scalars['String']>;
};
export type Subscription = {
    _?: Maybe<Scalars['String']>;
    messageByChat?: Maybe<Message>;
};
export type SubscriptionMessageByChatArgs = {
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
};
export type SystemInfo = {
    apiEndpoint?: Maybe<Scalars['String']>;
    authInfo?: Maybe<AuthInfo>;
    graphqlEndpoint?: Maybe<Scalars['String']>;
    realtimeEndpoint?: Maybe<Scalars['String']>;
    region?: Maybe<Scalars['String']>;
    stage?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};
export type UpdateAccountInput = {
    address?: InputMaybe<AddressInput>;
    id: Scalars['ID'];
    officialDocuments?: InputMaybe<Array<OfficialDocumentInput>>;
    personalBio?: InputMaybe<Scalars['String']>;
    technicalBio?: InputMaybe<Scalars['String']>;
};
export type UpdateAccountProfileInput = {
    birthday?: InputMaybe<Scalars['String']>;
    cnpj?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    cpf?: InputMaybe<Scalars['String']>;
    fullName?: InputMaybe<Scalars['String']>;
    job?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    uid: Scalars['ID'];
};
export type UpdateChatInput = {
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
};
export type UpdateUserInput = {
    groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    job?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    uid: Scalars['ID'];
};
export type User = {
    customClaims?: Maybe<CustomClaims>;
    disabled?: Maybe<Scalars['Boolean']>;
    displayName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};
export type UserConnection = {
    nodes?: Maybe<Array<Maybe<User>>>;
    pageInfo: PageInfo;
};
export type UserInfo = {
    customClaims?: Maybe<CustomClaims>;
    disabled?: Maybe<Scalars['Boolean']>;
    displayName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    uid: Scalars['ID'];
};
export type GetAccountQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export type GetAccountQuery = {
    account?: Maybe<Pick<Account, 'id' | 'status' | 'officialName' | 'officialBirthday' | 'createdAt' | 'updatedAt'>>;
};
export type UpdateAccountMutationVariables = Exact<{
    input: UpdateAccountInput;
}>;
export type UpdateAccountMutation = {
    updateAccount?: Maybe<Pick<Account, 'id' | 'status' | 'officialName' | 'createdAt' | 'updatedAt'>>;
};
export type UpdateAccountProfileMutationVariables = Exact<{
    input: UpdateAccountProfileInput;
}>;
export type UpdateAccountProfileMutation = {
    updateAccountProfile?: Maybe<Pick<Account, 'id' | 'status' | 'officialName' | 'officialBirthday' | 'createdAt' | 'updatedAt'>>;
};
export type GetSessionQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetSessionQuery = {
    me?: Maybe<(Pick<User, 'uid' | 'name' | 'displayName' | 'email' | 'status' | 'disabled'> & {
        customClaims?: Maybe<Pick<CustomClaims, 'groups' | 'job' | 'phone'>>;
    })>;
    session?: Maybe<(Pick<Session, 'token_use' | 'sub' | 'name' | 'email' | 'groups'> & {
        error?: Maybe<Pick<Error, 'code' | 'message'>>;
    })>;
};
export type GetAuthTokenQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetAuthTokenQuery = Pick<Query, 'authToken'>;
export type GetAuthInfoQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetAuthInfoQuery = {
    authInfo?: Maybe<(Pick<AuthInfo, 'authenticationEndpoint'> & {
        firebaseConfig: Pick<AuthInfoFirebaseConfig, 'appId' | 'apiKey' | 'projectId' | 'authDomain'>;
    })>;
};
export type GetMeQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetMeQuery = {
    me?: Maybe<(Pick<User, 'uid' | 'name' | 'displayName' | 'email' | 'status' | 'disabled'> & {
        customClaims?: Maybe<Pick<CustomClaims, 'groups' | 'job' | 'phone'>>;
    })>;
};
export type UpdateUserMutationVariables = Exact<{
    input: UpdateUserInput;
}>;
export type UpdateUserMutation = {
    updateUser?: Maybe<(Pick<User, 'uid' | 'name' | 'displayName' | 'email' | 'status' | 'disabled'> & {
        customClaims?: Maybe<Pick<CustomClaims, 'groups' | 'job' | 'phone'>>;
    })>;
};
export type GetChatQueryVariables = Exact<{
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
}>;
export type GetChatQuery = {
    chat?: Maybe<Pick<Chat, 'id' | 'type' | 'status'>>;
};
export type ChatsByAccountQueryVariables = Exact<{
    accountId: Scalars['ID'];
    prev?: InputMaybe<Scalars['String']>;
    next?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Int']>;
}>;
export type ChatsByAccountQuery = {
    chatsByAccount: {
        nodes?: Maybe<Array<Pick<Chat, 'id' | 'type' | 'status'>>>;
        pageInfo?: Maybe<Pick<PageInfo, 'hasPrev' | 'prev' | 'hasNext' | 'next' | 'hasCount' | 'count'>>;
    };
};
export type MessagesByChatQueryVariables = Exact<{
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
    prev?: InputMaybe<Scalars['String']>;
    next?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Int']>;
}>;
export type MessagesByChatQuery = {
    messagesByChat: {
        nodes?: Maybe<Array<(Pick<Message, 'id' | 'role' | 'createdAt' | 'updatedAt'> & {
            content?: Maybe<Array<Pick<MessageContent, 'text'>>>;
        })>>;
        pageInfo?: Maybe<Pick<PageInfo, 'hasPrev' | 'prev' | 'hasNext' | 'next' | 'hasCount' | 'count'>>;
    };
};
export type CreateChatMutationVariables = Exact<{
    input: CreateChatInput;
}>;
export type CreateChatMutation = {
    createChat?: Maybe<Pick<Chat, 'id' | 'type' | 'status'>>;
};
export type UpdateChatMutationVariables = Exact<{
    input: UpdateChatInput;
}>;
export type UpdateChatMutation = {
    updateChat?: Maybe<Pick<Chat, 'id' | 'type' | 'status'>>;
};
export type DeleteChatMutationVariables = Exact<{
    input: DeleteChatInput;
}>;
export type DeleteChatMutation = Pick<Mutation, 'deleteChat'>;
export type SendMessageMutationVariables = Exact<{
    input: SendMessageInput;
}>;
export type SendMessageMutation = {
    sendMessage?: Maybe<(Pick<Message, 'id' | 'role' | 'createdAt' | 'updatedAt'> & {
        content?: Maybe<Array<Pick<MessageContent, 'text'>>>;
    })>;
};
export type MessageByChatSubscriptionVariables = Exact<{
    accountId: Scalars['ID'];
    chatId: Scalars['ID'];
}>;
export type MessageByChatSubscription = {
    messageByChat?: Maybe<(Pick<Message, 'id' | 'role' | 'createdAt' | 'updatedAt'> & {
        content?: Maybe<Array<Pick<MessageContent, 'text'>>>;
    })>;
};
export type ListPermissionsForResourceQueryVariables = Exact<{
    resource: Scalars['ID'];
}>;
export type ListPermissionsForResourceQuery = {
    listPermissionsForResource: {
        nodes?: Maybe<Array<Pick<Permission, 'id' | 'resource' | 'subject' | 'grant'>>>;
        pageInfo?: Maybe<Pick<PageInfo, 'hasPrev' | 'prev' | 'hasNext' | 'next' | 'hasCount' | 'count'>>;
    };
};
export type GetProfileQueryVariables = Exact<{
    accountId: Scalars['ID'];
    profileId: Scalars['ID'];
}>;
export type GetProfileQuery = {
    profile?: Maybe<Pick<Profile, 'id' | 'type' | 'status' | 'officialName' | 'officialBirthday' | 'baseImageUrl' | 'interests' | 'personalBio' | 'technicalBio'>>;
};
export type ProfilesQueryVariables = Exact<{
    accountId: Scalars['ID'];
    prev?: InputMaybe<Scalars['String']>;
    next?: InputMaybe<Scalars['String']>;
    limit?: InputMaybe<Scalars['Int']>;
}>;
export type ProfilesQuery = {
    profiles: {
        nodes?: Maybe<Array<Pick<Profile, 'id' | 'type' | 'status' | 'officialName' | 'officialBirthday' | 'baseImageUrl' | 'interests' | 'personalBio' | 'technicalBio'>>>;
        pageInfo?: Maybe<Pick<PageInfo, 'hasPrev' | 'prev' | 'hasNext' | 'next' | 'hasCount' | 'count'>>;
    };
};
export type CreateProfileMutationVariables = Exact<{
    input: CreateProfileInput;
}>;
export type CreateProfileMutation = {
    createProfile?: Maybe<Pick<Profile, 'id' | 'type' | 'status' | 'officialName' | 'officialBirthday' | 'baseImageUrl' | 'interests' | 'personalBio' | 'technicalBio'>>;
};
export type DeleteProfileMutationVariables = Exact<{
    input: DeleteProfileInput;
}>;
export type DeleteProfileMutation = Pick<Mutation, 'deleteProfile'>;
export type GetSystemInfoQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetSystemInfoQuery = {
    systemInfo?: Maybe<(Pick<SystemInfo, 'region' | 'stage' | 'version' | 'apiEndpoint' | 'graphqlEndpoint' | 'realtimeEndpoint'> & {
        authInfo?: Maybe<(Pick<AuthInfo, 'authenticationEndpoint'> & {
            firebaseConfig: Pick<AuthInfoFirebaseConfig, 'appId' | 'apiKey' | 'projectId' | 'authDomain'>;
        })>;
    })>;
};
export type GetSystemTimeQueryVariables = Exact<{
    [key: string]: never;
}>;
export type GetSystemTimeQuery = Pick<Query, 'systemTime'>;
export type BootstrapQueryVariables = Exact<{
    [key: string]: never;
}>;
export type BootstrapQuery = {
    session?: Maybe<(Pick<Session, 'token_use' | 'sub' | 'name' | 'email' | 'groups'> & {
        error?: Maybe<Pick<Error, 'code' | 'message'>>;
    })>;
    systemInfo?: Maybe<(Pick<SystemInfo, 'region' | 'stage' | 'version' | 'apiEndpoint' | 'graphqlEndpoint' | 'realtimeEndpoint'> & {
        authInfo?: Maybe<(Pick<AuthInfo, 'authenticationEndpoint'> & {
            firebaseConfig: Pick<AuthInfoFirebaseConfig, 'appId' | 'apiKey' | 'projectId' | 'authDomain'>;
        })>;
    })>;
};
export declare const AccountFragmentDoc: DocumentNode;
export declare const AccountWithAllFieldsFragmentDoc: DocumentNode;
export declare const UserFragmentDoc: DocumentNode;
export declare const UserInfoFragmentDoc: DocumentNode;
export declare const PublicUserInfoFragmentDoc: DocumentNode;
export declare const UserWithBasicFieldsFragmentDoc: DocumentNode;
export declare const SessionFragmentDoc: DocumentNode;
export declare const ChatFragmentDoc: DocumentNode;
export declare const MessageFragmentDoc: DocumentNode;
export declare const PageInfoFragmentDoc: DocumentNode;
export declare const PermissionFragmentDoc: DocumentNode;
export declare const ProfileFragmentDoc: DocumentNode;
export declare const AuthInfoFragmentDoc: DocumentNode;
export declare const SystemInfoFragmentDoc: DocumentNode;
export declare const GetAccountDocument: DocumentNode;
export type GetAccountProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetAccountQuery, GetAccountQueryVariables>;
} & TChildProps;
export declare function withGetAccount<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetAccountQuery, GetAccountQueryVariables, GetAccountProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetAccountQuery, Exact<{
    id: string;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetAccountQuery(baseOptions: Apollo.QueryHookOptions<GetAccountQuery, GetAccountQueryVariables>): Apollo.QueryResult<GetAccountQuery, Exact<{
    id: string;
}>>;
export declare function useGetAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountQuery, GetAccountQueryVariables>): Apollo.LazyQueryResultTuple<GetAccountQuery, Exact<{
    id: string;
}>>;
export type GetAccountQueryHookResult = ReturnType<typeof useGetAccountQuery>;
export type GetAccountLazyQueryHookResult = ReturnType<typeof useGetAccountLazyQuery>;
export type GetAccountQueryResult = Apollo.QueryResult<GetAccountQuery, GetAccountQueryVariables>;
export declare const UpdateAccountDocument: DocumentNode;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;
export type UpdateAccountProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;
} & TChildProps;
export declare function withUpdateAccount<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateAccountMutation, UpdateAccountMutationVariables, UpdateAccountProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<UpdateAccountMutation, Exact<{
    input: UpdateAccountInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>): Apollo.MutationTuple<UpdateAccountMutation, Exact<{
    input: UpdateAccountInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export declare const UpdateAccountProfileDocument: DocumentNode;
export type UpdateAccountProfileMutationFn = Apollo.MutationFunction<UpdateAccountProfileMutation, UpdateAccountProfileMutationVariables>;
export type UpdateAccountProfileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<UpdateAccountProfileMutation, UpdateAccountProfileMutationVariables>;
} & TChildProps;
export declare function withUpdateAccountProfile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateAccountProfileMutation, UpdateAccountProfileMutationVariables, UpdateAccountProfileProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<UpdateAccountProfileMutation, Exact<{
    input: UpdateAccountProfileInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useUpdateAccountProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountProfileMutation, UpdateAccountProfileMutationVariables>): Apollo.MutationTuple<UpdateAccountProfileMutation, Exact<{
    input: UpdateAccountProfileInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UpdateAccountProfileMutationHookResult = ReturnType<typeof useUpdateAccountProfileMutation>;
export type UpdateAccountProfileMutationResult = Apollo.MutationResult<UpdateAccountProfileMutation>;
export type UpdateAccountProfileMutationOptions = Apollo.BaseMutationOptions<UpdateAccountProfileMutation, UpdateAccountProfileMutationVariables>;
export declare const GetSessionDocument: DocumentNode;
export type GetSessionProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetSessionQuery, GetSessionQueryVariables>;
} & TChildProps;
export declare function withGetSession<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetSessionQuery, GetSessionQueryVariables, GetSessionProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetSessionQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetSessionQuery(baseOptions?: Apollo.QueryHookOptions<GetSessionQuery, GetSessionQueryVariables>): Apollo.QueryResult<GetSessionQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSessionQuery, GetSessionQueryVariables>): Apollo.LazyQueryResultTuple<GetSessionQuery, Exact<{
    [key: string]: never;
}>>;
export type GetSessionQueryHookResult = ReturnType<typeof useGetSessionQuery>;
export type GetSessionLazyQueryHookResult = ReturnType<typeof useGetSessionLazyQuery>;
export type GetSessionQueryResult = Apollo.QueryResult<GetSessionQuery, GetSessionQueryVariables>;
export declare const GetAuthTokenDocument: DocumentNode;
export type GetAuthTokenProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetAuthTokenQuery, GetAuthTokenQueryVariables>;
} & TChildProps;
export declare function withGetAuthToken<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetAuthTokenQuery, GetAuthTokenQueryVariables, GetAuthTokenProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetAuthTokenQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetAuthTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthTokenQuery, GetAuthTokenQueryVariables>): Apollo.QueryResult<GetAuthTokenQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetAuthTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthTokenQuery, GetAuthTokenQueryVariables>): Apollo.LazyQueryResultTuple<GetAuthTokenQuery, Exact<{
    [key: string]: never;
}>>;
export type GetAuthTokenQueryHookResult = ReturnType<typeof useGetAuthTokenQuery>;
export type GetAuthTokenLazyQueryHookResult = ReturnType<typeof useGetAuthTokenLazyQuery>;
export type GetAuthTokenQueryResult = Apollo.QueryResult<GetAuthTokenQuery, GetAuthTokenQueryVariables>;
export declare const GetAuthInfoDocument: DocumentNode;
export type GetAuthInfoProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetAuthInfoQuery, GetAuthInfoQueryVariables>;
} & TChildProps;
export declare function withGetAuthInfo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetAuthInfoQuery, GetAuthInfoQueryVariables, GetAuthInfoProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetAuthInfoQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetAuthInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthInfoQuery, GetAuthInfoQueryVariables>): Apollo.QueryResult<GetAuthInfoQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetAuthInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthInfoQuery, GetAuthInfoQueryVariables>): Apollo.LazyQueryResultTuple<GetAuthInfoQuery, Exact<{
    [key: string]: never;
}>>;
export type GetAuthInfoQueryHookResult = ReturnType<typeof useGetAuthInfoQuery>;
export type GetAuthInfoLazyQueryHookResult = ReturnType<typeof useGetAuthInfoLazyQuery>;
export type GetAuthInfoQueryResult = Apollo.QueryResult<GetAuthInfoQuery, GetAuthInfoQueryVariables>;
export declare const GetMeDocument: DocumentNode;
export type GetMeProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetMeQuery, GetMeQueryVariables>;
} & TChildProps;
export declare function withGetMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetMeQuery, GetMeQueryVariables, GetMeProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetMeQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>): Apollo.QueryResult<GetMeQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>): Apollo.LazyQueryResultTuple<GetMeQuery, Exact<{
    [key: string]: never;
}>>;
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export declare const UpdateUserDocument: DocumentNode;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
} & TChildProps;
export declare function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<UpdateUserMutation, Exact<{
    input: UpdateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>): Apollo.MutationTuple<UpdateUserMutation, Exact<{
    input: UpdateUserInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export declare const GetChatDocument: DocumentNode;
export type GetChatProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetChatQuery, GetChatQueryVariables>;
} & TChildProps;
export declare function withGetChat<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetChatQuery, GetChatQueryVariables, GetChatProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetChatQuery, Exact<{
    accountId: string;
    chatId: string;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetChatQuery(baseOptions: Apollo.QueryHookOptions<GetChatQuery, GetChatQueryVariables>): Apollo.QueryResult<GetChatQuery, Exact<{
    accountId: string;
    chatId: string;
}>>;
export declare function useGetChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatQuery, GetChatQueryVariables>): Apollo.LazyQueryResultTuple<GetChatQuery, Exact<{
    accountId: string;
    chatId: string;
}>>;
export type GetChatQueryHookResult = ReturnType<typeof useGetChatQuery>;
export type GetChatLazyQueryHookResult = ReturnType<typeof useGetChatLazyQuery>;
export type GetChatQueryResult = Apollo.QueryResult<GetChatQuery, GetChatQueryVariables>;
export declare const ChatsByAccountDocument: DocumentNode;
export type ChatsByAccountProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<ChatsByAccountQuery, ChatsByAccountQueryVariables>;
} & TChildProps;
export declare function withChatsByAccount<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, ChatsByAccountQuery, ChatsByAccountQueryVariables, ChatsByAccountProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<ChatsByAccountQuery, Exact<{
    accountId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useChatsByAccountQuery(baseOptions: Apollo.QueryHookOptions<ChatsByAccountQuery, ChatsByAccountQueryVariables>): Apollo.QueryResult<ChatsByAccountQuery, Exact<{
    accountId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>;
export declare function useChatsByAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatsByAccountQuery, ChatsByAccountQueryVariables>): Apollo.LazyQueryResultTuple<ChatsByAccountQuery, Exact<{
    accountId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>;
export type ChatsByAccountQueryHookResult = ReturnType<typeof useChatsByAccountQuery>;
export type ChatsByAccountLazyQueryHookResult = ReturnType<typeof useChatsByAccountLazyQuery>;
export type ChatsByAccountQueryResult = Apollo.QueryResult<ChatsByAccountQuery, ChatsByAccountQueryVariables>;
export declare const MessagesByChatDocument: DocumentNode;
export type MessagesByChatProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<MessagesByChatQuery, MessagesByChatQueryVariables>;
} & TChildProps;
export declare function withMessagesByChat<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, MessagesByChatQuery, MessagesByChatQueryVariables, MessagesByChatProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<MessagesByChatQuery, Exact<{
    accountId: string;
    chatId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useMessagesByChatQuery(baseOptions: Apollo.QueryHookOptions<MessagesByChatQuery, MessagesByChatQueryVariables>): Apollo.QueryResult<MessagesByChatQuery, Exact<{
    accountId: string;
    chatId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>;
export declare function useMessagesByChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesByChatQuery, MessagesByChatQueryVariables>): Apollo.LazyQueryResultTuple<MessagesByChatQuery, Exact<{
    accountId: string;
    chatId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>;
export type MessagesByChatQueryHookResult = ReturnType<typeof useMessagesByChatQuery>;
export type MessagesByChatLazyQueryHookResult = ReturnType<typeof useMessagesByChatLazyQuery>;
export type MessagesByChatQueryResult = Apollo.QueryResult<MessagesByChatQuery, MessagesByChatQueryVariables>;
export declare const CreateChatDocument: DocumentNode;
export type CreateChatMutationFn = Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;
export type CreateChatProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;
} & TChildProps;
export declare function withCreateChat<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, CreateChatMutation, CreateChatMutationVariables, CreateChatProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<CreateChatMutation, Exact<{
    input: CreateChatInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useCreateChatMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>): Apollo.MutationTuple<CreateChatMutation, Exact<{
    input: CreateChatInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = Apollo.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = Apollo.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
export declare const UpdateChatDocument: DocumentNode;
export type UpdateChatMutationFn = Apollo.MutationFunction<UpdateChatMutation, UpdateChatMutationVariables>;
export type UpdateChatProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<UpdateChatMutation, UpdateChatMutationVariables>;
} & TChildProps;
export declare function withUpdateChat<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, UpdateChatMutation, UpdateChatMutationVariables, UpdateChatProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<UpdateChatMutation, Exact<{
    input: UpdateChatInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useUpdateChatMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChatMutation, UpdateChatMutationVariables>): Apollo.MutationTuple<UpdateChatMutation, Exact<{
    input: UpdateChatInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type UpdateChatMutationHookResult = ReturnType<typeof useUpdateChatMutation>;
export type UpdateChatMutationResult = Apollo.MutationResult<UpdateChatMutation>;
export type UpdateChatMutationOptions = Apollo.BaseMutationOptions<UpdateChatMutation, UpdateChatMutationVariables>;
export declare const DeleteChatDocument: DocumentNode;
export type DeleteChatMutationFn = Apollo.MutationFunction<DeleteChatMutation, DeleteChatMutationVariables>;
export type DeleteChatProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<DeleteChatMutation, DeleteChatMutationVariables>;
} & TChildProps;
export declare function withDeleteChat<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, DeleteChatMutation, DeleteChatMutationVariables, DeleteChatProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<DeleteChatMutation, Exact<{
    input: DeleteChatInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useDeleteChatMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChatMutation, DeleteChatMutationVariables>): Apollo.MutationTuple<DeleteChatMutation, Exact<{
    input: DeleteChatInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type DeleteChatMutationHookResult = ReturnType<typeof useDeleteChatMutation>;
export type DeleteChatMutationResult = Apollo.MutationResult<DeleteChatMutation>;
export type DeleteChatMutationOptions = Apollo.BaseMutationOptions<DeleteChatMutation, DeleteChatMutationVariables>;
export declare const SendMessageDocument: DocumentNode;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;
export type SendMessageProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;
} & TChildProps;
export declare function withSendMessage<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, SendMessageMutation, SendMessageMutationVariables, SendMessageProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<SendMessageMutation, Exact<{
    input: SendMessageInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>): Apollo.MutationTuple<SendMessageMutation, Exact<{
    input: SendMessageInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export declare const MessageByChatDocument: DocumentNode;
export type MessageByChatProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<MessageByChatSubscription, MessageByChatSubscriptionVariables>;
} & TChildProps;
export declare function withMessageByChat<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, MessageByChatSubscription, MessageByChatSubscriptionVariables, MessageByChatProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<MessageByChatSubscription, Exact<{
    accountId: string;
    chatId: string;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useMessageByChatSubscription(baseOptions: Apollo.SubscriptionHookOptions<MessageByChatSubscription, MessageByChatSubscriptionVariables>): Apollo.SubscriptionResult<MessageByChatSubscription, Exact<{
    accountId: string;
    chatId: string;
}>>;
export type MessageByChatSubscriptionHookResult = ReturnType<typeof useMessageByChatSubscription>;
export type MessageByChatSubscriptionResult = Apollo.SubscriptionResult<MessageByChatSubscription>;
export declare const ListPermissionsForResourceDocument: DocumentNode;
export type ListPermissionsForResourceProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<ListPermissionsForResourceQuery, ListPermissionsForResourceQueryVariables>;
} & TChildProps;
export declare function withListPermissionsForResource<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, ListPermissionsForResourceQuery, ListPermissionsForResourceQueryVariables, ListPermissionsForResourceProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<ListPermissionsForResourceQuery, Exact<{
    resource: string;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useListPermissionsForResourceQuery(baseOptions: Apollo.QueryHookOptions<ListPermissionsForResourceQuery, ListPermissionsForResourceQueryVariables>): Apollo.QueryResult<ListPermissionsForResourceQuery, Exact<{
    resource: string;
}>>;
export declare function useListPermissionsForResourceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPermissionsForResourceQuery, ListPermissionsForResourceQueryVariables>): Apollo.LazyQueryResultTuple<ListPermissionsForResourceQuery, Exact<{
    resource: string;
}>>;
export type ListPermissionsForResourceQueryHookResult = ReturnType<typeof useListPermissionsForResourceQuery>;
export type ListPermissionsForResourceLazyQueryHookResult = ReturnType<typeof useListPermissionsForResourceLazyQuery>;
export type ListPermissionsForResourceQueryResult = Apollo.QueryResult<ListPermissionsForResourceQuery, ListPermissionsForResourceQueryVariables>;
export declare const GetProfileDocument: DocumentNode;
export type GetProfileProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetProfileQuery, GetProfileQueryVariables>;
} & TChildProps;
export declare function withGetProfile<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetProfileQuery, GetProfileQueryVariables, GetProfileProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetProfileQuery, Exact<{
    accountId: string;
    profileId: string;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>): Apollo.QueryResult<GetProfileQuery, Exact<{
    accountId: string;
    profileId: string;
}>>;
export declare function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>): Apollo.LazyQueryResultTuple<GetProfileQuery, Exact<{
    accountId: string;
    profileId: string;
}>>;
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export declare const ProfilesDocument: DocumentNode;
export type ProfilesProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<ProfilesQuery, ProfilesQueryVariables>;
} & TChildProps;
export declare function withProfiles<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, ProfilesQuery, ProfilesQueryVariables, ProfilesProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<ProfilesQuery, Exact<{
    accountId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useProfilesQuery(baseOptions: Apollo.QueryHookOptions<ProfilesQuery, ProfilesQueryVariables>): Apollo.QueryResult<ProfilesQuery, Exact<{
    accountId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>;
export declare function useProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfilesQuery, ProfilesQueryVariables>): Apollo.LazyQueryResultTuple<ProfilesQuery, Exact<{
    accountId: string;
    prev?: string;
    next?: string;
    limit?: number;
}>>;
export type ProfilesQueryHookResult = ReturnType<typeof useProfilesQuery>;
export type ProfilesLazyQueryHookResult = ReturnType<typeof useProfilesLazyQuery>;
export type ProfilesQueryResult = Apollo.QueryResult<ProfilesQuery, ProfilesQueryVariables>;
export declare const CreateProfileDocument: DocumentNode;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;
export type CreateProfileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;
} & TChildProps;
export declare function withCreateProfile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, CreateProfileMutation, CreateProfileMutationVariables, CreateProfileProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<CreateProfileMutation, Exact<{
    input: CreateProfileInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>): Apollo.MutationTuple<CreateProfileMutation, Exact<{
    input: CreateProfileInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export declare const DeleteProfileDocument: DocumentNode;
export type DeleteProfileMutationFn = Apollo.MutationFunction<DeleteProfileMutation, DeleteProfileMutationVariables>;
export type DeleteProfileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: Apollo.MutationFunction<DeleteProfileMutation, DeleteProfileMutationVariables>;
} & TChildProps;
export declare function withDeleteProfile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, DeleteProfileMutation, DeleteProfileMutationVariables, DeleteProfileProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: Apollo.MutationFunction<DeleteProfileMutation, Exact<{
    input: DeleteProfileInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useDeleteProfileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProfileMutation, DeleteProfileMutationVariables>): Apollo.MutationTuple<DeleteProfileMutation, Exact<{
    input: DeleteProfileInput;
}>, Apollo.DefaultContext, Apollo.ApolloCache<any>>;
export type DeleteProfileMutationHookResult = ReturnType<typeof useDeleteProfileMutation>;
export type DeleteProfileMutationResult = Apollo.MutationResult<DeleteProfileMutation>;
export type DeleteProfileMutationOptions = Apollo.BaseMutationOptions<DeleteProfileMutation, DeleteProfileMutationVariables>;
export declare const GetSystemInfoDocument: DocumentNode;
export type GetSystemInfoProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetSystemInfoQuery, GetSystemInfoQueryVariables>;
} & TChildProps;
export declare function withGetSystemInfo<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetSystemInfoQuery, GetSystemInfoQueryVariables, GetSystemInfoProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetSystemInfoQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetSystemInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetSystemInfoQuery, GetSystemInfoQueryVariables>): Apollo.QueryResult<GetSystemInfoQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetSystemInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSystemInfoQuery, GetSystemInfoQueryVariables>): Apollo.LazyQueryResultTuple<GetSystemInfoQuery, Exact<{
    [key: string]: never;
}>>;
export type GetSystemInfoQueryHookResult = ReturnType<typeof useGetSystemInfoQuery>;
export type GetSystemInfoLazyQueryHookResult = ReturnType<typeof useGetSystemInfoLazyQuery>;
export type GetSystemInfoQueryResult = Apollo.QueryResult<GetSystemInfoQuery, GetSystemInfoQueryVariables>;
export declare const GetSystemTimeDocument: DocumentNode;
export type GetSystemTimeProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<GetSystemTimeQuery, GetSystemTimeQueryVariables>;
} & TChildProps;
export declare function withGetSystemTime<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, GetSystemTimeQuery, GetSystemTimeQueryVariables, GetSystemTimeProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<GetSystemTimeQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useGetSystemTimeQuery(baseOptions?: Apollo.QueryHookOptions<GetSystemTimeQuery, GetSystemTimeQueryVariables>): Apollo.QueryResult<GetSystemTimeQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useGetSystemTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSystemTimeQuery, GetSystemTimeQueryVariables>): Apollo.LazyQueryResultTuple<GetSystemTimeQuery, Exact<{
    [key: string]: never;
}>>;
export type GetSystemTimeQueryHookResult = ReturnType<typeof useGetSystemTimeQuery>;
export type GetSystemTimeLazyQueryHookResult = ReturnType<typeof useGetSystemTimeLazyQuery>;
export type GetSystemTimeQueryResult = Apollo.QueryResult<GetSystemTimeQuery, GetSystemTimeQueryVariables>;
export declare const BootstrapDocument: DocumentNode;
export type BootstrapProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<BootstrapQuery, BootstrapQueryVariables>;
} & TChildProps;
export declare function withBootstrap<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, BootstrapQuery, BootstrapQueryVariables, BootstrapProps<TChildProps, TDataName>>): (WrappedComponent: import("react").ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<BootstrapQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => import("react").ComponentClass<TProps, any>;
export declare function useBootstrapQuery(baseOptions?: Apollo.QueryHookOptions<BootstrapQuery, BootstrapQueryVariables>): Apollo.QueryResult<BootstrapQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useBootstrapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BootstrapQuery, BootstrapQueryVariables>): Apollo.LazyQueryResultTuple<BootstrapQuery, Exact<{
    [key: string]: never;
}>>;
export type BootstrapQueryHookResult = ReturnType<typeof useBootstrapQuery>;
export type BootstrapLazyQueryHookResult = ReturnType<typeof useBootstrapLazyQuery>;
export type BootstrapQueryResult = Apollo.QueryResult<BootstrapQuery, BootstrapQueryVariables>;
