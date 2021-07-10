import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { validateFormField } from "../../../state/actions/form-actions";
import { displayFieldValidationErrors } from "../../../helpers/form-helpers";

const Input = ({ type, placeholder, onChange, stylesClass }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			className={`${stylesClass} section-field-input`}
		/>
	);
};

const Radio = ({ options, kind, onChange }) => {
	return options.map((option, idx) => {
		const { label, value } = option;

		return (
			<div className="section-field-option" key={idx}>
				<label className="option-label">{label}</label>
				<input
					type="radio"
					className="input-radio"
					onChange={onChange}
					name={kind}
					value={value}
				/>
			</div>
		);
	});
};

const Field = ({ field }) => {
	const { title, type, kind, placeholder, html, options } = field;
	const dispatch = useDispatch();
	const state = useSelector((state) => state.checkoutForm);
	const { validation } = state;
	const error = displayFieldValidationErrors(validation, kind);

	const validateField = (e) => {
		const value = e.target.value;
		dispatch(validateFormField(kind, value));
	};

	return (
		<div className="section-field">
			<p className="section-field-title">{title}</p>
			{html === "input" && (
				<Input
					type={type}
					placeholder={placeholder}
					onChange={validateField}
					stylesClass="input"
				/>
			)}
			{html === "radio" && (
				<Radio
					options={options}
					kind={kind}
					stylesClass="input-radio"
					onChange={validateField}
				/>
			)}
			{error && (
				<p className="section-field-error-message">
					Please enter a valid {kind}
				</p>
			)}
		</div>
	);
};

const FormSectionFields = ({ section }) => {
	const { fields } = section;

	return fields.map((field, idx) => {
		return <Field field={field} key={idx} />;
	});
};

const FormSections = ({ content }) => {
	return content.map((section, idx) => {
		const { title } = section;

		return (
			<div className="form-section" key={idx}>
				<h3 className="form-section-heading">{title}</h3>
				<div className="form-section-fields">
					<FormSectionFields section={section} />
				</div>
			</div>
		);
	});
};

const Form = ({ content, stylesClass }) => {
	return (
		<div className={`form ${stylesClass}`}>
			<FormSections content={content} />
		</div>
	);
};

export default Form;
