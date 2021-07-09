import { combineReducers } from "redux";
import { cart } from "./cart-reducers";
import { checkoutForm } from "./form-reducers";

export const rootReducers = combineReducers({ cart, checkoutForm });
