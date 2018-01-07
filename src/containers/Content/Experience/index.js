import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import SummaryBox from '../../../components/SummaryBox';

import messages from './messages';
import globalMessages from '../../../messages';

class Experience extends React.Component {
  render() {
    return (
      <Section
        id={AnchorsName.experience}
        title={globalMessages.experience}
      >
        <SummaryBox
          title={messages.sweTitle}
          subtitle={messages.quintoAndar}
          description={messages.sweDescription}
          startDate="date"
          endDate="date"
        />
        <SummaryBox
          title={messages.sweInternTitle}
          subtitle={messages.quintoAndar}
          description={messages.sweInternDescription}
          startDate="date"
          endDate="date"
        />
      </Section>
    );
  }
}

export default Experience;
