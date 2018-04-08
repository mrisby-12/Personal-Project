import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-addons-css-transition-group'
import './Home.css'
import HomePics from './HomePics'

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

class Home extends Component {
  constructor() {
    super()

    this.state = {
      toggleAll: true,
      fade: true,
      slideIn: true,
      slideUp: true,
      slider: true,
      height: true,
      width: false,
      size: false,
      rotate: false
    };
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.toggleSlideIn = this.toggleSlideIn.bind(this);
    this.toggleHeightIn = this.toggleHeightIn.bind(this);
    this.toggleSlideUp = this.toggleSlideUp.bind(this);
    this.toggleSlider = this.toggleSlider.bind(this);
    this.toggleWidthIn = this.toggleWidthIn.bind(this);
    this.toggleSize = this.toggleSize.bind(this);
    this.toggleRotate = this.toggleRotate.bind(this);
  }
  toggleAll() {
    if (!this.state.toggleAll) {
      this.setState({
        toggleAll: true,
        fade: true,
        slideIn: true,
        slideUp: true,
        slider: true,
        height: true
      });
    if (!this.state.width) {
      this.toggleWidthIn();
    }
    if (!this.state.size) {
      this.toggleSize();
    }
    if (!this.state.rotate) {
      this.toggleRotate();
    }
    } else {
      this.setState({
        toggleAll: false,
        fade: false,
        slideIn: false,
        slideUp: false,
        slider: false,
        height: false,
        rotate: false
      });
      if (this.state.width) {
        this.toggleWidthIn();
      }
      if (this.state.size) {
        this.toggleSize();
      }
      if (this.state.rotate) {
        this.toggleRotate();
      }
    }
  }
  toggleFade() {
    if (!this.state.fade) {
      this.setState({
        fade: true
      });
    } else {
      this.setState({
        fade: false
      });
    }
  }
  toggleSlideIn() {
    if (!this.state.slideIn) {
      this.setState({
        slideIn: true
      });
    } else {
      this.setState({
        slideIn: false
      });
    }
  }
  toggleSlideUp() {
    if (!this.state.slideUp) {
      this.setState({
        slideUp: true
      });
    } else {
      this.setState({
        slideUp: false
      });
    }
  }
  toggleSlider() {
    if (!this.state.slider) {
      this.setState({
        slider: true
      });
    } else {
      this.setState({
        slider: false
      });
    }
  }
  toggleHeightIn() {
    if (!this.state.height) {
      this.setState({
        height: true
      });
    } else {
      this.setState({
        height: false
      });
    }
  }
  toggleWidthIn() {
    if (!this.state.width) {
      this.setState({
        width: true
      });
      setTimeout( () => {
        let element = document.getElementById('widthInId');
        // element.classList.add('widthInTextAfter');
      }, 15);
    } else {
      this.setState({
        width: false
      });
      let element = document.getElementById('widthInId');
      // element.className = element.className.replace('widthInTextAfter', '');
    }
  }
  toggleSize() {
    if (!this.state.size) {
      this.setState({
        size: true
      });
      setTimeout( () =>{
        let element = document.getElementById('sizeDivId');
        // element.classList.add('sizeTextAfter');
      }, 15);
    } else {
      this.setState({
        size: false
      });
      let element = document.getElementById('sizeDivId');
      // element.className = element.className.replace('sizeTextAfter', ''); 
    }
  }
  toggleRotate() {
    if (!this.state.rotate) {
      this.setState({
        rotate: true
      });
      setTimeout( () => {
        let element = document.getElementById('rotateDivId');
        // element.classList.add('rotateTextAfter');
      }, 15);
    } else {
      this.setState({
        rotate: false
      });
      let element = document.getElementById('rotateDivId');
      // element.className = element.className.replace('rotateTextAfter', '');
    }
  }
  componentWillMount() {
    this.toggleWidthIn();
    this.toggleSize();
    this.toggleRotate();
  };

  render() {
    return (
      <div>
        <div className='page-title'>
          Hello World!
        </div>
          <Controller
            toggleAllBtns = {this.state.toggleAll} />          
        <div className = "transitionsContainer">
          <FadeIn 
            fade = {this.state.fade} toggleFade = {this.toggleFade} />
          <SlideIn 
            slideIn = {this.state.slideIn} toggleSlideIn = {this.toggleSlideIn} />
          <SlideUp 
            slideUp = {this.state.slideUp} toggleSlideUp = {this.toggleSlideUp} />
          <Slider 
            slider = {this.state.slider} toggleSlider = {this.toggleSlider} />
          <HeightIn 
            height = {this.state.height} toggleHeightIn = {this.toggleHeightIn} />
          <WidthIn 
            width = {this.state.width} toggleWidthIn = {this.toggleWidthIn} />
          <SizeIn 
            size = {this.state.size} toggleSize = {this.toggleSize} />
          <RotateIn 
            rotate = {this.state.rotate} toggleRotate = {this.toggleRotate} />
        </div>
      </div>
    )
  }
}

class Controller extends Component {
  render() {
    let toggleAllText = "Press Me To See Some Magic";
    let toggleAllBtnStyle = btnInactive;
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

class FadeIn extends Component {
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

class SlideIn extends Component {
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

class SlideUp extends Component {
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

class Slider extends Component {
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

class HeightIn extends Component {
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

class WidthIn extends Component {
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

class SizeIn extends Component {
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

class RotateIn extends Component {
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
export default Home;