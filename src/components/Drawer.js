import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import AppBar from 'material-ui/AppBar';

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
          <MenuItem onTouchTap={this.handleClose}>About</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Profile</MenuItem>
        </Drawer>
      </div>
    );
  }
}