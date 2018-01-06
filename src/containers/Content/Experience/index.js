import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import SummaryBox from '../../../components/SummaryBox';

class Experience extends React.Component {
  render() {
    return (
      <Section title="Experience" id={AnchorsName.experience}>
        <SummaryBox
          title="teste"
          subtitle="subtitle"
          description="subtitle descr"
          date="date"
        />
      </Section>
    );
  }
}

export default Experience;
