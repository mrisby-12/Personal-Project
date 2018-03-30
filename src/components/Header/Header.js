import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png';


class Header extends Component {

  render() {
  return (
      <nav>   
        <img className='logo' src={Logo} alt='MK logo with light-bulb'/>
        <h1>Inspiration</h1>
        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/login'> Login </Link>
            
            <Link to='/storycard'> StoryCard </Link>
            <Link to='/admin'> Admin </Link> 
          </div>
          <div>
          {this.props.authenticated
            ? <Link to='/login'>Login</Link>
            : null
          }
          </div>
      </nav>
    );
  }
}

export default Header;

