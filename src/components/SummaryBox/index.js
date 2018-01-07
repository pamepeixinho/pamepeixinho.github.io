import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Grid from 'material-ui/Grid';

import Colors from '../../assets/colors';
import MessagePropType from '../../utils/IntlProptype';
import messages from './messages';

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.grey}
`;

const Subtitle = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.lightGrey}
`;

const Description = styled.p`
  font-weight: 300;
  color: ${Colors.grey}
`;

const DateDescription = styled.p`
  font-size: 16px;
  color: ${Colors.primary}
`;

const Wrapper = styled(Grid)`
  text-align: left;
`;

class SummaryBox extends React.PureComponent {
  render() {
    const { startDate, endDate } = this.props;
    return (
      <Wrapper container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <Title>
            <FormattedMessage {...this.props.title} />
          </Title>
          <Subtitle>
            <FormattedMessage {...this.props.subtitle} />
          </Subtitle>
          <Description>
            <FormattedMessage {...this.props.description} />
          </Description>
          <DateDescription>
            <FormattedMessage
              {...messages.dateInterval}
              values={{
                startDate,
                endDate,
              }}
            />
          </DateDescription>
        </Grid>
      </Wrapper>
    );
  }
}

SummaryBox.propTypes = {
  title: MessagePropType.isRequired,
  subtitle: MessagePropType.isRequired,
  description: MessagePropType.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default SummaryBox;
