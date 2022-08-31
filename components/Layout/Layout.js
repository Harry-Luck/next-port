import React, { Component } from "react";

import { initGA, logPageView } from "../../utils/Analytics";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

class Layout extends Component {
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}
	render() {
		return (
			<div>
				{this.props.children}
				<ScrollUpButton ContainerClassName="back-to-top rounded text-center" />
			</div>
		);
	}
}

export default Layout;
