import { actions } from "../actions";
import {
	modifyItemQuantity,
	addItemToCart,
	changeCartDisplay
} from "./helpers";

const {
	ADD_ITEM_TO_CART,
	INCREASE_ITEM_QUANTITY,
	DECREASE_ITEM_QUANTITY,
	CHANGE_CART_DISPLAY
} = actions;

const initialState = {
	items: [],
	display: false
};

export const cart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_TO_CART:
			return addItemToCart(state, action);
		case INCREASE_ITEM_QUANTITY:
			return modifyItemQuantity(state, action, "increase");
		case DECREASE_ITEM_QUANTITY:
			return modifyItemQuantity(state, action, "decrease");
		case CHANGE_CART_DISPLAY:
			return changeCartDisplay(action);
		default:
			return state;
	}
};
