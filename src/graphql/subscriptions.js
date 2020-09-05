/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInviteSender = /* GraphQL */ `
  subscription OnCreateInviteSender {
    onCreateInviteSender {
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
export const onUpdateInviteSender = /* GraphQL */ `
  subscription OnUpdateInviteSender {
    onUpdateInviteSender {
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
export const onDeleteInviteSender = /* GraphQL */ `
  subscription OnDeleteInviteSender {
    onDeleteInviteSender {
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
export const onCreateInviteReceiver = /* GraphQL */ `
  subscription OnCreateInviteReceiver {
    onCreateInviteReceiver {
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
export const onUpdateInviteReceiver = /* GraphQL */ `
  subscription OnUpdateInviteReceiver {
    onUpdateInviteReceiver {
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
export const onDeleteInviteReceiver = /* GraphQL */ `
  subscription OnDeleteInviteReceiver {
    onDeleteInviteReceiver {
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
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend {
    onCreateFriend {
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
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend {
    onUpdateFriend {
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
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend {
    onDeleteFriend {
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
