import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Colors from '../../assets/colors';
import Dimens from '../../assets/dimens';
import MessagePropType from '../../utils/IntlProptype';

const LineSeparator = styled.div`
  margin-top: ${Dimens.defaultSpacing};
  height: 1px;
  background-color: ${`${Colors.secondary}5c`};
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: ${Colors.primary};
  margin-bottom: ${Dimens.boxSeparation};
`;

const Wrapper = styled.div`
  margin-bottom: ${Dimens.defaultSpacing};
`;

class Section extends React.Component {
  render() {
    return (
      <Wrapper id={this.props.id}>
        <Title>
          <FormattedMessage {...this.props.title} />
        </Title>
        {this.props.children}
        <LineSeparator />
      </Wrapper>
    );
  }
}

Section.proptype = {
  id: PropTypes.string.isRequired,
  title: MessagePropType.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
