import React, { Component } from "react";

class Studies extends Component {
	render() {
		return (
			<section className="join-area pb-100">
				<div className="container">
					<div className="row h-100 justify-content-center align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="join-img">
								<img
									src={require("../../images/stoneman.png")}
									alt="img"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-md-6">
							<div className="join-content">
								<span>Case Study</span>
								<h3>Stoneman Douglas High School</h3>
								<p>
									The shooter left the building and fled
									campus <strong>six minutes</strong> after
									the shooting began. Police had no idea where
									the shooter was or where the gunshots were
									coming from. He was not found until{" "}
									<strong>1 hour and 20 minutes</strong> after
									the shooting had occurred,{" "}
									<strong>2 miles away</strong> from campus.
								</p>
							</div>
						</div>
					</div>
					<div className="row h-100 justify-content-center align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="join-content">
								<span>Case Study</span>
								<h3>London Bridge Terror Attacks</h3>
								<p>
									Vehicle attack followed by stabbings. 8
									people were killed, 48 injured. Police
									notified <strong>3 minutes</strong> after
									attack started via phone call. Police
									responded <strong>8 minutes</strong> after
									call was placed.
								</p>
							</div>
						</div>

						<div className="col-lg-6 col-md-6">
							<div className="join-img">
								<img
									src={require("../../images/london.png")}
									alt="img"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Studies;
