import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import { FormattedMessage } from 'react-intl';

import Colors from '../../assets/colors';
import AnchorsName from '../../constants';
import messages from '../../messages';

const Anchor = styled(Scrollchor)`
  padding: 8px;
  text-decoration: none;
  color: ${({ sideMenu }) => sideMenu ? Colors.lightGrey : Colors.grey};
  font-weight: 300;
  &:hover {
    color: #2B3034;
    text-decoration: underline;
  }
`;

class MenuList extends React.PureComponent {

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
        [<Anchor to="" {...this.props}>
          <FormattedMessage {...messages.about} />
        </Anchor>,
        <Anchor to={this.experience} {...this.props}>
          <FormattedMessage {...messages.experience} />
        </Anchor>,
        <Anchor to={this.education} {...this.props}>
          <FormattedMessage {...messages.education} />
        </Anchor>,
        <Anchor to={this.projects} {...this.props}>
          <FormattedMessage {...messages.projects} />
        </Anchor>,
        <Anchor to={this.awards} {...this.props}>
          <FormattedMessage {...messages.awards} />
        </Anchor>,
        <Anchor to={this.articles} {...this.props}>
          <FormattedMessage {...messages.articles} />
        </Anchor>,
        <Anchor to={this.skills} {...this.props}>
          <FormattedMessage {...messages.skills} />
        </Anchor>,
        <Anchor to={this.events} {...this.props}>
          <FormattedMessage {...messages.events} />
        </Anchor>]
    );
  }
}

export default MenuList;
