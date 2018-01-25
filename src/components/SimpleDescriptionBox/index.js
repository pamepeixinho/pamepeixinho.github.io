import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Colors from '../../assets/colors';
import MessagePropType from '../../utils/IntlProptype';

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.grey};
`;

const Subtitle = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.lightGrey};
`;

const Description = styled.p`
  font-weight: 300;
  margin-bottom: 0;
  color: ${Colors.grey};
`;

class SimpleDescriptionBox extends React.PureComponent {
  render() {
    return (
      <div>
        <Title>
          <FormattedMessage {...this.props.title} />
        </Title>
        <Subtitle>
          <FormattedMessage {...this.props.subtitle} />
        </Subtitle>
        <Description>
          <FormattedMessage {...this.props.description} />
        </Description>
      </div>
    );
  }
}

SimpleDescriptionBox.propTypes = {
  title: MessagePropType.isRequired,
  subtitle: MessagePropType.isRequired,
  description: MessagePropType.isRequired,
};

export default SimpleDescriptionBox;
