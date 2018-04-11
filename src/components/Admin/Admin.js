import React, { Component } from "react";
import "./Admin.css";
import { Table, Button } from "react-bootstrap";
import firebase from "../../firebase/firebase";


class Admin extends Component {
  constructor() {
    super();

    this.state = {
      cardTitle: "",
      imageURL: "",
      siteURL: "",
      about: "",
      likes: 0,
      dislikes: 0,
      items: [],
      userId: "",
      displayName: "",
      email: "",
      phone: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.cardTitle,
      image: this.state.imageURL,
      site: this.state.siteURL,
      about: this.state.about,
      likes: this.state.likes,
      dislikes: this.state.dislikes
    };
    itemsRef.push(item);
    this.setState({
      cardTitle: "",
      imageURL: "",
      siteURL: "",
      about: "",
      likes: 0,
      dislikes: 0
    });
  }
  handleUserSubmit(e) {
    e.preventDefault();
    const usersRef = firebase.database().ref("users");
    const user = {
      userId: this.state.userId,
      displayName: this.state.displayName,
      email: this.state.email,
      phone: this.state.phone
    };
    usersRef.push(user);
    this.setState({
      userId: "",
      displayName: "",
      email: "",
      phone: ""
    });
  }
  updateUser(id, property, value) {
    firebase
      .database()
      .ref("users/" + id + "/" + property)
      .set(value);
  }
  updateItem(id, property, value) {
    firebase
      .database()
      .ref("items/" + id + "/" + property)
      .set(value);
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
    const usersRef = firebase.database().ref("users");
    usersRef.on("value", snapshot => {
      let users = snapshot.val();
      let newState = [];
      for (let user in users) {
        newState.push({
          id: user,
          displayName: users[user].displayName,
          email: users[user].email,
          phone: users[user].phone
        });
      }
      this.setState({
        users: newState
      });
    });
  }

  render() {
    return (
      <div className="admin">
        <h2> Admin </h2>
        <hr />
        <h4>Add Users</h4>
        <div className="form-container">
          <form onSubmit={this.handleUserSubmit}>
            <input
              type="text"
              name="userId"
              placeholder="ID is Auto Generated"
              onChange={this.handleChange}
              value={this.state.userId}
            />
            <input
              type="text"
              name="displayName"
              placeholder="Enter Name"
              onChange={this.handleChange}
              value={this.state.displayName}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
            <br />
            <Button className='button' type="submit">Add Item</Button>
          </form>
        </div>
        <hr />
        <h4>Users</h4>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>User ID</th>
              <th>
                Display Name <span className="to-edit"> (click to edit) </span>{" "}
              </th>
              <th>
                Email <span className="to-edit"> (click to edit) </span>{" "}
              </th>
              <th>
                Phone Number <span className="to-edit"> (click to edit) </span>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => {
              return (
                <tr key={user.id}>
                  <td className="userID-col">{user.id}</td>
                  <td>
                    <input
                      onChange={e =>
                        this.updateUser(user.id, "displayName", e.target.value)
                      }
                      defaultValue={user.displayName}
                    />
                  </td>
                  <td>
                    <input
                      onChange={e =>
                        this.updateUser(user.id, "email", e.target.value)
                      }
                      defaultValue={user.email}
                    />
                  </td>
                  <td>
                    <input
                      onChange={e =>
                        this.updateUser(user.id, "phoneNumber", e.target.value)
                      }
                      defaultValue={user.phone}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <hr />
        <h4>Add StoryCard</h4>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="cardTitle"
              placeholder="Enter title"
              onChange={this.handleChange}
              value={this.state.cardTitle}
            />
            <input
              type="url"
              name="imageURL"
              placeholder="Enter image URL"
              onChange={this.handleChange}
              value={this.state.imageURL}
            />
            <input
              type="url"
              name="siteURL"
              placeholder="Enter site URL"
              onChange={this.handleChange}
              value={this.state.siteURL}
            />
            <input
              type="text"
              name="about"
              placeholder="About the site"
              onChange={this.handleChange}
              value={this.state.about}
            />
            <input
              type="text"
              name="likes"
              placeholder="Positive Votes"
              onChange={this.handleChange}
              value={this.state.likes}
            />
            <input
              type="text"
              name="dislikes"
              placeholder="Negative Votes"
              onChange={this.handleChange}
              value={this.state.dislikes}
            />
            <br />
            <Button className='button' type="submit">Add Item</Button>
          </form>
        </div>
        <hr />
        <h4>List of StoryCards</h4>

        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>
                Title <span className="to-edit"> (click to edit) </span>
              </th>
              <th>
                Image <span className="to-edit"> (click to edit) </span>
              </th>
              <th>
                URL <span className="to-edit"> (click to edit) </span>
              </th>
              <th>
                About <span className="to-edit"> (click to edit) </span>
              </th>
              <th>Positive Votes</th>
              <th>Negative Votes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      onChange={e =>
                        this.updateItem(item.id, "title", e.target.value)
                      }
                      defaultValue={item.title}
                    />
                  </td>
                  <td>
                    <input
                      onChange={e =>
                        this.updateItem(item.id, "image", e.target.value)
                      }
                      defaultValue={item.image}
                    />
                  </td>
                  <td>
                    <input
                      onChange={e =>
                        this.updateItem(item.id, "site", e.target.value)
                      }
                      defaultValue={item.site}
                    />
                  </td>
                  <td>
                    <input
                      onChange={e =>
                        this.updateItem(item.id, "about", e.target.value)
                      }
                      defaultValue={item.about}
                    />
                  </td>
                  <td>{item.likes}</td>
                  <td>{item.dislikes}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Admin;
