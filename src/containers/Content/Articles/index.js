import React from 'react';
import styled from 'styled-components';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';

class Articles extends React.Component {
  render() {
    return (
      <Section title="Articles" id={AnchorsName.articles} >
        <p> teste </p>
      </Section>
    );
  }
}

export default Articles;
