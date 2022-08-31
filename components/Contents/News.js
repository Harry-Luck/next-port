import React from "react";
import Link from "next/link";

class News extends React.Component {
	state = { display: false };

	componentDidMount() {
		this.setState({ display: true });
	}

	render() {
		return (
			<section className="blog-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Our Latest News</h2>
						<div className="bar"></div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-blog-post">
								<Link href="#">
									<a className="post-image">
										<img
											src={require("../../images/notredame.png")}
											alt="blog-image"
										/>
									</a>
								</Link>

								<div className="blog-post-content">
									<ul>
										<li>
											<i className="icofont-wall-clock"></i>{" "}
											April 24, 2019
										</li>
									</ul>
									<h3>
										<Link href="https://southbendelkhart.org/news/tembo-ai-receives-minority-owned-startup-award/">
											<a>
												Tembo AI received minority owned
												startup award
											</a>
										</Link>
									</h3>
									<p>
										Tembo AI, a computer software company
										founded by two University of Notre Dame
										ESTEEM students, received the Minority
										Owned Startup Award for best minority
										owned venture during the 2019 McCloskey
										New Venture Competition.
									</p>
									<Link href="https://southbendelkhart.org/news/tembo-ai-receives-minority-owned-startup-award/">
										<a className="read-more-btn">
											Read More{" "}
											<i className="icofont-rounded-double-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default News;
