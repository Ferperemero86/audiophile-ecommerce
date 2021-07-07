const RegExp = {
	name: /^[A-z]{3,15}$/,
	email:
		/^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
	phone: /^((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}$/,
	postCode:
		/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/,
	address: /^\d+\s[A-z]+$/,
	city: /^[A-z]+$/
};

const { name, email, phone, address, postCode, city } = RegExp;

export const validateFormField = (kind, value) => {
	// console.log(kind, value);
	switch (kind) {
		case "name":
			return name.test(value);
		case "email":
			return email.test(value);
		case "phone":
			return phone.test(value);
		case "address":
			return address.test(value);
		case "postcode":
			return postCode.test(value);
		case "city":
			console.log("city", city.test(value));
			return city.test(value);
		default:
			return false;
	}
};
