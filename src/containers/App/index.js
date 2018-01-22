import React from 'react';
import styled from 'styled-components';

import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

import MainMenu from '../../components/MainMenu';
import BurguerMenu from '../../components/BurgerMenu';
import Dimens from '../../assets/dimens';
import About from '../../components/About';
import Content from '../../containers/Content';

const Wrapper = styled.div`
  background-color: #F8F8F8;
  color: #646464;
`;

const ContentWrapper = styled.div`
  background-color: white;
  max-width: ${Dimens.maxWidthGrid};
  padding: ${Dimens.defaultSpacing};
  text-align: center;
  margin: 0px auto;
`;

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Grid container justify="center">
            <Grid item xs={12} sm={10} md={8}>
              <Hidden mdUp>
                <BurguerMenu />
              </Hidden>
              <Hidden smDown>
                <MainMenu />
              </Hidden>
              <About />
              <Content />
            </Grid>
          </Grid>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default App;
