import React from 'react';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import { FormattedMessage } from 'react-intl';

import Dimens from '../../assets/dimens';
import AnchorsName from '../../constants';
import messages from '../../messages';
import MenuList from '../MenuList';

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
  margin-bottom: ${Dimens.boxSeparation};
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
        <MenuList />
      </Wrapper>
    );
  }
}

export default MainMenu;
