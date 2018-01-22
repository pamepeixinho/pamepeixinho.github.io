import React from 'react';
import styled from 'styled-components';

import Dimens from '../../assets/dimens';
import MenuList from '../MenuList';

const Wrapper = styled.div`
  overflow: auto;
  padding: 5px;
  margin-bottom: ${Dimens.boxSeparation};
`;

class MainMenu extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <MenuList />
      </Wrapper>
    );
  }
}

export default MainMenu;
