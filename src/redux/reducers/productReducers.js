import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  category: "",
  searchQuery: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FILTER_BY_CATEGORY:
      return { ...state, category: payload };
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: payload };

    default:
      return state;
  }
};
