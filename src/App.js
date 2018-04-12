import React, { Component } from "react";
import { Route, Switch } from "react-router-dom"
import routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import StoryCard from './components/StoryCard/StoryCard';
import { auth, provider, facebookProvider } from "./firebase/firebase";
import firebase from "./firebase/firebase";


class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  } 
  handleUserSubmit(user) {
    const usersRef = firebase.database().ref("users");
    const newUser = {
      userId: user.uid,
      displayName: user.displayName,
      email: user.email,
      phone: user.phoneNumber
    };
  }
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }
  login() {
    auth.signInWithPopup(provider, facebookProvider).then(result => {
      const user = result.user;
      this.handleUserSubmit(user);
      this.setState({
        user
      });
    });
  }
  
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          <Header login={this.login} logout={this.logout} user={this.state.user}/>
          <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                
              />
            )}
          />
          <Route
            path="/storycard"
            render={() => (
              <StoryCard
                
              />
            )}
          />
           <Route
            path="/admin"
            render={() => (
              <Admin
                user = {this.state.user}
              />
            )}
          />
        </Switch>
        </div>
        <ScrollButton />
        <Footer />
      </div>
    );
  }
}

export default App;
