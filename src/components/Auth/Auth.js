import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from '../Login/Login';
import './Auth.css';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;