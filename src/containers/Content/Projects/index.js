import React from 'react';
import styled from 'styled-components';

import Grid from 'material-ui/Grid';

import Section from '../../../components/Section';
import DescriptionBorderBox from '../../../components/DescriptionBorderBox';
import AnchorsName from '../../../constants';
import globalMessages from '../../../messages';
import messages from './messages';

const quickSlothGithub = 'https://github.com/quicksloth';
const quickSlothJetbrains = 'https://plugins.jetbrains.com/plugin/10216-quicksloth';
const icGithub = 'https://github.com/pamepeixinho/ic-project-feature-extraction';

const Link = styled.a`
  color: #646464;
  &:hover {
    filter: contrast(3);
  }
`;

class Projects extends React.Component {
  render() {
    return (
      <Section title={globalMessages.projects} id={AnchorsName.projects}>
        <Grid container justify="center">
          <DescriptionBorderBox
            title={messages.quickslothTitle}
            subtitle={messages.quickslothSubtitle}
            description={messages.quickslothDescription}
          >
            <Link href={quickSlothGithub}> github.com/quicksloth</Link>
            <Link href={quickSlothJetbrains}> plugins.jetbrains/quicksloth</Link>
          </DescriptionBorderBox>
          <DescriptionBorderBox
            title={messages.icTitle}
            subtitle={messages.icSubtitle}
            description={messages.icDescription}
          >
            <Link href={icGithub}> github.com/ic-project-feature-extraction</Link>
          </DescriptionBorderBox>
          <DescriptionBorderBox
            title={messages.marathonTitle}
            subtitle={messages.marathonSubtitle}
            description={messages.marathonDescription}
          />
        </Grid>
      </Section>
    );
  }
}

export default Projects;
