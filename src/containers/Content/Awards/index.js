import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import globalMessages from '../../../messages';

class Awards extends React.Component {
  render() {
    return (
      <Section title={globalMessages.awards} id={AnchorsName.awards}>
        <p> inovafei </p>
        <p> destaque academico 2017 </p>
      </Section>
    );
  }
}

export default Awards;
