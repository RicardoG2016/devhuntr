import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';
import {grey200} from 'material-ui/styles/colors';
import JobTracker from '../jobs/Layout';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    const homeIntro = {
      fontSize: 'large',
      margin: '0px auto',
    };

    return (
        <div>
          <div style={homeIntro}>
            <JobTracker className="center" profile={this.props.profile}/>
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
