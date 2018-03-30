import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import ReactBootstrap from 'react-bootstrap';
// import axios from 'axios';
import routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props)

      this.state = {
        authenticated: false
      };
  }


  render() {
    return (
      <div className='site-div'>
        <div className='site-content'>
          <div className='app-header'>
            <Header authenticated={this.state.authenticated} />
            {routes}
              </div>
            
        </div> 
          <Footer />
      </div>
    );
  }
}



export default App;
