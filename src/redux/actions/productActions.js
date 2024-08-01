import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setSelectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: [],
  };
};

export const setFilterCategory = (value) => {
  return {
    type: ActionTypes.FILTER_BY_CATEGORY,
    payload: value,
  };
};

export const setSearchQuery = (query) => {
  return {
    type: ActionTypes.SET_SEARCH_QUERY,
    payload: query,
  };
};
