export const addItemToCart = (state, action) => {
	const { items } = state;
	const { id } = action.payload;
	const itemInCart = items.find((item) => item.id === id);

	if (!itemInCart) {
		return {
			...state,
			items: [...state.items, { ...action.payload, quantity: 1 }]
		};
	}

	return state;
};

export const modifyItemQuantity = (state, action, operation) => {
	const { id } = action.payload;
	const { items } = state;
	const itemInCart = items.find((item) => item.id === id);

	if (!itemInCart && operation === "increase") {
		return {
			...state,
			items: [...state.items, { ...action.payload, quantity: 1 }]
		};
	}

	if (state.items.length > 0) {
		const items = state.items.map((el) => {
			if (el.id === id) {
				if (operation === "increase") {
					if (el.quantity === 10) {
						el.quantity = 10;
					} else {
						el.quantity = el.quantity + 1;
					}
				} else if (operation === "decrease") {
					if (el.quantity === 0) {
						el.quantity = 0;
					} else {
						el.quantity = el.quantity - 1;
					}
				}
			}

			if (el.quantity === 0) {
				return null;
			}

			return el;
		});

		const newItems = items.filter((item) => item !== null);

		return {
			...state,
			items: newItems
		};
	}

	return state;
};

export const changeCartDisplay = (state, action) => {
	return { ...state, display: action.display };
};

export const removeAllCartProducts = (state) => {
	return { ...state, items: [] };
};

export const showCart = (state) => {
	const display = !state.display;

	return { ...state, display };
};
