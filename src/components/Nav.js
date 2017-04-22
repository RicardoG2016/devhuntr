import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connectProfile, logout} from '../auth0/auth';
import {login} from '../auth0/auth';
import {isLoggedIn} from '../auth0/auth';
import logo from '../logo.svg';
import './Site.css';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LeftMenu from './Drawer';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class Login extends Component {
  componentWillMount() {
    this.login = login();
  }

  componentWillUnmount() {
    this.login.hide();
    this.login = null;
  }

  static muiName = 'FlatButton';

  render() {
    return (
      <Link to="/profile/edit"><a onClick={() => login()}><FlatButton {...this.props} label="Login" /></a></Link>
    );
  }
}

class Logged extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <Link to="/"><a onClick={() => logout()}><FlatButton {...this.props} label="Log Out" /></a></Link>
    );
  }
}

class Nav extends Component {

  static propTypes = {
    ...connectProfile.PropTypes,
    children: PropTypes.any
  };

  renderUserControls() {
    const {profile} = this.props;

    if (profile) {
      return (
        <div className="Site-profileControls">
          <img className="Site-profilePicture" src={profile.picture} alt={profile.nickname} />
          <Link to="/profile/edit">{profile.nickname}</Link> &middot; <a onClick={() => logout()}>Log Out</a>
        </div>
      );
    }
  }
  

  render() {

    return (
      
    <div>
        <AppBar
          title="Dev Huntr"
          iconElementLeft={<IconButton><LeftMenu /></IconButton>}
          iconElementRight={this.props.profile ? <Logged /> : <Login />}
        />

        <div className="Site">
          <div className="Site-header">
            <img src={logo} className="Site-logo" alt="logo" />
            {this.renderUserControls()}
          </div>
          <div className="Site-page">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }


}

export default connectProfile(Nav);

