import React, { Component } from "react";

import Form from "../Forms/ContactForm";
import Map from "../Map/Map";

class Contact extends Component {
	render() {
		return (
			<section className="contact-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Contact Us</h2>
						<div className="bar"></div>
					</div>

					<div className="row h-100 justify-content-center align-items-center">
						{/* <div className="col-lg-6 col-md-12 office">
							<h3>Our Office</h3>
							<p>Innovation Park at Notre Dame</p>
							<p>1400 E Angela Boulevard</p>
							<p>South Bend, IN 46617</p>
							<p>United States</p>
							<div className="col-lg-11 col-md-12">
								<Map />
							</div>
						</div> */}

						<div className="col-lg-6 col-md-12">
							<Form />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
