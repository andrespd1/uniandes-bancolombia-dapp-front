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
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import { QRCode } from 'react-qr-svg';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { UserContext } from 'Contexts/UserContext';
import { useHistory } from 'react-router-dom';

const base_url = 'http://localhost:8080';
function makeQr(data) {
	return new QRCode({
		value: JSON.stringify(data),
		width: 300,
		height: 300,
		fgColor: '#000',
		bgColor: '#e9e9e9',
		level: 'H',
	});
}

//Check auth status every 2 seconds (intervalTime) for current session id
async function listenAuthResponse(sessionId, updateUser, history) {
	//Interval to check status in ms
	const intervalTime = 2000;
	const listener = setInterval(() => {
		fetch(base_url + `/api/auth/status?sessionId=${sessionId}`).then(
			(response) => {
				if (response.ok) {
					//response contains polygon wallet id of authenticated user
					response.json().then((data) => {
						fetch(base_url + `/api/auth/login?walletId=${data.walletId}`).then(
							(response) => {
								if (response.ok) {
									response.json().then((user) => {
										updateUser(user);
										clearInterval(listener);
										history.push('profile-page');
									});
								}
							}
						);
					});
				}
			}
		);
	}, intervalTime);
}
const Login = (props) => {
	const [qrCode, setQrCode] = useState(null);
	const { user, updateUser } = useContext(UserContext);
	const refContainer = useRef(null);
	const history = useHistory();

	useEffect(() => {
		console.log(user);
		var sessionId;
		//Start signin proces in the API
		fetch(base_url + '/api/auth/sign-in').then((response) => {
			Promise.all([
				Promise.resolve(response.headers.get('x-id')),
				response.json(),
			]) //Generate QR code and display it
				.then(([id, data]) => {
					let qrCode = makeQr(data);
					sessionId = data.body.message;
					setQrCode(qrCode);
					return id;
				}) //Start api auth status listener
				.then(() => {
					listenAuthResponse(sessionId, updateUser, history);
				})
				.catch((err) => console.log(err));
			console.log(response);
		});
	}, []);

	return (
		<>
			<DemoNavbar />
			<main ref={refContainer}>
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
											{qrCode}
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
};

export default Login;
