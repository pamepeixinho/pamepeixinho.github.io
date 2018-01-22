import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu'

import MainMenu from '../MainMenu';

class BurguerMenu extends React.PureComponent {
  render() {
    return (
      <Menu>
        <MainMenu defaultClassName="menu-item" />
      </Menu>
    );
  }
}


export default BurguerMenu;
