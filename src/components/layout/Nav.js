import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {login, isLoggedIn, connectProfile, logout} from '../../auth0/auth';
import './Nav.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import LeftMenu from '../layout/Drawer';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {blue500} from 'material-ui/styles/colors';
import {grey200} from 'material-ui/styles/colors';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
        <Link to="/profile/edit" ><a onClick={() => login()}><FlatButton {...this.props} label="Login" /></a></Link>
    );
  }
}

class Logged extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <Link to="/"><a onClick={() => logout()}><FlatButton {...this.props} label="Add Job" /></a></Link>
        <Link to="/"><a onClick={() => logout()}><FlatButton {...this.props} label="Log Out" /></a></Link>
      </div>
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
    const navStyle = {
      backgroundColor: blue500,
    };

    const divStyle = {
      backgroundColor: grey200,
    };

    return (
    <div style={divStyle}>
        <AppBar
          style={navStyle}
          title="Peribit Jobs"
          iconElementLeft={<IconButton><LeftMenu /></IconButton>}
          iconElementRight={this.props.profile ? <Logged /> : <Login />}
        />
        <div className="Site-page">{this.props.children}</div>
    </div>
    );
  }
}

export default connectProfile(Nav);

// Add below for pic and info on user
        // <div className="Site" style={divStyle}>
        //   <div className="Site-header">{this.renderUserControls()}</div>
        //   <div className="Site-page">{this.props.children}</div>
        // </div>
