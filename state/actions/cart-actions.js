import { actions } from "../actions";

const { ADD_ITEM_TO_CART, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY } =
	actions;

export const addItemToCart = (id, heading, price) => {
	return {
		type: ADD_ITEM_TO_CART,
		payload: { id, heading, price }
	};
};

export const increaseItemAmount = (id, heading, price) => {
	return {
		type: INCREASE_ITEM_QUANTITY,
		payload: { id, heading, price }
	};
};

export const decreaseItemAmount = (id, heading, price) => {
	return {
		type: DECREASE_ITEM_QUANTITY,
		payload: { id, heading, price }
	};
};
