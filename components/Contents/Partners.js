import React from "react";
import Link from "next/link";

class Partners extends React.Component {
	state = { display: false };

	componentDidMount() {
		this.setState({ display: true });
	}

	render() {
		return (
			<div className="partner-area startup-partner">
				<div className="container">
					<div className="section-title">
						<h2>Our Partners</h2>
						<div className="bar"></div>
					</div>
					<div className="row">
						<div className="col-lg-3">
							<div className="item">
								<Link href="https://www.farshore.com/">
									<a>
										<img
											src={require("../../images/farshore.png")}
											alt="partner"
										/>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="item">
								<Link href="https://ideacenter.nd.edu/">
									<a>
										<img
											src={require("../../images/ideacenter.png")}
											alt="partner"
										/>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="item">
								<Link href="http://www.harborlinknetwork.com/">
									<a>
										<img
											src={require("../../images/harborlink.png")}
											alt="partner"
										/>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="item">
								<Link href="https://thegarage.northwestern.edu/">
									<a>
										<img
											src={require("../../images/garage.png")}
											alt="partner"
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Partners;
