import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import globalMessages from '../../../messages';

class Projects extends React.Component {
  render() {
    return (
      <Section title={globalMessages.projects} id={AnchorsName.projects}>
        <p> teste </p>
      </Section>
    );
  }
}

export default Projects;
