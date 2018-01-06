import React from 'react';
import styled from 'styled-components';

import AnchorsName from '../../constants';

const Div = styled.div`
  background-color: red;
  margin-bottom: 16px;
  height: 200px
`;

class Content extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Div id={AnchorsName.experience}>
          experience
        </Div>

        <Div id={AnchorsName.education}>
          education
        </Div>

        <Div id={AnchorsName.projects}>
          projects
        </Div>

        <Div id={AnchorsName.events}>
          events
        </Div>

        <Div id={AnchorsName.articles}>
          articles
        </Div>

        <Div id={AnchorsName.awards}>
          awards
        </Div>

        <Div id={AnchorsName.skills}>
          skills
        </Div>

        {/* <footer id="footer"></footer> */}
      </React.Fragment>
    );
  }
}

export default Content;
