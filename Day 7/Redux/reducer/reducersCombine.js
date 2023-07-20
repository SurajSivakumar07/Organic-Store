import { combineReducers } from "redux";
import { displayFruits, isLoggedIn, productReducer } from "./Product_reducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  isLoggedIn: isLoggedIn,
  displayFruits: displayFruits,
});
