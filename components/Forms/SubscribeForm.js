import React from "react";

const SubscribeForm = ({ status, message, onValidated }) => {
	let email;
	const submit = () =>
		email &&
		email.value.indexOf("@") > -1 &&
		onValidated({
			EMAIL: email.value
		});

	return (
		<form className="newsletter-form" data-toggle="validator">
			<input
				ref={node => (email = node)}
				id="subscribe"
				type="email"
				className="form-control"
				placeholder="Your Email Address"
				name="EMAIL"
				required={true}
				autoComplete="off"
			/>
			<button className="btn btn-primary" type="submit" onClick={submit}>
				Subscribe
			</button>
			<div id="validator-newsletter" className="form-result"></div>
		</form>
	);
};

export default SubscribeForm;
