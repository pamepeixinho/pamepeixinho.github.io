import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import globalMessages from '../../../messages';
import SummaryBox from '../../../components/SummaryBox';

import messages from './messages';

class Articles extends React.Component {
  render() {
    const sweStartDate = this.props.intl.formatDate(new Date(2017, 11), {
      year: 'numeric',
      month: 'short',
    });

    return (
      <Section title={globalMessages.articles} id={AnchorsName.articles} >
        <SummaryBox
          title={messages.wvcTitle}
          subtitle={messages.wvcSubtitle}
          description={messages.wvcDescription}
          startDate={sweStartDate}
        />
      </Section>
    );
  }
}

Articles.propType = {
  intl: intlShape.isRequired,
};

export default injectIntl(Articles);
