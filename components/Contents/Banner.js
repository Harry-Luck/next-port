import React, { Component } from "react";

import Link from "next/link";
import Particles from "react-particles-js";
import VisibilitySensor from "react-visibility-sensor";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const options = {
	items: 1,
	loop: true,
	autoplay: true,
	nav: true,
	responsiveClass: true,
	dots: false,
	autoplayHoverPause: true,
	mouseDrag: true,
	navText: [
		"<i class='icofont-bubble-left'></i>",
		"<i class='icofont-bubble-right'></i>"
	]
};

class Banner extends Component {
	state = {
		isOpen: false,
		display: false
	};

	openModal = () => {
		this.setState({ isOpen: true });
	};

	componentDidMount() {
		this.setState({ display: true });
		new WOW.WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 20,
			mobile: true,
			live: true
		}).init();
	}

	render() {
		return (
			<React.Fragment>
				{this.state.display ? (
					<div className="main-banner">
						<Particles
							params={{
								particles: {
									number: {
										value: 50,
										density: {
											enable: true
										}
									},
									size: {
										value: 3
									}
								},
								interactivity: {
									events: {
										onhover: {
											enable: true,
											mode: "grab"
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
						<div className="d-table">
							<div className="d-table-cell">
								<div className="container">
									<div className="row">
										<VisibilitySensor>
											{({ isVisible }) => (
												<React.Fragment>
													<div className="col-lg-6 col-md-12">
														<div className="hero-content">
															<h1
																className={
																	isVisible
																		? "animated fadeInUp"
																		: ""
																}
															>
																Full Stack Developer
															</h1>
															<p
																className={
																	isVisible
																		? "animated zoomIn"
																		: ""
																}
															>
																Let's Work
															</p>
															<p
																className={
																	isVisible
																		? "animated zoomIn"
																		: ""
																}
															>
																WEB DEVELOMENT | MACHINE LEARNING | MOBILE
															</p>

															{/* <Link href="#">
																<a
																	onClick={e => {
																		e.preventDefault();
																		this.openModal();
																	}}
																	className={`
                                                                    btn btn-primary popup-youtube ${
																		isVisible
																			? "animated zoomIn"
																			: ""
																	}
                                                                `}
																>
																	Watch Video{" "}
																	<i className="icofont-play-alt-3"></i>
																</a>
															</Link> */}
															<Link href="#contact">
																<a
																	className={`
																	btn btn-primary
                                                                    video-btn ${
																		isVisible
																			? "animated zoomIn"
																			: ""
																	}
                                                                `}
																>
																	Contact Us
																</a>
															</Link>
														</div>
													</div>

													<div className="col-lg-6 col-md-12">
														<div className="product-image">
															<img
																src={require("../../images/temboMac.png")}
																alt="tembo"
															/>
														</div>
													</div>
												</React.Fragment>
											)}
										</VisibilitySensor>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					""
				)}
				<ModalVideo
					channel="youtube"
					isOpen={this.state.isOpen}
					videoId="1dq5sJZoWZA"
					onClose={() => this.setState({ isOpen: false })}
				/>
			</React.Fragment>
		);
	}
}

export default Banner;
