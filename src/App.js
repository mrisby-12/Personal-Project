import React, { Component } from 'react';
import routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';

class App extends Component {

  render() {
    return (
      <div>
        <div>
          { routes }
        </div> 
          <ScrollButton />
          <Footer />
      </div>
    );
  }
}

export default App;
