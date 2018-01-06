import React from 'react';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';

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
      <Grid container justify="center">
        <Grid item md={8}>
          <MainMenu />
          <About />
          <Content />
        </Grid>
      </Grid>
      </Wrapper>
    );
  }
}

export default App;
