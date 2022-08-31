import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Banner from "../components/Contents/Banner";
//  import Partners from "../components/Contents/Partners";
import Solution from "../components/Contents/Solution";
import Intention from "../components/Contents/Intention";
import Mission from "../components/Contents/Mission";
// import Studies from "../components/Contents/Studies";
// import Team from "../components/Contents/Team";
// import News from "../components/Contents/News";
import Contact from "../components/Contents/Contact";
import Subscribe from "../components/Contents/Subscribe";

import 'bootstrap/dist/css/bootstrap.min.css';

class Contents extends Component {
	render() {
		return (
			<React.Fragment>
				<Layout>
					<Navbar />
					<section name="home">
						<Banner />
					</section>
					<section name="mission">
						<Mission />
					</section>
					<section name="intention">
						<Intention />
					</section>
					<section name="solution">
						<Solution />
					</section>
				   {/* <section name="studies">
						<Studies />
					</section>
					<section name="team">
						<Team />
					</section>
					<section name="partners">
						<Partners />
					</section>
					<section name="news">
						<News />
					</section>  */}
					<section name="contact">
						<Contact />
					</section>
					<section name="subscribe">
						<Subscribe />
					</section>
					<Footer />
				</Layout>
			</React.Fragment>
		);
	}
}

export default Contents;
