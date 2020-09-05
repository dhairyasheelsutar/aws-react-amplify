/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInviteSender = /* GraphQL */ `
  query GetInviteSender($senderId: String!, $receiverId: String!) {
    getInviteSender(senderId: $senderId, receiverId: $receiverId) {
      senderId
      receiverId
      userInfo {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listInviteSenders = /* GraphQL */ `
  query ListInviteSenders(
    $senderId: String
    $receiverId: ModelStringKeyConditionInput
    $filter: ModelInviteSenderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInviteSenders(
      senderId: $senderId
      receiverId: $receiverId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        senderId
        receiverId
        userInfo {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInviteReceiver = /* GraphQL */ `
  query GetInviteReceiver($receiverId: String!, $senderId: String!) {
    getInviteReceiver(receiverId: $receiverId, senderId: $senderId) {
      senderId
      receiverId
      userInfo {
        id
        name
        createdAt
        updatedAt
      }
      metadata {
        status
      }
      createdAt
      updatedAt
    }
  }
`;
export const listInviteReceivers = /* GraphQL */ `
  query ListInviteReceivers(
    $receiverId: String
    $senderId: ModelStringKeyConditionInput
    $filter: ModelInviteReceiverFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInviteReceivers(
      receiverId: $receiverId
      senderId: $senderId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        senderId
        receiverId
        userInfo {
          id
          name
          createdAt
          updatedAt
        }
        metadata {
          status
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriend = /* GraphQL */ `
  query GetFriend($userId: String!, $friendUserId: String!) {
    getFriend(userId: $userId, friendUserId: $friendUserId) {
      userId
      friendUserId
      userInfo {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $userId: String
    $friendUserId: ModelStringKeyConditionInput
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFriends(
      userId: $userId
      friendUserId: $friendUserId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        friendUserId
        userInfo {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
