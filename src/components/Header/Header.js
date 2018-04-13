import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Header.css";

class Header extends Component {


  render() {
    const { login, logout }=this.props
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-brand-centered"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-brand navbar-brand-centered">
              <img className="logo" src={Logo} alt="logo" />
              <h1>Inspiration</h1>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbar-brand-centered"
            >
              <ul className="nav navbar-nav">
                <li className="nav-links">
                  <Link to="/"> HOME </Link>
                </li>
                <li className="nav-links">
                  <Link to="/storycards"> STORYCARDS </Link>
                </li>
                <li className="nav-links">
                  <Link to="/resources"> RESOURCES </Link>
                </li>
                {this.props.user &&
                  this.props.user.uid === "Gdy8DXrajWQf8y6rkMm4qnCDpFj1" && (
                    <li className="nav-links">
                      <Link to="/admin"> ADMIN </Link>
                    </li>
                  )}
              </ul>
            </div>
          </div>
          <div className="log-in">
            {this.props.user ? (
              <button onClick={logout}>
                {" "}
                <i className="fa fa-user-circle" aria-hidden="true">
                  {" "}
                  <br />Log Out
                </i>
              </button>
            ) : (
              <button onClick={login}>
                Log In <i className="fa fa-user-circle-o" aria-hidden="true" />
              </button>
            )}
            {this.props.user ? (
              <div> Hello, {this.props.user.displayName} </div>
            ) : (
              <div>
                <p>Please log in to vote.</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
