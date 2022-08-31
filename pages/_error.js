import React, { Component } from "react";

import Link from "next/link";
import Particles from "react-particles-js";

class Error extends Component {
	static getInitialProps({ res, err }) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		return (
			<React.Fragment>
				<section className="error-area ptb-100">
					<div className="container">
						<Particles
							params={{
								particles: {
									number: {
										value: 25
									},
									size: {
										value: 3
									}
								},
								interactivity: {
									events: {
										onhover: {
											enable: true,
											mode: "repulse"
										},
										onclick: {
											enable: true,
											mode: "push"
										}
									}
								}
							}}
							style={{
								width: "100%",
								backgroundColor: "#3e0f5e",
								position: "absolute",
								top: "0",
								left: "0"
							}}
						/>
						<div className="container">
							<div className="notfound">
								<div className="notfound-404"></div>
								<h2>{this.props.statusCode}</h2>
								<span>
									Oh no! The page you are looking for cannot
									be found.
								</span>
								<p>
									Sorry, but the page you are looking for does
									not exist or is temporarily unavailable. We
									apologize for the inconvenience.
								</p>
								<Link href="/">
									<a className="btn btn-primary">
										Back To Homepage
									</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Error;
