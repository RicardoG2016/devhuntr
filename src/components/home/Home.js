import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';
import Jobs from '../jobs/Jobs';
import Landing from './Landing';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    const homeIntro = {
      fontSize: "large"
    };

    return (
        <div className="Home">
          <div style={homeIntro}>
              {(this.props.profile) ? <Jobs /> : <Landing />}
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
