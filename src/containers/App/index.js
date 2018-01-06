import React from 'react';
import styled from 'styled-components';

import MainMenu from '../../components/MainMenu';
import dimens from '../../assets/dimens';
import About from '../../components/About';
import Content from '../../containers/Content';

const Wrapper = styled.div`
  max-width: ${dimens.maxWidthGrid};
  padding: ${dimens.sideSpacing};
  text-align: center;
  margin: 0px auto;
`;

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <MainMenu />
        <About />
        <Content />
      </Wrapper>
    );
  }
}

export default App;
