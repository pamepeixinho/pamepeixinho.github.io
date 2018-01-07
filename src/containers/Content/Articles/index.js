import React from 'react';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import globalMessages from '../../../messages';

class Articles extends React.Component {
  render() {
    return (
      <Section title={globalMessages.articles} id={AnchorsName.articles} >
        <p>Artigo WVC - explicacao - resumo simples  - link - link github</p>
      </Section>
    );
  }
}

export default Articles;
