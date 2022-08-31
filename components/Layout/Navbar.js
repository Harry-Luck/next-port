import React, { Component } from "react";
import { withRouter } from "next/router";

import Link from "../../utils/ActiveLink";

class Navbar extends Component {
	_isMounted = false;

	state = {
		collapsed: true
	};

	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	componentDidMount() {
		this._isMounted = true;
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
		window.scrollTo(0, 0);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		let layOutCls = "";
		let logo = require("../../images/logo.png");

		const { collapsed } = this.state;
		const classOne = collapsed
			? "collapse navbar-collapse"
			: "collapse navbar-collapse show";
		const classTwo = collapsed
			? "navbar-toggler navbar-toggler-right collapsed"
			: "navbar-toggler navbar-toggler-right";

		return (
			<React.Fragment>
				<header id="header">
					<div id="navbar" className={`crake-nav ${layOutCls}`}>
						<div className="container">
							<nav className="navbar navbar-expand-lg navbar-light">
								<Link href="/">
									<a className="navbar-brand">
										{/* <img src={logo} alt="logo" /> */}
									</a>
								</Link>

								<button
									onClick={this.toggleNavbar}
									className={classTwo}
									type="button"
									data-toggle="collapse"
									data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon"></span>
								</button>

								<div
									className={classOne}
									id="navbarSupportedContent"
								>
									<ul className="navbar-nav nav ml-auto">
										<li className="nav-item">
											<Link
												activeClassName="active"
												href="#home"
											>
												<a className="nav-link">Home</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link
												activeClassName="active"
												href="#mission"
											>
												<a className="nav-link">
													About
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link
												activeClassName="active"
												href="#intention"
											>
												<a className="nav-link">
													Services
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link
												activeClassName="active"
												href="#solution"
											>
												<a className="nav-link">
													Products
												</a>
											</Link>
										</li>
										
										{/* <li className="nav-item">
											<Link
												activeClassName="active"
												href="#team"
											>
												<a className="nav-link">
													CONTACT
												</a>
											</Link>
										</li>
										<li className="nav-item">
											<Link
												activeClassName="active"
												href="#news"
											>
												<a className="nav-link">
													Latest
												</a>
											</Link>
										</li> */}
										<li className="nav-item">
											<Link
												activeClassName="active"
												href="#contact"
											>
												<a className="nav-link">
													Contact
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}

export default withRouter(Navbar);
