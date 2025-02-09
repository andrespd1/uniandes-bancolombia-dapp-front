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
/*eslint-disable*/
import React from 'react';
// reactstrap components
import {
	Button,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap';

class SimpleFooter extends React.Component {
	render() {
		return (
			<>
				<footer className=" footer">
					<Container>
						<Row className=" row-grid align-items-center mb-5">
							<Col lg="6">
								<h3 className=" text-primary font-weight-light mb-2">
									Thank you for supporting us!
								</h3>
								<h4 className=" mb-0 font-weight-light">
									We're going to continue developing a better experience.
								</h4>
							</Col>
						</Row>
						<hr />
						<Row className=" align-items-center justify-content-md-between">
							<Col md="6">
								<div className=" copyright">
									© {new Date().getFullYear()}{' '}
									<a
										href="https://www.creative-tim.com?ref=adsr-footer"
										target="_blank">
										Creative Tim
									</a>
									.
								</div>
							</Col>
							<Col md="6">
								<Nav className=" nav-footer justify-content-end">
									<NavItem>
										<NavLink
											href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
											target="_blank">
											MIT License
										</NavLink>
									</NavItem>
								</Nav>
							</Col>
						</Row>
					</Container>
				</footer>
			</>
		);
	}
}

export default SimpleFooter;
