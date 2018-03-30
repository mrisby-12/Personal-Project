import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import StoryCard from './components/StoryCard/StoryCard';
import Admin from './components/Admin/Admin';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Account from './components/Login/Account';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' render={ () => (
      <Login>
        <Switch>
          <Route path='/login/sign-up' component={SignUp} />
          <Route path='/login/sign-in' component={SignIn} />
          <Route path='/login/account' component={Account} />
        </Switch>
      </Login>
    )} />
    <Route path='/storycard' component={StoryCard} />
    <Route path='/admin' component={Admin} />
  </Switch>
)