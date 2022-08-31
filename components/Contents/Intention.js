import React, { Component } from "react";

class Intention extends Component {
	render() {
		return (
			<section className="overview-section ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Our Services</h2>
						<div className="bar"></div>
						<h3>provide industry leading web, mobile and machine learning project design & development services.
</h3>
					</div>
					<div className="overview-box">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6 overview-img">
								<img
									src={require("../../images/a2.jpg")}
									alt="image"
									className="rounded"
								/>
							</div>

							<div className="col-lg-6 col-md-6 overview-content">
								<div className="icon">
									<i className="icofont-school-bag"></i>
								</div>
								<h3>Web Design</h3>
								<h5>
								Provides you with a customized website design that's perfect for your business or personal site
								</h5>
							</div>
						</div>
					</div>

					<div className="overview-box">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6 overview-content">
								<div className="icon">
									<i className="icofont-match-review"></i>
								</div>
								<h3>Web development</h3>
								<h5>
								help create all types of web-based software and ensure great experience for web users.
								</h5>
							</div>

							<div className="col-lg-6 col-md-6 overview-img">
								<img
									src={require("../../images/a1.png")}
									alt="image"
									className="rounded"
								/>
							</div>
						</div>
					</div>

					<div className="overview-box">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6 overview-img">
								<img
									src={require("../../images/a5.png")}
									alt="image"
									className="rounded"
								/>
							</div>

							<div className="col-lg-6 col-md-6 overview-content">
								<div className="icon">
									<i className="icofont-presentation"></i>
								</div>
								<h3>Mobile App Development</h3>
								<h5>
								aimed at building iOS & Android applications that effectively complement or substitute web solutions.
								</h5>
							</div>
						</div>
					</div>

					<div className="overview-box">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6 overview-content">
								<div className="icon">
									<i className="icofont-match-review"></i>
								</div>
								<h3>Machine Learning</h3>
								<h5>
								ML-based solutions ensure you make the most of intelligent algorithms to automate your business tasks and processes.
								</h5>
							</div>

							<div className="col-lg-6 col-md-6 overview-img">
								<img
									src={require("../../images/a6.png")}
									alt="image"
									className="rounded"
								/>
							</div>
						</div>
					</div>

					<div className="features-inner-area">
					<div className="container">
						<h3 className="text-center mb-5">WHY CHOOSE ME</h3>
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-12">
								<div className="features-inner-content">
										<div className="features-item">
											<div className="icon">
												<i className="icofont-people"></i>
											</div>
											<h3>Completed on right time</h3>
											<p>
											I have completed the client's projects on time.
											</p>
										</div>

										<div className="features-item">
											<div className="icon">
												<i className="icofont-warning"></i>
											</div>
											<h3>Work in your timezone</h3>
											<p>
												I have worked in client's time zone.
											</p>
										</div>
									</div>
								</div>
							<div className="col-lg-6 col-md-12">
								<div className="features-inner-content">
									<div className="features-item">
										<div className="icon">
											<i className="icofont-warning"></i>
										</div>
										<h3>Great Communication</h3>
										<p>
										I have the ability to communicate ideas clearly
										 and excellent communication skills with a focus on customer satisfaction.
										</p>
									</div>

									<div className="features-item">
										<div className="icon">
											<i className="icofont-location-arrow"></i>
										</div>
										<h3>Continouse Services</h3>
										<p>
											After Complepleted project, If you have any problems with your project, we are always happy to help.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</section>
		);
	}
}

export default Intention;
