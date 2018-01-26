import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Colors from '../../assets/colors';
import MessagePropType from '../../utils/IntlProptype';
import Title from '../Title';
import Subtitle from '../Subtitle';

const Description = styled.p`
  font-weight: 300;
  margin-bottom: 0;
  color: ${Colors.grey};
`;

class SimpleDescriptionBox extends React.PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div>
        {title && 
          <Title>
            <FormattedMessage {...title} />
          </Title>
        }
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
  title: MessagePropType,
  subtitle: MessagePropType.isRequired,
  description: MessagePropType.isRequired,
};

export default SimpleDescriptionBox;
