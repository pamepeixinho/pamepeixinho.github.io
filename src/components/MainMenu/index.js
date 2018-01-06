import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';

import AnchorsName from '../../constants';

const Anchor = styled(Scrollchor)`
  margin: 5px;
`;

const Wrapper = styled.div`
  overflow: auto;
  padding: 5px;
`;

class MainMenu extends React.PureComponent {

  goTo = (anchorName) => `#${anchorName}`

  experience = this.goTo(AnchorsName.experience)
  education = this.goTo(AnchorsName.education)
  projects = this.goTo(AnchorsName.projects)
  events = this.goTo(AnchorsName.events)
  articles = this.goTo(AnchorsName.articles)
  awards = this.goTo(AnchorsName.awards)
  skills = this.goTo(AnchorsName.skills)

  render() {
    return (
      <Wrapper>
        <Anchor to="">About</Anchor>
        <Anchor to={this.experience}>Experience</Anchor>
        <Anchor to={this.education}>Education</Anchor>
        <Anchor to={this.projects}>Projects</Anchor>
        <Anchor to={this.articles}>Articles</Anchor>
        <Anchor to={this.awards}>Awards</Anchor>
        <Anchor to={this.events}>Events</Anchor>
        <Anchor to={this.skills}>Skills</Anchor>
      </Wrapper>
    );
  }
}

export default MainMenu;
