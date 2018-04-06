import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png';
import { auth, provider } from '../../firebase/firebase';
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
      this.setState({
        user
      });
    });
  }
  componentDidMount() {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        this.setState( {user} );
      }
    });
  }

  render() {
    
  return (
      <nav className='navbar navbar-default' role='navigation'> 
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navbar-brand-centered'>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div className='navbar-brand navbar-brand-centered'>
              <img className='logo' src={Logo} alt='MK logo with light-bulb'/>
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
          <button onClick={this.logout}> <i class="fa fa-user-circle" aria-hidden="true"> <br/>Log Out</i></button>
          :
          <button onClick={this.login}>Log In <i class="fa fa-user-circle-o" aria-hidden="true"></i></button>
        }
        {this.state.user
          ?
          <div > HELLO, {this.state.user.displayName.toUpperCase()} <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          :
          <div> <p>You must be logged in to vote.</p>
            </div>
        }
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;

