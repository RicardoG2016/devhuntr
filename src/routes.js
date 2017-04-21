import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {requireAuth} from './auth0/auth';
import Site from './components/Site';
import Home from './components/Home';
import Login from './components/Login';
import EditProfile from './components/EditProfile';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Site}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route onEnter={requireAuth}>
            <Route path="/profile/edit" component={EditProfile} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Routes;
