import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import globalMessages from '../../../messages';

class Education extends React.Component {
  render() {
    return (
      <Section title={globalMessages.education} id={AnchorsName.education}>
        <p> teste </p>
      </Section>
    );
  }
}

export default Education;
