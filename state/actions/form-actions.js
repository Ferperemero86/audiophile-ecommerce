import { formActions } from "../actions";
const { VALIDATE_FORM_FIELD, VALIDATE_FORM } = formActions;

export const validateFormField = (kind, value) => {
	return {
		type: VALIDATE_FORM_FIELD,
		payload: { kind, value }
	};
};

export const validateForm = () => {
	return {
		type: VALIDATE_FORM
	};
};
