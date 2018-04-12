import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import StoryCard from './components/StoryCard/StoryCard';
import Admin from './components/Admin/Admin';
import App from './App'


export default (
  <Switch>
    <Route path='/' component={App} />
  </Switch>
)