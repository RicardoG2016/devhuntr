import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import {logout} from '../../auth0/auth';
import './Nav.css'

export default class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <NavigationMenu
          {...this.props}
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        > 
          <MenuItem onTouchTap={this.handleClose}><Link className="link" to="/" >Home</Link></MenuItem>       
          <MenuItem onTouchTap={this.handleClose}><Link className="link" to="/profile/edit" >Profile</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link className="link" to="/" ><a className="link" onClick={() => logout()}>Logout</a></Link></MenuItem> 
        </Drawer>
      </div>
    );
  }
}