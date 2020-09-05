/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createInviteSender = /* GraphQL */ `
  mutation CreateInviteSender(
    $input: CreateInviteSenderInput!
    $condition: ModelInviteSenderConditionInput
  ) {
    createInviteSender(input: $input, condition: $condition) {
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
export const updateInviteSender = /* GraphQL */ `
  mutation UpdateInviteSender(
    $input: UpdateInviteSenderInput!
    $condition: ModelInviteSenderConditionInput
  ) {
    updateInviteSender(input: $input, condition: $condition) {
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
export const deleteInviteSender = /* GraphQL */ `
  mutation DeleteInviteSender(
    $input: DeleteInviteSenderInput!
    $condition: ModelInviteSenderConditionInput
  ) {
    deleteInviteSender(input: $input, condition: $condition) {
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
export const createInviteReceiver = /* GraphQL */ `
  mutation CreateInviteReceiver(
    $input: CreateInviteReceiverInput!
    $condition: ModelInviteReceiverConditionInput
  ) {
    createInviteReceiver(input: $input, condition: $condition) {
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
export const updateInviteReceiver = /* GraphQL */ `
  mutation UpdateInviteReceiver(
    $input: UpdateInviteReceiverInput!
    $condition: ModelInviteReceiverConditionInput
  ) {
    updateInviteReceiver(input: $input, condition: $condition) {
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
export const deleteInviteReceiver = /* GraphQL */ `
  mutation DeleteInviteReceiver(
    $input: DeleteInviteReceiverInput!
    $condition: ModelInviteReceiverConditionInput
  ) {
    deleteInviteReceiver(input: $input, condition: $condition) {
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
export const createFriend = /* GraphQL */ `
  mutation CreateFriend(
    $input: CreateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    createFriend(input: $input, condition: $condition) {
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
export const updateFriend = /* GraphQL */ `
  mutation UpdateFriend(
    $input: UpdateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    updateFriend(input: $input, condition: $condition) {
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
export const deleteFriend = /* GraphQL */ `
  mutation DeleteFriend(
    $input: DeleteFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    deleteFriend(input: $input, condition: $condition) {
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
