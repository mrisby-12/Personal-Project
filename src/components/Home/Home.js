import React, { Component } from "react";
import "./Home.css";
import StoryCard from '../StoryCard/StoryCard'
import Header from '../Header/Header'
import {
  Element,
  animateScroll as scroll,
  scroller
 } from "react-scroll"

class Home extends Component {
  constructor(props) {
    super(props);

  this.scrollDown = this.scrollDown.bind(this)
  }

scrollDown() {
   scroller.scrollTo("StoryCard", {
     duration: 1500,
     delay: 100,
     smooth: true
   })
 }

  render() {
    let Scroll = require("react-scroll")
    return (
      <div>
        <Header headerCheck={ true } scrollDown={this.scrollDown}/>
      <div className='image-container'>
        <div className="page-title">Hello World!</div>
        <div className='gallery'>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2017/12/28/08/39/binary-3044663__480.jpg
' alt=''/>
          </div>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2018/03/22/10/12/technology-3249920__480.jpg
' alt=''/>
          </div>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2018/02/23/09/13/city-3175057__480.jpg' alt=''/>
          </div>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190__480.jpg' alt=''/>
          </div>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2017/10/10/21/49/filmmaker-2838945__480.jpg' alt=''/>
          </div>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2018/03/11/09/25/time-3216282__480.jpg' alt=''/>
          </div>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2017/12/29/22/10/background-3048816__480.jpg
' alt=''/>
          </div>
          <div className='gallery-item'>
            <img className='gallery-image' src='https://cdn.pixabay.com/photo/2017/08/01/13/47/light-2565575__480.jpg' alt=''/>
          </div>
        </div>
        <Element name='StoryCard'/>
        <StoryCard />
      </div>
      </div>
    );
  }
}

export default Home;
