import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';
import Landing from './Landing';

class Home extends Component {

  render() {
    const homeIntro = {
      fontSize: "large"
    };

    return (
        <div className="Home">
          <div style={homeIntro}>
              {(this.props.profile) ? "Logged in :)" : <Landing />}
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
