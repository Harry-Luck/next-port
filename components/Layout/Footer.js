import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
	render() {
		return (
			<footer className="footer-area pb-0">
				<div className="copyright-area">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6">
								<ul>
									<li>
										<Link href="/" aria-label="Home">
											<a
												className="logo"
												aria-label="Home"
											>
												<img
													src={require("../../images/logo2.png")}
													alt="logo2"
												/>
											</a>
										</Link>
									</li>
									<li>
										<Link
											href="https://twitter.com/TemboAi"
											aria-label="Tembo twitter"
										>
											<a aria-label="Tembo twitter">
												<i className="icofont-twitter"></i>
											</a>
										</Link>
									</li>
									<li>
										<Link
											href="https://www.instagram.com/temboai/"
											aria-label="Tembo instagram"
										>
											<a aria-label="Tembo instagram">
												<i className="icofont-instagram"></i>
											</a>
										</Link>
									</li>
									<li>
										<Link
											href="https://www.linkedin.com/company/tembo-ai/"
											aria-label="Tembo linkedin"
										>
											<a aria-label="Tembo linkedin">
												<i className="icofont-linkedin"></i>
											</a>
										</Link>
									</li>
								</ul>
							</div>

							<div className="col-lg-6 col-md-6 text-lg-right">
								<p>
									Copyright &copy; {new Date().getFullYear()}{" "}
								  All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
