import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import globalMessages from '../../../messages';

class Events extends React.Component {
  render() {
    return (
      <Section title={globalMessages.events} id={AnchorsName.events} >
        <p>wvc?</p>
        <p>sicfei</p>
        <p>Inovafei?</p>
        <p>react meetup</p>
        <p>futuro = developers week</p>
      </Section>
    );
  }
}

export default Events;
