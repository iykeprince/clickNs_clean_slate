import * as actionTypes from "../actions/types";

const INITIAL_STATE = {
  products: [], //{id, title, price, descr, img}
  cart: [], //{id, title, price, descr, img}
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.EDIT_QTY:
      return {};
    case actionTypes.GET_CURRENT_ITEM:
      return {};

    default:
      return state;
  }
};

export default shopReducer;
