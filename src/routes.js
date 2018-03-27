import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import StoryCard from './components/StoryCard/StoryCard';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/storycard' component={StoryCard} />
  </Switch>
)