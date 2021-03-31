import { usersData } from "../../DB/UserData";
import * as actionTypes from "../actions/types";

const INITIAL_STATE = {
  contacts: [...usersData], //{userID, contact, address details,}
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      //adding,receiving, editing, deleting
    case actionTypes.ADD_USER_CONTACT:
      return {
        ...state,
        contacts: state.contacts.push(action.payload),
      };
    case actionTypes.REMOVE_USER_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((user) => user.userID !== action.payload.id),

      };
    case actionTypes.SET_USER_CONTACT:
      return {
        ...state,
      };
    case actionTypes.GET_USER_CONTACT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default contactReducer;
