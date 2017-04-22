import React, {Component} from 'react';
import {login} from '../auth0/auth';
import './Login.css';

class Login extends Component {
  componentWillMount() {
    this.login = login();
  }

  componentWillUnmount() {
    this.login.hide();
    this.login = null;
  }

  render() {
    return (
      <div className="Login">
        <a className="Login-loginButton" onClick={() => login()}>Please Log In</a>
      </div>
    );
  }
}

export default Login;
