import React, { Component } from "react";
import { Badge, Carousel } from "react-bootstrap";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import firebase from "../../firebase/firebase";
import "./StoryCard.css";

class StoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
      cardTitle: "",
      image: "",
      siteURL: "",
      about: "",
      likes: 0,
      dislikes: 0,
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
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          image: items[item].image,
          site: items[item].site,
          about: items[item].about,
          likes: items[item].likes,
          dislikes: items[item].dislikes
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  addLikes(id) {
    let item = firebase.database().ref(`items/${id}/likes`);
    item.transaction(function(currentLikes) {
      return currentLikes + 1;
    },);
  }
  addDislikes(id) {
    let item = firebase.database().ref(`items/${id}/dislikes`);
    item.transaction(function(currentDislikes) {
      return currentDislikes + 1;
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div>
        <h2>StoryCards</h2>
        <Carousel
          className="carousel"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {this.state.items.map(item => {
            return (
              <Carousel.Item key={item.id} className="item">
                <Card className="card" reverse>
                  <CardBody className="card-body">
                    <CardTitle className="card-title">{item.title}</CardTitle>
                    <CardText>{item.about}</CardText>
                    <Button
                      onClick={() => this.addLikes(item.id)}
                      className="button"
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </Button>
                    <Badge>{item.likes}</Badge>
                    <Button
                      onClick={() => this.addDislikes(item.id)}
                      className="button"
                    >
                      <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                    </Button>
                    <Badge>{item.dislikes}</Badge>
                  </CardBody>
                  <a className="img-card" href={item.site} target="_blank">
                    <CardImage
                      className="img-fluid"
                      src={item.image}
                      alt="Image is not available"
                    />
                  </a>
                </Card>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
export default StoryCard;
