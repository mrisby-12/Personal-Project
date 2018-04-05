import React, { Component } from 'react';
import './Admin.css'
import { Table, Checkbox, Button } from 'react-bootstrap';
import firebase from '../../firebase/firebase';

class Admin extends Component {
  constructor() {
    super()

    this.state = {
      cardTitle: '',
      imageURL: '',
      siteURL: '',
      about: '',  
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.cardTitle,
      image: this.state.imageURL,
      site: this.state.siteURL,
      about: this.state.about
    }
    itemsRef.push(item);
    this.setState({
      cardTitle: '',
      imageURL: '',
      siteURL: '',
      about: ''
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
    
    return(
      <div className='admin'>
        <h2> Admin </h2> 
        <hr />
        <h4>Users</h4>
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Username and/or Email</th>
              <th>User Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Checkbox></Checkbox></td>
              <td>1</td>
              <td>bskye1@gmail.com</td>
              <td>12345</td>
            </tr>
          </tbody>
        </Table>
        <Button>Edit</Button>
        <Button>Delete</Button>
        <hr />
        <h4>Add StoryCard</h4>
          <div className='form-container'>
            <form onSubmit={this.handleSubmit}>
              <input type='text' name='cardTitle' placeholder='Enter title' onChange={this.handleChange} value={this.state.cardTitle} />
              <input type='text' name='imageURL' placeholder='Enter image URL' onChange={this.handleChange} value={this.state.imageURL} />
              <input type='text' name='siteURL' placeholder='Enter site URL' onChange={this.handleChange} value={this.state.siteURL} />
              <input type='text' name='about' placeholder='About the site' onChange={this.handleChange} value={this.state.about} />
              <Button type='submit'>Add Item</Button>
            </form> 
          </div>
          <hr/>
          <h4>List of StoryCards</h4>
          
              <Table striped bordered condensed hover responsive>
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>URL</th>
                    <th>About</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.items.map( (item) => {
                  return (
                  <tr key={item.id}>
                    <td><Checkbox></Checkbox></td>
                    <td>{item.title}</td>
                    <td>{item.image}</td>
                    <td>{item.site}</td>
                    <td>{item.about}</td>
                </tr> ) 
              })}
                </tbody>
              </Table>  
              <Button>Edit</Button>             
              <Button>Delete</Button>
      </div>
    )
  }
}

export default Admin;