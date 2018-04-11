import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import { auth, provider } from '../../firebase/firebase';
import firebase from '../../firebase/firebase';
import './Header.css';

class Header extends Component {
  constructor() {
    super()

    this.state={
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  handleChange(e) {

  }
  logout() {
    auth
    .signOut()
    .then( () => {
      this.setState({
        user: null
      });
    });
  }
  login() {
    auth
    .signInWithPopup(provider)
    .then( (result) => {
      const user = result.user;
      this.handleUserSubmit(user)
      this.setState({
        user
      });
    });
  }
  handleUserSubmit(user) {
    const usersRef = firebase.database().ref('users');
    const newUser = {
      userId: user.uid,
      displayName: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
    }
 
  }
  componentDidMount() {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        this.setState( { user } );
      }
    });
  }

  render() {
    return (
      <nav className='navbar navbar-default'> 
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navbar-brand-centered'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div className='navbar-brand navbar-brand-centered'>
              <img className='logo' src={ Logo } alt='MK logo'/>
              <h1>Inspiration</h1>
            </div>
            <div className='collapse navbar-collapse'  id='navbar-brand-centered'>
              <ul className='nav navbar-nav'>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/storycard'> StoryCard </Link></li>
                <li><Link to='/admin'> Admin </Link></li>
              </ul>
            </div>
          </div>   
        <div className='log-in'>        
            {this.state.user 
              ?
              <button onClick={ this.logout }> <i className="fa fa-user-circle" aria-hidden="true"> <br/>Log Out</i></button>
              :
              <button onClick={ this.login }>Log In <i className="fa fa-user-circle-o" aria-hidden="true"></i></button>
            }
            {this.state.user
              ?
              <div> Hello, { this.state.user.displayName } </div>
              :
              <div> <p>Please log in to vote.</p> </div>
            }
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

