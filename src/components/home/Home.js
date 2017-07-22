import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';
import Landing from './Landing';
import UserHome from './UserHome';
import {grey200} from 'material-ui/styles/colors';
import '../../index.css';

class Home extends Component {

  render() {
    const home = {
      body: 'grey200',
    };

    const homeIntro = {
      fontSize: "large",
      textAlign: 'center',
    };

    return (
        <div style={home}>
          <div style={homeIntro}>
              {(this.props.profile) ? <UserHome className="center" profile={this.props.profile} /> : <Landing />}
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
