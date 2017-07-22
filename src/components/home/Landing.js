import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';
import {grey200} from 'material-ui/styles/colors';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    const homeIntro = {
      height: '100vh',
      fontSize: "large",
      margin: '300px auto',
    };

    return (
        <div>
          <div style={homeIntro}>
            Please login to use app :)
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
