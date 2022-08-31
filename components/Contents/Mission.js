import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

class Mission extends Component {
	state = { display: false };

	componentDidMount() {
		this.setState({ display: true });
	}
	render() {
		return (
			<section className="feedback-area pt-100 pb-50">
				<div className="container">
					<div className="section-title">
						<h2>ABOUT ME</h2>
						<div className="bar"></div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="single-feedback-box">
								<div className="client-info">
									{/* <img
										src={require("../../images/anandShah.png")}
										alt="client"
									/> */}
									<h3>Harry Anton</h3>
									<span>Full Stack developer</span>
								</div>
								<p>
								While most are dreaming success, winner wake up and work hard to achieve it!

Full Stack Developer with experience developing tested web solutions and also a Mobile & Desktop expert, highly focused on code quality, performance, scalability and extensibility. Supportive and enthusiastic team player and continuous learner with a passion for latest technology.
And I am also Software engineer and Artificial Intelligence engineer.
My goal is 
- Nothing is impossible for me.
- My goal is to satisfy client due to finish their task
									</p>
							</div>
						</div>

						<h3 className="text-center text-warning mb-5 mt-5">Web and Mobile</h3>
						<Row>
							<Col md={6}>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">HTML</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years"  now={90} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">CSS</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years"  now={90} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Tailwind</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="8 years"  now={80} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">React</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="9 years"  now={85} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Angular</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="7 years"  now={75} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Vue</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="7 years"  now={75} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Matiral UI</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="5 years"  now={50} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Android</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="5 years"  now={50} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Unity</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="4 years"  now={40} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">React Native</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="6 years"  now={60} />
									</Col>
								</Row>
								
							</Col>
							<Col md={6}>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Laravel</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years" now={90} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">MERN</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="8 years" now={75} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">C#</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="6 years" now={60} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">WordPress</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="6 years"  now={60} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Shopify</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="5 years"  now={50} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Magento</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="4 years"  now={40} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">MongoDB</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="8 years"  now={75} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">MySQL</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years"  now={90} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">GrapQL</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="6 years"  now={60} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-warning">PHP</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years"  now={90} />
									</Col>
								</Row>
							</Col>
						</Row>
						<h3 className="text-center text-warning mb-5 mt-5">Machine Learning</h3>
						<Row>
							<Col md={6}>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Tensorflow</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years"  now={90} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Keras</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years"  now={90} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Deep learning</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="8 years"  now={80} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">RL</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="9 years"  now={85} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">NLP</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="7 years"  now={75} />
									</Col>
								</Row>
								
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Data analyse</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="5 years"  now={50} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Computer vision</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="7 years"  now={75} />
									</Col>
								</Row>
							</Col>
							<Col md={6}>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Python</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="10 years" now={90} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">R</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="8 years" now={75} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Matlab</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="6 years" now={60} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Numpy</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="6 years"  now={60} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Pandas</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="5 years"  now={50} />
									</Col>
								</Row>
								<Row>
									<Col md ={4}>
										<h5 className="text-center text-info">Weka</h5>
									</Col>
									<Col>
										<ProgressBar variant="success" animated label="4 years"  now={40} />
									</Col>
								</Row>
								
							</Col>
						</Row>
					</div>
				</div>
			</section>
		);
	}
}

export default Mission;
