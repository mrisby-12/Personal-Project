import React, { Component } from 'react';
import routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Header />
          { routes }
        </div> 
          <Footer />
      </div>
    );
  }
}

export default App;
