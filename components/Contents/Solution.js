import React, { Component } from "react";
import Link from "next/link";
class Solution extends Component {
	render() {
		return (
			<section className="features-area startup-features ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>My Projects</h2>
						<div className="bar"></div>
					</div>
					<div className="row text-center align-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/1.png")}
									alt="image"
								/>
								<p>
								Africticket
								</p>
								<p>Next+React</p>
								<Link href="https://www.afritickets.com/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/2.png")}
									alt="image"
								/>
								<p>
									MeinJob
								</p>
								<p>Angular</p>
								<Link href="https://meinjob.ro/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="single-features-box">
								<img
									src={require("../../images/3.png")}
									alt="image"
								/>
								<p>
								HOW TO SAVE ~80% FROM YOUR ENERGY BILLS
								</p>
								<p>WordPress</p>
								<Link href="https://australiasolarconnect.com/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>
					</div>
					<div className="row text-center align-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/4.png")}
									alt="image"
								/>
								<p>
									Capture your mements
								</p>
								<p>WordPress</p>
								<Link href="https://shootmyjourney.com/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/5.png")}
									alt="image"
								/>
								<p>
								WELCOME TO EUROTECH CABINETRY
								</p>
								<p>Next+React</p>
								<Link href="https://www.eurotechcabinetry.com/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="single-features-box">
								<img
									src={require("../../images/6.png")}
									alt="image"
								/>
								<p>
									Driving School
								</p>
								<p>WordPress</p>
								<Link href="http://rsm-drivingschool.co.uk/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>
					</div>
					<div className="row text-center align-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/7.png")}
									alt="image"
								/>
								<p>
									Best help in cleaning the home
								</p>
								<p>Shopify</p>
								<Link href="https://livewp.site/wp/md/clengo/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/8.png")}
									alt="image"
								/>
								<p>
								Welcome to the real Dino Hunting Shooting
								</p>
								<p>Flutter</p>
								<Link href="https://play.google.com/store/apps/details?id=com.ps.animalhunter.jungle.snipershooting">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="single-features-box">
								<img
									src={require("../../images/9.png")}
									alt="image"
								/>
								<p>
									Stock price prediction
								</p>
								<p>Reinforcement Learning</p>
							</div>
						</div>
					</div>
				</div>

				
			</section>
		);
	}
}

export default Solution;
