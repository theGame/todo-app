import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormGroup, FormControl, HelpBlock, Button, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router';

class Login extends Component {
    render() {
        const { isLoading, message } = this.props;

        return (
            <Form horizontal className="login-form-wrapper">

                { isLoading ? <section className="loader">&nbsp;</section> : null }

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" inputRef={ e => { this.email = e; }} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type='password' placeholder='Password' inputRef={ p => { this.password = p; }} />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type='submit' onClick={this._handleLoginUser}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>

                {message ? <HelpBlock>{message}</HelpBlock> : null}
            </Form>
        );
    }

    _handleLoginUser = (e) => {
        e.preventDefault();
        this.props.onUserLogin(this.email.value, this.password.value);
    }
}

Login.propTypes = {
    onUserLogin: PropTypes.func,
    message: PropTypes.string,
    isLoading: PropTypes.bool
};

export default withRouter(Login);
