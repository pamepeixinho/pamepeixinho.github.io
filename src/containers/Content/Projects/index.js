import React from 'react';

import Grid from 'material-ui/Grid';

import Section from '../../../components/Section';
import ProjectBox from '../../../components/ProjectBox';
import AnchorsName from '../../../constants';
import globalMessages from '../../../messages';
import messages from './messages';

class Projects extends React.Component {
  render() {
    return (
      <Section title={globalMessages.projects} id={AnchorsName.projects}>
        <Grid container justify="center">
          <ProjectBox
            title={messages.icTitle}
            subtitle={messages.icSubtitle}
            description={messages.icDescription}
          />
          <ProjectBox
            title={messages.marathonTitle}
            subtitle={messages.marathonSubtitle}
            description={messages.marathonDescription}
          />
          <ProjectBox
            title={messages.quickslothTitle}
            subtitle={messages.quickslothSubtitle}
            description={messages.quickslothDescription}
          />
        </Grid>
      </Section>
    );
  }
}

export default Projects;