import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import { FormattedMessage } from 'react-intl';

import AnchorsName from '../../constants';
import messages from '../../messages';

const Anchor = styled(Scrollchor)`
  padding: 8px;
  text-decoration: none;
  color: #646464;
  font-weight: 300;
  &:hover {
    color: #2B3034;
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  overflow: auto;
  padding: 5px;
  margin-bottom: 60px;
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
        <Anchor to="">
          <FormattedMessage {...messages.about} />
        </Anchor>
        <Anchor to={this.experience}>
          <FormattedMessage {...messages.experience} />
        </Anchor>
        <Anchor to={this.education}>
          <FormattedMessage {...messages.education} />
        </Anchor>
        <Anchor to={this.projects}>
          <FormattedMessage {...messages.projects} />
        </Anchor>
        <Anchor to={this.awards}>
          <FormattedMessage {...messages.awards} />
        </Anchor>
        <Anchor to={this.articles}>
          <FormattedMessage {...messages.articles} />
        </Anchor>
        <Anchor to={this.skills}>
          <FormattedMessage {...messages.skills} />
        </Anchor>
        <Anchor to={this.events}>
          <FormattedMessage {...messages.events} />
        </Anchor>
      </Wrapper>
    );
  }
}

export default MainMenu;
