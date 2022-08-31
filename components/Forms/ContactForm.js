import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null }
	});

	const [inputs, setInputs] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: ""
	});

	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg }
			});
			setInputs({
				firstName: "",
				lastName: "",
				email: "",
				subject: "",
				message: ""
			});
		} else {
			setStatus({
				info: { error: true, msg: msg }
			});
		}
	};

	const handleOnChange = e => {
		e.persist();
		setInputs(prev => ({
			...prev,
			[e.target.id]: e.target.value
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null }
		});
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
		axios({
			method: "POST",
			url: "",
			data: inputs
		})
			.then(response => {
				handleServerResponse(
					true,
					"Thank you, your message has been submitted."
				);
				setTimeout(() => {
					setStatus(prevStatus => ({
						...prevStatus,
						submitted: false
					}));
				}, 3500);
			})
			.catch(error => {
				handleServerResponse(false, error.response.data.error);
			});
	};

	return (
		<main>
			<form id="contactForm" onSubmit={handleOnSubmit}>
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<p style={{ marginBottom: "15px" }}>
							Fill out the form below or e-mail us at{" "}
							<a href="hurryluck505@gmail.com">hurryluck505@gmail.com</a>
						</p>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="form-group">
							<input
								id="firstName"
								type="text"
								name="firstName"
								onChange={handleOnChange}
								required
								value={inputs.firstName}
								className="form-control"
								data-error="Please enter your name"
								placeholder="First Name"
							/>
							<div className="help-block with-errors"></div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="form-group">
							<input
								id="lastName"
								type="text"
								name="lastName"
								onChange={handleOnChange}
								required
								value={inputs.lastName}
								className="form-control"
								data-error="Please enter your name"
								placeholder="Last Name"
							/>
							<div className="help-block with-errors"></div>
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<div className="form-group">
							<input
								id="email"
								type="email"
								name="_replyto"
								onChange={handleOnChange}
								required
								value={inputs.email}
								className="form-control"
								data-error="Please enter your email"
								placeholder="Email"
							/>
							<div className="help-block with-errors"></div>
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<div className="form-group">
							<input
								id="subject"
								type="text"
								name="subject"
								onChange={handleOnChange}
								required
								value={inputs.subject}
								className="form-control"
								data-error="Please enter a subject"
								placeholder="Subject"
							/>
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<div className="form-group">
							<textarea
								id="message"
								type="text"
								name="message"
								onChange={handleOnChange}
								required
								value={inputs.message}
								className="form-control"
								cols="30"
								rows="5"
								data-error="Please write your message"
								placeholder="Message"
							/>
							<div className="help-block with-errors"></div>
						</div>
					</div>

					<div className="col-lg-12 col-md-12">
						<button
							type="submit"
							disabled={status.submitting}
							className="btn btn-primary"
						>
							{!status.submitting
								? !status.submitted
									? "Submit"
									: "Submitted"
								: "Submitting..."}
						</button>
						{status.info.error && status.submitted && (
							<>
								<div
									id="msgSubmit"
									className="mt-50 text-center hidden alert alert-danger"
									role="alert"
								>
									<h4 class="alert-heading">Error!</h4>
									<p>
										Your message has not been sent. Please
										try again.
									</p>
								</div>
								<div className="clearfix"></div>
							</>
						)}
						{!status.info.error &&
							status.info.msg &&
							status.submitted && (
								<>
									<div
										id="msgSubmit"
										className="mt-50 text-center hidden alert alert-success"
										role="alert"
									>
										<h4 class="alert-heading">Success!</h4>
										<p>
											We have received your message. Thank
											you.
										</p>
									</div>
									<div className="clearfix"></div>
								</>
							)}
					</div>
				</div>
			</form>
		</main>
	);
};

export default ContactForm;
