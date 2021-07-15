import { formActions } from "../actions";

import { validateFormField, validateForm } from "../../helpers/form-helpers";
const { VALIDATE_FORM_FIELD, VALIDATE_FORM, RESET_FORM } = formActions;

const checkoutInitialState = {
	formValid: false,
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
	},
	confirmation: {
		display: false
	}
};

export const checkoutForm = (state = checkoutInitialState, action) => {
	switch (action.type) {
		case VALIDATE_FORM_FIELD:
			return validateFormField(state, action);
		case VALIDATE_FORM:
			return validateForm(state);
		case RESET_FORM:
			return {
				...state,
				formValid: false,
				validation: checkoutInitialState.validation
			};
		default:
			return state;
	}
};
