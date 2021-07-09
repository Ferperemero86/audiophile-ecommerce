const RegExp = {
	name: /^[A-z]{3,15}$/,
	email:
		/^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
	phone: /^((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}$/,
	postCode:
		/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/,
	address: /^\d+\s[A-z]+$/,
	city: /^[A-z]+$/,
	country: /^[A-z]{3}$/,
	eMoney: /^\d{9}$/,
	eMoneyPin: /^\d{4}$/
};

const {
	name,
	email,
	phone,
	address,
	postCode,
	city,
	eMoney,
	country,
	eMoneyPin
} = RegExp;

export const validateFormField = (state, action) => {
	const { kind, value } = action.payload;
	let error;
	let passed;

	const checkRegExp = (kind) => {
		if (kind === "payment-method" && value) {
			error = false;
			passed = true;
		} else if (kind === "payment-method" && !value) {
			error = true;
			passed = false;
		} else {
			if (!kind.test(value)) {
				error = true;
				passed = false;
			} else {
				error = false;
				passed = true;
			}
		}
	};

	switch (kind) {
		case "name":
			checkRegExp(name);
			return {
				...state,
				validation: { ...state.validation, name: { error, passed } }
			};
		case "email":
			checkRegExp(email);
			return {
				...state,
				validation: { ...state.validation, email: { error, passed } }
			};
		case "phone":
			checkRegExp(phone);
			return {
				...state,
				validation: { ...state.validation, phone: { error, passed } }
			};
		case "address":
			checkRegExp(address);
			return {
				...state,
				validation: { ...state.validation, address: { error, passed } }
			};
		case "postcode":
			checkRegExp(postCode);
			return {
				...state,
				validation: { ...state.validation, postCode: { error, passed } }
			};
		case "city":
			checkRegExp(city);
			return {
				...state,
				validation: { ...state.validation, city: { error, passed } }
			};
		case "country":
			checkRegExp(country);
			return {
				...state,
				validation: { ...state.validation, country: { error, passed } }
			};
		case "payment-method":
			checkRegExp("payment-method", value);
			return {
				...state,
				validation: { ...state.validation, paymentMethod: { error, passed } }
			};
		case "e-money-number":
			checkRegExp(eMoney, value);
			return {
				...state,
				validation: { ...state.validation, moneyNumber: { error, passed } }
			};
		case "e-money-pin":
			checkRegExp(eMoneyPin, value);
			return {
				...state,
				validation: { ...state.validation, moneyPin: { error, passed } }
			};
		default:
			return state;
	}
};

export const displayFieldValidationErrors = (validation, kind) => {
	const {
		name,
		email,
		phone,
		address,
		postCode,
		city,
		country,
		moneyNumber,
		moneyPin
	} = validation;

	switch (kind) {
		case "name":
			return name.error;
		case "email":
			return email.error;
		case "phone":
			return phone.error;
		case "address":
			return address.error;
		case "postcode":
			return postCode.error;
		case "city":
			return city.error;
		case "country":
			return country.error;
		case "e-money-number":
			return moneyNumber.error;
		case "e-money-pin":
			return moneyPin.error;
		default:
			return false;
	}
};
