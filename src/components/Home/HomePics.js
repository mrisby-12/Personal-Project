import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-addons-css-transition-group'
import './Home.css'

let btnActive = { 'background': '#06FF96' };
let btnInactive = { 'background': '#FDD692' };

let ReactCSSTransitionGroup = CSSTransitionGroup;
let transitionDivStyle = {
  'width': '150px',
  'height': '150px',
  'padding': '10px',
  'margin': '25px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '22px',
  'fontFamily': 'Avenir',
  'fontWeight': 'bold',
  'cursor': 'pointer',
  'borderRadius': '5px',
  'color': 'rgb(25,25,25)'
};

class HomePics extends Component {
  render() {
    return(
      <div></div>
    )
  }
}

class Controller extends Component {
  render() {
    var toggleAllText = "Press Me To See Some Magic";
    var toggleAllBtnStyle = btnInactive;
    if (this.props.toggleAllBtns) {
      toggleAllBtnStyle = btnActive;
      toggleAllText = "Press Me Again";
    }     
       
    return (
      <div className = "controlWrapper">
        <button style = {toggleAllBtnStyle} onClick = {this.props.toggleAll} className = "allBtn">{toggleAllText}</button>
        <div className = "controls">
                  
          <hr />
        </div>
      </div>
    );
  }
};

class FadeIn extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2018/03/28/11/51/tattoo-3268988_1280.jpg'
    }
    let component;
    if (this.props.fade) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleFade} className = "transitionBox">
        </div>
      )
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'fadeDiv'
        transitionEnterTimeout = {1000}
        transitionLeaveTimeout = {1000}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};

class SlideIn extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2018/01/31/07/36/sunset-3120484_1280.jpg'
    }
    let component;
    if (this.props.slideIn) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleSlideIn} className = "transitionBox">
        </div>
      )
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'slideInDiv'
        transitionEnterTimeout = {800}
        transitionLeaveTimeout = {800}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};

class SlideUp extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2018/02/04/21/13/monastery-3130879_1280.jpg'
    }
    let component;
    if (this.props.slideUp) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleSlideUp} className = "transitionBox">
        </div>
      )
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'slideUpDiv'
        transitionEnterTimeout = {800}
        transitionLeaveTimeout = {800}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};

class Slider extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2018/01/31/09/42/people-3120717_1280.jpg'
    }
    let component;
    if (this.props.slider) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleSlider} className = "transitionBox">
        </div>
      )
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'sliderDiv'
        transitionEnterTimeout = {1000}
        transitionLeaveTimeout = {1000}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};

class HeightIn extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2016/07/29/02/20/wordpress-1550237_1280.jpg'
    }
    let component;
    if (this.props.height) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleHeightIn} className = "transitionBox">
        </div>
      )
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'heightInDiv'
        transitionEnterTimeout = {1000}
        transitionLeaveTimeout = {1000}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};

class WidthIn extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_1280.jpg'
    }
    let component;
    if (this.props.width) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleWidthIn} className = "transitionBox">
          <p id = 'widthInId' className = 'widthInTextBefore'>This div expands and squeezes (with fade in text!)</p>
        </div>
      );      
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'widthInDiv'
        transitionEnterTimeout = {750}
        transitionLeaveTimeout = {1000}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};

class SizeIn extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2017/08/25/06/45/urban-2679263_1280.jpg'
    }
    let component;
    if (this.props.size) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleSize} className = "transitionBox">
          <p id = "sizeDivId" className = "sizeTextBefore">This div expands and contracts (with fade in text!)</p>
        </div>
      );      
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'sizeInDiv'
        transitionEnterTimeout = {750}
        transitionLeaveTimeout = {1000}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};

class RotateIn extends React.Component {
  render() {
    let image = {
      'image': 'https://cdn.pixabay.com/photo/2016/07/03/03/49/music-1494213_1280.jpg'
    }
    let component;
    if (this.props.rotate) {
      component = (
        <div style = {Object.assign({}, transitionDivStyle, image)} onClick = {this.props.toggleRotate} className = "transitionBox">
          <p id = "rotateDivId" className = "rotateTextBefore">This div rotates!</p>
        </div>
      );      
    }
    return (
      <ReactCSSTransitionGroup
        transitionName = 'rotateInDiv'
        transitionEnterTimeout = {1000}
        transitionLeaveTimeout = {1500}>
        {component}
      </ReactCSSTransitionGroup>
    );
  }
};
export default HomePics;
