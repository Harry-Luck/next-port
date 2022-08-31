import React, { Component } from "react";
import SubscribeForm from "../Forms/SubscribeForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
	"https://tech.us19.list-manage.com/subscribe/post?u=812ef3b47813f00a5f8d355f3&amp;id=d0310ab371";

class Subscribe extends Component {
	render() {
		return (
			<section className="subscribe-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Join The Herd</h2>
						<div className="bar"></div>
						<p>
							Sign up to receive news and updates. Don't worry, we
							value your privacy.
						</p>
					</div>
				</div>

				<div className="container">
					<MailchimpSubscribe
						url={url}
						render={({ subscribe, status, message }) => (
							<SubscribeForm
								status={status}
								message={message}
								onValidated={formData => subscribe(formData)}
							/>
						)}
					/>
				</div>
			</section>
		);
	}
}

export default Subscribe;
