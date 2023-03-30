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

class Login extends React.Component {
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
												<small>Sign in with this QR Code:</small>
												<br />
												<br />
												<br />
												<img
													alt="..."
													src={require('assets/img/theme/qr-code-on-chain-verification.png')}
													style={{ width: '100%' }}
												/>
											</div>
										</CardBody>
									</Card>
									<Row className="mt-3">
										<Col xs="6">
											<a
												className="text-light"
												href="/register-page"
												onClick={(e) => {
													e.preventDefault()(
														(window.location.href = '/register-page')
													);
												}}>
												<small>Create new account</small>
											</a>
										</Col>
									</Row>
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

export default Login;
