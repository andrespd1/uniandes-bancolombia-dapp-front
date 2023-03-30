/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';

// reactstrap components
import {
	Badge,
	Button,
	Card,
	CardBody,
	CardImg,
	FormGroup,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
} from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import CardsFooter from 'components/Footers/CardsFooter.js';

// index page sections
import Download from '../IndexSections/Download.js';

class Landing extends React.Component {
	state = {};
	componentDidMount() {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.main.scrollTop = 0;
	}
	render() {
		return (
			<>
				<DemoNavbar />
				<main ref="main">
					<div className="position-relative" style={{ paddingBottom: '100px' }}>
						{/* shape Hero */}
						<section className="section section-lg section-shaped pb-250">
							<div className="shape shape-style-1 shape-dark">
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
							</div>
							<Container className="py-lg-md d-flex">
								<div className="col px-0">
									<Row>
										<Col lg="6">
											<h1 className="display-3 text-white">
												Self-soverign Identity dApp{' '}
												<span>Using web3.0 technologies</span>
											</h1>
											<p className="lead text-white">
												This in an app developed usign PolygonID technologies
												and Etherium blockchain. The project is being developed
												in collaboration of Uniandes & Bancolombia.
											</p>
											<div className="btn-wrapper">
												<Button
													className="btn-white btn-icon mb-3 mb-sm-0"
													color="default"
													href="/register-page"
													size="lg">
													<span className="btn-inner--icon mr-1">
														<i className="fa fa-sign-in" />
													</span>
													<span className="btn-inner--text">
														Start using dApp
													</span>
												</Button>{' '}
												<Button
													className="btn-icon mb-3 mb-sm-0"
													color="primary"
													href="https://github.com/orgs/uniandes-bancolombia-dapp-project/repositories"
													size="lg"
													target="_blank">
													<span className="btn-inner--icon mr-1">
														<i className="fa fa-github" />
													</span>
													<span className="btn-inner--text">
														<span
															style={{
																color: 'black',
																fontWeight: 'bold',
															}}>
															GitHub{' '}
														</span>
														repositories
													</span>
												</Button>
											</div>
										</Col>
									</Row>
								</div>
							</Container>
							{/* SVG separator */}
							<div className="separator separator-bottom separator-skew">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="none"
									version="1.1"
									viewBox="0 0 2560 100"
									x="0"
									y="0">
									<polygon
										className="fill-white"
										points="2560 0 2560 100 0 100"
									/>
								</svg>
							</div>
						</section>
						{/* 1st Hero Variation */}
					</div>
					<section className="section section-lg pt-lg-0 mt--200">
						<Container>
							<Row className="justify-content-center">
								<Col lg="12">
									<Row className="row-grid">
										<Col lg="4">
											<Card className="card-lift--hover shadow border-0">
												<CardBody className="py-5">
													<div className="icon icon-shape icon-shape-default rounded-circle mb-4">
														<i className="ni ni-badge" />
													</div>
													<h6 className="text-default text-uppercase">
														Register easily
													</h6>
													<p className="description mt-3">
														Register claiming your data and using new web
														technologies through Polygon ID Wallet. The data is
														just between you and us, so there is nothing to be
														worried.
													</p>
													<div>
														<Badge color="default" pill className="mr-1">
															mobile
														</Badge>
														<Badge color="default" pill className="mr-1">
															wallet
														</Badge>
														<Badge color="default" pill className="mr-1">
															web 3.0
														</Badge>
													</div>
												</CardBody>
											</Card>
										</Col>
										<Col lg="4">
											<Card className="card-lift--hover shadow border-0">
												<CardBody className="py-5">
													<div className="icon icon-shape icon-shape-success rounded-circle mb-4">
														<i className="ni ni-lock-circle-open" />
													</div>
													<h6 className="text-success text-uppercase">
														Login using a QR Code
													</h6>
													<p className="description mt-3">
														If you are alredy registered, just scanning the QR
														code generated by the dApp you would be able to
														login with your Polygon Wallet
													</p>
													<div>
														<Badge color="success" pill className="mr-1">
															easy
														</Badge>
														<Badge color="success" pill className="mr-1">
															mobile
														</Badge>
														<Badge color="success" pill className="mr-1">
															fast
														</Badge>
													</div>
												</CardBody>
											</Card>
										</Col>
										<Col lg="4">
											<Card className="card-lift--hover shadow border-0">
												<CardBody className="py-5">
													<div className="icon icon-shape icon-shape-info rounded-circle mb-4">
														<i className="ni ni-settings-gear-65" />
													</div>
													<h6 className="text-info text-uppercase">
														Prepare any use cases
													</h6>
													<p className="description mt-3">
														This app is designed for supporting any
														functionality you want to implement for your
														business, we are just providing you security!
													</p>
													<div>
														<Badge color="info" pill className="mr-1">
															open
														</Badge>
														<Badge color="info" pill className="mr-1">
															security
														</Badge>
														<Badge color="info" pill className="mr-1">
															scalable
														</Badge>
													</div>
												</CardBody>
											</Card>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</section>
					<section className="section bg-secondary">
						<Container>
							<Row className="row-grid align-items-center">
								<Col md="6">
									<Card className="bg-default shadow border-0">
										<CardImg
											alt="..."
											src={require('../../assets/img/theme/colombia-photo.jpg')}
											top
										/>
										<blockquote className="card-blockquote">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="svg-bg"
												preserveAspectRatio="none"
												viewBox="0 0 583 95">
												<polygon
													className="fill-default"
													points="0,52 583,95 0,95"
												/>
												<polygon
													className="fill-default"
													opacity=".2"
													points="0,42 583,95 683,0 0,95"
												/>
											</svg>
											<h4 className="display-3 font-weight-bold text-white">
												Project lead by:
											</h4>
											<p className="lead text-italic text-white">
												Universidad de los Andes in a research project directed
												by Bancolombia.
											</p>
										</blockquote>
									</Card>
								</Col>
								<Col md="6">
									<div className="pl-md-5">
										<div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
											<i className="fa fa-bug" />
										</div>
										<h3>The challenge</h3>
										<p className="lead">
											Develop a dApp that can be used as an descentralized
											identity system, in order to being able to authenticate
											users and extend its functionalities to any use cases.
										</p>
										<p>
											The app should emulate being an issuer of credentials for
											Bancolombia account, that can be used as part of the login
											functionality, and the app should serve as a verifier of
											the autenticity of data.
										</p>
										<p>
											This challenge comes along with some questions that should
											be answered while developing the solution. We would need
											to know: <br /> <br />
											<ul>
												<li>
													How I am going to guarantee the concurrence in the
													transactions done in the dApp?
												</li>
												<li>
													Which artifacts AWS or Azure are we going to use to
													support a high number of users trying to identify
													themselves?
												</li>
											</ul>
										</p>
									</div>
								</Col>
							</Row>
						</Container>
					</section>
					<section className="section section-lg bg-gradient-default">
						<Container className="pt-lg pb-100">
							<Row className="text-center justify-content-center">
								<Col lg="10">
									<h2 className="display-3 text-white">How is it build?</h2>
									<p className="lead text-white">
										We've taken serious considerations and have analyzed very
										carefully the way the dApp is going to be developed. We
										selected specific components that are going to drive to a
										fully and complete good user experience.
									</p>
								</Col>
							</Row>
							<Row className="row-grid mt-5">
								<Col lg="4">
									<div className="icon icon-lg icon-shape bg-gradient-aux shadow rounded-circle text-primary">
										<i className="ni ni-atom text-primary" />
									</div>
									<h5 className="text-white mt-3">Front: React</h5>
									<p className="text-white mt-3">
										React is the JavaScript framework we've selected because of
										is usability and good support libraries.
									</p>
								</Col>
								<Col lg="4">
									<div className="icon icon-lg icon-shape bg-gradient-aux shadow rounded-circle text-primary">
										<i className="ni ni-compass-04 text-primary" />
									</div>
									<h5 className="text-white mt-3">Backend: NodeJS</h5>
									<p className="text-white mt-3">
										We need agility in our services and a famous framework that
										allow us to accomplish all the non-functional requirements
										the app is in need.
									</p>
								</Col>
								<Col lg="4">
									<div className="icon icon-lg icon-shape bg-gradient-aux shadow rounded-circle text-primary">
										<i className="ni ni-app text-primary" />
									</div>
									<h5 className="text-white mt-3">Solidity</h5>
									<p className="text-white mt-3">
										We need Solidity as the primary language that allow us to
										implement the web 3.0 technologies, by developing smart
										contracts and verify the claims throuh zK-proofs.
									</p>
								</Col>
							</Row>
						</Container>
						<div className="separator separator-bottom separator-skew zindex-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="none"
								version="1.1"
								viewBox="0 0 2560 100"
								x="0"
								y="0">
								<polygon
									className="fill-white"
									points="2560 0 2560 100 0 100"
								/>
							</svg>
						</div>
					</section>
				</main>
			</>
		);
	}
}

export default Landing;
