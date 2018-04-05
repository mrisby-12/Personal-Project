import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import StoryCard from './components/StoryCard/StoryCard';
import Admin from './components/Admin/Admin';


export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/storycard' component={StoryCard} />
    <Route path='/admin' component={Admin} />
  </Switch>
)