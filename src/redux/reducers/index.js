import { combineReducers } from "redux";
import {
  filterReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducers";
const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  filterProducts: filterReducer,
});

export default reducers;
