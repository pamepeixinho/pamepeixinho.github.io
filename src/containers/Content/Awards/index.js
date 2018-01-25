import React from 'react';

import Grid from 'material-ui/Grid';

import Section from '../../../components/Section';
import DescriptionBorderBox from '../../../components/DescriptionBorderBox';
import AnchorsName from '../../../constants';
import globalMessages from '../../../messages';
import FeiInnovationImg from '../../../images/feiInnovation2017.jpg';
import AcademicHighlightImg from '../../../images/academicHighlight2017.jpg';
import messages from './messages';

class Awards extends React.Component {
  render() {
    return (
      <Section title={globalMessages.awards} id={AnchorsName.awards}>
        <Grid container justify="center">
          <DescriptionBorderBox
            imageSrc={FeiInnovationImg}
            title={messages.feiInnovationTitle}
            subtitle={messages.feiInnovationSubtitle}
            description={messages.feiInnovationDescription}
          />
          <DescriptionBorderBox
            imageSrc={AcademicHighlightImg}
            title={messages.academicHighlightTitle}
            subtitle={messages.academicHighlightSubtitle}
            description={messages.academicHighlightDescription}
          />
        </Grid>
      </Section>
    );
  }
}

export default Awards;
