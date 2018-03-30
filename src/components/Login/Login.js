import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import './Login.css'
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }

  this.authWithFacebook = this.authWithFacebook.bind(this)
  this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
  }

  authWithFacebook() {
 
  }

  authWithEmailPassword(event) {
    event.preventDefault()
    console.table([{
      email: this.emailInput.value,
      password: this.passwordInput.value
    }])
  }
  
  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }
    return (
      <div className='login-styles'>
            <Link to='/login/sign-up'> Sign-Up </Link>
            <Link to='/login/sign-in'> Sign In </Link>
        {/* <button
          style={{ width: "100%" }}
          onClick={() => {
            this.authWithFacebook();
          }}
        >
          Log In with Facebook
        </button>
        <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
        <form>
          <Panel style={{ marginBottom: "10px" }}>
            <Panel.Body>
              Note: If you do not have an account already, this form will create
              your account.
            </Panel.Body>
          </Panel>
          <label>
            Email{" "}
            <input
              style={{ width: "100%" }}
              name="email"
              type="email"
              ref={input => {
                this.emailInput = input;
              }}
              placeholder="Enter email here"
            />
          </label>
          <label>
            Password{" "}
            <input
              style={{ width: "100%" }}
              name="password"
              type="password"
              ref={input => {
                this.passwordInput = input;
              }}
              placeholder="Enter password here"
            />
          </label>
          <input className='submit-button'
            style={{ width: "100%" }}
            type="submit"
            value="Log In"
            onSubmit={event => {
              this.authWithEmailPassword(event);
            }}
            ref={form => {
              this.loginForm = form;
            }}
          />
        </form> */}
        {this.props.children}
      </div>
    );
  }
}

export default Login;
