import * as actionTypes from "./types";

export const addUserContact = (userID) => {
  return {
    type: actionTypes.ADD_USER_CONTACT,
    payload: {
      id: userID,
    },
  };
};

export const removeUserContact = (userID) => {
  return {
    type: actionTypes.REMOVE_USER_CONTACT,
    payload: {
      id: userID,
    },
  };
};

export const updateUserContact = (userID, userContact) => {
  return {
    type: actionTypes.SET_USER_CONTACT,
    payload: {
      id: userID,
      userContact: userContact,
    },
  };
};

export const loadCurrentContact = (userID) => {
  return {
    type: actionTypes.GET_USER_CONTACT,
    payload: {
        id: userID,
      },
  };
};
