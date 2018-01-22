import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'

import MainMenu from '../MainMenu';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '20px',
    left: '36px',
    top: '36px'
  },
  bmMenuWrap: {
    left: '0px',
    top: '0px'
  },
  bmBurgerBars: {
    height: '2px',
    width: '24px',
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    top: '0px',
    left: '0px',
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


class BurguerMenu extends React.PureComponent {
  render() {
    return (
      <Menu styles={styles}>
        <MainMenu />
      </Menu>
    );
  }
}


export default BurguerMenu;
