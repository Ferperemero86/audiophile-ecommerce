import { formActions } from "../actions";
const { VALIDATE_FORM_FIELD } = formActions;

export const validateFormField = (kind, value) => {
	console.log(kind, value);
	return {
		type: VALIDATE_FORM_FIELD,
		payload: { kind, value }
	};
};
