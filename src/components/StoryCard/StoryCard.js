import React, { Component } from 'react';
import { Badge, Carousel } from 'react-bootstrap';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import firebase from '../../firebase/firebase';
import './StoryCard.css'

class StoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
      cardTitle: '',
      image: '',
      siteURL: '',
      about: '',
      items: []
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title:items[item].title,
          image: items[item].image,
          site: items[item].site,
          about: items[item].about
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div>
        <h2>StoryCards</h2> 
      <Carousel className='carousel'
        activeIndex={ index }
        direction={ direction }
        onSelect={ this.handleSelect }>
          {this.state.items.map( (item) => {
            return (
              <Carousel.Item className='item'>
                <Card className='card' reverse>
                  <CardBody className='card-body'>
                    <CardTitle className='card-title'>
                      { item.title }
                    </CardTitle>
                    <CardText>
                      { item.about }
                    </CardText>
                    <Button className='button'>
                      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </Button>
                    <Badge>8</Badge>
                    <Button className='button'>
                      <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    </Button>
                    <Badge>5</Badge>
                  </CardBody>
                  <a className='img-card' href={ item.site } target='_blank'>
                    <CardImage className="img-fluid" src={ item.image } alt='Image is not available'/>
                  </a>
                </Card> 
            </Carousel.Item> 
            )
          })}
      </Carousel>
      </div>
    );
  }
}
export default StoryCard;