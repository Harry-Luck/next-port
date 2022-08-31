import React, { Component } from "react";
import Link from "next/link";

class Team extends Component {
	render() {
		return (
			<section className="team-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Our Team</h2>
						<div className="bar"></div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/anandShah.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Anand Shah</h3>
									<div>
										<span>President & Founder</span>
									</div>
									<p>
										BS in Physics (Notre Dame ‘18), MS in
										Tech Entrepreneurship (Notre Dame ‘19),
										MS in Materials Science (Northwestern
										‘21).
									</p>
									<ul>
										<li>
											<Link
												href="https://www.linkedin.com/in/anandkiranshah/"
												aria-label="Anand linkedin"
											>
												<a aria-label="Anand linkedin">
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/danKervick.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Dan Kervick</h3>
									<div>
										<span>CFO & Co-Founder</span>
									</div>
									<p>
										BA in Economics (Villanova ‘09), MS in
										Tech Entrepreneurship (Notre Dame' ‘19),
										ex-Navy Lieutenant, CEO of Flagship
										Management.
									</p>
									<ul>
										<li>
											<Link
												href="https://www.linkedin.com/in/dkervick/"
												aria-label="Dan linkedin"
											>
												<a aria-label="Dan linkedin">
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/*<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/jackHill.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Jack Hill</h3>
									<div>
										<span>Software Engineer</span>
									</div>
									<p>
										BS in Computer Science (Notre Dame ‘20),
										incoming Amazon Robotics SDE, employed
										as full stack software engineer.
									</p>
									<ul>
										<li>
											<Link href="https://www.linkedin.com/in/jack-hill-2020/">
												<a>
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
										</div>*/}

						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/jioBuenviaje.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Jio Buenviaje</h3>
									<div>
										<span>Technical Advisor</span>
									</div>
									<p>
										BS in Computer Science (Notre Dame ‘22),
										CTO of DeLive Drones, previously
										employed as fullstack web & mobile
										engineer.
									</p>
									<ul>
										<li>
											<Link
												href="https://jbuenviaje.com/"
												aria-label="Jio website"
											>
												<a aria-label="Jio website">
													<i className="icofont-web"></i>
												</a>
											</Link>
										</li>
										<li>
											<Link
												href="https://www.linkedin.com/in/saejhi/"
												aria-label="Jio linkedin"
											>
												<a aria-label="Jio linkedin">
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
										<li>
											<Link
												href="https://github.com/saejhi"
												aria-label="Jio github"
											>
												<a aria-label="Jio github">
													<i className="icofont-github"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/*<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/patrickFlynn.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Dr. Patrick Flynn</h3>
									<div>
										<span>Mentor & Advisor</span>
									</div>
									<p>
										Dr. Flynn is the chair of Notre Dame’s
										Computer Science & Engineering
										Department. He has expertise in computer
										vision, biometrics, and pattern
										recognition.
									</p>
									<ul>
										<li>
											<Link href="https://www.linkedin.com/in/patrickflynn2/">
												<a>
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/richardWilding.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Richard Wilding</h3>
									<div>
										<span>Mentor & Advisor</span>
									</div>
									<p>
										Richard was previously the Director of
										New Ventures at BAE Systems Applied
										Intelligence, and is currently a member
										of the advisory board at Cyber London
										Accelerator.
									</p>
									<ul>
										<li>
											<Link href="https://www.linkedin.com/in/richard-wilding-6431491/">
												<a>
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/ianTaylor.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Dr. Ian Taylor</h3>
									<div>
										<span>Mentor & Advisor</span>
									</div>
									<p>
										Dr. Taylor is the CTO of blockchain
										startup SIMBA Chain, and a research
										professor at the University of Notre
										Dame’s Center for Research Computing.
									</p>
									<ul>
										<li>
											<Link href="https://www.linkedin.com/in/ianjamestaylor/">
												<a>
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-4 col-sm-6">
							<div className="single-team-member">
								<img
									src={require("../../images/peterFlood.png")}
									alt="team"
								/>

								<div className="team-content">
									<h3>Peter Flood</h3>
									<div>
										<span>Mentor & Advisor</span>
									</div>
									<p>
										Peter is the CEO at AIDA Content
										Management, and has previously served as
										executive PMO (IntelligentHome) for Time
										Warner Cable.
									</p>
									<ul>
										<li>
											<Link href="https://www.linkedin.com/in/peter-flood-a6a285/">
												<a>
													<i className="icofont-linkedin"></i>
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
									</div>*/}
					</div>
				</div>
			</section>
		);
	}
}

export default Team;
