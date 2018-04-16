import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class Modal extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <section>
          <h1>React SkyLight</h1>
          <button onClick={() => this.animated.show()}>Open Modal</button>
        </section>
        <SkyLight hideOnOverlayClicked ref={ref => this.animated = ref} title="Welcome To Inspiration" transitionDuration={5000}>
          Logging in creates an account for you.
        </SkyLight>
      </div>
    )
  }
}

Modal.displayName = 'Modal';

export default Modal;