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

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';

class Register extends React.Component {
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
					<section className="section section-shaped section-lg">
						<div className="shape shape-style-1 bg-gradient-default">
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<Container className="pt-lg-7">
							<Row className="justify-content-center">
								<Col lg="5">
									<Card className="bg-secondary shadow border-0">
										<CardHeader className="bg-white pb-4">
											<div className="text-muted text-center mb-3">
												<small>Provided by</small>
											</div>
											<div className="text-center">
												<img
													alt="..."
													src={require('assets/img/icons/common/polygon_blockchain_logo.png')}
													style={{ width: '50%' }}
												/>
											</div>
										</CardHeader>
										<CardBody className="px-lg-5 py-lg-5">
											<div className="text-center text-muted mb-4">
												<small>
													Register your claims to generate an identity
												</small>
											</div>
											<Form role="form">
												<FormGroup>
													<InputGroup className="input-group-alternative mb-3">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-circle-08" />
															</InputGroupText>
														</InputGroupAddon>
														<Input placeholder="Full name" type="text" />
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<InputGroup className="input-group-alternative mb-3">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-tag" />
															</InputGroupText>
														</InputGroupAddon>
														<Input placeholder="Document type" type="text" />
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<InputGroup className="input-group-alternative mb-3">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-badge" />
															</InputGroupText>
														</InputGroupAddon>
														<Input placeholder="Document number" type="text" />
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<InputGroup className="input-group-alternative mb-3">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-calendar-grid-58" />
															</InputGroupText>
														</InputGroupAddon>
														<Input placeholder="Date of birth" type="text" />
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<InputGroup className="input-group-alternative">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-email-83" />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder="Email"
															type="email"
															autoComplete="off"
														/>
													</InputGroup>
												</FormGroup>
												<FormGroup>
													<InputGroup className="input-group-alternative">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-email-83" />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder="Email confirmation"
															type="email"
															autoComplete="off"
														/>
													</InputGroup>
												</FormGroup>
												<Row className="my-4">
													<Col xs="12">
														<div className="custom-control custom-control-alternative custom-checkbox">
															<input
																className="custom-control-input"
																id="customCheckRegister"
																type="checkbox"
															/>
															<label
																className="custom-control-label"
																htmlFor="customCheckRegister">
																<span>
																	I agree with the{' '}
																	<a
																		href="#pablo"
																		onClick={(e) => e.preventDefault()}>
																		Privacy Policy
																	</a>
																</span>
															</label>
														</div>
													</Col>
												</Row>
												<div className="text-center">
													<Button
														className="mt-4"
														color="primary"
														type="button">
														Create account
													</Button>
												</div>
											</Form>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</section>
				</main>
				<SimpleFooter />
			</>
		);
	}
}

export default Register;
