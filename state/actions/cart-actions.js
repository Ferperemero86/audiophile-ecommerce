import { actions } from "../actions";

const {
	SHOW_CART,
	ADD_ITEM_TO_CART,
	INCREASE_ITEM_QUANTITY,
	DECREASE_ITEM_QUANTITY,
	REMOVE_ALL_CART_PRODUCTS
} = actions;

export const addItemToCart = (id, image, heading, price) => {
	return {
		type: ADD_ITEM_TO_CART,
		payload: { id, image, heading, price }
	};
};

export const increaseItemAmount = (id, image, heading, price) => {
	return {
		type: INCREASE_ITEM_QUANTITY,
		payload: { id, image, heading, price }
	};
};

export const decreaseItemAmount = (id, image, heading, price) => {
	return {
		type: DECREASE_ITEM_QUANTITY,
		payload: { id, image, heading, price }
	};
};

export const removeAllCartProducts = (products) => {
	return {
		type: REMOVE_ALL_CART_PRODUCTS,
		payload: { products }
	};
};

export const showCart = () => {
	return {
		type: SHOW_CART
	};
};
