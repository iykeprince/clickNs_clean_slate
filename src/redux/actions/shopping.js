import * as actionTypes from "./types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, value,finalTotalPrice) => {
  return {
    type: actionTypes.EDIT_QTY,
    payload: {
      id: itemID,
      qty: value,
      finalTotalPrice: finalTotalPrice,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.GET_CURRENT_ITEM,
    payload: item,
  };
};
