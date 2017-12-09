import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormGroup, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router';

const handleLogin = (email, password, loginAction) => {
    loginAction(email.value, password.value);
    // this.props.history.push('/');
    // TODO: create wrapper component here in order to have props inside and do redirect and save data if user admin or not
};

const Login = ({ onUserLogin }) => {
    let email;
    let password;
    return (
        <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl type="email" placeholder="Email" inputRef={ e => { email = e; }} />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl type='password'
                                 placeholder='Password'
                                 inputRef={ p => { password = p; }} />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type='submit' onClick={ (e) => {
                        e.preventDefault();
                        handleLogin(email, password, onUserLogin);
                    }}>
                        Sign in
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

Login.propTypes = {
    onUserLogin: PropTypes.func
};

export default withRouter(Login);
