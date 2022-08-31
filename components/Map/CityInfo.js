import React, { PureComponent } from "react";

class CityInfo extends PureComponent {
	render() {
		const { info } = this.props;
		const displayName = `${info.city}, ${info.state}`;

		return (
			<div>
				<div>
					<a
						target="_new"
						rel="noopener noreferrer"
						href={`https://ideacenter.nd.edu/`}
					>
						IDEA Center
					</a>
					, {displayName}
				</div>
				<a
					target="_new"
					rel="noopener noreferrer"
					href={`https://goo.gl/maps/FDXqmxQgBicH3zZ66`}
				>
					<img width={240} src={info.image} />
				</a>
			</div>
		);
	}
}

export default CityInfo;
