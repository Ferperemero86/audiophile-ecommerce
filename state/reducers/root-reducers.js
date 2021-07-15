import { combineReducers } from "redux";
import { cart } from "./cart-reducers";
import { checkoutForm } from "./form-reducers";
import { menu } from "./menu-reducers";

export const rootReducers = combineReducers({ cart, checkoutForm, menu });
