import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Scrollchor from 'react-scrollchor';
import { FormattedMessage } from 'react-intl';

import Dimens from '../../assets/dimens';
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
    // TODO: DRY
    return (
      <Wrapper>
        <Anchor id="about" to="" className={this.props.defaultClassName}>
          <FormattedMessage {...messages.about} />
        </Anchor>
        <Anchor id="experience" to={this.experience} className={this.props.defaultClassName}>
          <FormattedMessage {...messages.experience} />
        </Anchor>
        <Anchor id="education" to={this.education} className={this.props.defaultClassName}>
          <FormattedMessage {...messages.education} />
        </Anchor>
        <Anchor id="projects" to={this.projects} className={this.props.defaultClassName}>
          <FormattedMessage {...messages.projects} />
        </Anchor>
        <Anchor id="awards" to={this.awards} className={this.props.defaultClassName}>
          <FormattedMessage {...messages.awards} />
        </Anchor>
        <Anchor id="articles" to={this.articles} className={this.props.defaultClassName}>
          <FormattedMessage {...messages.articles} />
        </Anchor>
        <Anchor id="skills" to={this.skills} className={this.props.defaultClassName}>
          <FormattedMessage {...messages.skills} />
        </Anchor>
        <Anchor id="events" to={this.events} className={this.props.defaultClassName}>
          <FormattedMessage {...messages.events} />
        </Anchor>
      </Wrapper>
    );
  }
}

MainMenu.propTypes = {
  defaultClassName: PropTypes.string,
};

MainMenu.defaultProps = {
  defaultClassName: '',
};

export default MainMenu;
