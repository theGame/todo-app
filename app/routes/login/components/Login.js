import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormGroup, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router';

class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};

        this._handleLoginUser = this._handleLoginUser.bind(this);
    }

    componentWillReceiveProps(newProps, props) {
        console.log('componentWillReceiveProps');
        console.log(newProps);
        console.log(props);
    }

    render() {
        return (
            <Form horizontal>
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
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type='submit' onClick={this._handleLoginUser}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

    _handleLoginUser(e) {
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
