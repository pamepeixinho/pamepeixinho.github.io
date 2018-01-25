import React from 'react';

import Grid from 'material-ui/Grid';

import Section from '../../../components/Section';
import DescriptionBorderBox from '../../../components/DescriptionBorderBox';
import AnchorsName from '../../../constants';
import globalMessages from '../../../messages';
import messages from './messages';

class Projects extends React.Component {
  render() {
    return (
      <Section title={globalMessages.projects} id={AnchorsName.projects}>
        <Grid container justify="center">
          <DescriptionBorderBox
            title={messages.icTitle}
            subtitle={messages.icSubtitle}
            description={messages.icDescription}
          />
          <DescriptionBorderBox
            title={messages.marathonTitle}
            subtitle={messages.marathonSubtitle}
            description={messages.marathonDescription}
          />
          <DescriptionBorderBox
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
