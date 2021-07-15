import { actions } from "../actions";
import {
	showCart,
	modifyItemQuantity,
	addItemToCart,
	changeCartDisplay,
	removeAllCartProducts
} from "../../helpers/cart-helpers";

const {
	SHOW_CART,
	ADD_ITEM_TO_CART,
	INCREASE_ITEM_QUANTITY,
	DECREASE_ITEM_QUANTITY,
	CHANGE_CART_DISPLAY,
	REMOVE_ALL_CART_PRODUCTS
} = actions;

const initialState = {
	items: [],
	display: false
};

export const cart = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_CART:
			return showCart(state);
		case ADD_ITEM_TO_CART:
			return addItemToCart(state, action);
		case INCREASE_ITEM_QUANTITY:
			return modifyItemQuantity(state, action, "increase");
		case DECREASE_ITEM_QUANTITY:
			return modifyItemQuantity(state, action, "decrease");
		case CHANGE_CART_DISPLAY:
			return changeCartDisplay(action);
		case REMOVE_ALL_CART_PRODUCTS:
			return removeAllCartProducts(state);
		default:
			return state;
	}
};
