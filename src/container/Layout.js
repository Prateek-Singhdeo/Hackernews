import React from 'react';
import './Layout.css';
import NewsFeed from './newsfeed';
import Header from '../components/header';

import { Route, Switch } from 'react-router-dom';

function Layout(props) {
  
    return (
        <div className="main-container">  
          <Header />
          <Switch>
              <Route path="/" component={NewsFeed} />
          </Switch>
        </div>
    );
}
  
export default Layout;
  