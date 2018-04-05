import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png';
import { auth, provider } from '../../firebase/firebase'

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
      <nav>   
        <img className='logo' src={Logo} alt='MK logo with light-bulb'/>
        <h1>Inspiration</h1>
        <div className='links'>
            <Link to='/'> Home </Link>            
            <Link to='/storycard'> StoryCard </Link>
            <Link to='/admin'> Admin </Link> 
          </div>
         
        {this.state.user 
          ?
          <button onClick={this.logout}>Log Out</button>
          :
          <button onClick={this.login}>Log In</button>
        }
        {this.state.user
          ?
          <div > HELLO, {this.state.user.displayName.toUpperCase()}
            </div>
          :
          <div> <p>You must be logged in to vote.</p>
            </div>
        }
      </nav>
    );
  }
}

export default Header;

