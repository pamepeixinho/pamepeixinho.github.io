import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import SummaryBox from '../../../components/SummaryBox';
import SectionSubtitle from '../../../components/SectionSubtitle';
import globalMessages from '../../../messages';
import messages from './messages';

const LeftAlign = styled.div`
  text-align: left;
`;

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
          <SectionSubtitle>
            <FormattedMessage {...messages.speaker} />
          </SectionSubtitle>
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
          <SectionSubtitle>
            <FormattedMessage {...messages.attendee} />
          </SectionSubtitle>
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
