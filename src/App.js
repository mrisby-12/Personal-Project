import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import routes from './routes';
import Header from './components/Header/Header';
import StoryCard from './components/StoryCard/StoryCard'
import Footer from './components/Footer/Footer';

class App extends Component {

  componentDidMount() {
    axios.get('/api/test').then(response => {
      console.log(response);
    })
  }
  render() {
    return (
      <div className='site-div'>
        <div className='site-content'>
          <div className='app-header'>
            <Header />
            {routes}
              </div>
            <div className='card-div'>
              <StoryCard />
            </div>
        </div> 
          <Footer />
      </div>
    );
  }
}



export default App;
