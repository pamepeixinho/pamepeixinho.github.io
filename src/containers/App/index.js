import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../logo.svg';

const Wrapper = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
class App extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <Logo src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Wrapper>
    );
  }
}

export default App;
