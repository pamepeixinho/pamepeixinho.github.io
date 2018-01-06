import React from 'react';
import styled from 'styled-components';

import dimens from '../../assets/dimens';
import Header from '../../components/Header';
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
        <Header />
        <Content />
      </Wrapper>
    );
  }
}

export default App;
