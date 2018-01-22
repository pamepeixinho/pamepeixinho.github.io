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
        <MenuList data-side-menu={false} />
      </Wrapper>
    );
  }
}

export default MainMenu;
