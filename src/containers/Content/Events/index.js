import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import Title from '../../../components/Title';
import SummaryBox from '../../../components/SummaryBox';
import globalMessages from '../../../messages';
import messages from './messages';

const LeftAlign = styled.div`
  text-align: left;
`;

const SectionSubtitles = Title.extend`
  text-decoration: underline;
  margin-bottom: 8px;
`.withComponent('div');


class Events extends React.Component {
  render() {
    const grupySpDate = this.props.intl.formatDate(new Date(2015, 10), {
      year: 'numeric',
      month: 'short',
    });

    return (
      <Section title={globalMessages.events} id={AnchorsName.events} >
        {/* <p>wvc?</p>
        <p>sicfei</p>
        <p>Inovafei?</p>
        <p>react meetup</p>
        <p>futuro = developers week</p> */}
        <LeftAlign>
          <SectionSubtitles>
            <FormattedMessage {...messages.speaker} />
          </SectionSubtitles>
          <SummaryBox
            subtitle={messages.grupySp}
            description={messages.grupySpDescription}
            startDate={grupySpDate}
          />
          <SummaryBox
            subtitle={messages.grupySp}
            description={messages.grupySpDescription}
            startDate={grupySpDate}
          />
          <SummaryBox
            subtitle={messages.grupySp}
            description={messages.grupySpDescription}
            startDate={grupySpDate}
          />
        </LeftAlign>

        <LeftAlign>
          <SectionSubtitles>
            <FormattedMessage {...messages.attendee} />
          </SectionSubtitles>
          <SummaryBox
            subtitle={messages.grupySp}
            description={messages.grupySpDescription}
            startDate={grupySpDate}
          />
          <SummaryBox
            subtitle={messages.grupySp}
            description={messages.grupySpDescription}
            startDate={grupySpDate}
          />
        </LeftAlign>
      </Section>
    );
  }
}

Events.propType = {
  intl: intlShape.isRequired,
};

export default injectIntl(Events);
