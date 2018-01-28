import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Colors from '../../assets/colors';
import MessagePropType from '../../utils/IntlProptype';
import Title from '../Title';
import Subtitle from '../Subtitle';

const Description = styled.div`
  font-weight: 300;
  margin-bottom: 0;
  color: ${Colors.grey};
`;

class SimpleDescriptionBox extends React.PureComponent {
  renderBullets = (key, bullet) => {
    return (
      <li key={key}>
        <FormattedMessage {...bullet} />
      </li>
    );
  }

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
          <ul>
            {this.props.descriptionBullets.map((bullet, index) => this.renderBullets(index, bullet))}
          </ul>
        </Description>
      </div>
    );
  }
}

SimpleDescriptionBox.propTypes = {
  title: MessagePropType,
  subtitle: MessagePropType.isRequired,
  description: MessagePropType.isRequired,
  descriptionBullets: PropTypes.arrayOf(MessagePropType),
};

SimpleDescriptionBox.defaultProps = {
  descriptionBullets: [],
};

export default SimpleDescriptionBox;
