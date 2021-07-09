import { formActions } from "../actions";

import { validateFormField } from "../../helpers/form-helpers";
const { VALIDATE_FORM_FIELD } = formActions;

const checkoutInitialState = {
	validation: {
		name: { passed: false, error: false },
		email: { passed: false, error: false },
		phone: { passed: false, error: false },
		address: { passed: false, error: false },
		postCode: { passed: false, error: false },
		city: { passed: false, error: false },
		country: { passed: false, error: false },
		paymentMethod: { passed: false, error: false },
		moneyNumber: { passed: false, error: false },
		moneyPin: { passed: false, error: false }
	}
};

export const checkoutForm = (state = checkoutInitialState, action) => {
	console.log("inreducer", action, state);
	switch (action.type) {
		case VALIDATE_FORM_FIELD:
			return validateFormField(state, action);
		default:
			return state;
	}
};
