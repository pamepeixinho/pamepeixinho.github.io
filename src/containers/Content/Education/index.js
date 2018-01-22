import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import AnchorsName from '../../../constants';
import SummaryBox from '../../../components/SummaryBox';
import Section from '../../../components/Section';
import messages from './messages';
import globalMessages from '../../../messages';

class Education extends React.Component {
  render() {
    const { intl } = this.props;
    const feiStartDate = intl.formatDate(new Date(2014, 1), {
      year: 'numeric',
      month: 'short',
    });

    const feiEndDate = intl.formatDate(new Date(2017, 11), {
      year: 'numeric',
      month: 'short',
    });

    return (
      <Section
        title={globalMessages.education}
        id={AnchorsName.education} >
        <SummaryBox
          title={messages.feiTitle}
          subtitle={messages.feiSubtitle}
          description={messages.feiDescription}
          startDate={feiStartDate}
          endDate={feiEndDate}
        />
        <p>cursos</p>
      </Section>
    );
  }
}

Education.propType = {
  intl: intlShape.isRequired,
};

export default injectIntl(Education);
