import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import MenuList from '../MenuList';
import Colors from '../../assets/colors';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '20px',
    left: '36px',
    top: '36px',
  },
  bmMenuWrap: {
    left: '0px',
    top: '0px',
  },
  bmBurgerBars: {
    height: '2px',
    width: '24px',
    background: '#373a47',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: Colors.grey,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
  },
  bmOverlay: {
    top: '0px',
    left: '0px',
    background: 'rgba(0, 0, 0, 0.3)',
  }
}


class BurguerMenu extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen })  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <Menu
        width={ 256 }
        styles={styles}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}>
        <MenuList data-side-menu onClick={this.closeMenu} />
      </Menu>
    );
  }
}


export default BurguerMenu;
