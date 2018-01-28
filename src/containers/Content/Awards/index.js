import React from 'react';
import { injectIntl } from 'react-intl';

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
    const { intl } = this.props;
    const end2017 = intl.formatDate(new Date(2017, 11), {
      year: 'numeric',
      month: 'short',
    });

    return (
      <Section title={globalMessages.awards} id={AnchorsName.awards}>
        <Grid container justify="center">
          <DescriptionBorderBox
            threeColumn={false}
            imageSrc={FeiInnovationImg}
            title={messages.feiInnovationTitle}
            subtitle={messages.feiInnovationSubtitle}
            description={messages.feiInnovationDescription}
            date={end2017}
          />
          <DescriptionBorderBox
            threeColumn={false}
            imageSrc={AcademicHighlightImg}
            title={messages.academicHighlightTitle}
            subtitle={messages.academicHighlightSubtitle}
            description={messages.academicHighlightDescription}
            date={end2017}
          />
        </Grid>
      </Section>
    );
  }
}

export default injectIntl(Awards);
